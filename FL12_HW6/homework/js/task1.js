let a = +prompt('Enter value of a', '');
let b = +prompt('Enter value of b', '');
let c = +prompt('Enter value of c', '');

if(isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Invalid input data');
}
    else
    {
      const DISCR = 4;
      const ROOT = 2;
      const EXP = 2
      let discr = Math.pow(b, EXP) - a * c * DISCR;
      if (discr < 0)
      {
          alert('No solution.');
      } else if (discr === 0)
      {
          let x = -b / ROOT * a;
          alert("x = ${Math.round(x)}");
      } else if (discr > 0)
      {
      let y = (- b + Math.sqrt(discr)) / (a * ROOT)
      let z = (- b - Math.sqrt(discr)) / (a * ROOT)
      alert("y = ${Math.round(y)} and z = ${Math.round(z)}")
      }
}
