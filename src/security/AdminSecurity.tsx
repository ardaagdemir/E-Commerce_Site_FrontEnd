import { Navigate } from "react-router-dom"
import AdminLogin from "../components/AdminPage/AdminLogin"
import AdminNavbar from "../components/AdminPage/AdminNavbar"
import { control } from "../utils/util"

function UserSecurity( item: { component: JSX.Element} ) {

    const jwt = control()
    let adminRole = false
    if ( jwt !== null ) {     
      jwt.result.authorities.map( item => {
          if (item.authority === "ROLE_admin") {
            adminRole = true
          }
      })
    }
  
    return (
        adminRole === false
      ?
      <Navigate to='/' replace />
      :
      <><AdminLogin/>{item.component}</>
    )
  }
  
  export default UserSecurity