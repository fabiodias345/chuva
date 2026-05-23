# Arquitetura

Arquitetura inicial do projeto:

```text
Flutter APK offline-first
|
v
Banco local no celular
|
v
Fila de sincronizacao
|
v
Google Apps Script Web App
|
v
Google Sheets + Google Drive + Gmail + Calendar
```

## Regra Principal

O app Flutter nao acessa Google Sheets ou Google Drive diretamente.

```text
Flutter -> Google Apps Script -> Google Workspace
```

## Backend

O backend oficial do projeto sera o Google Apps Script.

Nao usar:

- Supabase
- Firebase
- backend externo
- servidor proprio

