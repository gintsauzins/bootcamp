function requestApi(url, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const response_json = JSON.parse(xhttp.responseText);
            if (response_json.status) {
                callback(response_json);
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    console.log
}

document.querySelector('.xhttp_btn').onclick = function () {
    requestApi('https:\/\/dog.ceo/api/breeds/image/random', function (response) {
        addImg(response.message);
    });
};