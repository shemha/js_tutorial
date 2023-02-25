$(function(){
    var counter = 1;
    proc_OK()
        .then(function(){ return proc_OK(); })
        .then(function(){ return proc_OK2(); })
        .then(function(){ return proc_OK(); })
        .then(function(){ return proc_OK2(); })
        .always( msg_ok );
    function proc_OK(){
        var def = new $.Deferred();
        def.progress(dispStatus);
        setTimeout(function(){
            def.notify("type1");
            return def.resolve();
        }, 1000);
        return def.promise();
    }
    function proc_OK2(){
        var def = new $.Deferred();
        def.progress(dispStatus);
        setTimeout(function(){
            def.notify("tyoe2");
            return def.resolve();
        }, 1000);
        return def.promise();
    }
    function msg_ok(){
        $("#result").html($("#result").html() + "<br>処理が終わりました");
    }
    function dispStatus(type){
        $("#result").html($("#result").html() + "<br>" + type + " : " + counter + ":正常に処理しました");
        counter++;
    }
});