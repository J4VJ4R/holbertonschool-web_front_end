const globalVariable = "welcome";

function outer (){
  alert(`${globalVariable}`);
  const course = "Holberton";
  alert(globalVariable);
  function inner(){
    const exclamation = "!";
    alert(`${globalVariable} ${course}`);
    function inception(){
      alert(`${globalVariable} ${course}${exclamation}`);
    }
    inception();
  }
  inner();
}
outer();