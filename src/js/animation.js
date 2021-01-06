const animation = () => {
  const descriptionElement = document.querySelector(".features-description");
  const listElement = document.querySelector(".features-list");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          descriptionElement.classList.add("animation");
          listElement.classList.add("animation");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(document.querySelector(".s-features"));
};

export default animation;
