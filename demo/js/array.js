var nums = [1,2,3,4,5,4,3,2,1];
var tempnums = nums.filter(function(item,index,Array){
	return(item>2);
});
console.log(tempnums);


var nums = [1,2,3,4,5,4,3,2,1];
var tempnums = nums.map(function(item,index,Array){
	return(item*2);
});
var tempResult = tempnums.forEach(function(item,index,Array){
	return (item*2);
})
console.log(tempResult);


var re = /d(b+)d/gi;
var str = "cdbBdsbdbdz";
var arr = re.exec(str);

var s = "";
s += "$1: " + RegExp.$1 + "<br/>";
s += "$2: " + RegExp.$2 + "<br/>";
s += "$3: " + RegExp.$3 + "<br/>";
s += "input: "　+ RegExp.input + "<br/>";
s += "lastMatch: " + RegExp.lastMatch + "<br/>"
document.write(s);

function createCompare(propertyName){
	return function(object0,object1){
		var value1 = object0[propertyName];
		var value2 = object1[propertyName];
		if(value1 > value2) return true;
		else return false;
 	}
}

var data = [{name: "wzc", age: 29}, {name: "dowson", age: 12}];
data.sort(createCompare("name"));
data.sort(createCompare("age"));


function Factory(n){
	if(n == 1) return 1;
	else {
		return n * arguments.callee(n - 1);
	}
}
var newFactory = Factory;
Factory = function(){
	return 0;
}
newFactory(5);


function outer(){
	inner();
}
function inner(){
	document.write(arguments.callee.caller); 
}

for(var i in foo){
	if(foo.hasOwnProperty(i))
		console.log(i);
}


for(var i = 0;i<10;i++){
	setTimeout(function(){
		console.log(i);
	},1000);
}

for(var i=0; i < 10; i++ ){
	setTimeout(function(e){
		return function(){
			console.log(e);
		}
	}(i),1000);
}

//比较正则表达式的exec 和 string的match
// exec永远返回与第一个匹配相关的信息，
//其返回数组包括第一个匹配的字串，所有分组的反向引用。

//match是返回所有匹配的字符串合成的数组，但是正则表达式必须
//指定全局g属性才能返回所有匹配，但是也没有了input和index属性，不指定g属性则会返回一个只有一个元素的数组。

//有分组且返回唯一匹配！

//第一个元素  有g时没有index  （）/（不含g）  相同
var str = "cat,bat";
var p = /at/;		//没有g
console.log(p.exec(str));
console.log(str.match(p));

var str = "cat,bat";
var p = /at/g;		//有g
console.log(p.exec(str));
console.log(str.match(p));


//apply和call的区别
//apply多用于传入的是数组
function sum(num1,num2){
	return num1 + num2;
}
function　sum1(num1,num2){
	return sum.apply(this,arguments);
}
function sum2(num1,num2){
	return sum.apply(this,[num1,num2]);
}
//call多用于传入的是参数列举
function sum(num1,num2){
	return num1 + num2;
}
function　sum1(num1,num2){
	return sum.call(this,num1,num2);
}
//其中call还以用来调用显示的对象
window.color = "red";
var o = {color:"blue"};

function sayColor(){
	return this.color;
}
console.log(sayColor.call(window));
console.log(sayColor.call(o));