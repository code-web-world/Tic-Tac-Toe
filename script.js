var OorX = sessionStorage.setItem('value','x')

var cell = document.getElementsByClassName('tic-tac-box')

const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


var all = [cell[0],cell[1],cell[2],cell[3],cell[4],cell[5],cell[6],cell[7],cell[8]]

function blackandwhite() {
  for(let bw of all){
    bw.style.filter = ' grayscale(100%)'
  }
}

let a = document.getElementById('winner')
var cong = document.getElementById('cong')
function winnerparty(who) {
      cong.innerText = 'Congratulations!'
      a.innerText = who
      for(let c = 0; c < cell.length;c++){
        cell[c].removeEventListener('click',Game)
      }
}



function winning() {
  for (let w of winner) {
    
    // start
   var check =  [cell[w[0]],cell[w[1]],cell[w[2]]]
    // For X 
  var X = check.every(each=>{
    return each.innerText === 'x'
    })
    // For O
  var O = check.every(each=>{
    return each.innerText === 'o'
    })


var win = document.getElementById('win')   
var head = document.getElementById('head')  
    

  

    if (X){
      head.style.animation = 'none'
      blackandwhite()
      for (xp of check){
        xp.style.animation = 'heartbeat 1.5s ease infinite'}
    win.classList = 'winning-box'
        winnerparty('Player X Winner')
      
      
      
  
      }
    // O Check 
    else if(O){
      head.style.animation = 'none'
      blackandwhite()
      for (xp of check){
        xp.style.animation = 'heartbeat 1.5s ease infinite'}
        
  win.classList = 'winning-box'
      winnerparty('Player O Winner')
      
      
    }
    // Draw Check

    else if(cell[0].innerText!==''&&cell[1].innerText!==''&&cell[2].innerText!==''&&cell[3].innerText!==''&&cell[4].innerText!==''&&cell[5].innerText!==''&&cell[6].innerText!==''&&cell[7].innerText!==''&&cell[8].innerText!==''){
      head.style.animation = 'none'
      win.classList = 'winning-box'

      blackandwhite()
    }
    

  



  
    

    
  



    
    

    

      
        
        
        
    
    
    
  }}   
    



function Game() {
    let x = sessionStorage.getItem('value')
    if(x === 'x'){

      if(this.innerText === 'o'){
      this.innerText ='o'
    // this.style.color = '#fc03a9'
    }

    else if(this.innerText === ''){
      this.innerText ='x'
      this.style.color = '#fc03a9'
      winning()
      sessionStorage.setItem       ('value','o')

    }
       }
      
    else if(x==='o'){

      if(this.innerText === 'x'){
      this.innerText ='x'
      this.style.color = '#fc03a9'
    }

    else if(this.innerText === ''){
      this.innerText ='o'
      winning()
      this.style.color = 'rgba(143,0,225,0.7)'
      sessionStorage.setItem      ('value','x')
    }
      
    }

    
    
  }








for(let i = 0; i < cell.length;i++){
  cell[i].addEventListener('click',Game)
}



