import React from "react";
import axios from "axios";

class AutocompleteForm extends React.Component {
  itemBrasilApi = () => {
    const cep = document.getElementById('cep').value;
    if (cep !== "") {
      let url = `https://brasilapi.com.br/api/cep/v1/`;

      axios.get(url)
        .then(response => {
          const endereco = response.data;
          document.getElementById("rua").value = endereco.street;
          document.getElementById("cidade").value = endereco.city;
          document.getElementById("estado").value = endereco.state;
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            alert("CEP inválido");
          } else {
            alert("Erro ao fazer a requisição");
          }
        });
    }
  }

  componentDidMount() {
    let cep = document.getElementById("cep");
    cep.addEventListener("blur", this.itemBrasilApi);
  }

  render() {
    return (
      <div>
        <input type="text" id="cep" />
        <input type="text" id="rua" />
        <input type="text" id="cidade" />
        <input type="text" id="estado" />
      </div>
    );
  }
}

export default AutocompleteForm;
