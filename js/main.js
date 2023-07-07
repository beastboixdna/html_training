const tooltips = $(".bs-tt");
tooltips.each(function () {
    new bootstrap.Tooltip(this);
    this.style.cursor = "pointer";
});
$(document).ready(function () {
    var moon_sun = $(".theme-animation");
    moon_sun.on("click", function () {
        var themePreference = $(this).attr("value");
        localStorage.setItem("theme", $(this).attr("value"));
        //     localStorage.setItem("theme", $(this).attr("value"))
        // }
        // $(".theme-animation").addClass("show-theme-icon")
        // $(this).removeClass("show-theme-icon")
        // $(".navbar").toggleClass("dark")
        showTheme();
    });

    function showTheme() {
        var themePreference = localStorage.getItem("theme");
        if (themePreference === "light") {
            $(".theme-animation-moon").removeClass("show-theme-icon");
            $(".theme-animation-sun").addClass("show-theme-icon");
            $(".navbar").removeClass("dark");
            $("body").removeClass("dark");
        } else if (themePreference === "dark") {
            $(".theme-animation-sun").removeClass("show-theme-icon");
            $(".theme-animation-moon").addClass("show-theme-icon");
            $(".navbar").addClass("dark");
            $("body").addClass("dark");
        }
    }
    showTheme();
});
