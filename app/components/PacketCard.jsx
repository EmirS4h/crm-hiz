"use client";
import Link from "next/link";
import React from "react";

export default function PacketCard({ data }) {
  const isTicked = (ticked) => {
    if (ticked) {
      return <span className="text-emerald-500 font-bold text-xl">✓</span>;
    } else {
      return <span className="text-red-500 font-bold text-xl">—</span>;
    }
  };
  return (
    <div className="w-11/12 mx-auto flex flex-col gap-y-10 text-center rounded-lg shadow-md border-2 border-gray-900">
      <div className="w-full h-72 flex flex-col gap-y-10 items-center justify-center rounded-md">
        <h2 className="text-5xl font-bold">{data.Title}</h2>
        <p className="text-6xl font-semibold">${data.Price}<span className="text-sm text-gray-500">/Aylık</span></p>
      </div>
      <div className="">
        <h2 className="font-semibold text-2xl tracking-wider">Kullanıcı Başına Limit</h2>
        <ul className="flex flex-col gap-y-2 mt-2">
          <li>Aktif Leads {data.LimitPerUser.ActiveLeads}</li>
          <li>İletişim {data.LimitPerUser.Contacts}</li>
          <li>Depolama {data.LimitPerUser.Storage}</li>
        </ul>
      </div>

      <div >
        <h2 className="font-semibold text-2xl tracking-wider">Potansiyel Müşteri</h2>
        <ul className="flex flex-col gap-y-2 mt-2">
          <li>
            Çok kanallı yakalama
            {isTicked(data.PotentialCustomer.MultiChannelCapture)}
          </li>
          <li>
            Form oluşturucu {isTicked(data.PotentialCustomer.FormBuilder)}
          </li>
          <li>CRM Eklentisi {isTicked(data.PotentialCustomer.CRMPlugin)}</li>
          <li>
            Google E-Tablolar senkronizasyonu{" "}
            {isTicked(data.PotentialCustomer.GoogleSheetsSynchronization)}
          </li>
          <li>
            Kurşun sıyırıcı {isTicked(data.PotentialCustomer.LeadScraper)}
          </li>
          <li>
            E-Posta ayrıştırma {isTicked(data.PotentialCustomer.EmailParsing)}
          </li>
          <li>
            Kartvizit tarayıcı{" "}
            {isTicked(data.PotentialCustomer.BusinessCardScanner)}
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-2xl tracking-wider">Tek bir uygulamada</h2>
        <ul className="flex flex-col gap-y-2 mt-2">
          <li>
            Messenger uygulama entegrasyonları{" "}
            {isTicked(data.SingleApplication.MessengerAppIntegrations)}
          </li>
          <li>
            Ekip sohbeti ve bahsedenler{" "}
            {isTicked(data.SingleApplication.TeamChatAndMentions)}
          </li>
          <li>Yayıncılık {isTicked(data.SingleApplication.Publishing)}</li>
          <li>
            Sohbet ve E-posta şablonları{" "}
            {isTicked(data.SingleApplication.ChatAndEmailTemplates)}
          </li>
          <li>
            E-posta (2 yönlü senkronizasyon){" "}
            {isTicked(data.SingleApplication.EmailTwoWaySync)}
          </li>
          <li>
            SMS ve VoIP Entegrasyonları{" "}
            {isTicked(data.SingleApplication.SMSAndVoIPIntegrations)}
          </li>
          <li>
            Çağrı Yönlendirme Entegrasyonları{" "}
            {isTicked(data.SingleApplication.CallForwardingIntegrations)}
          </li>
          <li>
            Çağrı kaydı ve Kayıt{" "}
            {isTicked(data.SingleApplication.CallRecordingAndLogging)}
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-2xl tracking-wider">Müşteri Yönetim</h2>
        <ul className="flex flex-col gap-y-2 mt-2">
          <li>Özel Alanlar {data.CustomerManagement.CustomFields}</li>
          <li>
            Özelleştirilebilir Müşteri Adayı Profilleri{" "}
            {isTicked(data.CustomerManagement.CustomizableLeadProfiles)}
          </li>
          <li>
            Gerekli Alanlar {isTicked(data.CustomerManagement.RequiredFields)}
          </li>
          <li>
            Bağlantı tıklama takibi{" "}
            {isTicked(data.CustomerManagement.LinkClickTracking)}
          </li>
          <li>
            Mükerrer müşteri adaylarını birleştirme{" "}
            {isTicked(data.CustomerManagement.MergeDuplicateLeads)}
          </li>
          <li>
            Mesajlar/e-posta durumları{" "}
            {isTicked(data.CustomerManagement.MessagesEmailStatuses)}
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-2xl tracking-wider">İş Akşınızı Düzenleyin</h2>
        <ul className="flex flex-col gap-y-2 mt-2">
          <li>
            50 Adete Kadar Boru Hattı{" "}
            {isTicked(data.OrganizeYourWorkflow.UpTo50Pipelines)}
          </li>
          <li>
            Özel Boru Hattı Aşamaları{" "}
            {isTicked(data.OrganizeYourWorkflow.CustomPipelineStages)}
          </li>
          <li>
            Görev Yönetimi {isTicked(data.OrganizeYourWorkflow.TaskManagement)}
          </li>
          <li>
            Takvim ve Hatırlatıcılar{" "}
            {isTicked(data.OrganizeYourWorkflow.CalendarAndReminders)}
          </li>
          <li>
            Belge Oluşturucu{" "}
            {isTicked(data.OrganizeYourWorkflow.DocumentCreator)}
          </li>
          <li>
            Mobil Uygulama {isTicked(data.OrganizeYourWorkflow.MobileApp)}
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-2xl tracking-wider">Botlar ve Otomasyon</h2>
        <ul className="flex flex-col gap-y-2 mt-2">
          <li>
            Kodsuz bot oluşturucu{" "}
            {isTicked(data.BotsAndAutomation.CodelessBotBuilder)}
          </li>
          <li>
            Sınırsız satış botu{" "}
            {isTicked(data.BotsAndAutomation.UnlimitedSalesBot)}
          </li>
          <li>
            Bot yapay zeka güçlendirmesi{" "}
            {isTicked(data.BotsAndAutomation.BotAIEnhancement)}
          </li>
          <li>
            Tetiklenen Sms ve E-postalar{" "}
            {isTicked(data.BotsAndAutomation.TriggeredSMSAndEmails)}
          </li>
          <li>
            İş akış otomasyonu{" "}
            {isTicked(data.BotsAndAutomation.WorkflowAutomation)}
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-2xl tracking-wider">Analitik</h2>
        <ul className="flex flex-col gap-y-2 mt-2">
          <li>Gösterge Tablosu {isTicked(data.Analytics.Dashboard)}</li>
          <li>
            Filtrelerden Widget Oluşturma{" "}
            {isTicked(data.Analytics.WidgetCreationFromFilters)}
          </li>
          <li>
            Sohbet performans takibi{" "}
            {isTicked(data.Analytics.ChatPerformanceTracking)}
          </li>
          <li>
            Satış anlık görüntüsü {isTicked(data.Analytics.SalesSnapshot)}
          </li>
          <li>
            Kazanç-kayıp analizi {isTicked(data.Analytics.WinLossAnalysis)}
          </li>
          <li>Çağrı raporu {isTicked(data.Analytics.CallReport)}</li>
          <li>Hedef raporu {isTicked(data.Analytics.GoalReport)}</li>
          <li>Satış tahmini {isTicked(data.Analytics.SalesForecasting)}</li>
          <li>
            Potansiyel müşteri puanlaması {isTicked(data.Analytics.LeadScoring)}
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-2xl tracking-wider">Güvenlik ve Erişim</h2>
        <ul className="flex flex-col gap-y-2 mt-2">
          <li>
            SSL Sertifikası {isTicked(data.SecurityAndAccess.SSLCertificate)}
          </li>
          <li>Veri yedekleme {isTicked(data.SecurityAndAccess.DataBackup)}</li>
          <li>
            Özelleştirilebilir kullanıcı izinleri{" "}
            {isTicked(data.SecurityAndAccess.CustomizableUserPermissions)}
          </li>
          <li>
            Kullanıcı ekipleri oluşturun{" "}
            {isTicked(data.SecurityAndAccess.CreateUserTeams)}
          </li>
          <li>
            IP Adreslerini Etkinleştirme/Engelleme{" "}
            {isTicked(data.SecurityAndAccess.EnableBlockIPAddresses)}
          </li>
          <li>
            Kullanıcı etkinlik günlüğü{" "}
            {isTicked(data.SecurityAndAccess.UserActivityLog)}
          </li>
          <li>
            Periyodik veri yedekleme{" "}
            {isTicked(data.SecurityAndAccess.PeriodicDataBackup)}
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold text-2xl tracking-wider">Destek ve Özelleştirme</h2>
        <ul className="flex flex-col gap-y-2 mt-2">
          <li>
            Telefon,e-posta ve sohbet desteği{" "}
            {isTicked(data.SupportAndCustomization.PhoneEmailChatSupport)}
          </li>
          <li>
            5000+ uzman ortak{" "}
            {isTicked(data.SupportAndCustomization["5000PlusExpertPartners"])}
          </li>
          <li>
            100+ Entegrasyon Pazarı{" "}
            {isTicked(data.SupportAndCustomization["100PlusIntegrationMarket"])}
          </li>
          <li>
            RESTful API {isTicked(data.SupportAndCustomization.RESTfulAPI)}
          </li>
          <li>
            Entegrasyonlar oluşturun{" "}
            {isTicked(data.SupportAndCustomization.CreateIntegrations)}
          </li>
          <li>
            Özel widget'lar oluşturmak{" "}
            {isTicked(data.SupportAndCustomization.CustomWidgetsCreation)}
          </li>
          <li>Webhooks {isTicked(data.SupportAndCustomization.Webhooks)}</li>
        </ul>
      </div>

      <div className="w-full mb-2">
        <Link href="/contact" className="btn btn-primary btn-wide">İletişime Geç</Link>
      </div>
    </div>
  );
}
