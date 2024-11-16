import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  // faAngleUp,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row justify-content-center py-4">
            {/* Logo Section */}
            {/* <div className="col-md-4 ps-4 mx-auto text-center">
              <span className="">
                <img
                  src="/assets/LOGO2.png"
                  className="img-fluid logo-image me-1"
                  alt="scales of justice logo"
                  width="50"
                  height="50"
                />
                <img
                  src="/assets/component.png"
                  className="img-fluid px-0 logo-text"
                  alt="Elif Ezgi Özkan cabinet de avocatura si insolventa"
                  width="150"
                  height="100"
                />
              </span>
              <p className="content px-5">
              Hukuk ve Danışmanlık büromuz hukuki ve mali zorluklar konusunda size rehberlik edebilir. Çıkarlarınızı korumaya ve size özelleştirilmiş çözümler sunmaya kendimizi adadık.
              </p>
            </div> */}

            <div className="col-md-4 ps-4 mx-auto text-center">
              <span className="brandAllContainer">
                <img
                  src="/assets/LOGO2.png"
                  className="img-fluid logo-image"
                  alt="scales of justice logo"
                  width="70"
                  height="70"
                />
                <div className="navbar-brand">
                  <h1>ELİF EZGİ</h1>
                  <h2 className="text-light">Hukuk ve Danışmanlık<br/>Bürosu</h2>
                </div>
              </span>
              <p className="content  px-5">
              Hukuk ve Danışmanlık büromuz hukuki ve mali zorluklar konusunda size rehberlik edebilir. Çıkarlarınızı korumaya ve size özelleştirilmiş çözümler sunmaya kendimizi adadık.
              </p>
            </div>

            {/* Contact Section */}
            <div className="col-md-4 text-center">
              <h6 className="pb-2">İletişim</h6>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="contact-icon"
                    title="av.elifezgialinamarin@yahoo.com"
                  />
                  <span className="fw-light px-2">av.elifezgi@gmail.com</span>
                </span>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="contact-icon"
                    title="+90 533 414 16 85"
                  />
                  <span className="px-2 fw-light">+90 (533) 414 16 85</span>
                </span>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="contact-icon"
                    title="Konya"
                  />
                  <span className="px-2 fw-light">Konya</span>
                </span>
              </div>
            </div>

            {/* Program section */}
            <div className="col-md-4 text-center mt-4 mt-md-0">
              <div>
                <h6 className="pb-2">Çalışma Saatleri</h6>
                <p className="fw-light">
                Pazartesi – Cumartesi: 08.00 – 18.00 <br />
                Pazar: Kapalı
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll up */}
        {/* <div>
          <a
            href="#top"
            aria-label="Navigheaza in partea de sus"
            className="scroll-to-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <FontAwesomeIcon icon={faAngleUp} className="up-icon" size="2x" />
          </a>
        </div> */}
        {/* WhatsAppWidget */}
        <div>
          <WhatsAppWidget
            phoneNo="+905334141685"
            position="right"
            iconSize="50"
            iconColor="white"
            iconBgColor="#25D366"
            headerIcon="assets/LOGO2.png"
            headerTxtColor="white"
            headerBgColor="#02182b"
            headerTitle="Birou de Avocatura si Insolventa"
            headerCaption="Online"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={
              <>
                Merhaba,
                <br />
                <br />Size nasıl yardımcı olabiliriz?
              </>
            }
            footerBgColor="#999"
            btnBgColor="#c2b697"
            btnTxtColor="black"
          />
        </div>
        {/* Copyright */}
        <div>
          <div className="bg-dark d-flex align-items-center justify-content-center">
            <hr></hr>
            <p className="copyright mb-0">©2024 Avukat Elif Ezgi Özkan</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
