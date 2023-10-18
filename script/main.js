let buttonChoiceDifficulty = document.querySelector('select')

buttonChoiceDifficulty.addEventListener("change", () => {
  console.log(buttonChoiceDifficulty.value)
})

const difficultySettings = {
  easy : {
    "nbrBomb" : 10,
    "nbrColumnGrid" : 10,
    "nbrRowGrid" : 10,
  },
  medium : {
    "nbrBomb" : 20,
    "nbrColumnGrid" : 20,
    "nbrRowGrid" : 20,
  },
  hard : {
    "nbrBomb" : 40,
    "nbrColumnGrid" : 40,
    "nbrRowGrid" : 40,
  }
}

function createGrid(difficulty){
  const main = document.querySelector('.main')
  for (let indexRow = 0; indexRow < difficulty.nbrRowGrid; indexRow++) {
    nbrRowGrid = document.createElement('div')
    nbrRowGrid.classList.add('row');

    for (let index = 0; index < difficulty.nbrColumnGrid; index++) {
      caseGrid = document.createElement('div')
      caseGrid.classList.add('case','hidden');
      caseGrid.setAttribute('id', `${indexRow}.${index}`);
      main.appendChild(nbrRowGrid);
      nbrRowGrid.appendChild(caseGrid);
      
    } 
  }
}

function fillGrid(nbrBomb,nbrRowGrid,nbrColumnGrid){
  
  let bomb = {
    src: '/assets/bomb.png'
  }

 for (let index = 0; index < nbrBomb; index++) {

  const aleaRow = Math.floor(Math.random() * nbrRowGrid);
  const aleaColumn = Math.floor(Math.random() * nbrColumnGrid);
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

createGrid(difficultySettings.easy)

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



reveal();
fillGrid(difficultySettings.easy.nbrBomb, difficultySettings.easy.nbrRowGrid, difficultySettings.easy.nbrColumnGrid)
