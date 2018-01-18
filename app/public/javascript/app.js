$(document).ready(function() { 

$(".brand").on("click", function() {

  $(".webContent").empty();

  var id = $(this).attr("data-id");
  console.log(id);

  var webPageIds = [];

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
      webPageIds.push(webId);
    }

    console.log(webPageIds);

   }).then(function() { 
    // then we loop through the array of web pages ids
    for (var i = 0; i < webPageIds.length; i++) {
      // get the web page information based on the web id and append it to the page
       $.get("/api/" + webPageIds[i], function(data) {
        var obj = JSON.parse(data);
        var score = obj.Results[0].Score;
        var lastScored = obj.Results[0].LastScored;
        var webUrl = "<a>" + obj.Results[0].Url + "</a>";
        var id = obj.Results[0].Id;
        var brand = obj.Results[0].Brand;

         var newDiv = $("<li>").addClass("webPage");
         newDiv.attr("data-id", webPageIds[i]);

         if(brand == "University Zephyr") {
          newDiv.addClass("bkgr458");
         } else {
          newDiv.addClass("bkgr691");
         }

         $(newDiv).append("<p class='pageId'>Web Page Id: " + id + "</p>");
         $(newDiv).append("<p class='score'>Score: " + score + "</p>");

         if(lastScored !== undefined) {
            $(newDiv).append("<p class='lastScore'>Last Scored: " + lastScored + "</p>");
         } else {
           $(newDiv).append("<p class='lastScore'>Last Scored: Date has not been provided.</p>");
         }

         $(newDiv).append("<p class='url'>URL: " + webUrl + "</p");

         $(".webContent").append(newDiv);


        });
    }

  })

});



}); // end document.ready function
