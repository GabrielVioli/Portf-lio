const form = document.getElementById("contact-form");
const msg = document.getElementById("success-msg");

form.addEventListener("submit", function() {
    msg.style.display="block";
});

const botaoTema = document.getElementById("tema-botao");
const corpo = document.body;

/**
 * @param {string} tema 
 */
function definirTema(tema) {
    corpo.classList.toggle("dark-mode", tema === "dark");
    botaoTema.checked = (tema === "dark");
    localStorage.setItem("theme", tema);
}

botaoTema.addEventListener("click", () => {
    const novoTema = botaoTema.checked ? "dark" : "light";
    definirTema(novoTema);
});

const temaSalvo = localStorage.getItem("theme");
const prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;

const temaInicial = temaSalvo || (prefereEscuro ? "dark" : "light");

definirTema(temaInicial);