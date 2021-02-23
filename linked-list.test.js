const LinkedList = require('./LinkedList')
const list = new LinkedList();

describe('linked list', () => {
  it('has an add to head, add to tail, and size methods', () => {
    expect(typeof LinkedList.prototype.removeHead).toEqual('function')
    expect(typeof LinkedList.prototype.addToTail).toEqual('function')
    expect(typeof LinkedList.prototype.contains).toEqual('function')
  })

  test('add to tail adds a node to the end of the list', () => {
    list.addToTail(1);
    expect(list.tail.value).toBe(1)
    expect(list.head.value).toBe(1)

    expect(list.contains(1)).toBe(true)

    list.addToTail(2);
    expect(list.head.value).toBe(1)
    expect(list.tail.value).toBe(2);
  })

  test('remove from head returns the head value and removes that node', () => {
    expect(list.removeHead()).toBe(1);
    expect(list.head.value).toBe(2);
  })

  it('should designate a new tail when new nodes are added', function() {
    var linkedList = new LinkedList();
    linkedList.addToTail(4);
    expect(linkedList.tail.value).toEqual(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).toEqual(5);
  });

  test('adding multiple nodes to tail populates list in correct order', () => {
    list.addToTail(3);
    list.addToTail(4);

    expect(list.head.value).toBe(2)
    expect(list.contains(3)).toBe(true);
    expect(list.tail.value).toBe(4)
  })
})