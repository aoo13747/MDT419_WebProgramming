window.onload = pageLoad;
function pageLoad()
{
	var regisForm = document.getElementById("myForm")
    regisForm.onsubmit = validateForm;
}

function validateForm() 
{
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password = document.forms["myForm"]["password"];
    var retypePassword = document.forms["myForm"]["retypepassword"]
    if(password.value != retypePassword.value)
    {
        alert("Password not match")
        return false;
    }
    else
    {
        alert("Register Complete.")
        return true;
    }
}