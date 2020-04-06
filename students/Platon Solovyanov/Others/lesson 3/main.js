let getRequest = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        // window.ActiveXObject -> xhr = new ActiveXObject()
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    reject('error');
                } else {
                    resolve(xhr.responseText);
                }
            }
        };
        xhr.send();
    })

};
getRequest(url).then(data => console.log(data));