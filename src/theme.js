//let thm = document.getElementById('thm')
alrtNot('change your theme dark or light',"white","","#",'fa fa-paint-roller','4s')
//changeToDark()



function changeToDark(){
  //setTimeout(()=>{
  //setInterval(()=>{
  $("*").css("background", "#42445A")
  $("*").css("color", "#ffffff")
  $(".hover:hover").css("color", "lightgrey")
   $("a").css("color", "#ffffff")
   $('button').css('background','')
   $("bg-alrtNotfy").css('color','black')
  // })},a)
}
//changeToLight()
function changeToLight(){
 // setTimeout(()=>{
 // setInterval(()=>{
  $("*").css("background", "")
  $("*").css("color", "")
  $(".hover:hover").css("color", "")
   $("a").css("color", "")
   $('button').css('background','')
   $("bg-alrtNotfy").css('color','')
  // })},b)
}
setInterval(()=>{if (thm.checked) {
  changeToDark()
} else {
  changeToLight()
}},10)