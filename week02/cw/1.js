//Function One
let totalDue = 0;
let totalWeight = 10.0;

function functionOne()
{
    totalDue += 5;
}

function functionTwo()
{
    totalDue *= 1.15;
    totalDue += 5;
}

if (totalWeight < 20)
{
    functionOne();
}
else
{
    functionTwo();
}

console.log(totalDue);