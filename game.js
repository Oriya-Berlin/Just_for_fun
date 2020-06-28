

document.body.style.cursor = "url(images/but1.png), auto"; 



var width = window.innerWidth;
var height = window.innerHeight;
var score = 0;









function position()
{
	if(document.getElementById("person"))
		document.getElementById("person").remove();



	let p_x = Math.floor(Math.random()*width)-110; 
	let p_y = Math.floor(Math.random()*height)-110;

	if(p_x<=0)
		p_x = 20;
	if(p_y<=0)
		p_y = 20;

	let person = document.createElement("img");
	person.style.top = p_y+"px";
	person.style.left = p_x+"px";
	person.src = change_pics(); 
	person.style.width = "142px";
	person.style.height = "142px";
	person.style.position = "absolute";
	person.style.borderRadius = "50%";
	person.id = "person";
	person.onclick = function() 
	{
    	let snd = document.getElementById(change_hurt_sounds());
    	snd.play();

    	score++;                                       
    	document.getElementById("score").innerText = score;
    };


	document.body.appendChild(person);

}



function change_hurt_sounds()
{
	let number = Math.floor(Math.random()*3); 
	return number;
}



function change_pics()
{
	let number = Math.floor(Math.random()*8);  
	return "images/" + number + ".jpg";
}



function mouse_down()   // add sound here
{
	document.body.style.cursor = "url(images/but2.png), auto"; 
	document.getElementById("hit").play(); 
}



function mouse_up()
{
	document.body.style.cursor = "url(images/but1.png), auto"; 
}



function Play()  
{
	setInterval(function(){ position(); }, 1200);

	document.getElementById("real").style.display = "none";
	document.getElementById("game").style.display="block";
	player = document.getElementById("gametime");
  	player.play();	  	
}




	




