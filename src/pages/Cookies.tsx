import { Cookie, Shield, Settings, Clock, Globe, Eye, ToggleLeft } from 'lucide-react';

export function Cookies() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 1, 2025</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              This Cookie Policy explains how SocialWay.ai ("we," "our," or "us") uses cookies and similar tracking technologies when you visit our website and use our services. This policy should be read alongside our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </p>
            <p className="text-gray-600">
              By continuing to use our website, you consent to the use of cookies as described in this policy. You can manage your cookie preferences at any time using the methods described below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                <Cookie className="text-white" size={20} />
              </div>
              <div>
                <p className="text-gray-600">
                  Cookies are small text files that are stored on your computer, tablet, or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their site is being used.
                </p>
              </div>
            </div>
            <p className="text-gray-600">
              Cookies can be "first-party" (set by the website you're visiting) or "third-party" (set by other websites or services). They can also be "session" cookies (deleted when you close your browser) or "persistent" cookies (remain on your device for a set period).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Similar Technologies</h2>
            <p className="text-gray-600 mb-4">
              In addition to cookies, we may use other similar tracking technologies:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Web Beacons (Pixels)</h3>
                <p className="text-gray-600 text-sm">
                  Small, invisible images embedded in web pages or emails that help us track user behavior and measure campaign effectiveness.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Local Storage</h3>
                <p className="text-gray-600 text-sm">
                  Similar to cookies but can store larger amounts of data locally in your browser to remember preferences and settings.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Session Storage</h3>
                <p className="text-gray-600 text-sm">
                  Temporary storage that is cleared when you close your browser tab, used for short-term data needs.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Device Fingerprinting</h3>
                <p className="text-gray-600 text-sm">
                  Collecting device characteristics to identify and distinguish users for security and fraud prevention purposes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Basis for Using Cookies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies based on the following legal grounds under GDPR and the ePrivacy Directive:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Strictly Necessary Cookies:</strong> These do not require consent as they are essential for the website to function</li>
              <li><strong>Consent:</strong> For analytics, functionality, and marketing cookies, we obtain your explicit consent before placing them on your device</li>
              <li><strong>Legitimate Interest:</strong> In limited cases, we may rely on legitimate interest for certain functionality improvements, always balancing against your privacy rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
            <p className="text-gray-600 mb-4">We categorize our cookies into the following types:</p>

            <div className="space-y-6">
              <div className="border border-green-200 rounded-xl p-6 bg-green-50">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="text-green-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Strictly Necessary Cookies</h3>
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">Required</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  These cookies are essential for the website to function properly. They enable core functionality such as security, authentication, session management, and accessibility features. You cannot opt out of these cookies as the website would not work without them.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-green-200">
                        <th className="text-left py-2 pr-4 font-medium text-gray-700">Cookie Name</th>
                        <th className="text-left py-2 pr-4 font-medium text-gray-700">Purpose</th>
                        <th className="text-left py-2 font-medium text-gray-700">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-green-100">
                        <td className="py-2 pr-4 font-mono text-xs">auth_token</td>
                        <td className="py-2 pr-4">Maintains your login session</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-b border-green-100">
                        <td className="py-2 pr-4 font-mono text-xs">csrf_token</td>
                        <td className="py-2 pr-4">Protects against cross-site request forgery</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-b border-green-100">
                        <td className="py-2 pr-4 font-mono text-xs">cookie_consent</td>
                        <td className="py-2 pr-4">Stores your cookie consent preferences</td>
                        <td className="py-2">1 year</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono text-xs">session_id</td>
                        <td className="py-2 pr-4">Identifies your browser session</td>
                        <td className="py-2">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-blue-200 rounded-xl p-6 bg-blue-50">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="text-blue-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Analytics Cookies</h3>
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Optional</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve our website performance, user experience, and services.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-blue-200">
                        <th className="text-left py-2 pr-4 font-medium text-gray-700">Cookie Name</th>
                        <th className="text-left py-2 pr-4 font-medium text-gray-700">Provider</th>
                        <th className="text-left py-2 pr-4 font-medium text-gray-700">Purpose</th>
                        <th className="text-left py-2 font-medium text-gray-700">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-blue-100">
                        <td className="py-2 pr-4 font-mono text-xs">_ga</td>
                        <td className="py-2 pr-4">Google Analytics</td>
                        <td className="py-2 pr-4">Distinguishes unique users</td>
                        <td className="py-2">2 years</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-2 pr-4 font-mono text-xs">_ga_*</td>
                        <td className="py-2 pr-4">Google Analytics</td>
                        <td className="py-2 pr-4">Maintains session state</td>
                        <td className="py-2">2 years</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-2 pr-4 font-mono text-xs">_gid</td>
                        <td className="py-2 pr-4">Google Analytics</td>
                        <td className="py-2 pr-4">Distinguishes users</td>
                        <td className="py-2">24 hours</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono text-xs">_gat</td>
                        <td className="py-2 pr-4">Google Analytics</td>
                        <td className="py-2 pr-4">Throttles request rate</td>
                        <td className="py-2">1 minute</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-purple-200 rounded-xl p-6 bg-purple-50">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Functionality Cookies</h3>
                  <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">Optional</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  These cookies remember your preferences and choices (such as language, region, or display settings) to provide a more personalized and enhanced experience.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-purple-200">
                        <th className="text-left py-2 pr-4 font-medium text-gray-700">Cookie Name</th>
                        <th className="text-left py-2 pr-4 font-medium text-gray-700">Purpose</th>
                        <th className="text-left py-2 font-medium text-gray-700">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-purple-100">
                        <td className="py-2 pr-4 font-mono text-xs">user_preferences</td>
                        <td className="py-2 pr-4">Stores UI preferences and settings</td>
                        <td className="py-2">1 year</td>
                      </tr>
                      <tr className="border-b border-purple-100">
                        <td className="py-2 pr-4 font-mono text-xs">language</td>
                        <td className="py-2 pr-4">Remembers your language preference</td>
                        <td className="py-2">1 year</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono text-xs">theme</td>
                        <td className="py-2 pr-4">Stores light/dark mode preference</td>
                        <td className="py-2">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-orange-200 rounded-xl p-6 bg-orange-50">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="text-orange-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-900">Marketing Cookies</h3>
                  <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded-full">Optional</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  These cookies are used to track visitors across websites to display relevant advertisements and measure the effectiveness of advertising campaigns. They may be set by third-party advertising networks.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-orange-200">
                        <th className="text-left py-2 pr-4 font-medium text-gray-700">Cookie Name</th>
                        <th className="text-left py-2 pr-4 font-medium text-gray-700">Provider</th>
                        <th className="text-left py-2 pr-4 font-medium text-gray-700">Purpose</th>
                        <th className="text-left py-2 font-medium text-gray-700">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-orange-100">
                        <td className="py-2 pr-4 font-mono text-xs">_fbp</td>
                        <td className="py-2 pr-4">Meta (Facebook)</td>
                        <td className="py-2 pr-4">Tracks visits across websites for ads</td>
                        <td className="py-2">3 months</td>
                      </tr>
                      <tr className="border-b border-orange-100">
                        <td className="py-2 pr-4 font-mono text-xs">_gcl_au</td>
                        <td className="py-2 pr-4">Google Ads</td>
                        <td className="py-2 pr-4">Conversion tracking</td>
                        <td className="py-2">3 months</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-mono text-xs">li_sugr</td>
                        <td className="py-2 pr-4">LinkedIn</td>
                        <td className="py-2 pr-4">Advertising and analytics</td>
                        <td className="py-2">3 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4">
              We use services from third-party providers that may set their own cookies. These providers have their own privacy policies governing the use of their cookies:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Google Analytics</h3>
                <p className="text-gray-600 text-sm mb-2">Website analytics and performance measurement</p>
                <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">Privacy Policy →</a>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Stripe</h3>
                <p className="text-gray-600 text-sm mb-2">Secure payment processing</p>
                <a href="https://stripe.com/privacy" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">Privacy Policy →</a>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Cloudflare</h3>
                <p className="text-gray-600 text-sm mb-2">Security, performance, and bot protection</p>
                <a href="https://www.cloudflare.com/privacypolicy/" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">Privacy Policy →</a>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Meta (Facebook/Instagram)</h3>
                <p className="text-gray-600 text-sm mb-2">Social media integration and advertising</p>
                <a href="https://www.facebook.com/privacy/policy/" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">Privacy Policy →</a>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-gray-600 text-sm mb-2">Social media integration and advertising</p>
                <a href="https://www.linkedin.com/legal/privacy-policy" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">Privacy Policy →</a>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">X (Twitter)</h3>
                <p className="text-gray-600 text-sm mb-2">Social media integration</p>
                <a href="https://twitter.com/en/privacy" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">Privacy Policy →</a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                <ToggleLeft className="text-white" size={20} />
              </div>
              <div>
                <p className="text-gray-600">
                  You have the right to decide whether to accept or reject cookies (except strictly necessary cookies). You can manage your cookie preferences in several ways:
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Cookie Consent Banner</h3>
            <p className="text-gray-600 mb-4">
              When you first visit our website, you will see a cookie consent banner that allows you to accept or reject non-essential cookies. You can change your preferences at any time by clicking the "Cookie Settings" link in our website footer.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Browser Settings</h3>
            <p className="text-gray-600 mb-4">
              Most web browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Opt-Out Tools</h3>
            <p className="text-gray-600 mb-4">
              You can also opt out of certain cookies using these tools:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><a href="https://optout.aboutads.info/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance (DAA) Opt-Out</a></li>
              <li><a href="https://www.youronlinechoices.eu/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">European Interactive Digital Advertising Alliance (EDAA)</a></li>
              <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-Out Browser Add-on</a></li>
              <li><a href="https://www.facebook.com/help/568137493302217" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Facebook Ad Preferences</a></li>
            </ul>

            <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-gray-700 text-sm">
                <strong>Note:</strong> Blocking or deleting cookies may affect the functionality of our website. Some features may not work properly, and you may need to re-enter information or reset preferences each time you visit.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Do Not Track Signals</h2>
            <p className="text-gray-600">
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Because there is no common standard for how to interpret DNT signals, our website does not currently respond to DNT browser signals. Instead, we recommend using the cookie management options described above to control tracking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Retention Periods</h2>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                <Clock className="text-white" size={20} />
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  Cookies have different retention periods depending on their type and purpose:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Short-term Cookies:</strong> 24 hours to 30 days</li>
                  <li><strong>Long-term Cookies:</strong> 1 month to 2 years</li>
                  <li><strong>Consent Cookies:</strong> Typically 1 year (to remember your preferences)</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  You can delete cookies at any time through your browser settings. Clearing cookies will remove your preferences and you may need to consent again on your next visit.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">GDPR and ePrivacy Compliance</h2>
            <p className="text-gray-600 mb-4">
              If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, our use of cookies complies with:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>General Data Protection Regulation (GDPR):</strong> We obtain explicit consent before setting non-essential cookies and provide clear information about cookie usage</li>
              <li><strong>ePrivacy Directive:</strong> We ensure cookies are only placed with your prior consent (except for strictly necessary cookies)</li>
              <li><strong>Equal Consent Options:</strong> Our cookie banner provides equally prominent "Accept" and "Reject" options</li>
              <li><strong>Granular Choices:</strong> You can accept or reject cookies by category</li>
              <li><strong>Easy Withdrawal:</strong> You can change or withdraw your consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">California Privacy Rights (CCPA)</h2>
            <p className="text-gray-600 mb-4">
              If you are a California resident, you have specific rights regarding cookies and tracking technologies:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Right to know what personal information is collected through cookies</li>
              <li>Right to opt out of the "sale" of personal information (we do not sell your data)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
              <li>Right to request deletion of data collected through cookies</li>
            </ul>
            <p className="text-gray-600 mt-4">
              For more information about your California privacy rights, please see our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Cookie Policy</h2>
            <p className="text-gray-600">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. When we make material changes, we will notify you by updating the "Last updated" date at the top of this page. For significant changes, we may also provide additional notice (such as a banner on our website or an email notification). We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="text-gray-600 space-y-2">
              <p><strong>Email:</strong> <a href="mailto:support@socialway.ai" className="text-blue-600 hover:underline">support@socialway.ai</a></p>
              <p><strong>Subject Line:</strong> Cookie Policy Inquiry</p>
            </div>
            <p className="text-gray-600 mt-4">
              For general privacy inquiries, please see our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>. For data deletion requests, please see our <a href="/data-deletion" className="text-blue-600 hover:underline">Data Deletion Policy</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
