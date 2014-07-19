Ti.UI.setBackgroundColor("white");

var window = Ti.UI.createWindow({
	backgroundColor: "#cecece",
	fullscreen: true,
	layout: "vertical",
});

header = Ti.UI.createView({
	height: 50,
	backgroundColor: "#333",
	top: 0
});

headerLabel = Ti.UI.createLabel({
	text: "Mildly Interesting",
	font: {fontFamily: "Roboto", fontSize: 22, fontWeight: "bold"},
	color: "white"
});

var scrollView = Ti.UI.createScrollView({
	height: Ti.Platform.displayCaps.platformHeight - header,
	layout: "vertical",
	backgroundImage: "reddit_alien.png"
});

header.add(headerLabel);
window.add(header);
window.add(scrollView);

var remoteData = require("remoteData");

window.open();
