# 🌧️ Monitoramento Climático

# Objetivo

Verificar possíveis reincidências após eventos de chuva e validar a eficiência dos reparos executados nos telhados.

---

# API Climática Utilizada

## Serviço

API: Open-Meteo  
Site: :contentReference[oaicite:0]{index=0}

---

## Endpoint

```text
https://api.open-meteo.com/v1/forecast
```

---

## Configuração Base

```text
Latitude: -23.3045
Longitude: -51.1696
Cidade: Londrina/PR
Variável monitorada: precipitation (mm)
Threshold de alerta: ≥ 5 mm
```

---

## Autenticação

A API Open-Meteo não exige autenticação para uso não comercial.

Limite atual:

```text
Até 10.000 chamadas por dia
```

---

# Funcionamento do Monitoramento

O Google Apps Script deverá executar gatilho automático diário utilizando Triggers nativos do GAS.

---

# Fluxo Automático

```text
Trigger diário Apps Script
↓
Consulta API Open-Meteo
↓
Obtém volume de precipitação
↓
Verifica chuva ≥ 5mm
↓
Busca chamados concluídos recentemente
↓
Agenda validação técnica
↓
Envia e-mail automático:
- executante
- gestor
```

---

# Exemplo de Requisição

```javascript
const url = "https://api.open-meteo.com/v1/forecast" +
  "?latitude=-23.3045" +
  "&longitude=-51.1696" +
  "&daily=precipitation_sum" +
  "&timezone=America/Sao_Paulo";

const response = UrlFetchApp.fetch(url);
const data = JSON.parse(response.getContentText());
```

---

# Exemplo de Resposta Esperada

```json
{
  "daily": {
    "time": [
      "2026-05-22"
    ],
    "precipitation_sum": [
      12.4
    ]
  }
}
```

---

# Regra de Negócio

## Se precipitação ≥ 5 mm

O sistema deverá:

- localizar chamados finalizados recentemente;
- verificar prédios impactados;
- criar evento de validação;
- disparar notificação automática;
- solicitar vistoria técnica.

---

# Planilha Relacionada

## eventos_chuva

```text
id
data_evento
volume_mm
origem_api
processado
created_at
```

---

# Estratégia de Execução

## Trigger Diário

Horário recomendado:

```text
06:00 da manhã
```

Objetivo:

- consultar clima antes do início operacional;
- permitir geração de alertas no expediente.

---

# Estratégia de Segurança

## Tratamento de Falhas

O sistema deverá:

- registrar falhas de API;
- evitar chamadas duplicadas;
- registrar logs de execução;
- manter histórico das consultas climáticas.

---

# Estratégia de Expansão Futura

Possíveis evoluções:

- radar climático;
- previsão preventiva;
- IA para risco de infiltração;
- correlação histórica chuva x vazamento;
- alertas automáticos antecipados.
