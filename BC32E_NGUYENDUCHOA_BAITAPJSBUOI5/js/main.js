/**
 * Bài 1: Quản lý tuyển sinh
 * Mô hình 3 khối:
 * - Input:     
 *      + diem1: Number, diem2: Number, diem3: Number, khuVuc: Number, doiTuong: Number
 *      + diemChuan: Number
 * - Xử lý:
 *      + diem = diem1 + diem2 + diem 3 + khuVuc + doiTuong
 *      + diem1 <= 0 || diem2 <= 0 || diem3 <= 0 => rot
 *      + diem >= diemChuan => Dau
 *      + diem < diem chuan => Rot
 * - Output:
 *      + ketQuaBai1 = ?
 */
function tongDiem(id1, id2, id3, id4, id5) {
    var diem1 = Number(document.getElementById(id1).value);
    var diem2 = Number(document.getElementById(id2).value);
    var diem3 = Number(document.getElementById(id3).value);
    var diem4 = Number(document.getElementById(id4).value);
    var diem5 = Number(document.getElementById(id5).value);


    var diem = diem1 + diem2 + diem3 + diem4 + diem5;
    return diem;
}


document.getElementById('btnKetQua').onclick = function () {
    var diemChuan = Number(document.getElementById('diemChuan').value);
    // var khuVuc = Number(document.getElementById('khuVuc').value);
    // var doiTuong = Number(document.getElementById('doiTuong').value);
    var diem1 = Number(document.getElementById('diem1').value);
    var diem2 = Number(document.getElementById('diem2').value);
    var diem3 = Number(document.getElementById('diem3').value);
    var diem = 0;
    diem = tongDiem('diem1', 'diem2', 'diem3', 'khuVuc', 'doiTuong');
    var ketQuaBai1 = '';
    if (diem1 <= 0 || diem2 <= 0 || diem3 <= 0) {
        ketQuaBai1 = '=> Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0';
    } else if (diem >= diemChuan) {
        ketQuaBai1 = '=> Bạn đã đậu. Tổng điểm: ' + diem;
    } else {
        ketQuaBai1 = '=> Bạn đã rớt. Tổng điểm: ' + diem;
    }
    document.getElementById('ketQuaBai1').innerHTML = ketQuaBai1;
}

/**
 * Bài 2: Tính tiền điện
 * Mô hình 3 khối:
 * - Input:
 *      + ten: String, soDien: Number
 * - Xử lý:
 *      + soDien >=0 && soDien <=50 => ketQuaBai2 = soDien *500;
 *      + soDien > 50 && soDien <= 100 => ketQuaBai2 = (50 * 500) + ((soDien - 50) * 650)
 *      + soDien > 100 && soDien <= 200 => ketQuaBai2 = (50 * 500) + (50 * 650) + ((soDien - 100) * 850);
 *      + soDien > 200 && soDien <= 350 => ketQuaBai2 = (50 * 500) + (50 * 650) + (100 * 850) + ((soDien - 200) * 1100)
 *      + soDien > 350 =>ketQuaBai2 = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((soDien - 350) * 1300)
 *      + ketQuaBai2 = '0'; alert('Số kw không hợp lệ! Vui lòng nhập lại');
 * -Output:
 *      + keQuaBai2 = ?
 */

function tienDien(){

    var ten = document.getElementById('ten').value;
    var soDien = Number(document.getElementById('soDien').value);
    var ketQuaBai2 = '';
    if (soDien >= 0 && soDien <= 50) {
        ketQuaBai2 = soDien * 500;
    } else if (soDien > 50 && soDien <= 100) {
        ketQuaBai2 = (50 * 500) + ((soDien - 50) * 650);
    } else if (soDien > 100 && soDien <= 200) {
        ketQuaBai2 = (50 * 500) + (50 * 650) + ((soDien - 100) * 850);
    } else if (soDien > 200 && soDien <= 350) {
        ketQuaBai2 = (50 * 500) + (50 * 650) + (100 * 850) + ((soDien - 200) * 1100);
    } else if (soDien > 350) {
        ketQuaBai2 = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((soDien - 350) * 1300);
    } else {
        ketQuaBai2 = '0';
        alert('Số kw không hợp lệ! Vui lòng nhập lại');
    }
    document.getElementById('ketQuaBai2').innerHTML = '=> Họ tên: ' + ten + ';Tiền điện: ' + ketQuaBai2.toLocaleString();
}

document.getElementById('btnTinhTienDien').onclick = tienDien;