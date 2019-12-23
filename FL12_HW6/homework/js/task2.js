let a = parseInt(prompt('Enter length of trianle\'s a side', ''));
let b = parseInt(prompt('Enter length of trianle\'s b side', ''));
let c = parseInt(prompt('Enter length of trianle\'s c side', ''));

const HS = 2
let sp = (a + b + c) / HS
let ar = Math.sqrt(sp * (sp - a) * (p - c) * (sp - b))

if(isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('ONLY numbers');
}
else if(a === 0 || b === 0 || c ===0)
{
    alert('A triangle must have 3 sides');
}
else if(c >= a + b || b >= a + c || a >= b + c)
{
    alert('Triangle doesn’t exist');
    }
else if(a === b && a === c) {
    alert('Equilateral triangle');
    }
else if(a === b || a === c || b === c) {
    alert('Isosceles triangle');
    }
else
{
    alert('Scalene triangle');
}
