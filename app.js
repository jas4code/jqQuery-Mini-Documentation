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

    // FadeIn Button 
    $("#fadeIn").click(3000, function() {
        $("#fadeIn-sample").fadeIn("slow");
    })

    // FadeOut Button 
     $("#fadeOut").click(3000, function() {
        $("#fadeOut-sample").fadeOut("slow");
    })

    // AddClass Button 
    $("#addClass").click(function() {
        $("#addClass-sample").addClass("bg-primary");
    })

    // Append Button 
    $("#append").click(function() {
        $("#append-sample").append(" becomes the way.");
    })

    // HTML Button 
    $("#html").click(function() {
        var htmlString = $( this ).parent().html();
        $( "#html-sample" ).text(htmlString);
    })

    // Attr Button 
    $("#attr").click(function() {
        $( "p#attr-sample" ).attr("class", "bg-primary");
    })

    // Val Button 
    $("#val").click(function() {
        console.log($("#val-input").val())
        $( "span#val-sample" ).text( $("#val-input").val() )
    })

    // Val Button 
    $("#text").click(function() {
        alert($( "span#text-sample" ).text())
    })
})