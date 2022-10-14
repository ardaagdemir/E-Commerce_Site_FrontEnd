import { Navigate } from "react-router-dom"
import UserLogin from "../components/UserPage/UserLogin"
import { control } from "../utils/util"

function UserSecurity( item: { component: JSX.Element} ) {

    const jwt = control()
    let userRole = false
    if ( jwt !== null ) {    
      jwt.result.authorities.map( item => {
          if (item.authority === "ROLE_user") {
            userRole = true
          }
      })
    }
  
    return (
      userRole === false
      ?
      <Navigate to='/' replace />
      :
      <>
      <UserLogin/>{item.component}
      </>
    )
  }
  
  export default UserSecurity