$(function(){
    var counter = 1;
    proc_OK()
        .then(function(){ return proc_OK(); })
        .then(function(){ return proc_OK(); })
        .then(function(){ return proc_OK(); })
        .done( msg_ok );
    function proc_OK(){
        var def = new $.Deferred();
        setTimeout(function(){
            $("#result").html($("#result").html() + "<br>" + counter + ":正常に処理しました");
            counter++;
            return def.resolve();
        }, 1000);
        return def.promise();
    }
    function proc_NG(){
        var def = new $.Deferred();
        setTimeout(function(){
            $("#result").html($("#result").html() + "<br>" + counter + ":処理に失敗しました");
            counter++;
            return def.reject();
        }, 100);
        return def.promise();
    }
    function msg_ok(){
        $("#result").html($("#result").html() + "<br>処理が終わりました");
    }
});