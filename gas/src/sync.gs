function processarSync(items) {
  return items.map(function(item) {
    if (item.acao === 'atualizar_status') {
      return atualizarChamado(item.payload || {});
    }

    return {
      id: item.id,
      status: 'acao_nao_implementada'
    };
  });
}

