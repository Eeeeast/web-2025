document.addEventListener("DOMContentLoaded", () => {
  initPostSliders();
  initModal();
  initLikes();
});

function initPostSliders() {
  document.querySelectorAll(".post").forEach((post) => {
    const images = post.querySelectorAll(".post__image");
    if (images.length <= 1) return;

    const slider = document.createElement("div");
    slider.className = "post__slider";

    const slidesContainer = document.createElement("div");
    slidesContainer.className = "post__slides";

    const controls = document.createElement("div");
    controls.className = "post__slider-controls";

    const prevBtn = document.createElement("button");
    prevBtn.className = "post__slider-arrow post__slider-arrow--prev";
    prevBtn.innerHTML = '<img src="assets/left.svg" alt="prev">';

    const nextBtn = document.createElement("button");
    nextBtn.className = "post__slider-arrow post__slider-arrow--next";
    nextBtn.innerHTML = '<img src="assets/right.svg" alt="next">';

    const counter = document.createElement("div");
    counter.className = "post__slider-counter";
    counter.textContent = `1 / ${images.length}`;

    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);
    slider.appendChild(slidesContainer);
    slider.appendChild(controls);
    slider.appendChild(counter);

    images.forEach((img, index) => {
      const slide = document.createElement("div");
      slide.className = `post__slide ${index === 0 ? "post__slide--active" : ""}`;
      slide.appendChild(img.cloneNode(true));
      slidesContainer.appendChild(slide);
      img.remove();
    });

    post.querySelector(".post__content").appendChild(slider);

    let currentSlide = 0;

    function updateSlider() {
      slidesContainer.querySelectorAll(".post__slide").forEach((slide, i) => {
        slide.classList.toggle("post__slide--active", i === currentSlide);
      });
      counter.textContent = `${currentSlide + 1} / ${images.length}`;
    }

    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + images.length) % images.length;
      updateSlider();
    });

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % images.length;
      updateSlider();
    });
  });
}

function initModal() {
  const overlay = document.querySelector(".overlay");
  const overlaySlider = overlay.querySelector(".slider");
  const overlaySlidesContainer =
    overlaySlider.querySelector(".slider__controls");
  const overlayClose = overlay.querySelector(".overlay__close");
  const overlayCounter = overlay.querySelector(".overlay__counter");

  overlayClose.addEventListener("click", closeOverlay);

  function handleKeydown(e) {
    if (e.key === "Escape") closeOverlay();
  }

  function openOverlay(postId, imageIndex = 0) {
    const post = document.querySelector(`.post[data-post-id="${postId}"]`);
    if (!post) return;

    const images = Array.from(
      post.querySelectorAll(".post__image, .post__slide .post__image"),
    );
    if (images.length === 0) return;

    overlaySlider
      .querySelectorAll(".slider__slide")
      .forEach((slide) => slide.remove());

    images.forEach((img, index) => {
      const slide = document.createElement("div");
      slide.className = `slider__slide ${index === imageIndex ? "slider__slide--active" : ""}`;
      slide.innerHTML = `<img src="${img.src}" class="slider__image">`;
      overlaySlider.insertBefore(slide, overlaySlidesContainer);
    });

    overlayCounter.textContent = `${imageIndex + 1} из ${images.length}`;
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeydown);

    initModalSlider(images.length, imageIndex);
  }

  function closeOverlay() {
    overlay.classList.remove("show");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleKeydown);
  }

  function initModalSlider(totalImages, initialIndex) {
    let currentIndex = initialIndex;
    const prevBtn = overlaySlider.querySelector(".slider__arrow--prev");
    const nextBtn = overlaySlider.querySelector(".slider__arrow--next");

    function updateModalSlider() {
      overlaySlider
        .querySelectorAll(".slider__slide")
        .forEach((slide, index) => {
          slide.classList.toggle(
            "slider__slide--active",
            index === currentIndex,
          );
        });
      overlayCounter.textContent = `${currentIndex + 1} из ${totalImages}`;
    }

    prevBtn.onclick = () => {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateModalSlider();
    };

    nextBtn.onclick = () => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateModalSlider();
    };
  }

  document.querySelectorAll(".post").forEach((post) => {
    const postId = post.dataset.postId;

    post.querySelectorAll(".post__image").forEach((img) => {
      img.addEventListener("click", () => openOverlay(postId));
    });

    post.querySelectorAll(".post__slide img").forEach((img, index) => {
      img.addEventListener("click", () => openOverlay(postId, index));
    });
  });
}

function initLikes() {
  document.querySelectorAll(".post__like").forEach((likeBtn) => {
    likeBtn.addEventListener("click", () => {
      const counter = likeBtn.querySelector(".counter");
      const isActive = likeBtn.classList.contains("active");

      likeBtn.classList.toggle("active");
      counter.textContent = parseInt(counter.textContent) + (isActive ? -1 : 1);
    });
  });
}
