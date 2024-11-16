import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFileCircleCheck,
  faCommentsDollar,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";
const Acasa = () => {
  return (
    <>
      <div className="home-page">
        <Helmet>
          <title>Avukat Elif Ezgi | Hukuk & Danışmanlık Bürosu</title>

          <meta
            name="description"
            content="Elif Ezgi Özkan liderliğindeki Hukuk ve İflas Büromuz, mahkemeler ve kamu makamları nezdinde hukuki veya iflas sorunları ve borç tahsilatı konusunda tavsiye, yardım ve temsil sağlamaktadır.            "
          />
        </Helmet>
        {/* HERO=========== */}
        <div className="container-fluid">
          <div className="row">
            <div className="hero-section">
              <div className="hero-overlay"></div>
              <div className="text-container d-flex flex-column justify-content-start align-items-start pt-6 slide">
                <div className="text-1 fs-2 pb-3">Avukat Elif Ezgi</div>
                <div className="text-2 fs-4">
                  HUKUK & DANIŞMANLIK BÜROSU
                  <span className="fw-bold">
                    <br></br> Konya ve İlçeleri, <br></br>
                    Karaman - Niğde - Antalya - AfyonKarahisar - Aksaray{" "}
                  </span>
                </div>
                <div className="text-3 fst-italic fw-light">
                  "Adaletin olmadığı yerde gerçek adalet yoktur ve adaletin
                  olmadığı yerde doğruluk bulunamaz." -{" "}
                  <span>Lucius Annaeus Seneca.</span>
                </div>
              </div>
              {/* horizontal buttons */}
              <div className="horizontal-btn d-none d-md-flex justify-content-center  align-items-end w-100 h-100">
                <div className=" col flex-grow-1">
                  <Link to="/contact">
                    <button
                      id="horizontal1"
                      className="btn btn-outline-dark btn-lg  type-button p-4 w-100 fw-bold"
                      aria-label="Programare"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                      </span>
                      RANDEVU
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/contact">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Cere o evaluare"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                      </span>
                      TEKLİF AL
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/informatii-utile">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Onorarii"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                      </span>
                      ÜCRETLER
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* small screens buttons*/}
            <div className="mobile-btn d-md-none d-flex justify-content-between pt-2">
              <Link to="/contact">
                <button
                  id="small"
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Programare"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                  </span>
                  RANDEVU AL
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Cere o evaluare"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                  </span>
                  TEKLİF AL                </button>
              </Link>
              <Link to="/informatii-utile">
                <button
                  className="btn btn-outline-dark type-button p-2 btn-md"
                  aria-label="Onorarii"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                  </span>
                  ÜCRETLER
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/*TE CONFRUNTI CU O PROBLEMA========= */}

        <section className="card py-5 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <h6 className="guide-text mb-4">GİRİŞ</h6>
                <h5 className="lh-base text-center pb-4">
                  Yasal veya miras sorunuyla mı karşı karşıyasınız?{" "}
                </h5>

                <p className="text-separator fw-normal">
                  <span className="ms-2"></span> Av. Elif Ezgi liderliğindeki
                  Hukuk ve Danışmanlık Büromuz, mahkemeler ve kamu makamları
                  nezdinde hukuki veya iflas sorunları ve borç tahsilatı
                  konusunda danışmanlık, yardım ve temsil sunmaktadır.
                  <span></span>
                  <br /> <br />
                  <span className="ms-4"></span>İş dünyasındaki kusursuz
                  imajınızı korurken yanınızda olmak ve sorunlarınıza en iyi
                  çözümleri bulmak istiyoruz.
                  <span></span>
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/law-justice.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt=" a gavel, scales of justice, and law books"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICII========= */}
        <div className="">
          <div className="row">
            <div className="col">
              <div className="services-section ">
                <div className="services-overlay "></div>

                <div className="services-content  servicesContainer container mt-3">
                  <h6 className=" guide-text">HİZMETLER</h6>

                  <h5 className="lh-base text-center pb-3">
                    Faaliyet Alanları
                  </h5>
                  <div className="row mt-3 gx-3 flex-column flex-md-row ">
                    <div className="col-md-6">
                      <h5 className="color text-center pb-4">Hukuk Firması</h5>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/barou.webp"
                          className="barou img-fluid mx-auto d-block rounded-2"
                          alt="sigla barou Konya"
                          width="150"
                          height="150"
                        />
                      </div>
                      <p className="pt-4 px-2">
                        Ticaret hukuku, şirket kuruluşları, medeni hukuk, iş
                        hukuku, aile hukuku, iflas prosedürü, borç tahsilatı,
                        idare hukuku vb. alanlarda yardım ve hukuki temsil.
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/avocatura">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Afla mai multe"
                          >
                            Daha fazlasını öğrenin...
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h5 className="color text-center pb-4">
                        Danışmanlık Ofisi
                      </h5>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/unpir.webp"
                          className="unpir img-fluid mx-auto d-block rounded-2"
                          alt="sigla unpir"
                          width="150"
                          height="150"
                        />
                      </div>
                      <p className="pt-4 px-2">
                        İflas öncesi aşamadaki hizmetler, ticari şirketlerin
                        birleşmeleri ve bölünmeleri, iflas, adli yeniden
                        yapılanma ve yeniden yapılanma, iflas, adli ve idari
                        tasfiye, borç tahsilatı, varlık değerlendirmesi ve
                        aktifleştirme.
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/insolventa">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Afla mai multe"
                          >
                            Daha fazlasını öğrenin...
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CINE SUNTEM */}

        <section className="card py-4 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <p className="guide-text mb-4">HAKKIMIZDA</p>
                <h5 className="lh-base text-center pb-4">Biz Kimiz?</h5>

                <p
                  className="text-separator fw-normal"
                  style={{ textAlign: "left", marginLeft: 0 }}
                >
                  Biz, ticari, mali ve sözleşmesel sorunlarınızın profesyonel
                  çözüme kavuşturulmasında ortağınız olmaktan gurur duyan bir
                  ekibiz. Sorunlara yenilikçi bir bakış açısıyla yaklaşarak, her
                  türlü hukuki ve mali probleminizi uzmanlıkla ele alıyoruz.
                  <br />
                  <br />
                  Ekibimiz, mali ve hukuk alanında derin bilgiye sahip
                  avukatlardan, iflas uygulayıcılarından ve ekonomistlerden
                  oluşuyor. Her biri, 10 yılı aşkın deneyim ve profesyonellik
                  ile sizin için en uygun çözümleri sunmayı taahhüt ediyor.
                  <br />
                  <br />
                  Hukuk ve İflas Bürosu koordinatörümüz Marin Alina, 15 yılı
                  aşkın süredir ticaret, sözleşmeler ve diğer hukuki alanlarda
                  danışmanlık yapmaktadır. Aynı zamanda, 8 yıl boyunca iflas
                  uygulayıcısı olarak çalışmış ve iflasın yönetilmesi, kurtarma,
                  silme ve yeniden yapılanma süreçlerinde geniş bir deneyime
                  sahip bir uzmandır.
                  <br />
                  <br />
                  Biz, ticari faaliyetlerinizdeki her adımda yanınızda olarak,
                  güvenle ilerlemenizi sağlamak için buradayız.
                </p>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/about-us.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt="two persons at a desk"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/*CE NE RECOMANDA========= */}
        <section className="recommendation card-body p-3 bg-image m-3">
          {/* <h6 className="guide-text ">UZMANLIĞIMIZ</h6> */}
          <p className="guide-text mb-4">UZMANLIĞIMIZ</p>

          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h5 className="h-50 lh-base text-center pb-4">
              Neden bizi tercih etmelisiniz?
            </h5>
          </div>
          <div className="row mt-4 flex-column flex-md-row mb-3">
            <div className="col col-md-7 order-md-2">
              <ul className="my-list">
                <li>Alanında geniş deneyim</li>
                <li>Yüksek profesyonellik ve müşteri odaklı yaklaşım. </li>
                <li> Projelere aktif katılım ve destek.</li>
                <li> Müşterilerle doğrudan ve şeffaf iletişim.</li>
                <li> Müşteri memnuniyetine bağlılık.</li>
                <li>
                  {" "}
                  Diğer profesyonellerle işbirliği yaparak eksiksiz çözümler
                  sunmak.
                </li>
              </ul>
            </div>
            <div className=" col col-md-5 order-md-2 mt-5">
              <div className="square container d-flex flex-column justify-content-center align-items-center py-5 w-50 border border-white border-4 fw-bold">
                <div>
                  <FontAwesomeIcon icon={faGavel} size="2x" />
                </div>
                <div>+7</div>
                <div>Deneyim Yılı</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Acasa;
