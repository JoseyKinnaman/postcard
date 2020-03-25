$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    console.log(lastNameInput);
    var animalNameInput = $("input#animalName").val();
    var streetAddressInput = $("input#streetAddress").val();
    var cityStateZipInput = $("input#cityStateZip").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".animalName").text(animalNameInput);
    $(".streetAddress").text(streetAddressInput);
    $(".cityStateZip").text(cityStateZipInput);

    $("#letter").show();

    event.preventDefault();
  });
});
