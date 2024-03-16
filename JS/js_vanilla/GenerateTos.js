function acceptTos(){

}


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

    	termNodes.appendChild(pill);
    });

    let tosAccept = document.createElement('button');
    tosAccept.className = "accept_button";
    tosAccept.innerHTML = "Accept";
    tosAccept.onClick = "acceptTos";

    newTosDiv.appendChild(tosHeader);
    newTosDiv.appendChild(pill);
    newTosDiv.appendChild(termNodes);
    newTosDiv.appendChild(tosAccept);

    return newTosDiv;
}
