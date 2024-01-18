import React from 'react';
import './footer.css';

const Footer_Form = () => {
  return (
    <>
          <div className="w-3/4 mb-4 ">
                <form action="">
                  <input type="email"
                    className="w-3/5 h-10 float-left bg-[#e8e8e8] border border-solid border-transparent p-4
                    rounded-l-md"
                    placeholder="Enter your email" />
                  <button type="submit" className="w-2/5 h-10 bg-[#6952ff] text-white rounded-r-md">
                    Subscribe
                  </button>
                </form>
          </div>
    </>
  )
}

export default Footer_Form
