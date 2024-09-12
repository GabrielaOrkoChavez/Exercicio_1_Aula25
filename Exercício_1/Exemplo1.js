function Armazenar(){
let numero = document.getElementById('numero').value;
localStorage.setItem('NumeroArmazenado',numero)


alert('O número armazenado é: '+numero)

}