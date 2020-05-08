const Hosts = () => (
    <div className="section" id="organizers" style={{ 'backgroundColor': 'white', 'textAlign': 'center'}}>
      <h2 className="title is-2">Hosts</h2>
      <div className="columns">
        <div className="column">
          <a href="" target="_blank"><img src="../static/calvin.png" alt="" /></a> 
          <p className="title is-5">Calvin</p>
        </div>
        <div className="column">
          <a href="" target="_blank"><img src="../static/allie.png" alt="" /></a> 
          <p className="title is-5">Alex</p> 
        </div>
      </div>
      <style jsx>{`
        .elevator {
          text-align: center;
        }
        .title {
          font-weight: bold;
        }
        img {
          height: 250px;
          width:  250px;
          margin-bottom:10px;
          border-radius: 50%;
        }
      `}</style>
    </div>)
  
  export default Hosts