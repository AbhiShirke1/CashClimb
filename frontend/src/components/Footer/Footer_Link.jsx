import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

const footer_link1 = ["About", "Teams", "Platform", "Financial"]
const footer_link2 = ["Fundraising pricing", "Fundraising accelerator", "Parnters", "Referral Scheme"]
const footer_link3 = ["Privacy Policy", "Terms and Condition", "Contact us", "Reviews", "FAQ", "Blog "]

const Footer_Link = () => {
  return (
    <>
          <div className="footer_link1 w-1/3 relative float-left px-10">
              <ul >
                {
                  footer_link1.map((items) => (
                    <li className='pb-2'>
                      <Link to="/about" className="pb-2 font-Montserrat">
                        {items}
                      </Link>
                    </li>
                  ))
                }
              </ul>
          </div>

          <div className="footer_link2 w-1/2 px-2">
              <ul >
                {
                  footer_link2.map((items) => (
                    <li className='pb-2'>
                      <Link to="/about" className="pb-2 font-Montserrat">
                        {items}
                      </Link>
                    </li>
                  ))
                }
              </ul>
          </div>

          <div className="footer_link3 w-1/2 pl-20">
              <ul >
                {
                  footer_link3.map((items) => (
                    <li className='pb-2'>
                      <Link to="/about" className="pb-2 font-Montserrat">
                        {items}
                      </Link>
                    </li>
                  ))
                }
              </ul>
          </div>
    </>
  )
}

export default Footer_Link
