import Unsplash from "unsplash-js";

export const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_ACCESS_KEY,
});

export const downloadImage = (imageUrl) => {
  console.log(imageUrl);
  fetch(imageUrl, {
    method: "GET",
    headers: {},
  })
    .then((response) => {
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.jpeg");
        document.body.appendChild(link);
        link.click();
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
