import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faScaleBalanced,
  faTruck,
  faPeopleLine,
  faBriefcase,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
const Avocatura = () => {
  return (
    <>
      <div className="avocatura">
        <Helmet>
          <title>
            Çalışma Alanlarımız | Avukat Elif Ezgi | Hukuk Bürosu & Danışmanlık
          </title>

          <meta
            name="description"
            content="Oferim consultanță juridică și asistență specializată într-o serie de arii de practică, inclusiv drept civil, penal, executare silită, dreptul familiei, dreptul muncii, dreptul comercial și societar."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">Avukatlık Hizmetleri</h6>
          <div className=" pt-4 text-center">
            <h5 className="fw-bold text-center pb-1">
              Tam Kapsamlı Hukuk Hizmetleri
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-4">
              Hukuki danışmanlık ve çeşitli uygulama alanlarında uzmanlaşmış yardım sunuyorum.            </h6>
          </div>
          <div className="row g-5 px-5 pt-4 ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 ">
                <div class="civil card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">MEDENİ HUKUK</h6>
                  <p className="card-text mx-1">
                    Hukuki danışmanlık, mahkemelerde yardım ve temsil, dava dilekçelerinin hazırlanması. Hukuki sorununuzu hızlı bir şekilde çözmenize yardımcı oluyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="criminal card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faGavel}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">CEZA HUKUKU</h6>
                  <p className="card-text mx-1">
                    Ceza soruşturma makamları ve mahkemeler önünde hukuki yardım ve temsil, soruşturma tedbirleri ve işlemlerine karşı dilekçe ve şikayetlerin hazırlanması, itibarı iade talebinin hazırlanması.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="executare card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faTruck}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">CEBRİ İCRA</h6>
                  <p className="card-text mx-1">
                    Cebri icra alanında sunulan hizmetler, bu süreçteki konumunuzdan bağımsız olarak – borçlu veya alacaklı – sağlanmaktadır. Pasif kalmak, hem alacaklı hem de borçlu için son derece ciddi sonuçlar doğurabilir.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="family card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faPeopleLine}
                    size="2x"
                    className="pb-3 law-icon"
                  />
                  <h6 className="card-title pb-2">
                    Aile Hukuku - Boşanma ve Mal Paylaşımı
                  </h6>
                  <p className="card-text mx-1">
                    Boşanma davaları, mal paylaşımı, velayet hakkının kullanımı, nafaka ve çocukla görüşme düzenlemesi konularında hukuki yardım ve temsil hizmetleri.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="labor card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">İŞ HUKUKU</h6>
                  <p className="card-text mx-1">

                    İşten çıkarma kararına itiraz, disiplin cezası kararına itiraz, işvereni maaş alacaklarının ödenmesine zorunlu kılma ve iş hukuku alanında hukuki görüşlerin hazırlanması gibi profesyonel avukatlık hizmetleri sunuyoruz
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="business card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScroll}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">
                    Ticaret ve Şirketler Hukuku
                  </h6>
                  <p className="card-text mx-1">
                    Ticaret Sicilinde ticari şirketlerin kuruluşu, şirket merkezinin değiştirilmesi, şube açılışı/kapanışı, ana sözleşme hazırlanması, genel kurul kararlarının hazırlanması.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4 ">
            <p className="more-services py-4">
              Mahkemeler veya diğer devlet kurumları nezdinde sizlere danışmanlık, yardım ve temsil sunduğumuz diğer faaliyet alanları: BORÇ TAHLİYESİ, EMEKLİLİK VE DİĞER SOSYAL SİGORTA HAKLARI, SAHİP KURULUŞLARI, TARTIŞMALI CEZA ŞİKAYETLERİ, ARAÇ KAZASI TAZMİNATLARI, taleplerin hazırlanması ve faaliyete özel diğer belgeler.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Avocatura;
