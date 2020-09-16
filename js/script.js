// se os campos de email e nome tiverem preenchidos
  // Envie os dados
// Senão 
  //Peça a usuária que preencha os campos

  if(document.getElementByID("nome").value != "" && document.getElementByID("email").value != ""){
    alert("Prontinho! Você receberá as novidades por email.")
  } else {
    alert("Por favor, preencha os campos nome e email.")
  }