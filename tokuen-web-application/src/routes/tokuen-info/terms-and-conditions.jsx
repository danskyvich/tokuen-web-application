import { createFileRoute } from '@tanstack/react-router'
import GenHeader from '../../components/header-tokuen-logo'

export const Route = createFileRoute("/tokuen-info/terms-and-conditions")({
  component: TermsAndConditions,
})

function TermsAndConditions() {
  return <>
  {/**Whole page */}
  <div className="flex flex-col h-screen w-screen m-0 p-0">

    {/**Content */}
    <section className='flex flex-1 w-full h-full bg-linear-to-b from-indigo-900 to-purple-900'>

      {/**Left side */}
      <div className='sticky flex flex-1 flex-col w-[40] pt-16 h-full border-r-2 border-r-white'>
        <div className='flex flex-col relative w-[50%] h-[75%] right-0 top-0 self-end gap-2'>
          <div className='flex flex-[0 1 auto] flex-row w-2/6 h-16 items-center'>
            <GenHeader
              img={'./../../../public/resources/tokuen-colored.png'}
              text={'TOKUEN'}
              textColor={'white'}
            />
          </div>
          <div className='flex flex-[0 1 auto] flex-col text-white font-semibold'>
            <p className='text-3xl'>Terms and Conditions</p>
          </div>
          <div className='flex flex-[0 1 auto] flex-col self-start pr-12 text-x font-semibold text-white'>
            <li className='list-none'>
              <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#first-tac'>Your Agreement</a></li>
              <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#second-tac'>Privacy</a></li>
              <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#third-tac'>Linked Sites</a></li>
              <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#fourth-tac'>Forward Looking Statements</a></li>
              <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#fifth-tac'>Disclaimer of Warranties and Limitation of Liability</a></li>
              <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#sixth-tac'>Exclusions and Limitations</a></li>
              <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#seventh-tac'>Our Proprietary Rights</a></li>
              <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#eight-tac'>Indemnity</a></li>
              <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#ninth-tac'>Copyright and Trademark Notice</a></li>
              <li className='flex-1 cursor-pointer hover:bg-indigo-950 p-0 rounded-xl'><a className='inline-block p-3 w-full' href='#tenth-tac'>Intellectual Property Infringement Claims</a></li>
            </li>
          </div>
        </div>
      </div>

      {/**Right side */}
      <div className='flex flex-1 flex-col w-[60%] h-full text-(--white) pt-16 pb-16 pl-16 pr-8 overflow-y-auto scroll-smooth'>
        <div className='w-[60%]'>
          <h1>Effective Nov 10, 2025</h1>
          <p className='flex-0 cursor-pointer hover:underline font-semibold text-(--subheader-two)'><a href=''>view printable version</a></p>
          <br/>
          Because the Terms and Conditions contain legal obligations, please read them carefully.
          <br/><br/><br/>
          <h2 id='first-tac'>Your Agreement</h2>
          <br/>
          By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.
          <br/><br/>
          PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.
          <br/><br/>
          <h2 id='second-tac'>Privacy</h2>
          <br/>
          Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.
          <br/><br/>
          <h2 id='third-tac'>Linked Sites</h2>
          <br/>
          This Site may contain links to other independent third-party Web sites ("Linked Sites”). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.
          <br/><br/>
          <h2 id='fourth-tac'>Forward Looking Statements</h2>
          <br/>
          All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing. We have no duty or policy to update any information or statements contained on this site and, therefore, such information or statements should not be relied upon as being current as of the date you access this site.
          <br/><br/>
          <h2 id='fifth-tac'>Disclaimer of Warranties and Limitation of Liability</h2>
          <br/>
          A. THIS SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS. WE DOES NOT WARRANT THE ACCURACY OR COMPLETENESS OF THE MATERIALS OR THE RELIABILITY OF ANY ADVICE, OPINION, STATEMENT OR OTHER INFORMATION DISPLAYED OR DISTRIBUTED THROUGH THE SITE. YOU EXPRESSLY UNDERSTAND AND AGREE THAT: (i) YOUR USE OF THE SITE, INCLUDING ANY RELIANCE ON ANY SUCH OPINION, ADVICE, STATEMENT, MEMORANDUM, OR INFORMATION CONTAINED HEREIN, SHALL BE AT YOUR SOLE RISK; (ii) THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS; (iii) EXCEPT AS EXPRESSLY PROVIDED HEREIN WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, WORKMANLIKE EFFORT, TITLE AND NON-INFRINGEMENT; (iv) WE MAKE NO WARRANTY WITH RESPECT TO THE RESULTS THAT MAY BE OBTAINED FROM THIS SITE, THE PRODUCTS OR SERVICES ADVERTISED OR OFFERED OR MERCHANTS INVOLVED; (v) ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SITE IS DONE AT YOUR OWN DISCRETION AND RISK; and (vi) YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR FOR ANY LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.
          <br/><br/>
          B. YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, ANY OF OUR SITES OR MATERIALS OR FUNCTIONS ON ANY SUCH SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.
          <br/><br/>
          <h2 id='sixth-tac'>Exclusions and Limitations</h2>
          <br/><br/>
          SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN SUCH JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
          <br/><br/>
          <h2 id='seventh-tac'>Our Proprietary Rights</h2>
          <br/>
          This Site and all its Contents are intended solely for personal, non-commercial use. Except as expressly provided, nothing within the Site shall be construed as conferring any license under our or any third party's intellectual property rights, whether by estoppel, implication, waiver, or otherwise. Without limiting the generality of the foregoing, you acknowledge and agree that all content available through and used to operate the Site and its services is protected by copyright, trademark, patent, or other proprietary rights. You agree not to: (a) modify, alter, or deface any of the trademarks, service marks, trade dress (collectively "Trademarks") or other intellectual property made available by us in connection with the Site; (b) hold yourself out as in any way sponsored by, affiliated with, or endorsed by us, or any of our affiliates or service providers; (c) use any of the Trademarks or other content accessible through the Site for any purpose other than the purpose for which we have made it available to you; (d) defame or disparage us, our Trademarks, or any aspect of the Site; and (e) adapt, translate, modify, decompile, disassemble, or reverse engineer the Site or any software or programs used in connection with it or its products and services.
          The framing, mirroring, scraping or data mining of the Site or any of its content in any form and by any method is expressly prohibited.
          <br/><br/>
          <h2 id='eight-tac'>Indemnity</h2>
          <br/>
          By using the Site web sites you agree to indemnify us and affiliated entities (collectively "Indemnities") and hold them harmless from any and all claims and expenses, including (without limitation) attorney's fees, arising from your use of the Site web sites, your use of the Products and Services, or your submission of ideas and/or related materials to us or from any person's use of any ID, membership or password you maintain with any portion of the Site, regardless of whether such use is authorized by you.
          <br/><br/>
          <h2 id='ninth-tac'>Copyright and Trademark Notice</h2>
          <br/>
          Except our generated dummy copy, which is free to use for private and commercial use, all other text is copyrighted. generator.lorem-ipsum.info © 2013, all rights reserved
          <br/><br/>
          <h2 id='tenth-tac'>Intellectual Property Infringement Claims</h2>
          <br/>
          It is our policy to respond expeditiously to claims of intellectual property infringement. We will promptly process and investigate notices of alleged infringement and will take appropriate actions under the Digital Millennium Copyright Act ("DMCA") and other applicable intellectual property laws. Notices of claimed infringement should be directed to:
          <br/>
        </div>
      </div>
    </section>
  </div>
  </>
}
