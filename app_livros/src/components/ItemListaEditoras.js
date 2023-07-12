import "../ItemLista.css";

const ItemListaEditoras = ({ id, nome, telefone, rua, numero, cep,bairro, cidade, estado, alterarClick, excluirClick }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td>{telefone}</td>
            <td>{rua}</td>
            <td>{numero}</td>
            <td>{cep}</td>
            <td>{bairro}</td>
            <td>{cidade}</td>
            <td>{estado}</td>



            <td class="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir" onClick={excluirClick}>&#10008;</i>
                <i className="altera text-success fw-bold ms-2" title="Alterar" onClick={alterarClick}>&#36;</i>
            </td>
        </tr>
    );
};

export default ItemListaEditoras;