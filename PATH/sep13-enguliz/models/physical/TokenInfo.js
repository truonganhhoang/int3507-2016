/**
 * Created by Thinking on 09/18/2016.
 */
function TokenInfo(id, token, ref) {
    this.userId = id;
    this.access_token = token;
    this.refresh_token = ref;
}
module.exports = {
    init: function (id, token, refresh) { return new TokenInfo(id, token, refresh); }
};
//# sourceMappingURL=TokenInfo.js.map