
function successfullMessage(msg) {
    return "✅ *Minnutty*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Minnutty*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *Minnutty*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}