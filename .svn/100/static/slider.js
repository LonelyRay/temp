define(function(require){
	var $ = require('zepto'),
	    slider = require('./control/slider.js');
	
	$('#J_m-slider').slider({
      trigger:'.slider-status',
      loop:true,
      play:true
   });
});