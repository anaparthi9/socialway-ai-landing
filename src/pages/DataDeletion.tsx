import { AlertTriangle, Mail, Clock, Shield, CheckCircle, Globe, Trash2, FileText } from 'lucide-react';

export function DataDeletion() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Data Deletion Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 1, 2025</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Right to Data Deletion</h2>
            <p className="text-gray-600 mb-4">
              At SocialWay.ai, we respect your right to control your personal data. In accordance with the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other applicable privacy laws, you have the right to request the deletion of your personal data at any time.
            </p>
            <p className="text-gray-600">
              This page explains how to request data deletion, what data will be deleted, and what to expect during the process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Request Data Deletion</h2>
            <p className="text-gray-600 mb-4">You can request data deletion through any of the following methods:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900">Email Request</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Send an email to <a href="mailto:support@socialway.ai" className="text-blue-600 hover:underline">support@socialway.ai</a> with the subject line "Data Deletion Request" and include your account email address.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <Shield className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900">In-App Request</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Log into your account, go to Settings &gt; Privacy &gt; Delete Account, and follow the prompts to delete your account and data.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <Globe className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900">Platform Disconnection</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Disconnect SocialWay.ai from your social media accounts directly through each platform's settings (Facebook, Instagram, LinkedIn, X, or Bluesky).
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <FileText className="text-white" size={20} />
                  </div>
                  <h3 className="font-semibold text-gray-900">Written Request</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Submit a written request to our mailing address. Include your full name, email address, and a clear statement requesting data deletion.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verification Process</h2>
            <p className="text-gray-600 mb-4">
              To protect your privacy and prevent unauthorized deletion requests, we may need to verify your identity before processing your request. Verification may include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Confirming your email address matches the account on file</li>
              <li>Sending a verification link to your registered email</li>
              <li>Requesting additional identifying information for high-risk requests</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We will not use any information collected for verification purposes for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Data Will Be Deleted</h2>
            <p className="text-gray-600 mb-4">When you request data deletion, we will permanently remove:</p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-600">Account information (name, email, password hash)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-600">Profile data and preferences</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-600">Connected social media account tokens</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-600">AI-generated content and prompts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-600">Draft posts and scheduled content</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-600">Analytics and usage history</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-600">Media files and uploads</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-600">Communication history with support</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention Exceptions</h2>
            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-gray-700 mb-3">
                  Certain data may be retained for legal, tax, regulatory, or legitimate business purposes, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Transaction records and invoices (retained for up to 7 years for tax compliance)</li>
                  <li>Audit logs required for security and fraud prevention</li>
                  <li>Data necessary to comply with legal obligations or court orders</li>
                  <li>Anonymized or aggregated data that cannot identify you</li>
                  <li>Information needed to resolve disputes or enforce our agreements</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Processing Timeline</h2>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                <Clock className="text-white" size={20} />
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  We process data deletion requests within the following timeframes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Acknowledgment:</strong> Within 3 business days of receiving your request</li>
                  <li><strong>Verification:</strong> Within 5 business days (if required)</li>
                  <li><strong>Deletion:</strong> Within 30 days of verified request</li>
                  <li><strong>Confirmation:</strong> Email confirmation sent upon completion</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  During the processing period, you may cancel your deletion request by contacting us. Once deletion is complete, it cannot be reversed.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Confirmation Code</h2>
            <p className="text-gray-600 mb-4">
              Upon successful processing of your deletion request, you will receive:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>A unique confirmation code for your records</li>
              <li>An email confirming the deletion has been completed</li>
              <li>A summary of data categories that were deleted</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Please save your confirmation code. You may use it to verify that your deletion request was processed if needed in the future.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Platform-Specific Data Deletion</h2>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Meta (Facebook/Instagram)</h3>
            <p className="text-gray-600 mb-4">
              When you disconnect SocialWay.ai from your Facebook or Instagram account, or when Meta sends us a data deletion request on your behalf, we will delete all data received from Meta's APIs within 30 days. You can also initiate deletion directly from Facebook:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-1 ml-4 text-sm">
              <li>Go to your Facebook Settings &amp; Privacy &gt; Settings</li>
              <li>Click on "Apps and Websites"</li>
              <li>Find SocialWay.ai and click "Remove"</li>
              <li>Check the box to delete all data posted by SocialWay.ai</li>
            </ol>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">LinkedIn</h3>
            <p className="text-gray-600 mb-4">
              To revoke SocialWay.ai's access to your LinkedIn data:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-1 ml-4 text-sm">
              <li>Go to LinkedIn Settings &amp; Privacy</li>
              <li>Click on "Data privacy" &gt; "Other applications"</li>
              <li>Find SocialWay.ai and click "Remove"</li>
            </ol>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">X (Twitter)</h3>
            <p className="text-gray-600 mb-4">
              To revoke SocialWay.ai's access to your X account:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-1 ml-4 text-sm">
              <li>Go to X Settings &gt; Security and account access</li>
              <li>Click on "Apps and sessions" &gt; "Connected apps"</li>
              <li>Find SocialWay.ai and click "Revoke access"</li>
            </ol>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Bluesky</h3>
            <p className="text-gray-600 mb-4">
              To revoke SocialWay.ai's access to your Bluesky account:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-1 ml-4 text-sm">
              <li>Go to Bluesky Settings</li>
              <li>Navigate to "App Passwords" or "Connected Apps"</li>
              <li>Revoke the app password or access token for SocialWay.ai</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Data</h2>
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <Globe className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-gray-700 mb-2">
                  <strong>Important:</strong> Deleting your SocialWay.ai account does not automatically delete content you have published to connected social media platforms.
                </p>
                <p className="text-gray-700">
                  Content posted to Facebook, Instagram, LinkedIn, X, or Bluesky through our Service remains on those platforms and is governed by their respective privacy policies. To delete content from those platforms, you must do so directly through each platform.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights Under GDPR</h2>
            <p className="text-gray-600 mb-4">
              If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have additional rights under GDPR Article 17 (Right to Erasure):
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Right to request deletion when data is no longer necessary</li>
              <li>Right to request deletion when you withdraw consent</li>
              <li>Right to request deletion when you object to processing</li>
              <li>Right to request deletion when data was unlawfully processed</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights Under CCPA</h2>
            <p className="text-gray-600 mb-4">
              If you are a California resident, you have the following rights under the California Consumer Privacy Act:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Right to request deletion of personal information</li>
              <li>Right to know what personal information was deleted</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
              <li>Right to designate an authorized agent to submit requests on your behalf</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Backup and Recovery</h2>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                <Trash2 className="text-white" size={20} />
              </div>
              <div>
                <p className="text-gray-600 mb-2">
                  <strong>Data deletion is permanent and irreversible.</strong>
                </p>
                <p className="text-gray-600">
                  Before requesting deletion, we recommend exporting any data you wish to keep. Once your deletion request is processed, we cannot recover your data from backups. Our backup systems are designed to purge deleted data within 90 days of the deletion request.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about data deletion, need assistance with your request, or want to check the status of an existing request, please contact us:
            </p>
            <div className="text-gray-600 space-y-2">
              <p><strong>Email:</strong> <a href="mailto:support@socialway.ai" className="text-blue-600 hover:underline">support@socialway.ai</a></p>
              <p><strong>Subject Line:</strong> Data Deletion Request</p>
              <p><strong>Response Time:</strong> Within 3 business days</p>
            </div>
            <p className="text-gray-600 mt-4">
              For general privacy inquiries, please see our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
