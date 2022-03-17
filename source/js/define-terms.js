function defineTerm(event, formNum) {
    event.preventDefault();
    let url = "/api/define/";
    let search = $("#search-term" + formNum).val();
    let term = encodeURI(search);
    if (term == '') return;
    $.get(url + term, function (response) {
        let data = response; // JSON.parse(response);
        let result;
        if ('error' in data) {
            $("#definition-title").html("?" + search + "?");
            result = "<p>ERROR:" + data.error + "</p>";
        } else {
            $("#definition-title").html("Heraldic Definition of " + search);
            result = "<p>" + data.content + "</p>";
            result += "<p><a href='" + data.URL + "'>Link to Reference Source</a></p>";
        }
        $("#define-content").html(result);
        $("#definition-modal").modal('show');
    }, "json")
}
