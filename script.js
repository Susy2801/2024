function buttonClick() {
  var fire = document.getElementById("firework");
  var text = document.getElementById("text");
  var dragon = document.getElementById("dragon");
  var circle = document.getElementById("circle");
  var laternLeft = document.getElementById("larten-l1");
  var laternLeft2 = document.getElementById("larten-r1");
  var larternRight = document.getElementById("larten-l2");
  var larternRight2 = document.getElementById("larten-r2");
  var cloud1 = document.getElementById("cloud1");
  var cloud2 = document.getElementById("cloud2");
  var clred = document.getElementById("cloud-red1");
  var clred2 = document.getElementById("cloud-red2");
  var fan = document.getElementById("fan");
  var fan2 = document.getElementById("fan2");
  var coin = document.getElementById("coin");
  var flower1 = document.getElementById("flower1");
  var flower2 = document.getElementById("flower2");
  var btn = document.getElementById("btn");

  //   Function
  cloud1.style.left = "60px";
  cloud2.style.right = "80px";
  clred.style.left = "-70px";
  clred2.style.right = "-70px";
  fan.style.left = "230px";
  fan2.style.right = "230px";
  flower1.style.left = "350px";
  flower2.style.right = "350px";
  btn.style.top = "200%";
  setOpacity(1, fire, text, coin);
  setTop(0, laternLeft, laternLeft2, larternRight);
  setTop("-40px", larternRight2);
  setTop("60%", dragon);
  setTop("120%", circle);
  setLeft();
}

function setOpacity(value, ...elements) {
  elements.forEach(function (element) {
    element.style.opacity = value;
  });
}

function setTop(value, ...elements) {
  elements.forEach(function (element) {
    element.style.top = value;
  });
}

function setLeft(value, ...elements) {
  elements.forEach(function (element) {
    element.style.left = value;
  });
}

function setRight(value, ...elements) {
  elements.forEach(function (element) {
    element.style.right = value;
  });
}

function startAnimation() {
  var dragon = document.getElementById("dragon");
  var circle = document.getElementById("circle");
  if (dragon.style.width === "800px") {
    circle.style.width = "1500px";
  }
}
