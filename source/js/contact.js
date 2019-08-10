$(function () {

    // when the form is submitted
    $('.contact-form').on('submit', function (e) {
        var url = "/contact/reply-form.php";
        // POST values in the background the the script URL
        $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(),
            success: function (data)
            {
                // data = JSON object that contact.php returns

                // we recieve the type of the message: success x danger and apply it to the 
                var messageAlert = 'alert-' + data.type;
                var messageText = data.message;

                // let's compose Bootstrap alert box HTML
                //var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                
                // If we have messageAlert and messageText
                if (messageAlert && messageText) {
                    window.alert(messageAlert + ' ' + messageText);
                    // empty the form
                    $('.contact-form')[0].reset();
                }
            }
        });
        return false;
    })
});