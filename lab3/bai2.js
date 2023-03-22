let so1 = "";
let so2 = "";
let dapan;

function nutbam(btn) {
  const nhanso = btn.innerText;
  const themketqua = document.getElementById("ketqua");

  if (isNaN(nhanso)) {
    //nếu nhấn AC thì nó reset màn hình chính
    if (nhanso == "AC") {
      so1 = "";
      so2 = "";
      dapan = undefined;
      themketqua.value = "";
      return;
    }
    if (nhanso == "=") {
      //nếu nhấn "=" thì nó tính ra kết quả
      const result = perform(so1, so2, dapan);
      themketqua.value = result;
      so1 = "";
      so2 = "";
      dapan = undefined;
    } else {
        dapan = nhanso;
    }
  } else {
    if (dapan) {
      so2 += nhanso;
      themketqua.value = so2;
    } else {
      so1 += nhanso;
      themketqua.value = so1;
    }
  }
}

function perform(ord1, ord2, otor) {
  ord1 = Number(so1);
  ord2 = Number(so2);

  switch (otor) {
    //nếu bấm + thì nó cộng
    case "+":
      return ord1 + ord2;
      //nếu - thì hiệu
    case "-":
      return ord1 - ord2;
      //nếu * thì nhân
    case "*":
      return ord1 * ord2;
      //nếu / thì chia
    case "/":
      return ord1 / ord2;
  }
}