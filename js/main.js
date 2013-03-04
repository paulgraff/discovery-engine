"use strict";

$(document).on('click', '.tile', function() {
	DiscoveryEngine.reload();
});

$(window).resize(function() {
	DiscoveryEngine.resizeWindow();
});

var DiscoveryEngine = {
	data: {},
	template: '<div class="tile">' +
				'<img src="{0}" alt="Something you want to buy - $590"/>' +
				'<h2>A Movie in the Park:<br />Kung Fu Panda</h2>' +
				'<a>' +
				'</div>',
	reload: function() {
		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
			{
				tags: "cat, dog, mountain, fish, nature, food",
				tagmode: "any",
				format: "json"
			},
			function(data) {
				DiscoveryEngine.update(data);
			});
	},
	update: function(data) {
		var body = '';
		$.each(data.items, function(i,item){
			body += DiscoveryEngine.template.format(item.media.m);
		});

		$('#images').html(body);
		DiscoveryEngine.resizeWindow();
	},
	resizeWindow: function() {
		var winHeight = $(window).height();
		var winWidth = $(window).width();
		var tileWidth = winWidth / 5;
		var tileHeight = winHeight / 4;

		$(".tile").css({
		   width : tileWidth,
		   height : tileHeight
		});
		// $('.tile').capty();
	}
};

DiscoveryEngine.reload();

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

// $(document).on('click', '.tile', function () {
// 	    $('.tile').flippy({
// 		content:"Hi !",
// 		direction:"RIGHT",
// 		duration:"750",
// 		onStart:function(){
// 			//alert("Let's flip");
// 		},
// 		onFinish:function(){
// 			//alert("ok, it's flipped :)");
// 		}
// 	});
// });
