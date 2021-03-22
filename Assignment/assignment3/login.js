const queryString = window.location.search;
const urlParameter = new URLSearchParams(queryString)
const userNameRegisted = urlParameter.get("username")
const passwordRegisted = urlParameter.get("password")

window.onload = loginLoad;

function loginLoad()
{
	var loginForm = document.getElementById("myLogin")
	loginForm.onsubmit = checkLogin;
}
function checkLogin()
{
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var userName = document.forms["myLogin"]["username"]
	var password = document.forms["myLogin"]["password"]
	if(userName.value != userNameRegisted || password.value != passwordRegisted)
	{
		alert("Username or Password Incorrect!")
		return false;
	}
	else	
	{
		alert("Login Complete!");
		return true
	}
}

			