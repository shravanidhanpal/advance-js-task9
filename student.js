var student={age:20};
printage=function(){
    return this.age;
};
var bound=printage.bind(student);
console.log(bound(this.age));