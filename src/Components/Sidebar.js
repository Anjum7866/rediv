import "./Sidebar.css";
import logo from "../images/logonew.png";
import social from "../images/social.png";

const Sidebar = () => {
  return (
    <div className="desktop-1">
      <div className="desktop-1-child" />
      <img  className="fb-removebg-preview-2-icon" alt="social" src={social} />
      <b className="connect">Connect</b>
      <div className="about-us-sitemap-container">
        <p className="about-us">About Us</p>
        <p className="about-us">Sitemap</p>
        <p className="about-us">Privacy Policy</p>
      </div>
      <b className="about">About</b>
      <div className="dot-net-development-container">
        <p className="about-us">Dot Net Development</p>
        <p className="about-us">Web System Development</p>
        <p className="about-us">Mobile Development</p>
        <p className="about-us">Consultancy Services</p>
        <p className="about-us">Industry Services</p>
      </div>
      <div className="servicess">
        <span>Services</span>
       </div>
      <div className="iprint-wimart-warehouse-container">
        <p className="about-us">iPRINT</p>
        <p className="about-us">wimaRT Warehouse item</p>
        <p className="about-us">Management system</p>
        <p className="about-us">Real Time Tracking System</p>
        <p className="about-us">Batch Process Automizer system</p>
        <p className="about-us">Reosys Billing System</p>
        <p className="about-us">Reosys Inventory System</p>
        <p className="about-us">Parking Automation</p>
        <p className="about-us">Reosys Complete ERP</p>
        <p className="about-us">HRMS</p>
      </div>
      <div className="product">Product</div>
      <div className="redivivus">Redivivus</div>
      <img className="logor-2-icon" alt="logo" src={logo} />
    </div>
  );
};

export default Sidebar;
