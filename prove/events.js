function clicked(event) {
    console.log(event)
    console.log('Abbiamo cliccato')
}

function hover() {
    console.log('Hai passato il mouse')
}

function leave() {
    console.log('Torna indietro')
}

const button = document.querySelector('input[type="button"]') 

button.addEventListener("click", clicked)

const textInput = document.querySelector('input[type="text"]')

textInput.addEventListener('keydown', function(event){
    console.log(event.target.value)
})