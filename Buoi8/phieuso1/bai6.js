var st = "Java thật vi diệu";
// var arr = st.split(" ");
// for(var i = 0 ; i < arr.length ; i++){
//     if(arr[0] == "Java"){
//         console.log("Chuỗi bắt đầu bằng Java");
//     }else{
//         console.log("Chuỗi không bắt đầu bằng java");
//     }
// }

function check(st){
    if(st.indexOf("Java") == 0){
        return "chuỗi bắt đầu bằng Java";
    }else{
        return "Chuỗi không bắt đầu bằng Java";
    }
}
console.log(check(st));

