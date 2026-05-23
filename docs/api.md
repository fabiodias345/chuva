# API Google Apps Script

O app Flutter deve se comunicar com o Google Apps Script usando JSON.

## Endpoints Iniciais

```text
GET  chamados
POST sync
POST upload_foto
GET  config
```

## Resposta Padrao

```json
{
  "success": true,
  "data": {},
  "error": null
}
```

## Erro Padrao

```json
{
  "success": false,
  "data": null,
  "error": {
    "code": "ERRO_VALIDACAO",
    "message": "Mensagem do erro"
  }
}
```

