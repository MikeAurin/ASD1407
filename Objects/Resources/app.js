var mainWin = Ti.UI.createWindow({
	title: "Android L Update Checker",
	backgroundColor: "#fff"
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin,
});

var table = Ti.UI.createTableView({
});

if(Ti.Platform.name ==="iPhoneOS"){
	table.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var phones2013 = Ti.UI.createTableViewSection({
	headerTitle: "2013 Devices"
});

var phones2014 = Ti.UI.createTableViewSection({
	headerTitle: "2104 Devices"
});

var loadData = require("data");

mainWin.add(table);
mainWin.open();
navWin.open();

