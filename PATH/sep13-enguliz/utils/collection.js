/**
 * Created by Thinking on 09/17/2016.
 */
var Collection = (name, value) => {
    Object.defineProperty(exports, name, {
        value :value,
        enumerable: true
    });
}

Collection('user', 'user');
Collection('token', 'token-info');
Collection('category', 'category');
Collection('unit', 'unit');
Collection('question', 'question');
Collection('exam', 'exam');