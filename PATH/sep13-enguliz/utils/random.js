/**
 * Created by Thinking on 09/23/2016.
 */
module.exports = {
    int: (n) => {
        return Math.floor((Math.random() * n) + 1);
    },
    generateToken: (x) => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < x; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
}