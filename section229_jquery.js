// うまくいかない・・・
$(function(){
    var xmlText = "<cr><book><name>jQuery本</name></book></cr>";
    var xmlObj = $.parseXML(xmlText);
    var nameTag = $(xmlObj).find("name");
    var bookName = nameTag[0].textContent;
    $("output:first").xmlText(bookName);
});