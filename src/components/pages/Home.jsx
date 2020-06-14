import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Welcome from '../partials/Welcome';
import Projects from '../partials/Projects';
import About from '../partials/About';
import Tower from '../images/tower.svg';

const Home = () => {
    return (
        <div className="outer-wrapper">
            <Header />
            <div className="wrapper" id="page-wrap">
                <Welcome />
                <main>
                    <div class="parallax"></div>
                    <Projects/>
                    <About />
                    <article className="contact" id="contact">
                        <div className="contact-content-wrapper">
                            <div className="partial-title"><img className='icons' src={Tower} alt="tower"/><h2>Contact</h2></div>
                            <p>Feel free to contact me for anything! Be it small projects (brochure sites, advertisment sites), or large complexed sites with teams, I'm always up for a challange.</p>
                            <a href="mailto:bbuyer02@gmail.com" className="button-link" >Let's do this together!</a>
                        </div>
                        <svg className="contact-coa" width="186" height="186" viewBox="0 0 186 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.0338 8.37V107.308C22.0338 146.439 53.5108 177.916 92.6423 177.916C131.774 177.916 163.251 146.439 163.251 107.308V8.37H22.0338Z" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M98.3654 8.65616V177.201C98.58 177.201 98.7946 177.272 98.9377 177.344C99.0092 177.272 99.0808 177.272 99.2238 177.201C100.297 176.843 101.513 176.843 102.586 176.7C104.017 176.557 105.376 176.128 106.807 175.77C108.595 175.412 110.598 174.625 112.53 174.482V8.65616H98.3654Z" stroke="#4F4F4F" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M124.62 9.08539V169.618C125.55 168.831 126.766 168.545 127.768 167.901C128.912 167.114 130.128 166.399 131.488 166.041C132.203 165.325 132.918 164.682 133.705 164.109C134.135 163.823 134.635 163.609 135.065 163.394C135.637 162.965 136.281 162.679 136.925 162.321C137.139 162.106 137.425 161.963 137.64 161.749C137.998 161.391 138.355 160.962 138.713 160.604V9.08539H124.62Z" stroke="#4F4F4F" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M149.158 8.37V149.658C158.028 137.855 163.251 123.189 163.251 107.308V8.37H149.158Z" stroke="#4F4F4F" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22.32 8.65616V107.308C22.32 146.296 53.6538 177.63 92.6423 177.63C131.631 177.63 162.965 146.296 162.965 107.308V8.65616H22.32Z" stroke="#4F4F4F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M46.5 94.7885C46.5 95.2177 46.7862 103.659 53.2962 103.659C60.0208 103.659 60.0923 112.53 60.0923 112.53" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M73.8277 94.7885C73.8277 94.7885 73.8277 94.86 73.8277 94.9315C73.6131 96.0761 72.0392 103.659 67.0315 103.659C61.5946 103.659 60.2354 112.53 60.2354 112.53" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M73.8277 94.9315C74.0423 95.0031 82.3408 97.4354 84.3439 91.14C86.4185 84.7731 94.86 87.3485 94.86 87.3485" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M82.1261 68.8915C82.1261 68.8915 82.1977 68.8915 82.1261 68.8915C82.8415 69.2492 90.0669 73.1838 88.4931 78.12C86.8477 83.2708 94.86 87.3485 94.86 87.3485" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M81.6969 46.4285C81.6254 46.5715 76.6892 53.7254 82.0546 57.5885C87.1338 61.2369 82.77 68.1046 82.2692 68.8915C82.2692 68.9631 82.1977 68.9631 82.1977 68.9631" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M60.2354 52.7954C60.2354 52.7954 66.6023 46.4285 70.9662 49.5762C75.33 52.7239 81.6254 46.4285 81.6969 46.3569" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M60.2354 52.9385C60.2354 52.9385 60.2354 52.9385 60.1639 52.8669C59.5915 52.08 54.5839 46.0708 49.5046 49.7192C44.1392 53.5823 38.9169 46.6431 38.7739 46.5" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M38.0585 68.8915C37.7008 68.1762 34.1954 60.7361 38.4162 57.7315C42.78 54.5838 38.8454 46.7146 38.7738 46.5715" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M38.0585 68.82C37.2 69.1062 29.76 72.0392 31.6915 78.0485C33.7662 84.4154 25.3246 87.2769 25.3246 87.2769" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M46.5 94.7885C46.3569 94.7885 37.6292 96.1477 35.9838 90.997C34.3385 85.8462 25.4677 87.2054 25.4677 87.2054" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M60.1638 76.0453V85.9892V86.0607V86.2038" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M60.1638 76.0453L69.8215 79.193" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M60.1638 76.0453L66.1015 67.89L66.1731 67.8184" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M60.1638 76.0453L54.2977 67.9615L54.2261 67.89V67.8184" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M60.1638 76.0453L50.5061 79.193" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M66.1015 67.89C66.1015 67.89 65.7438 64.5276 63.0969 64.5276C60.45 64.5276 60.1638 61.2369 60.1638 61.2369" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M54.2261 67.8899C54.2261 67.8899 54.2261 64.5992 57.1592 64.5992C60.0923 64.5992 60.0923 61.3084 60.0923 61.3084" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M54.2977 68.033C54.2977 68.033 51.0069 67.3177 50.1485 69.8215C49.3615 72.3254 46.1423 71.61 46.1423 71.61" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M50.6492 79.2646C50.6492 79.2646 50.5777 79.2646 50.5061 79.193C49.9338 78.9784 47.5731 77.9054 48.4315 75.4015C49.3615 72.6115 46.2138 71.5385 46.2138 71.5385" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M50.5777 79.1215C50.5777 79.1215 50.5777 79.1215 50.5062 79.1931C50.22 79.6938 49.0754 82.1977 51.0069 83.5569C53.0815 85.0592 51.5077 87.7777 51.4362 87.9207" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M60.0923 86.0607C60.0923 86.0607 58.1608 88.7077 55.7285 86.9907C53.3677 85.2738 51.5077 87.7777 51.3646 87.9207" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M60.1638 85.9892C60.3784 86.2753 62.5246 88.4215 64.5277 86.9192C66.6023 85.4169 68.6769 87.7776 68.82 87.8492" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M69.75 79.05C69.75 79.05 69.75 79.05 69.8215 79.1215C70.1792 79.6938 71.3954 81.9115 69.2492 83.4138C66.8884 85.1307 68.6769 87.7061 68.7484 87.8492" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M69.8215 79.1215C69.8931 79.0499 72.8977 77.6907 72.0392 75.2584C71.2523 72.7545 74.2569 71.4669 74.2569 71.4669" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M66.1015 67.89C66.1015 67.89 69.2492 66.8884 70.1792 69.6784C71.1092 72.4684 74.2569 71.4669 74.2569 71.4669" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M54.2262 68.0331L60.1638 76.0454" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M50.5777 79.1216L60.1639 76.0454" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M60.1638 85.9177V76.0454" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M69.75 79.1216L60.1638 76.0454" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M66.1015 67.89L60.1638 76.0454" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M61.2369 77.19L60.5931 76.6892L60.7361 77.5477L60.3069 76.8323L60.1638 77.6192L60.0208 76.8323L59.52 77.4762L59.7346 76.6892L59.0192 77.1185L59.52 76.4746L58.7331 76.6177L59.3769 76.1885L58.59 76.0454L59.3769 75.9023L58.7331 75.4016L59.52 75.6162L59.0908 74.9008L59.7346 75.4016L59.5915 74.6146L60.0208 75.2585L60.2354 74.4716L60.3785 75.2585L60.8077 74.6146L60.5931 75.4016L61.3084 74.9723L60.8077 75.6162L61.6661 75.4731L60.9508 75.9023L61.7377 76.1169L60.9508 76.1885L61.5946 76.6892L60.8077 76.4746L61.2369 77.19Z" fill="#4F4F4F"/>
                            <path d="M38.0585 68.8915L46.4285 71.61" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M60.1639 52.5092L60.0923 62.5246" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M82.4123 68.8915L73.7561 71.61" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M73.8277 94.7884L68.3192 87.1338" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M46.5 94.7884L51.4362 87.9208" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M60.5215 99.2954C60.5215 99.2954 59.1623 96.8631 55.4423 99.2954C51.7223 101.728 50.5062 99.2954 50.5062 99.2954L57.0877 91.3546C58.8046 89.28 61.9523 89.28 63.6692 91.2831L70.6085 99.2954C70.6085 99.2954 69.3923 101.728 65.6723 99.2954C61.9523 96.8631 60.5215 99.2954 60.5215 99.2954Z" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M60.0208 70.3939C60.0208 70.3939 60.3785 70.9662 61.2369 70.3939C62.0954 69.8215 62.3816 70.3939 62.3816 70.3939L60.8077 72.3254C60.3785 72.8261 59.6631 72.8261 59.2339 72.3254L57.5885 70.3939C57.5885 70.3939 57.8746 69.8215 58.7331 70.3939C59.5916 70.9662 60.0208 70.3939 60.0208 70.3939Z" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M54.5123 74.4715C54.5123 74.4715 55.1561 74.3284 54.87 73.3269C54.5838 72.3254 55.2277 72.1823 55.2277 72.1823L56.5869 74.2569C56.9446 74.8292 56.73 75.5446 56.0861 75.7592L53.7254 76.7607C53.7254 76.7607 53.2961 76.3315 54.0831 75.6161C54.9415 74.9723 54.5123 74.4715 54.5123 74.4715Z" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M56.73 80.9815C56.73 80.9815 56.8015 80.3377 55.7285 80.2661C54.6554 80.1946 54.7985 79.5507 54.7985 79.5507L57.1592 78.9069C57.8031 78.7638 58.3754 79.1931 58.4469 79.8369L58.6615 82.3407C58.6615 82.3407 58.0892 82.6269 57.7315 81.6254C57.3023 80.6954 56.73 80.9815 56.73 80.9815Z" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M63.5262 80.91C63.5262 80.91 62.9538 80.6239 62.5246 81.6254C62.1669 82.627 61.5946 82.3408 61.5946 82.3408L61.7377 79.9085C61.8092 79.2646 62.3815 78.8354 63.0254 78.9785L65.5292 79.5508C65.5292 79.5508 65.6723 80.1947 64.5992 80.2662C63.5262 80.3377 63.5262 80.91 63.5262 80.91Z" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M65.6008 74.4C65.6008 74.4 65.1715 74.9008 65.9585 75.5446C66.8169 76.1885 66.3162 76.6892 66.3162 76.6892L64.0269 75.7592C63.4546 75.5446 63.1685 74.8292 63.5262 74.2569L64.8138 72.1108C64.8138 72.1108 65.4577 72.1823 65.1715 73.2554C64.9569 74.2569 65.6008 74.4 65.6008 74.4Z" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M82.5554 82.9846C82.5554 82.9846 79.8369 83.5569 80.9815 87.8492C82.1262 92.1416 79.4792 92.5708 79.4792 92.5708L73.8992 83.8431C72.4685 81.6254 73.3985 78.6208 75.8308 77.5477L85.6315 73.47C85.6315 73.47 87.5631 75.33 84.1292 78.1915C80.6954 80.91 82.5554 82.9846 82.5554 82.9846Z" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M73.8277 56.9446C73.8277 56.9446 73.47 59.7346 77.9769 59.9492C82.4123 60.1639 81.9831 62.8823 81.9831 62.8823L71.9677 65.4577C69.3923 66.1015 66.8169 64.3131 66.6023 61.6662L65.7438 51.0785C65.7438 51.0785 68.1046 49.7908 69.75 54.0115C71.3954 58.2323 73.8277 56.9446 73.8277 56.9446Z" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M46.4285 57.2308C46.4285 57.2308 48.9323 58.3754 50.5777 54.2262C52.1515 50.0769 54.5839 51.2931 54.5839 51.2931L53.94 61.5946C53.7969 64.2415 51.2215 66.1731 48.6462 65.5292L38.3446 63.0969C38.3446 63.0969 37.9154 60.45 42.3508 60.1638C46.7861 59.8777 46.4285 57.2308 46.4285 57.2308Z" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M38.2016 83.4138C38.2016 83.4138 40.0616 81.3392 36.6277 78.5492C33.1939 75.7592 35.1254 73.8277 35.1254 73.8277L44.7116 77.6192C47.2154 78.6207 48.2169 81.5538 46.7862 83.8431L41.2777 92.9284C41.2777 92.9284 38.6308 92.5708 39.7754 88.2069C40.92 83.9146 38.2016 83.4138 38.2016 83.4138Z" stroke="#4F4F4F" strokeMiterlimit="10"/>
                            <path d="M60.33 52.7038C54.8874 48.1457 56.2481 49.5063 56.3161 47.5334C57.2005 47.6014 57.5407 47.8735 57.9489 48.4178C57.8128 47.1251 58.6292 46.717 60.1259 45.1523C61.6907 46.717 62.507 47.1251 62.3029 48.4178C62.7111 47.8735 63.0513 47.6014 63.9357 47.5334C64.412 49.9825 65.7726 48.6219 60.33 52.7038Z" stroke="#4F4F4F" strokeWidth="1.42649" strokeMiterlimit="5.5775"/>
                            <path d="M37.8113 68.6914C31.7565 72.5012 33.5253 71.6168 31.6884 70.9365C32.0286 70.1201 32.3688 69.8479 33.0491 69.6438C31.7565 69.3717 31.6204 68.4873 30.5999 66.5144C32.5729 65.5619 33.1851 64.8815 34.4097 65.4258C34.0015 64.8815 33.8655 64.4734 34.0696 63.5889C36.4507 63.9291 35.6343 62.2283 37.8113 68.6914Z" stroke="#4F4F4F" strokeWidth="1.42649" strokeMiterlimit="5.5775"/>
                            <path d="M46.3154 95.0199C48.0842 101.959 47.7441 99.9863 46.5195 101.551C45.8392 100.939 45.7031 100.531 45.7031 99.8502C45.0908 101.007 44.1384 100.871 42.0293 101.211C41.6892 99.0339 41.281 98.2174 42.1654 97.265C41.4851 97.4691 41.0769 97.4691 40.3285 96.9928C41.349 94.8838 39.4441 95.1559 46.3154 95.0199Z" stroke="#4F4F4F" strokeWidth="1.42649" strokeMiterlimit="5.5775"/>
                            <path d="M73.9365 95.156C81.0799 95.6322 79.107 95.3601 80.1955 96.9248C79.3791 97.401 78.9709 97.333 78.3586 97.197C79.2431 98.1494 78.8349 98.9657 78.4947 101.143C76.3177 100.803 75.4333 100.939 74.821 99.7821C74.821 100.462 74.6849 100.871 74.0046 101.483C72.2357 99.7821 71.9636 101.687 73.9365 95.156Z" stroke="#4F4F4F" strokeWidth="1.42649" strokeMiterlimit="5.5775"/>
                            <path d="M82.5766 68.8274C85.2299 62.2282 84.3455 63.9291 86.2504 63.3848C86.4545 64.2692 86.3184 64.6775 85.9102 65.2217C87.1348 64.6775 87.7471 65.2897 89.72 66.3102C88.6996 68.2832 88.5635 69.1676 87.2709 69.4397C87.9512 69.7118 88.2914 69.9159 88.6315 70.7323C86.4545 71.8889 88.1553 72.7733 82.5766 68.8274Z" stroke="#4F4F4F" strokeWidth="1.42649" strokeMiterlimit="5.5775"/>
                        </svg>
                    </article>
                </main>
            </div>
            <Footer />
        </div>
    )
};

export default Home;