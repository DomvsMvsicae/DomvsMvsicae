function openNav() {
    var sidenav = document.getElementById("mySidenav");
    var body = document.body;
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth < 1000) {
        sidenav.style.width = "100%";       
    } else {
        sidenav.style.width = "250px";   
    }
    sidenav.style.webkitBackdropFilter = "blur(7px)";
    sidenav.style.backdropFilter = "blur(7px)";

    body.classList.add("no-scroll");
}

function closeNav() {
    var sidenav = document.getElementById("mySidenav");
    var body = document.body;
    sidenav.style.width = "0";
    sidenav.style.webkitBackdropFilter = "none";
    sidenav.style.backdropFilter = "none";

    body.classList.remove("no-scroll");
}

function openPage(pageUrl)
{
    open(pageUrl, "_self");
}

function subscribeToCalendar() {
    var subscriptionLink = "https://forms.gle/5mx21KktoTHbh45N9";
    window.open(subscriptionLink, '_blank');
}
