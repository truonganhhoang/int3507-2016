/**
 * Created by Thinking on 10/12/2016.
 */
function Exam(userIdRef, unitIdRef, answer, time) {
    this.userIdRef = userIdRef;
    this.time = time;
    this.unitIdRef = unitIdRef;
    this.createdDate = new Date();
    this.answer = answer;
}

module.exports = {
    init: (x1, x2, x3, x4) => {
        return new Exam(x1, x2, x3, x4);
    }
}