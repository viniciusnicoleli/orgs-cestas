import React from 'react';
import {StyleSheet,View,ScrollView,FlatList} from 'react-native';

import Topo from './componentes/Topo';
import Details from './componentes/Detalhes';
import Item from './componentes/Item';

import Texto from '../../../src/componentes/texto'

// importa imagens de outras pastas:

export default function cesta({ topo, detalhes, itens}) {
    return <> 
    <FlatList
    data={itens.lista}
    renderItem={Item}
    keyExtractor={({nome}) => nome}
    ListHeaderComponent={() => {
        return <>
            <Topo {...topo}/>
            <View style = {estilos_main.cesta}>
                <Details {...detalhes}/>
                <Texto style={estilos_main.titulo}>{itens.titulo}</Texto>
            </View>
        </>
    }}
    />
    </>
}

const estilos_main = StyleSheet.create({
    titulo:  {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
        textAlign: 'left'
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})