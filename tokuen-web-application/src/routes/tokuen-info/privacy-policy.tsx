import { createFileRoute } from "@tanstack/react-router";
import GenHeader from "../../components/header-tokuen-logo";

export const Route = createFileRoute('/tokuen-info/privacy-policy')({
    component: PrivacyPolicy,
})

function PrivacyPolicy() {
    return <>
        <div className="page">
        
            {/**Content */}
            <section className='flex flex-1 w-full h-full bg-linear-to-b from-indigo-900 to-purple-900'>
        
              {/**Left side */}
              <div className='sticky flex flex-1 flex-col w-[40%] pt-16 h-full border-r-2 border-r-white'>
                <div className='flex flex-col relative w-[50%] h-[75%] right-0 top-0 self-end gap-2'>
                  <div className='flex flex-[0 1 auto] flex-row w-2/6 h-16 items-center'>
                    <GenHeader
                      img={'./../../../public/resources/tokuen-colored.png'}
                      text={'TOKUEN'}
                      textColor={'white'}
                      width={'3rem'}
                    />
                  </div>
                  <div className='flex flex-[0 1 auto] text-white pl-[15%] font-semibold items-center gap-5 justify-start'>
                    <p className='text-3xl'>Privacy Policy</p>
                  </div>
                  <div className='flex flex-[0 1 auto] flex-col self-start pl-10 pr-12 text-x font-semibold text-white'>
                    <ol className='list-none'>
                      <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#first-pp'>Interpretations and Definitions</a></li>
                      <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#second-pp'>Collection and using your personal data</a></li>
                      <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#third-pp'>Use of your personal data</a></li>
                      <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#fourth-pp'>Retention of your personal data</a></li>
                      <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#fifth-pp'>Transfer of your personal data</a></li>
                      <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#sixth-pp'>Delete your personal data</a></li>
                      <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#seventh-pp'>Disclosure of your personal data</a></li>
                      <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#eight-pp'>Changes to this Privacy Policy</a></li>
                    </ol>
                  </div>
                </div>
              </div>
        
              {/**Right side */}
              <div className='flex flex-1 flex-col w-[60%] h-full text-white pt-16 pl-16 pr-8 pb-16 overflow-y-auto scroll-smooth'>
                <div className='flex-1 w-[60%]'>
                  <h1>Effective Nov 10, 2025</h1>
                  <p className='flex-0 cursor-pointer hover:underline font-semibold text-(--subheader-two)'><a href=''>view printable version</a></p>

                  {/**Main text */}
                  <p><br/>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure 
                    of Your information when You use the Service and tells You about Your privacy rights and how 
                    law protects You.<br/><br/>We use Your Personal data to provide and improve the 
                    Service. By using the Service, You agree to the collection and use of 
                    information in accordance with this Privacy Policy. This Privacy Policy has 
                    been created with the help of the Privacy Policy Generator.</p>
                
                  <h2 id='first-pp'><br/>Interpretations and Definitions</h2>
                  <p><br/><b>Interpretations</b><br/><br/>The words whose initial letters are capitalized have meanings 
                  defined under the following conditions. The following definitions 
                  shall have the same meaning regardless of whether they appear in singular 
                  or in plural.<br/><br/>
                  <b>Definitions</b><br/><br/>
                  For the purposes of this Privacy Policy:<br/>
                  </p>
                  <ul className='list-disc'>
                    <li>Account means a unique account created for You to access our Service or parts of our Service.</li>
                    <li>Affiliate means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                    <li>Application refers to TOKN, the software program provided by the Company.</li>
                    <li>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Artiphix, text.</li>
                    <li>Country refers to: Philippines</li>
                    <li>Device means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
                    <li>Personal Data is any information that relates to an identified or identifiable individual.</li>
                    <li>Service refers to the Application</li>
                    <li>Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                    <li>Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)</li>
                    <li>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable</li>
                  </ul>
                  <br/>
                  <h2 id='second-pp'>Collecting and Using Your Personal Data</h2>
                  <br/>
                  <h3>Types of data collected</h3><br/>
                  <p><b>Personal data</b><br/><br/>
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                  </p>
                  <ul className='list-disc'>
                    <li>Email address</li>
                    <li>First and last name</li>
                    <li>Phone number</li>
                    <li>Usage data</li>
                  </ul>
                  <br/>
                  <p>
                    <b>Usage Data</b>
                    <br/><br/>
                    Usage Data is collected automatically when using the Service.<br/><br/>
                    Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  </p>
                  <br/><br/>
                  <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                  <br/><br/>
                  We may also collect information that Your browser sends whenever You visit Our Service or when You access the Service by or through a mobile device.
                  <br/><br/>
                  <p><b>Information Collected while using the Application</b></p>
                  <br/>
                  <p>While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:</p>
                  <br/><br/>
                  <ul className='list-disc'>
                    <li>Pictures and other information from your Device's camera and photo library</li>
                  </ul>
                  <br/>
                  <p>We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.</p>
                  <br/><br/>
                  <p>You can enable or disable access to this information at any time, through Your Device settings.</p>
                  <br/><br/>
                  <h2 id='third-pp'>Use of your Personal Data</h2>
                  <br/>
                  <p>The Company may use Personal Data for the following purposes:</p>
                  <br/><br/>
                  <ul className='list-disc'>
                    <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                    <li>To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                    <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                    <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                    <li>To provide You with news, special offers, and general information about other goods, services and events which We offer that are similar to those that you have already purchased or inquired about unless You have opted not to receive such information.</li>
                    <li>To manage Your requests: To attend and manage Your requests to Us.</li>
                    <li>For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                    <li>For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
                  </ul>
                  <br/>
                  <p>We may share Your personal information in the following situations:</p>
                  <br/>
                  <ul className='list-disc'>
                    <li>With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                    <li>For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                    <li>With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                    <li>With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                    <li>With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                    <li>With Your consent: We may disclose Your personal information for any other purpose with Your consent.</li>
                  </ul>
                  <br/>
                  <h2 id='fourth-pp'>Retention of Your Personal Data</h2>
                  <br/>
                  <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                  <br/><br/>
                  <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer periods.</p>
                  <br/><br/>
                  <h2 id='fifth-pp'>Transfer of Your Personal Data</h2>
                  <br/>
                  <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from Your jurisdiction.</p>
                  <br/><br/>
                  <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
                  <br/><br/>
                  <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
                  <br/><br/>
                  <h2 id='sixth-pp'>Delete Your Personal Data</h2>
                  <br/>
                  <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
                  <br/><br/>
                  <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
                  <br/><br/>
                  <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
                  <br/><br/>
                  <h2 id='seventh-pp'>Disclosure of Your Personal Data</h2>
                  <br/>
                  <h3>Business Transactions</h3>
                  <br/>
                  <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                  <br/><br/>
                  <h3>Law enforcement</h3>
                  <br/>
                  <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                  <br/><br/>
                  <h3>Other legal requirements</h3>
                  <br/>
                  <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                  <br/>
                  <ul className='list-disc'>
                    <li>Comply with a legal obligation</li>
                    <li>Protect and defend the rights or property of the Company</li>
                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>Protect the personal safety of Users of the Service or the public</li>
                    <li>Protect against legal liability</li>
                  </ul>
                  <br/>
                  <h3>Security of Your Personal Data</h3>
                  <br/>
                  <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                  <br/><br/>
                  <h3>Children's Privacy</h3>
                  <br/>
                  <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                  <br/><br/>
                  <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
                  <br/><br/>
                  <h3>Links to Other Websites</h3>
                  <br/>
                  <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                  <br/><br/>
                  <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                  <br/><br/>
                  <h2 id='eight-pp'>Changes to this Privacy Policy</h2>
                  <br/>
                  <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                  <br/><br/>
                  <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
                  <br/><br/>
                  <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                  <br/><br/>
                  <h2 id='ninth-pp'>Contact Us</h2>
                  <br/>
                  <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                  <br/>
                  <ul className='list-disc'>
                    <li>By email: [email here pls]</li>
                  </ul>
                  
                </div>
              </div>
            </section>
          </div>
    </>
}