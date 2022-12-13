import React from "react";
import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";
import { carregaTopo } from "../../../services/carregaDados";

import logo from "../../../assets/logo.png";
import { color } from "@mui/system";

class Topo extends React.Component {
    state = {
        topo: {
            titulo: '',
            legenda: ''
        }
    }

    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ topo: retorno })
    }

    componentDidMount() {
        this.atualizaTopo();
    }

    render () {
        return <View style={estilos.topo}>
            <Image style={estilos.imagem} source={logo}></Image>
            <Text style={estilos.title}>{ this.state.topo.titulo }</Text>
            <Text style={estilos.legenda}>{ this.state.topo.legenda }</Text>
        </View>
    }
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16
    },
    imagem: {
        width: 70,
        height: 28
    },
    title: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646'
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#464646'
    }
})

export default Topo;