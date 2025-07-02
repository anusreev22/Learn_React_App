import profilepic from './assets/profile_pic.jpg'
function Card(){
return(
  <div className="card">
    <img  className="card-image" src={profilepic} alt="profile picture"></img>
    <h2  className="card-title">Anusree</h2>
    <p  className="card-text">Hello gooys</p>
  </div>
);
}

export default Card