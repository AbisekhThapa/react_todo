
import { useHistory } from 'react-router-dom'

const Authcheck = () => {

    const history = useHistory();

    !localStorage.getItem("logedIn") && history.push("/login")


}

export default Authcheck