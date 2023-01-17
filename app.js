$(document).ready(function() {
    $(".hidden").hide()
    $(".show").show()

    // Click Button
    $("#click").click(function() {
        alert(".click(): Display 'alert' mo daw");
        // $("#main .main-content .content").hide();
    })

    // Hide Button
    $("#hide").click(function() {
        $("#hide-sample").hide();
    })

    // Show Button
    $("#show").click(function() {
        $("#show-sample").show();
    })

    // Toggle Switch
    $("#toggle").click(function() {
        $("#toggle-sample").toggle();
    })

    // SlideDown Button
    $("#slideDown").click(function() {
        $("#slideDown-sample").slideDown("slow");
    })

    // SlideDown Button
    $("#slideUp").click(function() {
        $("#slideUp-sample").slideUp("slow");
    })

    // SlideToggle Switch 
    $("#slideToggle").click(function() {
        $("#slideToggle-sample").slideToggle();
    })

    // fadeIn Button 
    $("#fadeIn").click(3000, function() {
        $("#fadeIn-sample").fadeIn("slow");
    })

    // fadeOut Button 
     $("#fadeOut").click(3000, function() {
        $("#fadeOut-sample").fadeOut("slow");
    })

    // addClass Button 
    $("#addClass").click(function() {
        $("#addClass-sample").addClass("bg-primary");
    })

})