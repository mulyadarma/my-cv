alert(
  "Permainan ini di adopsi dari permainan tradisional dimana pada massa tersebut melakukan permainan ini mengunakan tangan dengan aturan bermain sebagai berikut: \n Bila gajah melawan manusia maka gajah yang menang begitupun sebaliknya \n Bila gajah melawan semut maka semut yang menang begitupun sebaliknya \n Bila manusia melawan semut maka manusia yang menang begitupun sebaliknya \n Selamat menikmati permainan ini Enjoy.... "
);

// menentukan plilihan komputer
function getPilihanKomputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "semut";
  return "orang";
}

// menentukan aturan permainan
function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return (comp == "orang") ? "MENANG" : "KALAH";
  if (player == "orang") return (comp == "semut") ? "MENANG" : "KALAH";
  if (player == "semut") return (comp = "gajah") ? "MENANG" : "KALAH";
}

// membuat pilihan komputer secara acak
function putar() {
  const imgKomputer = document.querySelector('.img-komputer');
  const pic = ['gajah', 'orang', 'semut'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute('src', '../gambar/svg/' + pic[i++] + '.svg');
    if (i == pic.length) i = 0;
  }, 100)
}

//  menjalankan event

const pilihan = document.querySelectorAll('li img');
let win = 1;
let lose = 1;
pilihan.forEach(function (gambar) {
  gambar.addEventListener('click', function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = gambar.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    const scorePlayer = document.querySelector('.score-player');
    const scoreComp = document.querySelector('.score-komputer');

    putar();

    setTimeout(function () {
      const gambarKomputer = document.querySelector('.img-komputer');
      gambarKomputer.setAttribute('src', '../gambar/svg/' + pilihanKomputer + '.svg');

      const info = document.querySelector('.info');
      info.innerHTML = hasil;


      if (hasil == 'MENANG') {
        scorePlayer.innerHTML = win++;
      } else if (hasil == 'KALAH') {
        scoreComp.innerHTML = lose++;
      }
    }, 1000);
  });

  const reset = document.querySelector(".reload");
  reset.addEventListener("click", function () {
    win = 0;
    lose = 0;
    document.querySelector(".score-player").innerHTML = win++;
    document.querySelector(".score-komputer").innerHTML = lose++;
  });

});