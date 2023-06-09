import "./App.css";
import logo from './images/logonew.png';
import social from './images/social.png';

const App = () => {
  return (
    <div className="desktop-1">
      <div className="desktop-1-child" alt="" src="/rectangle-1.svg" ></div>
      <div className="about-us-sitemap-container">
        <p className="about-us">About Us</p>
        <p className="about-us">Sitemap</p>
        <p className="about-us">Privacy Policy</p>
      </div>
      <b className="about">About</b>
      <div className="servicess">
        <span>Services</span>
        <span className="s">s</span>
      </div>
      <div className="iprint-wimart-warehouse-container">
        <p className="about-us">iPRINT</p>
        <p className="about-us">wimaRT Warehouse item</p>
        <p className="about-us">Management system</p>
        <p className="about-us">Real Time Tracking System</p>
        <p className="about-us">Batch Process Automizer system</p>
        <p className="about-us">Reosys Billing System</p>
        <p className="about-us">Reosys Invntory System</p>
        <p className="about-us">Parking Automation</p>
        <p className="about-us">Reosys Complete ERP</p>
        <p className="about-us">HRMS</p>
      </div>
      <div className="redivivus" style={{marginTop:10}}>
        <p className="about-us">Redivivus</p>
      </div>
      <div className="product">Product</div>
      <div className="dot-net-development-container">
        <p className="about-us">Dot Net Development</p>
        <p className="about-us">Web System Development</p>
        <p className="about-us">Mobile Development</p>
        <p className="about-us">Consultancy Services</p>
        <p className="about-us">Industry Services</p>
      </div>
      <img className="fb-removebg-preview-1-icon" src={social} alt="Social" />;
      <img className="logor-1-icon" alt="logo" src={logo} />
      <b className="connect">Connect</b>
     
    </div>
  );
};

export default App;
