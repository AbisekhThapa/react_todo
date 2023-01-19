
const AuthcheckBoolean = () => {
    let loggedin = false;
    if (localStorage.getItem("logedIn")) {
        loggedin = true;
    }
    return (loggedin);
}

export default AuthcheckBoolean