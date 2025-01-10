// function to convert the file from the input
function converting() {
    //store the inputs into variables 
    const value = parseFloat(document.getElementById('input-box').value);
    const unit = document.getElementById('select-size').value;
    const outputunit = document.getElementById('select-size-output').value;
  
  // calculation based on the file size being selected 
  const convertingby = {
    bytes:1,
    kilobytes: 1024,
    megabytes: 1024 * 1024,
    gigabytes: 1024 * 1024 * 1024,
  
  };

  //if value inputted has other than numbers display error message 
  if (isNaN(value) || value <= 0) {
    document.getElementById('output-box').value = "Invalid Input";
    return;
  }
    // convertion occurring 
  const bytesconversion = value * convertingby[unit];
  const convertedvalue = bytesconversion / convertingby[outputunit];

  
  // to not have any decimal points   
  document.getElementById('output-box').value = Math.round(convertedvalue); 
                                       
}
// display the results when the button is clicked
document.getElementById('convert-button').addEventListener('click', converting);


//function for the reset button 
function reset(){
    // making all the boxes become empty 
    document.getElementById('input-box').value = "";
    document.getElementById('output-box').value = "";
    document.getElementById('select-size').selectedIndex = 0;
    document.getElementById('select-size-output').selectedIndex =0;
  }
  // to be completed when the reset button is clicked
  document.getElementById('reset-button').addEventListener('click',reset);


  // function to switch the data around
  function switching(){
    [document.getElementById("input-box").value, document.getElementById("output-box").value] =
    [document.getElementById("output-box").value, document.getElementById("input-box").value];
  
    // Swap the selected options of the dropdowns
    [document.getElementById("select-size").value, document.getElementById("select-size-output").value] =
    [document.getElementById("select-size-output").value, document.getElementById("select-size").value];
  }
  // switch to occur when button is clicked
  document.getElementById("switch-button").addEventListener('click',switching);
  