module.exports = {
    addListner: function (channel, callback) {
        Thunderer.subscribe(channel, callback);
    }
}