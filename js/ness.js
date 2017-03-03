$(document).ready(function() {

  /************************************/
  /********** INITIALIZATION **********/
  /************************************/

  // Progression bars
  $ness_bars = $('.ness-bar');

  for(let ness_bar of $ness_bars) {
    var $progress = $('<div>', { class: 'ness-progress' });
    $progress.width($(ness_bar).data('ness-bar')).appendTo($(ness_bar));
  }

  // Background images
  setBackground();

  /****************************/
  /********** EVENTS **********/
  /****************************/

  $('.skill').addClass('ness-invisible');
  $('.project').addClass('ness-invisible');

  var Skill;
  var Project;
  var height_toggle = 500;
  var prevTop = 0;

  // Window Scroll
  $(window).on('scroll', function() {

    prevTop = $(this).scrollTop();

    Skill = createSection('skill');

    Project = createSection('project')

    if($(this).scrollTop() + height_toggle >= Skill.first_top && $(this).scrollTop() <= Skill.last_top + height_toggle) {
      Skill.display();
    }

    if($(this).scrollTop() + height_toggle >= Project.first_top && $(this).scrollTop() <= Project.last_top + height_toggle) {
      Project.display();
    }

  });



  /***** FUNCTIONS *****/

  function animateIn(element) {
    $(element).each(function(i, el) {
      setTimeout(function() {
        if(isNotAnimated(el)) {
          $(el).removeClass('ness-invisible').addClass('animate').removeClass('lightSpeedOutX');
        }
      }, 150 * i);
    });
  }

  function animateOut(element) {
    $(element).each(function(i, el) {
      setTimeout(function() {
        $(el).addClass('animate').addClass('lightSpeedOutX');
      }, 150 * i);
    });
  }

  function isAnimated(element) {
    return $(element).hasClass('animate');
  }
  function isNotAnimated(element) {
    return !isAnimated(element);
  }

  /**
  * Add the image specified in the 'data-bg-img' attribute to the 'background' css property
  */
  function setBackground() {
    var element = '[data-bg-img]';
    var url_img = $(element).data('bg-img');
    $(element).css({
      background: $(element).css('background') + ' url('+url_img+')'
    });
  }

  /**
  * @param (string) section : attribut id d'une section. Correspond également aux classes enfant
  * @return un objet contenant l'offset.top du premier élément et du dernier élément de l'ensemble
  * ainsi que des méthodes déclenchant l'animation de tous les élements de la même classe
  */
  function createSection(section) {
    var Elem = {
      first_top: $('.' + section).first().offset().top,
      last_top: $('.' + section).last().offset().top,
      selector: '#' + section,
      display: function() {
        animateIn('.' + section);
      },
      undisplay: function() {
        animateOut('.' + section);
      },
    }
    return Elem;
  }

});
