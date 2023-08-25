import React from 'react';
import { Image, StyleSheet, View} from 'react-native';

import Texto from '../../../componentes/texto';
import logo from '../../../../assets/logo.png'

export default function Details({nome,logofamily,nomeFazenda,descricao,preco}) {
    return <>
        <Texto style={estilos.teste}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logofamily} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nome_fazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
    </>
}

const estilos = StyleSheet.create({
    teste: {
        textAlign: "left",
        color: "#404040",
        fontSize: 26,
        lineHeight: 38,
        fontWeight: 'bold',
        fontFamily: "MontserratRegular"
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 5,
    },
    nome_fazenda: {
        color: "#404040",
        fontSize: 19,
        lineHeight: 26,
        marginTop: 4,
        marginLeft: 8,
        fontFamily: "MontserratRegular"
    },
    descricao: {
        color: "#A0A0A0",
        fontSize: 15,
        lineHeight: 26,
        marginTop: 6
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        textAlign: 'left'
    }
})