export {};

class TestTrackers {
  tempStore: number[] = [];

  insert(temp: number) {
    this.tempStore.push(temp);
  }
  get_max(): number {
    this.tempStore.sort();
    return this.tempStore[this.tempStore.length - 1];
  }
  get_min():number {
      this.tempStore.sort();
      return this.tempStore[0];
  }
  get_mean(): number {
    let i:number;
    let sum:number = 0; 
    for(i=0;i<this.tempStore.length;i++){
        sum = sum + this.tempStore[i];
    }
    return sum/this.tempStore.length;
  }
  get_mode():number {
      let count:number = 0;
      let max: number = 0;
      let i: number ;
      for(i=0;i<this.tempStore.length-1;i++){
            let p:number=1;
            if(this.tempStore[i]==this.tempStore[i+1]){
               p++;
            }else{
               if(p>=count){
                   count=p;
                   max=this.tempStore[i];
               }
            }
      }
      return max;
  }
}

let temprature = new TestTrackers();