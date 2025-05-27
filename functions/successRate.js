export const successRate = (userAnswer, answers) => {
    const numberGoodAnswers = answers.reduce((a, c, i) =>{
        if(c === userAnswer[i]){
            return a + 1
        }
        return a
    },0)
    const successPercentage = Math.floor((numberGoodAnswers/answers.length)*100)
    return successPercentage
}