import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Insolventa = () => {
  return (
    <>
      <div className="insolventa-page">
        <Helmet>
          <title>
            Hizmetlerimiz | Avukat Konya | Avukatlık & Danışmanlık Bürosu Elif
            Ezgi Özkan
          </title>

          <meta
            name="description"
            content="Oferim servicii de consultanță și reprezentare în procedurile de insolvență, inclusiv lichidare judiciara, redactare de cereri de deschidere a procedurii de insolventa, analiză a societatilor debitoare, infiintare societati, recuperare de creante, consultanta juridica și asistenta în aplicarea și executarea reglementarilor legale."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">BİZ KİMİZ?</h6>
          <div className="container py-5">
            <h5 className="fw-bold text-center pb-1">
              İflas danışmanlığı ve temsil hizmetleri{" "}
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-5">
              Mevcut seçeneklerin değerlendirilmesinden sürecin tamamlanmasına
              kadar, iflas davalarında uzman yardımı sunuyoruz
            </h6>

            <div className="card">
              <div className="insolvency card-img-top2"></div>
              <div className="card-body">
                <div className="card-text text-white py-5">
                  <ul className="my-list pt-3">
                    <li>Adli tasfiye/iflas prosedürü;</li>
                    <br></br>
                    <li>
                      UAT tarafından iletilen/onaylanan borçlular için, iflas işlemlerinin başlatılmasına yönelik taleplere yönelik davaların hazırlanması ve müvekkilin mahkemeler önünde temsil edilmesi;
                    </li>
                    <br></br>
                    <li>
                      Borçlu şirketlerin analizini hazırlama: Ticaret Sicili (Recom) ve İflas İşlemleri Bülteni (BPI aboneliği mevcut) kontrol edilerek, incelemenin amacı iflas işlemlerine giren şirketleri tespit etmektir.                    </li>
                    <br></br>
                    <li>Şirketlerin, şubelerin ve iş yerlerinin kurulması.</li>
                    <br></br>
                    <li>
                      Sermaye değişikliği, alacakların hisseye dönüştürülmesi, şirketlerin birleşme, tasfiye, bölünme ve feshi ile ilgili yasal gerekliliklerin analizi.
                    </li>
                    <br></br>
                    <li>
                      Ticari sözleşmeler ve tüm sözleşme sorunlarının çözümü.
                    </li>
                    <br></br>
                    <li>
                      Alacakların tahsili: Yürütülen faaliyetlere ilişkin aylık raporların hazırlanması.
                    </li>
                    <br></br>
                    <li>
                      Başvuru sahiplerine yönelik yanıtların analizi, hazırlanması ve onaylanması.
                    </li>
                    <br></br>
                    <li>
                      Fiziksel ve tüzel kişilere yönelik bildirimlerin/adreslerin analizi, hazırlanması ve onaylanması.
                    </li>
                    <br></br>
                    <li>
                      Hukuki düzenlemelerin uygulanması ve icrası konusunda danışmanlık ve hukuki yardım.
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="link">
                  <button
                    className="btn btn-outline-dark my-4"
                    type="button"
                    aria-label="Cere o evaluare"
                  >
                    Bir değerlendirme talep et.
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insolventa;
