var zTree;

var setting = {
	isSimpleData: true,
	treeNodeKey: "id",
	treeNodeParentKey: "pId",
	showLine: true,
	root:{ 
		isRoot:true,
		nodes:[]
	},
	callback : {
      click: selectTreeNode
    }

};

function stopDept(o){
	if(o.text == "停用"){
		$(o).text("开启");	
	}else{
		$(o).text("停用");
	}
}

// 点击事件
/**
 * 
 * @param {} event  onClick 事件返回的标准 event 对象
 * @param {} treeId  treeObjId
 * @param {} treeNode 被点击的节点 JSON 数据对象
 */ 
function selectTreeNode(event, treeId, treeNodeJson){
	var name = treeNodeJson.name;
	if(name == "公司"){
		$("#doc").hide();
		$("#comAddDept").show();
		return ;
	}
	$("#comAddDept").hide();
	$("#doc").show();
	$("#moveUp").show();
	$("#moveDown").show();
	if(treeNodeJson["isFirstNode"]){ 
		$("#moveUp").hide();
	}else if(treeNodeJson["isLastNode"]){
		$("#moveDown").hide();
	}
	$("#doc").show();
	// var treeNodeId = treeNodeJson.id;
	$("#deptname").text(name);
	$("#deptmanager").text("王小二");
	$("#deptdesc").text("我是描述");
}

zNodes =[
	{ id:1,pId:0,name:"公司",open:true},
	/* 目录管理子节点 */
	{ id:2,pId:1,name:"技术部",isParent:true},
	{ id:3,pId:1,name:"财务部",isParent:true},
	{ id:4,pId:1,name:"后勤部",isParent:true},
	{ id:5,pId:1,name:"人力资源部",isParent:true},
	
	{ id:22,pId:2,name:"技术部子部门1",isParent:true},
	{ id:23,pId:2,name:"技术部子部门2",isParent:true},
	{ id:24,pId:2,name:"技术部子部门3",isParent:true},
	
	{ id:25,pId:3,name:"财务部子部门1",isParent:true},
	{ id:26,pId:3,name:"财务部子部门2",isParent:true},
	{ id:27,pId:3,name:"财务部子部门3",isParent:true},
	
	{ id:28,pId:4,name:"后勤部子部门1",isParent:true},
	{ id:29,pId:4,name:"后勤部子部门2",isParent:true},
	{ id:30,pId:4,name:"后勤部子部门3",isParent:true}
	
];

// 显示添加子节点
function showAdd(){
	$("#addChildNode").css("display","block");
}
// 显示添加子节点
function showUpload(){
	$("#uploadFile").css("display","block");
}

// 隐藏添加子节点
function hideAdd(){
	$("#addChildNode").css("display","none");
}

// 隐藏添加子节点
function hideUpload(){
	$("#uploadFile").css("display","none");
}

$(document).ready(function(){
	var	width = document.body.clientWidth;
	// 建立tree
	zTree = $("#tree").zTree(setting, zNodes);
	$("#doc").hide();
});