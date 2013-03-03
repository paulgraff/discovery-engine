"use strict";
$(function() {
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	{
		tags: "cat, dog, mountain, fish, nature",
		tagmode: "any",
		format: "json"
	},
	function(data) {
		var winHeight = $(window).height();
		var winWidth = $(window).width();
		var tileWidth = winWidth / 5;
		var tileHeight = winHeight / 4;
		
		$.each(data.items, function(i,item){
			var html = "<div class='tile'><img src=\"" + item.media.m + "\"/></div>";
			$("#images").append(html);
		});
		
		
		
		
		
		
		
		$(".tile").css({
		   width : tileWidth,
		   height : tileHeight
		});
	});
});

$('.deItem').click(function() {

});

var DiscoveryEngine = {
	data: {},
	template: '<li>{0}</li>',
	reload: function() {
		result = [];
		// put in the api call to flickr here
		return result;
	},
}

 /* Protype additions */
String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] != 'undefined'
      ? args[number]
      : match
    ;
  });
};


	$(document).on('click', '.tile', function () {
	    $('.tile').flippy({
		content:"Hi !",
		direction:"RIGHT",
		duration:"750",
		onStart:function(){
			//alert("Let's flip");
		},
		onFinish:function(){
			//alert("ok, it's flipped :)");
		}
	});
});