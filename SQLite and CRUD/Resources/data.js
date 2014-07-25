var ui = require("ui");

Ti.Database.install("database/contacts.sqlite", "contactsTbl");

var tblData = [];
var read = function(){
	var db = Ti.Database.open("contactsTbl");
	var dbRows = db.execute("SELECT id, name, relation, number FROM contactsTable");
	while (dbRows.isValidRow()) {
		tblData.push({
			id: dbRows.fieldByName('id'),
			name: dbRows.fieldByName('name'),
			relation: dbRows.fieldByName('relation'),
			number: dbRows.fieldByName('number'),
		});
		dbRows.next();
	}
	dbRows.close();
	db.close();
	ui.peopleTbl(tblData);
};
exports.read = read;

var create = function(name, relation, number) {
	var db = Ti.Database.open("contactsTbl");
	db.execute("INSERT INTO contactsTable (name, relation, number) VALUES (?, ?, ?)", name, relation, number);
	var rowID = db.lastInsertRowId;
	db.close();
	tblData = [];
	ui.tabGroup.setActiveTab(ui.tab1);
};
exports.create = create;

var update = function(index, location) {
	var db = Ti.Database.open("contactsTbl");
	db.execute("UPDATE contactsTable SET name=?, relation=?, number =? WHERE id=?",ui.nameField.value, ui.relationField.value, ui.numberField.value, ui.button.id);
	db.close();
	tblData = [];
	read();
	ui.tabGroup.setActiveTab(ui.tab1);
	ui.button.id = null;
	ui.button.edit = false;
	ui.button.title = "Add Contact";
	ui.nameField.value = "";
	ui.relationField.value = "";
	ui.numberField.value = "";
	win2.title = "Add Contacts";
	ui.tab2.title = "Add";
};
exports.update = update;

var del = function(id) {
	var db = Ti.Database.open("contactsTbl");
	db.execute("DELETE FROM contactsTable WHERE id=?", id);
	db.close();
	tblData = [];
	read();
};
exports.del = del;