// import React, { useState } from "react";
// import Signup from "./Signup";
// import StepOnePage from "../Steps/StepOnePage";
// import PublicProfile from "./PublicProfile";
// import InvestorInfo from "./InvestorInfo";
// import InvestorPreferences from "./InvestorPreferences";
// import InvestorIncome from "./InvestorIncome";

// const MainForm = () => {
//   const [page, setPage] = useState(0);

//   const [formData, setFormData] = useState({});

//   const FormTitles = [
//     "Signup",
//     "Investor Info",
//     "Investor Income",
//     "Preferences",
//     "Profile",
//   ];

//   const isPropertyPresent = (propertyName) => {
//     return formData.hasOwnProperty(propertyName);
//     // Or use 'in' operator: return propertyName in formData;
//   };

//   // ...

//   // Example: Check if 'legalName' property is present in formData
//   const isLegalNamePresent = isPropertyPresent("legalName");

//   // Log the result
//   console.log("Is legalName present?", isLegalNamePresent);
//   return (
//     <div className="font-montserrat ">
//       {/* <Navbar/> */}
//       <div className>
//         {page == 0 && <Signup />}
//         {page == 1 && <InvestorInfo />}
//         {page == 2 && (
//           <InvestorIncome formData={formData} setFormData={setFormData} />
//         )}
//         {/* {page == 3 && <StepOnePage />} */}
//         {page == 3 && <InvestorPreferences />}
//         {page == 4 && <PublicProfile />}

//         <div className="flex w-[600px] mt-[-70px] mx-[80px] justify-center items-center ">
//           <button
//             disabled={page == 0}
//             className=" w-[100px] rounded-md text-white bg-[#092635] mx-auto p-2 whitespace-nowrap"
//             onClick={() => {
//               setPage((currPage) => currPage - 1);
//             }}
//           >
//             Prev
//           </button>
//           <span className="font-montserrat font-semibold">
//             {page + 1}/{FormTitles.length}
//           </span>
//           <button
//             className=" w-[100px] rounded-md text-white bg-[#092635] mx-auto p-2  whitespace-nowrap"
//             onClick={() => {
//               if (page === FormTitles.length - 1) {
//                 handleFormSubmit();
//               } else {
//                 setPage((currPage) => currPage + 1);
//               }
//             }}
//           >
//             {page === FormTitles.length - 1 ? "Submit" : "Next"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainForm;
