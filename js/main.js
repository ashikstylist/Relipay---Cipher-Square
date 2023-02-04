$(document).ready(function () {
  // Toggle Dashboard Card
  $(".dash-card-toggle").click(function () {
    $(".dash-card-toggle").removeClass("dash-card-toggle-active");
    $(this).toggleClass("dash-card-toggle-active");
  });

  // Offer Tabs
  $(".ex-off-tab").click(function () {
    $(".ex-off-tab").removeClass("ex-off-tab-active");
    $(this).toggleClass("ex-off-tab-active");
  });
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  alert("Promocode Copied to Clipboard!");
}
