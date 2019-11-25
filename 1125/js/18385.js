function drawMesg(X){
    
    for(varX=1;X<=200;X++){
        document.write("hello<br>");   
    }

}
function foo(X){
    if(X==1){
        return 1;
    }else{
        return X*foo(X-1);
     }
}
function bar(p,q){
    var ans=1;
    for(var i=1 ;i<=q; i++){
        ans=ans*p;p--;
    }
    return ans;
}
