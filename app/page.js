"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-between space-y-24">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/KommoCRM.jpg"
            width={1920}
            height={1080}
            className="rounded-xl shadow-2xl lg:w-1/2"
          />
          <div>
            <h1 className="text-5xl font-bold">Kommo CRM</h1>
            <p className="py-6 leading-7">
              Dünyanın birçok ülkesinde kullanılan <strong>Kommo CRM</strong>{" "}
              Programı artık Türkiye’de. <strong>Kommo CRM</strong> Programı ile
              sektörün birçok ihtiyacını karşılıyor ve tüm satış süreçlerinizi
              tek ekrandan yönetebileceğiniz Omnichannel çözümler sunuyoruz.{" "}
              <strong>Kommo CRM</strong> Programı ile müşteri adayları ve
              müşterilerle yaptığınız tüm görüşmeleri tek bir yerden yönetin.
            </p>
            <Link href="/contact" className="btn btn-primary">Hemen İletişime Geç</Link>
          </div>
        </div>
      </div>

      <div className="w-full card items-center lg:card-side bg-base-100 rounded-none">
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl font-semibold">Neden Kommo</h2>
          <ul className="list-disc">
            <li>
              Müşteri adayları ve müşterilerle olan tüm görüşmelerinizi tek bir
              yerden yönetin.
            </li>
            <li>
              Kullanımı kolay arayüz. Potansiyel müşterinizin görünümünü, Kommo
              CRM Programı kullanıcıları için en önemli bilgileri gösterecek
              şekilde özelleştirebilirsiniz.
            </li>
            <li>
              Özelleştirmek. İhtiyaçlarınıza göre kendi alanlarınızı potansiyel
              karta ekleyebilirsiniz.
            </li>
            <li>
              Kullanıma Hazır Entegrasyonlar. Kommo’yu sanal PBX hizmetiniz,
              uçtan uca analitik hizmetiniz, postalama hizmetleriniz ile entegre
              edebilirsiniz.
            </li>
            <li>
              Zengin API. Tüm müşteri adaylarını Kommo’dan farklı hizmetlere
              kolayca aktarabilir ve bu verilerle çalışabilirsiniz.
            </li>
            <li>
              Firmanıza özel raporlama şablonları ve daha sayamadığımız bir çok
              özellik artık sizlerle.
            </li>
          </ul>
          <div className="card-actions">
            <Link href="/whatsCrm" className="btn btn-primary">
              CRM Hakkında Daha Fazla Bilgi
            </Link>
          </div>
        </div>
        <figure className="lg:w-1/2 p-2">
          <Image
            src="/whyKommo.jpg"
            alt="Album"
            width={1024}
            height={576}
            className="rounded-xl shadow-2xl"
          />
        </figure>
      </div>

      <div className="w-full card lg:card-side bg-base-300 rounded-none">
        <div className="card-body flex items-center">
          <figure className="lg:w-1/2 p-2">
            <Image
              src="/kommoMessages.jpg"
              alt="Album"
              width={1024}
              height={576}
              className="rounded-xl shadow-2xl"
            />
          </figure>
          <h2 className="card-title text-3xl font-semibold">
            Mesajlaşma Entegrasyonu
          </h2>
          <p className="max-w-2xl mx-auto leading-7">
            <strong>Kommo CRM</strong> Programı ile tüm mesajlaşma
            platformlarını tek ekrandan yönetebilirsiniz. Satış ekibiniz devrime
            hazır mı? <strong>Kommo CRM</strong>
            Programı, tüm mesajlaşma uygulamalarını tek bir ekranda toplayarak
            temsilcilerinizi sıcak müşteri adaylarına ışık hızında yanıt verecek
            ve daha fazla satış sağlayacak şekilde donatıyor. En iyi kısım?
            Artık aday kartın rahatlığında tercih ettikleri mesajlaşma
            uygulamasında potansiyel müşterilere yazabilirsiniz. Artık uygulama
            değiştirme yok. Artık “ben buna bakarken bekle” yok. Messenger
            müşteri adaylarını yakalayın, daha etkili yanıt verin ve bunu
            müşteri adayının tüm bilgileri gözünüzün önündeyken yapın. Aynı anda
            yüzlerce müşteri adayına binlerce erişim denemesini yönetin. Kommo
            CRM Programı ne zaman kimin aranacağını hatırlatsın, zamanı gelen
            e-postaları şablonlar kullanarak oluşturup sizin adınıza göndersin.
            <strong>Kommo CRM</strong> Programı ile Süreç Yönetimi ve Aday Hasta
            Takibi Tek Programda! <strong>Kommo CRM</strong> Programı, çok
            müşteriye ulaşmanızı, var olan müşterilerin memnuniyetini artırmak
            ve çağrı merkezinizi (satış ekibinizi) yönetmeniz için ihtiyacınız
            olan araçları sunar.
          </p>
          <div className="card-actions">
            <Link href="/whatsCrm" className="btn btn-primary">
              CRM Hakkında Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full card items-center lg:card-side bg-base-100 rounded-none">
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl font-semibold">
            Kommo CRM Satış Otomasyonu
          </h2>
          <p className="leading-7">
            Kommo CRM Programı ‘nın Dijital Boru Hattı, operasyonel
            yetkinliinizi genişletmenize olanak tanır. E-posta ve metin
            mesajları göndererek, potansiyel müşterilerle otomatik olarak sohbet
            ederek müşteri temsilcilerinizi yetiştirebilir ve takip dizilerinizi
            tamamen otomatikleştirebilirsiniz. Kendiniz veya ekibiniz için
            görevler belirleyebilir ve her etkileşimi ve yapılacak işi takip
            edebilirsiniz. Potansiyel müşterilerinizi ve müşterilerinizi satış
            akışınız boyunca zahmetsizce yönlendirerek otomatik olarak
            ilerlemelerini sağlayabilirsiniz. Kommo CRM Programı ‘nın Dijital
            Boru Hattı, operasyonel yetkinliinizi genişletmenize olanak tanır.,
            satış yöneticileriniz ve ekibinizin ihtiyaç duydukları bilgilere
            kolayca ulaşmasını, işlerini daha kısa zamanda yapmalarını, hiçbir
            işi atlamayıp daha çok satış kazanmalarını sağlar.
          </p>
          <div className="card-actions">
            <Link href="/whatsCrm" className="btn btn-primary">
              CRM Hakkında Daha Fazla Bilgi
            </Link>
          </div>
        </div>
        <figure className="lg:w-1/2 p-2">
          <Image
            src="/kommoSalesAutomation.jpg"
            alt="Album"
            width={1024}
            height={576}
            className="rounded-xl shadow-2xl"
          />
        </figure>
      </div>

      <div className="w-full card items-center lg:card-side bg-base-300 rounded-none">
        <figure className="lg:w-1/2 p-2">
          <Image
            src="/chatbotBuilder.jpg"
            alt="Album"
            width={1024}
            height={576}
            className="rounded-xl shadow-lg"
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl font-semibold">
            Chatbot Hazırlama
          </h2>
          <ul className="list-disc leading-7">
            <li>
              Müşterilerinize yanıt vermenize yardımcı olması için yapay zeka
              destekli bir Chatbot kurmanıza yardımcı olabiliriz.
            </li>
            <li>
              En tipik sorularına anında yanıt verin, müşteri adaylarını meşgul
              edin ve kopyala-yapıştır işlemlerini unutun.
            </li>
            <li>
              Siz yokken botun yanıt vermesini sağlayarak yanıt sürenizi ve
              kullanılabilirliğinizi iyileştirin.
            </li>
            <li>
              Bot’a artık ihtiyaç kalmadığında veya soru daha karmaşık bir
              yaklaşım gerektirdiğinde görüşmeyi ekibinize devredin.
            </li>
          </ul>
          <div className="card-actions">
            <Link href="/whatsCrm" className="btn btn-primary">
              CRM Hakkında Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full card items-center lg:card-side bg-base-100 rounded-none">
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl font-semibold">
            Gerçek Zamanlı Raporlama
          </h2>
          <p className="leading-7">
            Rapor beklemeye son. Kommo CRM Programı ile, satış sürecinize bir
            bakışta hakim olun. Kimin hangi satışla ilgilendiğini, her işin
            durumunu, aşamasını, sıradaki adımları görün. Üzerine tıklayarak
            detayları öğrenin. Sürükleyip bırakarak güncelleyin. Gerçek Zamanlı
            Raporlama Ekranı , takımınızın etkinliğini gözünüzün önünde ortaya
            koyar. Satış verilerinizden oluşturulan bu özet rapor, kazanılan ve
            kaybedilen müşteri adaylarının yüzdesini, ortalama müşteri adayı
            döngüsünü ve hatta ekibinizin gelen müşteri adaylarına ne kadar
            hızlı yanıt verdiğini gösterir. Analiz ayrıca müşteri adaylarını en
            sık nerede kaybettiğinizi de vurgular, böylece müşteri adaylarını
            elde tutmayı en üst düzeye çıkarmak için stratejinizi
            uyarlayabilirsiniz.
          </p>
          <div className="card-actions">
            <Link href="/whatsCrm" className="btn btn-primary">
              CRM Hakkında Daha Fazla Bilgi
            </Link>
          </div>
        </div>
        <figure className="lg:w-1/2 p-2">
          <Image
            src="/kommmoReports.jpg"
            alt="Album"
            width={1024}
            height={576}
            className="rounded-xl shadow-lg"
          />
        </figure>
      </div>

      <div className="w-full card items-center lg:card-side bg-base-300 rounded-none">
        <figure className="lg:w-1/2 p-2">
          <Image
            src="/kommoIntegrations.jpg"
            alt="Album"
            width={1024}
            height={576}
            className="rounded-xl shadow-lg"
          />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-3xl font-semibold">
            Full Entegrasyon
          </h2>
          <ul className="list-disc">
            <p className="mb-2 font-semibold text-lg">
              Anlık mesajlaşma programlarına ek olarak Kommo CRM Programı,
            </p>
            <li>E-posta hizmetleri</li>
            <li>VoIP telefonunu</li>
            <li>Potansiyel müşteri formlarını</li>
            <li>
              Ödeme platformlarını ve düzinelerce farklı platformu entegre
              edebilirsiniz
            </li>
          </ul>
          <div className="card-actions">
            <Link href="/whatsCrm" className="btn btn-primary">
              CRM Hakkında Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-base-100 rounded-none px-10">
        <h2 className="font-semibold text-3xl text-center mb-5">
          REFERANSLARIMIZ
        </h2>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:w-1/2 lg:grid-cols-3 gap-5">
          <div className="">
            <Image
              src="/companyLogos/aktifKocaeliHastanesi.png"
              width={1024}
              height={576}
            />
          </div>
          <div className="">
            <Image
              src="/companyLogos/atlasUniversitesi.png"
              width={1024}
              height={576}
            />
          </div>
          <div>
            <Image
              src="/companyLogos/efbClinic.png"
              width={1024}
              height={576}
            />
          </div>
          <div>
            <Image
              src="/companyLogos/esteCapell.png"
              width={1024}
              height={576}
            />
          </div>
          <div>
            <Image
              src="/companyLogos/hurremSultan.png"
              width={1024}
              height={576}
            />
          </div>
          <div>
            <Image
              src="/companyLogos/hwtClinic.png"
              width={1024}
              height={576}
            />
          </div>
          <div>
            <Image
              src="/companyLogos/medicalArt.png"
              width={1024}
              height={576}
            />
          </div>
          <div>
            <Image
              src="/companyLogos/medifaceHastanesi.png"
              width={1024}
              height={576}
            />
          </div>
          <div>
            <Image
              src="/companyLogos/ozCicekHastanesi.png"
              width={1024}
              height={576}
            />
          </div>
          <div>
            <Image
              src="/companyLogos/yalovaHastanesi.png"
              width={1024}
              height={576}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
