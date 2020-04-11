$(window).on('load',function () {
    $('form').on('submit', function () {
        let item = $('form input');
        let todo = {item:item.val()};
        $.ajax({
            url: '/todo',
            type: 'POST',
            data: todo,
            success: function (data) {
                location.reload();
            }
        });

        return false;
    })

    $('li').on('click',function () {
        let item = $(this).text().replace(/ /g,'-');
        $.ajax({
            url: '/todo/'+item,
            type: 'DELETE',
            success: function (data) {
                location.reload();
            }
        })
    })
});