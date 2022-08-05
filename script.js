const resultado = document.querySelector('.res');
const confirmar = document.querySelector('.igual');
const btn = document.getElementById('mode')

btn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
})

function insert(valor){
    resultado.innerHTML+= valor;
}

function clean(){
    resultado.innerHTML = '';
}

function backspace(){
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    }
}
function confirma(){
    if(resultado.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML).toFixed(2).replace(".", ",");

    }
}