const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já incluso❌");
    return;
  }

  alert("Dia adicionado com sucesso✅");
  nlwSetup.addDay(today);
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};
nlwSetup.setData(data);
nlwSetup.load();

// Verificar se os dados foram zerados
if (Object.keys(data).length === 0) {
  alert("Reiniciado com sucesso");
  // Ou realizar alguma ação específica para quando os dados são zerados
}

// Função para zerar os resultados
function zerarResultados() {
  localStorage.removeItem('NLWSetup@habits');
  location.reload();
}

// Selecione o botão de "Zerar"
const reiniciarButton = document.querySelector("#zerar-button");

// Adicione um evento de clique ao botão de "Zerar"
reiniciarButton.addEventListener("click", zerarResultados);
