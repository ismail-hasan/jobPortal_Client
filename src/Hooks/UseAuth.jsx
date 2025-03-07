import { useContext } from "react"
import AuthContext from "../AuthContext/Context"

const UseAuth = () => {
    const context = useContext(AuthContext)
    return context
}


export default UseAuth