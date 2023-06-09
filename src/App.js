import { useEffect } from "react";
import "./FrameComponent.css";
import logo from './../public/images/logonew.png'
const App = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="image-1-parent" data-animate-on-scroll>
      <img className="image-1-icon" alt="" src="logo" />
      <img className="image-2-icon" alt="" src="/image-2@2x.png" />
      <div className="frame-child" />
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
      <img className="frame-item" alt="" src="/rectangle-2.svg" />
      <div className="frame-inner" />
      <div className="contact-us">Contact-us</div>
      <div className="rectangle-div" />
      <div className="about-us1">About-us</div>
      <div className="redivivus">
        <p className="about-us">&nbsp;</p>
        <p className="about-us">&nbsp;</p>
        <p className="about-us">&nbsp;</p>
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
      <div className="redivivus-technology-private-container">
        <p className="about-us">
          <b className="redivivus-technology-private">
            Redivivus Technology Private Limited
          </b>
          <span>
            {" "}
            is a software product development and services company, serving its
            customer and clients from its global delivary centre in Pune,India.
          </span>
        </p>
        <p className="about-us">
          Redivius is focused to develop the various technical solutions for
          industrial automation, printing and inspection , image processing,data
          management.a software product development and services company,
          serving its customer and clients from its global delivary centre in
          Pune,India.
        </p>
        <p className="about-us">
          Redivius is focused to develop the various technical solutions for
          industrial automation, printing and inspection , image processing,data
          management.a software product development and services company,
          serving its customer and clients from its global delivary centre in
          Pune,India.
        </p>
        <p className="about-us">{`Redivius is focused to develop the various technical solutions for industrial automation, printing and inspection , image processing,data management.a software `}</p>
      </div>
      <img
        className="fb-removebg-preview-1-icon"
        alt=""
        src="/fbremovebgpreview-1@2x.png"
      />
      <img className="logor-1-icon" alt="" src="/logor-1@2x.png" />
      <b className="products">Products</b>
      <div className="frame-child1" />
      <div className="english">English</div>
      <div className="already-a-customer-container">
        <p className="about-us">
          <span>
            <span className="already-a-customer">
              {" "}
              Already a customer? Sign in
            </span>
          </span>
        </p>
        <p className="about-us">
          <span>
            <span className="already-a-customer">&nbsp;</span>
          </span>
        </p>
        <p className="about-us">
          <span>
            <span>Condition of use privacy Notice Interest-Based ads</span>
          </span>
        </p>
        <p className="about-us">
          <span>
            <span>{`                     `}</span>
          </span>
          <span>
            <span className="redivivus-inc1"> 2022 Redivivus Inc</span>
            <span className="span">.</span>
          </span>
        </p>
      </div>
      <img
        className="hrms-1-icon"
        alt=""
        src="/hrms-1@2x.png"
        data-animate-on-scroll
      />
      <b className="connect">Connect</b>
    </div>
  );
};

export default App;
