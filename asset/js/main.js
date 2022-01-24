$(function () {
    AOS.init();
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height() - 500) {
            $("#mainNav").removeClass("bg-transparent navbar-dark").addClass(
                "bg-light navbar-light");
        } else {
            $("#mainNav").addClass("bg-transparent navbar-dark").removeClass(
                "bg-light navbar-light");
        }

    })
})