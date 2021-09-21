//receber por parametro a carta e o valor dela
//

export const RULES = (value: number) => {
  switch (value) {
    case 1:
      console.log('1');
      return 1;
      break;
    case 2:
      console.log('2');
      return 2;

      break;
    case 3:
      console.log('3');
      return 3;

      break;
    case 4:
      console.log('4');
      break;
    case 5:
      console.log('5');
      break;
    case 6:
      console.log('6');
      break;
    case 7:
      console.log('7');
      break;
    case 8:
      console.log('8');
      break;
    case 9:
      console.log('9');
      break;
    case 10:
      console.log('10');
      break;
    case 11:
      console.log('11');
      break;
    case 12:
      console.log('12');
      break;
    case 13:
      console.log('13');
      break;
    default:
      console.log('No such day exists!');
      break;
  }
};
