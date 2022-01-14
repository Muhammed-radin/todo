
$("body").append('<div id="allScriptHtml"></div>')



let ash = "allScriptHtml"
let asH = document.getElementById("allScriptHtml");


function alrtNot(msg, color, name, link, icon, sec) {
  if (name == undefined) {
    name = 'checknow'
  }
  if (color == undefined) {
    color = 'white'
  }
  if (msg == undefined) {
    msg = 'you not typed msg'
  }
  if (link == undefined) {
    link = '#body'
  }
  if (icon == undefined) {
    icon = 'gg-block'
  }
  if (sec == undefined) {
    sec = '3s'
  }
  $("#allScriptHtml").append(`
      <div class="bg-alrtNotfy">
        <div class="alrtNotfy">
          <i class="`+icon +` -icons"></i><center>` + msg + `</center><b><a href="` + link + `" style="text-decoration: none">` + name + `</a></b>
        </div>
      </div>
      <style>
      .bg-alrtNotfy {
        background: ` + color + `;
        box-shadow: .1 px .1 px 3 px 0 px black;
        border-radius: 5 px;
        position: fixed;
        top: -10 rem;
        width: 90 % ;
        margin: 1 rem;
        padding: .5 rem;
        z-index: 2;
        animation: downNot ` + sec + ` 1;
      }
      </style>
      `)
}

function Msg(msg, color) {
  $('#msg').fadeIn(500)
    $("#allScriptHtml").append(`
      <div class="msg" id="msg">
      <center>` + msg + `</center>
    </div>
    <style>
    .msg {
 background: #A6A6A6D1;
 width: max-content;
 padding: .8rem;
 border-radius: 25px;
 position: fixed;
 color: ` + color + `;
 padding-left: 2rem;
 padding-right: 2rem;
 top: 80%;
 position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
 z-index: 10;
}
@media screen and (max-width: 650px) {
  .msg {
    
  }
}
    </style>
  `)
  $("#msg").fadeOut(2000,() =>{
    $("#msg").remove()
  } )
    setInterval(function (){
      $("#msg").fadeOut(2000, () => {
        $("#msg").remove()
      })
    },100)
}



if (localStorage.getItem("saved pass :") ? true : false ){
  $("#bg-pass").remove()
}else {
  Msg('enter your note pass')
}


let pass = document.getElementById('pass')
function smbtPass() {
  if (document.getElementById('pass').value == '') {
    alrtNot('you note typed password', 'white', 'okay', '#pass', 'gg-block', '5s')
  } else {
    alrtNot('sumbting...' + ' [' + document.getElementById('pass').value + ']', 'white', '', '#', `gg-loadbar`)
    Msg('sumbited')
    if (document.getElementById('pss').checked){
    localStorage.setItem("saved pass :",document.getElementById("pass").value)
    
    Msg('saved password')
        $("#bg-pass").remove()
  }else {
    alrtNot('note saved your password','#FF5B5B','check it','#pss','fa fa-info-circle','3s')
  }
  }
  
}


//setInterval(function (){
//  alrtNot()
//},5000)