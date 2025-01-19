$(function(){
    $("#top-logo").click(function(){
        $("#arts").hide()
        $("#masthead").show()
        $("#signup").hide()
        $("#about").hide()
        $("#contacts").hide()
    })

    $("#know-more").click(function(){
        $("#arts").hide()
        $("#masthead").hide()
        $("#signup").hide()
        $("#about").show()
        $("#contacts").hide()
    })

    $("#aboutLink").click(function(){
        $("#arts").hide()
        $("#masthead").hide()
        $("#signup").hide()
        $("#about").show()
        $("#contacts").hide()
    })

    $("#artsLink").click(function(){
        $("#masthead").hide()
        $("#about").hide()
        $("#contact").hide()
        $("#arts").show()
        $("#contacts").hide()
    })

    $("#contactLink").click(function(){
        $("#arts").hide()
        $("#masthead").hide()
        $("#contact").show()
        $("#about").hide()
        $("#contacts").show()
    })
})
    
