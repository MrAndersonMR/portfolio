import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* function isElementInViewport(elem) {
  var $elem = $(elem);
  
  // Get the scroll position of the page.
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  
  // Get the position of the element on the page.
  var elemTop = Math.round( $elem.offset().top );
  var elemBottom = elemTop + $elem.height();
  
  return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}
  
// Check if it's time to start the animation.
function checkAnimation() {
  var $elem = $('.row .wpb_content_element');

  $elem.each(function(){
      var $singleElement = $(this);
      // If the animation has already been started
      if ($singleElement.hasClass('start')) return;

      if (isElementInViewport($singleElement)) {
          // Start the animation
          $singleElement.addClass('start');
      }
  });
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
}); */

/* const rgb = [255, 0, 0];

// Randomly change to showcase updates
setInterval(setContrast, 1000);

function setContrast() {
  // Randomly update colours
  rgb[0] = Math.round(Math.random() * 255);
  rgb[1] = Math.round(Math.random() * 255);
  rgb[2] = Math.round(Math.random() * 255);

  // http://www.w3.org/TR/AERT#color-contrast
  const brightness = Math.round(((parseInt(rgb[0]) * 299) +
                      (parseInt(rgb[1]) * 587) +
                      (parseInt(rgb[2]) * 114)) / 1000);
  const textColour = (brightness > 125) ? 'black' : 'white';
  const backgroundColour = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
  $('#bg').css('color', textColour); 
  $('#bg').css('background-color', backgroundColour);
} */

$(document).ready(function(){
	$(window).scroll(function(){
  	var light_pos = $('#white_div').offset().top;
    var light_height = $('#white_div').height();
    var menu_pos = $('.NavigationButton').offset().top;
    var menu_height = $('.NavigationButton').height();
    var scroll = $(window).scrollTop();
    console.log('light',light_pos);
    console.log('menu',menu_pos);
    console.log('scroll',scroll);
    
    if(menu_pos > light_pos && menu_pos < (light_pos + light_height)) {
    	$('.NavigationButton').addClass('menu_black');
      $('.NavigationButton').removeClass('menu_white');
    }
    else {
    	$('.NavigationButton').removeClass('menu_black');
      $('.NavigationButton').addClass('menu_white');
    }
    
  })
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();