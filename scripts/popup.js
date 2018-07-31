
function onPageShow() {
  browser.tabs.query(
    { currentWindow: true, active: true },
    function (tabs) {
      var title = tabs[0].title;
      var url = tabs[0].url;
      $('input[id="fav-name"]').val(title);
      $('input[id="fav-url"]').val(url);
    });

};

document.addEventListener("pageshow", onPageShow());

$(document).ready(function(){
  $("#optionBtn").click(function (){
    browser.tabs.create({url: browser.extension.getURL('background.html')})
  });
});
