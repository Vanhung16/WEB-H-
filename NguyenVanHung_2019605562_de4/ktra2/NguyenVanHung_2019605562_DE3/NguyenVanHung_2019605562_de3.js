function checkSHH(x){
    var tong = 0;
    for(var i = 0 ; i < x ; i++){
        if(x % i == 0){
            tong += i;
        }
    }
    if(tong == x){
        return true;
    }
    else{
        return false;
    }
}
function myfunction(){
    var tong = 0;
    var dem = 0;
    var number = document.getElementById("songuyen").value;
    if(isNaN(number)  ||  number == ""){
        alert("du lieu sai");
    }
    for(var i = 1 ; i < number ; i++){
        if(checkSHH(i) == true)
        {
        tong += i;
        }
        else{
            dem++;
        }
    }
    if(dem == number ){
        document.getElementById("tong").value = 0;
    }
    else{
    document.getElementById("tong").value = tong;

    }
}
