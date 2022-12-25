var a=0,app="none",lm="Contrail",rm="Welcome";
   function memory()
   {
        lm=document.getElementById("left").innerHTML;
        rm=document.getElementById("right").innerHTML;
   }
   function setmemory()
   {
      document.getElementById("left").innerHTML=lm;
      document.getElementById("right").innerHTML=rm;
   }
   function clear()
   {
      document.getElementById("left").innerHTML="";
      document.getElementById("right").innerHTML="";
   }
   // 0 normal ; 1 large ; 2 larger
   function large()
   {
    setmemory();
        document.getElementById("change").style.width="50%";
        document.getElementById("change").style.height="10%";
        document.getElementById("change").style.color="rgb(255, 255, 255)";
        a=1;
        // setTimeout(function()
        // {

        // },5000);

   }
   function larger()
   {
        setmemory();
        document.getElementById("change").style.width="50%";
        document.getElementById("change").style.height="40%";
        document.getElementById("change").style.color="rgb(255, 255, 255)";
        a=2;
        
   }
   function normal()
   {
        memory();
       
        document.getElementById("change").style.width="20%";
        document.getElementById("change").style.height="10%";
        document.getElementById("change").style.color="rgb(0, 0, 0)";
        app="none";
        document.querySelector('.times').innerHTML = "";
        a=0; clear();
   }
   function change()
   {
      var s=document.getElementById("text").value;
      if(s.length>10) alert("内容过多");
      auto(s,"",1);
   }
   function dowhat()
   {
      // alert(a);
      if(a==1 || a==2)
      {
        normal();
      }
      else if(a==0)
      {
        large();
      }
   }
   function start()
   {
      large();
      let fun = () => document.getElementById("left").innerHTML="Welcome";
      let sleep = function(fun,time){
      setTimeout(()=>{
      fun();
      },time);
      }
      sleep(fun,1000);
      fun = () => document.getElementById("left").innerHTML="Welcome to";
      sleep(fun,1000);
      fun = () => document.getElementById("left").innerHTML="Welcome to Contrail";
      sleep(fun,1000);
      fun = () => document.getElementById("left").innerHTML="Welcome to Contrail !";
      sleep(fun,1000);
   }
   function auto(l,r,sta)
   {
      if(sta==1) large();
      else if(sta==2) larger();
      document.getElementById("left").innerHTML=l;
      document.getElementById("right").innerHTML=r;
      let fun = () => normal();
      let sleep = function(fun,time){
      setTimeout(()=>{
      fun();
      },time);
      }
      sleep(fun,2000);
   }
   function usercheck()
   {
         var s=localStorage.getItem("username");
         auto(s,'欢迎回来',1);
         // auto('<img id="head" class="image" src="assets/img/default_background.jpg"></img>'+'<h1>'+s+'</h1>',"",-1);
         
   }
  function timer()
  {
      app="timer";
      clear();
      larger();
  }
  function getTime() {
      var date = new Date();
      var year = date.getFullYear(); //获取年份
      var month = date.getMonth() + 1; //获取月份
      var day = date.getDate(); //获取日期
      var hour = date.getHours(); //获取小时
      hour = hour < 10 ? '0' + hour : hour;
      var minute = date.getMinutes(); // 获取分
      minute = minute < 10 ? '0' + minute : minute;
      var seconds = date.getSeconds(); //获取秒
      seconds = seconds < 10 ? '0' + seconds : seconds;
      return hour + ':' + minute + ':' + seconds;
  }

  setInterval(function() {
      if(app=="timer" && a==2)
      {
          document.querySelector('.times').innerHTML = getTime();
          document.getElementById("change").style.color="rgb(173, 131, 16)";
      }
      
  }, 1000)