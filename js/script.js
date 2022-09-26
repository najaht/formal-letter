$(document).ready(function () {

  $("#formOne").submit(function (event) {

    event.preventDefault();

    const street = $("#street").val();
    const city = $("#city").val();
    const state = $("#state").val();
    const date = $("#date").val();

    const name = $("#name").val();
    const companyname = $("#companyname").val();
    const house = $("#house").val();
    const date2 = $("#date2").val();

    const introductoryline = $("#introductoryline").val();

    const salutation = $("#salutation").val().toUpperCase();
    const namee = $("#namee").val().toUpperCase();

    $(".street").text(street);
    $(".city").text(city);
    $(".state").text(state);
    $(".date").text(date);

    $(".name").text(name);
    $(".companyname").text(companyname);
    $(".house").text(house);
    $(".date2").text(date2);

    $(".introductoryline").text(introductoryline);

    $(".salutation").text(salutation);
    $(".namee").text(namee);

  })
})