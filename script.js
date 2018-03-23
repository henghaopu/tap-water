//var currentHeight = 10;

var btn = document.getElementById('btnDown0');
var btn1 = document.getElementById('btnDown1');
var btn2 = document.getElementById('btnDown2');
var btn3 = document.getElementById('btnDown3');
var btn4 = document.getElementById('btnDown4');
var btn5 = document.getElementById('btnDown5');
var btn6 = document.getElementById('btnDown6');

btn.addEventListener("click", function() {
  var i = 10;
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 15;
    if (i >= (window.innerHeight + 10)) {
        clearInterval(int);
        //currentHeight = (window.innerHeight + 10);
    }
  }, 20);
})

btn1.addEventListener("click", function() {
  var i = (window.innerHeight + 10);
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 15;
    if (i >= (2 * window.innerHeight + 5)) {
        clearInterval(int);
        //currentHeight = 2*(window.innerHeight + 10);
    }
  }, 20);
})

btn2.addEventListener("click", function() {
  var i = (2 * window.innerHeight + 10);
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 15;
    if (i >= (3 * window.innerHeight + 10)) {
        clearInterval(int);
    }
  }, 20);
})

btn3.addEventListener("click", function() {
  var i = (3 * window.innerHeight + 10);
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 15;
    if (i >= (4 * window.innerHeight + 10)) {
        clearInterval(int);
    }
  }, 20);
})

btn4.addEventListener("click", function() {
  var i = (4 * window.innerHeight + 10);
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 15;
    if (i >= (5 * window.innerHeight + 10)) {
        clearInterval(int);
    }
  }, 20);
})

btn5.addEventListener("click", function() {
  var i = (5 * window.innerHeight + 10);
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 15;
    if (i >= (6 * window.innerHeight + 10)) {
        clearInterval(int);
    }
  }, 20);
})

btn6.addEventListener("click", function() {
  var i = (6 * window.innerHeight + 10);
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 15;
    if (i >= (7 * window.innerHeight + 10)) {
        clearInterval(int);
    }
  }, 20);
})