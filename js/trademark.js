function onHover(id) {
  var image = document.getElementById('imgTrademark');
  if (id == 1) {
    image.src = "./img/home/trademark1.jpg";
  } else if (id == 2) {
    image.src = "./img/home/trarkmade2.png";
  } else {
    image.src = "./img/home/trarkmade3.png";
  }
}
