// // // // // import React, { useState, useEffect } from "react";
// // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // const Navbar = () => {
// // // // //   const [isVisible, setIsVisible] = useState(true);
// // // // //   const [lastScrollY, setLastScrollY] = useState(0);
// // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       const currentScrollY = window.scrollY;

// // // // //       if (currentScrollY < lastScrollY) {
// // // // //         // User scrolled up → Show navbar
// // // // //         setIsVisible(true);
// // // // //       } else if (currentScrollY > lastScrollY) {
// // // // //         // User scrolled down → Hide navbar
// // // // //         setIsVisible(false);
// // // // //       }

// // // // //       setLastScrollY(currentScrollY);
// // // // //     };

// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, [lastScrollY]);

// // // // //   return (
// // // // //     <motion.div
// // // // //       initial={{ y: 0 }}
// // // // //       animate={{ y: isVisible ? 0 : "-100%" }}
// // // // //       transition={{ duration: 0.3, ease: "easeInOut" }}
// // // // //       className="w-full flex justify-center fixed top-0 left-0 z-50 p-4"
// // // // //     >
// // // // //       <div className="w-full max-w-6xl backdrop-blur-md bg-white/75 border border-white/20 rounded-2xl shadow-lg p-3 flex justify-between items-center">
// // // // //         {/* Logo */}
// // // // //         <div className="text-black text-lg font-bold">Mahtab Tech</div>

// // // // //         {/* Desktop Navigation */}
// // // // //         <nav className="hidden md:flex space-x-6">
// // // // //           <a href="#" className="text-black text-md">
// // // // //             Home
// // // // //           </a>
// // // // //           <a href="#" className="text-black text-md">
// // // // //             About
// // // // //           </a>
// // // // //           <a href="#" className="text-black text-md">
// // // // //             Services
// // // // //           </a>
// // // // //           <a href="#" className="text-black text-md">
// // // // //             Portfolio
// // // // //           </a>
// // // // //           <a href="#" className="text-black text-md">
// // // // //             Contact
// // // // //           </a>
// // // // //         </nav>

// // // // //         {/* Get Started Button */}
// // // // //         <button className="hidden md:block bg-white text-black px-4 py-2 rounded-lg font-semibold">
// // // // //           Get Started
// // // // //         </button>

// // // // //         {/* Hamburger Icon */}
// // // // //         <div
// // // // //           className="md:hidden text-black text-2xl cursor-pointer"
// // // // //           onClick={() => setMenuOpen(!menuOpen)}
// // // // //         >
// // // // //           ☰
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Mobile Menu */}
// // // // //       <AnimatePresence>
// // // // //         {menuOpen && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: -20 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             exit={{ opacity: 0, y: -20 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //             className="fixed top-16 left-0 w-full bg-white shadow-lg py-5 flex flex-col items-center space-y-4"
// // // // //           >
// // // // //             <a href="#" className="text-black text-md">
// // // // //               Home
// // // // //             </a>
// // // // //             <a href="#" className="text-black text-md">
// // // // //               About
// // // // //             </a>
// // // // //             <a href="#" className="text-black text-md">
// // // // //               Services
// // // // //             </a>
// // // // //             <a href="#" className="text-black text-md">
// // // // //               Portfolio
// // // // //             </a>
// // // // //             <a href="#" className="text-black text-md">
// // // // //               Contact
// // // // //             </a>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </motion.div>
// // // // //   );
// // // // // };

// // // // // export default Navbar;

// // // // import React, { useState, useEffect } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // const Navbar = () => {
// // // //   const [isVisible, setIsVisible] = useState(true);
// // // //   const [lastScrollY, setLastScrollY] = useState(0);
// // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       const currentScrollY = window.scrollY;

// // // //       if (currentScrollY > lastScrollY) {
// // // //         // Scroll down → Hide navbar
// // // //         setIsVisible(false);
// // // //       } else {
// // // //         // Scroll up → Show navbar
// // // //         setIsVisible(true);
// // // //       }

// // // //       setLastScrollY(currentScrollY);
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, [lastScrollY]);

// // // //   return (
// // // //     <motion.div
// // // //       initial={{ y: 0 }}
// // // //       animate={{ y: isVisible ? 0 : "-100%" }}
// // // //       transition={{ duration: 0.5, ease: "easeInOut" }}
// // // //       className="w-full flex justify-center fixed top-0 left-0 z-50 p-4"
// // // //     >
// // // //       <div className="w-full max-w-6xl backdrop-blur-md bg-white/75 border border-white/20 rounded-2xl shadow-lg p-3 flex justify-between items-center">
// // // //         {/* Logo */}
// // // //         <div className="text-black text-lg font-bold">Mahtab Tech</div>

// // // //         {/* Desktop Navigation */}
// // // //         <nav className="hidden md:flex space-x-6">
// // // //           <a href="#" className="text-black text-md">
// // // //             Home
// // // //           </a>
// // // //           <a href="#" className="text-black text-md">
// // // //             About
// // // //           </a>
// // // //           <a href="#" className="text-black text-md">
// // // //             Services
// // // //           </a>
// // // //           <a href="#" className="text-black text-md">
// // // //             Portfolio
// // // //           </a>
// // // //           <a href="#" className="text-black text-md">
// // // //             Contact
// // // //           </a>
// // // //         </nav>

// // // //         {/* Get Started Button */}
// // // //         <button className="hidden md:block bg-black  text-white px-4 py-2 rounded-lg font-semibold">
// // // //           Get Started
// // // //         </button>

// // // //         {/* Hamburger Icon */}
// // // //         <div
// // // //           className="md:hidden text-black text-2xl cursor-pointer"
// // // //           onClick={() => setMenuOpen(!menuOpen)}
// // // //         >
// // // //           ☰
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Menu */}
// // // //       <AnimatePresence>
// // // //         {menuOpen && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: -20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             exit={{ opacity: 0, y: -20 }}
// // // //             transition={{ duration: 0.3 }}
// // // //             className="fixed top-16 left-0 w-full bg-white shadow-lg py-5 flex flex-col items-center space-y-4"
// // // //           >
// // // //             <a href="#" className="text-black text-md">
// // // //               Home
// // // //             </a>
// // // //             <a href="#" className="text-black text-md">
// // // //               About
// // // //             </a>
// // // //             <a href="#" className="text-black text-md">
// // // //               Services
// // // //             </a>
// // // //             <a href="#" className="text-black text-md">
// // // //               Portfolio
// // // //             </a>
// // // //             <a href="#" className="text-black text-md">
// // // //               Contact
// // // //             </a>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </motion.div>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // // // Navbar hides immediately when scrolling down and appears smoothly when scrolling up.

// // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // import gsap from 'gsap';
// // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // // import Logo from './Logo';

// // // // // const Navbar = () => {

// // // // //     const menuRef = useRef(null);
// // // // //     let flag = true;

// // // // //     const handleMenuToggle = () => {

// // // // //         if (flag) {
// // // // //             menuRef.current.classList.add('menu_active');
// // // // //             gsap.to('.nav_line', {
// // // // //                 width: '100%',
// // // // //                 duration: 0.5,
// // // // //                 ease: 'power3.inOut',
// // // // //                 opacity: 1,
// // // // //                 delay: 0.35,
// // // // //             });
// // // // //             gsap.to('.mobile .logo svg path', {
// // // // //                 fill: 'white',
// // // // //             });
// // // // //             gsap.to('.mobile i', {
// // // // //                 color: 'white',
// // // // //             });
// // // // //             flag = false;
// // // // //         } else {
// // // // //             menuRef.current.classList.remove('menu_active');
// // // // //             gsap.to('.nav_line', {
// // // // //                 width: 0,
// // // // //                 duration: 0.5,
// // // // //                 ease: 'power3.inOut',
// // // // //                 opacity: 1,
// // // // //             });
// // // // //             if (document.body.getAttribute('theme') != 'black') {
// // // // //                 gsap.to('.mobile .logo svg path', {
// // // // //                     fill: 'black',
// // // // //                 });
// // // // //                 gsap.to('.mobile i', {
// // // // //                     color: 'black',
// // // // //                 });
// // // // //             }
// // // // //             flag = true;
// // // // //         }

// // // // //     };

// // // // //     // useEffect(() => {
// // // // //     //     gsap.registerPlugin(ScrollTrigger);

// // // // //     //     let ctx = gsap.context(() => {
// // // // //     //         gsap.from("nav ul li", {
// // // // //     //             delay: 2.3,
// // // // //     //             duration: 1,
// // // // //     //             opacity: 0,
// // // // //     //             stagger: 0.3,
// // // // //     //             x: -100,
// // // // //     //         });

// // // // //     //         gsap.from('nav .logo', {
// // // // //     //             delay: 2,
// // // // //     //             opacity: 0,
// // // // //     //             y: -200,
// // // // //     //             duration: 2.4,
// // // // //     //             ease: 'elastic.inOut',
// // // // //     //         });
// // // // //     //     });

// // // // //     //     ScrollTrigger.refresh();

// // // // //     //     return () => ctx.revert();
// // // // //     // }, []);

// // // // //     return (
// // // // //         <>
// // // // //             <nav className='navbar w-full fixed z-50 top-0 left-0 px-8 sm:px-14 py-6 sm:py-3'>

// // // // //                 <div className="sm:flex items-center justify-between hidden">
// // // // //                     <div className='logo'>
// // // // //                         <Logo width='40%' height='40%' />
// // // // //                     </div>
// // // // //                     <ul className='flex items-center gap-6'>
// // // // //                         {
// // // // //                             ['solutions', 'about', 'insights', 'team', 'careers'].map((item, index) => {
// // // // //                                 return <li className='capitalize' key={index}>{item}</li>
// // // // //                             })
// // // // //                         }
// // // // //                         <button className='btn_org bg_org px-2 py-1.5 rounded'>
// // // // //                             <span>Contact Us</span>
// // // // //                         </button>
// // // // //                     </ul>
// // // // //                 </div>

// // // // //                 <div className="mobile sm:hidden flex items-center justify-between relative">
// // // // //                     <div className='logo relative z-[70]'>
// // // // //                         <Logo width='50%' height='50%' />
// // // // //                     </div>
// // // // //                     <button onClick={handleMenuToggle} type='button' className='text-4xl transition_all relative z-[70]'>
// // // // //                         <i className='ri-menu-line'></i>
// // // // //                     </button>
// // // // //                     <div className='nav_line z-[70] fixed top-20 opacity-0 left-0 w-0 h-[1.25px] bg-white' />
// // // // //                 </div>

// // // // //                 <div ref={menuRef} className='fixed mobile_menu transition_all h-screen w-full top-[-150%] left-0 bg-black z-40 flex flex-col items-center justify-center'>
// // // // //                     <ul className='flex flex-col items-center gap-6'>
// // // // //                         {
// // // // //                             ['solutions', 'about', 'insights', 'team', 'careers'].map((item, index) => {
// // // // //                                 return <li className='capitalize text-white' key={index}>{item}</li>
// // // // //                             })
// // // // //                         }
// // // // //                         <button className='btn_org bg_org px-2 py-1.5 rounded'>
// // // // //                             <span>Contact Us</span>
// // // // //                         </button>
// // // // //                     </ul>
// // // // //                 </div>

// // // // //             </nav>
// // // // //         </>
// // // // //     );
// // // // // };

// // // // // export default Navbar;

// // // import React, { useState, useEffect } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // const Navbar = () => {
// // //   const [isVisible, setIsVisible] = useState(true);
// // //   const [lastScrollY, setLastScrollY] = useState(0);
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const currentScrollY = window.scrollY;
// // //       setIsVisible(currentScrollY < lastScrollY);
// // //       setLastScrollY(currentScrollY);
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, [lastScrollY]);

// // //   return (
// // //     <motion.div
// // //       initial={{ y: 0 }}
// // //       animate={{ y: isVisible ? 0 : "-100%" }}
// // //       transition={{ duration: 0.5, ease: "easeInOut" }}
// // //       className="w-full flex justify-center fixed top-0 left-0 z-50 p-4"
// // //     >
// // //       <div className="w-full max-w-6xl backdrop-blur-md bg-white/75 border border-white/20 rounded-2xl shadow-lg p-3 flex justify-between items-center">
// // //         {/* Logo */}
// // //         <div className="text-black text-lg font-bold">Mahtab Tech</div>

// // //         {/* Desktop Navigation */}
// // //         <nav className="hidden md:flex space-x-6">
// // //           {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
// // //             <a
// // //               key={item}
// // //               href="#"
// // //               className="text-black text-md hover:text-gray-600 transition"
// // //             >
// // //               {item}
// // //             </a>
// // //           ))}
// // //         </nav>

// // //         {/* Get Started Button */}
// // //         <button className="hidden md:block bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
// // //           Get Started
// // //         </button>

// // //         {/* Hamburger Icon */}
// // //         <div
// // //           className="md:hidden cursor-pointer flex flex-col items-center justify-center gap-1 w-8 h-8 relative"
// // //           onClick={() => setMenuOpen(!menuOpen)}
// // //         >
// // //           <motion.div
// // //             animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
// // //             className="w-6 h-1 bg-black rounded-md transition-all"
// // //           />
// // //           <motion.div
// // //             animate={{ opacity: menuOpen ? 0 : 1 }}
// // //             className="w-6 h-1 bg-black rounded-md transition-all"
// // //           />
// // //           <motion.div
// // //             animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
// // //             className="w-6 h-1 bg-black rounded-md transition-all"
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       <AnimatePresence>
// // //         {menuOpen && (
// // //           <motion.div
// // //             initial={{ opacity: 0, y: -20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: -20 }}
// // //             transition={{ duration: 0.3 }}
// // //             className="fixed top-16 left-0 w-full bg-white shadow-lg py-5 flex flex-col items-center space-y-4 border-t"
// // //           >
// // //             {["Home", "About", "Services", "Portfolio", "Contact"].map(
// // //               (item) => (
// // //                 <a
// // //                   key={item}
// // //                   href="#"
// // //                   className="text-black text-md hover:text-gray-600 transition"
// // //                 >
// // //                   {item}
// // //                 </a>
// // //               )
// // //             )}
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </motion.div>
// // //   );
// // // };

// // // export default Navbar;

// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const Navbar = () => {
// //   const [isVisible, setIsVisible] = useState(true);
// //   const [lastScrollY, setLastScrollY] = useState(0);
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollY = window.scrollY;
// //       setIsVisible(currentScrollY < lastScrollY);
// //       setLastScrollY(currentScrollY);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [lastScrollY]);

// //   return (
// //     <motion.div
// //       initial={{ y: 0 }}
// //       animate={{ y: isVisible ? 0 : "-100%" }}
// //       transition={{ duration: 0.5, ease: "easeInOut" }}
// //       className="w-full flex justify-center fixed top-0 left-0 z-50 p-4"
// //     >
// //       <div className="w-full max-w-6xl backdrop-blur-md bg-white/75 border border-white/20 rounded-2xl shadow-lg p-3 flex justify-between items-center">
// //         {/* Logo */}
// //         <div className="text-black text-lg font-bold">Mahtab Tech</div>

// //         {/* Desktop Navigation */}
// //         <nav className="hidden md:flex space-x-6">
// //           {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
// //             <a
// //               key={item}
// //               href="#"
// //               className="text-black text-md hover:text-gray-600 transition"
// //             >
// //               {item}
// //             </a>
// //           ))}
// //         </nav>

// //         {/* Get Started Button */}
// //         <button className="hidden md:block bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
// //           Get Started
// //         </button>

// //         {/* Hamburger Icon */}
// //         <div
// //           className="md:hidden cursor-pointer flex flex-col items-center justify-center gap-1 w-8 h-8 relative"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //         >
// //           <motion.div
// //             animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
// //             className="w-6 h-1 bg-black rounded-md transition-all"
// //           />
// //           <motion.div
// //             animate={{ opacity: menuOpen ? 0 : 1 }}
// //             className="w-6 h-1 bg-black rounded-md transition-all"
// //           />
// //           <motion.div
// //             animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
// //             className="w-6 h-1 bg-black rounded-md transition-all"
// //           />
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {menuOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, x: "-100%" }}
// //             animate={{ opacity: 1, x: 0 }}
// //             exit={{ opacity: 0, x: "-100%" }}
// //             transition={{ duration: 0.5 }}
// //             className="fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center space-y-6"
// //           >
// //             {["Home", "About", "Services", "Portfolio", "Contact"].map(
// //               (item, index) => (
// //                 <motion.a
// //                   key={item}
// //                   href="#"
// //                   className="text-3xl font-semibold tracking-wider hover:text-gray-400 transition-all"
// //                   initial={{ opacity: 0, y: -20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.1, duration: 0.3 }}
// //                 >
// //                   {item}
// //                 </motion.a>
// //               )
// //             )}

// //             <motion.button
// //               className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.5, duration: 0.3 }}
// //             >
// //               Get Started
// //             </motion.button>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.div>
// //   );
// // };

// // export default Navbar;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full flex justify-center fixed top-0 left-0 z-50 p-4"
    >
      <div className="w-full max-w-6xl backdrop-blur-md bg-white/75 border border-white/20 rounded-2xl shadow-lg p-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-xl font-bold">Mahtab-Tech</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {[
            "Services",
            "Approach",
            "Benefits",
            "Our work",
            "FAQs",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-black text-md hover:text-gray-600 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Get Started Button */}
        {/* <button className="hidden md:block bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
          Get Started
        </button> */}
        {/* <div class="border w-full h-40 flex items-center justify-center"> */}
        <button class=" hidden md:block relative  text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span class="relative">Get Started</span>
          </span>
          <span
            class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
        {/* </div> */}

        {/* Hamburger Icon */}
        <div
          className="md:hidden cursor-pointer flex flex-col items-center justify-center gap-1 w-8 h-8 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.div
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            className="w-6 h-1 bg-black rounded-md transition-all"
          />
          <motion.div
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="w-6 h-1 bg-black rounded-md transition-all"
          />
          <motion.div
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            className="w-6 h-1 bg-black rounded-md transition-all"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center space-y-6"
          >
            <div
              className="absolute top-9 right-6 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <motion.div
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                className="w-6 h-1 bg-black rounded-md transition-all"
              />
              <motion.div
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="w-6 h-1 bg-black rounded-md transition-all"
              />
              <motion.div
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                className="w-6 h-1 bg-black rounded-md transition-all"
              />
            </div>

            {/* Menu Items */}
            {[
              "Services",
              "Approach",
              "Benefits",
              "Our work",
              "FAQs",
              "Contact",
            ].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="text-3xl font-semibold tracking-wider hover:text-gray-400 transition-all"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {item}
              </motion.a>
            ))}

            <motion.button
              className="relative inline-block text-lg group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span class="relative">Get Started</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </motion.button>

            {/* Social Icons */}
            <div className="absolute bottom-10 left-10 flex gap-6">
              <a
                href="https://github.com/Mahtab-Syed"
                className="text-2xl text-gray-800 hover:text-gray-600"
                target="_blank"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mahtab-ahmad-8ba27734a/"
                className="text-2xl text-gray-800 hover:text-gray-600"
                target="_blank"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
              {/* <a
                href="#"
                className="text-2xl text-gray-800 hover:text-gray-600"
              >
                <i className="ri-global-fill"></i>
              </a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsVisible(currentScrollY < lastScrollY);
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <motion.div
//       initial={{ y: 0 }}
//       animate={{ y: isVisible ? 0 : "-100%" }}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       className="w-full flex justify-center fixed top-0 left-0 z-50 p-4"
//     >
//       <div className="w-full max-w-6xl backdrop-blur-md bg-white/75 border border-white/20 rounded-2xl shadow-lg p-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-black text-lg font-bold">Mahtab Tech</div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6">
//           {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
//             <a
//               key={item}
//               href="#"
//               className="text-black text-md hover:text-gray-600 transition"
//             >
//               {item}
//             </a>
//           ))}
//         </nav>

//         {/* Get Started Button */}
//         {/* <button className="hidden md:block bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
//           Get Started
//         </button> */}
//         {/* <div class="border w-full h-40 flex items-center justify-center"> */}
//         <button class=" hidden md:block relative  text-lg group">
//           <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
//             <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//             <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
//             <span class="relative">Button</span>
//           </span>
//           <span
//             class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
//             data-rounded="rounded-lg"
//           ></span>
//         </button>
//         {/* </div> */}

//         {/* Hamburger Icon */}
//         <div
//           className="md:hidden cursor-pointer flex flex-col items-center justify-center gap-1 w-8 h-8 relative"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <motion.div
//             animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
//             className="w-6 h-1 bg-black rounded-md transition-all"
//           />
//           <motion.div
//             animate={{ opacity: menuOpen ? 0 : 1 }}
//             className="w-6 h-1 bg-black rounded-md transition-all"
//           />
//           <motion.div
//             animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
//             className="w-6 h-1 bg-black rounded-md transition-all"
//           />
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: "-100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "-100%" }}
//             transition={{ duration: 0.5 }}
//             className="fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center space-y-6"
//           >
//             <div
//               className="absolute top-9 right-6 cursor-pointer"
//               onClick={() => setMenuOpen(false)}
//             >
//               <motion.div
//                 animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
//                 className="w-6 h-1 bg-black rounded-md transition-all"
//               />
//               <motion.div
//                 animate={{ opacity: menuOpen ? 0 : 1 }}
//                 className="w-6 h-1 bg-black rounded-md transition-all"
//               />
//               <motion.div
//                 animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
//                 className="w-6 h-1 bg-black rounded-md transition-all"
//               />
//             </div>

//             {/* Menu Items */}
//             {["Home", "About", "Services", "Portfolio", "Contact"].map(
//               (item, index) => (
//                 <motion.a
//                   key={item}
//                   href="#"
//                   className="text-3xl font-semibold tracking-wider hover:text-gray-400 transition-all"
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.3 }}
//                 >
//                   {item}
//                 </motion.a>
//               )
//             )}

//             <motion.button
//               className="relative inline-block text-lg group"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.3 }}
//             >
//               <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
//                 <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//                 <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
//                 <span class="relative">Button</span>
//               </span>
//               <span
//                 class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
//                 data-rounded="rounded-lg"
//               ></span>
//             </motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Navbar;
