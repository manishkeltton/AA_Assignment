export {};

class TestTrackers {
  tempStore: number[] = [];

  insert(temp: number) {
    this.tempStore.push(temp);
  }
  get_max(): number {
    this.tempStore.sort((a: number, b: number): number => a - b);
    return this.tempStore[this.tempStore.length - 1];
  }
  get_min(): number {
    this.tempStore.sort((a: number, b: number): number => a - b);
    return this.tempStore[0];
  }
  get_mean(): number {
    let i: number;
    let sum: number = 0;
    for (i = 0; i < this.tempStore.length; i++) {
      sum = sum + this.tempStore[i];
    }
    return sum / this.tempStore.length;
  }
  get_mode(): number {
    this.tempStore.sort((a: number, b: number): number => a - b);
    let count: number = 0;
    let max: number = 0;
    let i: number;
    for (i = 0; i < this.tempStore.length - 1; i++) {
      let p: number = 1;
      if (this.tempStore[i] == this.tempStore[i + 1]) {
        p++;
      } else {
        if (p >= count) {
          count = p;
          max = this.tempStore[i];
        }
      }
    }
    return max;
  }
}

let temprature = new TestTrackers();
temprature.insert(20);
temprature.insert(10);
temprature.insert(30);
temprature.insert(5);
temprature.insert(20);
console.log(temprature.get_max());
console.log(temprature.get_min());
console.log(temprature.get_mean());
console.log(temprature.get_mode());


