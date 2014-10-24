$(".share").on("click",function(){
    //获取textarea中的内容
    var text = $("textarea").val();
    $("textarea").val("");
    if(text == ""){
        alert("不能为空！！");
        return ;
    }
    
    var myDate = new Date();
    var now = myDate.toLocaleString();
    //插入的字符串开始
    var temp =     
                '<div class="row">'
                    +'<div class="demo ui-sortable">'
                        +'<div class="lyrow ui-draggable" style="display: block;">'
                            +'<div class="view">'
                                +'<div class="row clearfix">'
                                    +'<div class="col-md-12">'
                                        +'<span>dowson</span>&nbsp;&nbsp;&nbsp;'
                                        +'<span>'+now+'</span>'
                                    +'</div>'
                                    +'<div class="col-md-12 column ui-sortable">'
                                        + text +'<br/>'
                                        +'<a href="#" class="comment first  selected">'
                                            +'<i class="iconfont">&#xe650</i>'
                                        +'<a>'
                                        +'<a href="#"><i class="iconfont dissupport">&#xe66d</i></a>'
                                        +'<div style="margin-top:5px">'
                                            +'<input type="text" class="col-md-9 message" />'
                                            +'<button type="button" class="submitMessage " style="margin-left:10px;">评论</button>'
                                        +'<div>'
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                +'</div>'	
    //插入字符串结束
       
    //插入操作开始
    $(temp).insertAfter($(this))
    //插入操作结束
})

//评论按钮事件开始
$(document).on("click",".comment",function(){
    //保留点击按钮的父类，让它区别与其他的分享
    var parentDiv = null;
    //获取父类开始
    //一级评论事件开始
    if($(this).hasClass("first")){
        parentDiv = $(this).parent(); 
    } 
    //一级评论事件结束
    //二级评论事件开始
    if($(this).hasClass("second")){
        parentDiv = $(this).parent().parent(); 
    } 
    //二级评论事件结束
    //三级评论事件开始
    if($(this).hasClass("three")){
        parentDiv = $(this).parent().parent().parent(); 
    } 
    //三级评论事件结束
    //获取父类结束
    var len = parentDiv.find(".comment").length;
    for(var i=0;i<len; i++){
        var temp = parentDiv.find(".comment").eq(i);
        if(temp.hasClass("selected")){
            temp.removeClass("selected"); 
            temp.find("i").html("&#xe61c")
        }
    }
    $(this).addClass("selected")
           .find("i").html("&#xe650")
})
//评论按钮事件结束

//提交评论事件开始
$(document).on("click",".submitMessage",function(){
    var text = "dowson: " + $(this).parent().parent().find(".message").val();
    if($(this).parent().parent().find(".message").val() == ""){
        alert("没有填写内容！！");
        return;
    }
    $(this).parent().parent().find(".message").val("");
    var farther = $(this).parent().parent().find(".comment");
    var len = farther.length;
    for(var i=0; i<len; i++){
        //获得selected的元素开始
        if(farther.eq(i).hasClass("selected")){
            //选中first开始
            if(farther.eq(i).hasClass("first")){
                var temp = 
                        '<div>'
                            +'<span>' + text + '</span>'
                            +'<a href="#" class="comment second">'
                                +'<i class="iconfont">&#xe61c</i>'
                            +'<a>'
                        +'</div>'
                $(temp).insertBefore($(this).parent()); 
            }
            //选中first结束
            //选中second开始
            else if(farther.eq(i).hasClass("second")){
                var temp = 
                        '<div>'
                            +'<span style="margin-left:50px;">' + text + '</span>'
                            +'<a href="#" class="comment three">'
                                +'<i class="iconfont">&#xe61c</i>'
                            +'<a>'
                        +'</div>';
                $(temp).appendTo(farther.eq(i).parent());
            }
            //选中second结束
            //选中three开始
            else if(farther.eq(i).hasClass("three")){
                var temp = 
                        '<div>'
                            +'<span style="margin-left:50px;">' + text + '</span>'
                            +'<a href="#" class="comment three">'
                                +'<i class="iconfont">&#xe61c</i>'
                            +'<a>'
                        +'</div>';
                $(temp).appendTo(farther.eq(i).parent().parent());
            }
            //选中three结束
        }
        //获得selected的元素结束
    }
    
})
//提交评论事件结束

//点赞事件开始
$(document).on("click","a",function(){
    //原本是赞状态
    if($(this).find("i").hasClass("support")){
        $(this)
            .find("i").removeClass("support").end()
            .find("i").addClass("dissupport").end()
            .find("i").html("&#xe66d");
        var len = $(this).parent().find("span").length;
        for(var i = 0; i < len; i++){
            if($(this).parent().find("span").eq(i).text() == "dowson"){
                $(this).parent().find("span").eq(i).remove();
                break;
            }
        }
    }
    //原本不是赞状态
    else if($(this).find("i").hasClass("dissupport")){
        $(this)
            .find("i").removeClass("dissupport").end()
            .find("i").addClass("support").end()
            .find("i").html("&#xe6a1");
        $('<span>dowson</span>').insertAfter($(this));
    }
})
//点赞事件结束


