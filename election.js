$(document).ready(function() {
$.ajax({
    url:"https://bb-election-api.herokuapp.com/",
    method:'GET',
    //data:{} ,
    dataType: "JSON"
}).done(function(responseData){
    var candidateJson = responseData
    var candidateList = candidateJson['candidates']
    var candidateContainer = $("<ul>")

    candidateList.forEach(function(data,index){
        console.log(data)
        $('<li>').html('Name:' + data.name + ',Votes:'+ data.votes ).appendTo(candidateContainer)
        //$(candidateContainer).append('<li>').html('Name:' + data.name + ',Votes:'+ data.votes )

    });
    $('body').append(candidateContainer)
});


  // Imagination!

});
