async function fetchJson() {
	fetch("http://188.166.203.164/static/test.json").then((resp) => {
  		let json = resp.json();
  		if (resp.status >= 200 && resp.status < 300) {
    		return json;
  		} else {
    		return json.then(Promise.reject.bind(Promise));
  		}
	});
}

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  data = fetchJson();
  console.log(data);

  let rootElement = document.getElementById("root");

  let tosElement = getTos(data);

  rootElement.appendChild(tosElement);

});