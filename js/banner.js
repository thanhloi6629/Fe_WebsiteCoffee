function changeImage1() {
  var imageXuanThi = document.getElementById('image1');
  var imageDiuNhe = document.getElementById('image2');
  var imageSatSon = document.getElementById('image3');
  if (imageXuanThi.src.match("xuanthi")) {
    imageXuanThi.src = "./img/home/diunhe.jpg";
    imageDiuNhe.src = "./img/home/satson.jpg";
    imageSatSon.src = "./img/home/xuanthi.jpg";
  } else if (imageXuanThi.src.match("diunhe")) {
    imageXuanThi.src = "./img/home/satson.jpg";
    imageDiuNhe.src = "./img/home/xuanthi.jpg";
    imageSatSon.src = "./img/home/diunhe.jpg";
  } else {
    imageXuanThi.src = "./img/home/xuanthi.jpg";
    imageDiuNhe.src = "./img/home/diunhe.jpg";
    imageSatSon.src = "./img/home/satson.jpg";
  }
}

function changeImage2() {
  var imageXuanThi = document.getElementById('image1');
  var imageDiuNhe = document.getElementById('image2');
  var imageSatSon = document.getElementById('image3');
  if (imageDiuNhe.src.match("xuanthi")) {
    imageDiuNhe.src = "./img/home/diunhe.jpg";
    imageXuanThi.src = "./img/home/xuanthi.jpg";
    imageSatSon.src = "./img/home/satson.jpg";
  } else if (imageDiuNhe.src.match("diunhe")) {
    imageDiuNhe.src = "./img/home/satson.jpg";
    imageXuanThi.src = "./img/home/diunhe.jpg";
    imageSatSon.src = "./img/home/xuanthi.jpg";
  } else {
    imageDiuNhe.src = "./img/home/xuanthi.jpg";
    imageXuanThi.src = "./img/home/satson.jpg";
    imageSatSon.src = "./img/home/diunhe.jpg";
  }
}

function changeImage3() {
  var imageXuanThi = document.getElementById('image1');
  var imageDiuNhe = document.getElementById('image2');
  var imageSatSon = document.getElementById('image3');
  if (imageSatSon.src.match("xuanthi")) {
    imageSatSon.src = "./img/home/diunhe.jpg";
    imageXuanThi.src = "./img/home/satson.jpg";
    imageDiuNhe.src = "./img/home/xuanthi.jpg";
  } else if (imageSatSon.src.match("diunhe")) {
    imageSatSon.src = "./img/home/satson.jpg";
    imageXuanThi.src = "./img/home/xuanthi.jpg";
    imageDiuNhe.src = "./img/home/diunhe.jpg";
  } else {
    imageSatSon.src = "./img/home/xuanthi.jpg";
    imageXuanThi.src = "./img/home/diunhe.jpg";
    imageDiuNhe.src = "./img/home/satson.jpg";
  }
}