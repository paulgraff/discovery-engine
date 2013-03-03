"use strict";

$(document).ready(function() {
	$(document).on('click', '.tile', function() {
		DiscoveryEngine.reload();
	});
});

var DiscoveryEngine = {
	data: {},
	template: '<div class="tile"><img src="{0}"/></div>',
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
		var winHeight = $(window).height();
		var winWidth = $(window).width();
		var tileWidth = winWidth / 5;
		var tileHeight = winHeight / 4;

		$.each(data.items, function(i,item){
			body += DiscoveryEngine.template.format(item.media.m);
		});

		$('#images').html(body);
		$(".tile").css({
		   width : tileWidth,
		   height : tileHeight
		});
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

$('.tile').click(function() {
	
});
