let so1 = "";
let so2 = "";
let dapan;

function nutbam(btn) {
  const nhanso = btn.innerText;
  const themketqua = document.getElementById("ketqua");

  if (isNaN(nhanso)) {
    if (nhanso == "AC") {
      so1 = "";
      so2 = "";
      dapan = undefined;
      themketqua.value = "";
      return;
    }
    if (nhanso == "=") {
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
    case "+":
      return ord1 + ord2;
    case "-":
      return ord1 - ord2;
    case "*":
      return ord1 * ord2;
    case "/":
      return ord1 / ord2;
  }
}