function lerXML() {
  const tabela = document.getElementById("tabelaCliente");
  const req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const dadosXML = this.responseXML;
      const dados = dadosXML.getElementsByTagName("cliente");
      let conteudo =
        "<tr> " +
        "     <th>ID</th> " +
        "     <th>Nome</th> " +
        "     <th>Altura</th> " +
        "</tr>";
      for (let i = 0; i < dados.length; i++) {
        // Acessa o id, nome e altura de cada cliente no XML
        /*
                dados[i].getElementsByTagName("id")[0]: Pega o primeiro elemento <id> do cliente i.

                childNodes[0].nodeValue: Pega o valor dentro dessa tag (por exemplo, "1", "2", etc.).
                */
        const id =
          dados[i].getElementsByTagName("id")[0].childNodes[0].nodeValue; // Pega o valor de ID
        const nome =
          dados[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue; // Pega o valor de Nome
        const altura =
          dados[i].getElementsByTagName("altura")[0].childNodes[0].nodeValue; // Pega o valor de Altura

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
