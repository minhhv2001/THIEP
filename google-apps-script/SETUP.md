# Kết nối lời chúc với Google Sheets

1. Mở Sheet đã tạo, chọn **Tiện ích mở rộng → Apps Script**.
2. Xóa mã mặc định, dán toàn bộ nội dung từ `Code.gs`, rồi bấm **Lưu**.
3. Chạy hàm `getGuestbookSheet` một lần trong Apps Script và cấp quyền theo tài khoản sở hữu Sheet. Bước này tạo tab **Lời chúc** cùng cột thời gian, tên khách và lời chúc.
4. Chọn **Triển khai → Lần triển khai mới → Ứng dụng web**.
5. Chọn: *Thực thi với tư cách: Tôi* và *Ai có quyền truy cập: Bất kỳ ai*.
6. Bấm **Triển khai**, cấp quyền, rồi sao chép URL kết thúc bằng `/exec`.

Gửi URL `/exec` cho Codex để gắn form lời chúc vào thiệp. Không dùng URL `/dev` vì chỉ tài khoản Google của bạn mở được.

## Hiển thị lời chúc trên thiệp

Mã hiện tại cũng trả về 24 lời chúc mới nhất để hiện dưới form. Khi cập nhật `Code.gs` sau lần triển khai đầu tiên, chọn **Triển khai → Quản lý các lần triển khai → biểu tượng bút chì → Phiên bản mới → Triển khai**. Không cần thay URL `/exec`.

Lưu ý: những lời chúc hiển thị dưới form là công khai cho mọi người mở thiệp.

Lưu ý: Apps Script Web App công khai nhận dữ liệu từ khách mời. Mã đã có trường chống bot cơ bản, nhưng nếu có spam, hãy tạo triển khai mới hoặc bổ sung CAPTCHA/dịch vụ chống spam.
