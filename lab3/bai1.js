function diemTBIF() {
  //nhập điểm
  let toan = parseFloat(prompt("Nhập điểm môn Toán:"));
  let ly = parseFloat(prompt("Nhập điểm môn Lý:"));
  let hoa = parseFloat(prompt("Nhập điểm môn Hóa:"));
  let sinh = parseFloat(prompt("Nhập điểm môn Sinh:"));
  //xét điều kiện
  if (
    toan < 0 ||
    toan > 10 ||
    ly < 0 ||
    ly > 10 ||
    hoa < 0 ||
    hoa > 10 ||
    sinh < 0 ||
    sinh > 10
  ) {
    alert("không hợp lệ");
    return;
  }
  //xếp loại
  let diemTB = (toan + ly + hoa + sinh) / 4;
  let xepLoai;
  if (diemTB >= 9 && diemTB <= 10) {
    xepLoai = "giỏi";
  } else if (diemTB > 7 && diemTB <= 9) {
    xepLoai = "khá";
  } else if (diemTB > 5 && diemTB <= 7) {
    xepLoai = "trung Bình";
  } else {
    xepLoai = "yếu";
  }
  //in kết quả
  alert("Điểm trung bình là: " +diemTB + "Xếp loại:" + xepLoai);

  document.write("điểm trung bình là: " + diemTB + "xếp loại: " + xepLoai);
}
function diemTBSW() {
  let toan = parseFloat(prompt("Nhập điểm môn Toán:"));
  let ly = parseFloat(prompt("Nhập điểm môn Lý:"));
  let hoa = parseFloat(prompt("Nhập điểm môn Hóa:"));
  let sinh = parseFloat(prompt("Nhập điểm môn Sinh:"));
  if(
    isNaN(toan) ||
    isNaN(ly) ||
    isNaN(hoa) ||
    isNaN(sinh) ||
    toan < 0 ||
    toan > 10 ||
    ly < 0 ||
    ly > 10 ||
    hoa < 0 ||
    hoa > 10 ||
    sinh < 0 ||
    sinh > 10
  ){
    alert("nhập điểm không hợp lệ");
    return  ;
  }

  let diemTB = (toan + ly + hoa + sinh) / 4
  let xepLoai;
  switch (Math.floor(diemTB)){
    case 10:
        case 9:
          xepLoai = "Giỏi";
          break;
        case 8:
        case 7:
          xepLoai = "Khá";
          break;
        case 6:
        case 5:
          xepLoai = "Trung bình";
          break;
        default:
          xepLoai = "Yếu";
  }
  alert("Điểm trung bình là: " +diemTB + "Xếp loại:" + xepLoai);
  document.write("điểm trung bình là: " + diemTB + "xếp loại: " + xepLoai);
}
let menu = parseInt(prompt("mời chọn menu \n 1. tính điểm trung bình bằng SWITCH CASE \n2.tính điêm trung bình bằng IF ELSE"));

switch (menu){
    case 0:
    break;
    case 1:
        diemTBSW();
        break;
        case 2:
            diemTBIF();
            break;
            default:
            
            alert("BẠN ĐÃ CHỌN SAI CÚ PHÁP")
}

