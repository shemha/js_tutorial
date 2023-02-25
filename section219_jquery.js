$(function(){
    var flag1 = $.isXMLDoc(document.body);
    var domObj = new DOMParser();
    var xmlText = '<?xml version="1.0" encoding="UTF-8"?>';
    xmlText += '<data><item>MZ</item><item>PC</item></data>';
    var xmlDoc = domObj.parseFromString(xmlText, "text/xml");
    var itemNode = xmlDoc.getElementsByTagName("item");
    var flag2 = $.isXMLDoc(itemNode[0]);
    $("output:first").html("document.body:" + flag1 + "<br>itemNode:" + flag2);
});