document.querySelector('#shin').addEventListener('keydown',function(event){
    if(isNaN(event.key) && event.key != 'Backspace'){
        event.preventDefault()
    }
})

qtdItem = 0;

document.getElementById('btn3').addEventListener('click',function(){
qtdItem++;
document.getElementById('contadorSacola').textContent= qtdItem;
})

//!VALOR CARRINHO

function atualizar(){
    valorSubtotal = (valorInicial * qtdd).toFixed(2);
    subtotal.textContent = valorSubtotal;
}
function mostrarEmail(){
  alert("Email enviado!");
}  

