"use strict";
exports.__esModule = true;
var str1 = "cra";
var str2 = "car";
function IsAnagram(str1, str2) {
    var list1 = [];
    var list2 = [];
    var i;
    var j;
    for (i = 0; i < str1.length; i++) {
        list1.push(str1[i]);
    }
    for (j = 0; j < str2.length; j++) {
        list2.push(str2[j]);
    }
    list1.sort();
    list2.sort();
    for (i = 0; i < list1.length && list1.length == list2.length; i++) {
        if (list1[i] != list2[i]) {
            return false;
        }
    }
    return list1.length == list2.length ? true : false;
}
console.log(IsAnagram(str1, str2));
