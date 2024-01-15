import React from "react";

export default function page() {
  return (
    <div className="w-11/12 mx-auto min-h-screen flex flex-col gap-y-4 mt-5 md:w-5/6 lg:w-2/4">
      <div>
        <h1 className="text-xl md:text-4xl font-bold tracking-widest text-center">
          SIKÇA SORULAN SORULAR
        </h1>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          CRM'in işletmeler için en büyük faydası nedir?
        </div>
        <div className="collapse-content">
          <p>
            CRM'in en büyük faydası, müşteri ilişkilerini geliştirerek müşteri
            memnuniyetini ve sadakatini artırmasıdır. Bu, satışların ve
            işletmenin genel performansının iyileşmesine katkıda bulunur.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Küçük işletmeler CRM'den nasıl yararlanabilir?
        </div>
        <div className="collapse-content">
          <p>
            Küçük işletmeler, CRM'i müşteri verilerini yönetmek, pazarlama
            kampanyalarını hedeflemek ve müşteri hizmetlerini iyileştirmek için
            kullanabilir. Bu, işletmenin verimliliğini ve karlılığını artırır.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          CRM sistemlerinin uygulanmasında karşılaşılan en büyük zorluk nedir?
        </div>
        <div className="collapse-content">
          <p>
            En büyük zorluklardan biri, kullanıcıların yeni sistemi benimsemesi
            ve etkili bir şekilde kullanmasıdır. Bu, uygun eğitim ve sürekli
            destek ile üstesinden gelinebilir.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          CRM sisteminin başarısını nasıl ölçebilirim?
        </div>
        <div className="collapse-content">
          <p>
            CRM sisteminin başarısı, müşteri memnuniyetindeki artış,
            satışlardaki iyileşme ve iş süreçlerindeki verimlilik gibi çeşitli
            metrikler kullanılarak ölçülebilir.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-5" />
        <div className="collapse-title text-xl font-medium">
          CRM teknolojisi gelecekte nasıl gelişecek?
        </div>
        <div className="collapse-content">
          <p>
            CRM teknolojisi, yapay zeka, otomatikleştirme ve kişiselleştirme
            gibi yenilikçi özelliklerle gelişmeye devam edecek. Bu, işletmelere
            daha etkili müşteri yönetimi ve daha derin müşteri anlayışı
            sağlayacaktır.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-6" />
        <div className="collapse-title text-xl font-medium">
          CRM yatırımının getirisini (ROI) nasıl artırabilirim?
        </div>
        <div className="collapse-content">
          <p>
            ROI'yi artırmak için, işletmeler CRM sistemlerini mümkün olan en
            etkili şekilde kullanmalıdır. Bu, müşteri verilerini doğru analiz
            etmek, pazarlama ve satış stratejilerini optimize etmek ve müşteri
            hizmetlerini iyileştirmek anlamına gelir.
          </p>
        </div>
      </div>
    </div>
  );
}
