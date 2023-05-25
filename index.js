// let display = document.getElementById("");
let celsius = document.getElementById("cels");
let fahrenheit = document.getElementById("fahr");
let clear = document.getElementById("btn");

let celC = () => {
  let output = ((parseInt(celsius.value) * 9) / 5 + 32).toFixed(2);

  fahrenheit.value = output;
  // console.log('celsius');
};

let fahrC = () => {
  let output = ((parseInt(fahrenheit.value - 32) * (5/9 ) )).toFixed(2);

  celsius.value = output;
  // console.log('fahrenheit');
};
let clr = () => {
   let onclick = location.reload();
    
}