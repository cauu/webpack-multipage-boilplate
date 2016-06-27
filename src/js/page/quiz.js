import '../../css/app.scss';
import Swiper from 'Swiper';
import animationControl from '../animation-control.js';
import 'font-awesome-webpack';
import 'animate.css';
import 'normalize.css';

const QUEST = [
  {
    q: '问题1',
    '0': 'a1',
    '1': 'a2',
    '2': 'a3',
    '3': 'a4',
  },
  {
    q: '问题2',
    '0': 'a1',
    '1': 'a2',
    '2': 'a3',
    '3': 'a4',
  },
  {
    q: '问题3',
    '0': 'a1',
    '1': 'a2',
    '2': 'a3',
    '3': 'a4',
  }
];

const result = new Array(QUEST.length);

$(document).ready(function() {
  _initSwiper();

  _initQuiz();

  $('.loading-overlay').slideUp();
});

function _initQuiz() {
  $('.quiz-container').each((i, e) => {
    $(e).children('.title').text(QUEST[i]['q']);

    $(e).children('form').children('.quiz').each((j, child) => {
      $(child).append(QUEST[i][j]);

      $(child).children('input').attr('name', i);
      $(child).children('input').click(function(e) {
        result[i] = j;
      });
    });
  });
}

function _initSwiper() {
  new Swiper('.swiper-container', {
    // effect: 'coverflow',
    speed: 400,
    direction: 'vertical',
    // fade: {
    //   crossFade: false
    // },
    // coverflow: {
    //   rotate: 100,
    //   stretch: 0,
    //   depth: 300,
    //   modifier: 1,
    //   slideShadows: false
    // },
    // flip: {
    //   limitRotation: true,
    //   slideShadows: false
    // },
    onInit: function(swiper) {
      animationControl.initAnimationItems();
      animationControl.playAnimation(swiper);
    },
    onTransitionStart: function(swiper) {
      // if(swiper.activeIndex === swiper.slides.length - 1) {
      //   $btnSwipe
      // }
    },
    onTransitionEnd: function(swiper) {
      animationControl.playAnimation(swiper);
    },
    onTouchStart: function(swiper, event) {
    }
  });
}

