var json, testTitle, testAuthor;

var remoteResponse = function(){
	Ti.API.debug(this.responseText);
	json = JSON.parse(this.responseText);
	
	testTitle = json.data.children(1).data.title;
	testAuthor = json.data.children(1).data.author;
	
	Ti.API.debug(testTitle);
	Ti.API.debug(testAuthor);
};

var remoteError = function(e){
	Ti.API.debug("Status: " + this.status);
	Ti.API.debug("Text: " + this.responseText);
	Ti.API.debug("Error: " + e.error);
	alert("There is a problem pulling remote data");
};

var xhr = Ti.Network.createHTTPClient({
	onload: remoteResponse,
	onerror: remoteError,
	timeout: 5000
});

xhr.open("GET", "http://api.reddit.com/");
xhr.send();