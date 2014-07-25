var tabGroup = Ti.UI.createTabGroup();

var tab1 = Ti.UI.createTab({
	icon: "KS_nav_views.png",
	title: "Contacts",
	window: win1
});

var tab2 = Ti.UI.createTab({
	icon: "KS_nav_ui.png",
	title: "Add",
	window: win2
});

var tableData = Ti.UI.createTableView({
	backgroundColor: "white",
	height: Ti.UI.FULL
});

var button = Ti.UI.createButton({
	bottom: 0,
	title: "Create"
});

var peopleTbl = function(peopleData) {
	
	var dataTable = [];
	for (i in peopleData) {
		var tblRows = Ti.UI.createTableViewRow({
			id: peopleData[i].id,
			width: Ti.UI.FILL,
			height: "70dp"
		});
		var tblView = Ti.UI.createView({
			layout: "vertical",
			left: "15dp",
			top: "5dp",
			height: Ti.UI.FILL,
			width: Ti.UI.FILL
		});
		var nameLabel = Ti.UI.createLabel({
			text: peopleData[i].name, 
			width: Ti.UI.FILL,
			font: {fontSize: "18dp", fontFamily: "Helvetica", fontColor: "#black"}
		});
		var relationLabel = Ti.UI.createLabel({
			text: peopleData[i].relation,
			width: Ti.UI.FILL,
			font: {fontSize: "12dp", fontFamily: "Helvetica", fontColor: "#f00"},
		});
		var numberLabel = Ti.UI.createLabel({
			text: peopleData[i].number,
			width: Ti.UI.FILL,
			font: {fontSize: "14dp", fontFamily: "Helvetica", fontColor: "#f00"}
		});
		
		
		tblView.add(nameLabel);
		tblView.add(relationLabel);
		tblView.add(numberLabel);
		tblRows.add(tblView);
		dataTable.push(tblRows);
		tab2.add(button);
		
		exports.nameLabel = nameLabel;
		exports.relationLabel = relationLabel;
		exports.numberLabel = numberLabel;
	}
	tableData.setData(dataTable);
};

exports.peopleTbl = peopleTbl;
exports.tableData = tableData;
exports.button = button;
exports.tab1 = tab1;
exports.tab2 = tab2;
exports.tabGroup = tabGroup;

exports.nameLabel = Ti.UI.createLabel({
	text: "Name",
	font: {fontSize: "18dp", fontFamily: "Helvetica"},
	left: "15dp", top: "30dp",
	textAlign: "left"
});
exports.nameField = Ti.UI.createTextField({
	left: "15dp", 
	right: "15dp", top: "3dp",
	height: "30dp",
	borderSize: "1dp",
	borderColor: "gray",
	font: {fontSize: "18dp", fontFamily: "Helvetica"},
	paddingLeft: "5dp", paddingRight: "5dp"
});

exports.numberLabel = Ti.UI.createLabel({
	text: "Description",
	font: {fontSize: "18dp", fontFamily: "Helvetica"},
	left: "15dp", 
	top: "30dp",
	textAlign: "left"
});
exports.numberField = Ti.UI.createTextField({
	left: "15dp", 
	right: "15dp", 
	top: "3dp",
	height: "45dp",
	borderSize: "1dp",
	borderColor: "gray",
	font: {fontSize: "18dp", fontFamily: "Helvetica"},
	paddingLeft: "5dp", 
	paddingRight: "5dp"
});

exports.relationLabel = Ti.UI.createLabel({
	text: "Relation",
	font: {fontSize: "18dp", fontFamily: "Helvetica"},
	left: "15dp", 
	top: "50dp",
	textAlign: "left"
});

exports.relationField = Ti.UI.createTextField({
	left: "15dp", 
	right: "15dp", 
	top: "3dp", 
	height: "50dp",
	font: {fontSize: "18dp", 
	fontFamily: "Helvetica"},
	borderSize: "1dp",
	borderColor: "gray",
	paddingLeft: "5dp", paddingRight: "5dp"
});

exports.button = Ti.UI.createButton({
	title: "Add Person",
	height: "30dp", top: "30dp",
	left: "15dp", right: "15dp",
	backgroundColor: "#f3f3f3"
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();
