import React from 'react';
import { Text } from 'react-native'

export default function Texto({ children, style }) {
    let estilo = estilos.texto;
    if (style?.fontWeight === 'bold') { //O Simbolo ? significa que se n tiver o style usa outra coisa.
        estilo = estilos.texto_negrito;
    }
    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = {
    texto: {
        fontFamily: 'MontserratRegular'
    },
    texto_negrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
}