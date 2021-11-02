var arr1 = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
var a3 = [3,'a',2,4,9];
var a2 = new Array();
for(var i = 0 ; i < a3.length ; i++){
    var tam = a3[i];
    var k = 0;
    for(var j = 0 ; j < arr1.length ; j++){
        if(tam == arr1[j]){
            k++;
        }
    }
    a2[i] = k;
}
console.log(a2);
var index = 0;
for(var i = 0 ; i < a2.length ; i++){
    if(a2[index] <= a2[i]){
        index = i;
    }
}
for(var i = 0 ; i <a3.length ; i++){
    if(index == i){
        console.log('Phần tử xuất hiện nhiều nhất trong mảng là:' + a3[index]);
        break;
    }
}



