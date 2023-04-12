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