const Navbar = (props) => (

    <div className= "navbar">
      <nav className ="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#hosts">Organizers</a>
        </div>
        <div className="navbar-end">
         {<a className="navbar-item" href="https://www.facebook.com/TheWRKFLW/?view_public_for=104958307569236" target="_blank">Facebook</a>}
        </div>
        <div className="navbar-item">
          <div className="field is-separated">
  <p className="control">
              <a
                className="button is-white"
                href="#signup">
                <span>Subscribe</span>
              </a>
  </p>
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