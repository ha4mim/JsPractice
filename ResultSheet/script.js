
// ===========================
// 	for Bangla 1st Pepar
// ===========================
function result(){

	var _tm=document.getElementById("tm").value;
	var _pm=document.getElementById("pm").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade").value="A+";
			document.getElementById("point").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade").value="A";
			document.getElementById("point").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade").value="A-";
			document.getElementById("point").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade").value="B";
			document.getElementById("point").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade").value="C";
			document.getElementById("point").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade").value="D";
			document.getElementById("point").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade").value="F";
			document.getElementById("point").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm").value="0";
			document.getElementById("pm").value="0";
			document.getElementById("ttm").value="0";
		}
	}
}

// ===========================
// 	for Bangla 2nd Pepar
// ===========================
function result1(){

	var _tm=document.getElementById("tm1").value;
	var _pm=document.getElementById("pm1").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm1").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade1").value="A+";
			document.getElementById("point1").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade1").value="A";
			document.getElementById("point1").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade1").value="A-";
			document.getElementById("point1").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade1").value="B";
			document.getElementById("point1").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade1").value="C";
			document.getElementById("point1").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade1").value="D";
			document.getElementById("point1").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade1").value="F";
			document.getElementById("point1").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm1").value="0";
			document.getElementById("pm1").value="0";
			document.getElementById("ttm1").value="0";
		}
	}
}


// ===========================
// 	for English 1st Pepar
// ===========================
function result2(){

	var _tm=document.getElementById("tm2").value;
	var _pm=document.getElementById("pm2").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm2").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade2").value="A+";
			document.getElementById("point2").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade2").value="A";
			document.getElementById("point2").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade2").value="A-";
			document.getElementById("point2").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade2").value="B";
			document.getElementById("point2").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade2").value="C";
			document.getElementById("point2").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade2").value="D";
			document.getElementById("point2").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade2").value="F";
			document.getElementById("point2").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm2").value="0";
			document.getElementById("pm2").value="0";
			document.getElementById("ttm2").value="0";
		}
	}
}
// ===========================
// 	for English 2nd Pepar
// ===========================
function result3(){

	var _tm=document.getElementById("tm3").value;
	var _pm=document.getElementById("pm3").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm3").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade3").value="A+";
			document.getElementById("point3").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade3").value="A";
			document.getElementById("point3").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade3").value="A-";
			document.getElementById("point3").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade3").value="B";
			document.getElementById("point3").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade3").value="C";
			document.getElementById("point3").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade3").value="D";
			document.getElementById("point3").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade3").value="F";
			document.getElementById("point3").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm3").value="0";
			document.getElementById("pm3").value="0";
			document.getElementById("ttm3").value="0";
		}
	}
}
// ===========================
// 	for Math
// ===========================
function result4(){
	var _tm=document.getElementById("tm4").value;
	var _pm=document.getElementById("pm4").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm4").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade4").value="A+";
			document.getElementById("point4").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade4").value="A";
			document.getElementById("point4").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade4").value="A-";
			document.getElementById("point4").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade4").value="B";
			document.getElementById("point4").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade4").value="C";
			document.getElementById("point4").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade4").value="D";
			document.getElementById("point4").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade4").value="F";
			document.getElementById("point4").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm4").value="0";
			document.getElementById("pm4").value="0";
			document.getElementById("ttm4").value="0";
		}
	}
}
// ===========================
// 	for Physics 1st Pepar
// ===========================
function result5(){

	var _tm=document.getElementById("tm5").value;
	var _pm=document.getElementById("pm5").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm5").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade5").value="A+";
			document.getElementById("point5").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade5").value="A";
			document.getElementById("point5").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade5").value="A-";
			document.getElementById("point5").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade5").value="B";
			document.getElementById("point5").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade5").value="C";
			document.getElementById("point5").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade5").value="D";
			document.getElementById("point5").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade5").value="F";
			document.getElementById("point5").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm5").value="0";
			document.getElementById("pm5").value="0";
			document.getElementById("ttm5").value="0";
		}
	}
}
// ===========================
// 	for Physics 2nd Pepar
// ===========================
function result6(){

	var _tm=document.getElementById("tm6").value;
	var _pm=document.getElementById("pm6").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm6").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade6").value="A+";
			document.getElementById("point6").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade6").value="A";
			document.getElementById("point6").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade6").value="A-";
			document.getElementById("point6").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade6").value="B";
			document.getElementById("point6").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade6").value="C";
			document.getElementById("point6").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade6").value="D";
			document.getElementById("point6").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade5").value="F";
			document.getElementById("point5").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm6").value="0";
			document.getElementById("pm6").value="0";
			document.getElementById("ttm6").value="0";
		}
	}
}
// ===========================
// 	for Chamestry 1st Pepar
// ===========================
function result7(){

	var _tm=document.getElementById("tm7").value;
	var _pm=document.getElementById("pm7").value;

	if(_tm=="" || _pm==""){
		alert("tm and pm field on be empty");
	}
	else{
		var result=parseInt(_tm)+parseInt(_pm);
		document.getElementById("ttm7").value=result;
		if (result >=80 && result <= 100) {
			document.getElementById("grade7").value="A+";
			document.getElementById("point7").value="5.00";
		}
		else if (result >=70 && result <= 79) {
			document.getElementById("grade7").value="A";
			document.getElementById("point7").value="4.00";
		}
		else if (result >=60 && result <= 69) {
			document.getElementById("grade7").value="A-";
			document.getElementById("point7").value="3.50";
		}
		else if (result >=50 && result <= 59) {
			document.getElementById("grade7").value="B";
			document.getElementById("point7").value="3.00";
		}
		else if (result >=40 && result <= 49) {
			document.getElementById("grade7").value="C";
			document.getElementById("point7").value="2.00";
		}
		else if (result >=33 && result <= 39) {
			document.getElementById("grade7").value="D";
			document.getElementById("point7").value="1.00";
		}
		else if (result >=0 && result <= 32) {
			document.getElementById("grade7").value="F";
			document.getElementById("point7").value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById("tm7").value="0";
			document.getElementById("pm7").value="0";
			document.getElementById("ttm7").value="0";
		}
	}
}

function finalResult(){
	if(document.getElementById("grade").value == "F" || document.getElementById("grade1").value == "F" || document.getElementById("grade2").value == "F")
	{
		document.getElementById("totalgrade").value="Fail";
		document.getElementById("totalMark").value="0";
		document.getElementById("totalpoin").value="0";
	}
	else{
		var _ttm=document.getElementById("ttm").value;
		var _ttm1=document.getElementById("ttm1").value;
		var _ttm2=document.getElementById("ttm2").value;

		var _totalMark = parseInt(_ttm) + parseInt(_ttm1) +
		parseInt(_ttm2);
		document.getElementById("totalMark").value=_totalMark;

		var _point=document.getElementById("point").value;
		var _point1=document.getElementById("point1").value;
		var _point2=document.getElementById("point2").value;

		var _totalPoint = ((parseFloat(_point) + parseFloat(_point1) +
		parseFloat(_point2))/3);
		document.getElementById("totalpoin").value=_totalPoint;

		if (_totalPoint==5.00) {
			document.getElementById("totalgrade").value="A+";
		}
		else if (_totalPoint >=4.00 && _totalPoint <=4.99) {
			document.getElementById("totalgrade").value="A";
		}
		else if (_totalPoint >=3.50 && _totalPoint <=3.99) {
			document.getElementById("totalgrade").value="A-";
		}
		else if (_totalPoint >=3.00 && _totalPoint <=3.49) {
			document.getElementById("totalgrade").value="B";
		}
		else if (_totalPoint >=2.00 && _totalPoint <=2.99) {
			document.getElementById("totalgrade").value="C";
		}
		else if (_totalPoint >=1.00 && _totalPoint <=1.99) {
			document.getElementById("totalgrade").value="D";
		}
	}
}