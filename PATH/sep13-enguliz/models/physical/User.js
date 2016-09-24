/**
 * Created by Thinking on 09/17/2016.
 */
function User(username, pass, hash, phone, address) {
    this.userName = username;
    this.userPass = pass;
    this.userHashPass = hash;
    this.userPhone = phone;
    this.userAddress = address;
}

module.exports = {
    init: (username, pass, hash, phone, address) => {
        return new User(username, pass, hash, phone, address);
    }
};