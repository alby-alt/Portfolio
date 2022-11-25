import React,{ useState } from 'react';
import "./services.css";

const Services = () => {
   const [toggleState, setToggleState] = useState()
    
   const toggleTab = (index) => {
         setToggleState(index);
    }
  return (
   <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer 🙄</span>

      <div className="services__container container grid">
       
        {/* SERVICES 1 */}
       <div className="services__content">
      <div>
        <i className="uil uil-web-grid services__icon"></i>
        <h3 className="services__title">Product <br /> Designer</h3>
      </div>

        <span className="services__button" onClick={() =>
          toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right
               services__button-icon">
            </i>
            {/* console.log('ProductDesigner') */}
        </span>

         <div className={toggleState === 1 ? "services__modal active-modal"
         : "services__modal" }>
          <div className="services__modal-content">
            <i onClick={()=> toggleTab(0)} className="uil uil-times
            services__modal-close"></i>

            <h3 className="services__modal-title">Product Designer</h3>
            <p className="services__modal-descriptions">
              with more than 1 years of experience.
              Providing quality work to clients and companies.
            </p>

            <ul className="services__modal-services grid">
              <li className="service__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                  I develop the user interface. 
                </p>
              </li>

              <li className="service__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                  Web page development. 
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 I create ux element interactions.
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 I position your company brand.
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
         </div>
       </div>
       
        {/* SERVICES 2 */}
       <div className="services__content">
        <div>
          <i className="uil uil-arrow  services__icon"></i>
          <h3 className="services__title">Ui/Ux <br /> Designer
          </h3>
        </div>

         <span className="services__button" onClick={() =>
        toggleTab(2)}>
          View More
          <i className="uil uil-arrow-right
         services__button-icon"></i></span>

         <div className={toggleState === 1 ? "services__modal active-modal"
         : "services__modal" }>
          <div className="services__modal-content">
            <i onClick={()=> toggleTab(0)} className="uil uil-times
            services__modal-close"></i>

            <h3 className="services__modal-title">Product Designer</h3>
            <p className="services__modal-descriptions">
              with more than 1 years of experience.
              Providing quality work to clients and companies.
            </p>

            <ul className="services__modal-services grid">
              <li className="service__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                  I develop the user interface. 
                </p>
              </li>

              <li className="service__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                  Web page development. 
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 I create ux element interactions.
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 I position your company brand.
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
         </div>
       </div>
       
        {/* SERVICES 3 */}
       <div className="services__content">
        <div>
          <i className="uil uil-edit  services__icon"></i>
          <h3 className="services__title">Visual <br /> Designer
          </h3>
        </div>

         <span className="services__button" onClick={() =>
            toggleTab(3)}>
          View More
          <i className="uil uil-arrow-right
         services__button-icon"></i></span>

         <div className={toggleState === 1 ? "services__modal active-modal"
         : "services__modal" }>
          <div className="services__modal  /* position: fixed; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0 , 0 ,0.5);
  z-index: var(--z-modal); 
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  opacity: 0;
  /* visibility: visible; */
  transition: .3s;-content">
            <i onClick={()=> toggleTab(0)} className="uil uil-times
            services__modal-close"></i>

            <h3 className="services__modal-title">Product Designer</h3>
            <p className="services__modal-descriptions">
              with more than 1 years of experience.
              Providing quality work to clients and companies.
            </p>

            <ul className="services__modal-services grid">
              <li className="service__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                  I develop the user interface. 
                </p>
              </li>

              <li className="service__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                  Web page development. 
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 I create ux element interactions.
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 I position your company brand.
                </p>
              </li>

              <li className="services__modal-services">
                <i className="uil uil-check-circle
                services__modal-icon"></i>
                <p className="services__modal-info">
                 Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
         </div>
       </div>
       
      </div>
   </section>
  );
};

export default Services;