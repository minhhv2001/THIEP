/**
 * Backend Google Sheets cho lời chúc thiệp cưới.
 * Sau khi dán mã này vào Apps Script, hãy triển khai dạng Web app.
 */
const CONFIG = {
  spreadsheetId: '1U92ZHuep7cBvZ23pz-q7nSarCYuLpdSo-8AsnOGOpuw',
  sheetName: 'Lời chúc',
};

function doGet(event) {
  const data = event && event.parameter ? event.parameter : {};
  const payload = data.action === 'wishes'
    ? { ok: true, wishes: getPublicWishes() }
    : { ok: true, service: 'wedding-guestbook' };
  return jsonpResponse(payload, data.callback);
}

function doPost(event) {
  const data = event && event.parameter ? event.parameter : {};
  // Honeypot: bot điền trường ẩn này sẽ bị bỏ qua.
  if (data.website) return jsonResponse({ ok: true });

  const name = clean(data.name, 100);
  const message = clean(data.message, 800);
  if (!name || !message) return jsonResponse({ ok: false, error: 'Thiếu tên hoặc lời chúc.' });

  const sheet = getGuestbookSheet();
  sheet.appendRow([new Date(), name, message]);
  return jsonResponse({ ok: true });
}

function getGuestbookSheet() {
  const spreadsheet = SpreadsheetApp.openById(CONFIG.spreadsheetId);
  let sheet = spreadsheet.getSheetByName(CONFIG.sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.sheetName);
    sheet.appendRow(['Thời gian gửi', 'Tên khách', 'Lời chúc']);
    sheet.setFrozenRows(1);
    sheet.getRange('A1:C1').setFontWeight('bold');
    sheet.setColumnWidth(1, 170);
    sheet.setColumnWidth(2, 220);
    sheet.setColumnWidth(3, 560);
  }
  return sheet;
}

function getPublicWishes() {
  const sheet = getGuestbookSheet();đư
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];

  // Chỉ đưa 24 lời chúc gần nhất ra thiệp để trang luôn tải nhanh.
  const firstRow = Math.max(2, lastRow - 23);
  const rows = sheet.getRange(firstRow, 1, lastRow - firstRow + 1, 3).getValues();
  return rows.reverse().map(function (row) {
    return {
      sentAt: row[0] instanceof Date
        ? Utilities.formatDate(row[0], 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy · HH:mm')
        : '',
      name: clean(row[1], 100),
      message: clean(row[2], 800),
    };
  }).filter(function (wish) {
    return wish.name && wish.message;
  });
}

function clean(value, limit) {
  return String(value || '').trim().replace(/\s+/g, ' ').slice(0, limit);
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// JSONP cho phép website Netlify đọc danh sách từ Apps Script mà không bị CORS chặn.
function jsonpResponse(data, callback) {
  const callbackName = String(callback || '');
  if (!/^[A-Za-z_$][0-9A-Za-z_$]{0,100}$/.test(callbackName)) return jsonResponse(data);
  return ContentService
    .createTextOutput(callbackName + '(' + JSON.stringify(data) + ');')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}
