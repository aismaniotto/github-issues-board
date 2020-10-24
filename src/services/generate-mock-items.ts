function genereateMockItems(prefix: string, qtd: number) {
  const items = [];
  for (let i = 0; i < qtd; i++) {
    items.push({
      id: `id${i}${prefix}`,
      index: i,
      title: `${prefix}-${i}`
    })
  }

  return items;
}

export default genereateMockItems;