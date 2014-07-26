Ti.UI.setBackgroundColor("white");

var win1 = Ti.UI.createWindow({
	title: "Contacts",
	layout: "vertical"
});

var win2 = Ti.UI.createWindow({
	title: "Add to Contacts",
	backgroundColor: "#f3f3f3",
	layout: "vertical"
});

var ui = require("ui");
var data = require("data");
data.read();

ui.button.addEventListener("click", function(e){
	if (ui.button.edit != true) {
		alert("Create!");
		var newName = ui.nameField.value;
		var newRelation = ui.relationField.value;
		var newNumber = ui.numberField.value;
		ui.nameField.value = "";
		ui.relationField.value = "";
		ui.numberField.value = "";
		data.create(newName, newRelation, newNumber);
		data.read();
	} else {
		alert("Contact Updated!");
		ui.tableData.removeAllChildren();
		data.update(ui.button.index, ui.button.location);
	}
});

ui.tableData.addEventListener("click", function(e){
	var dialog = Ti.UI.createAlertDialog({
		cancel: 2,
		buttonNames: ["Update", "Delete", "Cancel"],
		message: "Edit Contact",
		title: "Edit Contact"
	});
	dialog.addEventListener("click", function(evt){
		if (evt.index === 0) {
			for (i in e.row.children) {
				var view = e.row.children[i];
				ui.nameField.value = view.children[0].text;
				ui.relationField.value = view.children[1].text;
				ui.numberField.value = view.children[2].text;
			}
			ui.button.title = "Update Contact";
			ui.button.id = e.row.id;
			ui.button.edit = true;
			ui.button.index = e.index;
			win2.title = "Update Contact";
			ui.tab2.title = "Update";
			ui.tabGroup.setActiveTab(ui.tab2);
		}
		if (evt.index === 1) {
			var confirmDelete = Ti.UI.createAlertDialog({
				cancel: 1,
				buttonNames: ["OK", "Cancel"],
				message: "Delete Person?",
				title: "Delete Person"
			});
			confirmDelete.addEventListener("click", function(evt2){
				if (evt2.index === 0) {
					ui.button.id = e.row.id;
					data.del(ui.button.id);
				}
			});
			confirmDelete.show();
		}
	});
	dialog.show();
});

win1.add(ui.tableData);
win2.add(ui.nameField);
win2.add(ui.relationField);
win2.add(ui.numberField);

win2.add(ui.button);


