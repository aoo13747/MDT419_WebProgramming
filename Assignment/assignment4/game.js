window.onload = pageLoad;
function pageLoad()
{
	var startButton = document.getElementById("start");
	startButton.onclick = startGame;
}

function startGame()
{
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart()
{
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	var tickTimer = setInterval(timeCount,TIMER_TICK);
	timer = x.innerHTML = second;
	
	function timeCount()
	{		
		// var allbox = document.querySelectorAll("#game-layer div");
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		
		var allbox = document.querySelectorAll("#game-layer div");
		timer = x.innerHTML = second;		
		
		console.log(second);
		if(allbox.length != 0 && second != 0)
		{
			second -= 1;
		}
		else if (allbox.length != 0 && second == 0)
		{
			timer = x.innerHTML = "0";
			clearInterval(tickTimer);
			alert("Game Over!");
			clearScreen();			
			timer = x.innerHTML = "";
			numberInput.innerHTML.value ="";
		}
		else
		{
			clearInterval(tickTimer);			
			alert("You Win!");
			timer = x.innerHTML = "";		
			numberInput.value = "";
		}
	}
}

function addBox()
{
	var numberInput = document.getElementById("numbox");
	var colorSelected = document.getElementById("color")
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = numberInput.value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop =  colorSelected.value;	
	for (var i =0; i<numbox;i++)
	{
		var tempbox = document.createElement("div") ;
		tempbox.className = ("square");
		tempbox.id = "box"+i;
		//tempbox.classList.add("square")
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.backgroundColor = colorDrop;
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
	
}

function bindBox(box)
{	
	var target = document.getElementById("game-layer");
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function()
	{		
		target.removeChild(box);
	}
}

function clearScreen()
{
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#game-layer div");
	var gameLayer = document.getElementById("game-layer");			
	console.log(allbox);
	//delete all  div
	for(var i = 0 ; i< allbox.length ; i++)
	{
		console.log("Delete");
		gameLayer.removeChild(allbox[i]);
	}

}




