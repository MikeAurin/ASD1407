var url = "http://api.reddit.com/r/mildlyinteresting";

var showPic = function(evt){
	console.log(evt.source.picture);
	var newWindow = Ti.UI.createWindow({
		backgroundColor: "#fff"
	});
	
	var img = Ti.UI.createImageView({
		image: evt.source.picture
	});
	
	newWindow.add(img);
	newWindow.open();
	newWindow.addEventListener("click", function(){
		this.close();
	});
};

var success = function(){
	alert("Mildly Interesting was succesfully loaded.  Prepare to me mildly interested!");
	console.log("this.responseText");
	var replyData = JSON.parse(this.responseText);
	var posts = replyData.data.children;
	
	for (var i=0; i<posts.length; i++){
		var pic = posts[i].data.url;
		var title = posts[i].data.author;
		var upvotes = posts[i].data.ups;
		var ending = pic.substring((pic.length - 3), pic.length);
		console.log(ending);
		
		if(ending === "jpg" || ending === "gif" || ending === "png"){
			var title = posts[i].data.title;
			
			var view = Ti.UI.createView({
				backgroundColor: "#fff",
				bottom: 3,
				picture: pic,
				title: title,
				upvotes: upvotes,
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
				height: "auto"
			});
			view.add(label);
			scrollView.add(view);
			label.addEventListener("click", showPic);
		}
	}
};

var error = function(evt){
	alert("r/mildlyinteresting can not load.  Please ensure you have a mobile data connection or WiFI accessibility.");
	console.log(evt.error);
};

var client = Ti.Network.createHTTPClient({
	onload: success,
	onerror: error,
	timeout: 5000
});

client.open("GET", url);

client.send();
