let buttonChoiceDifficulty = document.querySelector('select')
let casesGrid = document.querySelectorAll('.case');
let buttonDifficulty = document.querySelector('#difficulty');
let valueButtonDifficulty = buttonDifficulty.value

const difficultySettings = {
  easy : {
    "nbrBomb" : 14,
    "nbrColumnGrid" : 10,
    "nbrRowGrid" : 10,
  },
  medium : {
    "nbrBomb" : 28,
    "nbrColumnGrid" : 15,
    "nbrRowGrid" : 15,
  },
  hard : {
    "nbrBomb" : 40,
    "nbrColumnGrid" : 20,
    "nbrRowGrid" : 20,
  }
}

function createGrid(difficulty){
  const main = document.querySelector('.main')
  for (let indexRow = 0; indexRow < difficulty.nbrRowGrid; indexRow++) {
    nbrRowGrid = document.createElement('div')
    nbrRowGrid.classList.add('row');
    
    for (let index = 0; index < difficulty.nbrColumnGrid; index++) {
      let caseGrid = document.createElement('div')
      caseGrid.classList.add('case','hidden');
      caseGrid.setAttribute('id', `${indexRow}.${index}`);
      main.appendChild(nbrRowGrid);
      nbrRowGrid.appendChild(caseGrid);
    } 
  }
}

function putNumberCase(){
  let casesGrid = document.querySelectorAll('.case');
  casesGrid.forEach(caseGrid => {
    console.log(caseGrid);
  })
}

function fillGrid(difficulty){
  putNumberCase()
  let bomb = {
    src: '/assets/bomb.png'
  }

 for (let index = 0; index < difficulty.nbrBomb; index++) {

  const aleaRow = Math.floor(Math.random() * difficulty.nbrRowGrid);
  const aleaColumn = Math.floor(Math.random() * difficulty.nbrColumnGrid);
  let casse = document.getElementById(`${aleaRow}.${aleaColumn}`);
  let checkBomb = casse.getElementsByTagName('img');

  if (checkBomb.length < 1) {
    createBomb(casse,bomb)
  } else {
    index--;
  }
  
 }
  
}

function createBomb(casse,bomb){
  let bombGrid = document.createElement('img');
  bombGrid.src = bomb.src;
  bombGrid.classList.add('bomb');
  casse.appendChild(bombGrid);
}


function reveal(){
  let casesGrid = document.querySelectorAll('.case');
  casesGrid.forEach(cases => {
    cases.addEventListener('click', () => {
      let caseClase = cases.classList;
      if (caseClase.contains('hidden')) {
        cases.classList.add('reveal')
        cases.classList.remove('hidden')
      }
      if (caseClase.contains('reveal')){
      }
    })
  });
}


buttonChoiceDifficulty.addEventListener("change", () => {
  let rows = document.querySelectorAll('.row');
  rows.forEach(row => {
    row.remove();
  })
  createGrid(difficultySettings[buttonChoiceDifficulty.value])
  fillGrid(difficultySettings[buttonChoiceDifficulty.value])
  reveal();
})
createGrid(difficultySettings[buttonChoiceDifficulty.value])
fillGrid(difficultySettings[buttonChoiceDifficulty.value])
reveal();