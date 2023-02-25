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
            def.notifyWith($("#result1"), ["type1", "OK func"]);
            return def.resolve();
        }, 1000);
        return def.promise();
    }
    
    function proc_OK2(){
        var def = new $.Deferred();
        def.progress(dispStatus);
        setTimeout(function(){
            def.notifyWith($("result2"), ["type2", "OK2 func"]);
            return def.resolve();
        }, 1000);
        return def.promise();
    }

    function msg_ok(){
        $("#result3").html($("#result3").html() + "<br>処理が終わりました");
    }
    
    function dispStatus(type, msg){
        this.html(this.html() + "<br>" + type + " : " + counter + ":正常に処理しました。" + msg);
        counter++;
    }
});
