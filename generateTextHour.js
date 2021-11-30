module.exports = generateHour = (currentHour) => { 
  switch(currentHour) {
    case 4:
      return 'as laudes';
    case 9:
      return 'a hora terça';
    case 12:
      return 'a hora sexta';
    case 15:
      return 'a hora nona';
    case 18:
      return 'as vésperas';
    }
}