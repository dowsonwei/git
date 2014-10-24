//添加日程项开始
$(document).on("click",".addBtn",function(){
    var temp = "<div class='col-md-12 column ui-sortable add'><textarea class='col-md-12' style = 'font-size:72;height:70px;' autofocus></textarea> "  
        +"<div style='display:inline'>"
            +"<div class='leftBtn btn-group' style='display:inline'>"
                +"<button class='btn btn-default addBtn share'>邀请</button>"
                +"<button class='btn btn-default addBtn sure'>确定</button>"
                +"<button class='btn btn-primary addBtn del'>删除</button>"
            +"</div>"
        +"</div>";
    $(this).parent().parent().append(temp);
    $(this).css("display", "none");
    var oldThis = this;

    // 删除按钮事件开始
    $(".del").on("click",function(){
        $(this).parent().parent().parent().parent().find(".add").remove();
        $(oldThis).css("display","inline");
    });
    // 删除按钮事件结束

    // 确定按钮事件开始
    $(".sure").on("click",function(){
        var text = $(this).parent().parent().parent().parent().find("textarea").val();
        var myDate = new Date();
        var now = myDate.toLocaleTimeString();
        if(text != ""){
            var addDom = "<div class='col-md-12 column ui-sortable'>"
                                +text
                                +"<div class='rightBtn'>"
                                    +"<button class='btn'>编辑</button>"
                                +"</div>"
                                +"<div class='leftBtn'>"
                                    +"<a href='#'><i class='iconfont'>&#xe6f8</i></a>"
                                +"</div>"
                            +"</div>";
            $(this).parent().parent().parent().parent().find(".solveBtn").before(addDom);
            $(this).parent().parent().parent().parent().find(".add").remove();
            $(oldThis).css("display","inline");
        }
        else{
            alert("没有输入！！");
        }
    })
    // 确定按钮事件结束
})
//添加日程项结束

//日程项目删除按钮事件开始
$(document).on("click",".delBtn",function(){
    $(this).parent().parent().remove();
})
//日程项目删除按钮事件结束

//添加日程项目开始
$(".newBtn").on("click",function(){
    var temp = '<div class="row">'
                +'<div class="demo ui-sortable">'
                    +'<div class="lyrow ui-draggable" style="display: block;">'
                        +'<div class="view">'
                            +'<div class="row clearfix">'
                                +'<div class="col-md-4">'
                                    +'<strong class="getDate">'
                                        +'<input type="date" class="form-control needText" >'
                                        +'<button type="button" class="btn btn-primary selectDate" >确定</button>'
                                    +'</strong>'
                                +'</div>'
                                +'<div class="solveBtn rightBtn" style="margin-bottom:10px">'
                                    +'<button type="button" class="btn btn-primary addBtn newtemp">添加</button>'
                                    +'<button type="button" class="btn btn-primary delBtn newtemp">删除</button>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                +'</div>'
            +'</div>';
    $(this).css("display","none");
    var oldThis = this;
    $(temp) .insertBefore($(this))
            //选择日期开始
            .find(".selectDate").on("click",function(){
                var needText = $(this).parent().find(".needText").val();
                if(needText == ""){
                    alert("不能为空！！");
                    return;
                }
                $(this).parent().html(needText);
                $(oldThis).css("display","inline");
            }).end()
            .find(".delBtn").on("click",function(){
                $(oldThis).css("display","inline");
                $(this).parent().parent().remove();
            })
            //选择日期结束 
})
//添加日程项目结束
