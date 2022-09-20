$(document).ready(function () {

  $("#formOne").submit(function (event) {
   
    event.preventDefault();

    const street = $("#street").val();
    const city = $("#city").val();
    const state = $("#state").val();
    const date = $("#date").val();

  $(".street").text(street);
  $(".city").text(city);
  $(".state").text(state);
  $(".date").text(date);
})


$("#formtwo").submit(function (event) {
   
  event.preventDefault();

  const name = $("#name").val();
  const companyname = $("#companyname").val();
  const state2 = $("#state2").val();
  const date2 = $("#date2").val();

$(".name").text(name);
$(".companyname").text(companyname);
$(".state2").text(state2);
$(".date2").text(date2);


})

$("#form3").submit(function(event){
  event.preventDefault();

  const introductoryline = $("#introductoryline").val();

  $(".introductoryline").text(introductoryline);
})





})