class Node {
  constructor(nodeData, nextNode) {
    this.nodeData = nodeData;
    this.nextNode = nextNode;
  }
}

class LinkList {
  constructor() {
    this.htmlChildren = document.body.children;
    this.nodeList = [];
    for (let i = 0; i < this.htmlChildren.length; i++) {
      let node = new Node(this.htmlChildren[i], this.htmlChildren[i + 1]);
      this.nodeList.push(node);
    }
    console.log(this.htmlChildren);
    console.log(this.nodeList);
  }
  getFirstNode = () => this.nodeList[0];
  getLastNode = () => this.nodeList[this.nodeList.length - 1];
  popNode = () => this.nodeList.pop();
  clearNodes = () => {
    while (this.nodeList.length > 0) {
      this.popNode();
    }
  };
}

linkList = new LinkList();

console.log(linkList.nodeList);
console.log(linkList.getFirstNode());
console.log(linkList.getLastNode());
console.log(linkList.popNode());
console.log(linkList.nodeList);
console.log(linkList.clearNodes());
console.log(linkList.nodeList);
