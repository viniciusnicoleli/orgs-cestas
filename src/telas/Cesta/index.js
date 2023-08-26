import React from 'react';
import {StyleSheet,View,ScrollView} from 'react-native';

import Topo from './componentes/Topo';
import Details from './componentes/Detalhes';
import Itens from './componentes/Itens';

// importa imagens de outras pastas:

export default function cesta({ topo, detalhes, itens}) {
    return <ScrollView> 
    <Topo {...topo}/>
    <View style = {estilos_main.cesta}>
        <Details {...detalhes}/>
        <Itens {...itens}/>
    </View>
    </ScrollView>
}

const estilos_main = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})