$("#search-form").submit(function (event) {
    event.preventDefault();
    var url = "/api/define/";
    var search = $("#search-term").val();
    var term = encodeURI(search);
    if (term == '') return;
    $.get(url + term, function (response) {
        var data = response; // JSON.parse(response);
        if ('error' in data) {
            $("#definition-title").html("?" + search + "?" );
            result = "<p>ERROR:"  + data.error  + "</p>";
        } else {
            $("#definition-title").html("Heraldic Definition of " + search );
            result = "<p>" + data.content + "</p>";
            result += "<p><a href='" + data.URL + "'>Link to Reference Source</a></p>";
        }
        $("#define-content").html(result);
        $("#definition-modal").modal('show');
    }, "json")
})
