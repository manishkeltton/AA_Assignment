"use strict";
exports.__esModule = true;
var TestTrackers = /** @class */ (function () {
    function TestTrackers() {
        this.tempStore = [];
    }
    TestTrackers.prototype.insert = function (temp) {
        this.tempStore.push(temp);
    };
    TestTrackers.prototype.get_max = function () {
        this.tempStore.sort(function (a, b) { return a - b; });
        return this.tempStore[this.tempStore.length - 1];
    };
    TestTrackers.prototype.get_min = function () {
        this.tempStore.sort(function (a, b) { return a - b; });
        return this.tempStore[0];
    };
    TestTrackers.prototype.get_mean = function () {
        var i;
        var sum = 0;
        for (i = 0; i < this.tempStore.length; i++) {
            sum = sum + this.tempStore[i];
        }
        return sum / this.tempStore.length;
    };
    TestTrackers.prototype.get_mode = function () {
        this.tempStore.sort(function (a, b) { return a - b; });
        var count = 0;
        var max = 0;
        var i;
        for (i = 0; i < this.tempStore.length - 1; i++) {
            var p = 1;
            if (this.tempStore[i] == this.tempStore[i + 1]) {
                p++;
            }
            else {
                if (p >= count) {
                    count = p;
                    max = this.tempStore[i];
                }
            }
        }
        return max;
    };
    return TestTrackers;
}());
var temprature = new TestTrackers();
temprature.insert(20);
temprature.insert(10);
temprature.insert(30);
temprature.insert(5);
temprature.insert(20);
console.log(temprature.get_max());
console.log(temprature.get_min());
console.log(temprature.get_mean());
console.log(temprature.get_mode());
