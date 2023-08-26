{lista.map(({nome,imagem}) => {
return <View key={nome} style={styler.item}>
    <Image source={imagem} style={styler.imagem}/>
    <Texto style={styler.nome}>{ nome }</Texto>
    </View>
})}