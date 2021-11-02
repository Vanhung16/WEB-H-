var color = ["Blue","Green","Red","Orange","Violet","Indigo","Yellow"];

var name1 = ["th","st","nd","rd"];

for(var i = 0 ; i < color.length ; i++){
    var dv = (i+1) % 10;
    if(dv == 1){
        console.log(i+1 + name1[dv] + " choice is " + color[i]);
    }
    if(dv == 2){
        console.log(i+1 + name1[dv] + " choice is " + color[i]);
    }
    if(dv == 3){
        console.log(i+1 + name1[dv] + " choice is " + color[i]);
    }
    if(dv == 4||dv == 5||dv == 6||dv == 7||dv == 8||dv == 9||dv == 0){
        console.log(i+1 + name1[0] + " choice is " + color[i]);
    }
}
