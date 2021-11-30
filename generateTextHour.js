module.exports = generateHour = (currentHour) => { 
  switch(currentHour) {
    case 4:
      return 'laudes';
    case 9:
      return 'hora terça';
    case 12:
      return 'hora sexta';
    case 15:
      return 'hora nona';
    case 18:
      return 'vésperas'; 
    }
}