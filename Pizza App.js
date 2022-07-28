
function ch()
{
var x,y
x=""
y=""
x=parseInt(x)
y=parseInt(y)
y=document.frm.t2.value
if(document.frm.r(0).checked)
x=70
if(document.frm.r(1).checked)
x=90
if(document.frm.c1.checked)
x=50+x
if(document.frm.c2.checked)
x=70+x
if(document.frm.c3.checked)
x=90+x
document.frm.t1.value=(x)*y
}
<form name="frm"><font text="cyan"></font>
<center><big><b><u>PIZZA RATE</b></u></center>
</font>Quantity
<input type="text" name="t2">
<br>Small(Rs 70)
<input type="radio" name="r">
&nbsp;Medium(Rs 90)
<input type="radio" name="r">
<br>cheese(Rs 50)
<input type="checkbox" name="c1">
<br>olives(Rs 70)
<input type="checkbox" name="c2">
<br>onion(Rs 90)
<input type="checkbox" name="c3"><br>
<input type="button" value="BILL" onClick="ch()">
&nbsp;<input type="text" name="t1">
</form>