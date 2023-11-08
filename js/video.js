var video = document.querySelector("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
 console.log("Play Video");
 video.play();

 var vol = video.volume * 100;
 console.log("Volume is: ", vol);
 document.querySelector("#volume").textContent = vol + "%";
});


document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});


document.querySelector("#slower").addEventListener("click",function(){
	document.querySelector('video').playbackRate = document.querySelector('video').playbackRate * 0.9;
	console.log("speed is " + document.querySelector('video').playbackRate);
});


document.querySelector("#faster").addEventListener("click",function(){
	document.querySelector('video').playbackRate = document.querySelector('video').playbackRate / 0.9;
	console.log("speed is " + document.querySelector('video').playbackRate);
});


//stops working
document.querySelector("#skip").addEventListener("click",function(){
	let j = video.currentTime;
	let k = video.currentTime + 10;
	if (k >= video.duration ){
		k = 0;
	}
	video.currentTime = k;
	console.log("Current Location: " + k);
});

document.querySelector("#mute").addEventListener("click",function(){
	if(video.muted == true){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});




document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value/100;
	document.querySelector("#volume").textContent = this.value + "%";
});


document.querySelector("#vintage").addEventListener("click",function(){
	video.classList.add("oldSchool");
});


document.querySelector("#orig").addEventListener("click",function(){
	video.classList.remove("oldSchool");
});
