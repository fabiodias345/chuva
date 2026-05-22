# 🌧️ Monitoramento Climático
# Objetivo
Monitorar eventos de chuva na Universidade Estadual de Londrina para identificar possíveis reincidências de vazamentos após reparos executados nos telhados.
Objetivos:
- validar eficiência dos reparos;
- detectar falhas pós-chuva;
- automatizar alertas;
- gerar histórico climático;
- apoiar manutenção preventiva.
---
# API Climática
## Serviço
Open-Meteo
Site:
https://open-meteo.com/
---
# Endpoint
```text
https://api.open-meteo.com/v1/forecast
```
---
# Configuração Base
```text
Latitude: -23.3253
Longitude: -51.2000
Cidade: Londrina/PR
Timezone: America/Sao_Paulo
Variável: precipitation_sum
Unidade: mm
```
---
# Estratégia de Consulta
O sistema deverá consultar a precipitação acumulada do dia anterior utilizando:
```text
past_days=1
```
Objetivo:
- validar chuva ocorrida;
- evitar leitura de previsão futura.
---
# Exemplo de Requisição
```javascript
const url =
  "https://api.open-meteo.com/v1/forecast" +
  "?latitude=-23.3253" +
  "&longitude=-51.2000" +
  "&daily=precipitation_sum" +
  "&past_days=1" +
  "&timezone=America/Sao_Paulo";
const response = UrlFetchApp.fetch(url);
const data = JSON.parse(
  response.getContentText()
);
```
---
# Exemplo de Resposta
```json
{
  "daily": {
    "time": ["2026-05-22"],
    "precipitation_sum": [12.4]
  }
}
```
---
# Autenticação
A API Open-Meteo não exige autenticação.
Limite estimado:
```text
Até 10.000 chamadas por dia
```
---
# Regras de Negócio
## Threshold Principal
```text
Precipitação ≥ 5 mm
```
Quando atingido o sistema deverá:
- localizar chamados recentes;
- identificar prédios impactados;
- criar validação técnica;
- enviar notificações;
- registrar evento climático.
---
# Janela de Validação
```text
Chamados concluídos nos últimos 30 dias
```
---
# Definição de Reincidência
```text
Novo vazamento no mesmo prédio
ou setor em até 90 dias
após conclusão do reparo.
```
---
# Classificação da Chuva
```text
5 mm   → LEVE
15 mm  → MODERADA
30 mm  → FORTE
50 mm  → CRITICA
```
---
# Fluxo Automático
```text
Trigger diário
↓
Consulta Open-Meteo
↓
Obtém precipitação
↓
Verifica threshold
↓
Busca chamados recentes
↓
Cria validações
↓
Envia notificações
↓
Registra logs
```
---
# Trigger Diário
## Horário
```text
06:00 da manhã
```
Objetivos:
- consultar clima antes do expediente;
- gerar alertas operacionais.
---
# Estrutura da Planilha

## eventos_chuva
```text
id
data_evento
volume_mm
nivel_alerta
origem_api
timezone
raw_response
processado
created_at
```
---
# Campos Importantes
## nivel_alerta
```text
LEVE
MODERADA
FORTE
CRITICA
```
---
## processado
```text
TRUE
FALSE
```
---
# Estratégia de Segurança
O sistema deverá:
- registrar falhas da API;
- evitar chamadas duplicadas;
- registrar logs;
- validar respostas inválidas;
- manter histórico climático.
---
# Estratégia de Logs
Registrar:
- horário da execução;
- volume identificado;
- falhas;
- notificações enviadas.
---
# Expansão Futura
- radar climático;
- previsão preventiva;
- IA para infiltração;
- dashboard climático;
- manutenção preditiva;
- integração IoT.
---
# Objetivo Final
Criar um módulo climático inteligente integrado ao sistema institucional de manutenção predial utilizando Google Workspace e Google Apps Script para automatizar validações pós-chuva e reduzir reincidências de vazamentos.