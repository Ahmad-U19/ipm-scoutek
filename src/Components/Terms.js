import React, { useEffect } from "react";
import "./Terms.css";

function Terms({ onClick, navigate }) {
  useEffect(() => {
    document.title = "Terms of Use | IPM Scoutek";
  }, []);

  return (
    <div className="terms-page">
      <h1>Terms of Use</h1>

      <div className="terms-container">
        <p>Welcome to 2730537 Ontario Inc. d/b/a IPM Scoutek (<strong>“Company”, “we”, “us” or “our”</strong> as the context dictates). We are happy to offer you our platform for the [Insert purpose] services (the <strong>“Services”</strong>) as available through our Website. The terms and conditions set out below (these <strong>“Terms of Use”</strong>) in combination with our <a href="#/privacy" onClick={() => navigate("/privacy")}>privacy policy</a> which is incorporated by reference and available at our Website (these Terms of Use together with such other documents, our <strong>“Terms”</strong>), governs your use of our Services.</p>

        <p><strong>Please read our Terms carefully since they are legally binding and have sections which contain important information about use, rights, liability, and your obligations and matters related to disputes, including the exclusive use of arbitration to resolve disputes. All defined terms, unless otherwise set out in the body, are provided at the end of these Terms of Use.</strong></p>

        <p><strong>By using our Services, you expressly acknowledge that you have read these Terms of Use and agree to all terms and conditions herein. If you do not, or are unable to, agree to our Terms, please do not open an Account to use our Services. If you set up an Account or use our Services, you shall be considered to express your consent and agreement with our Terms. For any clarification, please contact us at 1-866-412-8883.</strong></p>

        <h2>Understanding our Role</h2>
        <p>We are only responsible for providing the IPM Scout platform which allows you (the <strong>“User”, “you” or “your”</strong> as context dictates) to capture information needed for purposes of monitoring plant health in organizations’ greenhouses.</p>

        <p>If you as a User are utilizing our Services on behalf of an organization, your actions, if not in compliance with our Terms, may result in a breach of your organization’s contract with us. Please read our Terms carefully and if you have any doubt about the utilization of our Services, please connect with your supervisor at your organization.</p>


        <h2>Service Offering</h2>
        <p><strong>Right to Use.</strong> Subject to your compliance with these Terms of Use and payment of the amounts owed by you or, as applicable, your organization for use of our Services (see “Fees and Payment”), we grant you a nonsublicensable, nontransferable, nonexclusive, limited and revocable right to access and use our Services only for the purposes described by Company. Company reserves all other rights in our Services, which are protected by trade secret, copyright, and other intellectual property laws.</p>

        <p>Our Services may be accessed through a compatible mobile device and Internet access. You agree that unless we have agreed otherwise, you are solely responsible for the hardware purchase and maintenance and the provision of all Internet connectivity, including any applicable changes, updates and fees as well as the terms of your agreement with your mobile device and telecommunications provider. If you require us to provide you the required hardware, please note that we are solely responsible for the performance of the software; all hardware manufacturer terms and warranty shall apply as if you had purchased the hardware device yourself and you shall be liable for any hardware damage, loss or encumbrance as applicable.</p>

        <p><strong>Registration and Account Set-up.</strong> As a subscriber, you must create an Account on our Website to use our Services fully. Once an Account is created, you are responsible for managing the Account. You should also inform us promptly of any changes to the information provided in order to ensure effective communication with you and Company.</p>

        <p><strong>Credentials Management and Incidents.</strong> You shall: (1) keep your Credentials strictly confidential and secure; and (2) inform us immediately if the confidentiality of any part of your Credentials have been compromised (e.g. you or someone you authorized has shared your Credentials with a third party or you believe there is a credible chance of the security of your Account being compromised).</p>

        <p><strong>Suspicious Activity.</strong><br />We retain the right, but do not have the obligation, to suspend your Account and take any other reasonable action if we suspect any unauthorized access to your Account or note that there is suspicious activity in relation to your Account, and you agree to assist in executing such actions, which may involve your resetting of passwords or taking other measures as may be required.</p>

        <p>If any communication you receive looks suspicious or has links that you do not expect, please do not open or click through. Instead, email us at <a href="mailto:support@ipmscoutek.com.">support@ipmscoutek.com</a>.</p>

        <p><strong>Cancellation by User.</strong> Subscribers may decide at any time to cancel your Account. Please note that if you cancel your Account, we will store your data for one (1) year, after which you will no longer be able to access the data which was resident on our system during the Term.</p>

        <p><strong>Cancellation by Company.</strong> We reserve the right to suspend, and if deemed appropriate, cancel your right to utilize our Services. If we suspend or cancel your Account, you may not be able to download any data from our Website, but you may request access to your data within seven (7) days of your Account cancellation/suspension and we will provide such data during this period on a commercially reasonable basis.</p>

        <h2>Fees and Payment</h2>
        <p><strong>Fees Payable by Subscriber.</strong> You will be charged the fees as set out in our subscription agreement with you.</p>

        <p><strong>Refunds.</strong> We do not provide pro-rated refunds. If you cancel your subscription during the subscription period, you will forego any payments that have already been made to us. If we terminate, suspend or remove the subscriber Account in connection with your violation of the Terms, we shall do so without any liability to you or any third party payor.</p>

        <p><strong>Fee Changes.</strong> We may in the future implement a new fee, or modify an existing fee, for certain current or future services offered. If we revise our fees, we shall notify subscribers by posting the revisions on the Website or by sending them an email.</p>

        <p><strong>Currency.</strong> All fees and transactions shall be in Canadian dollars.</p>

        <h2>Representations, Warranties and Covenants</h2>
        <p>You acknowledge and agree that: (1) you are 18 years old or older; (2) you have the authority to bind yourself, or such other party which you may be representing, to our Terms; and (3) your use of our Services shall (A) be solely for purposes that are permitted by these Terms of Use, (B) not infringe or misappropriate the Intellectual Property Rights of any third party, and (C) comply with all Laws.</p>

        <p><strong>Restricted Actions.</strong> You covenant that you shall not:</p>

        <ol>
          <li><p>misrepresent your identity (e.g. represent to anyone in relation to Company that you are someone else or you are affiliated with someone that you are not);</p></li>
          <li><p>in regards to fees, misrepresent your use of Services (e.g. underreport the number of acres for which the Services are used) in order to reduce the payment and fees owed to us;</p></li>
          <li><p>share your Account log-in details with any person other than those expressly authorized by you;</p></li>
          <li><p>make use of our Services to do anything other than to carry out activities which are normally related to activities conducted using our Services;</p></li>
          <li><p>reverse engineer, de-compile, disassemble or otherwise attempt to discover the source code or underlying ideas or algorithms in any part of our Services;</p></li>
          <li><p>rent, lease, sell, resell, assign, timeshare, offer in a service bureau, or otherwise make any part of our Services available to any third party;</p></li>
          <li><p>damage, disable, overburden or impair our servers or network, or interfere with any other party’s use and enjoyment of our Services;</p></li>
          <li><p>access our Services in order to build a commercially available product or service which competes with our Services;</p></li>
          <li><p>copy any features, functions, integrations, interfaces or graphics which are part of our Services;</p></li>
          <li><p>violate any Laws;</p></li>
          <li><p>make statements on any part of Company on any topic associated with us, particularly regarding Content and our Services, which could reasonably be considered false or misleading;</p></li>
          <li><p>willfully tamper with the security of our Services, including attempting to probe, scan or test the vulnerability of the Solution or to breach its security or authentication measures;</p></li>
          <li><p>share any sensitive data with us which, in the normal course of events, would demand special Handling and introduce a security burden on us that is not agreed upon by us in writing in advance of receipt of such data;</p></li>
          <li><p>transmit any information, through our Services or in any other manner, which may be: (1) unlawful, threatening, abusive, libelous, defamatory, harassing, fraudulent, obscene, vulgar, indecent, inflammatory, sexually explicit, pornographic or profane; (2) in violation of a third party’s Intellectual Property Rights or is subject to Intellectual Property Rights; (3) refutes or is contrary to what is set out anywhere in our Services; (4) is considered “spam” (including machine or randomly-generated, constitutes unauthorized or unsolicited advertising, chain letters, any other form of unauthorized solicitation or any form of lottery or gambling); (5) contains or installs any viruses, worms, malware, Trojan horses or other content that is designed or intended to disrupt, damage or limit the function of any software, hardware or telecommunications equipment or to damage or obtain unauthorized access to any data or other information of any third party; and (6) violates the privacy of any third party; or</p></li>
          <li><p>attempt to gain unauthorized access to our Services or our computer systems or networks through hacking, password mining or any other means.
            We reserve the right to investigate and prosecute, to the fullest extent of the law, any violation of the subsections (i) to (xv) above.</p></li>
        </ol>

        <h2>Proprietary Rights</h2>
        <p><strong>Ownership and Reservation of Rights to Company Intellectual Property.</strong> Company and its licensors own all Intellectual Property Rights in our Services.</p>
        <p>You shall not obtain any ownership interest in our Services as a result of your provision, access or use of Services.</p>

        <p><strong>Right to Handle Your Data.</strong> You hereby grant Company a non-exclusive, sublicensable, royalty-free and transferable right to Handle your data to (1) provide you our Services set out in these Terms of Use, and (2) generate Aggregated Information.</p>
        <ol>
          <li><p>You agree that all such data may be, without further required consent by you, Handled by a third-party for either (1) purposes which serve our business purposes, including transaction processing and data monitoring or storage, or (2) for regulatory or other reasons which are imposed on us in Canada or in any other jurisdiction in which may otherwise decide to store or process such data.</p></li>
          <li><p><strong>Aggregated Information.</strong> We’ll own all Aggregated Information for any purpose we see fit, including but not limited to publication of, and creation of derivative works from the Aggregated Information, provided that such usage shall not reveal to a third party any confidential information or the identity of a User.</p></li>
        </ol>

        <p><strong>Your Input</strong>. We shall have a royalty-free, worldwide, transferrable, sub-licensable, irrevocable, perpetual license to use or incorporate into Services any User Input. You shall have no obligation to provide User Input. Although Company does not seek to monitor or control the submission of User Input, we reserve the right to delete, move and edit any User Input submitted where, in our sole and absolute discretion, it is considered prudent or necessary to do so. User Input is the sole responsibility of the person or entity that provided the User Input. You shall be solely responsible for your User Content and any consequences that may arise from posting, providing or publishing it on the Website.</p>

        <h2>Monitoring of User Activity and Privacy</h2>
        <p>We may, solely at our discretion or at the request of a governmental authority, monitor, record or otherwise process all User interactions with our Website. Further information is available in our Privacy Policy.</p>

        <h2>Corrective Action and Notice</h2>
        <p>If you as a subscriber become aware of any actual or threatened activity by a User which is prohibited by “Restricted Actions”, you shall immediately (a) take all reasonable and lawful measures within your control that are necessary to stop the activity or threatened activity and to mitigate its effects (including, where applicable, by discontinuing and preventing any unauthorized access to our Services), (b) notify Company of any such actual or threatened activity, and (c) if you are User on behalf of a subscriber, inform the subscriber of any such actual or threatened activity.</p>

        <h2>Permission for Communication</h2>
        <p>We use email and other electronic means to stay in touch with Users. You agree that when you provide us your e-mail address or personally identifying information (e.g. name, address) during or prior to access of our Services or use of any other service or tool provided through or on the Website, you: (1) consent to receive communications from us, our affiliates, and the applicable Third Party Provider in electronic formats, including via the email address you have submitted or other agreed upon contact methods; (2) can opt-out from receiving communication from any such party at any time by completing the formalities on the Website, but we do not take on any liability for any communication of another party to you, particularly if you have provided your contact information to them independently rather than using the communication functions of the Website; and (3) agree that our Terms, agreements, notices, disclosures and other communications that we provide you electronically satisfy any legal requirement that such communications would satisfy if they were in writing and physically presented to you.</p>

        <h2>Disclaimers</h2>
        <p>IN ADDITION TO ANY OTHER DISCLAIMERS SET OUT IN OUR TERMS, OUR SERVICES, INCLUDING ALL CONTENT AND FUNCTIONS, ARE PROVIDED “AS IS” WITHOUT ANY REPRESENTATIONS OR WARRANTIES OF ANY KIND MADE BY US. WE EXPRESSLY DISCLAIM ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, RELIABILITY OR ACCURACY, OR INTEGRATION WITH ANY SYSTEM.</p>

        <p>COMPANY DOES NOT CERTIFY ANY CONTENT, INCLUDING PRODUCTS, PROCEDURES, OPINIONS, OR OTHER INFORMATION THAT MAY APPEAR OR BE REFERENCED IN THE COMPANY CONTENT. RELIANCE ON ANY CONTENT AND ANY OTHER INFORMATION, HOWEVER PRESENTED, OBTAINED THROUGH OUR SERVICES, IS SOLELY AT YOUR OWN RISK.</p>
        <p>ALTHOUGH OUR SERVICES MAY PROVIDE ACCESS TO THIRD PARTY PROVIDERS, WE ASSUME NO OBLIGATION AND PROVIDE NO GUARANTEES WHATSOEVER IN CONNECTION WITH THE PERFORMANCE OF SUCH THIRD PARTY PROVIDERS. WE ARE NOT RESPONSIBLE TO YOU FOR THE CONDUCT OF ANY SUCH THIRD PARTY OR FOR ANY ERROR, DELAY, OR DEFICIENCY OF ANY PART OF THE SERVICE THEY PROVIDE, INCLUDING THE AVAILABILITY OF TELECOMMUNICATION SERVICES FROM YOUR PROVIDER AND ACCESS TO OUR SERVICES AT ANY TIME OR FROM ANY LOCATION; ANY LOSS, DAMAGE OR SECURITY INTRUSION OF THE TELECOMMUNICATION SERVICES; AND ANY DISCLOSURE OF INFORMATION TO THIRD PARTIES OR FAILURE TO TRANSMIT ANY DATA, COMMUNICATIONS OR SETTINGS CONNECTED WITH OUR SERVICES.</p>
        <p>WE DO NOT WARRANT THAT ANY PART OF OUR SERVICES OR THE FUNCTIONS THEREIN WILL BE UNINTERRUPTED OR ERROR FREE, OR THAT SOLUTION OR ANY ITEM CONNECTED WITH THE WEBSITE IS FREE OF VIRUSES OR ANY HARMFUL COMPONENTS, OR THAT OUR SERVICES ARE IMPERVIOUS TO HACKS OR DATA LOSSES, OR THAT ANY TRANSMISSION TO AND FROM US OR COMMUNICATION BY YOU IS CONFIDENTIAL OR SECURE, EVEN IF WE BECOME AWARE OF ANY, OR ARE TOLD ABOUT, A POTENTIAL BREACH. YOU AGREE THAT YOUR USE OF OUR SERVICES CREATES NO OBLIGATION UPON US AND THERE IS NO RELATIONSHIP (WHETHER CONTRACTUAL, FIDUCIARY OR OTHERWISE) CREATED BETWEEN YOU AND US OTHER THAN PURSUANT TO OUR TERMS.</p>

        <h2>Release and Indemnification</h2>
        <p>You agree to indemnify and hold harmless Company, its officers, directors, employees, agents, successors and permitted assigns from and against any and all claims and expenses, including legal fees and disbursements, arising out of: your improper use of our Services, including your violation of any of the provisions in these Terms of Use; allegation of facts that, if true, would constitute your breach of any of your representations, warranties, covenants or obligations under these Terms of Use; or negligence or willful misconduct by you or any third party on your behalf in connection with our Services.</p>

        <p>We may, at our sole discretion and expense, choose to assume the exclusive defense and control of any matter otherwise subject to indemnification by you and you shall not in any event settle any matter without our written consent.</p>
        <h2>Liability</h2>
        <p>Your only remedy with respect to any dissatisfaction with (i) Company, (ii) our Terms, (iii) any policy or practice of Company, or (iv) any content or information transmitted through our Services, is to cancel your subscription and to stop using our Services.</p>

        <p>Under no circumstances shall Company and its officers, directors, employees, agents, successors and permitted assigns be liable for any indirect, incidental, special, consequential or exemplary damages arising from or relating to the use of our Services. This includes, but is not limited to, any loss of profit, earnings, anticipated earnings, interruption or loss of business, or any consequential losses, problems, or fault howsoever arising out of the use of our Services.</p>
        <p>Under no circumstances shall we be liable for the acts, omissions or conduct of any third party users of our Services and you must ensure that you inform such third parties, who may benefit from any part of our Services, of this fact.</p>
        <p>TO THE FULLEST EXTENT OF THE LAW, WITHOUT LIMITING THE FOREGOING IN THIS SECTION ENTITLED “LIABILITY” THE LIMIT ON COMPANY’S TOTAL CUMULATIVE LIABILITY TO YOU OR ANY PERSON FOR ANY CLAIMS ARISING FROM OR RELATING TO OUR SERVICES SHALL BE LIMITED TO A MAXIMUM OF $10.00.</p>
        <p>Should a jurisdiction that does not allow the exclusion of incidental, special or consequential damages apply to these Terms of Use, the total liability to you or any person in connection with any incidental, special or consequential damages shall be limited by the above paragraph of this section entitled “Liability.”</p>

        <h2>Term and Termination</h2>
        <p>Our Terms shall be deemed to be applicable to you upon your use of our Services and shall terminate only upon an actual deactivation of your Account and cancellation of your subscription through the means provided on the Website. Abandonment or non-use of the Account shall not lead to an automatic termination of your Account.</p>
        <p>We may terminate your access to all or any part of our Services at any time, with or without cause and with or without notice, effective immediately and for any reason deemed appropriate in our sole discretion.</p>
        <p>You may cancel your Account at any time by using the cancel account feature within the website, if such feature is available or requesting a cancellation of your Account. You may terminate your obligations to us at any time by canceling your Account and discontinuing use of our Services.</p>

        <p>Except for the provisions set out under “Surviving Provisions” these Terms of Use shall no longer be applicable to you if your Account is cancelled or terminated.</p>
        <p>Upon termination of your Account, (1) all rights, licenses, consents and authorizations granted pursuant to these Terms of Use shall immediately terminate, and (2) we may disable all Users’ access to our Services.</p>
        <p>Notwithstanding anything to the contrary in these Terms of Use, with respect to information and materials then in our possession or control:</p>
        <ul>
          <li>
            <p>we may retain any of your data in our backups, archives and disaster recovery systems until such data is deleted in the ordinary course; and</p>
          </li>
          <li>
            <p>all information and materials described in the foregoing clause (i) shall remain subject to all confidentiality, security and other applicable requirements of our Terms.</p>
          </li>
        </ul>

        <h2>Modification of our Terms</h2>
        <p>Company reserves the right, at our sole discretion, to amend these Terms of Use at any time and shall update these Terms of Use in the event of any such amendments.</p>

        <p>If our Terms are modified in a way we consider significant, we shall post the amended Terms on our Website. Although we shall take reasonable steps to notify you of such significant changes made, you are expected to check our Terms periodically for any amendments. Your continued use of our Services following such notification shall constitute your affirmative acknowledgement of these Terms of Use and agreed to be bound by our Terms, as amended. If at any time you choose not to accept our revised Terms, including following receipt of notification of any modifications made hereto, then please do not use our Services and as applicable, terminate your Account.</p>

        <h2>Governing Law</h2>
        <p>Our Terms and any access to or use of our Services shall be governed by, and construed in accordance with the internal laws of the Province of Ontario and the federal laws of Canada therein, without giving effect to any choice or conflict of law provision or rule (whether of the Province of Ontario or any other jurisdiction) that would cause the application of the laws of any jurisdiction other than those of the Province of Ontario.</p>

        <h2>Arbitration</h2>
        <p>Any controversy, dispute, disagreement or claim arising out of, relating to or in connection with our Services or any breach thereof, including any question regarding its existence, validity or termination, shall be finally and conclusively resolved by arbitration under Arbitration Act, 1991, S.O. 1991, c. 17 (the “Rules”). There shall be one arbitrator selected in accordance with the Rules. The parties to the arbitration shall equally share the fees of the arbitrator and the facility fees and the parties shall each bear their own legal costs and expenses of the arbitration; provided, that the arbitrator shall have the authority to award such fees, costs and expenses in the decision of the arbitrator. The arbitration shall be conducted in English. Any decision of the arbitrator shall be final and binding on the parties and their respective successors and assigns and there shall be no right to appeal such decision, whether on a question of law, a question of fact, or a mixed question of fact and law. Notwithstanding the foregoing, Company shall have the right to seek injunctive or other equitable relief, including in relation to the breach of confidentiality obligations or violation of the Intellectual Property Rights set forth in these Terms of Use.</p>

        <h2>Waiver of Class Proceedings</h2>
        <p>Users hereby waive any right they may have to commence or participate in any class action lawsuit against Company related to any claim, dispute or controversy and, where applicable, Users hereby agree to opt out of any class proceeding against Company otherwise commenced.</p>

        <h2>Severability</h2>
        <p>If any portion or provision of our Terms shall to any extent be declared illegal or unenforceable by a court of competent jurisdiction, then the remainder of our Terms, or the application of such portion of provision in circumstances other than those as to which it is so declared illegal or unenforceable, shall not be affected thereby, and each portion and provision of our Terms shall be valid and enforceable to the fullest extent permitted by law.</p>

        <h2>Headings and Summaries</h2>
        <p>The headings, captions and summaries in these Terms of Use are for convenience only and in no way define or describe the scope or content of any provision of these Terms of Use.</p>

        <h2>Notices</h2>
        <p>Except as otherwise stated in our Terms or as expressly required by law, any notice to us, including for purposes of termination, shall be given in writing by certified postal mail to:</p>
        <p>1464 Ottawa St., Windsor, ON, N8X 2G2</p>
        <p>or by email to:</p>
        <p>support@ipmscoutek.com. Any notice to you shall be given to the most current email address in your Account.</p>

        <h2>Other Rules of Interpretation</h2>
        <p>Any reference to gender includes all genders; words importing the singular number only shall include the plural and vice versa; the word “or” is not exclusive; the words “including”, “includes” and “include” mean “including without limitation”; and “shall” means “will” and “must”, all three of which can be changed interchangeably and shall not mean “may”.</p>

        <h2>No Waiver of Covenants</h2>
        <p>Failure by any party to insist upon the strict performance of any of the covenants, agreements, terms, provisions or conditions contained in our Terms or to exercise any election shall not be construed as a waiver or relinquishment of such covenant, agreement, term, provision or condition but the same shall continue and remain in full force. No waiver shall be deemed to have been made unless expressed in writing.</p>

        <h2>Surviving Provisions</h2>
        <p>Only the following provisions of our Terms of Use shall survive following any termination or expiration: Representations, Warranties and Covenants, Proprietary Rights, Permission for Communication, Disclaimers, Release and Indemnification, Liability, Governing Law, Arbitration, Waiver of Class Proceedings, and this clause.</p>

        <h2>Entire Agreement</h2>
        <p>These Terms of Use, in combination with all policies and guidelines of Company (including the Privacy Policy), incorporated by reference, constitute the entire agreement between Company its subscribers and Users and supersede all prior communications, agreements and understandings, written or oral, with respect to the subject matter of our Terms.</p>

        <h2>Definitions</h2>
        <p><strong>“Account”</strong> means a User’s account that was registered on our Website and created for the purposes of accessing our Services.</p>

        <p><strong>“Aggregated Information”</strong> means all information derived from your use of our Services and include without limitation, usage information, data and other content, provided however, such information shall not be able to reveal the identity of the User.</p>

        <p><strong>“Certify”</strong> means being officially recognized as possessing a certain qualification, criteria or meeting certain standards.</p>
        <p><strong>“Content”</strong> means any information, text, document, articles, blogs, links, reports, data, databases, tools, e-mail, code, photographs, pictures, audio, video, postings, graphics (including illustrations and animations), comments, interfaces, webpages, files, software, product names, company names, trade-marks, logos, trade names, or other materials.</p>

        <p><strong>“Credentials”</strong> means Account log-in and other details which are relevant to your access to our Services.</p>
        <p><strong>“Company Content”</strong> means any Content provided by us on the Website in provision of our Services.</p>
        <p><strong>“Handle”</strong> means to process, record, transfer, access, receive, use, disclose, retain, dispose of, destroy, manage, collect, store, or otherwise handle and any variation of “Handle” and “Handling” has the same meaning depending on the context.</p>
        <p><strong>“Intellectual Property”</strong> means inventions, discoveries, or improvements (whether patented or able to be patented and whether or not reduced to practice), including patents, patent applications, certificates of invention, utility models, continuations, continuations-in-part, provisionals, divisions, reissues, renewals, re-examinations and extensions thereof; trade secrets, know-how, designs, methodologies, processes, rights in data, and similar rights; semiconductor chip protection and mask work right; the protection of works of authorship or expression and copyright (whether or not registered); trademark, trade names, service marks, logos, domain names and trade dress; and similar rights under any laws or international conventions throughout the world, whether now existing or hereafter arising or developed, including the right to apply for registrations, certificates, or renewals with respect thereto, the rights to prosecute, enforce, and obtain damages.</p>
        <p><strong>“Intellectual Property Rights”</strong> means any rights pertaining to Intellectual Property.</p>
        <p><strong>“Laws”</strong> means any statute, ordinance, regulation, rule, code, constitution, treaty, common law, governmental order or other requirement or rule of law of any governmental authority.</p>
        <p><strong>“Third Party Providers”</strong> means any independent third party provider that may be accessible through our Services, including any organization which is governmental or regulatory in nature.</p>
        <p><strong>“User(s)”</strong> means anyone who is using our Services, whether or not the person has an Account.</p>
        <p><strong>“User Input”</strong> means any Content submitted or otherwise shared by a User in the course of provision of our Services, including suggestions, modifications or other actions undertaken by User or is otherwise shared with other Users through the Website.</p>
        <p><strong>“Website”</strong> means (i) any website including www.ipmscoutek.com and a sub-domain or any such websites, and (ii) any mobile application for such websites or any other website operated by us, in connection with our Services provided to you.</p>
      </div>
    </div>
  );
}

export default Terms;
