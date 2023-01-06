var obj={n:5};
var multiply=function(a,b){
    return this.n*a*b;
};
var arr=[2,3];
var bound=multiply.bind(obj);
console.log(bound(2,3));