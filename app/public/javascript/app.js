$(document).ready(function() { 

$(".brand").on("click", function() {

  $(".webContent").empty();

  var id = $(this).attr("data-id");
  console.log(id);

  $.get("/api/" + id, function(data) {
    var webData = JSON.parse(data);

    // Sort the web pages by in ascending order by Id 
    function compare(a,b) {
      if (a.Id < b.Id)
        return -1;
      if (a.Id > b.Id)
        return 1;
      return 0;
    }

    webData.Results.sort(compare);

    // Loop through the sorted webData and dynamically append the data to the page
    for (var i = 0; i < webData.Results.length; i++) {
     var webId = webData.Results[i].Id;
     var webUrl = "<a>" + webData.Results[i].Url + "</a>";

     var newDiv = $("<div>").addClass("webPage");
     var scoreBtn = $("<button class='scoreBtn'>View Scores</button>");
     scoreBtn.attr("data-id", webId);

     if(id == 458) {
      newDiv.addClass("bkgr458");
     } else if(id == 691) {
      newDiv.addClass("bkgr691");
     }

     $(newDiv).append("Web Page Id: " + webId + "</br>");
     $(newDiv).append("URL: " + webUrl + "</br>");
     $(newDiv).append(scoreBtn);

     $(".webContent").append(newDiv);

     // or we could make another ajax request within the loop to obtain each score and last score date
     // maybe figure out how to make multiple curl requests 

     // we also have to make an ajax request here to connect the campaign to each item 
     // test the campaign first to see if we can locate a specific id 

   }

  });

});


// When you click on the View Score button, it gives you the Score, url and last score date for that ID. 
$(document).on("click", ".scoreBtn", function() {

  var btnId = $(this).attr("data-id");
  console.log(btnId);

  // perform a get request to get the appropriate data

});


}); // end document.ready function
