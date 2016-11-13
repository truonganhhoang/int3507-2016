/**
 * Created by Thinking on 09/22/2016.
 */
function Question(q, unitId, anwsers) {
    this.question = q;
    this.unitRefId = unitId;
    this.anwsers = anwsers;
}

module.exports = {
    init: (q, unitId, anwsers) => {
        return new Question(q, unitId, anwsers);
    }
}

