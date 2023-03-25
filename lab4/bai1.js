//tạo class học sinh
class hocSinh{
    constructor(id,first_name,last_name,class_id,email,phone_number,dob){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.class_id = class_id;
        this.email = email;
        this.phone_number = phone_number;
        this.dob = dob;

    }
    getFullName() {
let fullName = this.first_name + " " +this.last_name;
return fullName;
    }
    // tính tuổi năm
    getAge() {
        let d= new Date();
        return  d.getFullYear() -this.dob  ;
    }
    //tính tuổi ngày
      getTuoiNgay() {
        let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let today = new Date();
        let birthDate = new Date(this.dob);
        let diffDays = Math.round(Math.abs((today - birthDate) / oneDay));
        return diffDays;
      }
      // tạo danh sách 5 học sinh
     listHocSinh(){
       let hs1 = new hocSinh (1,'Hồ','Thuận','WE18304','binngoc1@gmail.com' ,'0906138104','2004-01-02');
        let hs2 = new hocSinh (2,'Phan','Nhân','WE18304','binngoc2@gmail.com' ,'0906138105','2004-01-03');
        let hs3 = new hocSinh (3,'Lê','Huy','WE18304','binngoc3@gmail.com' ,'0906138106','2004-01-04');
            let        hs4 = new hocSinh (4,'Nguyễn','Tuấn','WE18304','binngoc4@gmail.com' ,'0906138107','2004-01-05');
let        hs5 = new hocSinh (5,'Tôn','Vũ','WE18304','binngoc5@gmail.com' ,'0906138108','2004-01-06');
     }
//      sapXepSoTuoi(){
// this.listHocSinh().so

// )
listHocSinh().so
     }
    }
