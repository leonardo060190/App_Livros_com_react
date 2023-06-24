//Componente para incluir livros no banco de dados
//declaração da função do componente IncluirLivros
import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";
//register serve para definir os nomes dos campos do form (validações)
//handleSubmit, para indicar o método a ser adicionado no evento onSubmit do form
const IncluirLivros = () => {

    const { register, handleSubmit } = useForm();
    const [aviso, setAviso] = useState("");
    //metodo chamado ao enviar form onSubmit
    const salvar = async (campos) => {
        try {
            const resposta = await api.post("/livros", campos);
            setAviso("Livro cadastrado com sucesso!");
        } catch (error) {
            setAviso("Erro ao cadastrar livro!");
        }
        //JSON.stringify() converte um objeto javascript para uma string Json
        alert(JSON.stringify(campos));
    }
    //form onSubmit ={handleSubmit(salvar)}

    return ( //aqui é o que vai ser exibido na tela
        <div className="container">
            <div className="fst-italic mt-3">Inclusão</div>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="form-group">
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" className="form-control" id="titulo" autoComplete="off" required autoFocus {...register("titulo")} />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="autor">Autor</label>
                    <input type="text" className="form-control" id="autor" autoComplete="off" required  {...register("autor")} />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="foto">URl da foto:</label>
                    <input type="url" className="form-control" id="foto" autoComplete="off" required  {...register("foto")} />
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="ano">Ano de Publicação</label>
                            <input type="number" className="form-control" id="ano" required  {...register("ano")} />
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="form-group">
                        <label htmlFor="preco">Preço</label>
                        <input type="number" className="form-control" id="preco" step={0.01} required  {...register("preco")} />
                    </div>
                </div>
                <input type="submit" className="btn btn-outline-primary mt-3" value="Enviar" />
                <input type="reset" className="btn btn-outline-danger mt-3 ms-3" value="Limpar" />

            </form>
            <div className="alert"></div>
        </div>

    );

}

export default IncluirLivros;