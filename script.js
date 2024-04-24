document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
  
    var regexNome = /^[a-zA-ZÀ-ÿ]+\s+[a-zA-ZÀ-ÿ]+$/;
    var regexTelefone = /\(\d{2}\)\d{9}/;
  
    if (!regexNome.test(nome)) {
      document.getElementById('aviso').innerText = 'Por favor, insira o nome completo (Nome e Sobrenome).';
      return false; // Retorna falso para impedir o envio do formulário
    } else if (!regexTelefone.test(telefone)) {
      document.getElementById('aviso').innerText = 'Por favor, insira um telefone válido no formato (xx)xxxxxxxxx.';
      return false; // Retorna falso para impedir o envio do formulário
    } else {
      document.getElementById('aviso').innerText = '';
      adicionarContato(nome, telefone);
    }
  });
  
  function adicionarContato(nome, telefone) {
    var tabela = document.getElementById('contatosTable');
    var novaLinha = tabela.insertRow();
  
    var celulaNome = novaLinha.insertCell(0);
    var celulaTelefone = novaLinha.insertCell(1);
  
    celulaNome.innerHTML = nome;
    celulaTelefone.innerHTML = telefone;
  
    // Obtenha todas as linhas da tabela, exceto a primeira (cabeçalho)
    var linhas = Array.from(tabela.rows).slice(1);
    
    // Ordene as linhas pelo conteúdo da primeira célula (nome)
    linhas.sort((a, b) => a.cells[0].innerHTML.localeCompare(b.cells[0].innerHTML));
    
    // Atualize a ordem das linhas na tabela
    linhas.forEach(linha => tabela.appendChild(linha));
  }
  