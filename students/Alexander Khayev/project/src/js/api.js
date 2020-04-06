/**
 * use as:
 * makeGETRequest("https://ya.ru")
 * .then(xhr => {
 *     alert('then\r\n\r\n' + xhr.responseText);
 * })
 * .catch(xhr => {
 *     alert('Ошибка: ' + xhr.status+"\r\nStatus:"+xhr.statusText);
 * });
 *
 * @param url
 * @returns {Promise<XMLHttpRequest>}
 */
class HTTP {
  constructor(timeout = 30000) {
    this.timeout = timeout;
  }

  static get API_URL() {
    return "/api";
  }

  static async get(url) {
    return new Promise((resolve, reject) => {
      new HTTP()._doRequest("GET", url, null, resolve, reject);
    });
  }

  static async postObj(url, obj) {
    return new Promise((resolve, reject) => {
      // new HTTP()._doRequest("POST", url, JSON.stringify(obj), resolve, reject);
      new HTTP()._doRequest("GET", url, JSON.stringify(obj), resolve, reject);
    });
  }

  _doRequest(method, url, data = null, resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.timeout = this.timeout;

    xhr.onload = function () {
      return xhr.status === 200 ? resolve(xhr) : reject(xhr);
    }

    xhr.ontimeout = () => reject(xhr);
    xhr.onerror = () => reject(xhr);

    xhr.open(method, HTTP.API_URL + url, true);
    if (null !== data) {
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    }
    xhr.send(data);
  }
}


export default HTTP;
