var obj={n:5};
var multiply=function(a,b){
    return this.n*a*b;
};
var arr=[2,3];
console.log(multiply.apply(obj,arr));