$(function(){
    var count = 1;
    var myObj1 = {
        codeNo : 700,
        getCode : function(val){
            var htmlText = $("output:first").html();
            $("output:first").html(htmlText + count + " : " + this.codeNo + "●" + val + "<br>");
            count++;
        }
    };
    var myObj2 = {
        codeNo : 1500
    };
    $(":button:eq(0)").click(myObj1.getCode);
    $(":button:eq(1)").click($.proxy(myObj1.getCode, myObj1));
    $(":button:eq(2)").click($.proxy(myObj1.getCode, myObj2));
    $(":button:eq(3)").click($.proxy(myObj1.getCode, myObj2, 2531));
    myObj1.getCode();
});
