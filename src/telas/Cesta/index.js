import React from 'react';
import {StyleSheet,View} from 'react-native';

import Topo from './componentes/Topo'
import Details from './componentes/Detalhes'

// importa imagens de outras pastas:

export default function cesta({ topo, detalhes}) {
    return <> 
    <Topo {...topo}/>
    <View style = {estilos_main.cesta}>
        <Details {...detalhes}/>
    </View>
    </>
}

const estilos_main = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})