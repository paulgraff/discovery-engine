"use strict";

$(document).ready(function() {
	$('#images').click(function() {
		DiscoveryEngine.reload();
	});
});

var DiscoveryEngine = {
	data: {},
	template: '<img clas="tile" src="{0}"/>',
	reload: function() {
		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
			{
				//tags: "mount rainier",
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