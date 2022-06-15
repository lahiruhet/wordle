const tileDisplay = document.querySelector('.tile-container');
const keyboard = document.querySelector('.key-container');
const messageDisplay = document.querySelector('.message-container')

const keys = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F',
                'G','H','J','K','L','ENTER','Z','X','C','V','B','N','M','<<']
                


const guessRows = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
]

guessRows.forEach((guessRow,guessRowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.setAttribute('id',"GuessRow-" + guessRowIndex);
    tileDisplay.append(rowElement);
    guessRow.forEach((guess,guessIndex) => {
        const tileElement = document.createElement('div');
        tileElement.setAttribute('id',"GuessRow-"+ guessRowIndex + "-Tile-" + guessIndex);
        tileElement.classList.add('tile');
        rowElement.append(tileElement); 
    })
    tileDisplay.append(rowElement);
})

let currentRow = 0;
let currentTile = 0;
let wordle = 'SUNNY'

const handleClick = (key)=>{
    console.log('clicked', key);

    if (key==='<<'){
          deleteLetter();
          //console.log('guessRows', guessRows)
          return
    }
    if (key==='ENTER'){
        checkRow();
      //console.log('guessRows', guessRows)
         return
    }

    addLetter(key)
    //console.log('guessRows', guessRows)
}


const addLetter = (key) => {
    if(currentTile<5 && currentRow<6){
        const tile = document.getElementById('GuessRow-'+ currentRow + '-Tile-' + currentTile);
        tile.textContent = key;
        guessRows[currentRow][currentTile] = key;
        currentTile++;
        //tile.setAttribute('data', letter);
     }
}


keys.forEach(key => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = key;
    buttonElement.setAttribute('id',key);
    buttonElement.addEventListener('click', () => handleClick(key));
    keyboard.append(buttonElement);
})

const deleteLetter = () => {
    if(currentTile>0){
        currentTile--;
        const tile = document.getElementById('GuessRow-'+ currentRow + '-Tile-' + currentTile);
        tile.textContent = '';
        guessRows[currentRow][currentTile] = key;
      //tile.setAttribute('data', letter);
    }
}

const checkRow = () => {
    const guess = guessRows[currentRow].join('')
    if(currentTile==5){
        if(guess == wordle){
            showMessage('congrats')
        }
    }

}

const showMessage = (message) => {
    const messageText = document.createElement('p')
    messageText.textContent = message;
    messageDisplay.append(messageText)
}
