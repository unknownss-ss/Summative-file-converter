function converting() {
    const value = parseFloat(document.getElementById('input-box').value);
    const unit = document.getElementById('select-size').value;
    const outputunit = document.getElementById('select-size-output').value;
  
  
  const convertingby = {
    bytes:1,
    kilobytes: 1024,
    megabytes: 1024 * 1024,
    gigabytes: 1024 * 1024 * 1024,
  };