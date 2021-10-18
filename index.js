let sc = 0;

const p = ["a", "i", "u", "e", "o",
			"ka", "ki", "ku", "ke", "ko",
			"sa", "shi", "su", "se", "so",
			"ta", "chi", "tsu", "te", "to",
			"na", "ni", "nu", "ne", "no",
			"ha", "hi", "fu", "he", "ho"
			];
			
const p2 = ["hiragana/", "katakana/"];
let x = 0;


function myFunction() {
  
  var inpu = document.getElementById("inp").value;
  
  if(inpu === document.getElementById("im").name){
	sc += 50;
  }
  else{
	sc -= 20;
	if(sc<0){
		sc = 0;
	}
  }
 
  var ra =  p[Math.floor(Math.random()*p.length)];
  
  document.getElementById("im").src = p2[x] + ra + ".png";
  document.getElementById("im").name = ra;
  
  var n = sc.toString();
  document.getElementById("result").innerHTML = n;
}


/* 			"ma", "mi", "mu", "me", "mo",
			"ya", "yu", "yo",
			"ra", "ri", "ru", "re", "ro",
			"wa", "wo",
			"n"
			
			*/