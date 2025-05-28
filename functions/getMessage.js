 export default function getMessage(number){
    if(number === 0){
      return 'Better luck next time!'
    }
    if(number >0 &&  number < 50){
      return 'Not bad, better luck next time'
    }
    if(number <100){
      return 'Well done!'
    }
    return 'Bravo!, Perfect score'
  }