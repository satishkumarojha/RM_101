function shadow(){
    var a ="hello";
    if(true){
        var a ="hi";
        console.log(a);
    }
    console.log(a);
}
shadow();