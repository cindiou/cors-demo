/* const request = new XMLHttpRequest();
request.open("GET", "http://qq.com:8080/friends.json");

request.onreadystatechange = () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log("Hi!", request.responseText);
  }
};
request.send(); */

//==========================================================

/* const random = (Math.random() * 1000000) | 0;

// console.log("random", random);

window[`callback${random}`] = function (data) {
  console.log("data", data);
};

//纯数字函数名好像不可以做
// console.log("type", typeof window[`callback${random}`]);

const script = document.createElement("script");
script.src = `http://qq.com:8080/friends.js?callback=${random}`;
document.body.appendChild(script);

script.onload = () => {
  console.log("script", script.textContent);
};  */

//==========================================================
/* 
const JSONP = (url) => {
  return new Promise((resolve, reject) => {
    const random = (Math.random() * 1000000) | 0;
    window[`callback${random}`] = (data) => {
      resolve(data);
    };

    const script = document.createElement("script");
    script.src = `${url}?callback=${random}`;
    document.body.appendChild(script);

    script.onload = () => {
      script.remove();
    };
    script.onerror = (e) => {
      reject(e);
    };
  });
};

JSONP("http://qq.com:8080/friends.js")
  .then(console.log)
  .catch((e) => console.log(e.message));
 */
