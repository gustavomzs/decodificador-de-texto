const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem"); 

function copiarTexto() {
    var textoACopiar = document.getElementById('inputMensagem');
    textoACopiar.select();
    document.execCommand('copy');
    alert("Texto copiado para a área de transferência!");
}
function btnEncriptar ()   {
    const textEncriptado = encriptar(textArea.value);
        mensagem.value= textEncriptado;
            (document.querySelector(".text-area")).value = "";
}

function encriptar(stringencriptada) {
    let matrizCodigo = [["e" ,"enter"] , ["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]  ]
        stringencriptada = stringencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringencriptada.includes(matrizCodigo[i] [0])){
            stringencriptada = stringencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo [i] [1]); 
        }
    } 

    return stringencriptada;
}
//
function btnDesencriptar ()   {
    const textEncriptado = desencriptar(textArea.value);
    mensagem.value= textEncriptado;
        (document.querySelector(".text-area")).value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e" ,"enter"] , ["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]  ]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i] [1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo [i] [0]); 
        }
    } 

    return stringDesencriptada;
}