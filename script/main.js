let buttonChoiceDifficulty = document.querySelector('select')

buttonChoiceDifficulty.addEventListener("change", () => {
  console.log(buttonChoiceDifficulty.value)
})

const difficultySettings = {
  easy : {
    "numberBomb" : 20,
    "columnGrid" : 20,
    "RowGrid" : 20,
  },
  medium : {
    "numberBomb" : 40,
    "columnGrid" : 40,
    "RowGrid" : 40,
  },
  hard : {
    "numberBomb" : 60,
    "columnGrid" : 60,
    "RowGrid" : 60,
  }
}

function createGrid(difficulty){
  const main = document.querySelector('.main')
  console.log(difficulty)
  for (let index = 0; index < difficulty.columnGrid; index++) {
    columnGrid = document.createElement('div')
    main.appendChild(columnGrid);
    console.log("bonjour")
    
  }
  
}
createGrid(difficultySettings.easy)


