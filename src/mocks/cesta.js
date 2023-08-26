import logo from '../../assets/logo.png'

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
    topo: {
        titulo: 'Detalhe da cesta'
    },
    detalhes: {
        nome: 'Cestas myTheo',
        logofamily: logo,
        nomeFazenda: 'Produtos Theo',
        descricao: 'Ouviste falar nos produtos Theo Nunca teve a oportunidade? Não tema, pois os produtos Theo possuem uma qualidade incomparável, confira!',
        preco: 'R$ 40,00',
        compras: 'Comprar',
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
          {
            nome: "Tomate",
            imagem: tomate,
          },
          {
            nome: "Brócolis",
            imagem: brocolis,
          },
          {
            nome: "Batata",
            imagem: batata,
          },
          {
            nome: "Pepino",
            imagem: pepino,
          },
          {
            nome: "Abóbora",
            imagem: abobora,
          }
        ]
    }
}

export default cesta