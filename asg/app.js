let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setInterval(showSlides, 2000);
}
//chỉnh to ảnh ra
let partnerimg = document.getElementById("partnerimg");
partnerimg.addEventListener("mouseenter", function(){
  partnerimg.style.scale(1.5,1.2);
});
let  
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
        alert("Bạn chọn ít nhất 1 để đặt!");
        return;
    }

    var choice =confirm('Thông tin khách hàng đã nhập:\n'+hoten+"\n" +tuoi+"\n" + diachi+ "\n"+ gioitinh+"\n" + sanpham);
        if(choice==1){
            alert("Chúc mừng bạn đã đặt hàng thành công")
        }    
}
function resetForm(){
    document.getElementsByTagName('form')[0].reset();
}
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
            // function checkName(){
                            // 	var name = document.getElementById('name').value;
                            // 	var errorName = document.getElementById('errorName');
                            // 	var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
                                
                            // 	if (name == '' || name == null) {
                            // 		errorName.innerHTML = "Họ tên không được để trống!";
                            // 	}else if(!regexName.test(name)){
                            // 		errorName.innerHTML = "Họ tên không hợp lệ!";
                            // 	}else{
                            // 		errorName.innerHTML = '';
                            // 		return name;
                            // 	}
                            // }
                            
                            function FormValidate(){
                              var name = document.getElementById('name').value;
                              var errorName = document.getElementById('errorName');
                              var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
                  
                              var phone = document.getElementById('phone').value;
                              var erorPhone = document.getElementById('erorPhone');
                              var regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                  
                              var email = document.getElementById('email').value;
                              var errorEmail = document.getElementById('erorEmail');
                              var reGexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
                               var errorsale = document.getElementById('errorsale');
                              if (name == '' || name == null) {
                                  errorName.innerHTML = "Họ tên không được để trống!";
                              }else if(!regexName.test(name)){
                                  errorName.innerHTML = "Họ tên không hợp lệ!";
                                  return false;
                              }else{
                                  errorName.innerHTML = '';
                              }
                  
                              if (phone == '' || phone == null) {
                                  erorPhone.innerHTML = "Số điện thoại không được để trống!";
                              }else if(!regexPhone.test(phone)){
                                  erorPhone.innerHTML = "SĐT không hợp lệ!";
                                  return false;
                              }else{
                                  erorPhone.innerHTML = '';
                              }
                  
                              if (email == '' || email == null) {
                                  errorEmail.innerHTML = "Email không được để trống!";
                              }else if(!reGexEmail.test(email)){
                                  errorEmail.innerHTML = "Email không hợp lệ!";
                                  email = '';
                              }else{
                                  errorEmail.innerHTML = '';
                              }
                  
                              var passW = document.getElementById('pass').value;
                              var errorPass = document.getElementById('errorPass');
                  
                              if (passW == '' || passW == null) {
                                  errorPass.innerHTML = "Mật khẩu vui lòng không để trống!";
                              }else{
                                  errorPass.innerHTML = "";
                              }
                  
                              var ConPass = document.getElementById('passw').value;
                              var errorConPass = document.getElementById('errorConPass');
                  
                              if (ConPass == '' || ConPass == null) {
                                  errorConPass.innerHTML = "Xác nhận mật khẩu vui lòng không để trống!";
                              }else if(ConPass != passW){
                                  alert("Xác nhận mật khẩu không trùng khớp!");
                              }else{
                                  errorConPass.innerHTML = "";
                              }
                  if (sale != THUANDEPZAI || sale != thuandepzai){
                    errorsale.innerHTML ="Bạn đã nhập sai couples, vui lòng bấm 'Khuyến Mãi' để nhận ";
                  } else if(sale == thuandepzai || sale == THUANDEPZAI) {
alert("NHẬP MÃ THÀNH CÔNG")
                  }
    
                  if (name && phone && email && ConPass && passW && passW == ConPass) {
                                  // Người dùng đã nhập đúng thông tin
                                  alert("Đăng ký thành công!");
                                  // return true; thực hiện việc submit form
                              }else{
                  
                              }
                  
                              return false;
                          }
function sale(){
  alert("CHÚC MỪNG BẠN NHẬN ĐƯỢC MÃ SALE 10%: THUANDEPZAI ")

}