document.body.onload = function () {
    setTimeout(() => {
      document.querySelector(".loader").remove();
    }, 2000);
    document.querySelector(".content").style.display = "";
  };