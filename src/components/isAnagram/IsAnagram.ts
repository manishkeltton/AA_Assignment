export {};
let str1:string ="cra";
let str2:string = "car";

function IsAnagram(str1:string, str2:string):boolean{
    let list1:string[] = [];
    let list2:string[] = [];
    let i:number;
    let j:number;
    for(i=0;i<str1.length;i++){
        list1.push(str1[i]);
    }
    for(j=0;j<str2.length;j++){
        list2.push(str2[j]);
    }
    list1.sort();
    list2.sort();
    for ( i = 0; i < list1.length && list1.length == list2.length;i++) {
         if(list1[i] != list2[i]){
             return false;
         }
    }
    return list1.length == list2.length ? true : false;
}

console.log(IsAnagram(str1, str2));