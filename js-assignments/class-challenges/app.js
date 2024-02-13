class ItemManager {
  atStart = true;
  constructor(itemArray) {
    this.itemArray = itemArray;
  }
  flipFlopPop() {
    while (this.itemArray.length > 0) {
      if (this.atStart) {
        console.log(this.itemArray.shift());
        this.atStart = false;
      } else {
        console.log(this.itemArray.pop());
        this.atStart = true;
      }
    }
  }
}

fruitManager = new ItemManager(["apple", "banana", "kiwi", "orange", "peach"]);
fruitManager.flipFlopPop();

numManager = new ItemManager([1, 2, 3, 4, 5]);
numManager.flipFlopPop();
