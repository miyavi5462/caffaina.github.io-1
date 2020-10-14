$(".subnav").hover(function () {
    $(this).children(".wapper").children("h5").toggleClass('hover_h5')
    $(this).children(".wapper").children("h2").toggleClass('hover_h2')
    $(this).children("p").toggleClass('hover')
    $(this).parent().parent().next().children().toggleClass('hover')
    $(this).parent().parent().parent().next().toggleClass('hover')
})