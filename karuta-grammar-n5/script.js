// script.js
const karutaDeck = [
  { id: "あ", kalimat: "あした がっこうへ いきます。", romaji: "Ashita gakkou e ikimasu.", arti: "Besok pergi ke sekolah.", pola: "Tempat + へ + いきます", penjelasan: "Partikel へ (e) menunjukkan arah atau tujuan perpindahan. Contoh: がっこうへ いきます" },
  { id: "い", kalimat: "いぬが います。", romaji: "Inu ga imasu.", arti: "Ada anjing.", pola: "Benda hidup + がいます", penjelasan: "います digunakan untuk keberadaan makhluk hidup." },
  { id: "う", kalimat: "うちに ねこが います。", romaji: "Uchi ni neko ga imasu.", arti: "Di rumah ada kucing.", pola: "Tempat + に + Makhluk hidup + がいます", penjelasan: "Partikel に menunjukkan lokasi keberadaan." },
  { id: "え", kalimat: "えいがを みます。", romaji: "Eiga o mimasu.", arti: "Menonton film.", pola: "Objek + を + Vます", penjelasan: "Partikel を menandai objek yang dikenai tindakan." },
  { id: "お", kalimat: "おんがくが すきです。", romaji: "Ongaku ga suki desu.", arti: "Suka musik.", pola: "A が すきです", penjelasan: "Dalam bahasa Jepang, sesuatu yang disukai memakai partikel が, bukan を." },
  { id: "か", kalimat: "かさが あります。", romaji: "Kasa ga arimasu.", arti: "Ada payung.", pola: "Benda mati + があります", penjelasan: "あります digunakan untuk benda mati." },
  { id: "き", kalimat: "きょうしつで べんきょうします。", romaji: "Kyoushitsu de benkyou shimasu.", arti: "Belajar di kelas.", pola: "Tempat + で + Vます", penjelasan: "Partikel で menunjukkan tempat terjadinya aktivitas." },
  { id: "く", kalimat: "くだものを たべます。", romaji: "Kudamono o tabemasu.", arti: "Makan buah.", pola: "Objek + を + Vます", penjelasan: "Pola dasar tindakan terhadap suatu objek." },
  { id: "け", kalimat: "けさ しちじに おきました。", romaji: "Kesa shichiji ni okimashita.", arti: "Tadi pagi bangun jam tujuh.", pola: "Waktu + に + Vます", penjelasan: "Partikel に menunjukkan waktu tertentu." },
  { id: "こ", kalimat: "これは わたしの ほんです。", romaji: "Kore wa watashi no hon desu.", arti: "Ini adalah buku saya.", pola: "A の B", penjelasan: "の menunjukkan kepemilikan atau hubungan." },
  { id: "さ", kalimat: "さかなを たべます。", romaji: "Sakana o tabemasu.", arti: "Makan ikan.", pola: "Objek + を + Vます", penjelasan: "Pola dasar tindakan terhadap suatu objek." },
  { id: "し", kalimat: "しゅくだいを します。", romaji: "Shukudai o shimasu.", arti: "Mengerjakan PR.", pola: "Objek + を + します", penjelasan: "Digunakan untuk aktivitas yang memakai kata kerja します." },
  { id: "す", kalimat: "すしが すきです。", romaji: "Sushi ga suki desu.", arti: "Suka sushi.", pola: "A が すきです", penjelasan: "Dalam bahasa Jepang, sesuatu yang disukai memakai partikel が." },
  { id: "せ", kalimat: "せんせいも げんきです。", romaji: "Sensei mo genki desu.", arti: "Guru juga sehat.", pola: "A も B", penjelasan: "も berarti 'juga'." },
  { id: "そ", kalimat: "そとで あそびます。", romaji: "Soto de asobimasu.", arti: "Bermain di luar.", pola: "Tempat + で + Vます", penjelasan: "Partikel で menunjukkan tempat terjadinya aktivitas." },
  { id: "た", kalimat: "たなかさんは がくせいです。", romaji: "Tanaka-san wa gakusei desu.", arti: "Tanaka adalah mahasiswa.", pola: "A は B です", penjelasan: "Pola perkenalan dan identitas yang paling dasar." },
  { id: "ち", kalimat: "ちいさい ねこです。", romaji: "Chiisai neko desu.", arti: "(Kucing yang) kecil.", pola: "い-adjective + Noun", penjelasan: "Kata sifat い langsung ditempel pada kata benda." },
  { id: "つ", kalimat: "つくえの うえに ほんが あります。", romaji: "Tsukue no ue ni hon ga arimasu.", arti: "Ada buku di atas meja.", pola: "Tempat + に + あります", penjelasan: "Menunjukkan lokasi benda mati." },
  { id: "て", kalimat: "てがみを かきます。", romaji: "Tegami o kakimasu.", arti: "Menulis surat.", pola: "Objek + を + Vます", penjelasan: "Pola dasar tindakan terhadap suatu objek." },
  { id: "と", kalimat: "ともだちと はなします。", romaji: "Tomodachi to hanashimasu.", arti: "Berbicara dengan teman.", pola: "Orang + と + Vます", penjelasan: "Partikel と berarti 'dengan' (bersama seseorang)." },
  { id: "な", kalimat: "なつは あついです。", romaji: "Natsu wa atsui desu.", arti: "Musim panas itu panas.", pola: "Noun は い-adjective です", penjelasan: "Digunakan untuk mendeskripsikan sesuatu menggunakan kata sifat い." },
  { id: "に", kalimat: "にほんごを べんきょうします。", romaji: "Nihongo o benkyou shimasu.", arti: "Belajar bahasa Jepang.", pola: "Objek + を + べんきょうします", penjelasan: "Pola dasar untuk menyatakan kegiatan belajar." },
  { id: "ぬ", kalimat: "ぬのの かばんです。", romaji: "Nuno no kaban desu.", arti: "(Tas) ini adalah tas kain.", pola: "Noun の Noun", penjelasan: "Partikel の juga bisa menunjukkan bahan atau jenis." },
  { id: "ね", kalimat: "ねこも いぬも かわいいです。", romaji: "Neko mo inu mo kawaii desu.", arti: "Kucing dan anjing sama-sama lucu.", pola: "A も B も", penjelasan: "Digunakan untuk menyatakan dua hal yang memiliki sifat yang sama." },
  { id: "の", kalimat: "のみものを かいます。", romaji: "Nomimono o kaimasu.", arti: "Membeli minuman.", pola: "Objek + を + Vます", penjelasan: "Pola dasar tindakan." },
  { id: "は", kalimat: "ははは げんきです。", romaji: "Haha wa genki desu.", arti: "Ibu saya sehat.", pola: "Noun は な-adjective です", penjelasan: "げんき adalah kata sifat な (na-adjective)." },
  { id: "ひ", kalimat: "ひるごはんを たべます。", romaji: "Hirugohan o tabemasu.", arti: "Makan siang.", pola: "Objek + を + Vます", penjelasan: "Pola dasar tindakan." },
  { id: "ふ", kalimat: "ふたりで いきます。", romaji: "Futari de ikimasu.", arti: "Pergi berdua.", pola: "Jumlah orang + で + Vます", penjelasan: "Partikel で di sini menunjukkan jumlah orang yang melakukan aktivitas bersama." },
  { id: "へ", kalimat: "へやに テレビが あります。", romaji: "Heya ni terebi ga arimasu.", arti: "Ada televisi di kamar.", pola: "Tempat に Benda が あります", penjelasan: "Digunakan untuk menyatakan keberadaan benda mati." },
  { id: "ほ", kalimat: "ほんを よみます。", romaji: "Hon o yomimasu.", arti: "Membaca buku.", pola: "Objek + を + Vます", penjelasan: "Pola dasar tindakan." },
  { id: "ま", kalimat: "まいにち さんぽします。", romaji: "Mainichi sanpo shimasu.", arti: "Berjalan-jalan setiap hari.", pola: "Keterangan waktu + Vます", penjelasan: "Untuk kata seperti まいにち, biasanya tidak perlu partikel に." },
  { id: "み", kalimat: "みずを のみます。", romaji: "Mizu o nomimasu.", arti: "Minum air.", pola: "Objek + を + Vます", penjelasan: "Pola dasar tindakan." },
  { id: "む", kalimat: "むずかしく ありません。", romaji: "Muzukashiku arimasen.", arti: "Tidak sulit.", pola: "い-adjective → ～くありません", penjelasan: "Bentuk negatif sopan dari kata sifat い." },
  { id: "め", kalimat: "めがねを かいます。", romaji: "Megane o kaimasu.", arti: "Membeli kacamata.", pola: "Objek + を + Vます", penjelasan: "Pola dasar tindakan." },
  { id: "も", kalimat: "もしもし、マルディです。", romaji: "Moshi moshi, Marudi desu.", arti: "Halo, saya Maldy.", pola: "A は B です", penjelasan: "Dalam percakapan Jepang, subjek sering tidak disebutkan jika sudah jelas dari konteks." },
  { id: "や", kalimat: "やさいを たべます。", romaji: "Yasai o tabemasu.", arti: "Makan sayur.", pola: "Objek + を + Vます", penjelasan: "Pola dasar tindakan." },
  { id: "ゆ", kalimat: "ゆうびんきょくへ いきます。", romaji: "Yuubinkyoku e ikimasu.", arti: "Pergi ke kantor pos.", pola: "Tempat + へ + いきます", penjelasan: "Partikel へ menunjukkan arah." },
  { id: "よ", kalimat: "よるに べんきょうします。", romaji: "Yoru ni benkyou shimasu.", arti: "Belajar pada malam hari.", pola: "Waktu + に + Vます", penjelasan: "Partikel に menunjukkan waktu tertentu." },
  { id: "ら", kalimat: "らいねん にほんへ いきます。", romaji: "Rainen Nihon e ikimasu.", arti: "Tahun depan pergi ke Jepang.", pola: "Tempat + へ + いきます", penjelasan: "Untuk kata seperti らいねん sebenarnya partikel に biasanya tidak digunakan." },
  { id: "り", kalimat: "りんごが あります。", romaji: "Ringo ga arimasu.", arti: "Ada apel.", pola: "Benda mati + があります", penjelasan: "があります digunakan untuk benda mati." },
  { id: "る", kalimat: "るりさんは がくせいです。", romaji: "Ruri-san wa gakusei desu.", arti: "Ruri adalah mahasiswa.", pola: "A は B です", penjelasan: "Pola identitas dasar." },
  { id: "れ", kalimat: "れいぞうこに たまごが あります。", romaji: "Reizouko ni tamago ga arimasu.", arti: "Ada telur di dalam kulkas.", pola: "Tempat に Benda が あります", penjelasan: "Menunjukkan lokasi benda." },
  { id: "ろ", kalimat: "ろくじに かえります。", romaji: "Rokuji ni kaerimasu.", arti: "Pulang jam enam.", pola: "Waktu + に + Vます", penjelasan: "Partikel に menunjukkan waktu." },
  { id: "わ", kalimat: "わたしは がくせいです。", romaji: "Watashi wa gakusei desu.", arti: "Saya adalah mahasiswa.", pola: "A は B です", penjelasan: "Pola identitas paling dasar." },
  { id: "を", kalimat: "パンを たべます。", romaji: "Pan o tabemasu.", arti: "Makan roti.", pola: "Objek + を + Vます", penjelasan: "Partikel を menandai objek tindakan." },
  { id: "ん", kalimat: "みんな さん、おつかれさまでした。", romaji: "Minna-san, otsukaresama deshita.", arti: "Terima kasih atas kerja kerasnya, semuanya.", pola: "Salam", penjelasan: "Salam yang diucapkan setelah selesai melakukan suatu kegiatan atau pekerjaan." }
];

const elements = {
  btnDraw: document.getElementById('btn-draw'),
  btnReset: document.getElementById('btn-reset'),
  btnHistory: document.getElementById('btn-history'),
  btnExplain: document.getElementById('btn-explain'),
  btnCloseModal: document.getElementById('btn-close-modal'),
  cardStage: document.getElementById('card-stage'),
  cardContainer: document.getElementById('card-container'),
  explanationSection: document.getElementById('explanation-section'),
  explanationPanel: document.getElementById('explanation-panel'),
  historyModal: document.getElementById('history-modal'),
  historyList: document.getElementById('history-list'),
  emptyHistoryMsg: document.getElementById('empty-history-msg'),
  cardKana: document.getElementById('card-kana'),
  cardSentence: document.getElementById('card-sentence'),
  cardRomaji: document.getElementById('card-romaji'),
  cardMeaning: document.getElementById('card-meaning'),
  cardPattern: document.getElementById('card-pattern'),
  cardExplanation: document.getElementById('card-explanation'),
  resetModal: document.getElementById('reset-modal'),
  btnCloseReset: document.getElementById('btn-close-reset'),
  btnCancelReset: document.getElementById('btn-cancel-reset'),
  btnConfirmReset: document.getElementById('btn-confirm-reset'),
  btnTemplate: document.getElementById('btn-template'),
};

let drawnHistory = [];
let unDrawnCards = [...karutaDeck];
let currentCardInfo = null;
let isFlipping = false;
let isShuffling = false;

function init() {
  if(elements.btnDraw) elements.btnDraw.addEventListener('click', drawCard);
  if(elements.btnReset) elements.btnReset.addEventListener('click', showResetModal);
  if(elements.btnHistory) elements.btnHistory.addEventListener('click', openHistory);
  if(elements.btnCloseModal) elements.btnCloseModal.addEventListener('click', closeHistory);
  if(elements.cardContainer) elements.cardContainer.addEventListener('click', flipCard);
  if(elements.btnExplain) elements.btnExplain.addEventListener('click', toggleExplanation);
  
  if(elements.btnCloseReset) elements.btnCloseReset.addEventListener('click', hideResetModal);
  if(elements.btnCancelReset) elements.btnCancelReset.addEventListener('click', hideResetModal);
  if(elements.btnConfirmReset) elements.btnConfirmReset.addEventListener('click', confirmResetGame);
  if(elements.btnTemplate) elements.btnTemplate.addEventListener('click', openTemplate);

  // Initial State: no card visible yet
  if(elements.cardContainer) elements.cardContainer.classList.add('hidden');
}

function showResetModal() {
  elements.resetModal.classList.add('show');
}

function hideResetModal() {
  elements.resetModal.classList.remove('show');
}

function confirmResetGame() {
  hideResetModal();
  resetGame();
}

function openTemplate() {
  window.open("https://canva.link/7dy5yiqske9cd23", "_blank");
}

function resetGame() {
  drawnHistory = [];
  unDrawnCards = [...karutaDeck];
  currentCardInfo = null;
  isShuffling = false;
  isFlipping = false;
  
  // Cleanup any dummy cards from screen
  const dummyCards = document.querySelectorAll('.dummy-card');
  dummyCards.forEach(d => d.remove());
  
  elements.btnDraw.disabled = false;
  elements.btnDraw.textContent = 'Kocok Kartu';
  elements.cardContainer.classList.add('hidden');
  elements.cardContainer.classList.remove('flipped');
  elements.explanationSection.classList.add('hidden');
  elements.explanationPanel.classList.remove('open');
}

function generateDummyCards(num) {
  const dummies = [];
  for(let i=0; i<num; i++) {
    const dummy = document.createElement('div');
    dummy.className = 'dummy-card';
    dummy.innerHTML = '<div class="pattern-bg"></div>';
    elements.cardStage.appendChild(dummy);
    dummies.push(dummy);
  }
  return dummies;
}

function drawCard() {
  if (unDrawnCards.length === 0 || isShuffling) return;
  
  isShuffling = true;
  elements.btnDraw.disabled = true;
  
  elements.cardContainer.classList.add('hidden');
  elements.cardContainer.classList.remove('flipped');
  elements.explanationSection.classList.add('hidden');
  elements.explanationPanel.classList.remove('open');

  const randIndex = Math.floor(Math.random() * unDrawnCards.length);
  currentCardInfo = unDrawnCards.splice(randIndex, 1)[0];
  drawnHistory.push(currentCardInfo);

  const dummyCards = generateDummyCards(3);
  
  dummyCards.forEach((dummy, index) => {
    setTimeout(() => {
      dummy.style.animation = 'shuffleMove 1.5s ease-in-out';
    }, index * 200);
  });

  setTimeout(() => {
    dummyCards.forEach(d => d.remove());
    
    updateCardDOM(currentCardInfo);
    
    elements.cardContainer.classList.remove('hidden');
    isShuffling = false;
    
    if (unDrawnCards.length === 0) {
      elements.btnDraw.textContent = 'Semua Habis!';
      elements.btnDraw.disabled = true;
    } else {
      elements.btnDraw.disabled = false;
    }
  }, 2000); // Wait for shuffle animation
}

function updateCardDOM(card) {
  elements.cardKana.textContent = card.id;
  elements.cardSentence.textContent = card.kalimat;
  elements.cardRomaji.textContent = card.romaji;
  elements.cardMeaning.textContent = card.arti;
  elements.cardPattern.textContent = card.pola;
  elements.cardExplanation.textContent = card.penjelasan;
}

function flipCard() {
  if (isShuffling || isFlipping || !currentCardInfo) return;
  
  if (!elements.cardContainer.classList.contains('flipped')) {
    isFlipping = true;
    elements.cardContainer.classList.add('flipped');
    
    setTimeout(() => {
      elements.explanationSection.classList.remove('hidden');
      isFlipping = false;
    }, 600); // Wait for flip transition
  }
}

function toggleExplanation() {
  elements.explanationPanel.classList.toggle('open');
}

function openHistory() {
  elements.historyList.innerHTML = '';
  
  if (drawnHistory.length === 0) {
    elements.emptyHistoryMsg.style.display = 'block';
  } else {
    elements.emptyHistoryMsg.style.display = 'none';
    drawnHistory.forEach(card => {
      const li = document.createElement('li');
      li.innerHTML = '<span class="history-id">' + card.id + '</span> <span class="history-text">' + card.kalimat + '</span>';
      elements.historyList.appendChild(li);
    });
  }
  
  elements.historyModal.classList.add('show');
}

function closeHistory() {
  elements.historyModal.classList.remove('show');
}

init();
