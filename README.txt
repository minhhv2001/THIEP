THIỆP CƯỚI ONLINE – PHIÊN BẢN PHONG BÌ CÁ NHÂN HÓA
====================================================

1. Mở file index.html trong Chrome, Edge hoặc Safari.
   Giữ nguyên thư mục assets nằm cạnh index.html (đừng chỉ chép mỗi file HTML).
2. Nhấp vào phong bì màu kem / nút “Mở phong thư mời” để xem thiệp.
3. Bấm “Chỉnh sửa thông tin” và điền tên cô dâu, chú rể,
   thời gian, địa điểm, thông tin cha mẹ hai bên và thông tin mừng cưới.
4. Ở đầu khung chỉnh sửa, điền “Tên / cách xưng hô” của người được mời.
   Ví dụ: “Anh Hùng và gia đình”, “Chị Lan”, “Gia đình anh Minh”.
5. Để tạo link dùng được với người khác, trước tiên tải toàn bộ thư mục website
   (index.html + assets) lên GitHub Pages, Netlify hoặc hosting tĩnh khác.
6. Mở trang đã được đăng công khai (https://...), điền tên khách ở
   “Khách mời nhận thiệp”, bấm “Lưu & sao chép link riêng cho khách”.
   Thay tên khác và tạo link mới cho từng khách.
7. Nếu không điền khách mời, thiệp hiện “Anh chị em bạn bè”.

CHẾ ĐỘ ADMIN:
- Link khách mời thông thường chỉ hiện nội dung thiệp, nút nhạc và bản đồ.
- Để chỉnh sửa thiệp, thêm `?admin=1` vào cuối link. Ví dụ:
  `https://ten-mien-cua-ban.com/?admin=1`
- Khi sao chép link gửi khách, tham số admin được tự động loại bỏ.
- Đây là chế độ ẩn giao diện cho website tĩnh, không phải cơ chế đăng nhập bảo mật.

MỪNG CƯỚI & NHẠC:
- Trong “Chỉnh sửa thông tin”, thay mã ngân hàng, số tài khoản và tên chủ tài khoản
  mẫu bằng thông tin thật. QR được tạo theo chuẩn VietQR; có thể để trống số tiền gợi ý.
- Nhạc nền dùng tệp `assets/young-and-beautiful.mp3`. Trang thử phát ngay khi tải;
  một số trình duyệt chỉ cho phép phát sau thao tác chạm/click đầu tiên của khách.
  Có nút bật/tắt nhạc trên thanh đầu trang.

LỜI CHÚC TỪ KHÁCH:
- Mã Google Apps Script đã được chuẩn bị trong `google-apps-script/Code.gs` cho Sheet lời chúc.
- Làm theo `google-apps-script/SETUP.md`, sau đó gửi URL Web App kết thúc bằng `/exec`
  để kích hoạt form lời chúc trên thiệp.

KỸ THUẬT CÁ NHÂN HÓA:
- Link dùng tham số ?to=... để hiển thị đúng tên khách mời.
- Nếu có chỉnh sửa thông tin hôn lễ, link cũng đính kèm tham số invite
  (dữ liệu đã được mã hóa truyền tải, KHÔNG phải bảo mật).
- Tên khách hiển thị trên phong bì, phần chào và thiệp bên trong.
- Bạn có thể đặt {khachMoi} trong lời mời để thay tự động theo tên người xem link.
- Trang tĩnh KHÔNG tự đọc tên máy tính, tên chủ máy hay tài khoản người xem.
- Link file:// chỉ hoạt động tại máy có lưu file; không thể gửi cho khách khác.
- Website không có server hay cơ chế xác thực: người nhận có thể chỉnh sửa
  nội dung đang xem trên trình duyệt của họ, nhưng không thay đổi website gốc.

TÀI SẢN:
- assets/couple-main.png: ảnh cô dâu và chú rể chính, đã dùng đúng ảnh yêu cầu.
- assets/memory-1.jpg đến assets/memory-5.jpg: ảnh kỷ niệm cho slideshow tự động.
- assets/young-and-beautiful.mp3: nhạc nền của thiệp.
- assets/cat-white.png, assets/cat-black.png, assets/cat-gray.png: ba linh vật mèo hoạt hình trong thiệp.
