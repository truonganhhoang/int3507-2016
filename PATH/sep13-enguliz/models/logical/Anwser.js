/**
 * Created by Thinking on 09/22/2016.
 */
function Anwser(ansId, ansDes) {
    this.ansId = ansId;
    this.ansDes = ansDes;
}
module.exports = {
    init: (ansId, ansDes) => {
        return new Anwser(ansId, ansDes);
    }
}