function lerXML() {
  const tabela = document.getElementById("tabelaXML"); 
  const req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const dadosXML = this.responseXML;
      const dados = dadosXML.getElementsByTagName("cliente");
      let conteudo =
        "<tr>" +
        "  <th>ID</th>" +
        "  <th>Nome</th>" +
        "  <th>Altura</th>" +
        "</tr>";

      for (let i = 0; i < dados.length; i++) {
        const id = dados[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
        const nome = dados[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
        const altura = dados[i].getElementsByTagName("altura")[0].childNodes[0].nodeValue;

        conteudo += `<tr>
          <td>${id}</td>
          <td>${nome}</td>
          <td>${altura}</td>
        </tr>`;
      }
      tabela.innerHTML = conteudo;
    }
  };

  req.open("GET", "dados.xml", true);
  req.send();
}

function lerClientes() {
  const tabela = document.getElementById("tabelaCliente");
  const req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const dadosXML = this.responseXML;
      const clientes = dadosXML.getElementsByTagName("cliente");

      let conteudo =
        "<tr>" +
        "  <th>ID</th>" +
        "  <th>Nome</th>" +
        "  <th>Altura</th>" +
        "</tr>";

      for (let i = 0; i < clientes.length; i++) {
        const id = clientes[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
        const nome = clientes[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
        const altura = clientes[i].getElementsByTagName("altura")[0].childNodes[0].nodeValue;

        conteudo += `<tr>
          <td>${id}</td>
          <td>${nome}</td>
          <td>${altura}</td>
        </tr>`;
      }

      tabela.innerHTML = conteudo;
    }
  };

  req.open("GET", "servidor.php?clientes", true);
  req.send();
}
