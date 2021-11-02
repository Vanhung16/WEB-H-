var arr1 = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];

var arr2 = [3,'a',2,4,9];

var arr3 = new Array();

for(var i = 0 ; i < arr2.length ; i++){
    var tam = arr2[i];
    var k = 0;
    for(var j = 0 ; j <arr1.length ; j++){
        if(tam == arr1[j]){
            k++;
        }
    }
    arr3[i] = k;
}
console.log(arr3);
var index;
var arr4 = new Array();
for(var i = 0 ; i < arr3.length ; i++){
    if(arr3[i] >= 2){
         index = i;
         arr4[i] = arr2[index];
        // break;
    }
}
console.log('các phần tử trùng lặp trong mảng là: ' + arr4);