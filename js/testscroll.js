

function testScroll(ev){
	var myElement = document.querySelector("#schedule-appt");
    if(window.pageYOffset>380) {
    	console.log('User has scrolled at least 400 px!');
    	// Query for schedule appointment button using document.querySelectorAll("#schedule-appt")
    	// change element CSS to display: fixed
		myElement.style.position = "fixed";
		myElement.style.backgroundColor = "white";
    	myElement.style.bottom = "85px";
    	myElement.style.zIndex = "100";
    	myElement.style.margin = "0";
    	myElement.style.left = "39.75%";
    	myElement.style.visibility = "visible";
    	myElement.style.textAlign = "center";
    	myElement.style.width = "auto";
    	myElement.style.borderRadius = "6px";
    }
    else {
    	myElement.style.visibility = "hidden";
    }
}

window.onscroll=testScroll

