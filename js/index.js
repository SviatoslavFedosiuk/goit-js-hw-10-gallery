
const imgRef = document.querySelector(".img");
// 4
const imgObserver = new IntersectionObserver((item, observer) => {
    // 5
    item.forEach((img) => {
   
        if (img.isIntersecting) {
            // 6
           img.target.src = img.target.dataset.src;
//   7
            img.target.onload = () => {
                img.target.classList.add("loaded");
            }
            observer.unobserve(img.target);

      console.log(img.target.src);
        }
    })
}, {
    rootMargin: "70px" // відстань від якої фото має почати завантаження
});
const allImagesRefArray = document.querySelectorAll("img");

allImagesRefArray.forEach(img => imgObserver.observe(img));
// пройшлсь по масиву і перевіряє observe коли ці картинки з'являться на екрані.
// числа це номер завдання у лмс