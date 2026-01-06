import FooterSection from "../components/FooterSection";
import NavBar from "../components/NavBar";

export default function TermsOfServices() {
  return (
    <>
      <NavBar />
      <div className="w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header Section with Background Image */}
        <div className="relative w-full h-[450px] mt-20">
          {/* Background Image */}
          <img
            src="/Union.svg"
            alt="Header Background"
            className="absolute inset-0 w-full h-full "
          />

          {/* Header Text */}
          <div className="relative max-w-7xl mx-auto px-6 pt-12">
            <h1 className="text-white text-4xl font-bold">Terms and Conditions</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
          {/* Introduction */}
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              These Terms of Service for SUH Tech Private Limited ("Company", "We", "Us", or "Our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Visit our website at https://www.suhtech.top, or any website of ours that links to these Terms of Service.
              </li>
              <li>
                Use our application(s), or any other application of ours that links to these Terms of Service.
              </li>
              <li>
                Engage with us in other related ways — including any sales, marketing, or events.
              </li>
            </ul>
          </div>

          {/* Summary Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold">SUMMARY OF KEY POINTS</h2>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                This summary provides key points from our Terms of Service, but you can find out more details about any of these topics by using our table of contents below to find the section you are looking for.
              </p>

              <div className="space-y-3">
                <p>
                  <strong>What Personal Information Do We Process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with SUH Tech Private Limited and the Services, the choices you make, and the products and features you use.
                </p>

                <p>
                  <strong>Do We Process Any Sensitive Personal Information?</strong> We do not process sensitive personal information.
                </p>

                <p>
                  <strong>Do You Receive Any Information From Third Parties?</strong> We may receive information from public databases, marketing partners, social media platforms, and other outside sources.
                </p>

                <p>
                  <strong>How Do You Process My Information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.
                </p>

                <p>
                  <strong>In What Situations And With Which Types Of Parties Do We Share Personal Information?</strong> We may share information in specific situations and with specific categories of third parties.
                </p>

                <p>
                  <strong>How Do We Keep Your Information Safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cyber criminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
                </p>

                <p>
                  <strong>What Are Your Rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
                </p>

                <p>
                  <strong>How Do I Exercise My Rights?</strong> The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold">1. WHAT INFORMATION DO WE COLLECT?</h2>

            <div className="space-y-4 text-sm leading-relaxed">
              <h3 className="font-bold">Personal Information You Disclose To Us</h3>

              <p>
                <strong>In Short:</strong> We collect personal information that you provide to us.
              </p>

              <p>
                We collect personal information that you voluntarily provide to us when you use our services, express an interest in obtaining information about us or our products and services, when you participate in activities on the Services, or otherwise when you contact us.
              </p>

              <p>
                <strong>Personal Information Provided By You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
              </p>

              <ul className="list-disc pl-6 space-y-1">
                <li>Email</li>
                <li>Address</li>
                <li>Name</li>
                <li>Preferences</li>
              </ul>

              <p>
                <strong>Sensitive Information.</strong> We do not process sensitive information.
              </p>

              <p>
                <strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by our payment processor and you should review its privacy policies and contact the payment processor directly to respond to your questions.
              </p>
            </div>
          </section>

          {/* Information Automatically Collected */}
          <section className="space-y-4">
            <h3 className="text-base font-bold">Information Automatically Collected</h3>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
              </p>

              <p>
                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
              </p>

              <p>
                Like many businesses, we also collect information through cookies and similar technologies.
              </p>

              <p>The information we collect includes:</p>

              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Log And Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
                </li>

                <li>
                  <strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, internet service provider and/or mobile carrier, operating system, and system configuration information.
                </li>

                <li>
                  <strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.
                </li>
              </ul>
            </div>
          </section>

          {/* Information Collected From Other Sources */}
          <section className="space-y-4">
            <h3 className="text-base font-bold">Information Collected From Other Sources</h3>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <strong>In Short:</strong> We may collect limited data from public databases, marketing partners, social media platforms, and other outside sources.
              </p>

              <p>
                To enhance our ability to provide relevant marketing, offers, and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, social media platforms, and from other third parties. This information includes mailing addresses, job titles, email addresses, phone numbers, intent data (or user behavior data), internet protocol (IP) addresses, social media profiles, social media URLs, and custom profiles, for purposes of targeted advertising and event promotion. If you interact with us on a social media platform using your social media account (e.g., Facebook or Twitter), we receive personal information about you such as your name, email address, and gender. Any personal information that we collect from your social media account depends on your social media account's privacy settings.
              </p>
            </div>
          </section>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
