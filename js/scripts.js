// Seleção de elementos

const containerQr = document.querySelector(".container");
const btoForm = document.querySelector(".form-qr button");
const inputForm = document.querySelector("input");
const imgQrCode = document.querySelector("#qr-code img");

// Função
function geradorQrCode() {
  const inputValue = inputForm.value;

  if (!inputValue) return;

  btoForm.innerHTML = "Gerando o Qr Code...";

  imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${inputValue}`;

  imgQrCode.addEventListener("load", () => {
    containerQr.classList.add("ativo");
    btoForm.innerHTML = "Codigo Gerado !";
  });
}

// Seleção de Eventos

btoForm.addEventListener("click", () => {
  geradorQrCode();
});

inputForm.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    geradorQrCode();
  }
});

inputForm.addEventListener("keyup", () => {
  containerQr.classList.remove("ativo");
  btoForm.innerHTML = "Gerar Qr Code";
});
