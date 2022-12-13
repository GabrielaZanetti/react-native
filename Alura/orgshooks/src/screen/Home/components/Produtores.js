import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import userProdutores from "../../../Hooks/userProdutores";
import Produtor from "./Produtor";

export default function Produtores({ topo: Topo }) {
    const [titulo, lista] = userProdutores();

    const HeaderList = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{ titulo }</Text>
        </>
    }

    return <FlatList
        data = {lista}
        renderItem = { ({ item }) => <Produtor {...item} /> }
        keyExtractor = {({ nome }) => nome}
        ListHeaderComponent = { HeaderList }/>
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})