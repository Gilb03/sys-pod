const Navbar = (props) => (

    <div className= "navbar">
      <nav className ="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#hosts">Organizers</a>
        </div>
        <div className="navbar-end">
         {<a className="navbar-item" href="https://podcasts.apple.com/us/podcast/shoot-your-shot-pod/id1333642650" target="_blank">Apple</a>}
         {<a className="navbar-item" href="https://open.spotify.com/show/4gdFPXUYTzDosNviKfPjxc" target="_blank">Spotify</a>}
         {<a className="navbar-item" href="https://soundcloud.com/shootyourshotpod" target="_blank">Soundcloud</a>}
         
        </div>
        <div className="navbar-item">
          <div className="field is-separated">
          </div>
        </div>
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
            </p>
          </div>
        </div>
    </nav>
  
    { <style jsx="true">{`
          {
              .elevator {
                text-align: center;
              }
              .navbar {
                { background-color: #f36d21; }
              }
              .navbar-item {
                { color: white;
                font-weight: bold;
              }
              img {
                height: 250px;
                border-radius: 50%;
              }
          }
        `}</style> }
       </div>
  )
  
  export default Navbar