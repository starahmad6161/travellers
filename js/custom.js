$(function () {  
    "use strict";

    //trigger Slider
    $('.carousel').carousel();
    
    
    
    /*==================================================*/
    /* When You Click Search Icon Will show Search input*/
    /*=================================================*/
    $(".navbar .navbar-collapse .search svg").on("click", function () {  
        $(this).parent(".search").toggleClass("selected");
    });



    /*==================================================*/
    /* string-in-number */
    /* Change Position Of Tabs with screen width */
    /*=================================================*/
    $(".string-in-number .all-content .content").css("display", "none");
    $(".string-in-number .all-content .content.active").css("display", "block");

    /*
    var status = 0; // if status equal (1) that mean dont append [tab-name] into tabs div
    function calcScreenWidth() {
      //Calculat Screen Width
      var screenWidth = $(window).innerWidth();

      //check Screen Width
      if (screenWidth < 768) { // Mobile Users

        // When Click Tab Name 
        $(".string-in-number .all-content .tab-name").on("click", function () {

          //Add Class Selected On This Tab And Remove From Others
          $(this).addClass("selected").siblings(".tab-name").removeClass("selected");

          // Get data-tab Attribue Html From Element
          var tab = $($(this).data("tab"));
          // [this] for .tba-name 
          var $this = this;
          // Add Class Active To Tab content And Show It And Hide Other tab content
          tab.siblings(".content").removeClass("active").fadeOut(500, function() {
            //Animation To slide top To Tab Item
            $("body , html").animate({
              scrollTop : $($this).offset().top
            },200);
            tab.addClass("active").fadeIn(500);
          });
        });
        // add tab-name before tab-content
        $(".all-content .tabs .tab-name").each(function() {
          var dataTab = $($(this).data("tab"));
          console.log(dataTab);
          dataTab.before(this);
        });

      } else { // Desktop Users
          if (status == 0) {
            $(".all-content").prepend('<div class="tabs text-md-left text-center"></div>');
            $(".all-content .tab-name").each(function() {
              $(".all-content .tabs").append(this);
            });

            $(".all-content .tabs .tab-name").on("click", function() {
              $(this).addClass("selected").siblings(".tab-name").removeClass("selected");
                var tab = $($(this).data("tab"));
                tab.siblings(".content").removeClass("active").fadeOut(0, function () {  
                    tab.addClass("active").fadeIn(0);
                });
            });
            status = 1;
          }
      }
      console.log(screenWidth);
    }
    $(window).on("resize", function() {
      calcScreenWidth();
    });
    calcScreenWidth();
    */
   


   var status = 0; // if status equal (1) that mean dont append [tab-name] into tabs div
   //Function
   function calcScreenWidth($th) {
     var $this = $th;
     //Calculat Screen Width
     var screenWidth = $(window).innerWidth();
     //check Screen Width
     if (screenWidth < 768) { // Mobile Users

         //Add Class Selected On This Tab And Remove From Others
         $($this).addClass("selected").siblings(".tab-name").removeClass("selected");

         // Get data-tab Attribue Html From Element
         var tab = $($($this).data("tab"));
         // Add Class Active To Tab content And Show It And Hide Other tab content

         tab.addClass("active").fadeIn(500).siblings(".content").removeClass("active").fadeOut(500, function() {
            $("body , html").animate({
              scrollTop : $($this).offset().top
            },200);
         });
        
         if (status == 1) {
           // add tab-name before tab-content
           $(".all-content .tabs .tab-name").each(function() {
             var dataTab = $($(this).data("tab"));
             dataTab.before(this);
           });
           status = 0;
         }

     } else { // Desktop Users
      
         if (status == 0) {
           
            //console.log("Work");
           $(".all-content .tab-name").each(function() {
             $(".all-content .tabs").append(this);
           });
           status = 1;
          }

          $($this).addClass("selected").siblings(".tab-name").removeClass("selected");
          var tab = $($($this).data("tab"));
          tab.siblings(".content").removeClass("active").fadeOut(0, function () {  
              tab.addClass("active").fadeIn(0);
          });
    }
   }

   var resizeInfo = 0;
   $(window).on("resize", function() {
     var screenWidth = $(window).innerWidth();
      
     // To Do Calc One Time 
     if (screenWidth < 768) { //mobile
        if (resizeInfo == 0) { 
           resizeInfo = 1;
           //console.log("resize equal Now (1)");
           calcScreenWidth($(".all-content .tab-name.selected"));
        }
      } else { //desktop
        if (resizeInfo == 1) {
            resizeInfo = 0;
            //console.log("resize equal Now (0)");
            calcScreenWidth($(".all-content .tab-name.selected"));
        }
      }
   });
   calcScreenWidth();

   
   $(".all-content .tab-name").on("click", function () {
        calcScreenWidth(this);
    });
    
});