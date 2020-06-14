var zar = document.getElementById('zar');
var info = document.getElementById('data1');

zar.addEventListener("click", function(){
	
var xReq = new XMLHttpRequest();
xReq.open('GET', 'database1.json');
xReq.onload = function(){
	
	var xdata = JSON.parse(xReq.responseText);
	
	//document.write(xdata[0].Username);
	//info.innerHTML = xdata[0].Username;
	addHtml(xdata);
}
xReq.send();
});

function addHtml (data){
	
	//var htmlText = data[0].Username;
	var htmlText = "";
	for (i = 0 ; i < data.length; i++){
		htmlText += "<p class= 'red'>"+ data[i].Username + 
		' is a <span class= "green">' + data[i].model + "</span><hr></p>";
	}
	info.insertAdjacentHTML('beforeend', htmlText);
}









/*كود التحكم فى تسجيل الدخول
var  a = 1;
//تسجيل دخول المستخدمين
function check(){
var Username= document.getElementById("field").value;
var password= document.getElementById("password").value;
if (Username=="taha1" && password==1 
//المستخدم الثانى
|| Username=="taha2" && password==2
//يجب وضع المستخد الثالث هنا بنفس نظام المستخد الثانى

){
return true;
}
else {
	alert("اسم المستخدم أو كلمة المرور خطأ");
	return false;
}
}

var xReq = new XMLHttpRequest();
xReq.open('GET', 'database1.json');
xReq.onload = function(){
	
	var xdata = JSON.parse(xReq.responseText);


document.getElementById('data1').innerHTML = xdata[a].Username;
document.getElementById('data2').innerHTML = xdata[a].model;

}
xReq.send();

*/
