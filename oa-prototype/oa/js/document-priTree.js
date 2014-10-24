/** 构造Z-Tree */
function setPrivilege(){
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
		},
		keepParent:true
	};
	
	zNodes =[
		{ id:1,pId:0,name:"技术部",open:true},
		
		{ id:2,pId:1,name:"会议资料",open:true,isParent:true},
		{ id:3,pId:1,name:"人事资料",open:true,isParent:true},
		{ id:4,pId:1,name:"开发资料",open:true,isParent:true},
	
		{ id:5,pId:2,name:"会议1资料"},
		{ id:6,pId:2,name:"会议2资料"},
		{ id:7,pId:2,name:"会议3资料"},
		{ id:8,pId:2,name:"会议重要资料"},
		
		{ id:9,pId:8,name:"重要资料1"},
		{ id:10,pId:8,name:"重要资料2"},
		
		{ id:11,pId:3,name:"人事资料1"}
	];
	// 建立tree
	zTree = $("#tree").zTree(setting, zNodes);
	$("#priDiv").show();

	$(".btn").click(function(){
		
		var objs= zTree.getCheckedNodes();
		var len = objs.length;
		for(var i=0;i<objs.length;i++)
		{
			if(!objs[i].check_True_Full){
				len--;
			}
			else{
				alert(objs[i].tId);
			}
		}
		
	})
}

$().ready(function(){
	setPrivilege();
});
