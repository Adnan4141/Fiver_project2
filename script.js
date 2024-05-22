$(document).ready(function () {


    // Navigation Bar
    const overview_containers = $(".overview");
    overview_containers.hide().removeClass("show-container")
    const navItems = $('.nav-item');
    console.log(navItems.eq(1).get(0))
    let currentIndex = navItems.index(navItems.filter('.active'));
    console.log(currentIndex)
    overview_containers.eq(currentIndex).addClass('show-container').show();
    // console.log(overview_containers.eq(index).get())


    // overview_containers.each(function(index) {
    //     // Wrap 'this' with jQuery to use jQuery methods
    //     const $item = $(this);
          
    //    $item.addClass("show-container").show();
    //     // Log the complete class list
    //     console.log($item.attr("class"));

    //     // Assuming overviewHeader is defined and available
    //     const overviewHeader = overview_containers.eq(index).find("#overview-header");

    //     // Example: Remove the 'show-container' class
    //     $item.removeClass("show-container");
    // });




    

    $(".nav-item").click(function () {
        // Get the text of the clicked tab item
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
        let currentIndex = navItems.index(navItems.filter('.active'));
        overview_containers.hide().removeClass("show-container")
        console.log(currentIndex)
        overview_containers.eq(currentIndex).addClass('show-container').show();
         console.log($(".overview").eq(0).attr("class"))
    });

    $(".nav-arrow").click(function() {
        const navItems = $('.nav-item');

        let currentIndex = navItems.index(navItems.filter('.active'));
        function updateSelection() {
            navItems.each(function(index, item) {
                $(item).toggleClass('active', index === currentIndex);
            });
           ;
        }
  
        function navigate(direction) {
            currentIndex = (currentIndex + direction + navItems.length) % navItems.length;
          console.log(currentIndex)
            overview_containers.hide().removeClass("show-container")
           overview_containers.eq(currentIndex).addClass('show-container').show();
            console.log($(".overview").eq(0).attr("class"))
            updateSelection();
        }
    
        if (this.id === "left-arrow") {
            navigate(-1);
        }
        if (this.id === "right-arrow") {
            navigate(1);
        }
    });
    


     // Image active class when clicked
    $("#pic-img img").click(function () {
        // Remove "active"
        $("#pic-img img").removeClass("active");
        // Add "active"
        $(this).addClass("active");
    });

    $("#pic-img-2 img").click(function () {
        // Remove "active"
        $("#pic-img-2 img").removeClass("active");
        // Add "active"
        $(this).addClass("active");
    });



 



    // bottom scroll
    $(".bottom-slider-arrow").click(function() {
        const navItems = $('.slider-dot');
        let currentIndex = navItems.index(navItems.filter('.active'));
        console.log(currentIndex)
        
        function updateSelection() {
            navItems.each(function(index, item) {
                $(item).toggleClass('active', index === currentIndex);
            });
          
        }
    
        function navigate(direction) {
            currentIndex = (currentIndex + direction + navItems.length) % navItems.length;
            console.log(currentIndex)
            overview_containers.hide().removeClass("show-container")
           overview_containers.eq(currentIndex).addClass('show-container').show();
            console.log($(".overview").eq(0).attr("class"))
            updateSelection();
           
        }
    
        if (this.id === "bottom-left") {
            navigate(-1);
        }
        if (this.id === "bottom-right") {
            navigate(1);
        }
    });
    
})