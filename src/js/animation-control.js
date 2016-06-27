let AnimationControl = {
  initAnimationItems() {
    $('.animated').each(function() {
      let aniDuration, aniDelay;

      $(this).attr('data-origin-class', $(this).attr('class'));

      aniDuration = $(this).data('ani-duration');
      aniDelay = $(this).data('ani-delay');

      $(this).css({
        'visibility': 'hidden',
        'animation-duration': aniDuration,
        '-webkit-animation-duration': aniDuration,
        'animation-delay': aniDelay,
        '-webkit-animation-delay': aniDelay
      });
    });
  },

  playAnimation(swiper) {
    this.clearAnimation();

    let aniItems = swiper.slides[swiper.activeIndex].querySelectorAll('.animated');

    $(aniItems).each(function() {
      var aniName;
      $(this).css({ 'visibility': 'visible' });
      aniName = $(this).data('ani-name');
      $(this).addClass(aniName);
    });
  },

  clearAnimation() {
    $('animated').each(function() {
      $(this).css({ 'visibility': 'hidden' });
      $(this).attr('class', $(this).data('origin-class'));
    });
  }
}

export default AnimationControl;
