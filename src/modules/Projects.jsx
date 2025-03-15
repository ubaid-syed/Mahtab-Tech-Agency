// // // // // // // import React from "react";
// // // // // // // import "./Projects.css"; // Assuming you want to add your styles in Projects.css or any other CSS file
// // // // // // // import { FiArrowUpRight } from "react-icons/fi";
// // // // // // // const Projects = () => {
// // // // // // //   const companies = [
// // // // // // //     {
// // // // // // //       name: "Trust & Co.",
// // // // // // //       description:
// // // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // // //       imageUrl:
// // // // // // //         "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       tags: ["branding", "packaging"],
// // // // // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Tonic",
// // // // // // //       description:
// // // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // // //       imageUrl:
// // // // // // //         "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       tags: ["branding", "marketing"],
// // // // // // //       tagColors: ["#d3b19a", "#d05fa2"],
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Shower Gel",
// // // // // // //       description:
// // // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // // //       imageUrl:
// // // // // // //         "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       tags: ["branding", "packaging", "marketing"],
// // // // // // //       tagColors: ["#d3b19a", "#70b3b1", "#d05fa2"],
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <section className="trusted-companies">
// // // // // // //       <h2>
// // // // // // //         leading companies
// // // // // // //         <br />
// // // // // // //         have trusted us
// // // // // // //       </h2>
// // // // // // //       <div className="trusted-companies__container">
// // // // // // //         {companies.map((company, index) => (
// // // // // // //           <div className="trusted-companies__card" key={index}>
// // // // // // //             <div
// // // // // // //               className="trusted-companies__card-inner"
// // // // // // //               style={{ "--clr": "#fff" }}
// // // // // // //             >
// // // // // // //               <div className="trusted-companies__box">
// // // // // // //                 <div className="trusted-companies__imgBox">
// // // // // // //                   <img src={company.imageUrl} alt={company.name} />
// // // // // // //                 </div>
// // // // // // //                 <div className="trusted-companies__icon">
// // // // // // //                   <a href="#" className="trusted-companies__iconBox">
// // // // // // //                     <span className="material-symbols-outlined">
// // // // // // //                       <FiArrowUpRight />
// // // // // // //                     </span>
// // // // // // //                   </a>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //             <div className="trusted-companies__content">
// // // // // // //               <h3>{company.name}</h3>
// // // // // // //               <p>{company.description}</p>
// // // // // // //               <ul>
// // // // // // //                 {company.tags.map((tag, idx) => (
// // // // // // //                   <li
// // // // // // //                     key={idx}
// // // // // // //                     style={{ "--clr-tag": company.tagColors[idx] }}
// // // // // // //                     className={`trusted-companies__tag ${tag}`}
// // // // // // //                   >
// // // // // // //                     {tag}
// // // // // // //                   </li>
// // // // // // //                 ))}
// // // // // // //               </ul>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Projects;

// // // // // // import React, { useState } from "react";
// // // // // // import "./Projects.css"; // Assuming you want to add your styles in Projects.css or any other CSS file
// // // // // // import { FiArrowUpRight } from "react-icons/fi";
// // // // // // import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// // // // // // const Projects = () => {
// // // // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // // // //   const companies = [
// // // // // //     {
// // // // // //       name: "Trust & Co.",
// // // // // //       description:
// // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // //       imageUrl:
// // // // // //         "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // //       tags: ["branding", "packaging"],
// // // // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Tonic",
// // // // // //       description:
// // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // //       imageUrl:
// // // // // //         "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // //       tags: ["branding", "marketing"],
// // // // // //       tagColors: ["#d3b19a", "#d05fa2"],
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Shower Gel",
// // // // // //       description:
// // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // //       imageUrl:
// // // // // //         "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // //       tags: ["branding", "packaging", "marketing"],
// // // // // //       tagColors: ["#d3b19a", "#70b3b1", "#d05fa2"],
// // // // // //     },
// // // // // //   ];

// // // // // //   // Function to move to the previous project
// // // // // //   const prevProject = () => {
// // // // // //     setCurrentIndex((prevIndex) =>
// // // // // //       prevIndex === 0 ? companies.length - 1 : prevIndex - 1
// // // // // //     );
// // // // // //   };

// // // // // //   // Function to move to the next project
// // // // // //   const nextProject = () => {
// // // // // //     setCurrentIndex((prevIndex) =>
// // // // // //       prevIndex === companies.length - 1 ? 0 : prevIndex + 1
// // // // // //     );
// // // // // //   };

// // // // // //   return (
// // // // // //     <section className="trusted-companies">
// // // // // //       <h2>
// // // // // //         leading companies
// // // // // //         <br />
// // // // // //         have trusted us
// // // // // //       </h2>
// // // // // //       <div className="trusted-companies__container">
// // // // // //         <div className="carousel">
// // // // // //           <div
// // // // // //             className="carousel__wrapper"
// // // // // //             style={{
// // // // // //               transform: `translateX(-${currentIndex * 100}%)`,
// // // // // //               transition: "transform 0.5s ease-in-out",
// // // // // //             }}
// // // // // //           >
// // // // // //             {companies.map((company, index) => (
// // // // // //               <div className="trusted-companies__card" key={index}>
// // // // // //                 <div
// // // // // //                   className="trusted-companies__card-inner"
// // // // // //                   style={{ "--clr": "#fff" }}
// // // // // //                 >
// // // // // //                   <div className="trusted-companies__box">
// // // // // //                     <div className="trusted-companies__imgBox">
// // // // // //                       <img src={company.imageUrl} alt={company.name} />
// // // // // //                     </div>
// // // // // //                     <div className="trusted-companies__icon">
// // // // // //                       <a href="#" className="trusted-companies__iconBox">
// // // // // //                         <span className="material-symbols-outlined">
// // // // // //                           <FiArrowUpRight />
// // // // // //                         </span>
// // // // // //                       </a>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <div className="trusted-companies__content">
// // // // // //                   <h3>{company.name}</h3>
// // // // // //                   <p>{company.description}</p>
// // // // // //                   <ul>
// // // // // //                     {company.tags.map((tag, idx) => (
// // // // // //                       <li
// // // // // //                         key={idx}
// // // // // //                         style={{ "--clr-tag": company.tagColors[idx] }}
// // // // // //                         className={`trusted-companies__tag ${tag}`}
// // // // // //                       >
// // // // // //                         {tag}
// // // // // //                       </li>
// // // // // //                     ))}
// // // // // //                   </ul>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //           {/* Carousel arrows */}
// // // // // //           <div className="carousel__arrow carousel__arrow--left" onClick={prevProject}>
// // // // // //             <FaArrowLeft />
// // // // // //           </div>
// // // // // //           <div className="carousel__arrow carousel__arrow--right" onClick={nextProject}>
// // // // // //             <FaArrowRight />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Projects;

// // // // // import React, { useState } from "react";
// // // // // import "./Projects.css";
// // // // // import { FiArrowUpRight } from "react-icons/fi";
// // // // // import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// // // // // const Projects = () => {
// // // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // // //   const companies = [
// // // // //     {
// // // // //       name: "Trust & Co.",
// // // // //       description:
// // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // //       imageUrl:
// // // // //         "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       tags: ["branding", "packaging"],
// // // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // // //     },
// // // // //     {
// // // // //       name: "Tonic",
// // // // //       description:
// // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // //       imageUrl:
// // // // //         "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       tags: ["branding", "marketing"],
// // // // //       tagColors: ["#d3b19a", "#d05fa2"],
// // // // //     },
// // // // //     {
// // // // //       name: "Shower Gel",
// // // // //       description:
// // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // //       imageUrl:
// // // // //         "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       tags: ["branding", "packaging", "marketing"],
// // // // //       tagColors: ["#d3b19a", "#70b3b1", "#d05fa2"],
// // // // //     },
// // // // //   ];

// // // // //   // Function to move to the previous project
// // // // //   const prevProject = () => {
// // // // //     setCurrentIndex((prevIndex) =>
// // // // //       prevIndex === 0 ? companies.length - 3 : prevIndex - 1
// // // // //     );
// // // // //   };

// // // // //   // Function to move to the next project
// // // // //   const nextProject = () => {
// // // // //     setCurrentIndex((prevIndex) =>
// // // // //       prevIndex === companies.length - 3 ? 0 : prevIndex + 1
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <section className="trusted-companies">
// // // // //       <h2>
// // // // //         leading companies
// // // // //         <br />
// // // // //         have trusted us
// // // // //       </h2>
// // // // //       {/* Arrows outside the carousel */}
// // // // //       <div className="carousel__arrows">
// // // // //         <div
// // // // //           className="carousel__arrow carousel__arrow--left"
// // // // //           onClick={prevProject}
// // // // //         >
// // // // //           <FaArrowLeft />
// // // // //         </div>
// // // // //         <div
// // // // //           className="carousel__arrow carousel__arrow--right"
// // // // //           onClick={nextProject}
// // // // //         >
// // // // //           <FaArrowRight />
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="trusted-companies__container">
// // // // //         <div className="carousel">
// // // // //           <div
// // // // //             className="carousel__wrapper"
// // // // //             style={{
// // // // //               transform: `translateX(-${currentIndex * (100 / 3)}%)`, // Show 3 items at once
// // // // //               transition: "transform 0.5s ease-in-out",
// // // // //             }}
// // // // //           >
// // // // //             {companies.map((company, index) => (
// // // // //               <div className="trusted-companies__card" key={index}>
// // // // //                 <div
// // // // //                   className="trusted-companies__card-inner"
// // // // //                   style={{ "--clr": "#fff" }}
// // // // //                 >
// // // // //                   <div className="trusted-companies__box">
// // // // //                     <div className="trusted-companies__imgBox">
// // // // //                       <img src={company.imageUrl} alt={company.name} />
// // // // //                     </div>
// // // // //                     <div className="trusted-companies__icon">
// // // // //                       <a href="#" className="trusted-companies__iconBox">
// // // // //                         <span className="material-symbols-outlined">
// // // // //                           <FiArrowUpRight />
// // // // //                         </span>
// // // // //                       </a>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <div className="trusted-companies__content">
// // // // //                   <h3>{company.name}</h3>
// // // // //                   <p>{company.description}</p>
// // // // //                   <ul>
// // // // //                     {company.tags.map((tag, idx) => (
// // // // //                       <li
// // // // //                         key={idx}
// // // // //                         style={{ "--clr-tag": company.tagColors[idx] }}
// // // // //                         className={`trusted-companies__tag ${tag}`}
// // // // //                       >
// // // // //                         {tag}
// // // // //                       </li>
// // // // //                     ))}
// // // // //                   </ul>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Projects;

// // // // import React, { useState } from "react";
// // // // import "./Projects.css";
// // // // import { FiArrowUpRight } from "react-icons/fi";
// // // // import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// // // // const Projects = () => {
// // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // //   const companies = [
// // // //     {
// // // //       name: "Trust & Co.",
// // // //       description:
// // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // //       imageUrl:
// // // //         "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // //       tags: ["branding", "packaging"],
// // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // //     },
// // // //     {
// // // //       name: "Tonic",
// // // //       description:
// // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // //       imageUrl:
// // // //         "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // //       tags: ["branding", "marketing"],
// // // //       tagColors: ["#d3b19a", "#d05fa2"],
// // // //     },
// // // //     {
// // // //       name: "Shower Gel",
// // // //       description:
// // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // //       imageUrl:
// // // //         "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // //       tags: ["branding", "packaging", "marketing"],
// // // //       tagColors: ["#d3b19a", "#70b3b1", "#d05fa2"],
// // // //     },
// // // //     {
// // // //       name: "Trust & Co.",
// // // //       description:
// // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // //       imageUrl:
// // // //         "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // //       tags: ["branding", "packaging"],
// // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // //     },
// // // //     {
// // // //       name: "Tonic",
// // // //       description:
// // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // //       imageUrl:
// // // //         "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // //       tags: ["branding", "marketing"],
// // // //       tagColors: ["#d3b19a", "#d05fa2"],
// // // //     },
// // // //     {
// // // //       name: "Shower Gel",
// // // //       description:
// // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // //       imageUrl:
// // // //         "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // //       tags: ["branding", "packaging", "marketing"],
// // // //       tagColors: ["#d3b19a", "#70b3b1", "#d05fa2"],
// // // //     },
// // // //   ];

// // // //   // Function to move to the previous project
// // // //   const prevProject = () => {
// // // //     setCurrentIndex((prevIndex) =>
// // // //       prevIndex === 0 ? companies.length - 3 : prevIndex - 1
// // // //     );
// // // //   };

// // // //   // Function to move to the next project
// // // //   const nextProject = () => {
// // // //     setCurrentIndex((prevIndex) =>
// // // //       prevIndex === companies.length - 3 ? 0 : prevIndex + 1
// // // //     );
// // // //   };

// // // //   return (
// // // //     <section className="trusted-companies">
// // // //       <h2>
// // // //         leading companies
// // // //         <br />
// // // //         have trusted us
// // // //       </h2>

// // // //       {/* Arrows positioned outside the carousel */}
// // // //       <div className="carousel__arrows">
// // // //         <div
// // // //           className="carousel__arrow carousel__arrow--left"
// // // //           onClick={prevProject}
// // // //         >
// // // //           <FaArrowLeft />
// // // //         </div>
// // // //         <div
// // // //           className="carousel__arrow carousel__arrow--right"
// // // //           onClick={nextProject}
// // // //         >
// // // //           <FaArrowRight />
// // // //         </div>
// // // //       </div>

// // // //       <div className="trusted-companies__container">
// // // //         <div className="carousel">
// // // //           <div
// // // //             className="carousel__wrapper"
// // // //             style={{
// // // //               transform: `translateX(-${(currentIndex * 100) / 3}%)`, // Show 3 items at once
// // // //               transition: "transform 0.5s ease-in-out",
// // // //             }}
// // // //           >
// // // //             {companies.map((company, index) => (
// // // //               <div className="trusted-companies__card" key={index}>
// // // //                 <div
// // // //                   className="trusted-companies__card-inner"
// // // //                   style={{ "--clr": "#fff" }}
// // // //                 >
// // // //                   <div className="trusted-companies__box">
// // // //                     <div className="trusted-companies__imgBox">
// // // //                       <img src={company.imageUrl} alt={company.name} />
// // // //                     </div>
// // // //                     <div className="trusted-companies__icon">
// // // //                       <a href="#" className="trusted-companies__iconBox">
// // // //                         <span className="material-symbols-outlined">
// // // //                           <FiArrowUpRight />
// // // //                         </span>
// // // //                       </a>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="trusted-companies__content">
// // // //                   <h3>{company.name}</h3>
// // // //                   <p>{company.description}</p>
// // // //                   <ul>
// // // //                     {company.tags.map((tag, idx) => (
// // // //                       <li
// // // //                         key={idx}
// // // //                         style={{ "--clr-tag": company.tagColors[idx] }}
// // // //                         className={`trusted-companies__tag ${tag}`}
// // // //                       >
// // // //                         {tag}
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Projects;

// // // // // .trusted-companies {
// // // // //   padding-block: min(20vh, 2rem);
// // // // //   width: calc(min(76.5rem, 90%));
// // // // //   margin-inline: auto;
// // // // //   color: #111;

// // // // //   h2 {
// // // // //     text-transform: capitalize;
// // // // //     letter-spacing: 0.025em;
// // // // //     font-size: clamp(2rem, 1.8125rem + 0.75vw, 2.6rem);
// // // // //   }

// // // // //   a {
// // // // //     display: inline-block;
// // // // //     text-decoration: none;
// // // // //   }

// // // // //   .trusted-companies__container {
// // // // //     margin-top: 5em;
// // // // //     display: grid;
// // // // //     grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
// // // // //     gap: 2rem;

// // // // //     .trusted-companies__card {
// // // // //       &:nth-child(1) .trusted-companies__box .trusted-companies__icon .trusted-companies__iconBox {
// // // // //         background: #d3b19a;
// // // // //       }
// // // // //       &:nth-child(2) .trusted-companies__box .trusted-companies__icon .trusted-companies__iconBox {
// // // // //         background: #70b3b1;
// // // // //       }
// // // // //       &:nth-child(3) .trusted-companies__box .trusted-companies__icon .trusted-companies__iconBox {
// // // // //         background: #d05fa2;
// // // // //       }

// // // // //       ul {
// // // // //         margin: 0;
// // // // //         padding: 0;
// // // // //         list-style-type: none;
// // // // //         display: flex;
// // // // //         align-items: center;
// // // // //         flex-wrap: wrap;
// // // // //         gap: 0.625rem;

// // // // //         li {
// // // // //           text-transform: uppercase;
// // // // //           background: var(--clr-tag);
// // // // //           color: #282828;
// // // // //           font-weight: 700;
// // // // //           font-size: 0.8rem;
// // // // //           padding: 0.375rem 0.625rem;
// // // // //           border-radius: 0.188rem;
// // // // //         }

// // // // //         .trusted-companies__tag.branding {
// // // // //           color: darken(#d3b19a, 40%);
// // // // //         }

// // // // //         .trusted-companies__tag.packaging {
// // // // //           color: darken(#70b3b1, 40%);
// // // // //         }

// // // // //         .trusted-companies__tag.marketing {
// // // // //           color: darken(#d05fa2, 40%);
// // // // //         }
// // // // //       }

// // // // //       .trusted-companies__content {
// // // // //         padding: 0.938rem 0.625rem;

// // // // //         h3 {
// // // // //           text-transform: capitalize;
// // // // //           font-size: clamp(1.5rem, 1.3909rem + 0.4364vw, 1.8rem);
// // // // //         }

// // // // //         p {
// // // // //           margin: 0.625rem 0 1.25rem;
// // // // //           color: #565656;
// // // // //         }
// // // // //       }
// // // // //     }

// // // // //     .trusted-companies__card-inner {
// // // // //       position: relative;
// // // // //       width: inherit;
// // // // //       height: 18.75rem;
// // // // //       background: var(--clr);
// // // // //       border-radius: 1.25rem;
// // // // //       border-bottom-right-radius: 0;
// // // // //       overflow: hidden;

// // // // //       .trusted-companies__box {
// // // // //         width: 100%;
// // // // //         height: 100%;
// // // // //         background: #000;
// // // // //         border-radius: 1.25rem;
// // // // //         overflow: hidden;

// // // // //         .trusted-companies__imgBox {
// // // // //           position: absolute;
// // // // //           inset: 0;

// // // // //           img {
// // // // //             width: 100%;
// // // // //             height: 100%;
// // // // //             object-fit: cover;
// // // // //           }
// // // // //         }

// // // // //         .trusted-companies__icon {
// // // // //           position: absolute;
// // // // //           bottom: -0.375rem;
// // // // //           right: -0.375rem;
// // // // //           width: 6rem;
// // // // //           height: 6rem;
// // // // //           background: var(--clr);
// // // // //           border-top-left-radius: 50%;

// // // // //           &:hover .trusted-companies__iconBox {
// // // // //             transform: scale(1.1);
// // // // //           }

// // // // //           &::before {
// // // // //             position: absolute;
// // // // //             content: "";
// // // // //             bottom: 0.375rem;
// // // // //             left: -1.25rem;
// // // // //             background: transparent;
// // // // //             width: 1.25rem;
// // // // //             height: 1.25rem;
// // // // //             border-bottom-right-radius: 1.25rem;
// // // // //             box-shadow: 0.313rem 0.313rem 0 0.313rem rgb(255, 255, 255);
// // // // //           }

// // // // //           &::after {
// // // // //             position: absolute;
// // // // //             content: "";
// // // // //             top: -1.25rem;
// // // // //             right: 0.375rem;
// // // // //             background: transparent;
// // // // //             width: 1.25rem;
// // // // //             height: 1.25rem;
// // // // //             border-bottom-right-radius: 1.25rem;
// // // // //             box-shadow: 0.313rem 0.313rem 0 0.313rem var(--clr);
// // // // //           }

// // // // //           .trusted-companies__iconBox {
// // // // //             position: absolute;
// // // // //             inset: 0.625rem;
// // // // //             background: #282828;
// // // // //             border-radius: 50%;
// // // // //             display: flex;
// // // // //             justify-content: center;
// // // // //             align-items: center;
// // // // //             transition: 0.3s;

// // // // //             span {
// // // // //               color: #fff;
// // // // //               font-size: 1.5rem;
// // // // //             }
// // // // //           }
// // // // //         }
// // // // //       }
// // // // //     }
// // // // //   }
// // // // // }

// // // // // .trusted-companies__container {
// // // // //   position: relative;
// // // // //   overflow: hidden;
// // // // // }

// // // // // /* Wrapper for the carousel to slide */
// // // // // .carousel__wrapper {
// // // // //   display: flex;
// // // // //   transition: transform 0.5s ease-in-out;
// // // // // }

// // // // // /* Styling for each project card */
// // // // // .trusted-companies__card {
// // // // //   min-width: 100%;
// // // // //   transition: all 0.5s ease;
// // // // // }

// // // // // /* Arrow buttons styling */
// // // // // .carousel__arrow {
// // // // //   position: absolute;
// // // // //   top: 50%;
// // // // //   transform: translateY(-50%);
// // // // //   background-color: rgba(0, 0, 0, 0.5);
// // // // //   color: white;
// // // // //   padding: 10px;
// // // // //   border-radius: 50%;
// // // // //   font-size: 24px;
// // // // //   cursor: pointer;
// // // // //   z-index: 10;
// // // // //   transition: background-color 0.3s ease;
// // // // // }

// // // // // .carousel__arrow:hover {
// // // // //   background-color: rgba(0, 0, 0, 0.7);
// // // // // }

// // // // // /* Left and right arrows positions */
// // // // // .carousel__arrow--left {
// // // // //   left: 10px;
// // // // // }

// // // // // .carousel__arrow--right {
// // // // //   right: 10px;
// // // // // }

// // // // // /* Project card content */
// // // // // .trusted-companies__card-inner {
// // // // //   position: relative;
// // // // // }

// // // // // /* Add a transition effect to the image box */
// // // // // .trusted-companies__imgBox img {
// // // // //   width: 100%;
// // // // //   height: 100%;
// // // // //   object-fit: cover;
// // // // // }

// // // // // /* Content styling */
// // // // // .trusted-companies__content {
// // // // //   padding: 20px;
// // // // //   background-color: #fff;
// // // // // }

// // // // // .trusted-companies__content h3 {
// // // // //   font-size: clamp(1.5rem, 1.3909rem + 0.4364vw, 1.8rem);
// // // // // }

// // // // // .trusted-companies__content p {
// // // // //   margin: 10px 0;
// // // // //   color: #565656;
// // // // // }

// // // // // .trusted-companies__tag {
// // // // //   display: inline-block;
// // // // //   padding: 5px 10px;
// // // // //   margin: 5px 0;
// // // // //   border-radius: 5px;
// // // // //   color: white;
// // // // //   font-size: 14px;
// // // // // }

// // // // // /* Arrows container positioned above the carousel */
// // // // // .carousel__arrows {
// // // // //   display: flex;
// // // // //   justify-content: space-between;
// // // // //   position: relative;
// // // // //   z-index: 10;
// // // // //   margin-bottom: 20px;
// // // // // }

// // // // // /* Arrow button styles */
// // // // // .carousel__arrow {
// // // // //   background-color: rgba(0, 0, 0, 0.6);
// // // // //   color: white;
// // // // //   padding: 10px;
// // // // //   border-radius: 50%;
// // // // //   cursor: pointer;
// // // // //   transition: background-color 0.3s ease;
// // // // //   font-size: 24px;
// // // // // }

// // // // // .carousel__arrow:hover {
// // // // //   background-color: rgba(0, 0, 0, 0.8);
// // // // // }

// // // // // /* Left arrow position */
// // // // // .carousel__arrow--left {
// // // // //   margin-left: 10px;
// // // // // }

// // // // // /* Right arrow position */
// // // // // .carousel__arrow--right {
// // // // //   margin-right: 10px;
// // // // // }

// // // // // /* Carousel container */
// // // // // .trusted-companies__container {
// // // // //   position: relative;
// // // // //   overflow: hidden; /* Hide the overflowing cards */
// // // // // }

// // // // // /* Carousel wrapper to handle sliding effect */
// // // // // .carousel__wrapper {
// // // // //   display: flex;
// // // // //   transition: transform 0.5s ease-in-out;
// // // // // }

// // // // // /* Styling for each project card */
// // // // // .trusted-companies__card {
// // // // //   min-width: 33.33%; /* Show 3 cards at once */
// // // // //   transition: all 0.5s ease;
// // // // //   padding: 10px;
// // // // //   box-sizing: border-box;
// // // // // }

// // // // // /* Styling for the card inner content */
// // // // // .trusted-companies__card-inner {
// // // // //   position: relative;
// // // // // }

// // // // // /* Add transition effect to the image box */
// // // // // .trusted-companies__imgBox img {
// // // // //   width: 100%;
// // // // //   height: 100%;
// // // // //   object-fit: cover;
// // // // // }

// // // // // /* Content styling */
// // // // // .trusted-companies__content {
// // // // //   padding: 20px;
// // // // //   background-color: #fff;
// // // // // }

// // // // // .trusted-companies__content h3 {
// // // // //   font-size: clamp(1.5rem, 1.3909rem + 0.4364vw, 1.8rem);
// // // // // }

// // // // // .trusted-companies__content p {
// // // // //   margin: 10px 0;
// // // // //   color: #565656;
// // // // // }

// // // // // /* Tag colors and other styles for tags */
// // // // // .trusted-companies__tag {
// // // // //   display: inline-block;
// // // // //   padding: 5px 10px;
// // // // //   margin: 5px 0;
// // // // //   border-radius: 5px;
// // // // //   color: white;
// // // // //   font-size: 14px;
// // // // // }

// // // import React, { useState } from "react";
// // // import "./Projects.css";
// // // import { FiArrowUpRight } from "react-icons/fi";
// // // import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// // // const Projects = () => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   const companies = [
// // //     {
// // //       name: "Trust & Co.",
// // //       description:
// // //         "Fill out the form and the algorithm will offer the right team of experts",
// // //       imageUrl:
// // //         "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //       tags: ["branding", "packaging"],
// // //       tagColors: ["#d3b19a", "#70b3b1"],
// // //     },
// // //     {
// // //       name: "Tonic",
// // //       description:
// // //         "Fill out the form and the algorithm will offer the right team of experts",
// // //       imageUrl:
// // //         "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //       tags: ["branding", "marketing"],
// // //       tagColors: ["#d3b19a", "#d05fa2"],
// // //     },
// // //     {
// // //       name: "Shower Gel",
// // //       description:
// // //         "Fill out the form and the algorithm will offer the right team of experts",
// // //       imageUrl:
// // //         "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //       tags: ["branding", "packaging", "marketing"],
// // //       tagColors: ["#d3b19a", "#70b3b1", "#d05fa2"],
// // //     },
// // //     {
// // //       name: "Trust & Co.",
// // //       description:
// // //         "Fill out the form and the algorithm will offer the right team of experts",
// // //       imageUrl:
// // //         "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //       tags: ["branding", "packaging"],
// // //       tagColors: ["#d3b19a", "#70b3b1"],
// // //     },
// // //     {
// // //       name: "Tonic",
// // //       description:
// // //         "Fill out the form and the algorithm will offer the right team of experts",
// // //       imageUrl:
// // //         "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //       tags: ["branding", "marketing"],
// // //       tagColors: ["#d3b19a", "#d05fa2"],
// // //     },
// // //     {
// // //       name: "Shower Gel",
// // //       description:
// // //         "Fill out the form and the algorithm will offer the right team of experts",
// // //       imageUrl:
// // //         "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // //       tags: ["branding", "packaging", "marketing"],
// // //       tagColors: ["#d3b19a", "#70b3b1", "#d05fa2"],
// // //     },
// // //   ];

// // //   // Function to move to the previous project
// // //   const prevProject = () => {
// // //     setCurrentIndex((prevIndex) =>
// // //       prevIndex === 0 ? companies.length - 1 : prevIndex - 1
// // //     );
// // //   };

// // //   // Function to move to the next project
// // //   const nextProject = () => {
// // //     setCurrentIndex((prevIndex) =>
// // //       prevIndex === companies.length - 1 ? 0 : prevIndex + 1
// // //     );
// // //   };

// // //   return (
// // //     <section className="trusted-companies">
// // //       <h2>
// // //         leading companies
// // //         <br />
// // //         have trusted us
// // //       </h2>

// // //       {/* Arrows positioned outside the carousel */}
// // //       <div className="carousel__arrows">
// // //         <div
// // //           className="carousel__arrow carousel__arrow--left"
// // //           onClick={prevProject}
// // //         >
// // //           <FaArrowLeft />
// // //         </div>
// // //         <div
// // //           className="carousel__arrow carousel__arrow--right"
// // //           onClick={nextProject}
// // //         >
// // //           <FaArrowRight />
// // //         </div>
// // //       </div>

// // //       <div className="trusted-companies__container">
// // //         <div className="carousel">
// // //           <div
// // //             className="carousel__wrapper"
// // //             style={{
// // //               transform: `translateX(-${currentIndex * 100}%)`, // Change 100% for each project
// // //               transition: "transform 0.5s ease-in-out",
// // //             }}
// // //           >
// // //             {companies.map((company, index) => (
// // //               <div className="trusted-companies__card" key={index}>
// // //                 <div
// // //                   className="trusted-companies__card-inner"
// // //                   style={{ "--clr": "#fff" }}
// // //                 >
// // //                   <div className="trusted-companies__box">
// // //                     <div className="trusted-companies__imgBox">
// // //                       <img src={company.imageUrl} alt={company.name} />
// // //                     </div>
// // //                     <div className="trusted-companies__icon">
// // //                       <a href="#" className="trusted-companies__iconBox">
// // //                         <span className="material-symbols-outlined">
// // //                           <FiArrowUpRight />
// // //                         </span>
// // //                       </a>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 <div className="trusted-companies__content">
// // //                   <h3>{company.name}</h3>
// // //                   <p>{company.description}</p>
// // //                   <ul>
// // //                     {company.tags.map((tag, idx) => (
// // //                       <li
// // //                         key={idx}
// // //                         style={{ "--clr-tag": company.tagColors[idx] }}
// // //                         className={`trusted-companies__tag ${tag}`}
// // //                       >
// // //                         {tag}
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Projects;

// // import React, { useState } from "react";
// // import "./Projects.css";
// // import { FiArrowUpRight } from "react-icons/fi";
// // import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// // const Projects = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const companies = [
// //     {
// //       name: "Digital Marketing Agency Website",
// //       description:
// //         "Developed a clean, user-friendly website for Vekstloop, highlighting their SEO, Google Ads, and social media marketing services.",
// //       imageUrl:
// //         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// //       tags: ["branding", "packaging"],
// //       tagColors: ["#d3b19a", "#70b3b1"],
// //     },
// //     {
// //       name: "Digital Marketing Agency Website",
// //       description:
// //         "Developed a clean, user-friendly website for Vekstloop, highlighting their SEO, Google Ads, and social media marketing services.",
// //       imageUrl:
// //         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// //       tags: ["branding", "packaging"],
// //       tagColors: ["#d3b19a", "#70b3b1"],
// //     },
// //     {
// //       name: "Digital Marketing Agency Website",
// //       description:
// //         "Developed a clean, user-friendly website for Vekstloop, highlighting their SEO, Google Ads, and social media marketing services.",
// //       imageUrl:
// //         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// //       tags: ["branding", "packaging"],
// //       tagColors: ["#d3b19a", "#70b3b1"],
// //     },
// //     {
// //       name: "Digital Marketing Agency Website",
// //       description:
// //         "Developed a clean, user-friendly website for Vekstloop, highlighting their SEO, Google Ads, and social media marketing services.",
// //       imageUrl:
// //         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// //       tags: ["branding", "packaging"],
// //       tagColors: ["#d3b19a", "#70b3b1"],
// //     },
// //     {
// //       name: "Digital Marketing Agency Website",
// //       description:
// //         "Developed a clean, user-friendly website for Vekstloop, highlighting their SEO, Google Ads, and social media marketing services.",
// //       imageUrl:
// //         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// //       tags: ["branding", "packaging"],
// //       tagColors: ["#d3b19a", "#70b3b1"],
// //     },
// //     {
// //       name: "Digital Marketing Agency Website",
// //       description:
// //         "Developed a clean, user-friendly website for Vekstloop, highlighting their SEO, Google Ads, and social media marketing services.",
// //       imageUrl:
// //         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// //       tags: ["branding", "packaging"],
// //       tagColors: ["#d3b19a", "#70b3b1"],
// //     },
// //   ];

// //   // // Function to move to the previous project
// //   // const prevProject = () => {
// //   //   setCurrentIndex((prevIndex) =>
// //   //     prevIndex === 0 ? companies.length - 1 : prevIndex - 1
// //   //   );
// //   // };

// //   // // Function to move to the next project
// //   // const nextProject = () => {
// //   //   setCurrentIndex((prevIndex) =>
// //   //     prevIndex === companies.length - 1 ? 0 : prevIndex + 1
// //   //   );
// //   // };

// //   // Function to move to the previous project
// //   const prevProject = () => {
// //     setCurrentIndex((prevIndex) =>
// //       prevIndex === 0 ? companies.length - 3 : prevIndex - 1
// //     );
// //   };

// //   // Function to move to the next project
// //   const nextProject = () => {
// //     setCurrentIndex((prevIndex) =>
// //       prevIndex === companies.length - 3 ? 0 : prevIndex + 1
// //     );
// //   };

// //   return (
// //     <section className="trusted-companies">
// //       <h2>
// //         leading companies
// //         <br />
// //         have trusted us
// //       </h2>

// //       {/* Arrows positioned outside the carousel */}
// //       <div className="carousel__arrows">
// //         <div
// //           className="carousel__arrow carousel__arrow--left"
// //           onClick={prevProject}
// //         >
// //           <FaArrowLeft />
// //         </div>
// //         <div
// //           className="carousel__arrow carousel__arrow--right"
// //           onClick={nextProject}
// //         >
// //           <FaArrowRight />
// //         </div>
// //       </div>

// //       <div className="trusted-companies__container">
// //         <div className="carousel">
// //           <div
// //             className="carousel__wrapper"
// //             style={{
// //               transform: `translateX(-${currentIndex * 100}%)`, // Adjust to 100% per project
// //               transition: "transform 0.5s ease-in-out",
// //             }}
// //           >
// //             {companies.map((company, index) => (
// //               <div className="trusted-companies__card" key={index}>
// //                 <div
// //                   className="trusted-companies__card-inner"
// //                   style={{ "--clr": "#fff" }}
// //                 >
// //                   <div className="trusted-companies__box">
// //                     <div className="trusted-companies__imgBox">
// //                       <img src={company.imageUrl} alt={company.name} />
// //                     </div>
// //                     <div className="trusted-companies__icon">
// //                       <a href="#" className="trusted-companies__iconBox">
// //                         <span className="material-symbols-outlined">
// //                           <FiArrowUpRight />
// //                         </span>
// //                       </a>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="trusted-companies__content">
// //                   <h3>{company.name}</h3>
// //                   <p>{company.description}</p>
// //                   <ul>
// //                     {company.tags.map((tag, idx) => (
// //                       <li
// //                         key={idx}
// //                         style={{ "--clr-tag": company.tagColors[idx] }}
// //                         className={`trusted-companies__tag ${tag}`}
// //                       >
// //                         {tag}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// import React, { useState, useEffect } from "react";
// import "./Projects.css";
// // Sample projects data
// const projects = [
//   {
//     id: "1",
//     title: "BlissCamp",
//     category: "Web Development",
//     image: "https://picsum.photos/seed/project1/600/400",
//     video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
//     description: "A website for Tourists and Travellers",
//     links: {
//       live: "https://nk2552003.github.io/BlissCampIndia/",
//       github: "https://github.com/NK2552003/BlissCampIndia",
//       codepen: "https://github.com/NK2552003/BlissCampIndia",
//     },
//     progress: "Completed",
//   },
//   {
//     id: "2",
//     title: "lil' me",
//     category: "Web Development",
//     image: "https://picsum.photos/seed/project2/600/400",
//     video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
//     description: "An animated moving boy using pure CSS, HTML & JS",
//     links: {
//       live: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
//       github: "https://github.com/NK2552003/lil-me-male-version-",
//       codepen: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
//     },
//     progress: "Completed",
//   },
//   // Add all other projects here
// ];

// const project = ["All", "App Development", "Web Development"];

// const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     // Placeholder for any side effects when category changes, if necessary
//   }, [selectedCategory]);

//   const filterProjects = () => {
//     return project.filter(
//       (project) =>
//         selectedCategory === "All" || project.category === selectedCategory
//     );
//   };

//   const playVideo = (video) => {
//     const playPromise = video.play();
//     if (playPromise !== undefined) {
//       playPromise.catch((error) => {
//         console.error("Error playing video:", error);
//       });
//     }
//   };

//   const pauseVideo = (video) => {
//     video.pause();
//     video.currentTime = 0; // Optionally reset to the beginning
//   };

//   return (
//     <div className="portfolio-min-h-screen portfolio-bg-black portfolio-p-8">
//       {/* Filter Buttons */}
//       <div
//         id="portfolio-filter-buttons"
//         className="portfolio-mb-8 portfolio-flex portfolio-flex-wrap portfolio-gap-4"
//       >
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={
//               selectedCategory === category
//                 ? "portfolio-bg-white portfolio-text-black filterBtn"
//                 : "portfolio-text-white portfolio-text-white-80 filterBtn2"
//             }
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Projects Grid */}
//       <div
//         id="portfolio-projects-grid"
//         className="portfolio-grid portfolio-gap-6 portfolio-sm-grid-cols-2 portfolio-lg-grid-cols-3"
//       >
//         {filterProjects().map((project) => (
//           <div
//             key={project.id}
//             className="portfolio-group relative overflow-hidden"
//           >
//             <div className="portfolio-media-wrapper relative">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="portfolio-image portfolio-aspect-3-2 portfolio-object-cover"
//               />
//               <video
//                 src={project.video}
//                 autoplay
//                 muted
//                 loop
//                 className="portfolio-video portfolio-aspect-3-2 portfolio-object-cover"
//                 style={{ opacity: 0 }}
//               ></video>
//               <div className="portfolio-overlay-blur"></div>
//             </div>

//             <div className="portfolio-overlay portfolio-absolute portfolio-inset-0 portfolio-bg-gradient-to-t"></div>
//             <div className="portfolio-absolute portfolio-bottom-0 portfolio-p-4">
//               <p className="portfolio-progress">{project.progress}</p>
//               <h3 className="portfolio-text-xl portfolio-font-semibold portfolio-text-white">
//                 {project.title}
//               </h3>
//               <p className="portfolio-description">{project.description}</p>
//               <div className="portfolio-links mt-4">
//                 <a
//                   href={project.links.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="portfolio-btn"
//                 >
//                   <button className="button">
//                     <svg
//                       width="24px"
//                       height="24px"
//                       viewBox="0 0 24.00 24.00"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       stroke="#000000"
//                       strokeWidth="0.00024"
//                     >
//                       {/* Your SVG Content Here */}
//                     </svg>
//                   </button>
//                 </a>
//                 <a
//                   href={project.links.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="portfolio-btn"
//                 >
//                   <button className="button">{/* Your GitHub SVG */}</button>
//                 </a>
//                 <a
//                   href={project.links.codepen}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="portfolio-btn"
//                 >
//                   <button className="button">{/* Your Codepen SVG */}</button>
//                 </a>
//               </div>
//             </div>

//             {/* Touch or Mouse Events */}
//             <div
//               className="portfolio-media-wrapper relative"
//               onTouchStart={() => {
//                 const video = document.querySelector(`#video-${project.id}`);
//                 if (video) {
//                   video.style.opacity = 1;
//                   playVideo(video);
//                 }
//               }}
//               onTouchEnd={() => {
//                 const video = document.querySelector(`#video-${project.id}`);
//                 if (video) {
//                   video.style.opacity = 0;
//                   pauseVideo(video);
//                 }
//               }}
//               onMouseEnter={() => {
//                 const video = document.querySelector(`#video-${project.id}`);
//                 if (video) {
//                   video.style.opacity = 1;
//                   playVideo(video);
//                 }
//               }}
//               onMouseLeave={() => {
//                 const video = document.querySelector(`#video-${project.id}`);
//                 if (video) {
//                   video.style.opacity = 0;
//                   pauseVideo(video);
//                 }
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React, { useState, useEffect } from "react";
// import "./Projects.css";

// // Sample projects data
// const projects = [
//   {
//     id: "1",
//     title: "BlissCamp",
//     category: "Web Development",
//     image: "https://picsum.photos/seed/project1/600/400",
//     video: "https://youtu.be/l5ONgt-v9WI",
//     description: "A website for Tourists and Travellers",
//     links: {
//       live: "https://nk2552003.github.io/BlissCampIndia/",
//       github: "https://github.com/NK2552003/BlissCampIndia",
//       codepen: "https://codepen.io/NK2552003/pen/MYgpywe",
//     },
//     progress: "Completed",
//   },
//   {
//     id: "2",
//     title: "lil' me",
//     category: "Web Development",
//     image: "https://picsum.photos/seed/project2/600/400",
//     video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
//     description: "An animated moving boy using pure CSS, HTML & JS",
//     links: {
//       live: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
//       github: "https://github.com/NK2552003/lil-me-male-version-",
//       codepen: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
//     },
//     progress: "Completed",
//   },
//   {
//     id: "1",
//     title: "BlissCamp",
//     category: "Web Development",
//     image: "https://picsum.photos/seed/project1/600/400",
//     video: "https://youtu.be/l5ONgt-v9WI",
//     description: "A website for Tourists and Travellers",
//     links: {
//       live: "https://nk2552003.github.io/BlissCampIndia/",
//       github: "https://github.com/NK2552003/BlissCampIndia",
//       codepen: "https://codepen.io/NK2552003/pen/MYgpywe",
//     },
//     progress: "Completed",
//   },
//   {
//     id: "2",
//     title: "lil' me",
//     category: "Web Development",
//     image: "https://picsum.photos/seed/project2/600/400",
//     video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
//     description: "An animated moving boy using pure CSS, HTML & JS",
//     links: {
//       live: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
//       github: "https://github.com/NK2552003/lil-me-male-version-",
//       codepen: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
//     },
//     progress: "Completed",
//   },
//   {
//     id: "1",
//     title: "BlissCamp",
//     category: "Web Development",
//     image: "https://picsum.photos/seed/project1/600/400",
//     video: "https://youtu.be/l5ONgt-v9WI",
//     description: "A website for Tourists and Travellers",
//     links: {
//       live: "https://nk2552003.github.io/BlissCampIndia/",
//       github: "https://github.com/NK2552003/BlissCampIndia",
//       codepen: "https://codepen.io/NK2552003/pen/MYgpywe",
//     },
//     progress: "Completed",
//   },
//   {
//     id: "2",
//     title: "lil' me",
//     category: "Web Development",
//     image: "https://picsum.photos/seed/project2/600/400",
//     video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
//     description: "An animated moving boy using pure CSS, HTML & JS",
//     links: {
//       live: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
//       github: "https://github.com/NK2552003/lil-me-male-version-",
//       codepen: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
//     },
//     progress: "Completed",
//   },
//   {
//     id: "1",
//     title: "BlissCamp",
//     category: "Web Development",
//     image: "https://picsum.photos/seed/project1/600/400",
//     video: "https://youtu.be/l5ONgt-v9WI",
//     description: "A website for Tourists and Travellers",
//     links: {
//       live: "https://nk2552003.github.io/BlissCampIndia/",
//       github: "https://github.com/NK2552003/BlissCampIndia",
//       codepen: "https://codepen.io/NK2552003/pen/MYgpywe",
//     },
//     progress: "Completed",
//   },
//   {
//     id: "2",
//     title: "lil' me",
//     category: "Web Development",
//     image: "https://picsum.photos/seed/project2/600/400",
//     video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
//     description: "An animated moving boy using pure CSS, HTML & JS",
//     links: {
//       live: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
//       github: "https://github.com/NK2552003/lil-me-male-version-",
//       codepen: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
//     },
//     progress: "Completed",
//   },
//   // Add all other projects here
// ];

// const categories = ["All", "App Development", "Web Development"];

// const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // Function to filter projects by category
//   const filterProjects = () => {
//     return selectedCategory === "All"
//       ? projects
//       : projects.filter((project) => project.category === selectedCategory);
//   };

//   const playVideo = (video) => {
//     const playPromise = video.play();
//     if (playPromise !== undefined) {
//       playPromise.catch((error) => {
//         console.error("Error playing video:", error);
//       });
//     }
//   };

//   const pauseVideo = (video) => {
//     video.pause();
//     video.currentTime = 0; // Optionally reset to the beginning
//   };

//   return (
//     <div className="portfolio-min-h-screen portfolio-bg-black portfolio-p-8">
//       {/* Filter Buttons */}
//       <div
//         id="portfolio-filter-buttons"
//         className="portfolio-mb-8 portfolio-flex portfolio-flex-wrap portfolio-gap-4"
//       >
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={
//               selectedCategory === category
//                 ? "portfolio-bg-white portfolio-text-black filterBtn"
//                 : "portfolio-text-white portfolio-text-white-80 filterBtn2"
//             }
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Projects Grid */}
//       <div
//         id="portfolio-projects-grid"
//         className="portfolio-grid portfolio-gap-6 portfolio-sm-grid-cols-2 portfolio-lg-grid-cols-3"
//       >
//         {filterProjects().map((project) => (
//           <div
//             key={project.id}
//             className="portfolio-group relative overflow-hidden"
//           >
//             <div className="portfolio-media-wrapper relative">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="portfolio-image portfolio-aspect-3-2 portfolio-object-cover"
//               />
//               <video
//                 id={`video-${project.id}`}
//                 src={project.video}
//                 autoPlay
//                 muted
//                 loop
//                 className="portfolio-video portfolio-aspect-3-2 portfolio-object-cover"
//                 style={{ opacity: 0 }}
//               ></video>
//               <div className="portfolio-overlay-blur"></div>
//             </div>

//             <div className="portfolio-overlay portfolio-absolute portfolio-inset-0 portfolio-bg-gradient-to-t"></div>
//             <div className="portfolio-absolute portfolio-bottom-0 portfolio-p-4">
//               <p className="portfolio-progress">{project.progress}</p>
//               <h3 className="portfolio-text-xl portfolio-font-semibold portfolio-text-white">
//                 {project.title}
//               </h3>
//               <p className="portfolio-description">{project.description}</p>
//               <div className="portfolio-links mt-4">
//                 <a
//                   href={project.links.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="portfolio-btn"
//                 >
//                   <button className="button">
//                     <svg
//                       width="24px"
//                       height="24px"
//                       viewBox="0 0 24.00 24.00"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       stroke="#000000"
//                       stroke-width="0.00024000000000000003"
//                     >
//                       <g id="SVGRepo_bgCarrier" stroke-width="0" />

//                       <g
//                         id="SVGRepo_tracerCarrier"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />

//                       <g id="SVGRepo_iconCarrier">
//                         {" "}
//                         <g opacity="0.5">
//                           {" "}
//                           <path
//                             fill-rule="evenodd"
//                             clip-rule="evenodd"
//                             d="M5.46689 4.39207C5.75949 4.68526 5.75902 5.16013 5.46583 5.45273C3.78722 7.128 2.75 9.44218 2.75 12C2.75 14.5878 3.81163 16.9262 5.52503 18.6059C5.82082 18.8959 5.82554 19.3707 5.53557 19.6665C5.24561 19.9623 4.77076 19.967 4.47497 19.677C2.48564 17.7269 1.25 15.0071 1.25 12C1.25 9.02783 2.45721 6.33616 4.40623 4.39102C4.69941 4.09842 5.17429 4.09889 5.46689 4.39207ZM18.6164 4.46446C18.9122 4.17449 19.387 4.17921 19.677 4.475C21.5771 6.41326 22.75 9.07043 22.75 12C22.75 14.9645 21.5491 17.6499 19.609 19.5938C19.3164 19.887 18.8415 19.8875 18.5484 19.5949C18.2552 19.3023 18.2547 18.8274 18.5473 18.5342C20.2182 16.86 21.25 14.5512 21.25 12C21.25 9.47873 20.2422 7.1943 18.6059 5.52507C18.3159 5.22928 18.3206 4.75443 18.6164 4.46446ZM8.30923 7.48757C8.59226 7.79001 8.57652 8.26462 8.27408 8.54765C7.32517 9.43564 6.75 10.6502 6.75 11.9822C6.75 13.3297 7.33869 14.5573 8.30756 15.4479C8.61251 15.7282 8.63248 16.2026 8.35216 16.5076C8.07185 16.8125 7.59739 16.8325 7.29244 16.5522C6.03967 15.4006 5.25 13.7824 5.25 11.9822C5.25 10.203 6.02148 8.60128 7.24916 7.45242C7.5516 7.16939 8.02621 7.18513 8.30923 7.48757ZM15.7429 7.52559C16.0292 7.22626 16.5039 7.21571 16.8033 7.50202C18.0005 8.64714 18.75 10.2286 18.75 11.9822C18.75 13.7568 17.9825 15.3548 16.7604 16.503C16.4586 16.7867 15.9839 16.7719 15.7003 16.47C15.4167 16.1681 15.4315 15.6935 15.7333 15.4099C16.6778 14.5225 17.25 13.3108 17.25 11.9822C17.25 10.6692 16.6911 9.47046 15.7664 8.58599C15.4671 8.29968 15.4566 7.82492 15.7429 7.52559Z"
//                             fill="#fafafa"
//                           />{" "}
//                         </g>{" "}
//                         <path
//                           d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z"
//                           fill="#fafafa"
//                         />{" "}
//                       </g>
//                     </svg>
//                   </button>
//                 </a>
//                 <a
//                   href={project.links.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="portfolio-btn"
//                 >
//                   <button className="button">
//                     <svg
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
//                         fill="white"
//                       ></path>
//                     </svg>
//                   </button>
//                 </a>
//                 {/* <a
//                   href={project.links.codepen}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="portfolio-btn"
//                 >
//                   <button className="button"></button>
//                 </a> */}
//               </div>
//             </div>

//             {/* Touch or Mouse Events */}
//             <div
//               className="portfolio-media-wrapper relative"
//               onTouchStart={() => {
//                 const video = document.querySelector(`#video-${project.id}`);
//                 if (video) {
//                   video.style.opacity = 1;
//                   playVideo(video);
//                 }
//               }}
//               onTouchEnd={() => {
//                 const video = document.querySelector(`#video-${project.id}`);
//                 if (video) {
//                   video.style.opacity = 0;
//                   pauseVideo(video);
//                 }
//               }}
//               onMouseEnter={() => {
//                 const video = document.querySelector(`#video-${project.id}`);
//                 if (video) {
//                   video.style.opacity = 1;
//                   playVideo(video);
//                 }
//               }}
//               onMouseLeave={() => {
//                 const video = document.querySelector(`#video-${project.id}`);
//                 if (video) {
//                   video.style.opacity = 0;
//                   pauseVideo(video);
//                 }
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React, { useState, useEffect } from "react";
// import "./Projects.css";

// // Sample projects data
// const projects = [
//   {
//     id: "1",
//     title: "Digital Marketing Agency Website",
//     category: "Web Development",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
//     // video: "https://youtu.be/l5ONgt-v9WI",
//     description:
//       "Created a user-friendly website for Vekstloop showcasing SEO, Google Ads, and social media services, with dynamic content, interactive tools, and customer testimonials. Implemented responsive design, SEO best practices, and custom plugins to enhance engagement and user experience.",
//     links: {
//       live: "https://nk2552003.github.io/BlissCampIndia/",
//       github: "https://github.com/NK2552003/BlissCampIndia",
//       codepen: "https://codepen.io/NK2552003/pen/MYgpywe",
//     },
//     progress: "Completed",
//   },
//   {
//     id: "2",
//     title: "Interactive Website for Studio",
//     category: "Web Development",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/a7110546-6546-4543-abed-17f4d84fcfad",
//     // video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
//     description:
//       "Developed a custom WordPress site for Skylight Studios, featuring interactive animations, custom JavaScript, and sections highlighting venues, services, and brand collaborations. Integrated newsletter subscription, contact options, and social media to boost digital presence and brand appeal.",
//     links: {
//       live: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
//       github: "https://github.com/NK2552003/lil-me-male-version-",
//       codepen: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
//     },
//     progress: "Completed",
//   },
//   {
//     id: "3",
//     title: "Medical SPA Website",
//     category: "Web Development",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/11e05738-113c-477f-8abd-babb5390dc18",
//     // video: "https://youtu.be/l5ONgt-v9WI",
//     description:
//       "Developed a user-friendly website for Ola Aesthetics, showcasing skincare services, Ola Signature Services, and client care content with seamless booking options. Included a blog, consultation call-to-action, and focus on inclusivity to position Ola as a trusted clinic for personalized skincare treatments.",
//     links: {
//       live: "https://nk2552003.github.io/BlissCampIndia/",
//       github: "https://github.com/NK2552003/BlissCampIndia",
//       codepen: "https://codepen.io/NK2552003/pen/MYgpywe",
//     },
//     progress: "Completed",
//   },
//   {
//     id: "4",
//     title: "Investment Company website",
//     category: "Web Development",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/3ccd3bff-741f-4f7f-9db8-50f467772cba",
//     // video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
//     description:
//       "Developed a sleek, user-friendly smart investment platform with seamless registration, demo account, trading tools, and educational resources. Integrated custom plugins, responsive design, and strong security measures for a reliable, user-centric investing experience.",
//     links: {
//       live: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
//       github: "https://github.com/NK2552003/lil-me-male-version-",
//       codepen: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
//     },
//     progress: "Completed",
//   },
// ];

// const categories = ["All", "App Development", "Web Development"];

// const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [visibleProjects, setVisibleProjects] = useState(4);

//   // Function to filter projects by category
//   const filterProjects = () => {
//     const filtered =
//       selectedCategory === "All"
//         ? projects
//         : projects.filter((project) => project.category === selectedCategory);
//     return filtered.slice(0, visibleProjects);
//   };

//   const playVideo = (video) => {
//     const playPromise = video.play();
//     if (playPromise !== undefined) {
//       playPromise.catch((error) => {
//         console.error("Error playing video:", error);
//       });
//     }
//   };

//   const pauseVideo = (video) => {
//     video.pause();
//     video.currentTime = 0;
//   };

//   const filteredProjects = filterProjects();

//   return (
//     <div className="portfolio-min-h-screen portfolio-bg-black portfolio-p-8">
//       {/* Filter Buttons */}
//       <div
//         id="portfolio-filter-buttons"
//         className="portfolio-mb-8 portfolio-flex portfolio-flex-wrap portfolio-gap-4"
//       >
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={
//               selectedCategory === category
//                 ? "portfolio-bg-white portfolio-text-black filterBtn"
//                 : "portfolio-text-white portfolio-text-white-80 filterBtn2"
//             }
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Projects Grid */}
//       <div
//         id="portfolio-projects-grid"
//         className="portfolio-grid portfolio-gap-6 portfolio-sm-grid-cols-2 portfolio-lg-grid-cols-3"
//       >
//         {filteredProjects.map((project) => (
//           <div
//             key={project.id}
//             className="portfolio-group relative overflow-hidden"
//           >
//             <div className="portfolio-media-wrapper relative">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="portfolio-image portfolio-aspect-3-2 portfolio-object-cover"
//               />
//               <img
//                 id={`video-${project.id}`}
//                 src={project.image}
//                 alt={project.title}
//                 className="portfolio-video portfolio-aspect-3-2 portfolio-object-cover"
//                 style={{ opacity: 100 }}
//               ></img>
//               <div className="portfolio-overlay-blur"></div>
//             </div>

//             <div className="portfolio-overlay portfolio-absolute portfolio-inset-0 portfolio-bg-gradient-to-t"></div>
//             <div className="portfolio-absolute portfolio-bottom-0 portfolio-p-4">
//               <p className="portfolio-progress">{project.progress}</p>
//               <h3 className="portfolio-text-xl portfolio-font-semibold portfolio-text-white">
//                 {project.title}
//               </h3>
//               <p className="portfolio-description">{project.description}</p>
//               <div className="portfolio-links mt-4">
//                 <a
//                   href={project.links.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="portfolio-btn"
//                 >
//                   <button className="button">
//                     <svg
//                       width="24px"
//                       height="24px"
//                       viewBox="0 0 24.00 24.00"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                       stroke="#000000"
//                       stroke-width="0.00024000000000000003"
//                     >
//                       <g id="SVGRepo_bgCarrier" stroke-width="0" />

//                       <g
//                         id="SVGRepo_tracerCarrier"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />

//                       <g id="SVGRepo_iconCarrier">
//                         {" "}
//                         <g opacity="0.5">
//                           {" "}
//                           <path
//                             fill-rule="evenodd"
//                             clip-rule="evenodd"
//                             d="M5.46689 4.39207C5.75949 4.68526 5.75902 5.16013 5.46583 5.45273C3.78722 7.128 2.75 9.44218 2.75 12C2.75 14.5878 3.81163 16.9262 5.52503 18.6059C5.82082 18.8959 5.82554 19.3707 5.53557 19.6665C5.24561 19.9623 4.77076 19.967 4.47497 19.677C2.48564 17.7269 1.25 15.0071 1.25 12C1.25 9.02783 2.45721 6.33616 4.40623 4.39102C4.69941 4.09842 5.17429 4.09889 5.46689 4.39207ZM18.6164 4.46446C18.9122 4.17449 19.387 4.17921 19.677 4.475C21.5771 6.41326 22.75 9.07043 22.75 12C22.75 14.9645 21.5491 17.6499 19.609 19.5938C19.3164 19.887 18.8415 19.8875 18.5484 19.5949C18.2552 19.3023 18.2547 18.8274 18.5473 18.5342C20.2182 16.86 21.25 14.5512 21.25 12C21.25 9.47873 20.2422 7.1943 18.6059 5.52507C18.3159 5.22928 18.3206 4.75443 18.6164 4.46446ZM8.30923 7.48757C8.59226 7.79001 8.57652 8.26462 8.27408 8.54765C7.32517 9.43564 6.75 10.6502 6.75 11.9822C6.75 13.3297 7.33869 14.5573 8.30756 15.4479C8.61251 15.7282 8.63248 16.2026 8.35216 16.5076C8.07185 16.8125 7.59739 16.8325 7.29244 16.5522C6.03967 15.4006 5.25 13.7824 5.25 11.9822C5.25 10.203 6.02148 8.60128 7.24916 7.45242C7.5516 7.16939 8.02621 7.18513 8.30923 7.48757ZM15.7429 7.52559C16.0292 7.22626 16.5039 7.21571 16.8033 7.50202C18.0005 8.64714 18.75 10.2286 18.75 11.9822C18.75 13.7568 17.9825 15.3548 16.7604 16.503C16.4586 16.7867 15.9839 16.7719 15.7003 16.47C15.4167 16.1681 15.4315 15.6935 15.7333 15.4099C16.6778 14.5225 17.25 13.3108 17.25 11.9822C17.25 10.6692 16.6911 9.47046 15.7664 8.58599C15.4671 8.29968 15.4566 7.82492 15.7429 7.52559Z"
//                             fill="#fafafa"
//                           />{" "}
//                         </g>{" "}
//                         <path
//                           d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z"
//                           fill="#fafafa"
//                         />{" "}
//                       </g>
//                     </svg>
//                   </button>
//                 </a>
//                 <a
//                   href={project.links.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="portfolio-btn"
//                 >
//                   <button className="button">
//                     <svg
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
//                         fill="white"
//                       ></path>
//                     </svg>
//                   </button>
//                 </a>
//               </div>
//             </div>

//             {/* Touch or Mouse Events */}
//             <div
//               className="portfolio-media-wrapper relative"
//               onTouchStart={() => {
//                 const video = document.querySelector(`#video-${project.id}`);
//                 if (video) {
//                   video.style.opacity = 1;
//                   playVideo(video);
//                 }
//               }}
//               onTouchEnd={() => {
//                 const video = document.querySelector(`#video-${project.id}`);
//                 if (video) {
//                   video.style.opacity = 0;
//                   pauseVideo(video);
//                 }
//               }}
//               onMouseEnter={() => {
//                 const video = document.querySelector(`#video-${project.id}`);
//                 if (video) {
//                   video.style.opacity = 1;
//                   playVideo(video);
//                 }
//               }}
//               onMouseLeave={() => {
//                 const video = document.querySelector(`#video-${project.id}`);
//                 if (video) {
//                   video.style.opacity = 0;
//                   pauseVideo(video);
//                 }
//               }}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Visit Portfolio Button */}
//       <div className="flex justify-center mt-8">
//         <button class=" relative inline-block text-lg group">
//           <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
//             <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//             <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
//             <span class="relative">Visit Our Portfolio</span>
//           </span>
//           <span
//             class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
//             data-rounded="rounded-lg"
//           ></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

// Sample projects data
const projects = [
  {
    id: "1",
    title: "Digital Marketing Agency Website",
    category: "Web Development",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
    // video: "https://youtu.be/l5ONgt-v9WI",
    description:
      "Created a user-friendly website for Vekstloop showcasing SEO, Google Ads, and social media services, with dynamic content, interactive tools, and customer testimonials. Implemented responsive design, SEO best practices, and custom plugins to enhance engagement and user experience.",
    links: {
      live: "https://www.vekstloop.no/",
      // github: "https://github.com/NK2552003/BlissCampIndia",
    },
    progress: "Completed",
  },
  {
    id: "2",
    title: "Interactive Website for Studio",
    category: "Web Development",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/a7110546-6546-4543-abed-17f4d84fcfad",

    description:
      "Developed a custom WordPress site for Skylight Studios, featuring interactive animations, custom JavaScript, and sections highlighting venues, services, and brand collaborations. Integrated newsletter subscription, contact options, and social media to boost digital presence and brand appeal.",
    links: {
      live: "https://byskylight.com/",
      // github: "https://github.com/NK2552003/lil-me-male-version-",
    },
    progress: "Completed",
  },
  {
    id: "3",
    title: "Medical SPA Website",
    category: "Web Development",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/11e05738-113c-477f-8abd-babb5390dc18",

    description:
      "Developed a user-friendly website for Ola Aesthetics, showcasing skincare services, Ola Signature Services, and client care content with seamless booking options. Included a blog, consultation call-to-action, and focus on inclusivity to position Ola as a trusted clinic for personalized skincare treatments.",
    links: {
      live: "https://olaaestheticsla.com/",
      // github: "https://github.com/NK2552003/BlissCampIndia",
    },
    progress: "Completed",
  },
  {
    id: "4",
    title: "Investment Company website",
    category: "Web Development",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/3ccd3bff-741f-4f7f-9db8-50f467772cba",
    description:
      "Developed a sleek, user-friendly smart investment platform with seamless registration, demo account, trading tools, and educational resources. Integrated custom plugins, responsive design, and strong security measures for a reliable, user-centric investing experience.",
    links: {
      live: "https://binarium.com/",
      // github: "https://github.com/NK2552003/lil-me-male-version-",
    },
    progress: "Completed",
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const headingRef = useRef(null);

  useEffect(() => {
    // Only run animations if screen width is above 768px (tablet/desktop)
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      const text = new SplitType(headingRef.current, { types: "chars" });
      gsap.fromTo(
        text.chars,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power4.out",
          fontFamily: "NeueMachina-Regular",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const playVideo = (video) => {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  };

  const pauseVideo = (video) => {
    video.pause();
    video.currentTime = 0;
  };

  return (
    <div className="portfolio-min-h-screen portfolio-bg-black portfolio-p-8">
      {/* Heading */}
      <h2
        ref={headingRef}
        className="text-4xl sm:text-5xl  md:text-6xl lg:text-5xl text-center text-white mb-8"
      >
        Our Projects
      </h2>

      {/* Projects Grid */}
      <div
        id="portfolio-projects-grid"
        className="portfolio-grid portfolio-gap-6 portfolio-sm-grid-cols-2 portfolio-lg-grid-cols-3"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="portfolio-group relative overflow-hidden"
          >
            <div className="portfolio-media-wrapper relative">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-image portfolio-aspect-3-2 portfolio-object-cover"
              />
              <img
                id={`video-${project.id}`}
                src={project.image}
                alt={project.title}
                className="portfolio-video portfolio-aspect-3-2 portfolio-object-cover"
                style={{ opacity: 100 }}
              ></img>
              <div className="portfolio-overlay-blur"></div>
            </div>

            <div className="portfolio-overlay portfolio-absolute portfolio-inset-0 portfolio-bg-gradient-to-t"></div>
            <div className="portfolio-absolute portfolio-bottom-0 portfolio-p-4">
              <p className="portfolio-progress">{project.progress}</p>
              <h3 className="portfolio-text-xl portfolio-font-semibold portfolio-text-white">
                {project.title}
              </h3>
              <p className="portfolio-description">{project.description}</p>
              <div className="portfolio-links mt-4">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-btn"
                >
                  <button className="button">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24.00 24.00"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#000000"
                      stroke-width="0.00024000000000000003"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g opacity="0.5">
                          {" "}
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.46689 4.39207C5.75949 4.68526 5.75902 5.16013 5.46583 5.45273C3.78722 7.128 2.75 9.44218 2.75 12C2.75 14.5878 3.81163 16.9262 5.52503 18.6059C5.82082 18.8959 5.82554 19.3707 5.53557 19.6665C5.24561 19.9623 4.77076 19.967 4.47497 19.677C2.48564 17.7269 1.25 15.0071 1.25 12C1.25 9.02783 2.45721 6.33616 4.40623 4.39102C4.69941 4.09842 5.17429 4.09889 5.46689 4.39207ZM18.6164 4.46446C18.9122 4.17449 19.387 4.17921 19.677 4.475C21.5771 6.41326 22.75 9.07043 22.75 12C22.75 14.9645 21.5491 17.6499 19.609 19.5938C19.3164 19.887 18.8415 19.8875 18.5484 19.5949C18.2552 19.3023 18.2547 18.8274 18.5473 18.5342C20.2182 16.86 21.25 14.5512 21.25 12C21.25 9.47873 20.2422 7.1943 18.6059 5.52507C18.3159 5.22928 18.3206 4.75443 18.6164 4.46446ZM8.30923 7.48757C8.59226 7.79001 8.57652 8.26462 8.27408 8.54765C7.32517 9.43564 6.75 10.6502 6.75 11.9822C6.75 13.3297 7.33869 14.5573 8.30756 15.4479C8.61251 15.7282 8.63248 16.2026 8.35216 16.5076C8.07185 16.8125 7.59739 16.8325 7.29244 16.5522C6.03967 15.4006 5.25 13.7824 5.25 11.9822C5.25 10.203 6.02148 8.60128 7.24916 7.45242C7.5516 7.16939 8.02621 7.18513 8.30923 7.48757ZM15.7429 7.52559C16.0292 7.22626 16.5039 7.21571 16.8033 7.50202C18.0005 8.64714 18.75 10.2286 18.75 11.9822C18.75 13.7568 17.9825 15.3548 16.7604 16.503C16.4586 16.7867 15.9839 16.7719 15.7003 16.47C15.4167 16.1681 15.4315 15.6935 15.7333 15.4099C16.6778 14.5225 17.25 13.3108 17.25 11.9822C17.25 10.6692 16.6911 9.47046 15.7664 8.58599C15.4671 8.29968 15.4566 7.82492 15.7429 7.52559Z"
                            fill="#fafafa"
                          />{" "}
                        </g>{" "}
                        <path
                          d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z"
                          fill="#fafafa"
                        />{" "}
                      </g>
                    </svg>
                  </button>
                </a>
                {/* <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-btn"
                >
                  <button className="button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                </a> */}
              </div>
            </div>

            {/* Touch or Mouse Events */}
            <div
              className="portfolio-media-wrapper relative"
              onTouchStart={() => {
                const video = document.querySelector(`#video-${project.id}`);
                if (video) {
                  video.style.opacity = 1;
                  playVideo(video);
                }
              }}
              onTouchEnd={() => {
                const video = document.querySelector(`#video-${project.id}`);
                if (video) {
                  video.style.opacity = 0;
                  pauseVideo(video);
                }
              }}
              onMouseEnter={() => {
                const video = document.querySelector(`#video-${project.id}`);
                if (video) {
                  video.style.opacity = 1;
                  playVideo(video);
                }
              }}
              onMouseLeave={() => {
                const video = document.querySelector(`#video-${project.id}`);
                if (video) {
                  video.style.opacity = 0;
                  pauseVideo(video);
                }
              }}
            />
          </div>
        ))}
      </div>

      {/* Visit Portfolio Button */}
      <div className="flex justify-center mt-8">
        <button class=" relative inline-block text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span class="relative">Visit more Projects</span>
          </span>
          <span
            class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
