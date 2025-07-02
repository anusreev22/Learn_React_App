function UserGreeting(props){
  return(props.isLoggedin ?<h2 className="welcome-message">welcome {props.username}</h2> : <h2 className= "login-meassage"> please login to continue</h2>)
}
export default UserGreeting