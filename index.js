// select element

// hasil
const hasil = document.getElementById("hasil");

// Percobaan
const percobaan = document.getElementById("percobaan");
let angkaPercobaan = 0;
percobaan.innerHTML = `Total Percobaan : ${angkaPercobaan}`;

// input
const masukanAngka = document.getElementById("number");

// button tebak
const tombolTebak = document.getElementById("tebak");

// button main lagi
const tombolMainLagi = document.getElementById("mainLagi");

// angka tebakan
const angkaTebakan = Math.floor(Math.random() * 100) + 1;
// const angkaTebakan = 10;

// tag p ketika user input angka < 0 dan > 100
const userMalasBaca = document.getElementById("userMalesBaca");

// action
tombolTebak.addEventListener("click", () => {
  // membuat variable yg isisnya angka yang diinput pake metod parseInt(merubah string menjadi angka)
  const angkaYangDiInput = parseInt(masukanAngka.value);
  const tidakInputAngka = isNaN(angkaYangDiInput);
  // ketika btn di click total percobaan nambah + 1;
  angkaPercobaan++;

  // ketika user tidak menginput angka maka angka percobaan tidak bertambah
  const salahinput = angkaYangDiInput <= 0 || angkaYangDiInput >= 100;
  if (tidakInputAngka || salahinput) {
    hasil.style.color = "red";
    hasil.innerHTML = "Tolong Masukan Angka!";
    angkaPercobaan = 0;
    tombolTebak.style.display = "none";
    tombolMainLagi.style.display = "block";
  }

  // ketika user input < 0 dan > 100
  if (salahinput) {
    userMalasBaca.style.display = "block";
    hasil.innerHTML = "error";
  }

  // percobaan ketika tebak
  percobaan.innerHTML = `Total Percobaan : ${angkaPercobaan}`;

  // kondisi
  if (angkaYangDiInput === angkaTebakan) {
    hasil.style.color = "green";
    hasil.innerHTML = "Anda benar👏";
    tombolTebak.style.display = "none";
    tombolMainLagi.style.display = "block";
    userMalasBaca.style.display = "none";
  } else if (angkaYangDiInput > angkaTebakan && angkaYangDiInput < 100) {
    hasil.style.color = "#64748b";
    hasil.style.color = hasil;
    hasil.innerHTML = "Angka terlalu besar";
    userMalasBaca.style.display = "none";
  } else if (angkaYangDiInput < angkaTebakan && angkaYangDiInput > 0) {
    hasil.style.color = "#64748b";
    hasil.innerHTML = "Angka terlalu kecil";
    userMalasBaca.style.display = "none";
  }

  // reload page
  tombolMainLagi.addEventListener("click", () => {
    window.location.reload();
  });
});
