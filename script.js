// script.js

document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.querySelector('.Button_primary');
    const decryptButton = document.querySelector('.Button_secundary');
    const resultAside = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    const copyButton = resultAside.querySelector('button');

    encryptButton.addEventListener('click', function(event) {
        event.preventDefault();
        encryptText();
    });

    decryptButton.addEventListener('click', function(event) {
        event.preventDefault();
        decryptText();
    });

    copyButton.addEventListener('click', function(event) {
        event.preventDefault();
        copyToClipboard();
    });
});

function encryptText() {
    let text = document.getElementById('inputText').value;
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    showResult(encryptedText);
}

function decryptText() {
    let text = document.getElementById('inputText').value;
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    showResult(decryptedText);
}

function showResult(text) {
    const resultAside = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    const copyButton = resultAside.querySelector('button');

    resultText.innerHTML = `<p class=result_text >${text}</p>`;
    copyButton.classList.remove('hidden');
}

function copyToClipboard() {
    let resultText = document.getElementById('resultText').innerText;
    navigator.clipboard.writeText(resultText).then(function() {
        alert('Texto copiado al portapapeles!');
    }, function(err) {
        console.error('Error al copiar al portapapeles: ', err);
    });
}
