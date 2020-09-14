function activateGallery() {

  let thumbnails = document.querySelector("#gallery-thumbs").
                            querySelectorAll("img");
  let mainImage = document.querySelector("#gallery-photo > img")
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function () {
      // Set Clicked thumbnail as main image
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);
    });
  });
}
