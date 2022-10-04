
var music;
flag=0; 
function toggleModal() {
  var username = localStorage.getItem("username");
  if (username=="" || username==null) {document.getElementById("tip").innerHTML="&nbsp&nbsp&nbsp你好，新来的！请创建新的记忆或找回以前的记忆来开始旅程吧";}
  if ((username!="" && username!=null) || flag==0){
let element = document.querySelectorAll('#app>.modal')
element[0].classList.toggle('hidden')
flag=1;
  }
}
function toggleModal2() {
let element = document.querySelectorAll('#app>.starter')
element[0].classList.toggle('hidden')
}
function userpagereviseisshow() {
  let element = document.querySelectorAll('#app>.userpage-revise-bg')
  element[0].classList.toggle('hidden')
  }
function menuisshow() {
let element = document.querySelectorAll('#app>.menus')
element[0].classList.toggle('hidden')
}
function userpageisshow() {
  let element = document.querySelectorAll('#app>.userpage-bg')
  element[0].classList.toggle('hidden')
  }
setInterval("toggleSound()",1);
function init()
{
var max=2,min=1,s;
var k =Math.floor(Math.random() * (max - min + 1) ) + min;
if(k==1) s='alive.m4a';
else s='fallen from the sky.mp3'
music = new Audio(s);
music.play();
music.loop =true;
}
function music_stop()
{
music.pause();
}
function mecenter()
{
music_stop();
music = new Audio("melon.mp3");
music.play();
music.loop =true;
}
function showme()
{
  
}
function saveme()
{
  
}
function compileStr(code){
  var c = String.fromCharCode(code.charCodeAt(0) + code.length);
  for(var i = 1; i < code.length ; i++){
    c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
  }
  return escape(c)
}
// 字符串解密构造函数
function unCompileStr(code){
  code = unescape(code);
  var c = String.fromCharCode(code.charCodeAt(0) - code.length);
  for(var i = 1; i < code.length; i++){
    c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
  }
  return c;
}
function check()
{
  var username = localStorage.getItem("username");
  if (username=="" || username==null){
     menuisshow();
     toggleModal();
  }
}
function createme()
{
   var name = document.getElementById("create").value;
   alert("创建成功，亲爱的 "+name+' \n请刷新网页');
   localStorage.setItem("username",name);
   localStorage.setItem("userpage-background","img/default_background.jpg");
   localStorage.setItem("head","img/default_avatar.jpg");
   localStorage.setItem("signature","你还没设置个性签名，赶快设置一下吧");
   
}
function findme()
{
   var code = document.getElementById("find").value;
   var username = unCompileStr(code);
   alert("寻找成功，亲爱的 "+username+' \n请刷新网页');
   localStorage.setItem("username",username);
}
function readme()
{
  var username = localStorage.getItem("username");
  document.getElementById("show_name").innerHTML=username;
}