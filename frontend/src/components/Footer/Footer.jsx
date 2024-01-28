import React from 'react';
import Footer_Link from './Footer_Link';
import Footer_Form from './Footer_Form';
import Footer_Icon from './Footer_Icon';
import './footer.css';

const img_url ="https://assets-global.website-files.com/6218834c85e0406691f22826/62305b0f3a3882d68cd64cdb_Favicon%20256x256%20(1).svg"

const Footer = () => {
  return (

    <>
      <section className=" bg-[#050029] py-11 font-Montserrat flex justify-center items-center">
        <div className="max-w-7xl relative ">
          <div className="footer flex flex-row justify-center mb-16 text-[#9ca3af] ">
            <div className=" float-left w-3/4">
              <div className="uppercase text-lg mb-4 font-bold">Subscribe to our newsletter</div>
              <div className="mb-5 pr-20 font-bold ">
                Enter your email address for regular
                content,tips and giudes
              </div>
              <Footer_Form/>
            </div>
            <Footer_Link/>
            <img src={img_url}
              className="max-w-1/2 absolute bottom-0 right-0 h-24 mt-6" alt=""
            />

    <><div id="features" class="relative py-[80px] bg-white">
    <div class=" items-start pb-[45px] flex flex-col max-w-[1240px] mx-auto font-montserrat">
      <img
        src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218c8458837e56155eb45ff_Pillars.svg"
        loading="lazy"
        alt="6 pillars image"
        class="pr-0 pt-0 absolute max-w-[80%] top-[0%] bottom-auto left-auto right-[0%]"
      />
      <h2 class="text-left pl-0 leading-[60px] static max-w-[940px] mb-[40px] text-[48px] font-bold p-[10px]  text-[#050029]">
        Our simple 6 pillars framework guides you through step by step
      </h2>
    </div>
    <div class="max-w-[1240px] flex flex-col items-center mx-auto pb-0 pl-0 pr-0">
      <img
        src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218c8458837e56155eb45ff_Pillars.svg"
        loading="lazy"
        alt="6 pillars image"
        class="pr-0 pt-0 absolute max-w-[80%] top-[0%] bottom-auto left-auto right-[0%]"
      />
      <div class="w-[100%] max-w-[100%] pt-[0px] pb-[20px] flex justify-between ">
        <div class="pl-0 pr-[20px] object-fill w-[33.33%] float-left min-h-[1px] relative">
          <div class="h-[100%] bg-[#f23d61] rounded-[12px] px-[20px] pt-[20px] pb-[10px] ">
            <h3 class="text-white text-center mb-[24px] text-[32px] font-montserrat font-bold leading-10">
              Raise <br />
              Strategy
            </h3>
            <p class="max-w-[500px] text-white font-montserrat leading-7 text-center  mb-[40px] text-[18px] font-normal">
              Design a clear fundraising plan to capture strategic needs, a
              realistic timeline and budget.
            </p>
          </div>
        </div>
        <div class="pl-0 pr-[20px] object-fill w-[33.33%] float-left min-h-[1px] relative">
          <div class="h-[100%] bg-[#fc8700] rounded-[12px] px-[20px] pt-[20px] pb-[10px]  ">
            <h3 class="text-white text-center font-montserrat mb-[24px] text-[32px]  font-bold leading-10">
              Raise amount &amp; 
              <br />
              valuation  
            </h3>
            <h3 class="max-w-[500px] text-white font-montserrat leading-7  mb-[40px] text-center text-[18px] font-normal">
              Understand how to determine the right level to raise and at
              what valuation.
            </h3>
          </div>
        </div>
        <div class="pl-0 pr-[20px] object-fill w-[33.33%] float-left min-h-[1px] relative">
          <div class="h-[100%] bg-[#fcbb00] rounded-[12px] px-[20px] pt-[20px] pb-[10px]  ">
            <h3 class="text-white text-center font-montserrat mb-[24px] text-[32px] font-bold leading-10">
              Investment <br />
              Landscape
            </h3>
            <h3 class="max-w-[500px] text-white font-montserrat leading-7  mb-[40px] text-center text-[18px] font-normal">
              Learn the different investor types and plan who to approach,
              their benefits and critically, when.
            </h3>
          </div>
        </div>
      </div>
      <div class="w-[100%] max-w-[100%] pt-0 pb-[20px] mx-[-10px] flex justify-between">
        <div class="pl-0 pr-[20px] object-fill w-[33.33%] float-left min-h-[1px] relative">
          <div class="h-[100%] bg-[#1dc275] rounded-[12px] px-[20px] pt-[20px] pb-[10px]  ">
            <h3 class="text-white text-center  font-montserrat mb-[24px] text-[32px] font-bold leading-10">
              Investment <br />
              Materials
            </h3>
            <p class="max-w-[500px] text-white font-montserrat leading-7 mb-[40px] text-center text-[18px] font-normal">
              Know what key investment materials you need, in what format
              and how to create them.
            </p>
          </div>
        </div>
        <div class="pl-0 pr-[20px] object-fill w-[33.33%] float-left min-h-[1px] relative">
          <div class="h-[100%] bg-[#6952ff] rounded-[12px] px-[20px] pt-[20px] pb-[10px] ">
            <h3 class="text-white text-center font-montserrat mb-[24px] text-[32px] font-bold leading-10">
              Pitch <br />
              Preparation
            </h3>
            <h3 class="max-w-[500px] text-white font-montserrat leading-7 mb-[40px] text-center text-[18px] font-normal">
              Create an effective pitch, ensuring investors understand your
              business opportunity.
            </h3>
          </div>
        </div>
        <div class="pl-0 pr-[20px] object-fill w-[33.33%] float-left min-h-[1px] relative">
          <div class="h-[100%] bg-[#bf62d9] rounded-[12px] px-[20px] pt-[20px] pb-[10px] ">
            <h3 class="text-white text-center  font-montserrat mb-[24px] text-[32px] font-bold leading-10">
              Due <br />
              Diligence
            </h3>
            <h3 class="max-w-[500px] text-white font-montserrat leading-7 mb-[40px] text-center text-[18px] font-normal">
              Prepare your complete due diligence dataroom for a swift
              closing process, stress free.
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="features" class="text-center bg-[#f2f2f2] relative py-[80px]">
    <div class="items-start pb-[45px] p-[10px] flex flex-col max-w-[1240px] mx-auto">
      <h2 class="mb-[40px] leading-[58px] text-left  static pl-0 text-[#050029] text-[48px] font-bold font-montserrat ">
        We help aspiring or early stage founders raise their investment
        rounds successfully
      </h2>
      <img
        src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218d8e98c126ff6e571e757_chart.svg"
        loading="lazy"
        alt="Graph image"
        class="text-left z-[1] pl-0 absolute top-[70%] bottom-[0%] left-[6%] max-w-[100%] inline-block align-middle "
      />
      <div class="mx-[-10px] max-w-[1240px] block">
        <div class="w-[75%] float-left min-h-[1px] relative px-[10px]">
          <img
            src="https://assets-global.website-files.com/6218834c85e0406691f22826/6230776f87662b1ef9eff008_iStock-927809432.png"
            loading="lazy"
            sizes="(max-width: 479px) 92vw, (max-width: 767px) 83vw, (max-width: 991px) 68vw, (max-width: 1919px) 73vw, 910px"
            srcset="
            https://assets-global.website-files.com/6218834c85e0406691f22826/6230776f87662b1ef9eff008_iStock-927809432-p-500.png   500w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/6230776f87662b1ef9eff008_iStock-927809432-p-800.png   800w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/6230776f87662b1ef9eff008_iStock-927809432-p-1080.png 1080w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/6230776f87662b1ef9eff008_iStock-927809432-p-1600.png 1600w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/6230776f87662b1ef9eff008_iStock-927809432-p-2000.png 2000w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/6230776f87662b1ef9eff008_iStock-927809432.png        2119w
          "
            alt=""
            class="w-[100%] align-center rounded-[8px] pr-[20px] static max-w-[100%] inline-block"
          />
        </div>
        <div class="w-[25%] float-left min-h-[1px] px-[10px] relative font-montserrat">
          <div class="flex flex-col">
            <div class="w-280 bg-white rounded-lg items-start mb-[16px] pt-[16px] px-[16px] shadow-md pb-[10px] flex flex-col text-left">
              <img
                src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218d78be19ea8f7bd59ce87_academicons_ideas-repec.svg"
                height="40"
                alt="Idea icon"
                class="items-start flex-initial mb-[12px] max-w-[100%] align-middle inline-block"
              />
              <h3 class="text-[#6952ff] uppercase text-[14px] font-bold leading-5 tracking-[1.5px]">
                IDEA
              </h3>
              <h3 class="text-left leading-7 text-[#050029] mb-auto font-bold max-w-[750px] text-[18px]">
                Planning stages
              </h3>
              <h3 class="text-left mb-[24px] text-[18px] leading-7 font-normal max-w-[750px] text-[#050029]">Preparing for the journey</h3>
            </div>
            <div class="w-280 bg-white rounded-lg items-start mb-[16px] pt-[16px] px-[16px] shadow-md pb-[10px] flex flex-col text-left">
              <img
                src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218d72b2c90c37f11c6d850_ion_rocket-outline.svg"
                height="40"
                alt="Rocket icon"
                class="items-start flex-initial mb-[12px] max-w-[100%] align-middle inline-block"
              />
              <h3 class="text-[#6952ff] uppercase text-[14px] font-bold leading-5 tracking-[1.5px]">
                MVP
              </h3>
              <h3 class="text-left leading-7 text-[#050029] mb-auto font-bold max-w-[750px] text-[18px]">
                Pre &amp; Seed funding
              </h3>
              <h3 class="text-left mb-[24px] text-[18px] leading-7 font-normal max-w-[750px] text-[#050029]">Getting ready to Launch</h3>
            </div>
            <div class="w-280 bg-white rounded-lg items-start mb-[16px] pt-[16px] px-[16px] shadow-md pb-[10px] flex flex-col text-left">
              <img
                src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218d3c35b23935150d74481_carbon_autoscaling.svg"
                height="40"
                alt="Scaling icon"
                class="items-start flex-initial mb-[12px] max-w-[100%] align-middle inline-block"
              />
              <h3 class="text-[#6952ff] uppercase text-[14px] font-bold leading-5 tracking-[1.5px]">
                Scaling
              </h3>
              <h3 class="text-left leading-7 text-[#050029] mb-auto font-bold max-w-[750px] text-[18px]">
                Series A+
              </h3>
              <h3 class="text-left mb-[24px] text-[18px] leading-7 font-normal max-w-[750px] text-[#050029]">Finding growth capital</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="features" class="bg-white py-[80px]">
    <div class="max-w-[1240px] flex flex-col items-center pb-0 pl-0 pr-0 mx-auto">
      <div class="w-[100%] h-[100%] bg-[#6952ff] pt-[32px] pb-[32px] pl-[32px] rounded-[8px] flex relative justify-between">
        <div class="flex flex-col">
          <h1 class="rounded-[1px] font-montserrat border-black text-white text-left mt-[16px] pt-[8px] pr-[8px] pb-[8px] font-bold text-[32px] mb-[0.67em]">
            How it works - <br />4 simple steps
          </h1>
          <div class="pb-[24px] flex">
            <img
              src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218dc634d09a262453cbc03_Group%204.svg"
              loading="lazy"
              alt="Bullet point"
              class="pr-[10px]"
            />
            <div class="max-w-[500px] font-montserrat text-white text-left text-[18px] leading-7 tracking-normal font-normal">
              Create your account
            </div>
          </div>
          <div class="pb-[24px] flex">
            <img
              src="https://assets-global.website-files.com/6218834c85e0406691f22826/621cc05f982fbe6e4a814ae9_Group%204%20(1).svg"
              loading="lazy"
              alt="Bullet point"
              class="pr-[10px]"
            />
            <div class="max-w-[500px] font-montserrat text-white text-left text-[18px] leading-7 tracking-normal font-normal">
              Create your fundraise plan
            </div>
          </div>
          <div class="pb-[24px] flex">
            <img
              src="https://assets-global.website-files.com/6218834c85e0406691f22826/621cc08499744ba25c74a509_Group%204%20(2).svg"
              loading="lazy"
              alt="Bullet point"
              class="pr-[10px]"
            />
            <div class="max-w-[500px] font-montserrat text-white text-left text-[18px] leading-7 tracking-normal font-normal">
              Search our dedicated guides for help and tips
            </div>
          </div>
          <div class="pb-[24px] flex">
            <img
              src="https://assets-global.website-files.com/6218834c85e0406691f22826/621cc0ab13d1d2753525771e_Group%205.svg"
              loading="lazy"
              alt="Bullet point"
              class="pr-[10px]"
            />
            <div class="max-w-[500px] font-montserrat text-white text-left text-[18px] leading-7 tracking-normal font-normal">
              Access easy to use tools and other resources
            </div>
          </div>
          <div class="max-w-[620px]  mb-[40px] text-white text-left text-[16px] leading-7 tracking-normal font-normal">
            <strong class="text-white  font-montserrat text-[20px] font-bold">
              Raise with confidence!
            </strong>
          </div>
          <a
            href="https://app.fundinghero.co.uk/registration?utm_source=website"
            target="_blank"
            class="max-w-[400px] tracking-[1px] font-montserrat font-medium  bg-[white] text-[#6952ff] text-[20px] mr-[14px] px-[24px] py-[32px] rounded-[6px] text-center leading-[30px] border-transparent border-0 border-solid shadow-md inline-block "
          >
            Sign up
          </a>
        </div>
        <div>
          <img
            src="https://assets-global.website-files.com/6218834c85e0406691f22826/621cbcb0583807f06d411b86_Dashboard%20mockup.png"
            loading="lazy"
            width="400"
            sizes="(max-width: 479px) 37vw, (max-width: 767px) 47vw, (max-width: 991px) 28vw, 400px"
            alt="Dashboard mockup"
            srcset="
            https://assets-global.website-files.com/6218834c85e0406691f22826/621cbcb0583807f06d411b86_Dashboard%20mockup-p-500.png   500w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/621cbcb0583807f06d411b86_Dashboard%20mockup-p-800.png   800w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/621cbcb0583807f06d411b86_Dashboard%20mockup-p-1080.png 1080w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/621cbcb0583807f06d411b86_Dashboard%20mockup.png        1620w
          "
            class=" w-[400px] absolute top-[15%] left-auto bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  </div>
      <section className="bg-[#050029] py-11 font-Montserrat flex justify-center items-center">
          <div className="max-w-7xl relative ">
                    <div className="flex flex-row justify-center mb-16 text-[#9ca3af]  ">
                              <div className="float-left relative  w-3/4">
                                        <div className="uppercase text-lg mb-4 font-bold">Subscribe to our newsletter</div>
                                        <div className="mb-5 pr-20 font-bold ">
                                                  Enter your email address for regular
                                                  content,tips and giudes
                                        </div>
                                        <div className="w-3/4 mb-4 ">
                                                  <form action="">
                                                            <input type="email" 
                                                            className="w-3/5 h-10 float-left bg-[#e8e8e8] border border-solid border-transparent p-4
                                                                   rounded-l-md" 
                                                            placeholder="Enter your email"/>
                                                            <button type="submit" className="w-2/5 h-10 bg-[#6952ff] text-white rounded-r-md">
                                                                      Subscribe
                                                            </button>
                                                  </form>
                                        </div>
                              </div>

                              <div className="w-1/3 relative float-left px-10">
                                        <ul >
                                        { 
                                                  footer_link1.map((items)=>(
                                                            <li className='pb-2'>
                                                                      <Link to="/about" className="pb-2 font-Montserrat">
                                                                      {items}   
                                                                      </Link>
                                                            </li>
                                                  
                                                  ))
                                        }   
                                        </ul>
                              </div>
                              
                              <div className="w-1/2 px-2">
                                        <ul >
                                        { 
                                                  footer_link2.map((items)=>(
                                                            <li className='pb-2'>
                                                                      <Link to="/about" className="pb-2 font-Montserrat">
                                                                      {items}   
                                                                      </Link>
                                                            </li>
                                                  
                                                  ))
                                        }   
                                        </ul>
                              </div>

                              <div className="w-1/2 pl-20">
                                        <ul >
                                        { 
                                                  footer_link3.map((items)=>(
                                                            <li className='pb-2'>
                                                                      <Link to="/about" className="pb-2 font-Montserrat">
                                                                      {items}   
                                                                      </Link>
                                                            </li>
                                                  
                                                  ))
                                        }   
                                        </ul>
                              </div>
                              
                              <img src="https://assets-global.website-files.com/6218834c85e0406691f22826/62305b0f3a3882d68cd64cdb_Favicon%20256x256%20(1).svg" 
                              className="max-w-1/2 absolute bottom-0 right-0 h-24 mt-6" alt=""/>
                    </div>
                    <div className='flex space-x-6 fill-[#e8e8e8]'>
                    {
                              social_icons.map((items)=>(
                                        <>{items.icon}</>
                              
                              ))
                    } 
                    </div>

          </div>
          <Footer_Icon/>
        </div>
      </section>
    </>
  )
}

export default Footer
