function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function jsonError_(code, message) {
  return jsonResponse_({
    success: false,
    data: null,
    error: { code: code, message: message }
  });
}

function parseJsonBody_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return {};
  }
  return JSON.parse(e.postData.contents);
}

function getParam_(e, name) {
  if (!e || !e.parameter) {
    return '';
  }
  return e.parameter[name] || '';
}

