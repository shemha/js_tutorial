$(function(){
    $.when(
        sleep(3),
        sleep(6),
        sleep(1)
    )
    .done( msg_ok );
    function sleep(sec){
        var def = new $.Deferred();
        setTimeout(function(){
            $("#result").html($("#result").html() + "●" + sec + ", ");
            def.resolve();
        }, sec * 1000);
        return def.promise();
    }
    function msg_ok(){
        $("#result").html($("#result").html() + "<br>正常に処理が終わりました");
    }
});
