// 创建选项
var count = 1;
function createOption(o){
	var trNode = $("<tr></tr>");
	var tdNode1 = $("<td>选项</td>");
	var tdNode2 = $("<td></td>");
	var aNode = $("<a href='javascript:void;' onclick='_del(this)' class='btn'>删除</a>");
	var inputNode = $("<input placeholder='选项' class='option-content' type='text' name='contents'/>");
	var scoreNode = $("<input placeholder='得分' class='option-score' type='text' name='score'  onblur='changeTotalScore();'/>");
	trNode.append(tdNode1);
	trNode.append(tdNode2);
	tdNode2.append(inputNode);
	tdNode2.append(scoreNode);
	tdNode2.append(aNode);
	console.log($(o).parent().parent().get(0).innerHTML);
	$(o).parent().parent().parent().append(trNode);

}

function getAllQuestions(){
	var len = $(".quest").length -1;
	var questions = [];
	for(var i =0;i<len;i++){
		var question =  $(".quest").eq(i);
		var temp = {};
		temp.questionTitle = question.find(".questionTitle").val();
		var index = i+1;
		alert(index);
		temp.questionType = question.find("input[name='questionType"+index+"']:checked").val();
		var optionslen = question.find(".option-content").length;
		temp.options = [];
		for(var j=0; j<optionslen; j++){
			var ans = {};
			ans.content = question.find(".option-content").eq(j).val();
			ans.score = question.find(".option-score").eq(j).val();
			temp.options.push(ans);
		}
		questions.push(temp);
		console.log(temp);
	}
}

// 删除选项输入框
function _del(curr){
	$(curr).parent().parent().remove();
}

// 创建题目
function createNewQuestion(){
	var node = $("#moban").clone(true,false);
	$(node).find(".title").text("问卷题目"+count)
	$(node).attr("id",count);
	$(node).find("input[name='questionType']").attr("name",'questionType'+count);
	$(node).insertBefore("#moban");
	$(node).show();
	count++;
}

function sel(type){
	if(type == 0){ // 部门
		$("#sel-dept").show();
		$("#sel-role").hide();
	}else if(type == 1){ // 角色
		$("#sel-role").show();
		$("#sel-dept").hide();
	}
}
function selAns(type){
	if(type == 0){ // 部门
		$("#sel-dept-1").show();
		$("#sel-role-1").hide();
	}else if(type == 1){ // 角色
		$("#sel-role-1").show();
		$("#sel-dept-1").hide();
	}
}
/*
// 点击确定
function confirm(o){
	var nextATag = $(o).next();
	$(o).hide();
	$(nextATag).hide();
}

// 点击返回
function hide(o){
	$(o).parent().remove();
}
*/
// 删除题目
function delQuestion(o){
	$(o).parent().parent().parent().remove();
	var len = $(".quest").length -1;
	for(var i=0;i<len;i++){
		var index = i+1;
		$(".quest .title").eq(i).text("问卷题目"+index);
	}
	count--;
}

// 统计总分
function changeTotalScore(){
	var total = 0;
	$(".score").each(function(index,data){
		var score = $(this).val();
		if(parseInt(score)){
			total += parseInt(score);
		}
	});
	$("#score").text(total);
}

function completeAction(){
	//alert("dowsno");
	//alert(count);
	var node = document.getElementById("1");
	//alert(node);
	var child = node.childNodes[1].childNodes;
	//alert(child.length);
	for(var i=0; i<child.length; i++){
		alert(child[i].innerHTML);
	}
}
