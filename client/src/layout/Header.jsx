import {useAuth} from '../contexts/AuthContext'

function Header() {

  const { user } = useAuth()

  // IF there is a user, show navbar, else show nothing
  if(user){
    return (
      <div>
        <p>header</p>
      </div>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}

export default Header