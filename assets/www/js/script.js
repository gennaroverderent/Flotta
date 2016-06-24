

function jsonFlickrFeed (data){
	// console.log(data);
	var output = "";
	for (var i = 0; i < data.items.length; i++) {
		// var picture = data.items[i].media.m.substring(0,57);
		var picture = data.items[i].media.m;
		var picture = picture.substring(0, picture.length - 6); //rips off the last 6 letters
		var title = "Flickr_Photos";
		var blocktype = ((i % 4) === 0) ? 'a':
						((i % 4) === 1) ? 'b':
						((i % 4) === 2) ? 'c':
						'd';
		output += '<div class="ui-block-' + blocktype + '">';
		output += '<a href="#photo_main" data-transition="fade" onclick = "showPicture(\'' + picture + '\')">';
		output += '<img src="' + picture + '_q.jpg" alt="' + title + '">';
		output += '</a>';
		output += '</div>';

	}
	$('#photolist').html(output);
}

function showPicture(picture) {
	var title = "Flickr_Photos";
	var output = '<a href="#photos" data-transition="fade">';
		output += '<img src="' + picture +'_b.jpg" alt="' + title +'">';
		output += '</a>'; 
		$('#single_photo').html(output);
}

function listAllTweets(data) {
	// console.log(data);
	var output = '<ul data-role="listview">';
	for (i = 0; i < data.length; i++) {
		var text = data[i].text;
		var thumbnail = data[i].user.profile_image_url;
		var thumbnail = thumbnail.substring(0, thumbnail.length - 12);
		var name = data[i].user.name;
		var time = data[i].created_at;
		var day = time.split(" ")[0];
		var month = time.split(" ")[1];
		var numday = time.split(" ")[2];
		var year = time.split(" ")[5];
		// console.log(numday);
		//==============================RegExp=====================================
		 //parse URLS in twitter text
		 text = text.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(i){

		 	var url = i.link(i); //link is a js function
		 	return url;
		 });
		  //Parse @mentions in twitter text 
		 text = text.replace(/[@]+[A-Za-z0-9-_]+/g, function(i){
		 	var item = i.replace("@",'') //replace @ with nothing
		 	var url = i.link("http://twitter.com/" + item); //link is a js function
		 	return url;
		 });
		  text = text.replace(/[#]+[A-Za-z0-9-_]+/g, function(i){
		 	var item = i.replace("#",'') //replace # with nothing
		 	var url = i.link("http://twitter.com/" + item); //link is a js function
		 	return url;
		 });
		//=-========================regexp=======================================

		output += '<li>';
		output += '<img src="' + thumbnail +'_bigger.jpeg" alt="'+ name +'" >';
		// output += '<div>' + text + '</div>';
		output += '<p>' + text + '</p>';
		output += '<p>' + numday + " " + month + " " +  year + '</p>';
		output += '</div>';
		output += '</li>';
	}
	$('#listtweets').html(output);
}
