// seleção dos elementos
const emailInput = document.querySelector("#emailInput");
const resultMessage = document.querySelector("#resultMessage");
const emailForm = document.querySelector("#emailForm");

// evento que controla/ativa a submissão do form
emailForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value;

  //validar email
  const isValid = validateEmail(email);

  if (isValid) {
    resultMessage.textContent = "E-mail valido!";
    resultMessage.style.color = "green";
  } else {
    resultMessage.textContent = "E-mail Invalido!";
    resultMessage.style.color = "red";
  }
});

//função validar email
const validateEmail = (email) => {
  //padrão: texto@texto.texto
  const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
  return regex.test(email);
};
