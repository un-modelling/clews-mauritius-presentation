$(document).ready(function() {

  $('[data-toggle="tooltip"]').tooltip()
  if (screen.width > 1020) {

    $('#fullpage').fullpage({
      'verticalCentered': true,
      'css3': true,
      'navigation': true,
      'navigationPosition': 'right',
      'navigationTooltips': ['Cover', 'Introduction', 'Policy Focus', 'Sustainable Development', 'How to Use this Tool', 'How to Use this Tool'],
      'showActiveTooltip': true,

      'afterLoad': function(anchorLink, index) {

      },

      'onLeave': function(index, nextIndex, direction) {
        $('.overlay').removeClass('animated fadeIn');
        if (nextIndex == 6) { //last page
          $('#playground-overlay').addClass('animated fadeIn');
          $('#buttonHolder').css("display", "none");
          $('#bottomArrow').css("display", "none");
          $('#staticButton').css("display", "");
        } else {
          $('#buttonHolder').css("display", "");
          $('#bottomArrow').css("display", "");
          $('#staticButton').css("display", "none");
        }
        if (nextIndex == 1) {
          $('#topArrow').css("display", "none");
          $('#arrowDown').css("display", "none");
          $('#staticButton').css("display", "none");
        } else {
          $('#topArrow').css("display", "");
          $('#arrowDown').css("display", "");
        }
        if (nextIndex == 1) {
          $('#scrollText').css('display', '')
          $('#landingButton').css('display', '')
        } else {
          $('#scrollText').css('display', 'none')
          $('#landingButton').css('display', 'none')
        }

      }
    });
  }

});
