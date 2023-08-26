import React from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';
import Texto from '../../../componentes/texto';

export default function Itens({titulo, lista}) {
    return <>
    <Texto style={styler.titulo}> {titulo} </Texto>
    {lista.map(({nome,imagem}) => {
    return <View key={nome} style={styler.item}>
        <Image source={imagem} style={styler.imagem}/>
        <Texto style={styler.nome}>{ nome }</Texto>
        </View>
    })}
    </>
}


const styler = StyleSheet.create({
    titulo:  {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        textAlign: 'left'
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical:16,
        alignItems: 'center'
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646'
    }

})