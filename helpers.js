
function successfullMessage(msg) {
    return "β *Minnutty*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *Minnutty*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *Minnutty*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}