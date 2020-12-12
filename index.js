class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      // let max = this.items.reduce(function (a, b) {
      //   return Math.max(a, b);
      // });
      return Math.max(...this.items);
      // return max;
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      // let max = this.items.reduce(function (a, b) {
      //   return Math.min(a, b);
      // });
      // return max;
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc, curr) => acc + curr);
    }
  }

  avg() {
    if (this.items.length === 0) {
     throw new Error("EmptySortedList");
    } else {
      return this.sum()/this.items.length
    }
  }
}

module.exports = SortedList;
