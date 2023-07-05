//window.alert("Hello welcome to vinay calculator")
function calc() {
  var input = String(document.getElementById("view").value);
  var total = parseFloat(eval(input));

  document.getElementById("view").value = total;

  return total;
}
function clear_s() {
  document.getElementById("view").value = "";
}
document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('butt2');
  const input = document.getElementById('view');

  button.addEventListener('click', function (event) {
    const buttonRect = button.getBoundingClientRect();
    const clickX = event.clientX - buttonRect.left;
    const halfWidth = buttonRect.width / 2;

    if (clickX <= halfWidth) {
      input.value += '(';
    } else {
      input.value += ')';
    }
    var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
  });
});

function button3() {
  var input = String(document.getElementById("view").value);
  var b3 = String(document.getElementById("butt3").value);
  var but3 = input + b3;
  document.getElementById("view").value = but3;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button4() {
  var input = String(document.getElementById("view").value);
  var b4 = String(document.getElementById("butt4").value);
  var but4 = input + b4;
  document.getElementById("view").value = but4;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button5() {
  var input = String(document.getElementById("view").value);
  var b5 = parseFloat(document.getElementById("butt5").value);
  var but5 = input + b5;
  document.getElementById("view").value = but5;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button6() {
  var input = String(document.getElementById("view").value);
  var b6 = parseFloat(document.getElementById("butt6").value);
  var but6 = input + b6;
  document.getElementById("view").value = but6;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button7() {
  var input = String(document.getElementById("view").value);
  var b7 = parseFloat(document.getElementById("butt7").value);
  var but7 = input + b7;
  document.getElementById("view").value = but7;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button8() {
  var input = String(document.getElementById("view").value);
  var b8 = String(document.getElementById("butt8").value);
  var but8 = input + b8;
  document.getElementById("view").value = but8;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button9() {
  var input = String(document.getElementById("view").value);
  var b9 = parseFloat(document.getElementById("butt9").value);
  var but9 = input + b9;
  document.getElementById("view").value = but9;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button10() {
  var input = String(document.getElementById("view").value);
  var b10 = parseFloat(document.getElementById("butt10").value);
  var but10 = input + b10;
  document.getElementById("view").value = but10;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button11() {
  var input = String(document.getElementById("view").value);
  var b11 = parseFloat(document.getElementById("butt11").value);
  var but11 = input + b11;
  document.getElementById("view").value = but11;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button12() {
  var input = String(document.getElementById("view").value);
  var b12 = String(document.getElementById("butt12").value);
  var but12 = input + b12;
  document.getElementById("view").value = but12;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button13() {
  var input = String(document.getElementById("view").value);
  var b13 = parseFloat(document.getElementById("butt13").value);
  var but13 = input + b13;
  document.getElementById("view").value = but13;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button14() {
  var input = String(document.getElementById("view").value);
  var b14 = parseFloat(document.getElementById("butt14").value);
  var but14 = input + b14;
  document.getElementById("view").value = but14;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button15() {
  var input = String(document.getElementById("view").value);
  var b15 = parseFloat(document.getElementById("butt15").value);
  var but15 = input + b15;
  document.getElementById("view").value = but15;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button16() {
  var input = String(document.getElementById("view").value);
  var b16 = String(document.getElementById("butt16").value);
  var but16 = input + b16;
  document.getElementById("view").value = but16;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button17() {
  var input = String(document.getElementById("view").value);
  var b17 = parseFloat(document.getElementById("butt17").value);
  var but17 = input + b17;
  document.getElementById("view").value = but17;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button18() {
  var input = String(document.getElementById("view").value);
  var b18 = String(document.getElementById("butt18").value);
  var but18 = input + b18;
  document.getElementById("view").value = but18;
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
function button19() {
  var input = String(document.getElementById("view").value);
  var b19 = parseFloat(document.getElementById("butt19").value);
  document.getElementById("view").value = input.substring(0, input.length - 1);
  var container = document.getElementById("view");
  container.scrollLeft = container.scrollWidth;
}
