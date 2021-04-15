
   // var ask=window.confirm("what went call")
        
   //if(aask===true){
     //  window.location.href="//www.google.com/gmail/ gmail";}
      // else{
       //    window.console.log("no")
      // }
   //}
        
//var call=document.getElementById("send");
//var call=document.getElementById("message");


function myfun(){
    var ask=window.confirm("what went call")
    if(ask===true){
         window.location.href="https://static.s123-cdn.com/ready_uploads/svg/phone.svg?v=2";}
         else{
            window.console.log("no")
         }
  }



  function myfun2(){
    var ask=window.confirm("what went send massage")
    if(ask===true){
         window.location.href="https://static.s123-cdn.com/ready_uploads/svg/phone.svg?v=2";}
         else{
            window.console.log("no")
         }
  }



  function myfun3(){
    var ask=window.confirm("what went send email")
    if(ask===true){
         window.location.href="https://static.s123-cdn.com/ready_uploads/svg/phone.svg?v=2";}
         else{
            window.console.log("no")
         }
  }



  var inp=document.getElementById("user-name");
  inp.setAttribute("newpl",inp.getAttribute("placeholder"))
  inp.onmouseover=function(){
     inp.setAttribute("placeholder"," ")
  }
  inp.onmouseout=function(){
     inp.setAttribute("placeholder",inp.getAttribute("newpl"))
  }



  var pho=document.getElementById("phone");
  pho.setAttribute("ph",pho.getAttribute("placeholder"))
  pho.onmouseover=function(){
     pho.setAttribute("placeholder"," ")
  }
  pho.onmouseout=function(){
   pho.setAttribute("placeholder",pho.getAttribute("ph"))
  }


  var em=document.getElementById("email");
  em.setAttribute("ema",em.getAttribute("placeholder"))
  em.onmouseover=function(){
     em.setAttribute("placeholder"," ")
  }
  em.onmouseout=function(){
   em.setAttribute("placeholder",em.getAttribute("ema"))
  }