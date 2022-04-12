console.log('Hello World!');

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


function checkTask() {
  if (el('tasks').innerHTML == '') {
    el('tasks').innerHTML = `<center class='grey m' id='noTsk'>no tasks found..!</center>`
  } else {
    el('noTsk').style.display = 'none'
  }
}

var listArr = ['some']


el('addTaskBtn').onclick = function() {
  checkTask()
  if (userTaskInp.value == '') {
    alert('please fill the input')
  } else {
    el('tasks').innerHTML += `
    <div class="bg m bubble-anim">
          <p class="grey small">10/4/22</p>
           <input type="checkbox" name="" id="" class="m" disabled><span>` + userTaskInp.value + `</span>
    </div>
   `;
    closeMg()

    ///////// STORAGE //////////

    let getStorage = localStorage.getItem('tasks')
    let userData = userTaskInp.value;

    var listArr = []
    JSON.parse(listArr)
    listArr.push(userData)

    localStorage.setItem('tasks', JSON.stringify(listArr))
    showTasks()

    function showTasks() {
      let getStorage = localStorage.getItem('tasks')
      let userData = userTaskInp.value;

      getStorage.forEach((element, index) => {
        el('tasks').innerHTML += `
  <div class="bg m bubble-anim">
            <p class="grey small">10/4/22</p>
            <input type="checkbox" name="" id="" class="m"><span>` + element + `</span>
  </div>
  `;
      })
    }
  }
}
showTasks()
function showTasks() {
  let getStorage = localStorage.getItem('tasks')
  let userData = userTaskInp.value;

  getStorage.forEach((element, index) => {
    el('tasks').innerHTML += `
  <div class="bg m bubble-anim">
            <p class="grey small">10/4/22</p>
            <input type="checkbox" name="" id="" class="m" disabled><span>` + element + `</span>
  </div>
  `;
  })
}