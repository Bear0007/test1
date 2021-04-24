$("#grzx").click(function(){
    $(location).attr("href","grzx.html");
});


$("#tj").click(function(){
    if($("#cx").val()!=="123"){
        alert("请填写内容")
    }else{
        $(location).attr("href","bjcx.html");
    }
});
