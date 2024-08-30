function setAuthToken(token, expireTimeInMintues = 30){
    const expireTime = Date.now() + (expireTimeInMintues * 60 * 1000);

    const tokenData = {
        token,
        expireTime
    }
    window.localStorage.setItem('authToken', JSON.stringify(tokenData));
}

let token = "ahsdjahsdhahu898989a"

setAuthToken(token);