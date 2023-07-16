const textInput = document.querySelector('input[type="text"]')
const numberInput = document.querySelector('input[type="number"]')
const checkboxInput = document.querySelector('input[type="checkbox"]')

const radiobox = document.querySelectorAll('input[name="gruppo2"]')

console.log(radiobox)


function win(){

  let won1 = false
  let won2 = false
  


  const inputListQ1 = document.querySelectorAll('[name="gruppo"]')
  for(const input of inputListQ1) {
    if(input.value === '3' && input.checked) {
      won1 = true
    } 
  }
  const inputListQ2 = document.querySelectorAll('[name="gruppo2"]')
  for(const input of inputListQ2) {
    if(input.value === '5' && input.checked) {
      won2 = true
    } 
  }
  if(won1 && won2){
    alert('Congratulazioni!!! Hai vinto!!!')
  } else {
    alert('Hai sbagliato .. riprova !!')
  }
} 
