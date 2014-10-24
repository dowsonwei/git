//构造函数
function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayname = function(){
		console.log(this.name);
	};
}

Person("dowson",26,"student");
window.sayname();

var o = new Object();
Person.call(o,"wzc",25,"fjsdofijo");
o.sayname();

//原型
function Person(){}
Person.prototype.name = "dowson";
Person.prototype.job = "student";
Person.prototype.sayname = function(){
	console.log(this.name);
}

var person1 = new Person();
person1.name;

//key  和 getOwnPropertyNames
//Object.keys  和 Object.getOwnPropertyNames

function Person(){}
Person.prototype.name = "dowson";
Person.prototype.age = 29;
Person.prototype.sayName = function(){
	console.log(this.name);
}
var keys = Object.keys(Person.prototype);
console.log(keys);

var p1 = new Person();
p1.name = "wzc";
p1.age = 31;
var p1key = Object.keys(p1);
console.log(p1key);

/*Object.defineProperty(Person.prototype,"constructor",{
	enumberable : false;
	value : Person;
})*/

//join("|") 	产生以|分割的数组

//寄生虫构造函数模式 不能依赖instanceof操作符来确定对象类型

//稳妥构造函数模式
//1、构造函数是带参数的，2、定义函数是没有this 3、没有用new来构造函数
function Person(name,age,job){
	var o = new Object();
	o.sayname = function(){
		return name;
	}
	return o;
}

var person1 = Person("dowson",26,"student");
person1.sayname();

