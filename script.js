/* EFEITO DE DIGITAÇÃO */
const texto = "Construo projetos, estudo tecnologia e evoluo todos os dias.";
const el = document.getElementById("typed");
let i = 0;

function digitar() {
  if (i <= texto.length) {
    el.textContent = texto.slice(0, i);
    i++;
    setTimeout(digitar, 35);
  }
}

digitar();


/* ANIMAÇÃO AO ROLAR */
const elementos = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

elementos.forEach((elemento) => {
  observer.observe(elemento);
});


/* ANIMAÇÃO DOS CARDS */
const cards = document.querySelectorAll(".file");

cards.forEach((card, index) => {
  card.style.setProperty(
    "--delay",
    `${index * 100}ms`
  );
});


/* ANO AUTOMÁTICO */
const ano = new Date().getFullYear();
const copyright = document.querySelector(".footer__copy");

if (copyright) {
  copyright.innerHTML = `© ${ano} Wander Farias. Todos os direitos reservados.`;
}


/* MODAL */
function abrirModal(srcImagem) {
  const modal = document.getElementById("modal-certificado");
  const modalImg = document.getElementById("modal-img");

  modalImg.src = srcImagem;
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}


function fecharModal(event) {
  const modal = document.getElementById("modal-certificado");
  const modalImg = document.getElementById("modal-img");

  if (
    event.target === modal ||
    event.target.classList.contains("modal__close")
  ) {
    modal.classList.remove("show");
    document.body.style.overflow = "";

    setTimeout(() => {
      modalImg.src = "";
    }, 300);
  }
}


/* FECHAR MODAL COM ESC */
document.addEventListener(
  "keydown",
  (event) => {
    if (event.key === "Escape") {
      const modal = document.getElementById("modal-certificado");

      if (modal.classList.contains("show")) {
        modal.classList.remove("show");
        document.body.style.overflow = "";
        document.getElementById("modal-img").src = "";
      }
    }
  }
);