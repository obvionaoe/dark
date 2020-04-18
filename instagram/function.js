document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    let a = document.querySelectorAll('button[type=button]').length;
    ["Enviar", "Send", "Senden", "Invia", "Skicka", "Envoyer", "Verzenden", "Отправить"].includes(document.querySelectorAll('button[type=button]')[a-1].innerText) && document.querySelectorAll('button[type=button]')[a-1].click();
  }
});