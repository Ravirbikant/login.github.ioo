var count = 0;
$(".register-option").click(function () {
  if (count % 2 == 0) {
    $(".sign-up").removeClass("remove");
    $(".login").addClass("remove");
    $(".reg-user-para").removeClass("remove");
    $(".welcome-para").addClass("remove");
  } else {
    $(".sign-up").addClass("remove");
    $(".login").removeClass("remove");
    $(".reg-user-para").addClass("remove");
    $(".welcome-para").removeClass("remove");
  }
  count++;
});

$(".lg").click(function () {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
    $(".fa-eye").addClass("remove");
    $(".fa-eye-slash").removeClass("remove");
  } else {
    x.type = "password";
    $(".fa-eye").removeClass("remove");
    $(".fa-eye-slash").addClass("remove");
  }
});

$(".pt").click(function () {
  var x = document.getElementById("passwordtry");
  if (x.type === "password") {
    x.type = "text";
    $(".fa-eye.pt").addClass("remove");
    $(".fa-eye-slash.pt").removeClass("remove");
  } else {
    x.type = "password";
    $(".fa-eye.pt").removeClass("remove");
    $(".fa-eye-slash.pt").addClass("remove");
  }
});

$(".pf").click(function () {
  var x = document.getElementById("passwordfinal");
  if (x.type === "password") {
    x.type = "text";
    $(".fa-eye.pf").addClass("remove");
    $(".fa-eye-slash.pf").removeClass("remove");
  } else {
    x.type = "password";
    $(".fa-eye.pf").removeClass("remove");
    $(".fa-eye-slash.pf").addClass("remove");
  }
});

/* 
1.Check inputs validity
2.bg-img for responsiveness
*/
