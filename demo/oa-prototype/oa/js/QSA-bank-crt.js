// 创建选项
function createOption(){
	var trNode = $("<tr></tr>");
	var tdNode1 = $("<td>选项</td>");
	var tdNode2 = $("<td></td>");
	var aNode = $("<a href='#' onclick='_del(this)' class='btn'>删除</a>");
	var inputNode = $("<input placeholder='选项' class='content' type='text' name='contents'/>");
	trNode.append(tdNode1);
	trNode.append(tdNode2);
	tdNode2.append(inputNode);
	tdNode2.append(aNode);
	$("#tab_1").append(trNode);

}

// 删除选项输入框
function _del(curr){
	$(curr).parent().parent().remove();
}
