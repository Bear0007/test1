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
$("#submit").click(function(){
    if($("#name").val()==""){
        // check.preventDefault();
       $("#name").next().css('display','block');
        return false;
    }else if($("#name_id").val()==""){
      $("#name_id").next().css('display','block');
        return false;
    }else if($("#mali").val()==""){
        $("#mali").next().css('display','block');
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



 
