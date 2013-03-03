"use strict";

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