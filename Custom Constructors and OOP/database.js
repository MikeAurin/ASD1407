var remoteData = require("remoteData"); //This file should only be called once. You have already called it in app.js. If it should run here, then remove it from app.js

Ti.Database.install("database/redditDB.sqlite", "redditDB");

var read = function(){
	alert("Mildly Interesting was succesfully loaded.  Prepare to be mildly interested!");
	console.log("this.responseText");
	var replyData = JSON.parse(this.responseText);
	
	var posts = replyData.data.children;
	var read = function(){
	var db = Ti.Database.open("redditDB");
	var dbRows = db.execute("SELECT id, url, author, ups FROM redditDB");
	while (dbRows.isValidRow()) {
		tblData.push({
			id: dbRows.fieldByName('id'),
			url: dbRows.fieldByName('url'),
			author: dbRows.fieldByName('author'),
			ups: dbRows.fieldByName('ups'),
		});
	}	
		dbRows.next();
	};
	dbRows.close();
	db.close();
	
	};
exports.read = read;


var del = function(e) {
	var db = Ti.Database.open("redditDB");
	db.execute("DELETE FROM redditDB WHERE id=?", id);
	db.close();
	tblData = [];
	read();
};
exports.del = del;


