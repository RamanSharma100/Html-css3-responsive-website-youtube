window.onload = () => {
  const outputImg = document.querySelector('.main .banner .info .img img');
  const imgThumbnails = document.querySelectorAll(
    '.main .banner .bannerBottom .imgThumbnails img'
  );
  imgThumbnails.forEach((img) => {
    img.addEventListener('click', () => {
      const imgThumbnailsActive = document.querySelector(
        '.main .banner .bannerBottom .imgThumbnails img.active'
      );
      imgThumbnailsActive.classList.remove('active');
      img.classList.add('active');
      outputImg.src = img.src;
    });
  });
};
