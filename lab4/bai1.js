
class Student {
  constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.class_id = class_id;
    this.email = email;
    this.phone_number = phone_number;
    this.dob = dob;
  }

  // Phương thức lấy tên đầy đủ
  getFullName() {
    return this.last_name +" "+ this.first_name;
  }

  // Phương thức tính số tuổi hiện tại theo năm
  getTinhTuoiTheoNam() {
      const ngaysinh = new Date(this.dob);
      const hientai =new Date ();
      const age = hientai - ngaysinh;
      return Math.floor(age / (1000 * 60 * 60 * 24 * 365));
      
  }

  // Phương thức tính số tuổi hiện tại theo ngày
  getTinhTuoiTheoNgay() {
      const ngaysinh = new Date(this.dob);
      const hientai =new Date ();
      const tuoitinhbanggiay = hientai - ngaysinh;
    const age = Math.floor(tuoitinhbanggiay/ (1000 * 60 * 60 * 24));
    return age;
  }
}

// Tạo danh sách studentList
const studentList = [
  new Student(1,'Ly','Nguyễn','WEB01','nhuly@gmail.com.vn','0933928111','1999-08-12'),
  new Student(2,'Hưng','Lê','WEB02','bimbpp@gmail.com.net.com','0906138104','1990-08-02'),
  new Student(3,'Lợi','Nguyễn','WEB01','quang456@gmail.fpt','0905962034','2000-07-02'),
  new Student(4,'Tú','Lê','WEB01','tune124@gmail.com.vn','07297664820','2003-02-05'),
  new Student(5,'Thuận','Hồ','WEB02','binngoc@gmail.com','0420301451','2004-01-01')
];

// Sắp xếp danh sách sinh viên theo thứ tự từ thấp đến cao theo số tuổi tính theo ngày
studentList.sort((a, b) => a.getTinhTuoiTheoNgay() - b.getTinhTuoiTheoNgay());

// In ra danh sách sinh viên theo thứ tự từ thấp đến cao theo số tuổi tính theo ngày
document.write('Danh sách sinh viên theo thứ tự từ thấp đến cao theo số tuổi tính theo ngày:');
studentList.forEach(student => document.write(`${student.getFullName()}, ${student.getTinhTuoiTheoNam()} tuổi (${student.getTinhTuoiTheoNgay()} ngày tuổi)`));

// Lấy kích thước màn hình
var rong = window.screen.width;
var dai = window.screen.height;

// In thông tin kích thước màn hình ra console

document.writeln("Kích thước màn hình là " + rong + "x" + dai + " "); 