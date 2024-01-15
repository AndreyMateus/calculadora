function geraCalculadora() {
  return {
    display: document.querySelector(".display"),
    iniciar() {
      this.cliqueBotao();
      this.pressionaTecla();
      this.animacaoTecla();
    },
    cliqueBotao() {
      document.addEventListener("click", (e) => {
        const elementoClicado = e.target;

        if (elementoClicado.classList.contains("btn-calc")) {
          this.display.value += elementoClicado.innerText;
        }
        if (elementoClicado.classList.contains("btn-clear")) {
          this.limpaDisplay();
        }
        if (elementoClicado.classList.contains("btn-result")) {
          this.calculaValor();
        }
        if (elementoClicado.classList.contains("remove-last-number")) {
          this.removeLastNumber();
        }
      });
    },
    limpaDisplay() {
      this.display.value = "";
    },
    calculaValor() {
      try {
        const result = eval(this.display.value);
        if (result === undefined) {
          this.limpaDisplay();
          return;
        }
        this.display.value = result;
      } catch (error) {
        alert("Valor inválido!.");
      }
    },
    pressionaTecla() {
      document.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          this.calculaValor();
        }
      });
    },
    removeLastNumber() {
      this.display.value = this.display.value.slice(0, -1);
    },
    animacaoTecla() {
      document.addEventListener("keyup", (event) => {
        const btns = document.querySelectorAll("button");
        for (let btn of btns) {
          if (event.key === btn.innerText) {
            this.animacaoElemento(btn);
          } else if (event.key === btn.value) {
            this.animacaoElemento(btn);
          }
        }
      });
    },
    animacaoElemento(elementoRef) {
      elementoRef.classList.add("btn-clicado");
      setTimeout(() => {
        elementoRef.classList.remove("btn-clicado");
      }, 180);
    },
  };
}

const calculadora = geraCalculadora();
calculadora.iniciar();
