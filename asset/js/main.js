$(function () {
    AOS.init();
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height() - 500) {
            $("#mainNav").removeClass("bg-transparent navbar-dark nav-border").addClass(
                "bg-light navbar-light");
        } else {
            $("#mainNav").addClass("bg-transparent navbar-dark nav-border").removeClass(
                "bg-light navbar-light");
        }

    })
})