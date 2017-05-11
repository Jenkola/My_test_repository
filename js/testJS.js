//Test javascript file adding some feature...

(function(root) {

	var myParagraph = document.createElement('p');
	myParagraph.textContent = 'Yo sup, I created this paragraph.';

	var mainDiv = document.getElementById('main');

	mainDiv.appendChild(myParagraph);

})(this)