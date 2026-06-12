const nomes = {
  1: 'Mochila para Notebook 15 Polegadas',
  2: 'Camiseta Slim Fit Premium Masculina',
  3: 'Jaqueta de Algodão Masculina',
  4: 'Calça Slim Fit Casual Masculina',
  5: 'Pulseira Dragão Ouro e Prata',
  6: 'Anel de Ouro Micropavê',
  7: 'Anel Princesa Banhado a Ouro Branco',
  8: 'Argolas de Aço Inox Banhado a Ouro Rosê',
  9: 'HD Externo Portátil WD 2TB USB 3.0',
  10: 'SSD Interno SanDisk 1TB SATA III',
  11: 'SSD Silicon Power 256GB 3D NAND',
  12: 'HD Externo WD 4TB para PS4',
  13: 'Monitor Acer 21.5" Full HD IPS',
  14: 'Monitor Gamer Curvo Samsung 49" 144Hz',
  15: 'Jaqueta Feminina 3 em 1 para Neve',
  16: 'Jaqueta Moto Feminina com Capuz',
  17: 'Jaqueta Corta-Vento Feminina',
  18: 'Blusa Feminina Gola Barco',
  19: 'Camiseta Feminina Dry-Fit Manga Curta',
  20: 'Camiseta Casual de Algodão Feminina',
}

const descricoes = {
  1: 'Mochila resistente e compacta para o dia a dia. Comporta notebooks de até 15 polegadas com facilidade e possui múltiplos compartimentos para organização completa dos seus pertences.',
  2: 'Camiseta masculina slim fit de alta qualidade com acabamento premium. Tecido leve e confortável, perfeito para diversas ocasiões, do casual ao semiformal.',
  3: 'Jaqueta masculina de algodão com resistência ao vento e design clássico. Conta com bolsos laterais espaçosos e interior macio para maior conforto nas estações mais frias.',
  4: 'Calça casual slim fit masculina confeccionada com tecido de alta qualidade. Ajuste moderno e confortável, ideal para o uso no dia a dia ou em ocasiões informais.',
  5: 'Pulseira exclusiva com design de dragão em ouro e prata 925. Peça artesanal inspirada nas lendas da tradição John Hardy, com acabamento refinado e exclusivo.',
  6: 'Anel delicado em ouro maciço com pavimentação de microzircônias. Design elegante e sofisticado perfeito para presentear ou usar em ocasiões especiais.',
  7: 'Anel estilo princesa banhado a ouro branco com pedras de alta precisão. Acabamento luxuoso e resistente para uso diário sem perder o brilho original.',
  8: 'Par de argolas em aço inoxidável banhado a ouro rosê. Design moderno e material hipoalergênico, ideal para uso prolongado sem irritações.',
  9: 'HD externo portátil de 2TB com conexão USB 3.0 para transferência rápida de dados. Compatível com PC, Mac e console. Leva seus arquivos a qualquer lugar com segurança.',
  10: 'SSD interno de 1TB com interface SATA III 6Gb/s para máxima performance. Ideal para upgrade de notebooks e desktops que buscam velocidade de leitura e escrita superiores.',
  11: 'SSD de 256GB com tecnologia 3D NAND e cache SLC para operações ultrarrápidas. Formato 2.5" compatível com a maioria dos notebooks e desktops do mercado.',
  12: 'HD externo de 4TB desenvolvido especialmente para PlayStation 4. Expanda o armazenamento do seu console sem complicação, com plug and play e suporte oficial.',
  13: 'Monitor IPS de 21.5" com resolução Full HD 1920x1080. Design ultrafino com bordas reduzidas para maior imersão. Ideal para trabalho, estudos e entretenimento.',
  14: 'Monitor gamer curvo de 49" com taxa de atualização de 144Hz e resolução QLED. Experiência ultrawide e imersiva para jogadores e criadores de conteúdo mais exigentes.',
  15: 'Jaqueta feminina 3 em 1 para esportes de inverno e atividades outdoor. Resistente à água e ao vento com forro removível para adaptação a diferentes temperaturas.',
  16: 'Jaqueta moto feminina em couro sintético com capuz removível e detalhes metálicos. Design moderno com múltiplos bolsos e fechos de alta qualidade.',
  17: 'Jaqueta corta-vento feminina com listras coloridas e design esportivo. Leve, resistente à chuva e de fácil dobramento, perfeita para atividades ao ar livre.',
  18: 'Blusa feminina de gola barco com manga curta e tecido macio. Modelagem elegante e versátil que se adapta tanto ao look casual quanto ao mais arrumado.',
  19: 'Camiseta feminina com tecnologia dry-fit que afasta a umidade do corpo. Ideal para treinos, caminhadas e qualquer atividade que exija leveza e conforto.',
  20: 'Camiseta casual feminina de algodão com corte moderno e tecido respirável. Confortável e versátil para compor looks descomplicados no dia a dia.',
}

const categorias = {
  'electronics': 'Eletrônicos',
  'jewelery': 'Joias',
  "men's clothing": 'Roupas Masculinas',
  "women's clothing": 'Roupas Femininas',
}

export function nomePtBr(id) {
  return nomes[id] ?? null
}

export function descricaoPtBr(id) {
  return descricoes[id] ?? null
}

export function categoriaPtBr(cat) {
  return categorias[cat] || cat
}

export function formatarPreco(preco) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco * 5.75)
}
