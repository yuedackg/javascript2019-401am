function drawMesg(x){
    
for(var x=1; x<=200; x++){
    document.write("hello<br>");
}

}
function foo(x){
    if(x==1){
        return 1;
    }else{
        return x*foo(x-1);
    }
}
function bar(p,q){
    var ans=1;
    for(var i=1 ;i<=q; i++){
        ans=ans*p;
        p--;
   
    }
    return ans;
}