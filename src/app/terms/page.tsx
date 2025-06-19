import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Back to home
        </Link>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <h1 className="text-5xl font-light mb-8">Terms of Use</h1>
          
          <p className="text-muted mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-4">1. Agreement to Terms</h2>
            <p className="text-muted leading-relaxed">
              By downloading, installing, or using Eris ("the App"), you agree to be bound by these Terms of Use 
              and Apple's Standard End User License Agreement (EULA), which is incorporated herein by reference.
            </p>
            <p className="text-muted leading-relaxed mt-4">
              You can find Apple's Standard EULA at:{' '}
              <a 
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-muted transition-colors"
              >
                https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-4">2. Description of Service</h2>
            <p className="text-muted leading-relaxed">
              Eris is a private AI chat application that runs entirely on your device using Apple's MLX framework. 
              The App allows you to interact with various AI language models without requiring an internet connection 
              after initial model download.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-4">3. Use of the App</h2>
            <p className="text-muted leading-relaxed mb-4">
              You may use Eris for:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2">
              <li>Personal AI assistance and conversation</li>
              <li>Educational purposes and learning</li>
              <li>Professional productivity enhancement</li>
              <li>Creative writing and brainstorming</li>
              <li>Code generation and technical assistance</li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              You agree not to use the App for any illegal purposes or in violation of any applicable laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-4">4. Privacy and Data</h2>
            <p className="text-muted leading-relaxed">
              Your privacy is fundamental to Eris. All conversations and data remain on your device. 
              We do not collect, store, or have access to any of your conversations or personal data. 
              For more details, please see our Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-4">5. AI Model Usage</h2>
            <p className="text-muted leading-relaxed">
              The AI models available in Eris are subject to their respective licenses. By using these models 
              through Eris, you agree to comply with their individual licensing terms. Models are downloaded from 
              Hugging Face and stored locally on your device.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-4">6. Intellectual Property</h2>
            <p className="text-muted leading-relaxed">
              The App and its original content, features, and functionality are owned by Ignacio Palacio and 
              Northern Bytes and are protected by international copyright, trademark, and other intellectual 
              property laws. The underlying AI models are owned by their respective creators.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-muted leading-relaxed">
              THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND. 
              TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING 
              BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND 
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE ERROR-FREE OR THAT AI RESPONSES WILL 
              BE ACCURATE OR RELIABLE.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-4">8. Limitation of Liability</h2>
            <p className="text-muted leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER 
              INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES 
              RESULTING FROM YOUR USE OR INABILITY TO USE THE APP.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-4">9. Changes to Terms</h2>
            <p className="text-muted leading-relaxed">
              We reserve the right to modify these Terms at any time. If we make changes, we will update the 
              "Last updated" date at the top of this page. Your continued use of the App after any changes 
              indicates your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-4">10. Contact Information</h2>
            <p className="text-muted leading-relaxed">
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <p className="text-muted mt-4">
              <a 
                href="mailto:contact@northernbytes.dev"
                className="text-white underline hover:text-muted transition-colors"
              >
                contact@northernbytes.dev
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}