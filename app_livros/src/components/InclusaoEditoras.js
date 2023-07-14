//Componente para incluir livros no banco de dados
//declaração da função do componente IncluirLivros
import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";
import InputMask from "react-input-mask";
//register serve para definir os nomes dos campos do form (validações)
//handleSubmit, para indicar o método a ser adicionado no evento onSubmit do form
const IncluirEditoras = () => {

    const { register, handleSubmit, setValue } = useForm();
    const [aviso, setAviso] = useState("");
    //metodo chamado ao enviar form onSubmit
    const salvar = async (campos) => {
        try {
            const resposta = await api.post("editoras", campos);
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


    // const para preencher os campos de endereço por uma api externa,
    //com a utilização do "cep" 
    const checkCEP = (e) => {

        const cep = e.target.value.replace(/\D/g, '');//pega o cep do campo e remove todos os caracteres não numéricos
        console.log(cep);

        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {// api 
            console.log(data);
            setValue('rua', data.logradouro);//insere no campo o rua que veio da api 
            setValue('bairro', data.bairro);//insere no campo o bairro que veio da api 
            setValue('cidade', data.localidade);//insere no campo o cidade que veio da api 
            setValue('estado', data.uf);// insere no campo o estado que veio da api 

        }).catch((Error) => alert("Cep Incorreto, Por favor Informe o Cep Correto!"));// exibe uma mensagen de erro se o cep estiver errado

    };


    //form onSubmit ={handleSubmit(salvar)}

    return ( //aqui é o que vai ser exibido na tela
        <div className="container">
            <h4 className="fst-italic mt-3">Inclusão de Editoras</h4>
            <form onSubmit={handleSubmit(salvar)}>

                <div className="row mt-2">
                    <div className="col-sm-9">
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" className="form-control" id="nome" required autoFocus  {...register("nome")} />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="form-group ">
                            <label htmlFor="telefone">Telefone:</label>
                            <input type="tel" className="form-control" id="telefone" maxLength="15" onKeyUp={handlePhone} required  {...register("telefone")} />
                        </div>
                    </div>
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" required {...register("email")} />
                </div>

                <div className="row mt-2">
                    <div className="col-sm-6">
                        <div className="form-group mt-2">
                            <label htmlFor="rua">Rua:</label>
                            <input type="text" className="form-control" id="rua" required {...register("rua")} />
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-group mt-2">
                            <label htmlFor="numero">Número:</label>
                            <input type="text" className="form-control" id="numero" required {...register("numero")} />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group mt-2">
                            <label htmlFor="cep">Cep:</label>
                            <InputMask type="text" className="form-control" id="cep" mask="99999-999"
                                maskChar="" required  {...register("cep")} onBlur={checkCEP} />
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-sm-5">
                            <div className="form-group  mt-2">
                                <label htmlFor="bairro">Bairro:</label>
                                <input type="text" className="form-control" id="bairro" required  {...register("bairro")} />
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="form-group mt-2">
                                <label htmlFor="cidade">Cidade:</label>
                                <input type="text" className="form-control" id="cidade" required  {...register("cidade")} />
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="form-group mt-2">
                                <label htmlFor="estado">Estado:</label>
                                <input type="text" className="form-control" id="estado" required  {...register("estado")} />
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