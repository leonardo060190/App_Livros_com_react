//Componente para incluir livros no banco de dados
//declaração da função do componente IncluirLivros
import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";
//register serve para definir os nomes dos campos do form (validações)
//handleSubmit, para indicar o método a ser adicionado no evento onSubmit do form
const IncluirEditoras = () => {

    const { register, handleSubmit } = useForm();
    const [aviso, setAviso] = useState("");
    //metodo chamado ao enviar form onSubmit
    const salvar = async (campos) => {
        try {
            const resposta = await api.post("Editoras/cadastro", campos);
            console.log(resposta)
            setAviso("Editora cadastrada com sucesso!");
        } catch (error) {
            console.log(error)
            setAviso("Erro ao cadastrar Editora!");
        }



        //limpa os campos do formulário para uma nova inclusão
        //JSON.stringify() converte um objeto javascript para uma string Json
        //alert(JSON.stringify(campos));
    }

    function handlePhone(event) {
        const input = event.target;
        let phoneNumber = input.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
        phoneNumber = phoneNumber.replace(/^(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3"); // Aplica a formatação desejada
        input.value = phoneNumber; // Atualiza o valor do campo
    }
    
    function handleCEP(event) {
        const input = event.target;
        let cep = input.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
        cep = cep.replace(/^(\d{5})(\d{3})/, "($1)-($2)"); // Aplica a formatação desejada
        input.value = cep; // Atualiza o valor do campo
    }
    
    
    //form onSubmit ={handleSubmit(salvar)}

    return ( //aqui é o que vai ser exibido na tela
        <div className="container">
            <h4 className="fst-italic mt-3">Inclusão de Editoras</h4>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" className="form-control" id="nome" required autoFocus  {...register("nome")} />
                </div>
                <div className="row mt-2">
                    <div className="col-sm-8">
                        <div className="form-group mt-2">
                            <label htmlFor="rua">Rua:</label>
                            <input type="text" className="form-control" id="rua" required autoFocus {...register("rua")} />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group mt-2">
                            <label htmlFor="cep">Cep:</label>
                            <input type="text" className="form-control" id="cep" maxLength={9} onChange={handleCEP} required autoFocus {...register("cep")} />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-5">
                            <div className="form-group mt-2">
                                <label htmlFor="cidade">Cidade:</label>
                                <input type="text" className="form-control" id="cidade" required autoFocus {...register("cidade")} />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group mt-2">
                                <label htmlFor="estado">Estado:</label>
                                <input type="text" className="form-control" id="estado" required autoFocus {...register("estado")} />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group mt-2">
                                <label htmlFor="telefone">Telefone:</label>
                                <input type="tel" className="form-control" id="telefone" maxLength="15"
                                    onKeyUp={handlePhone} required autoFocus {...register("telefone")} />
                            </div>
                        </div>
                    </div>
                </div>

                <input type="submit" className="btn btn-outline-primary mt-3" value="Enviar" />
                <input type="reset" className="btn btn-outline-danger mt-3 ms-3" value="Limpar" />

            </form>
            <div className={aviso.startsWith("OK!") ? "alert alert-success" :
                aviso.startsWith("Erro") ? "alert alert-danger" : ""}> {aviso}
            </div>
        </div>

    );

}

export default IncluirEditoras;