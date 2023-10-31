import React from "react";
import data, { pageLinks, socialLinks } from "../data.js";

const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
              <li key={id}>
                <a href={href} class="footer-link">
                  {text}
                </a>
              </li>
             
          );
        })}
      </ul>
      <ul class="footer-icons">
        {socialLinks.map((link)=>{
          const{id,href,icon}=link;
          return(
            <li key={id}>
            <a href={href} target="_blank" class="footer-icon">
              <i class={icon}></i>
            </a>
          </li>
          )
        })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
