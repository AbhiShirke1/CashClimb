import React from "react";

const Modal = ({ handleClick }) => {
  return (
    <div>
      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Terms & Conditions
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal"
                onClick={handleClick}
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>

            <div class="p-4 md:p-5 space-y-4">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Investors engaging in CashClimb powered investment round
                will contribute a specified amount to secure an equity stake in
                the company. The equity distribution will be determined based on
                the pre and post-money valuations, ensuring a fair
                representation of ownership. Investment terms cover various
                aspects, including dividends, liquidation preferences, voting
                rights, and information disclosure, fostering transparency and
                aligning investor interests with the startup's growth. The
                agreement outlines founder commitments, potential board
                representation, and exit strategies, providing a comprehensive
                framework for collaboration. Confidentiality clauses, compliance
                with securities laws, and a defined governing law contribute to
                a legally sound and mutually beneficial investment environment.
                The terms seek to protect both parties' interests, providing a
                foundation for a successful partnership and potential future
                success. Keep in mind that this concise overview may need
                further refinement based on the specifics of your startup and
                legal requirements. It's crucial to seek professional legal
                advice to ensure the document aligns with your startup's unique
                needs and local regulations.
              </p>
            </div>

            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="static-modal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
