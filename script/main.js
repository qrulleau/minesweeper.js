let buttonChoiceDifficulty = document.querySelector('select')

buttonChoiceDifficulty.addEventListener("change", () => {
  console.log(buttonChoiceDifficulty.value)
})

const difficultySettings = {
  easy : {
    "numberBomb" : 10,
    "columnGrid" : 10,
    "RowGrid" : 10,
  },
  medium : {
    "numberBomb" : 20,
    "columnGrid" : 20,
    "RowGrid" : 20,
  },
  hard : {
    "numberBomb" : 40,
    "columnGrid" : 40,
    "RowGrid" : 40,
  }
}

function createGrid(difficulty){
  console.log(Math.floor(Math.random() * 10));
  const main = document.querySelector('.main')
  for (let index = 0; index < difficulty.RowGrid; index++) {
    rowGrid = document.createElement('div')
    rowGrid.classList.add('row');

    for (let index = 0; index < difficulty.columnGrid; index++) {
      caseGrid = document.createElement('div')
      caseGrid.classList.add('case');
      main.appendChild(rowGrid);
      rowGrid.appendChild(caseGrid);
      
    } 
  }
}
createGrid(difficultySettings.easy)


