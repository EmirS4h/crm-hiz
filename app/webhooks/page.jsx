import Image from "next/image";
import React from "react";
import questionssvg from "../../public/svgs/questions.svg";
import elements from "../../public/svgs/elements.svg";
import sharing from "../../public/svgs/sharing.svg";
import visionary from "../../public/svgs/visionary.svg";
export default function page() {
  return (
    <div className="w-full flex flex-col gap-y-10 leading-7">
      <div className="w-full flex flex-col gap-y-4">
        <h2 className="text-2xl font-semibold tracking-wider text-center">
          Webhook Nedir ve Kommo CRM Bağlamında Avantajları
        </h2>
        <div className="lg:flex justify-center items-center">
          <div className="lg:w-4/12">
            <Image
              src={questionssvg}
              width={1920}
              height={1080}
              alt="questions image"
            />
          </div>
          <div className="w-11/12 mx-auto lg:w-6/12">
            <p className="leading-7">
              Webhook, web uygulamaları arasında gerçek zamanlı iletişimi
              sağlayan bir mekanizmadır. Temelde bir HTTP POST isteği olarak
              çalışır ve bir olay meydana geldiğinde tetiklenir. Bu olay,
              genellikle bir veritabanı güncellemesi, form gönderimi veya bir
              kullanıcı etkileşimi olabilir. Webhook'lar, bu olayları dinler ve
              ardından belirli bir URL'ye HTTP isteği göndererek diğer
              uygulamalara bildirimde bulunur. Kommo CRM bağlamında,
              Webhook'ların birçok avantajı bulunmaktadır. Öncelikle,
              Webhook'lar sayesinde Kommo CRM, diğer web uygulamaları ile
              entegrasyon yapabilir ve anlık veri alışverişi sağlayabilir. Bu,
              müşteri etkileşimi ve satış süreçlerinin daha hızlı ve verimli bir
              şekilde yönetilmesine olanak tanır. Ayrıca, Webhook'lar sayesinde
              otomatik bildirimler ve güncellemeler gönderilerek, kullanıcı
              deneyimi artırılabilir. Sonuç olarak, Kommo CRM kullanıcıları,
              Webhook'ları etkin bir şekilde kullanarak müşteri ilişkilerini
              güçlendirebilir, satış süreçlerini optimize edebilir ve iş
              verimliliğini artırabilir. Bu sayede, CRM sistemi zaten bilen bir
              kitleye, Webhook'ların pratik avantajları anlaşılır bir şekilde
              aktarılmış olacaktır.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-4">
        <h2 className="text-2xl font-semibold tracking-wider text-center">
          Webhook'ların Kommo CRM'de Kullanımı
        </h2>
        <div className="lg:flex flex-row-reverse justify-center items-center">
          <div className="lg:w-4/12">
            <Image
              src={elements}
              width={1920}
              height={1080}
              alt="elements image"
            />
          </div>
          <div className="w-11/12 mx-auto lg:w-6/12">
            <p className="leading-7">
              Webhook'lar, Kommo CRM içerisinde farklı olaylar gerçekleştiğinde
              diğer sistemlere anlık bildirimler gönderen bir mekanizmadır.
              Örneğin, yeni bir müşteri oluşturulduğunda veya bir görev
              tamamlandığında, webhook'lar tarafından bu bilgiler anlık olarak
              diğer sistemlere iletilir. Bu özelliği sayesinde, Kommo CRM
              kullanıcıları farklı sistemleri senkronize edebilir ve verimliliği
              artırabilir.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-4 justify-center items-center">
        <h2 className="text-2xl font-semibold tracking-wider text-center">
          Örnek Uygulamalar ve Avantajlar
        </h2>
        <div className="lg:flex justify-center items-center">
          <div className="lg:w-4/12">
            <Image
              src={sharing}
              width={1920}
              height={1080}
              alt="elements image"
            />
          </div>
          <div className="w-11/12 mx-auto flex flex-col gap-y-6 lg:w-6/12 justify-center items-center">
            <div className="flex flex-col shadow-md p-2 rounded">
              <h3 className="text-xl font-semibold tracking-wider text-center">
                Müşteri Oluşturma Bildirimi
              </h3>
              <p>
                Yeni bir müşteri oluşturulduğunda, webhooks aracılığıyla bu
                bilgi farklı sistemlere iletilerek, müşteri ile ilgili diğer
                süreçlerin otomatik olarak başlatılması sağlanabilir.
              </p>
            </div>

            <div className="flex flex-col shadow-md p-2 rounded">
              <h3 className="text-xl font-semibold tracking-wider text-center">
                Stage Güncellemeleri
              </h3>
              <p>
                Bir müşteri stage'de ilerledikçe, webhooks sayesinde bu
                güncellemeler diğer sistemlere iletilerek satış ekibinin anında
                müdahale etmesi sağlanabilir.
              </p>
            </div>

            <div className="flex flex-col shadow-md p-2 rounded">
              <h3 className="text-xl font-semibold tracking-wider text-center">
                Görev Tamamlanma Bildirimi
              </h3>
              <p>
                Belirli bir görev tamamlandığında, webhooks kullanılarak ilgili
                ekiplere otomatik bildirimler gönderilerek iş akışı otomasyonu
                sağlanabilir.
              </p>
            </div>

            <div>
              <p>
                Bu örnekler, webhooks'ların Kommo CRM içerisinde nasıl
                kullanılabileceğini ve nasıl otomasyon sağladığını
                göstermektedir. Bu sayede, kullanıcılar farklı sistemleri
                birbirine bağlayarak, verimliliği artırabilir ve iş süreçlerini
                kolaylaştırabilir.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto flex flex-col gap-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-wider text-center">
            Kommo CRM Kullanıcılarının Webhook Kullanımıyla Elde Edebileceği
            Dikkate Değer Faydalar ve Verimlilikler
          </h2>
          <div className="lg:flex lg:flex-row-reverse justify-between items-center">
            <div className="lg:w-4/12">
              <Image
                src={visionary}
                width={1920}
                height={1080}
                alt="visionary image"
              />
            </div>

            <div className="flex flex-col gap-y-6 lg:w-6/12">
              <div className="mt-5">
                <p>
                  Kommo CRM kullanıcıları, webhooks kullanarak pek çok belirgin
                  fayda ve verimlilik elde edebilirler. Webhooks, kullanıcıların
                  CRM sistemini özelleştirmelerine, otomasyon sağlamalarına ve
                  iş akışlarını geliştirmelerine olanak tanır. Bu da
                  kullanıcıların daha etkili ve verimli bir şekilde
                  çalışmalarını sağlar.
                </p>
              </div>
              <p>
                Webhooks'un kullanımıyla Kommo CRM kullanıcıları aşağıdaki
                faydaları elde edebilirler:
              </p>

              <div className="shadow-md rounded p-2">
                <p>
                  <strong>Anlık Bilgi Alımı:</strong> Webhooks, kullanıcıların
                  anlık olarak bilgi almasını sağlar. Örneğin, yeni bir müşteri
                  eklendiğinde veya bir satış işlemi gerçekleştiğinde,
                  kullanıcılar anında bu bilgileri alabilir ve gereken
                  aksiyonları hızlı bir şekilde gerçekleştirebilirler.
                </p>
              </div>

              <div className="shadow-md rounded p-2">
                <p>
                  <strong>Otomasyon ve Entegrasyon:</strong> Webhooks sayesinde
                  Kommo CRM, diğer yazılımlarla entegre edilebilir ve farklı
                  platformlar arasında veri aktarımı otomatik hale
                  getirilebilir. Bu, verimliliği arttırır ve manuel veri
                  aktarımlarının gereksiz zaman harcamasını önler.
                </p>
              </div>

              <div className="shadow-md rounded p-2">
                <p>
                  <strong>Kişiselleştirilmiş Bildirimler:</strong> Webhooks ile
                  kullanıcılar, belirli olaylar gerçekleştiğinde özelleştirilmiş
                  bildirimler alabilir. Bu, önemli iş fırsatları veya müşteri
                  etkileşimleri hakkında hızlı bir şekilde bilgilendirilme
                  imkanı sağlar.
                </p>
              </div>

              <div className="shadow-md rounded p-2">
                <p>
                  <strong>Dinamik İş Akışları:</strong> Webhooks, iş akışlarını
                  daha dinamik hale getirir. Kullanıcılar, belirli olaylara
                  tepki vermek ve otomatik işlemler başlatmak için webhook'ları
                  kullanabilirler, bu da süreçleri hızlandırır ve kullanıcıların
                  daha fazla odaklanmasını sağlar.
                </p>
              </div>

              <div>
                <p>
                  Bu gibi belirgin faydalarla, Kommo CRM kullanıcıları webhooks
                  kullanarak çalışmalarını daha verimli hale getirebilir ve iş
                  süreçlerini optimize edebilirler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
