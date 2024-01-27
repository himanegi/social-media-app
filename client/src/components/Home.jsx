// import React from "react";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <>
//       <Link
//         to="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500&display=swap"
//         rel="stylesheet"
//       />
//       <div className="dashboard">
//         {/* <!-- Sidebar --> */}
//         <aside className="sidebar scrollbar__style">
//           <h2 className="sidebar__title">
//             Sales<span>_Dashboard</span>
//           </h2>
//           <div className="sidebar__profile">
//             <img
//               src="https://assets.codepen.io/1610873/aiony-haust-3TLl_97HNJo-unsplash.jpg"
//               alt="Unplash - Aiony Haust"
//               className="sidebar__profile__img"
//             />
//             <div className="sidebar__profile__data">
//               <p className="sidebar__profile__data__name">Sarah J.</p>
//               <i className="fa-solid fa-right-from-bracket sidebar__profile__data__icon"></i>
//             </div>
//           </div>
//           <nav className="sidebarNav">
//             <ul className="sidebarNav__list">
//               <li className="sidebarNav__item">
//                 <a
//                   href="#"
//                   className="sidebarNav__link sidebarNav__link--active"
//                 >
//                   <i className="sidebarNav__icon fa-solid fa-gear"></i>
//                   <span className="sidebarNav__text">SETTINGS</span>
//                   <span className="sidebarNav__switch" data-sidebar="settings">
//                     +
//                   </span>
//                 </a>
//                 <ul className="submenu" data-sidebar="settings">
//                   <li className="submenu__item">
//                     <a href="#" className="submenu__link">
//                       Profile
//                     </a>
//                   </li>
//                   <li className="submenu__item">
//                     <a href="#" className="submenu__link">
//                       Dashboard
//                     </a>
//                   </li>
//                 </ul>
//                 <div className="sidebarNav__divider"></div>
//               </li>
//               <li className="sidebarNav__item">
//                 <a
//                   href="#"
//                   className="sidebarNav__link sidebarNav__link--active"
//                 >
//                   <i className="fa-solid fa-chart-column sidebarNav__icon"></i>
//                   <span className="sidebarNav__text">SALES</span>
//                   <span className="sidebarNav__switch" data-sidebar="sales">
//                     +
//                   </span>
//                 </a>
//                 <ul className="submenu" data-sidebar="sales">
//                   <li className="submenu__item">
//                     <a href="#" className="submenu__link">
//                       Leads
//                     </a>
//                   </li>
//                   <li className="submenu__item">
//                     <a href="#" className="submenu__link">
//                       Statistics
//                     </a>
//                   </li>
//                   <li className="submenu__item">
//                     <a href="#" className="submenu__link">
//                       Products
//                     </a>
//                   </li>
//                 </ul>
//                 <div className="sidebarNav__divider"></div>
//               </li>
//               <li className="sidebarNav__item">
//                 <a
//                   href="#"
//                   className="sidebarNav__link sidebarNav__link--active"
//                 >
//                   <i className="fa-solid fa-user-group sidebarNav__icon sidebarNav__iconSizeCustomer"></i>
//                   <span className="sidebarNav__text">CUSTOMER</span>
//                   <span className="sidebarNav__switch" data-sidebar="customer">
//                     +
//                   </span>
//                 </a>
//                 <ul
//                   className="submenu closed-by-default"
//                   data-sidebar="customer"
//                 >
//                   <li className="submenu__item">
//                     <a href="#" className="submenu__link">
//                       New Customer
//                     </a>
//                   </li>
//                   <li className="submenu__item">
//                     <a href="#" className="submenu__link">
//                       Highest Sales
//                     </a>
//                   </li>
//                   <li className="submenu__item">
//                     <a href="#" className="submenu__link">
//                       Region
//                     </a>
//                   </li>
//                 </ul>
//                 <div className="sidebarNav__divider"></div>
//               </li>
//               <li className="sidebarNav__item">
//                 <a
//                   href="#"
//                   className="sidebarNav__link sidebarNav__link--active"
//                 >
//                   <i className="fa-solid fa-layer-group sidebarNav__icon sidebarNav__iconSizeChannels"></i>
//                   <span className="sidebarNav__text">CHANNEL</span>
//                   <span className="sidebarNav__switch" data-sidebar="channels">
//                     +
//                   </span>
//                 </a>
//                 <ul
//                   className="submenu closed-by-default"
//                   data-sidebar="channels"
//                 >
//                   <li className="submenu__item">
//                     <a href="#" className="submenu__link">
//                       Field Sales
//                     </a>
//                   </li>
//                   <li className="submenu__item">
//                     <a href="#" className="submenu__link">
//                       Customer Hotline
//                     </a>
//                   </li>
//                   <li className="submenu__item">
//                     <a href="#" className="submenu__link">
//                       Online
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//             <div className="sidebar__button">
//               <span>Download</span>
//               <i className="fa-solid fa-download"></i>
//             </div>
//           </nav>
//         </aside>
//         {/* <!-- Dashboard Content --> */}
//         <main className="dashboard__content">
//           <h3 className="dashboard__content__title">Sales Dashboard Sumary</h3>
//           <div className="dashboard__grid">
//             {/* <!-- ROW ONE --> */}
//             <label
//               className="dashboard__grid__selectLabel grid__stagger"
//               id="statistic-time"
//             >
//               Auto range:
//               <select
//                 className="dashboard__grid__selectLabel__select"
//                 name="time"
//               >
//                 <option value="month">Month</option>
//                 <option value="year">Year</option>
//                 <option value="allTime">All</option>
//               </select>
//             </label>
//             <label
//               className="dashboard__grid__selectLabel grid__stagger"
//               id="statistic-region"
//             >
//               Region:
//               <select
//                 className="dashboard__grid__selectLabel__select"
//                 name="region"
//                 style="margin-top: 10px"
//               >
//                 <option value="usa">USA</option>
//                 <option value="emea">EMEA</option>
//                 <option value="allRegions">All regions</option>
//               </select>
//             </label>
//             <label
//               className="dashboard__grid__selectLabel grid__stagger"
//               id="statistic-channel"
//             >
//               Sales channel:
//               <select
//                 className="dashboard__grid__selectLabel__select"
//                 name="channel"
//               >
//                 <option value="allChannel">All Channels</option>
//                 <option value="field">Field Sales</option>
//                 <option value="web">Online</option>
//                 <option value="hotline">Customer Hotline</option>
//               </select>
//             </label>
//             <div className="sales__data grid__stagger" id="salesData">
//               <div className="sales__data__profit">
//                 <span className="sales__data__profit__icon">
//                   <i className="fa-solid fa-coins"></i>
//                 </span>
//                 <span className="sales__data__profit__text">Profit</span>
//                 <span className="sales__data__profit__result">+ 7%</span>
//               </div>
//               <div className="sales__data__margin">
//                 <span className="sales__data__margin__icon">
//                   <i className="fa-solid fa-percent"></i>
//                 </span>
//                 <span className="sales__data__margin__text">Margin</span>
//                 <span className="sales__data__margin__result">+ 14%</span>
//               </div>
//             </div>

//             {/* <!-- ROW TWO SALES FIGURES, MESSAGE --> */}
//             <div
//               className="dashboard__grid__salesFigures card-purple grid__stagger"
//               id="totalCustomer"
//             >
//               <h5 className="dashboard__grid__salesFigures__title">
//                 Total Sales
//               </h5>
//               <p className="dashboard__grid__salesFigures__salesValues">
//                 <span className="animatedCount">91.528 </span>$
//               </p>
//               <p className="dashboard__grid__salesFigures__winOrLoose">
//                 14%<i className="fa-solid fa-thumbs-up"></i>
//               </p>
//               <p className="dashboard__grid__salesFigures__period">
//                 vs previous 30 days days
//               </p>
//             </div>
//             <div
//               className="dashboard__grid__salesFigures card-blue grid__stagger"
//               id="orders"
//             >
//               <h5 className="dashboard__grid__salesFigures__title">
//                 Orders per Month
//               </h5>
//               <p className="dashboard__grid__salesFigures__salesValues">
//                 <span className="animatedCount">136</span>
//               </p>
//               <p className="dashboard__grid__salesFigures__winOrLoose">
//                 7% <i className="fa-solid fa-thumbs-down"></i>
//               </p>
//               <p className="dashboard__grid__salesFigures__period">
//                 vs previous 30 days days
//               </p>
//             </div>
//             <div
//               className="dashboard__grid__salesFigures card-purple grid__stagger"
//               id="salesVolume"
//             >
//               <h5 className="dashboard__grid__salesFigures__title">
//                 Average Contract
//               </h5>
//               <p className="dashboard__grid__salesFigures__salesValues">673</p>
//               <p className="dashboard__grid__salesFigures__winOrLoose">
//                 12% <i className="fa-solid fa-thumbs-up"></i>
//               </p>
//               <p className="dashboard__grid__salesFigures__period">
//                 vs previous 30 days days
//               </p>
//             </div>
//             <div
//               className="dashboard__grid__salesFigures card-blue grid__stagger"
//               id="increase"
//             >
//               <h5 className="dashboard__grid__salesFigures__title">
//                 Growth Rate
//               </h5>
//               <p className="dashboard__grid__salesFigures__salesValues dashboard__grid__salesFigures__growth">
//                 <span className="animatedCount">12%</span>
//               </p>
//             </div>
//             <div className="message__center grid__stagger" id="messageBox">
//               <h3 className="message__center__title">Messages:</h3>
//               <div className="message__center__container scrollbar__style">
//                 <div className="message__center__wrapper">
//                   <img
//                     src="https://assets.codepen.io/1610873/Agnes.jpg"
//                     alt="Unsplash - Christina @ wocintechchat.com"
//                     className="message__center__img"
//                   />
//                   <p className="message__center__message">
//                     <span className="message__center__message__from">
//                       Agnes (Customer Support)
//                     </span>
//                     <span className="message__center__message__timeDate">
//                       Today 18:17 am
//                     </span>
//                     <span className="message__center__message__text">
//                       Please call Jonathan James from Fluid back. He has an
//                       urgent query regarding his order
//                     </span>
//                   </p>
//                   <button className="message__center__message__question">
//                     Reply
//                   </button>
//                   <button className="message__center__message__done">
//                     Done
//                   </button>
//                 </div>
//                 <div className="message__center__line"></div>
//                 <div className="message__center__wrapper">
//                   <img
//                     src="https://assets.codepen.io/1610873/Jonny.jpg"
//                     alt="Unsplash - Ransford Quaye"
//                     className="message__center__img"
//                   />
//                   <p className="message__center__message">
//                     <span className="message__center__message__from">
//                       Jonny (Sales Support)
//                     </span>
//                     <span className="message__center__message__timeDate">
//                       Today 15:33 pm
//                     </span>
//                     <span className="message__center__message__text">
//                       The order from Dubidor Inc. is awaiting approval. Please
//                       check the details again and call back
//                     </span>
//                   </p>
//                   <button className="message__center__message__question">
//                     Reply
//                   </button>
//                   <button className="message__center__message__done">
//                     Done
//                   </button>
//                 </div>
//                 <div className="message__center__line"></div>
//                 <div className="message__center__wrapper">
//                   <img
//                     src="https://assets.codepen.io/1610873/Amy.jpg"
//                     alt="Unsplash - Joel Mott"
//                     className="message__center__img"
//                   />
//                   <p className="message__center__message">
//                     <span className="message__center__message__from">
//                       Amy (Field Sales)
//                     </span>
//                     <span className="message__center__message__timeDate">
//                       Today 16:23 pm
//                     </span>
//                     <span className="message__center__message__text">
//                       The customer Rohmeyer would like an appointment with both
//                       of us. Please call back
//                     </span>
//                   </p>
//                   <button className="message__center__message__question">
//                     Reply
//                   </button>
//                   <button className="message__center__message__done">
//                     Done
//                   </button>
//                 </div>
//                 <div className="message__center__line"></div>
//                 <div className="message__center__wrapper">
//                   <img
//                     src="https://assets.codepen.io/1610873/Julia.jpg"
//                     alt="Unsplash - Jake Nackos"
//                     className="message__center__img"
//                   />
//                   <p className="message__center__message">
//                     <span className="message__center__message__from">
//                       Julia (Field Sales)
//                     </span>
//                     <span className="message__center__message__timeDate">
//                       Yesterday 10:37 am
//                     </span>
//                     <span className="message__center__message__text">
//                       The customer Amsora received its advertising subsidy in
//                       July. I sent him the payment receipt
//                     </span>
//                   </p>
//                   <button className="message__center__message__question">
//                     Reply
//                   </button>
//                   <button className="message__center__message__done">
//                     Done
//                   </button>
//                 </div>
//                 <div className="message__center__line"></div>
//                 <div className="message__center__wrapper">
//                   <img
//                     src="https://assets.codepen.io/1610873/Jason.jpg"
//                     alt="Unsplash - Albert Dera"
//                     className="message__center__img"
//                   />
//                   <p className="message__center__message">
//                     <span className="message__center__message__from">
//                       Jason (Customer Support)
//                     </span>
//                     <span className="message__center__message__timeDate">
//                       Yesterday 08:03 am
//                     </span>
//                     <span className="message__center__message__text">
//                       The customer Appencell has canceled the appointment for
//                       August. He asks to call back to set a new appointment
//                     </span>
//                   </p>
//                   <button className="message__center__message__question">
//                     Reply
//                   </button>
//                   <button className="message__center__message__done">
//                     Done
//                   </button>
//                 </div>
//                 <div className="message__center__line"></div>
//                 <div className="message__center__wrapper">
//                   <img
//                     src="https://assets.codepen.io/1610873/Luna.jpg"
//                     alt="Unsplash - Christopher Campbell"
//                     className="message__center__img"
//                   />
//                   <p className="message__center__message">
//                     <span className="message__center__message__from">
//                       Luna (Field Sales)
//                     </span>
//                     <span className="message__center__message__timeDate">
//                       14.11 - 14:49 pm
//                     </span>
//                     <span className="message__center__message__text">
//                       Hi Julia, haven't heard from you in a long time. If you
//                       have time and feel like it, let's have lunch later?
//                     </span>
//                   </p>
//                   <button className="message__center__message__question">
//                     Reply
//                   </button>
//                   <button className="message__center__message__done">
//                     Done
//                   </button>
//                 </div>
//                 <div className="message__center__line"></div>
//                 <div className="message__center__wrapper">
//                   <img
//                     src="https://assets.codepen.io/1610873/christopher.jpg"
//                     alt="Unsplash - Radu Florin"
//                     className="message__center__img"
//                   />
//                   <p className="message__center__message">
//                     <span className="message__center__message__from">
//                       Christopher (Accounting)
//                     </span>
//                     <span className="message__center__message__timeDate">
//                       07.11 - 11:15 am
//                     </span>
//                     <span className="message__center__message__text">
//                       I have a question about Novatil Invest and the discount
//                       granted for the two invoices from December
//                     </span>
//                   </p>
//                   <button className="message__center__message__question">
//                     Reply
//                   </button>
//                   <button className="message__center__message__done">
//                     Done
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* <!-- ROW THREE CHARTS--> */}
//             <div id="data-chartOne" className="grid__stagger">
//               <h3>Sales figures by month:</h3>
//               <canvas id="line-chart"></canvas>
//             </div>
//             <div id="data-chartTwo" className="grid__stagger">
//               <h3>Product categories:</h3>
//               <canvas id="doughnut"></canvas>
//             </div>
//             <div id="data-chartThree" className="grid__stagger">
//               <h3>Product categories:</h3>
//               <canvas id="polar-area-chart"></canvas>
//             </div>
//           </div>
//           <div className="addMoreChartsBtn">
//             <i className="fa-solid fa-circle-plus"></i>
//           </div>
//         </main>
//       </div>
//       ;
//     </>
//   );
// }

// export default Home;

import React from "react";

function Home() {
  return <div>Home Page</div>;
}

export default Home;
