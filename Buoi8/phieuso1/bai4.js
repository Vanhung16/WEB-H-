var st = "hello word";
var arr = new Array();
for(var i = 0 ; i < st.length ; i++){
    arr[i] = st.charAt(i);
}
console.log(arr.reverse().join(""));

// function reverse(str) {
//    var string=str.split("");
//    var arrStr=string.reverse();
//    return arrStr.join("");
//   }
//   var st = "hello word";
//   console.log(reverse(st));