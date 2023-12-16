$(function() {
    $('#change-color').on('click',function() {
        $('#target').css('color','#FF0100');
    });

    $('#change-text').on('click',function() {
        $('#target').text('Hello!');
        $('#target').css('color','#FF0100');
    });

    $('#fade-out').on('click',function() {
        $('#target').fadeOut();
    });

    $('#fade-in').on('click',function() {
        $('#target').fadeIn();
    });
});