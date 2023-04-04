import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate=useNavigate();

  const click=() => {
    navigate('/Home');
  }

  const lineStyle = {
    display: "inline-block",
    width: "1cm",
    height: "1px",
    background: "#000",
    margin: "10px 10px 10px 0"
  };

  return (
    
    <div className="page">
      <div  className="left-pane" >
        <div>
          <br/><br/>
          <h3><strong>Sign In</strong></h3><br />
          <h4>new user?<Link>create an account</Link> </h4>
          
          <div>
            <input type="text" placeholder="Usename or email"/>
          </div>
          <br />
          <div>
            <input type="password" placeholder="password"/>
          </div><br />
          <div>
            <input type="checkbox" />
            Keep me signed in
          </div><br/>
          <div>
            <button style={{ padding: '10px 70px',backgroundColor: 'black',color: 'white'}} onClick={click}>Sign In</button>
          </div><br/>
          <div style={{display: 'inline-block'}}>
            <div style={lineStyle}></div>
            <p style={{display: 'inline-block', margin: '10px'}}>Or Sign In with</p>
            <div style={lineStyle}></div>
          </div>
          <div>
          <span className="fa fa-facebook"></span>
          <span className="fa fa-linkedin" style={{margin: '0 14px'}}></span>
           <span className="fa fa-google" style={{margin: '0 14px'}}></span>
          <span className="fa fa-twitter" style={{margin: '0 14px'}}></span>

          </div>

        </div>
      </div>
      <div className="right-pane"> 
        <img src='image.png' alt=''/>
      </div>

      
    </div>
  )
}

export default Login;
