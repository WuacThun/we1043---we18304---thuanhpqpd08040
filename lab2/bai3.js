//nhap ho va ten , gioi tinh
let hvt = prompt('Mời nhập họ và tên:');
let gt = prompt('Mời nhập giới tính (nam hoặc nữ):');

//tách các thành phần của tên 
 let arr = hvt.split(" ");
 
        let ho = arr[0];
        let tenDem =arr.slice(1,arr.length -1).join(" ");
        let ten = arr [arr.length-1];

//in ra 
console.log('Họ:'+ho); 
console.log('Tên đệm :'+tenDem);
console.log('Tên: '+ten);

//Thay doi ten dua theo gioi tinh

let tenMoi;
if(gt === "nam"){
 arr.splice(1,1,"Văn");
tenMoi = "Văn";
   
}else if(gt === "nữ"){
  arr.splice(1,1,"Vẽ");
 tenMoi = "Vẽ";
}else{
    console.log('khong nhan dang duoc gioi tinh cua ban!');
}

//in ra ten moi 
console.log("Tên mới:"+ho+ " "+ tenMoi + " "+ten);
