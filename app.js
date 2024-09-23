function adicionarCliente() {
  const nome = document.getElementById("input-name").value
  const email = document.getElementById("input-email").value
  const telefone = document.getElementById("input-tel").value
  const cidade = document.getElementById("input-cidade").value

  if (nome && email && telefone && cidade) {
    const template = document.querySelector(".template").cloneNode(true)
    template.querySelector("#span-nome").textContent = nome
    template.querySelector("#span-email").textContent = email
    template.querySelector("#span-telefone").textContent = telefone
    template.querySelector("#span-cidade").textContent = cidade

    const boxTemplate = document.querySelector("#box-template")
    boxTemplate.appendChild(template)

    template.classList.remove("template", "hide")

    const btnRemover = template.querySelector("#btn-remove")
    btnRemover.addEventListener("click", () => {
      removerCliente(btnRemover)
    })

    document.getElementById("form-cadastro").reset()
    alert("Cliente cadastrado com sucesso!")
  }
}

function removerCliente(botao) {
  botao.closest("#box-footer").remove()
}

document
  .getElementById("form-cadastro")
  .addEventListener("submit", function (e) {
    e.preventDefault()
    adicionarCliente()
  })
