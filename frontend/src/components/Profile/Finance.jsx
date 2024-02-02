import React, { useState }from 'react';
import cash from './image/cash.png';
import liabilities from './image/liabilities.png';
import valuation from './image/valuation.png';
import revenue from './image/revenue.png';
import loss from './image/loss.png';

const Finance = () => {
  const totalParagraphs = 9;
  const paragraphsToShowInitially = 3;

  const paragraphIndices = Array.from(
    { length: totalParagraphs },
    (_, index) => index
  );
  const [showAll, setShowAll] = useState(false);

  const displayedParagraphs = showAll
    ? paragraphIndices
    : paragraphIndices.slice(0, paragraphsToShowInitially);


  return (
    <>
      <div className='w-[1050px]'>
        {" "}
        <h1 className="font-montserrat mt-16 text-[40px] mb-8">Financials</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          alias accusantium, vero earum cupiditate exercitationem dicta autem
          inventore temporibus nemo nam magnam rem corrupti voluptatibus animi
          blanditiis saepe minima? Quisquam, deserunt placeat. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Pariatur quod esse, quo
          deleniti maiores hic totam consequatur mollitia officiis eius
          perspiciatis nulla necessitatibus magnam? Exercitationem, quibusdam
          explicabo. Eius ipsam suscipit repellat! Ratione, accusamus.
        </p>
      </div>
      <div class="flex mt-8  text-center w-[1080px] justify-around">
        <div class="pr-2 pb-4 text-center">
          <img
            class="inline-block h-16"
            src={revenue}
          />
          <div class="text-sm mt-4 mb-2 justify-center flex">
            ₹0
            <div class="ml-1 wf-tag-l- wf-tag-l-sm"></div>
          </div>
          <span class="text-xs wf-text-dimmer uppercase">Revenue</span>
        </div>

        <div class="pr-2 pb-4 text-center">
          <img
            class="inline-block h-16"
            src={loss}
          />
          <div class="text-sm mt-4 mb-2 justify-center flex">
            -₹26,130
            <div class="ml-1 wf-tag-l- wf-tag-l-sm"></div>
          </div>
          <span class="text-xs wf-text-dimmer uppercase">Net Loss</span>
        </div>

        <div class="pr-2 pb-4 text-center">
          <img
            class="inline-block h-16"
            src={liabilities}
          />
          <div class="text-sm mt-4 mb-2 justify-center flex">
            ₹26,130
            <div class="ml-1 wf-tag-l- wf-tag-l-sm"></div>
          </div>
          <span class="text-xs wf-text-dimmer uppercase">Short-Term Debt</span>
        </div>

        <div class="pr-2 pb-4 text-center">
          <img
            class="inline-block h-16"
            src={valuation}
          />
          <div class="text-sm mt-4 mb-2 justify-center flex">₹0</div>
          <span class="text-xs wf-text-dimmer uppercase">Raised in 2023</span>
        </div>

        <div class="pr-2 pb-4 text-center">
          <img
            class="inline-block h-16"
            src={cash}
          />
          <div class="text-sm mt-4 mb-2 justify-center flex">
            ₹0
            <div class="ml-1 wf-tag-l- wf-tag-l-sm"></div>
          </div>
          <span class="text-xs wf-text-dimmer uppercase">Cash on Hand</span>
        </div>
      </div>
      {/* <div className='w-[1050px]'>
        <h1 className="font-montserrat text-[40px] mt-20 mb-8 ">Risks</h1>
        <div className="mb-8">
          {displayedParagraphs.map((index) => (
            <p className="p-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              repellendus culpa temporibus velit quibusdam neque quis hic
              asperiores eum, debitis ea voluptatum. At consequuntur voluptate
              error laborum fugiat vitae. Atque!
            </p>
          ))}

          {!showAll && totalParagraphs > paragraphsToShowInitially && (
            <button onClick={() => setShowAll(true)}>Show More</button>
          )}
        </div>
      </div> */}

      <div>
        <div class="prose-sm sm:prose font-default">
          <h3 class="mt-16 mb-4 text-lg font-medium">The Board of Directors</h3>
          <table class="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th class="w-1/4 py-2 px-4 border-b text-center">Director</th>
                <th class="py-2 px-4 border-b text-center">Occupation</th>
                <th class="w-1/6 py-2 px-4 border-b text-center">Joined</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">Todd Fiore</td>
                <td class="py-2 px-4 border-b text-center">
                  President & CIO @ Sircles Media Inc
                </td>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">2018</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">
                  Michael Nashick
                </td>
                <td class="py-2 px-4 border-b text-center">Controller @ Tech 2U</td>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">2018</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">Ian Reeder</td>
                <td class="py-2 px-4 border-b text-center">General Manager @ Tech 2U</td>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">2018</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">
                  John Worthington
                </td>
                <td class="py-2 px-4 border-b text-center">CEO @ Sircles Media Inc</td>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">2018</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">
                  Danny Hinkle
                </td>
                <td class="py-2 px-4 border-b text-center">COO @ Sircles Media Inc</td>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">2018</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">
                  Jordan Baldwin
                </td>
                <td class="py-2 px-4 border-b text-center">
                  Founder/Owner @ Ridgeline Engineering
                </td>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">2021</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">
                  Rob Williams
                </td>
                <td class="py-2 px-4 border-b text-center">
                  Founder/Owner @ Williams Broadcasting
                </td>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">2021</td>
              </tr>
            </tbody>
          </table>
          <h3 class="mt-16  mb-4 text-lg font-medium">Officers</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th class="w-1/4 py-2 px-4 border-b text-center">Officer</th>
                <th className="py-2 px-4 border-b text-center">Title</th>
                <th class="w-1/6 py-2 px-4 border-b text-center">Joined</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">Todd Fiore</td>
                <td className="py-2 px-4 border-b text-center">CIO</td>
                <td className="whitespace-nowrap py-2 px-4 border-b text-center">2018</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">Michael Nashick</td>
                <td className="py-2 px-4 border-b text-center">CFO</td>
                <td className="whitespace-nowrap py-2 px-4 border-b text-center">2018</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">Ian Reeder</td>
                <td className="py-2 px-4 border-b text-center">Secretary</td>
                <td className="whitespace-nowrap py-2 px-4 border-b text-center">2018</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">John Worthington</td>
                <td className="py-2 px-4 border-b text-center">CEO</td>
                <td className="whitespace-nowrap py-2 px-4 border-b text-center">2018</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">Danny Hinkle</td>
                <td className="py-2 px-4 border-b text-center">COO</td>
                <td className="whitespace-nowrap py-2 px-4 border-b text-center">2018</td>
              </tr>
            </tbody>
          </table>
          <h3 class="mt-16  mb-4 text-lg font-medium">
            <div class="flex">
              Voting Power
              <div
                data-react-class="shared/wf_tooltip/wf_tooltip"
                data-react-props='{"tooltipHtml":"The voting power calculation includes all securities for which the person directly or indirectly has or shares the voting power, which includes the power to vote or to direct the voting of such securities. If the person has the right to acquire voting power of such securities within 60 days, including through the exercise of any option, warrant or right, the conversion of a security, or other arrangement, or if securities are held by a member of the family, through corporations or partnerships, or otherwise in a manner that would allow a person to direct or control the voting of the securities (or share in such direction or control — as, for example, a co-trustee) they should be included as being beneficially owned. To calculate outstanding voting equity securities, assume all outstanding options are exercised and all outstanding convertible securities converted.","__html":"\u003cspan class=\"fa fa-question-circle ml-1\"\u003e\u003c/span\u003e"}'
                data-react-cache-id="shared/wf_tooltip/wf_tooltip-0"
              >
                <div class="min-w-max inline-block">
                  <span class="trigger">
                    <div>
                      <span
                        class="fa fa-question-circle ml-1"
                        aria-hidden="true"
                      ></span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th class="w-1/4 py-2 px-4 border-b text-center">Holder</th>
                <th className="py-2 px-4 border-b text-center" >Securities Held</th>
                <th class="w-1/6 py-2 px-4 border-b text-center">Power</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">Sandeep Sinha</td>
                <td className="py-2 px-4 border-b text-center">8,600,000 Class A Common</td>
                <td className="whitespace-nowrap py-2 px-4 border-b text-center"> 86.8%</td>
              </tr>
            </tbody>
          </table>
          <h3 class="mt-16  mb-4 text-lg font-medium">Past Fundraises</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th class="w-1/4 py-2 px-4 border-b text-center">Date</th>
                <th className="py-2 px-4 border-b text-center" >Security</th>
                <th class="w-1/6 py-2 px-4 border-b text-center">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">Current</td>
                <td className="py-2 px-4 border-b text-center">SAFE</td>
                <td className="whitespace-nowrap py-2 px-4 border-b text-center">$250</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">Current</td>
                <td className="py-2 px-4 border-b text-center">SAFE</td>
                <td className="whitespace-nowrap py-2 px-4 border-b text-center">$250</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">Current</td>
                <td className="py-2 px-4 border-b text-center">SAFE</td>
                <td className="whitespace-nowrap py-2 px-4 border-b text-center">$250</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">Current</td>
                <td className="py-2 px-4 border-b text-center">SAFE</td>
                <td className="whitespace-nowrap py-2 px-4 border-b text-center">$250</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">Current</td>
                <td className="py-2 px-4 border-b text-center">SAFE</td>
                <td className="whitespace-nowrap py-2 px-4 border-b text-center">$250</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap py-2 px-4 border-b text-center">Current</td>
                <td className="py-2 px-4 border-b text-center">SAFE</td>
                <td className="whitespace-nowrap py-2 px-4 border-b text-center">$250</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Finance
