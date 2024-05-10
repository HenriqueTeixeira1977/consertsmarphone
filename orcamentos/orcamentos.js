document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio padrão do formulário
    
    // Geração do código de ordem de serviço com 5 dígitos
    var codigo = Math.floor(10000 + Math.random() * 90000);
    document.getElementById('codigo').value = codigo;
    
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
    // Por exemplo, você pode usar XMLHttpRequest ou Fetch API para enviar uma solicitação POST
    // com os dados do formulário para o servidor
    
    // Exemplo de envio usando Fetch API:
    /*
    fetch('URL_DO_SERVIDOR', {
      method: 'POST',
      body: new FormData(document.getElementById('formulario'))
    })
    .then(response => {
      if (response.ok) {
        alert('Formulário enviado com sucesso!');
        // Você pode redirecionar o usuário para outra página após o envio bem-sucedido
        // window.location.href = 'pagina_de_sucesso.html';
      } else {
        alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
    });
    */
  });