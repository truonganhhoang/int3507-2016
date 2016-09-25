/**
 * Created by Thinking on 09/17/2016.
 */
function DefaultResp(err, msg, data) {
    this.error = err;
    this.message = msg;
    this.data = data;
}

function LoginResp(tk, rk) {
    this.access_token = tk; 
    this.refresh_token = rk;
}

module.exports = {
    success: (data) => {
        return new DefaultResp(0, 'Success', data);
    },
    error: (err, msg, data) => {
        return new DefaultResp(err, msg, data);
    },
    login: (tk, rk) => {
        return new DefaultResp(0, 'Success', new LoginResp(tk, rk) );
    }
};