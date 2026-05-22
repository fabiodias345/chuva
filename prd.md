# 🏛️ PRD — Sistema de Gestão de Chamados de Manutenção de Telhados

## Plataforma
Google Workspace + Google Apps Script

---

# 1. Visão Geral

Sistema institucional para gerenciamento de chamados de manutenção de telhados com vazamentos nos prédios do campus universitário de Londrina/PR.

O sistema utilizará:

- Google Apps Script
- Google Sheets
- Google Drive
- Gmail
- HTML Service
- Google Charts
- Open-Meteo API

Objetivo principal:

- centralizar chamados;
- controlar manutenção;
- registrar histórico técnico;
- automatizar monitoramento pós-chuva.

---

# 2. Objetivos

## Operacionais

- abrir chamados;
- controlar execução;
- armazenar fotos;
- registrar histórico;
- enviar notificações.

## Estratégicos

- identificar reincidência;
- gerar indicadores;
- monitorar impacto climático;
- apoiar manutenção preventiva.

---

# 3. Arquitetura

```text
Usuário
↓
HTML Service
↓
Google Apps Script
↓
Google Sheets + Drive
↓
Gmail + Open-Meteo API
```

---

# 4. Usuários

| Perfil | Função |
|---|---|
| Solicitante | Abrir chamados |
| Executante | Executar reparos |
| Gestor | Gerenciar chamados |
| Admin | Configuração geral |

---

# 5. Fluxo Operacional

## Abertura

Solicitante informa:

- prédio;
- descrição;
- prioridade;
- fotos.

Status:

```text
ABERTO
```

---

## Triagem

Gestor define:

- prioridade;
- executante.

Status:

```text
EM_ANALISE
```

---

## Execução

Executante registra:

- descrição técnica;
- materiais;
- fotos;
- observações.

Status:

```text
EM_EXECUCAO
```

---

## Finalização

Gestor encerra chamado.

Status:

```text
CONCLUIDO
```

Após conclusão o sistema inicia monitoramento climático.

---

# 6. Estrutura das Planilhas

## usuarios

```text
id
nome
email
tipo
ativo
```

---

## predios

```text
id
codigo
nome
localizacao
setor_responsavel
```

---

## chamados

```text
id
numero
predio_id
descricao
prioridade
status
executante
data_abertura
data_fechamento
```

---

## historico_chamado

```text
id
chamado_id
usuario
acao
created_at
```

---

## eventos_chuva

```text
id
data_evento
volume_mm
processado
```

---

# 7. Google Drive

Estrutura:

```text
Drive/
└── Sistema_Telhados/
    ├── Chamados/
    ├── Relatorios/
    └── Backup/
```

---

# 8. Monitoramento Climático

## API

Open-Meteo

:contentReference[oaicite:0]{index=0}

---

## Endpoint

```text
https://api.open-meteo.com/v1/forecast
```

---

## Configuração

```text
Latitude: -23.3045
Longitude: -51.1696
Cidade: Londrina/PR
Variável: precipitation (mm)
Threshold: ≥ 5 mm
```

---

## Fluxo

```text
Trigger diário
↓
Consulta Open-Meteo
↓
Verifica chuva ≥ 5mm
↓
Busca chamados recentes
↓
Envia notificação
```

---

## Exemplo GAS

```javascript
const url =
"https://api.open-meteo.com/v1/forecast" +
"?latitude=-23.3045" +
"&longitude=-51.1696" +
"&daily=precipitation_sum";

const response = UrlFetchApp.fetch(url);
const data = JSON.parse(response.getContentText());
```

---

# 9. Notificações

Eventos:

- abertura;
- atribuição;
- conclusão;
- chuva detectada;
- reincidência.

Canal:

- Gmail institucional.

---

# 10. Dashboard

Indicadores:

- chamados abertos;
- chamados concluídos;
- tempo médio;
- reincidência;
- ranking de prédios;
- chuva x vazamentos.

---

# 11. Segurança

- login Google institucional;
- controle por perfil;
- auditoria de alterações;
- registro de histórico.

---

# 12. Estrutura do Projeto

```text
project/
├── appsscript/
├── html/
├── docs/
└── drive/
```

---

# 13. Roadmap

## Fase 1

- autenticação;
- chamados;
- anexos;
- monitoramento climático.

## Fase 2

- dashboard avançado;
- QR Code;
- inspeções preventivas.

## Fase 3

- IA preditiva;
- análise histórica;
- expansão manutenção predial.

---

# 14. Objetivo Final

Criar uma plataforma institucional moderna baseada em Google Workspace para gerenciamento inteligente de manutenção predial com foco inicial em vazamentos de telhados.
