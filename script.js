//your JS code here. If required.
function FormDetail(){
	let FirstName=document.getElementById("fname");

	let LastName=document.getElementById("lname");

	let PhoneNo=document.getElementById("phone");

	let MailId=document.getElementById("mailid");
	
	//alert(FirstName,LastName);

	var f = document.getElementById('myForm').getElementsByTagName("INPUT");

for (var i = 0; i < f.length; i++)
    alert(f[i].name + ' ' + f[i].value);
	
}
