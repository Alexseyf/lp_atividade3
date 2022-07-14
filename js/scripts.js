const form = document.querySelector("form");

const titulo = [];
const console = [];
const preco = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  titulo.push(form.titulo.value);
  console.push(form.console.value);
  const valor = Number(form.preco.value);
  preco.push(valor);
  alert("Produto cadastrado com sucesso!");
  form.reset();
  listar();
  let inputPrimeiro = document.querySelector("#titulo");
  inputPrimeiro.focus();
});

function listar() {
  let tBody = document.getElementById("tBody");
  tBody.innerText = "";

  for (let i = 0; i < titulo.length; i++) {
    let tr = tBody.insertRow();

    let td_id = tr.insertCell();
    let td_titulo = tr.insertCell();
    let td_console = tr.insertCell();
    let td_preco = tr.insertCell();

    td_id.innerText = i + 1;
    td_titulo.innerText = titulo[i];
    td_console.innerText = console[i];
    td_preco.innerText = preco[i].toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
}

function listarConsole() {
  let tBody = document.getElementById("tBody");
  tBody.innerText = "";
  const pesqconsole = prompt("Digite o console: ").toUpperCase();

  let contador = 0;
  for (let i = 0; i < titulo.length; i++) {
    if (console[i].toUpperCase() == pesqconsole) {
      let tr = tBody.insertRow();

      let td_id = tr.insertCell();
      let td_titulo = tr.insertCell();
      let td_console = tr.insertCell();
      let td_preco = tr.insertCell();

      td_id.innerText = i + 1;
      td_titulo.innerText = titulo[i];
      td_console.innerText = console[i];
      td_preco.innerText = preco[i].toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

      contador = contador + 1;
    }
  }

  if (contador == 0) {
    alert(`Não foram encontrados jogos para "${pesqconsole}"`);
  }
}

function listarPreco() {
  let tBody = document.getElementById("tBody");
  tBody.innerText = "";
  const pesqPreco = Number(prompt("Digite a valor máximo: "));

  let contador = 0;
  for (let i = 0; i < preco.length; i++) {
    if (preco[i] <= pesqPreco) {
      let tr = tBody.insertRow();

      let td_id = tr.insertCell();
      let td_titulo = tr.insertCell();
      let td_console = tr.insertCell();
      let td_preco = tr.insertCell();

      td_id.innerText = i + 1;
      td_titulo.innerText = titulo[i];
      td_console.innerText = console[i];
      td_preco.innerText = preco[i].toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

      contador = contador + 1;
    }
  }

  if (contador == 0) {
    alert(
      `Não foram encontrados jogos com valor máximo de R$ ${pesqPreco.toFixed(
        2
      )}`
    );
  }
}

function excluirJogo() {
  const delJogo = Number(prompt("Informe o ID do jogo a ser excluído? "));

  if (delJogo == "") {
    return;
  }

  if (delJogo > titulo.length) {
    alert("Erro... Jogo não encontrado");
    return;
  }
  // exclui um elemento do vetor
  const excluido = titulo.splice(delJogo - 1, 1);
  console.splice(delJogo - 1, 1);
  preco.splice(delJogo - 1, 1);

  alert(`"${excluido}" excluído com sucesso`);
  listar();
}

function estatisticas() {
  let totalJogos = 0;
  let totalValor = 0;
  for (let i = 0; i < titulo.length; i++) {
    totalJogos++;
    totalValor = totalValor + preco[i];
  }
  if (totalJogos == 0) {
    alert("Não há jogos em estoque");
    return;
  } else {
    alert(
      `Há ${totalJogos} jogo(s) em estoque totalizando ${totalValor.toLocaleString(
        "pt-br",
        { style: "currency", currency: "BRL" }
      )}`
    );
  }
}
