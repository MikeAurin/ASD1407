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
			height: 70
		});
		var tblView = Ti.UI.createView({
			layout: "vertical",
			left: 15,
			top: 5,
			height: Ti.UI.FILL,
			width: Ti.UI.FILL
		});
		var nameLabel = Ti.UI.createLabel({
			text: peopleData[i].name, 
			width: Ti.UI.FILL,
			font: {fontSize: 18, fontFamily: "Helvetica"}
		});
		var relationLabel = Ti.UI.createLabel({
			text: peopleData[i].relation,
			width: Ti.UI.FILL,
			font: {fontSize: 12, fontFamily: "Helvetica"}
		});
		var numberLabel = Ti.UI.createLabel({
			text: peopleData[i].number,
			width: Ti.UI.FILL,
			font: {fontSize: 14, fontFamily: "Helvetica"}
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
	font: {fontSize: 18, fontFamily: "Helvetica"},
	left: 15, 
	top: 30,
	textAlign: "left"
});
exports.nameField = Ti.UI.createTextField({
	left: 15, 
	right: 15, 
	top: 3,
	height: 30,
	borderSize: 1,
	borderColor: "gray",
	font: {fontSize: 18, fontFamily: "Helvetica"},
	paddingLeft: 5,
	paddingRight: 5
});

exports.numberLabel = Ti.UI.createLabel({
	text: "Description",
	font: {fontSize: 18, fontFamily: "Helvetica"},
	left: 15, 
	top: 30,
	textAlign: "left"
});
exports.numberField = Ti.UI.createTextField({
	left: 15, 
	right: 15, 
	top: 3,
	height: 45,
	borderSize: 1,
	borderColor: "gray",
	font: {fontSize: 18, fontFamily: "Helvetica"},
	paddingLeft: 5, 
	paddingRight: 5
});

exports.relationLabel = Ti.UI.createLabel({
	text: "Relation",
	font: {fontSize: 18, fontFamily: "Helvetica"},
	left: 15, 
	top: 50,
	textAlign: "left"
});

exports.relationField = Ti.UI.createTextField({
	left: 15, 
	right: 15, 
	top: 3, 
	height: 50,
	font: {fontSize: 18, 
	fontFamily: "Helvetica"},
	borderSize: 1,
	borderColor: "gray",
	paddingLeft: 5, 
	paddingRight: 5
});

exports.button = Ti.UI.createButton({
	title: "Add Person",
	height: 30, 
	top: 30,
	left: 15, 
	right: 15,
	backgroundColor: "#f3f3f3"
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();

