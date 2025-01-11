const convertingby = {
    bytes: 1,
    kilobytes: 1024,
    megabytes: 1024 * 1024,
    gigabytes: 1024 * 1024 * 1024,
  };
  
  function convert(value,inputUnit,outputUnit) {
    if (isNaN(value) || value <= 0) {
      return 'error';
    }
  
    const bytesConversion = value * convertingby[inputUnit];
    const convertedValue = bytesConversion / convertingby[outputUnit];
  
    return parseFloat(convertedValue.toFixed(2)); // Round to 2 decimal places
  }
  
  module.exports = { convert };

