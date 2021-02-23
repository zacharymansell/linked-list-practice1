const LinkedList = function() {
  const list = Object.create(LinkedList.prototype);
  list.tail = list.head = null;
  return list;
}

const Node = function(value) {
  const storage = Object.create(Node.prototype);
  storage.value = value;
  storage.next = null;
  return storage;
}

LinkedList.prototype.addToTail = function(value) {
  const node = new Node(value);
  if (this.tail === null) {
    this.tail = this.head = node;
  } else if (this.head === this.tail) {
    this.tail.next = this.head.next = this.tail = node;
  } else {
    this.tail = this.tail.next = node;
  }
}

LinkedList.prototype.removeHead = function() {
  if (this.head !== null) {
    const value = this.head.value;
    this.head = this.head.next
    return value;
  }
  return null;
}

LinkedList.prototype.contains = function(value) {
  let node = this.head;
  while (node !== null) {
    if (node.value === value) return true;
    node = node.next;
  }
  return false;
}

module.exports = LinkedList;