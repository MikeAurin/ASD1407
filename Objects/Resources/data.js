// 2013 phones in literal notation

var phone1 = {
	"make": "Samsung",
	"model": "Galaxy S4",
	"version": "Kit Kat 4.4",
	"update": function(){
		if(phone1.version === "Kit Kat 4.4"){
			alert("Your phone will recieve an update to Android L");
				}else{
			alert("Your phone will not recieve an update to Android L");
		}
	}
};

var phone2 = {
	"make": "LG",
	"model": "G2",
	"version": "Jelly Bean 4.3.2",
	"update": function(){
		if(phone2.version === "Kit Kat 4.4"){
			alert("Your phone will recieve an update to Android L");
				}else{
			alert("Your phone will not recieve an update to Android L");
		}
	}
};

var phone3 = {
	"make": "LG",
	"model": "Nexus 4",
	"version": "Jelly Bean 4.3.2",
	"update": function(){
		if(phone3.version === "Kit Kat 4.4"){
			alert("Your phone will recieve an update to Android L");
				}else{
			alert("Your phone will not recieve an update to Android L");
		}
	}
};

var phone4 = {
	"make": "Motorola",
	"model": "X",
	"version": "Kit Kat 4.4",
	"update": function(){
		if(phone4.version === "Kit Kat 4.4"){
			alert("Your phone will recieve an update to Android L");
				}else{
			alert("Your phone will not recieve an update to Android L");
		}
	}
};

var phone5 = {
	"make": "Motorola",
	"model": "Droid MAXX",
	"version": "Jelly Bean 4.3.2",
	"update": function(){
		if(phone5.version === "Kit Kat 4.4"){
			alert("Your phone will recieve an update to Android L");
				}else{
			alert("Your phone will not recieve an update to Android L");
		}
	}
};

var array2013 = [phone1, phone2, phone3, phone4, phone5];

for (var i=0, j=array2013.length; i<j; i++){
	var row2013 = Ti.UI.createTableViewRow({
		title: array2013[i].make + " " + array2013[i].model,
		color: "white",
		font: {fontWeight: "bold", fontSize: 22}
	});

	phones2013.add(row2013);
	row2013.addEventListener("click", array2013[i].update);
}


// 2014 phones in dot notation

var phone6 = new Object();
	phone6.make = "Samsung";
	phone6.model = "Galaxy S5";
	phone6.version = "Kit Kat 4.4";
	phone6.update = function(){
		if(phone6.version === "Kit Kat 4.4"){
			alert("Your phone will recieve an update to Android L");
		}
	};

var phone7 = new Object();
	phone7.make = "HTC";
	phone7.model = "One M8";
	phone7.version = "Kit Kat 4.4";
	phone7.update = function(){
		if(phone7.version === "Kit Kat 4.4"){
			alert("Your phone will recieve an update to Android L");
		}
	};
	
var phone8 = new Object();
	phone8.make = "LG";
	phone8.model = "Nexus 5";
	phone8.version = "Kit Kat 4.4";
	phone8.update = function(){
		if(phone8.version === "Kit Kat 4.4"){
			alert("Your phone will recieve an update to Android L");
		}
	};
	
var phone9 = new Object();
	phone9.make = "LG";
	phone9.model = "G3";
	phone9.version = "Kit Kat 4.4";
	phone9.update = function(){
		if(phone9.version === "Kit Kat 4.4"){
			alert("Your phone will recieve an update to Android L");
		}
	};

var phone10 = new Object();
	phone10.make = "Samsung";
	phone10.model = "Note 3";
	phone10.version = "Kit Kat 4.4";
	phone10.update = function(){
		if(phone10.version === "Kit Kat 4.4"){
			return("Your phone will recieve an update to Android L");
		}
	};

var array2014 = [phone6, phone7, phone8, phone9, phone10];

for (var i=0, j=array2014.length; i<j; i++){
	var row2014 = Ti.UI.createTableViewRow({
		title: array2014[i].make + " " + array2014[i].model,
		color: "white",
		font: {fontWeight: "bold", fontSize: 22}
	});
		//var function2014 = function(){
			//	alert(array2014.update);
		//};
	phones2014.add(row2014);
	row2014.addEventListener("click", array2014[i].update);
}

var tableSections = [phones2013, phones2014];

table.setData(tableSections);

