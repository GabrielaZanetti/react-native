import { useEffect, useState } from "react";
import { carregaProdutores } from "../services/carregaDados";

export default function userProdutores() {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect( () =>{
        const retorno = carregaProdutores();
        retorno.lista.sort(
            (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
        );
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, [] );
    
    return [titulo, lista];
}
