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
            const resposta = await api.post("cadastro/cadastro", campos);
            setAviso("Editoras cadastrado com sucesso!");
        } catch (error) {
            setAviso("Erro ao cadastrar Editoras!");
        }
        //JSON.stringify() converte um objeto javascript para uma string Json

        //alert(JSON.stringify(campos));
    }
    //form onSubmit ={handleSubmit(salvar)}

    return ( //aqui é o que vai ser exibido na tela
        <div className="container">
            <div className="fst-italic mt-3">Inclusão de Editoras</div>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" className="form-control" id="nome" required autoFocus {...register("nome")} />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="rua">Rua:</label>
                    <input type="text" className="form-control" id="rua" required autoFocus {...register("rua")} />
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group mt-2">
                            <label htmlFor="cep">Cep:</label>
                            <input type="text" className="form-control" id="cep" required autoFocus {...register("cep")} />
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group mt-2">
                            <label htmlFor="cidade">Cidade:</label>
                            <input type="text" className="form-control" id="cidade" required autoFocus {...register("cidade")} />
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group mt-2">
                            <label htmlFor="estado">Estado:</label>
                            <input type="text" className="form-control" id="estado" required autoFocus {...register("estado")} />
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="col-sm-8">
                            <div className="form-group">
                                <label htmlFor="telefone">Telefone:</label>
                                <input type="text" className="form-control" id="telefone" required autoFocus {...register("telefone")} />
                            </div>
                        </div>
                    </div>
                </div>


                <input type="submit" className="btn btn-outline-primary mt-3" value="Enviar" />
                <input type="reset" className="btn btn-outline-danger mt-3 ms-3" value="Limpar" />

            </form>
            <div className="alert"></div>
        </div>

    );

}

export default IncluirEditoras;