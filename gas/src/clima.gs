function consultarClimaDiario() {
  const url =
    'https://api.open-meteo.com/v1/forecast' +
    '?latitude=-23.3253' +
    '&longitude=-51.2000' +
    '&daily=precipitation_sum' +
    '&past_days=1' +
    '&timezone=America/Sao_Paulo';

  const response = UrlFetchApp.fetch(url);
  return JSON.parse(response.getContentText());
}

