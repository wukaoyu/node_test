const loginCheck = (username, passoword) => {
    if (username === "wky" && passoword ==="123456") {
        return true
    }else{
        return false
    }
}

module.exports = loginCheck