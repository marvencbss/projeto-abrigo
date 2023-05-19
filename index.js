let menu
let codigo = 0
let abrigos = []

while (menu !== 4) {
    menu = Number (prompt(`===== ABRIGOS TEMPORÁRIOS =====
    1. Cadastrar abrigo
    2. Listar abrigos
    3. Procurar abrigo
    4. Sair
    Escolha uma opção:`)
    )

switch (menu) {
    case 1:
      cadastrarAbrigo();
      break;
    case 2:
      listar();
      break;
    case 3:
      procurarAbrigo();
      break;
    case 4:
        alert("Obrigado pelo acesso")
        break;
    default:
      
        alert("Essa opção não existe");
      break;

  }
}

function cadastrarAbrigo() {
  codigo +=1
  const nome = prompt("Digite o nome do abrigo");
  const endereco = (prompt("Digite o endereço do abrigo"));
  const telefone = Number(prompt("Digite o telefone do abrigo"));
  const capLotAbrigo = Number(prompt("Digite a capacidade do abrigo"));
  const cidade = prompt("Digite sua cidade");
    
  
    const abrigo = {
codigo,
nome,
endereco,
telefone,
capLotAbrigo,
cidade,
}

abrigos.push(abrigo)
alert("Abrigo cadastrado com sucesso")
}

function listar() {
    if (abrigos.length === 0) {
      alert("Não existem abrigos cadastrados");
    } else {
      let mensagem = `
      LISTAGEM DE ABRIGOS:
      --------------------
      CÓDIGO | NOME | ENDEREÇO | TELEFONE | CAPACIDADE | CIDADE
      `;
  
      for (let abrigo of abrigos) {
        mensagem += `\n           ${abrigo.codigo} | ${abrigo.nome} | ${abrigo.endereco} | ${abrigo.telefone} | ${abrigo.capLotAbrigo} | ${abrigo.cidade}`;
      }
      alert(mensagem);
    }
  }




  function procurarAbrigo() {
    if (abrigos.length === 0) {
      alert("Não existem abrigos cadastrados");
    } else {
      const buscaCidade = prompt("Digite sua cidade").toLowerCase();
  
      let mensagem = `LISTAGEM DE ABRIGOS:
      --------------------
      CÓDIGO | NOME | ENDEREÇO | TELEFONE | CAPACIDADE | CIDADE
      ---------------------------------------------------------------------------------------------------------`;
  
      for (let abrigo of abrigos) {
        if (abrigo.cidade.includes(buscaCidade)) {
          mensagem += `\n           ${abrigo.codigo} | ${abrigo.nome} | ${abrigo.endereco} | ${abrigo.telefone} | ${abrigo.capLotAbrigo} | ${abrigo.cidade}`;
        }
      }
  
      alert(mensagem);
    }
  }
