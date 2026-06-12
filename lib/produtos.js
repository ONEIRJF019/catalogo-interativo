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

export function nomePtBr(id) {
  return nomes[id] ?? null
}

export function formatarPreco(preco) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco * 5.75)
}
