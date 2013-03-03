"use strict";
$(function() {
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	{
		//tags: "mount rainier",
		tagmode: "any",
		format: "json"
	},
	function(data) {
		$.each(data.items, function(i,item){
			var html = "<img class='tile'/>";
			$(html).attr("src", item.media.m).appendTo("#images");
		});
	});
});