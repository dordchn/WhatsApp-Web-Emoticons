/*
	 Extension created by Dor Cohen

	##### dordorcohen@gmail.com #####
*/

var emoticons = [];

emoticons[":)"]=["😊","emojie056"];
emoticons[";)"]=["😉","emojie405"];
emoticons[":D"]=["😀","emoji1f600"];
emoticons["=D"]=["😃","emojie057"];
emoticons["^_^"]=["😄","emojie415"];
emoticons[":P"]=["😋","emoji1f60b"];
emoticons[";P"]=["😜","emojie105"];
emoticons["8-)"]=["😎","emoji1f60e"];
emoticons[":-*"]=["😘","emojie418"];
//
emoticons["(y)"]=["👍","emojie00e"];
emoticons[":("]=["😥","emojie401"];
emoticons[":/"]=["😕","emoji1f615"];
emoticons[":\\"]=["😕","emoji1f615"]; // second option for the same icon
emoticons[":@"]=["😡","emojie416"];
emoticons[":O"]=["😦","emoji1f626"];
emoticons[":|"]=["😐","emoji1f610"];
emoticons["-_-"]=["😒","emojie40e"];
emoticons["&lt;3"]=["❤","emojie022"];

// keydown event used to find new smileys
document.addEventListener('keydown', function (e) { // has to be keydown and not keyup (cause i want the image to change only when user insert next character)
	var ele = document.activeElement;
	if (ele.tagName != "DIV" || ele.className != "input") return; // tagName always return uppercase
	if (replaceEmoticons(ele)){
		// replacement has been made
		setEndOfContenteditable(ele); // cursor jump to the beginning of the box after a replacement
	}
});

// return true if any change has been made
function replaceEmoticons(container){
	var result = false;
	for (var icon in emoticons){
		if (container.innerHTML.indexOf(icon)>-1){
			result = true;
			// old version was to place the 'img' tag, but it cause cursor issues
			container.innerHTML = container.innerHTML.replace(icon,emoticons[icon][0]);
		}
	}
	return result;
}

// moving the cursor to the end of the string
function setEndOfContenteditable(contentEditableElement)
{
	var range,selection;
	range = document.createRange();//Create a range (a range is a like the selection but invisible)
	range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
	range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
	selection = window.getSelection();//get the selection object (allows you to change selection)
	selection.removeAllRanges();//remove any selections already made
	selection.addRange(range);//make the range you have just created the visible selection
}
