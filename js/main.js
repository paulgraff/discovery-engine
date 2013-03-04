"use strict";

$(document).on('click', '.tile', function() {
	$(".tile").fadeOut();
	DiscoveryEngine.reload();
});

$(document).on('mouseover', '.tile', function() {
	$(this).find('h4').show();
});

$(document).on('mouseleave', '.tile', function() {
	$(this).find('h4').hide();
});

$(document).on('click', '.tile h4', function() {
	alert('going to product page');
	return false;
});

$(window).resize(function() {
	DiscoveryEngine.resizeWindow();
});

var DiscoveryEngine = {
	tags: ['cat', 'dog', 'mountain', 'fish', 'nature', 'food', 'purse', 'hat', 'silverware'],
	template: '<div class="tile">' +
				
				'<img src="{0}" alt="Something you want to buy - $590"/>' +
				'<h4><span>{1}<span class="spacer"></span><br /></h4>' +
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
