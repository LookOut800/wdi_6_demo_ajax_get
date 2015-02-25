$(document).ready(function(){
	// This is the callback handler for the AJAX GET
	// var getPeople = function (data){
	// 	// for (var i = 0; i < data.length; i++) {
	// 	//  	debugger
 //     $('div#container').loadJSON(data);;

	// };

// var stringifiedGrungeJSON = JSON.stringify(grungeAlbumsJSON);
// var parsedJSON = JSON.parse(stringifiedGrungeJSON);

// $('#albums').append('<ul>');
// for(var i = 0; i < parsedJSON.albums.length; i++) {
//    $('ul').append('<li>' + parsedJSON.albums[i].name + ' by ' +parsedJSON.albums[i].artist + ' sold ' + parsedJSON.albums[i].unitsSold + ' units ' + '</li>');

// }

// kevin2098 [4:27 PM]
// thats the example from this morning i was trying to follow




    var getPeople = function(data) {
    //   $.each(data, function(i,item){
    //   $('.container').add('<h1>' + item[i].name + '</h1>');
  		// });
      console.log(data);
  };
 //     debugger
 //    //   }
 //    var personHTML = "<dt>Name</dt><dd>" + data.name + "</dd>";
 //    $("#container").append(personHTML);
 //    };
 //    // Magical jQuery method that will invoke an HTTP request.
 //    // Makes an HTTP GET request to http://localhost:3333/people
	$.ajax({
      url: '/people',
      dataType: 'json'
      // done accepts a function that will act as a callback handler.
	}).done(getPeople);
});