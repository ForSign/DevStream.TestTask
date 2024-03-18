const host = 'http://188.166.203.164';
const hostJsonPath = '/static/test.json';


// Download Image Button
function getDownloadButton(imageLink) {
  let downloadButton = document.createElement('div');
  downloadButton.className = "button";

  let downloadLink = document.createElement('a');
  downloadLink.className = "btn-wrap";
  downloadLink.innerHTML = "Download";

  downloadLink.onclick = async() => {
    let image = await fetch(host + imageLink)
    let imageBlog = await image.blob()
    let imageURL = URL.createObjectURL(imageBlog)

    let link = document.createElement('a')
    link.href = imageURL
    link.download = imageLink.split('/').pop();
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    console.log("downloaded");
  }

  downloadButton.append(downloadLink);

  return downloadButton;
}


// Accept tos button
async function acceptTermsOfUse(){
  console.log("show tos");
  let tos = document.getElementById("TosDivID");
  if (tos !== null)
    tos.className = "TosModal"
}


// Built tos term (inner element of tos in tosModal)
function getTosElement(msg){

  let termDiv = document.createElement('div');
  termDiv.className = "term";

  let termDivContent = document.createElement('div');
  termDivContent.className = "term__content";

  let termHeader = document.createElement('strong');
  termHeader.className = "term__header";
  termHeader.innerHTML = msg["index"] + ". " + msg["title"];

  let termBody = document.createElement('div');
  termBody.className = "term__body";
  termBody.innerHTML = msg["content"];

  termDivContent.appendChild(termHeader);
  termDivContent.appendChild(termBody);

  termDiv.appendChild(termDivContent);

  return termDiv;
}


// Built Tos modal content as element
function getTos(msg){
  let newTosDiv = document.createElement('div');
  newTosDiv.className = "Tos";

  let tosHeader = document.createElement('h1');
  tosHeader.innerHTML = "Terms Of Service";

  let pill = document.createElement('hr');
  pill.className = "pill";

  let termNodes = document.createElement('div');

  msg.terms_of_use.paragraphs.sort((a, b) => a.index > b.index).map((term) => {
    termNodes.appendChild(
      getTosElement({
        "index": term.index,
        "title": term.title,
        "content": term.content
      })
      );

    let newPill = document.createElement('hr');
    newPill.className = "pill";

    termNodes.appendChild(newPill);
  });

  let tosAccept = document.createElement('button');
  tosAccept.className = "accept_button";
  tosAccept.innerHTML = "Accept";
  tosAccept.id = "AcceptTosID";
  // tosAccept.onclick = async() => {
  //   await acceptTermsOfUse();
  //   console.log("accpted");
  // };

  newTosDiv.appendChild(tosHeader);
  newTosDiv.appendChild(pill);
  newTosDiv.appendChild(termNodes);
  newTosDiv.appendChild(tosAccept);

  return newTosDiv;
}


// Built modal as element
function getTosModal(data){
  let newTosModal = document.createElement('div');
  newTosModal.className = "TosModal active";
  newTosModal.id = "TosDivID";

  let newTosModalContent = document.createElement('div');
  newTosModalContent.className = "TosContent";

  newTosModalContent.appendChild(getTos(data));
  newTosModal.appendChild(newTosModalContent);

  return newTosModal;
}


// Built gallery withh renderImageToCanvas
function getGallery(data) {
  let newGallery = document.createElement('div');
  newGallery.className = "gallery";

  let imageNodes = document.createElement('div');

  data.images.map((image) => {
    let galleryItem = document.createElement('div');
    galleryItem.className = "gallery-item";

    galleryItem.appendChild(
      renderImageToCanvas(image.image_url)
    );

    imageNodes.appendChild(galleryItem);
  });

  newGallery.appendChild(imageNodes);
  return newGallery;
}


// Fetch json from Host
async function JsonFetch(jsonLink) {
  const response = await fetch(jsonLink);
  const json = await response.json();
  return json;
}


// Render image as canvas and return (with download button)
function renderImageToCanvas(imageUrl){
  let newCanvas = document.createElement('canvas');

  var image = new Image();
  image.src = host + imageUrl;

  image.onload = () => {
    newCanvas.width = image.width;
    newCanvas.height = image.height;
    newCanvas.getContext("2d").drawImage(image, 0, 0);
  };

  let wrapper = document.createElement('div');

  wrapper.append(newCanvas);
  wrapper.append(getDownloadButton(imageUrl));

  return wrapper;
}


// Main
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  JsonFetch(host + hostJsonPath).then(data => {
    console.log(data);

    let rootElement = document.getElementById("root");
    let tosElement = getTosModal(data);
    let galleryElement = getGallery(data);

    console.log(tosElement);
    rootElement.appendChild(tosElement);

    document.getElementById("AcceptTosID").onclick = async () => {
      await acceptTermsOfUse();
      console.log("accpted");

      console.log(galleryElement);
      rootElement.appendChild(galleryElement);
    }

  });

});