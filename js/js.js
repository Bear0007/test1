$("input").blur(function(){
   
    if($(this).val() =="") {       
        $(this).next().css('display','block');
        return false;
        
    }else{
        $(this).next().css('display','none');
        $(this).prev().css('background','#227DC6');
        // $(this).css('color','black');
    } 
});
  //验证电话
        function telCheck() {
            let reg = /^\d{11}$/;
            let tel = $("#tel").val();
            if(!reg.test(tel) || tel==''){
                return false;
            }else{
                return true;
            }
        }
 //验证邮箱       
function emailCheck() {
    let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    let email = $("#mail").val();
    if(!reg.test(email) || email==''){
        return false;
    }else{
        return true;
    }
}
$("#submit").click(function(){
    if($("#name").val()==""){
        // check.preventDefault();
       $("#name").next().css('display','block');
        return false;
    }else if($("#name_id").val()==""){
      $("#name_id").next().css('display','block');
        return false;
    }else if(!telCheck()){
        $("#tel").next().css('display','block');
          return false;
      } else if(!emailCheck()){
        $("#mail").next().css('display','block');
          return false;
      }else if($("#firm").val()==""){
        $("#firm").next().css('display','block');
          return false;
      }else{
      
        $(".box_1").css("display","block");
      }
});
$("button").click(function(){
    $(location).attr("href","login.html");
});



 
