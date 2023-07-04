//Componente para incluir livros no banco de dados
//declaração da função do componente IncluirLivros
import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";
//register serve para definir os nomes dos campos do form (validações)
//handleSubmit, para indicar o método a ser adicionado no evento onSubmit do form
const IncluirAutores = () => {

    const { register, handleSubmit } = useForm();
    const [aviso, setAviso] = useState("");
    //metodo chamado ao enviar form onSubmit
    const salvar = async (campos) => {
        try {
            const resposta = await api.post("autores/cadastro", campos);
            setAviso("Autor cadastrado com sucesso!");
        } catch (error) {
            setAviso("Erro ao cadastrar Autor!");
        }
        //JSON.stringify() converte um objeto javascript para uma string Json

        //alert(JSON.stringify(campos));
    }
    //form onSubmit ={handleSubmit(salvar)}

    return ( //aqui é o que vai ser exibido na tela
        <div className="container">
            <div className="fst-italic mt-3">Inclusão de Autores</div>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" className="form-control" id="nome" required autoFocus {...register("nome")} />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input type="text" className="form-control" id="autor" required autoFocus {...register("sobrenome")} />
                </div>
                <div className="row mt-1">
                    <div className="col-sm-3">
                        <div className="form-group">
                            <label htmlFor="data_nascimento">Data de Nascimento:</label>
                            <input type="data" className="form-control" id="data_nascimento" required autoFocus {...register("data_nascimento")} />
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-1">
                        <div className="form-group">
                            <label htmlFor="sexo">Sexo:</label>
                            <input type="text" className="form-control" id="sexo" required autoFocus {...register("sexo")} />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone:</label>
                            <input type="text" className="form-control" id="telefone" required autoFocus {...register("telefone")} />
                        </div>
                    </div>
                    <div className="form-group mt-2">
                        <div className="mb-3">
                            <label htmlFor="descricao" class="form-label">Descrição:</label>
                            <textarea className="form-control" id="descricao" rows="4" requiredautoFocus {...register("descricao")}></textarea>
                        </div>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="foto">URl da foto:</label>
                        <input type="url" className="form-control" id="foto" required  {...register("foto")} />
                    </div>

                </div>
                <input type="submit" className="btn btn-outline-primary mt-3" value="Enviar" />
                <input type="reset" className="btn btn-outline-danger mt-3 ms-3" value="Limpar" />

            </form>
            <div className="alert"></div>
        </div>

    );

}

export default IncluirAutores;