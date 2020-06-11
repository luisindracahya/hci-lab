
$(document).ready(function () {

    $('input[type="date"]').click(function(e) {
        console.log(this)
        document.getElementById(this.id).click();
    })

})