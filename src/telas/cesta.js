import React from 'react';
import {StyleSheet,Image,Dimensions,Text} from 'react-native';
import { View } from 'react-native';

const width = Dimensions.get('screen').width;

// importa imagens de outras pastas:
import topo from '../../assets/topo.png'

export default function cesta() {
    return <> 
    <Image source={topo} style={estilos.topo} />
    <Text style={estilos.titulo}>Detalhe da cesta</Text>
    <View>
        <Text style={estilos2.teste}>Cesta de Verduras</Text>
        <Text style={estilos2.teste}>Jenny Jack Farm</Text>
        <Text style={estilos2.teste}>Já ouviu falar nos produtos Theo? Qua-li-da-de</Text>
    </View>
    </>
}


const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 23,
        lineHeight: 26, 
        color: "white",
        fontWeight: "bold",
        padding: 64
    },
    teste: {
        color: "#404040",
        fontSize: 26,
        lineHeight: 38,
    }
})

const estilos2 = StyleSheet.create({
    teste: {
        color: "#404040",
        fontSize: 26,
        lineHeight: 38,
        position: "relative",
        textAlign: "center"

    }
})