let tombol = document.querySelector('.box');
let input = document.querySelector('.input')
tombol.addEventListener('click', function (data) {
  let klik = data.target;
  // line 4 target yang diklik
  let nilaiKlk = klik.innerText;
  //line 6 mengambil nilai yang diklik
  // kode line 22 berfungsi agar nilai inputan dapat dituliskan di input walapun nilainya banyak
  // menjalankan fungsi tombol c gak muncul

  if (nilaiKlk == "C") {
    input.value = "";
    // jalankan fungsi Del 
  } else if (nilaiKlk == "Del") {
    input.value = input.value.slice('0', -1);

    // jalankan fungsi =
  } else if (nilaiKlk == "=") {
    input.value = eval(input.value);
  } else {
    input.value = input.value + nilaiKlk;
  }
})