$(function () {
  $(":button:eq(0)").click(function () {
    alert($("h1:first").css("CRLabo"));
  });
  $(":button:eq(1)").click(function () {
    var flag = $("h1:first").css("CRLabo");
    $("h1:first").css("CRLabo", !flag);
  });
});
$.cssHooks["CRLabo"] = {
  get: function (ele, computed, extro) {
    return $(ele).data("CRLabo");
  },
  set: function (ele, value) {
    $(ele).data("CRLabo", value);
    if (value === true) {
      $(ele).css("color", "red");
    } else {
      $(ele).css("color", "black");
    }
  },
};
