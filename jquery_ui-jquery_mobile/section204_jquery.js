$(function(){
    var counter = 1;
    proc_OK()
        .then(function(){ return proc_OK(); }, function(){ return proc_NG(); })
        .then(function(){ return proc_NG(); }, function(){ return proc_NG(); })
        .then(function(){ return proc_OK(); }, function(){ return proc_NG(); })
        .done( msg_ok )
        .fail( msg_ng )
        .always( msg_end );
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
    function msg_ng(){
        $("#result").html($("#result").html() + "<br>処理が正常に終わりませんでした");
    }
    function msg_end(){
        $("#result").html($("#result").html() + "<br>全ての処理が完了しました");
    }
});
