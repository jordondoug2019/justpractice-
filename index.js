var card= prompt ("ENTER card 1: ");
var card2= prompt("ENter card 2: ");
var card3= prompt("ENter card 3: ");
var card4= prompt("enter card 4: ");

var total= parseInt(card)+parseInt(card2)+parseInt(card3)+parseInt(card4);


if (total === 28)

{
    alert("GOt it jack!")
}

else if( total >= 28)
{
    alert("BUst")
}

else if (total <= 28)
{
    alert("The total is " + total)
}

var grade = prompt("ENter your grade: ");

if (grade >= 90 && grade<=100)
{
    alert("A")
}
else if (grade >= 80 && grade <=89)
{
    alert("B")
}
else if (grade >= 70 && grade <=79)
{
    alert("C")
}
else if (grade>=60 && grade<=69)
{
    alert("D")
}
else if( grade>= 0 && grade<=59)
{
    alert("F")
}

var num= prompt("enter number")
if (num <= 0 || num >=100)
{
    alert("error")
}
else
{
    alert("you got it")
}