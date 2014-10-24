var zTree;

var setting = {
	isSimpleData: true,
	treeNodeKey: "id",
	treeNodeParentKey: "pId",
	checkable : true,
	showLine: true,
	root:{ 
		isRoot:true,
		nodes:[]
	}
};

zNodes =[
	{ id:1,pId:0,name:"用户管理",open:true},
	{ id:2,pId:0,name:"部门管理",open:true},
	{ id:3,pId:0,name:"个人中心",open:true},
	{ id:4,pId:0,name:"系统管理",open:true},
	
	{ id:5,pId:1,name:"角色管理"},
	{ id:6,pId:1,name:"部门管理"},
	{ id:7,pId:1,name:"员工管理"},
	{ id:8,pId:1,name:"岗位管理"},
	{ id:9,pId:1,name:"公司网站目录管理"},
	
	{ id:10,pId:2,name:"查看新闻、公告"},
	{ id:11,pId:2,name:"部门文档目录管理"},
	
	{ id:13,pId:3,name:"查看新闻、公告"},
	{ id:14,pId:3,name:"我填写的问卷"},
	{ id:15,pId:3,name:"修改个人信息"},
	{ id:16,pId:3,name:"我发布的问卷"},
	
	// 设备管理
	{ id:17,pId:4,name:"发布公司新闻以及公告"},
	{ id:18,pId:4,name:"调查问卷管理"},
	{ id:19,pId:4,name:"发送通知"}
];

$(document).ready(function(){
	// 建立tree
	zTree = $("#tree").zTree(setting, zNodes);

});