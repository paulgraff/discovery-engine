"use strict";

$(document).on('click', '.tile', function() {
	$(".tile").fadeOut();
	DiscoveryEngine.reload();
});

$(window).resize(function() {
	DiscoveryEngine.resizeWindow();
});

var DiscoveryEngine = {
	tags: ['cat', 'dog', 'mountain', 'fish', 'nature', 'food', 'purse', 'hat', 'silverware'],
	template: '<div class="tile">' +
				
				'<img src="{0}" alt="Something you want to buy - $590"/>' +
				'<h2>{1}</h2>' +
				'<a>' +
				'</div>',
	reload: function() {
		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
			{
				tags: DiscoveryEngine.tags[Math.floor(Math.random() * DiscoveryEngine.tags.length)],
				tagmode: "any",
				format: "json"
			},
			function(data) {
				DiscoveryEngine.update(data);
			});
	},
	update: function(data) {
		var body = '';
		console.log(data);
		$.each(data.items, function(i,item){
			body += DiscoveryEngine.template.format(item.media.m, item.title);
		});

		$('#images').html(body);
		DiscoveryEngine.resizeWindow();
			$(".tile").fadeIn();

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

		$("img").css({
		   'min-width' : tileWidth,
		   'min-height' : tileHeight
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
