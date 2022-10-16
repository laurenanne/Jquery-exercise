$(document).ready(function () {
  window.alert("Let's get ready to party with JQuery!");
});

$("article img").addClass("image-center");

$("article p").eq(3).remove();

let num = Math.floor(Math.random() * 99);
$("h1").css("font-size", `${num}px`);

$("ol").append('<li>"I am new here"</li>');

$("aside").empty().append("<p> Sorry this list exists </p>");

$(".form-control").on("keyup change", function () {
  let colorR = Number($("input").eq(0).val());
  let colorB = Number($("input").eq(1).val());
  let colorG = Number($("input").eq(2).val());
  $("body").css("background-color", `rgb(${colorR}, ${colorG}, ${colorB})`);
});

$("img").on("click", function (evt) {
  $(this).remove();
});
