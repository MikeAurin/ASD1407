var url = "http://api.reddit.com/r/mildlyinteresting";

var showPic = function(evt){
	console.log(evt.source.picture);
	var newWindow = Ti.UI.createWindow({
		backgroundColor: "#333",
		fullScreen: true
	});
	
	var title = Ti.UI.createLabel({
		text: "Author: " + " " + evt.source.author,
		top: 25,
		textAlign: "center",
		font: {fontFamily: "Roboto", fontSize: 24},
		width: "100%",
		color: "white"
	});
	
	var upvotes = Ti.UI.createLabel({
		text: "Upvotes: " + " " + evt.source.votes,
		bottom: 20,
		font: {fontFamily: "Roboto", fontSize: 28},
		textAlign: "center",
		color: "black",
		zIndex: 2,
		borderRadius: 3,
		backgroundColor: "white"
	});
	
	var img = Ti.UI.createImageView({
		image: evt.source.picture,
		width: "100%",
		top: 60,
		zIndex: 0
	});
	
	newWindow.add(img);
	newWindow.add(title);
	newWindow.add(upvotes);
	
	newWindow.open();
	newWindow.addEventListener('click', function(e){
			var dialog = Ti.UI.createAlertDialog({
			    cancel: 1,
			    buttonNames: ['Open', 'Delete', 'Cancel'],
			    message: 'Do you wish to open or delete?',
			    row: this
			  });
			  dialog.show();
			  
			dialog.addEventListener("click", function(evt){
			   if(this.buttonNames[e.index] === "Open"){ 
			  	
		        showImg();
			  }else{ 
			  	var confirmDelete = Ti.UI.createAlertDialog({
				cancel: 1,
				buttonNames: ["Ok", "Cancel"],
				message: "Delete this entry?",
				title:"Delete this entry?"
			});
			  confirmDelete.addEventListener("click",function(evt2){
				if (evt2.index === 0){
					OOP.del(button.id);
				}
			});
			confirmDelete.show();
		}
	dialog.show();

	});
};

var success = function(){
	alert("Mildly Interesting was succesfully loaded.  Prepare to be mildly interested!");
	console.log("this.responseText");
	var replyData = JSON.parse(this.responseText);
	var posts = replyData.data.children;
	
	for (var i=0; i<posts.length; i++){
		var pic = posts[i].d ata.url;
		var author = posts[i].data.author;
		var upvotes = posts[i].data.ups;
		var ending = pic.substring((pic.length - 3), pic.length);
		console.log(ending);
		
		if(ending === "jpg" || ending === "gif" || ending === "png"){
			var title = posts[i].data.title;
			
			var view = Ti.UI.createView({
				backgroundColor: "#66E0FF",
				bottom: 3,
				picture: pic,
				title: title,
				height: Ti.UI.SIZE
			});
			var label = Ti.UI.createLabel({
				text: title,
				color: "grey",
				font: {fontFamily: "Roboto", fontSize: "14"},
				top: 3,
				bottom: 3,
				left: 10,
				right: 10,
				textAlign: "center",
				picture: pic,
				author: author,
				height: "auto",
				votes: upvotes
			});
			view.add(label);
			scrollView.add(view);
			label.addEventListener("click", showPic);
		}
	}
};

var error = function(evt){
	alert("r/mildlyinteresting can not load.  Please ensure you have a mobile data connection or Wi-Fi accessibility.");
	console.log(evt.error);
};

var client = Ti.Network.createHTTPClient({
	onload: success,
	onerror: error,
	timeout: 5000
});

client.open("GET", url);

client.send();