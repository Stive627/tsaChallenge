export default function getColor(indx, answer, userAnswer){
    if(indx === answer){
        return 'rgba(25, 175, 93, 1)'
    }
    else if((userAnswer !== answer) && indx === userAnswer){
        return 'rgba(235, 63, 66, 1)'
    }
    return 'rgba(157, 78, 221, 1)'
}