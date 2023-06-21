//Componente para incluir livros no banco de dados
//declaração da função do componente IncluirLivros

const IncluirLivros = () => {
    return ( //aqui é o que vai ser exibido na tela
        <div className="container">
         <div className="fst-italic mt-3">Inclusão</div>
         <form>
            <div className="form-group">
                <label htmlFor="titulo">Titulo</label>
                <input type="text" className="form-control" id="titulo"/>
            </div>
         </form>
        </div>

    );

}

export default IncluirLivros;