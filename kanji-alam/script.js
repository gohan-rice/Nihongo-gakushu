// Script untuk semua halaman web

// Menampilkan jawaban untuk Latihan 1 dan bagian tebak gambar
function toggleAnswers(btnElement, targetSelector, textShow = "Tampilkan Jawaban", textHide = "Sembunyikan Jawaban") {
    const hiddenAnswers = document.querySelectorAll(targetSelector);
    if (!hiddenAnswers || hiddenAnswers.length === 0) return;

    const isHidden = hiddenAnswers[0].style.display === 'none' || hiddenAnswers[0].style.display === '';

    if (isHidden) {
        hiddenAnswers.forEach(el => el.style.display = 'block');
        btnElement.innerText = textHide;
    } else {
        hiddenAnswers.forEach(el => el.style.display = 'none');
        btnElement.innerText = textShow;
    }
}

// Menampilkan jawaban untuk Latihan 2 (Kotak Kanji)
function toggleKanjiBoxes(btnElement) {
    const boxes = document.querySelectorAll('.k-box');
    if (!boxes || boxes.length === 0) return;

    const isHidden = boxes[0].innerText === boxes[0].getAttribute('data-default');

    if (isHidden) {
        boxes.forEach(box => {
            box.innerText = box.getAttribute('data-answer');
        });
        btnElement.innerText = "Sembunyikan Jawaban";
    } else {
        boxes.forEach(box => {
            box.innerText = box.getAttribute('data-default');
        });
        btnElement.innerText = "Tampilkan Jawaban";
    }
}

// Mengecek jawaban untuk Quiz Utama
function checkQuiz(btnElement, isCorrect) {
    const parentOptionsInfo = btnElement.parentElement;
    const parentCard = parentOptionsInfo.parentElement;
    const feedback = parentCard.querySelector('.feedback');
    const allButtons = parentOptionsInfo.querySelectorAll('.quiz-btn');

    if (isCorrect) {
        feedback.innerHTML = "<strong>Benar!</strong>";
        feedback.className = "feedback correct";
        btnElement.classList.add('correct-btn');
    } else {
        feedback.innerHTML = "<strong>Salah!</strong>";
        feedback.className = "feedback wrong";
        btnElement.classList.add('wrong-btn');
    }

    // Nonaktifkan semua tombol pada soal ini agar tidak bisa dijawab berkali-kali
    allButtons.forEach(function(b) {
        b.disabled = true;
    });
}

// Mengecek jawaban untuk Mini Quiz di halaman Index
function checkMiniQuiz(btnElement, isCorrect) {
    const optionsContainer = btnElement.parentElement;
    const questionContainer = optionsContainer.parentElement;
    const quizContainer = questionContainer.closest('.mini-quiz-container');
    const feedback = questionContainer.querySelector('.feedback');
    const allButtons = optionsContainer.querySelectorAll('.quiz-btn');

    if (isCorrect) {
        feedback.innerHTML = "<strong>Benar!</strong>";
        feedback.className = "feedback correct";
        btnElement.classList.add('correct-btn');
        
        let currentScore = parseInt(quizContainer.getAttribute('data-score') || '0');
        quizContainer.setAttribute('data-score', currentScore + 1);
    } else {
        feedback.innerHTML = "<strong>Salah!</strong>";
        feedback.className = "feedback wrong";
        btnElement.classList.add('wrong-btn');
    }

    // Disable buttons for this question
    allButtons.forEach(function(b) {
        b.disabled = true;
    });

    // Check if all questions in this mini quiz are answered
    const totalQuestions = quizContainer.querySelectorAll('.mini-quiz-question').length;
    const answeredQuestions = quizContainer.querySelectorAll('.correct-btn, .wrong-btn').length;

    if (totalQuestions === answeredQuestions) {
        const scoreDisplay = quizContainer.querySelector('.mini-quiz-score');
        const finalScore = quizContainer.getAttribute('data-score') || '0';
        scoreDisplay.innerHTML = `Skor akhir: ${finalScore} dari ${totalQuestions}`;
        scoreDisplay.style.display = 'block';
    }
}

// Carousel Logic
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
        // Hide answer when changing slide
        const answer = slide.querySelector('.carousel-answer');
        if (answer) answer.style.display = 'none';
    });
    
    // Reset toggle button text
    const toggleBtn = document.getElementById('btn-toggle-answer');
    if (toggleBtn) toggleBtn.innerText = 'Lihat Jawaban';

    // Wrap around logic
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Show current slide
    slides[currentSlide].classList.add('active');
    
    // Update indicator
    const indicator = document.getElementById('slide-indicator');
    if (indicator) {
        indicator.innerText = `${currentSlide + 1} / ${slides.length}`;
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function toggleCarouselAnswer() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;
    
    const activeSlide = slides[currentSlide];
    const answer = activeSlide.querySelector('.carousel-answer');
    const toggleBtn = document.getElementById('btn-toggle-answer');
    
    if (answer) {
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            toggleBtn.innerText = 'Sembunyikan Jawaban';
        } else {
            answer.style.display = 'none';
            toggleBtn.innerText = 'Lihat Jawaban';
        }
    }
}

// Initialize carousel on load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});
