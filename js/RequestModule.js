class AbstractRequests {
    constructor() {}
    get(getUrl) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${getUrl}`, false);
        xhr.send();

        switch (xhr.status) {
            case 200:
                return JSON.parse(xhr.responseText);
            case 404: {
                console.warn(`${xhr.status}, ${xhr.statusText}`);
            }
        }
    }
    post(postUrl, postData) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', postUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');

        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && xhr.status == 200) {
                console.log('RESPONSE->', JSON.parse(xhr.responseText));
            }
        };

        xhr.send(JSON.stringify(postData));
    }
}

export default AbstractRequests;
