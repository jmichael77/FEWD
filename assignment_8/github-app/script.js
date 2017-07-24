//https://api.github.com/users/jmichael77?client_id=23d740a743b4f21c5a73&client_secret=222e98850e87e462a06a2f945da85bfef37a3317

$(function(){

  function searchUserInfo(){
    console.log("looking for info about "+ window.nickname);

    $.ajax({
      url: "https://api.github.com/users/"+window.nickname+"?client_id=23d740a743b4f21c5a73&client_secret=222e98850e87e462a06a2f945da85bfef37a3317",
      success: function(data){
        console.log("result ", data);
          $(".avatar").html("<img src='" + data["avatar_url"]+ "' class='col l12' />");
          $(".details h1").text(data["name"]);
          $("li .city").text(data["location"]);
          $("li .company").text(data["company"]);
          $("li .since").text(data["created_at"]);
      }
    });
  }

  function getUserRepos(){
    $("#repos-tab tbody").empty();
    $.ajax({
      url: "https://api.github.com/users/"+window.nickname+"/repos?client_id=23d740a743b4f21c5a73&client_secret=222e98850e87e462a06a2f945da85bfef37a3317",
      success: function(data){
        // "debugger" Stop executing code in console where debugger has been placed
        for (var i = 0; i < data.length; i++) {
          $("#repos-tab tbody").append("<tr><td>"+data[i]["name"]+"</td><td>"+data[i]["language"]+"</td><td><a href='"+data[i]["html_url"]+"' target='_blank' >GO ON GITHUB</td></tr>");
          console.log(data[i]["name"]);
        };
      }
    });
  }

  $("#search").on("keypress", function(event){
    console.log($("#search").val());
    if (event.keyCode === 13) {
      event.preventDefault();
      window.nickname = $(this).val();
      searchUserInfo();
      getUserRepos();
    } 
  });

});