/**
 * Created by Thinking on 09/17/2016.
 */
function User(username, pass, hash, phone, address, userFullName) {
    this.userName = username;
    this.userPass = pass;
    this.userHashPass = hash;
    this.userPhone = phone;
    this.userAddress = address;
    this.userFullName = userFullName;
    
}

module.exports = {
    init: (username, pass, hash, phone, address, userFullName) => {
        return new User(username, pass, hash, phone, address, userFullName);
    }
};