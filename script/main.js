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
  console.log(Math.floor(Math.random() * 10));
  const main = document.querySelector('.main')
  for (let index = 0; index < difficulty.nbrRowGrid; index++) {
    nbrRowGrid = document.createElement('div')
    nbrRowGrid.classList.add('row');

    for (let index = 0; index < difficulty.nbrColumnGrid; index++) {
      caseGrid = document.createElement('div')
      caseGrid.classList.add('case','hidden');
      caseGrid.innerHTML = 'x';
      main.appendChild(nbrRowGrid);
      nbrRowGrid.appendChild(caseGrid);
      
    } 
  }
}

function fillGrid($nbrBomb,$nbrRowGrid){

}
createGrid(difficultySettings.easy)

function reveal(){
  let casesGrid = document.querySelectorAll('.case');
  casesGrid.forEach(cases => {
    cases.addEventListener('click', () => {
      let caseClase = cases.classList;
      console.log(caseClase);
      if (caseClase.contains('hidden')) {
        cases.classList.add('reveal')
        cases.classList.remove('hidden')
      }
      if (caseClase.contains('reveal')){
        console.log('reveal')
      }
    })
  });
}



reveal();

