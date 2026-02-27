
let firstName = '';
let lastName = '';
let email = '';
let password = '';

$("#form").on("submit", function (e) {
    e.preventDefault();
    firstName = $("#first_name").val().trim();
    lastName = $("#last_name").val().trim();
    email = $("#email").val().trim();
    password = $("#password").val().trim();
    if (firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0) {
        $("#message").text(firstName + " " + lastName + " " + "عزیز، خوش آمدی!").removeClass("text-danger");
        $("#modal_container").addClass("modal_container");
        $("#modal_container").fadeIn(500);
    } else {
        $("#message").text("اطلاعات را به درستی وارد کنید!").addClass("text-danger");
        $("#modal_container").addClass("modal_container").fadeIn();
    }

})
$("#btn-close").on("click", function () {
    $("#modal_container").fadeOut(500);
})