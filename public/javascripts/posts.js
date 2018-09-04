(function() {

    $.get('/api/posts', function(posts) {
        var body = $('#posts-table tbody');
        $.each(posts, function(index, post) {
            body.append('<tr><td>' + post.id + '</td><td>' + post.title + '</td><td>' + post.body + '</td></tr>');
        });
    });

})();