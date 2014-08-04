Ti.UI.setBackgroundColor("white");

var window = Ti.UI.createWindow({
	backgroundColor: "#cecece",
	fullscreen: true,
	layout: "vertical",
});

var header = Ti.UI.createView({
	height: 50,
	backgroundColor: "#333",
	top: 0
});

var headerLabel = Ti.UI.createLabel({
	text: "Mildly Interesting",
	font: {fontFamily: "Roboto", fontSize: 22, fontWeight: "bold"},
	color: "white"
});

var scrollView = Ti.UI.createScrollView({
	height: Ti.Platform.displayCaps.platformHeight - header,
	layout: "vertical",
});

header.add(headerLabel);
window.add(header);
window.add(scrollView);

var database = require("database"); //this file is not within your resources directory and will not load.
var remoteData = require('remoteData');  


window.open();
