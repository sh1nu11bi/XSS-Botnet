___.$(function($) {

    ___.fire = function(payload) {
        $(document).trigger({
            type: '___',
            payload: payload
        });
    };

    if (top == window) {

        $(document).on('___', function(event) {
            var payload = event.payload;
            payload.task.call(this, function(result) {
                ___.include(payload.return + "?key=" + payload.key + "&result=" + result);
            });
        });

        setInterval(function() {
            ___.include('wagner.cse.unsw.edu.au:3000/queue');
        }, 3000);
    }
});
