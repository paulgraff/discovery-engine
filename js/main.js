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

$('#deItem').click() {

}

var DiscoveryEngine = {
	data: {},
	template: '<li>{0}</li>'
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
