var a={
    value:2,
    toString:function(){
        return ++ this.value
    }
}
if(a==3 && a==4){
    console.log(666);
}