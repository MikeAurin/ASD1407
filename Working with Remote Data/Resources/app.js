Titanium.UI.setBackgroundColor('#000');

// export remote data module
var remote = require("API");

var table1 = Ti.UI.createTableView({});

var win1 = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "Reddit API"
});

win1.add(table1);

win1.open();
