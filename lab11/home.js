document.addEventListener("DOMContentLoaded", () => {
  // Инициализация кнопок "ещё"
  initContentToggles();

  // Инициализация модального окна
  initModal();

  // Инициализация лайков
  initLikes();
});

// 1. Модальное окно и 2. Закрытие по ESC
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
  function openOverlay(imageSrc) {
    // Очистка предыдущих слайдов
    overlaySlider.querySelectorAll(".slider__slide").forEach((slide) => {
      overlaySlider.removeChild(slide);
    });

    // Создание нового слайда (только одно изображение)
    const slide = document.createElement("div");
    slide.className = "slider__slide slider__slide--active";
    slide.innerHTML = `<img src="${imageSrc}" class="slider__image">`;
    overlaySlider.appendChild(slide);

    // Обновление счетчика
    overlayCounter.textContent = "1 из 1";

    // Показ модального окна
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";

    // Подписка на событие клавиатуры
    document.addEventListener("keydown", handleKeydown);
  }

  // Функция закрытия модального окна
  function closeOverlay() {
    overlay.classList.remove("show");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleKeydown);
  }

  // Обработчики кликов по изображениям в постах
  document.querySelectorAll(".post__image").forEach((img) => {
    img.addEventListener("click", () => {
      openOverlay(img.src);
    });
  });
}

// 3. Кнопка "ещё"
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
