document.addEventListener("DOMContentLoaded", () => {
  // Инициализация слайдеров в постах
  initPostSliders();

  // Инициализация кнопок "ещё"
  initContentToggles();

  // Инициализация модального окна
  initModal();

  // Инициализация лайков
  initLikes();
});

// 1. Слайдер в постах
function initPostSliders() {
  document.querySelectorAll(".slider").forEach((slider) => {
    const slides = slider.querySelectorAll(".slider__slide");
    if (slides.length <= 1) return;

    const prevBtn = slider.querySelector(".slider__arrow--prev");
    const nextBtn = slider.querySelector(".slider__arrow--next");
    const counter = slider.querySelector(".slider__current");

    let currentSlide = 0;

    // Обновление отображения слайдов
    function updateSlider() {
      slides.forEach((slide, index) => {
        slide.classList.toggle("slider__slide--active", index === currentSlide);
      });

      if (counter) {
        counter.textContent = currentSlide + 1;
      }
    }

    // Переключение слайдов
    function step(dir) {
      currentSlide = (currentSlide + dir + slides.length) % slides.length;
      updateSlider();
    }

    // Обработчики кнопок
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => step(-1));
      nextBtn.addEventListener("click", () => step(1));
    }

    // Инициализация
    updateSlider();
  });
}

// 2. Модальное окно и 3. Закрытие по ESC
function initModal() {
  const overlay = document.querySelector(".overlay");
  const overlaySlider = overlay.querySelector(".slider");
  const overlayClose = overlay.querySelector(".overlay__close");
  const overlayCounter = overlay.querySelector(".overlay__counter");

  // Обработчик закрытия
  overlayClose.addEventListener("click", closeOverlay);

  // Обработчик ESC
  function handleKeydown(e) {
    if (e.key === "Escape") closeOverlay();
  }

  // Функция открытия модального окна
  function openOverlay(images, index) {
    // Очистка предыдущих слайдов
    overlaySlider.querySelectorAll(".slider__slide").forEach((slide) => {
      overlaySlider.removeChild(slide);
    });

    // Создание новых слайдов
    images.forEach((src, i) => {
      const slide = document.createElement("div");
      slide.className = `slider__slide ${i === index ? "slider__slide--active" : ""}`;
      slide.innerHTML = `<img src="${src}" class="slider__image">`;
      overlaySlider.appendChild(slide);
    });

    // Обновление счетчика
    overlayCounter.textContent = `${index + 1} из ${images.length}`;

    // Показ модального окна
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";

    // Инициализация слайдера в модальном окне
    initModalSlider();

    // Подписка на событие клавиатуры
    document.addEventListener("keydown", handleKeydown);
  }

  // Функция закрытия модального окна
  function closeOverlay() {
    overlay.classList.remove("show");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleKeydown);
  }

  // Инициализация слайдера в модальном окне
  function initModalSlider() {
    const slides = overlaySlider.querySelectorAll(".slider__slide");
    if (slides.length <= 1) return;

    const prevBtn = overlaySlider.querySelector(".slider__arrow--prev");
    const nextBtn = overlaySlider.querySelector(".slider__arrow--next");

    let currentSlide = 0;

    // Находим активный слайд
    slides.forEach((slide, index) => {
      if (slide.classList.contains("slider__slide--active")) {
        currentSlide = index;
      }
    });

    // Обновление отображения слайдов
    function updateSlider() {
      slides.forEach((slide, index) => {
        slide.classList.toggle("slider__slide--active", index === currentSlide);
      });

      overlayCounter.textContent = `${currentSlide + 1} из ${slides.length}`;
    }

    // Переключение слайдов
    function step(dir) {
      currentSlide = (currentSlide + dir + slides.length) % slides.length;
      updateSlider();
    }

    // Обработчики кнопок
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => step(-1));
      nextBtn.addEventListener("click", () => step(1));
    }
  }

  // Обработчики кликов по изображениям в постах
  document.querySelectorAll(".post .slider__image").forEach((img) => {
    img.addEventListener("click", () => {
      const post = img.closest(".post");
      const images = Array.from(post.querySelectorAll(".slider__image")).map(
        (i) => i.src,
      );
      const index = Array.from(post.querySelectorAll(".slider__image")).indexOf(
        img,
      );
      openOverlay(images, index);
    });
  });
}

// 4. Кнопка "ещё"
function initContentToggles() {
  document.querySelectorAll(".post").forEach((post) => {
    const textEl = post.querySelector(".post__text");
    const toggleBtn = post.querySelector(".post__content-toggle");

    if (!textEl || !toggleBtn) return;

    toggleBtn.hidden = true;

    // Проверка, нужно ли показывать кнопку
    const [fullHeight, clampedHeight] = getSizes(textEl);
    const isOverflowing = fullHeight > clampedHeight;

    if (isOverflowing) {
      toggleBtn.hidden = false;

      toggleBtn.addEventListener("click", () => {
        const expanded = textEl.classList.toggle("expanded");
        toggleBtn.textContent = expanded ? "свернуть" : "ещё...";
      });
    }
  });

  function getSizes(textEl) {
    const clampedHeight = textEl.getBoundingClientRect().height;

    // Сохраняем оригинальное состояние
    const originalDisplay = textEl.style.display;
    const originalLineClamp = textEl.style.webkitLineClamp;

    // Временно убираем ограничения для измерения полной высоты
    textEl.style.display = "block";
    textEl.style.webkitLineClamp = "unset";

    const fullHeight = textEl.scrollHeight;

    // Восстанавливаем оригинальное состояние
    textEl.style.display = originalDisplay;
    textEl.style.webkitLineClamp = originalLineClamp;

    return [fullHeight, clampedHeight];
  }
}

// Инициализация лайков
function initLikes() {
  document.querySelectorAll(".post__like").forEach((likeBtn) => {
    likeBtn.addEventListener("click", () => {
      const counter = likeBtn.querySelector(".counter");
      const isActive = likeBtn.classList.contains("active");

      likeBtn.classList.toggle("active");

      if (isActive) {
        counter.textContent = parseInt(counter.textContent) - 1;
      } else {
        counter.textContent = parseInt(counter.textContent) + 1;
      }
    });
  });
}
