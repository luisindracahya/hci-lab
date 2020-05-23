
$(document).ready(function () {

    $('html').click(function() {
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.backgroundColor = "white";
    });


    $('#menu_dropdown').click((e) =>{
        e.stopPropagation(); 
        document.getElementById("mySidenav").style.width = "220px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    })
})