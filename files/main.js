console.log('Hello World!');

$('div').click(() => {
  $(this).hide()
})

function el(id) {
  return document.getElementById(id)
}
document.getElementById('menuBtn').addEventListener('click', function() {
  //el('home').style.animation = 'opening 2s 1'
  //el('home').style.transform = 'translate(14rem, -3rem)  scale(80%,80%)';
  el('home').style.transform = 'translate(14rem, -3rem)  scale(80%,80%)';
  el('home').style.padding = '2rem .5rem'
  document.body.style.background = '#252D7E';
  el('menu').style.display = 'block'
})

document.getElementById('menuCloseBtn').addEventListener('click', function() {
  el('home').style.transform = 'translate(0rem, 0rem)  scale(100%,100%)';
  el('home').style.padding = '0rem 0rem'
  el('home').style.borderRadius = '0px'
  setTimeout(() => {
    document.body.style.background = '#fff'
    el('menu').style.display = 'none'
    el('home').style.borderRadius = '40px'

  }, 700)
})

document.getElementById('plusBtn').addEventListener('click', function() {
  el('createTask').style.transform = 'translate(0%,0%) scale(100%,100%)';
  el('createTask').style.display = 'block'
})
document.getElementById('mgCloseBtn').onclick = function() { closeMg() }

function closeMg() {
  el('createTask').style.transform = 'translate(0%,110%)';
  setTimeout(function() {
    el('createTask').style.display = 'none'
    el('createTask').style.transform = 'translate(0%,0%)';
  }, 1000)
}

let userTaskInp = el('taskCreaterInp')
checkTask()

var uuidArr = []
var listArr = []
if (localStorage.getItem(1) == 1) {
  // good
  showTasks()
} else {
  localStorage.setItem('tasks', JSON.stringify(listArr))
  window.location.reload()
}
localStorage.setItem(1, 1)

function checkTask() {
  if (el('tasks').innerHTML == '') {
    el('tasks').innerHTML = `<center class='grey m' id='noTsk'>no tasks found..!</center>`
  } else {
    // el('noTsk').style.display = 'none'
  }
}


function colorChange() {
  var color = getRandomColor()
  document.querySelector('.tag').style.color = color
  document.querySelector('.tagRd').style.color = color

  return newColor = color
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function passer(nodes) {
  return nodes;
}
el('addTaskBtn').onclick = function() {
  checkTask()
  if (userTaskInp.value == '') {
    alert('please fill the input')
  } else {
    // el('tasks').innerHTML += `
    // <div class="bg m bubble-anim">
    //         <div class="row">
    //           <p class="grey small">10/4/22</p>
    //           <ion-icon name="trash-outline" id="taskDeleter"></ion-icon>
    //         </div>
    //          <input type="checkbox" name="" id="" class="m" disabled><span>` + userTaskInp.value + `</span>
    //       </div>
    //`;
    //var givedColor = passer(colorChange());
    // el('colorInp').style.color = givedColor;
    // document.querySelector('progress::-webkit-progress-value').style.background = 'red';
    closeMg()

    ///////// STORAGE //////////
    var getStorage = localStorage.getItem('tasks')
    var userData = userTaskInp.value;


    //JSON.parse(listArr)
    listArr.push(userData)
    localStorage.setItem('tasks', JSON.stringify(listArr))
    clearTask()
    showTasks()
  }
}

function clearTask() {
  el('tasks').innerHTML = ''
}

function showTasks() {
  getStorage = localStorage.getItem('tasks')
  userData = userTaskInp.value;
  i = JSON.parse(getStorage)
  i.forEach((element, index) => {
    el('tasks').innerHTML += `
  <div class="bg m bubble-anim">
              <div class="row">
                <p class="grey small">10/4/22</p>
                <ion-icon name="trash-outline" id="taskDeleter"></ion-icon>
              </div>
              <div class="row"><div class="roundInp" id="colorInp"></div><span>` + element + `</span></div>
            </div>
  `;
  })
}