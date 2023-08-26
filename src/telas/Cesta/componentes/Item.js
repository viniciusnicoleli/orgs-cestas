import React from 'react';
import {View, Image, ScrollView, StyleSheet, FlatList} from 'react-native';
import Texto from '../../../componentes/texto';

export default function Item({ item: {nome, imagem} }) {
    return <View style={styler.item}>
        <Image source={imagem} style={styler.imagem}/>
        <Texto style={styler.nome}>{ nome }</Texto>
    </View>
}


const styler = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16,
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