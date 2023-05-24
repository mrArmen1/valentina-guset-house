$(document).ready(function() {
    var delayInSeconds = 5;
    function openDialog() {
      $("#advertisement").dialog({
        modal: true,
        buttons: {
            "Оставить отзыв": function() {
              $(this).dialog("open");
              window.location.href = "https://google.com";
            },
            "Закрыть": function() {
                $(this).dialog("close");
          }
        }
      });
    }
    setTimeout(openDialog, delayInSeconds * 1000);
  });