export function Cookies() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 1, 2025</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
            <p className="text-gray-600">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">SocialWay.ai uses cookies for the following purposes:</p>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-600 text-sm">
                  These cookies are necessary for the website to function properly. They enable core functionality such as security, authentication, and session management. You cannot opt out of these cookies.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-gray-600 text-sm">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Functionality Cookies</h3>
                <p className="text-gray-600 text-sm">
                  These cookies remember your preferences and choices (such as language or region) to provide a more personalized experience.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                <p className="text-gray-600 text-sm">
                  These cookies are used to track visitors across websites to display relevant advertisements. They may be set by third-party advertising networks.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4">
              We may use third-party services that set their own cookies, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Google Analytics:</strong> For website analytics</li>
              <li><strong>Stripe:</strong> For payment processing</li>
              <li><strong>Intercom:</strong> For customer support</li>
              <li><strong>Social Media Platforms:</strong> For social media integrations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings</li>
              <li><strong>Our Cookie Settings:</strong> Use our cookie consent tool to manage your preferences</li>
              <li><strong>Opt-Out Tools:</strong> Visit optout.aboutads.info for advertising cookies</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Please note that disabling certain cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Retention</h2>
            <p className="text-gray-600">
              The length of time a cookie remains on your device depends on whether it is a "persistent" or "session" cookie. Session cookies last only until you close your browser. Persistent cookies remain on your device until they expire or you delete them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about our use of cookies, please contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              Email: <a href="mailto:support@socialway.ai" className="text-blue-600 hover:underline">support@socialway.ai</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
