function send(){
  var arr = document.getElementsByTagName('input');
  var hoten = arr[0].value;
  var tuoi = arr[1].value;
  var diachi = arr[2].value;
  var check1 = arr[5].checked;
  var check2 = arr[6].checked;
  var check3 = arr[7].checked;
  var gioitinh = "";

  var sanpham = "";
  if(arr[3].checked){
      gioitinh ="nam";
  }else{
      gioitinh= "nu";
  }
  for(var i=5; i<=7;i++){
     if( arr[i].checked){
      sanpham = sanpham + arr[i].value+" ";
      
     }
  }

  if(hoten =="" || tuoi =="" || diachi ==""){
      alert("Bạn nhập thiếu thông tin!!!!");
      return;

  }
  if(isNaN(tuoi)){// neu nguoi dung nhap kh phải là số 
      alert("Bạn nhập sai!! vui lòng nhập số tuổi ");
      return;
  }

  if(check1||check2||check3){
     
  }else{
      alert("Bạn chọn ít nhất 1 món đồ để mua!");
      return;
  }

  var choice =confirm('Thông tin khách hàng đã nhập:\n'+hoten+"\n" +tuoi+"\n" + diachi+ "\n"+ gioitinh+"\n" + sanpham);
      if(choice==1){
          alert("Chúc mừng bạn đã đặt hàng thành công")
      }    
}