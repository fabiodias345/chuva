function handleGet(e) {
  const action = getParam_(e, 'action');

  if (action === 'chamados') {
    return jsonResponse_({ success: true, data: listarChamados(), error: null });
  }

  if (action === 'config') {
    return jsonResponse_({ success: true, data: { timezone: CONFIG.TIMEZONE }, error: null });
  }

  return jsonError_('ROTA_NAO_ENCONTRADA', 'Rota GET nao encontrada.');
}

function handlePost(e) {
  const body = parseJsonBody_(e);
  const action = body.action;

  if (action === 'sync') {
    return jsonResponse_({ success: true, data: processarSync(body.items || []), error: null });
  }

  if (action === 'upload_foto') {
    return jsonResponse_({ success: true, data: salvarFoto(body), error: null });
  }

  return jsonError_('ROTA_NAO_ENCONTRADA', 'Rota POST nao encontrada.');
}

