import React from "react";
import icon1 from './img/icon-email.svg';
import icon2 from './img/icon-location.svg';
import icon3 from './img/icon-phone.svg';
import face from './img/facebook-f.svg';
import twitter from './img/twitter.svg';
import instagram from './img/instagram.svg';



export default function Rodape(props) {
   return (
    <footer>
        <div className="rodape-container">
           <section className="radape-item1">
            <div className="logo">
              <img src={props.footerLogo} alt="logo"></img>
            </div>
            <div className="row-rodape-0">
            <div className="rowItem">
                <div className="img-icon">
                <img src={icon2} alt="icon"></img>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua</p>
              </div>
              <div className="rowItem">
              <div className="img-icon">
                <img src={icon3} alt="icon"></img>
                </div>
                <p>+1-543-123-4567</p>
              </div>
              <div className="rowItem">
              <div className="img-icon">
                <img src={icon1} alt="icon"></img>
                </div>
                <p>example@huddle.com</p>
              </div>
            </div>
           </section>
           <section className="radape-item2">
            <ul>
            <li>About Us</li>
            <li> What We Do</li>
            <li>FAQ</li>
            </ul>
           </section>
           <section className="radape-item3">
            <ul>
             <li>Career</li>
             <li> Blog</li>
             <li>Contact Us</li>
            </ul>
           </section>
           <section className="radape-item4">
              <div className="row-icons">
                <div className="icon">
                  <img src={face} className="face"></img>
                </div>
                <div className="icon">
                 <img src={instagram}></img>
                </div>
                <div className="icon">
                <img src={twitter}></img>
                
                </div>
              </div>
              <p className="copyright">&copy; Copyright 2018 Huddle. All rights reserved.</p>
           </section>
        </div>
    </footer>
   )
}