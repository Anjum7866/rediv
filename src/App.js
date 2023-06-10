<<<<<<< Updated upstream
import './App.css';
import Layout from './pages/Layout';
=======
import { useEffect } from "react";
import "./FrameComponent.css";
import logo from './images/logonew.png';

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
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
