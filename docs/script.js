
const formulario = document.getElementById("formulario");
const mensagemSucesso = document.getElementById("mensagemSucesso");
const botaoTema = document.getElementById("botao-tema");
const corpo = document.body;

formulario.addEventListener("submit", () => {
  mensagemSucesso.style.display = "block";
});

function aplicarTema(tema) {
  
  if (tema === "dark") {
    corpo.classList.add("dark-mode");
    botaoTema.checked = true;

  } else {
    corpo.classList.remove("dark-mode");
    botaoTema.checked = false;
  }

  localStorage.setItem("theme", tema);
}


botaoTema.addEventListener("change", () => {
  if (botaoTema.checked) {
    aplicarTema("dark");
  } else {
    aplicarTema("light");
  }
});

carregarTemaInicial();