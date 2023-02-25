$(function(){
    var counter = 1;
    proc_OK()
        .then(function(){ return proc_OK(); })
        .then(function(){ return proc_NG(); })
        .then(function(){ return proc_OK(); })
        .always( msg_ok );
    function proc_OK(){
        var def = new $.Deferred();
        setTimeout(function(){
            $("#result").html($("#result").html() + "<br>" + counter + ":正常に処理しました");
            counter++;
            var promiseObj = def.resolve();
            dispStatus(def);
            return promiseObj;
        }, 3000);
        dispStatus(def);
        return def.promise();
    }
    function proc_NG(){
        var def = new $.Deferred();
        setTimeout(function(){
            $("#result").html($("#result").html() + "<br>" + counter + ":処理に失敗しました");
            counter++;
            var promiseObj = def.reject();
            dispStatus(def);
            return promiseObj;
        }, 1500);
        dispStatus(def);
        return def.promise();
    }
    function msg_ok(){
        $("#result").html($("#result").html() + "<br>処理が終わりました");
    }
    function dispStatus(defObj){
        $("#stat").text(defObj.state());
    }
});