async function fetchAPI(url, callback) {

    //const response = await fetch(url, { method: 'POST', body: data });
    const response = await fetch(url);
    const response_json = await response.json();
    console.log(response_json);
    if (response.status == 200) {
        callback(response_json);
    }
}


document.querySelector('.fetch_btn').onclick = function () {
    console.log('C');
    fetchAPI('https:\/\/dog.ceo/api/breeds/image/random', function (response) {
        addImg(response.message);
    });
    
};

let images_el = document.querySelector(".images");
        function addImg(src) {
          const img = document.createElement("img");
          img.src = src;
          images_elm.append(img);
        }