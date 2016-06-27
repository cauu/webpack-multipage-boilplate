import '../../css/app.scss';
import 'font-awesome-webpack';
import 'jquery.backstretch';

import intro from '../../img/intro-1.jpg';
import head1 from '../../img/head-1.jpg';
import head2 from '../../img/head-2.jpg';
import head3 from '../../img/head-3.jpg';
import showcase1 from '../../img/showcase-1.jpg';
import showcase2 from '../../img/showcase-2.jpg';
import showcase3 from '../../img/showcase-3.jpg';
import showcase4 from '../../img/showcase-4.jpg';
import showcase5 from '../../img/showcase-5.jpg';


/*顶部幻灯片*/
$('.iu-grid-carousel').backstretch([
        head1,
        head2,
        head3
],{duration: 3000, fade: 750, centeredX: true});

/*照片展示部分*/
var SHOW_CASE_NUMBER = 5;

$('.iu-grid-showcase-1').backstretch([
  showcase1
],{ fade: 750 });
$('.iu-grid-showcase-2').backstretch([
  showcase2
],{ fade: 750 });
$('.iu-grid-showcase-3').backstretch([
  showcase3
],{ fade: 750 });
$('.iu-grid-showcase-4').backstretch([
  showcase4
],{ fade: 750 });
$('.iu-grid-showcase-5').backstretch([
  showcase5
],{ fade: 750 });

/*介绍部分*/
$('.iu-grid-intro').backstretch([
  intro
],{ fade: 750, centeredX: true});

