/**
 * Created by Thinking on 09/22/2016.
 */
function Question(q, unitId, correctAns, answers) {
    this.question = q;
    this.unitIdRef = unitId;
    this.correctAns = correctAns;
    this.anwsers = answers;
    
}

module.exports = {
    init: (q, unitId, correctAns, answers) => {
        return new Question(q, unitId, correctAns, answers);
    }
}

