var hamburgherOpen = $(".fa-bars");

hamburgherOpen.click(function() {
    $(".hamburger-menu").fadeIn();
});
//
var hamburgherClose = $(".fa-times");

hamburgherClose.click(function() {
    $(".hamburger-menu").fadeOut();
});