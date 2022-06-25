const form = document.querySelector("form")

const marca = [];
const modelo = [];
const preco = [];

form.addEventListener("submit", (e) => {
  e.preventDefault()
  marca.push(form.marca.value)
  modelo.push(form.modelo.value)
  preco.push(form.preco.value)
  alert("Produto cadastrado com sucesso!")
  form.reset()
})

function listar() {
  let tBody = document.getElementById('tBody');
  tBody.innerText = "";

  for (let i = 0; i < marca.length; i++){
    let tr = tBody.insertRow()

    let td_id = tr.insertCell();
    let td_marca = tr.insertCell();
    let td_modelo = tr.insertCell();
    let td_preco = tr.insertCell();

    td_id.innerText = i+1
    td_marca.innerText = marca[i]
    td_modelo.innerText = modelo[i]
    td_preco.innerText = preco[i]
  }
}

function listarMarca(){
  let tBody = document.getElementById('tBody');
  tBody.innerText = "";
  const pesqMarca = prompt("Digite a marca: ").toUpperCase();

  let contador = 0;
  for (let i = 0; i < marca.length; i++) {
    if (marca[i].toUpperCase() == pesqMarca) {
      
      let tr = tBody.insertRow()

      let td_id = tr.insertCell();
      let td_marca = tr.insertCell();
      let td_modelo = tr.insertCell();
      let td_preco = tr.insertCell();
  
      td_id.innerText = i+1
      td_marca.innerText = marca[i]
      td_modelo.innerText = modelo[i]
      td_preco.innerText = preco[i]

      contador = contador + 1;
    }
  }

  if (contador == 0) {
    alert(`Não foram encontrados produtos da marca "${pesqMarca}"`);
  }
}

/* function adicionar() {
  var prodmarca = document.querySelector('#marca').value;
  marca.push(prodmarca)
  var prodmodelo = document.querySelector('#modelo').value;
  modelo.push(prodmodelo)
  var prodpreco = document.querySelector('#preco').value;
  preco.push(prodpreco)
  alert("Produto cadastrado")
} */
