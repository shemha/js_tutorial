$(function(){
    $("input[type=button]").click(function(){
        var str = $("input:first").val();
        var resultStr = $.trim(str);
        $("output:first").html("<br>処理前：" + str + "【" + escape(str) + "】<br>" + "処理後：" + resultStr + "【" + escape(resultStr) + "】");
    });
});
