$(function(){
    $("#top-logo").click(function(){
        $("#arts").hide()
        $("#masthead").show()
        $("#signup").hide()
        $("#about").hide()
    })

    $("#aboutLink").click(function(){
        $("#arts").hide()
        $("#masthead").hide()
        $("#signup").hide()
        $("#about").show()
    })

    $("#artsLink").click(function(){
        $("#masthead").hide()
        $("#about").hide()
        $("#contact").hide()
        $("#arts").show()
    })

    $("#contactLink").click(function(){
        $("#arts").hide()
        $("#masthead").hide()
        $("#contact").show()
        $("#about").hide()
    })
})
    
