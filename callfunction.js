var obj={n:5};
var multiply=function(a){
    return this.n*a;
};
console.log(multiply.call(obj,2));