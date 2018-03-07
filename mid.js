var ph1 = 0; ph2 = 0; ph3 = 0; ph4 = 0; ph5 = 0; ph6 = 0; ph7 = 0;
var res11 = 0; res12 = 0; res13 = 0; res14 = 0;
var res21 = 0; res22 = 0; res23 = 0; res24 = 0;
var res31 = 0; res32 = 0; res33 = 0; res34 = 0;
var res41 = 0; res42 = 0; res43 = 0; res44 = 0;
var div1 = 0; div2 = 0; div3 = 0; div4 = 0; div5 = 0; div6 = 0; div7 = 0;
var a = 1000; b = 3000; c = 5000; d = 7000; e = 0; f = 0; g = 0;
var i = 0;
var h=0; var time; var htgon=0;
function curTime()
{
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	document.getElementById("opt").innerHTML = hours + " : " + minutes + " : " + seconds;
}setInterval(curTime,500);
function incTime() 
{
	document.getElementById('op').innerHTML=h; h++; time=setTimeout("incTime()",1000);
}
function start() 
{
	if(!htgon) 
		{ htgon=1; 
		  incTime();
		}
}
window.onload=start;

var ref = setInterval(refresh(),time); 
function refresh()
{
	ph1 = document.getElementById("p1").value;
	ph2 = document.getElementById("p2").value;
	ph3 = document.getElementById("p3").value;
	ph4 = document.getElementById("p4").value;
	ph5 = document.getElementById("p5").value;
	ph6 = document.getElementById("p6").value;
	ph7 = document.getElementById("p7").value;
	div1 = (ph1 * h) / 3600;
	div2 = (ph2 * h) / 3600;
	div3 = (ph3 * h) / 3600;
	div4 = (ph4 * h) / 3600;
	div5 = (ph5 * h) / 3600;
	div6 = (ph6 * h) / 3600;
	div7 = (ph7 * h) / 3600;
	document.getElementById("res1").value = a += Math.ceil(div1);
	document.getElementById("res2").value = b += Math.ceil(div2);
	document.getElementById("res3").value = c += Math.ceil(div3);
	document.getElementById("res4").value = d += Math.ceil(div4);
	document.getElementById("bar").value = e += Math.ceil(div5);
	document.getElementById("stb").value = f += Math.ceil(div6);
	document.getElementById("nes").value = g += Math.ceil(div7);
}
function update(i)
{
	if(i == 1)
	{
		ph1 = document.getElementById("p1").value;
		ph1 = ph1 * 2;

		document.getElementById("p1").value = ph1;
		res11 = document.getElementById("r11").value;
		res12 = document.getElementById("r12").value;
		res13 = document.getElementById("r13").value;
		res14 = document.getElementById("r14").value;
		if(a > 0 && a > res11)
		{
			document.getElementById("res1").value = a = (a - res11);
		}
		if(b > 0 && b > res12)
		{
			document.getElementById("res2").value = b= (b - res12);
		}
		if(c > 0 && c > res13 )
		{
			document.getElementById("res3").value = c = (c - res13);
		}
		if(d > 0 && d > res14)
		{
			document.getElementById("res4").value = d = (d - res14);
		}
	}
	if(i == 2)
	{
		ph2 = document.getElementById("p2").value;
		ph2 = ph2 * 2;

		document.getElementById("p2").value = ph2;
		res21 = document.getElementById("r21").value;
		res22 = document.getElementById("r22").value;
		res23 = document.getElementById("r23").value;
		res24 = document.getElementById("r24").value;
		if(a > 0 && a >= res21)
		{
			document.getElementById("res1").value = a = (a - res21);
		}
		if(b > 0 && a >= res22)
		{
			document.getElementById("res2").value = b= (b - res22);
		}
		if(c > 0 && c >= res23)
		{
			document.getElementById("res3").value = c = (c - res23);
		}
		if(d > 0 && d >= res24)
		{
			document.getElementById("res4").value = d = (d - res24);
		}
	}
	if(i == 3)
	{
		ph3 = document.getElementById("p3").value;
		ph3 = ph3 * 2;

		document.getElementById("p3").value = ph3;
		res31 = document.getElementById("r31").value;
		res32 = document.getElementById("r32").value;
		res33 = document.getElementById("r33").value;
		res34 = document.getElementById("r34").value;
		if(a > 0 && a >= res31)
		{
			document.getElementById("res1").value = a = (a - res31);
		}
		if(b > 0 && b >= res32)
		{
			document.getElementById("res2").value = b= (b - res32);
		}
		if(c > 0 && c >= res33)
		{
			document.getElementById("res3").value = c = (c - res33);
		}
		if(d > 0 && d >= res34)
		{
			document.getElementById("res4").value = d = (d - res34);
		}
	}
	if(i == 4)
	{
		ph4 = document.getElementById("p4").value;
		ph4 = ph4 * 2;

		document.getElementById("p4").value = ph4;
		res41 = document.getElementById("r41").value;
		res42 = document.getElementById("r42").value;
		res43 = document.getElementById("r43").value;
		res44 = document.getElementById("r44").value;
		if(a > 0 && a >= res41)
		{
			document.getElementById("res1").value = a = (a - res41);
		}
		if(b > 0 && b >= res42)
		{
			document.getElementById("res2").value = b= (b - res42);
		}
		if(c > 0 && c >= res43)
		{
			document.getElementById("res3").value = c = (c - res43);
		}
		if(d > 0 && d >= res44)
		{
			document.getElementById("res4").value = d = (d - res44);
		}
	}
	if(i == 5)
	{
		ph5 = document.getElementById("p5").value;
		ph5 = ph5 * 2;

		document.getElementById("p5").value = ph5;
		res51 = document.getElementById("r51").value;
		res52 = document.getElementById("r52").value;
		res53 = document.getElementById("r53").value;
		res54 = document.getElementById("r54").value;
		if(a > 0 && a >= res51)
		{
			document.getElementById("res1").value = a = (a - res51);
		}
		if(b > 0 && b >= res52)
		{
			document.getElementById("res2").value = b= (b - res52);
		}
		if(c > 0 && c >= res53)
		{
			document.getElementById("res3").value = c = (c - res53);
		}
		if(d > 0 && d >= res54)
		{
			document.getElementById("res4").value = d = (d - res54);
		}
	}
	if(i == 6)
	{
		ph6 = document.getElementById("p6").value;
		ph6 = ph6 * 2;

		document.getElementById("p6").value = ph6;
		res61 = document.getElementById("r61").value;
		res62 = document.getElementById("r62").value;
		res63 = document.getElementById("r63").value;
		res64 = document.getElementById("r64").value;
		if(a > 0 && a >= res61)
		{
			document.getElementById("res1").value = a = (a - res61);
		}
		if(b > 0 && b >= res62)
		{
			document.getElementById("res2").value = b= (b - res62);
		}
		if(c > 0 && c >= res63)
		{
			document.getElementById("res3").value = c = (c - res63);
		}
		if(d > 0 && d >= res64)
		{
			document.getElementById("res4").value = d = (d - res64);
		}
	}
	if(i == 7)
	{
		ph7 = document.getElementById("p7").value;
		ph7 = ph7 * 2;

		document.getElementById("p7").value = ph7;
		res71 = document.getElementById("r71").value;
		res72 = document.getElementById("r72").value;
		res73 = document.getElementById("r73").value;
		res74 = document.getElementById("r74").value;
		if(a > 0 && a >= res71)
		{
			document.getElementById("res1").value = a = (a - res71);
		}
		if(b > 0 && b >= res72)
		{
			document.getElementById("res2").value = b= (b - res72);
		}
		if(c > 0 && c >= res73)
		{
			document.getElementById("res3").value = c = (c - res73);
		}
		if(d > 0 && d >= res74)
		{
			document.getElementById("res4").value = d = (d - res74);
		}
	}
}
function resets()
{
	window.location.reload();
}
