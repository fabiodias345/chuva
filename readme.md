# Sistema de Gestao de Chamados de Telhados

Projeto para controle de chamados de manutencao de telhados, com foco em vazamentos, reincidencias apos chuva e validacao tecnica em campo.

O sistema sera usado principalmente por tecnicos em campo, com suporte a uso offline no celular e sincronizacao posterior com o Google Workspace.

---

## Objetivo

Centralizar o processo de manutencao de telhados da Universidade Estadual de Londrina, permitindo:

- abertura e acompanhamento de chamados;
- registro tecnico da execucao;
- anexos de fotos;
- atualizacao de status em campo;
- funcionamento offline no celular;
- sincronizacao com Google Sheets e Google Drive;
- monitoramento climatico automatico;
- validacao pos-chuva para detectar reincidencias.

---

## Arquitetura

Arquitetura definida:

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

Regra principal:

```text
Flutter nunca acessa Sheets ou Drive diretamente.
Flutter comunica apenas com o Google Apps Script.
```

---

## Tecnologias

### Aplicativo

- Flutter
- Dart
- Banco local no aparelho
- Camera e anexos
- Sincronizacao offline

### Backend

- Google Apps Script
- Google Sheets
- Google Drive
- Gmail
- Google Calendar
- Open-Meteo API

### Nao utilizar

```text
Supabase
Firebase
Backend externo
Servidor proprio
```

---

## Estrutura Inicial do Projeto

```text
Chuva/
├── README.md
├── prd.md
├── mem.md
│
├── docs/
│   ├── arquitetura.md
│   ├── api.md
│   └── planilhas.md
│
├── app/
│   ├── pubspec.yaml
│   ├── android/
│   ├── ios/
│   └── lib/
│       ├── main.dart
│       ├── config.dart
│       ├── models/
│       │   ├── chamado.dart
│       │   ├── foto.dart
│       │   └── sync_item.dart
│       ├── services/
│       │   ├── api_service.dart
│       │   ├── local_db_service.dart
│       │   ├── sync_service.dart
│       │   └── camera_service.dart
│       └── pages/
│           ├── login_page.dart
│           ├── chamados_page.dart
│           ├── chamado_detalhe_page.dart
│           ├── execucao_page.dart
│           └── sync_page.dart
│
├── gas/
│   ├── appsscript.json
│   └── src/
│       ├── main.gs
│       ├── config.gs
│       ├── api.gs
│       ├── chamados.gs
│       ├── sync.gs
│       ├── drive.gs
│       ├── clima.gs
│       ├── email.gs
│       └── utils.gs
│
└── sheets/
    ├── schema.md
    └── seed.md
```

---

## Funcionamento Offline

O aplicativo devera permitir que o tecnico trabalhe sem internet.

Funcionalidades offline obrigatorias:

- visualizar chamados ja baixados;
- preencher informacoes da execucao;
- atualizar status;
- tirar fotos;
- anexar fotos;
- finalizar processo localmente;
- manter pendencias em fila de sincronizacao;
- enviar tudo ao Google quando a internet voltar.

Quando houver internet:

```text
App Flutter
|
v
Envia fila pendente
|
v
Apps Script valida dados
|
v
Sheets recebe registros
|
v
Drive recebe fotos
|
v
App marca itens como sincronizados
```

---

## Planilhas Previstas

```text
usuarios
predios
chamados
historico_chamado
fotos_chamado
eventos_chuva
validacoes_pos_chuva
sync_logs
```

---

## Monitoramento Climatico

O sistema usara a API Open-Meteo para consultar precipitacao acumulada.

Configuracao base:

```text
Cidade: Londrina/PR
Timezone: America/Sao_Paulo
Variavel: precipitation_sum
Threshold: chuva >= 5 mm
```

Fluxo:

```text
Trigger diario no Apps Script
|
v
Consulta Open-Meteo
|
v
Verifica volume de chuva
|
v
Busca chamados concluidos recentemente
|
v
Cria validacao tecnica
|
v
Envia notificacoes
```

---

## Workflow Git

Branches principais:

```text
main    = versao principal
segunda = trabalho deste PC
dev     = trabalho do outro PC
```

Antes de trabalhar:

```bash
git pull
```

Depois de alterar arquivos:

```bash
git status
git add .
git commit -m "Mensagem do commit"
git push
```

Tambem existe a skill local:

```text
gita
```

Use `gita` para revisar mudancas, criar commit e enviar para o GitHub com seguranca.

---

## Status Atual

O projeto esta em fase de definicao de arquitetura e documentacao inicial.

Proximos passos:

- criar documentacao em `docs/`;
- definir schema das planilhas;
- criar estrutura inicial do Apps Script;
- criar estrutura inicial do Flutter;
- implementar sincronizacao offline;
- implementar monitoramento climatico.
