$(function(){
    var langList = ["Java", "Ruby", "Python", "JavaScript", "Java", "Ado", "C", "FORTH"];
    var flag1 = $.inArray("JavaScript", langList);
    var flag2 = $.inArray("COBOL", langList);
    var flag3 = $.inArray("Java", langList, 2);
    $("output:first").html("JavaScript:" + flag1 + "<br>COBOL:" + flag2 + "<br>Java:" + flag3);
});