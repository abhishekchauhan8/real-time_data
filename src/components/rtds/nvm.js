// <!DOCTYPE html>
// <head>
// 	<meta charset="utf-8">
// 	<title>Combis Smart City Solutions</title>

// 	<!-- swiper -->
// 	<link
// 		rel="stylesheet"
// 		href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
// 	/>
// 	<link id="style" href="https://combis.hr/virtual-city/css/style.css?v=1.2" rel="stylesheet" type="text/css">

// 	<link rel="preconnect" href="https://fonts.gstatic.com">
// 	<link rel="preconnect" href="https://fonts.googleapis.com">
// 	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// 	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Rubik:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

// 	<link rel="shortcut icon" href="https://combis.hr/virtual-city/img/icons/favicon.ico">

// 	<link rel="apple-touch-icon" sizes="144x144" href="https://combis.hr/virtual-city/img/favicon/apple-touch-icon.png">
// 	<link rel="icon" type="image/png" sizes="32x32" href="https://combis.hr/virtual-city/img/favicon/favicon-32x32.png">
// 	<link rel="icon" type="image/png" sizes="16x16" href="https://combis.hr/virtual-city/img/favicon/favicon-16x16.png">
// 	<link rel="manifest" href="https://combis.hr/virtual-city/img/favicon/site.webmanifest">
// 	<link rel="mask-icon" href="https://combis.hr/virtual-city/img/favicon/safari-pinned-tab.svg" color="#5bbad5">
// 	<meta name="msapplication-TileColor" content="#00aba9">
// 	<meta name="theme-color" content="#ffffff">

// 	<meta name="description" content="">
// 	<meta name="keywords" content="">
// 	<meta name="format-detection" content="telephone=no">
// 	<meta name="viewport" content="width=device-width, initial-scale=1">

// 	<!--[if lt IE 9]>
// 		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
// 	<![endif]-->
// 	<meta property="og:site_name" content="Combis Smart City Solutions">
// 	<meta property="og:title" content="Combis Smart City Solutions">
// 	<meta property="og:image" content="https://combis.hr/virtual-city/img/social/social.png">
// 	<meta property="og:description" content="Pametni gradovi su gradovi budu??nosti. Ve?? danas vi??e od 50% ukupne svjetske populacije ??ivi u gradovima, a taj ??e broj samo rasti. U kakvom biste gradu vi voljeli ??ivjeti?">

// 	<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>

// 	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

// 	<script type="text/javascript">
// 	    let base_url = 'https://combis.hr/virtual-city';
//     </script>

// 	<!-- three cdns -->
//     <script src="https://unpkg.com/three@0.132.2/build/three.min.js"></script>
//     <script src="https://unpkg.com/three@0.132.2/examples/js/controls/OrbitControls.js"></script>
//     <script src="https://unpkg.com/three@0.132.2/examples/js/loaders/RGBELoader.js"></script>
//     <script src="https://unpkg.com/three@0.132.2/examples/js/loaders/GLTFLoader.js"></script>
//     <script src="https://unpkg.com/three@0.132.2/examples/js/loaders/DRACOLoader.js"></script>
//     <script src="https://unpkg.com/three@0.132.2/examples/js/libs/dat.gui.min.js"></script>
//     <script src="https://unpkg.com/three@0.132.2/examples/js/libs/stats.min.js"></script>
//     <script src="https://unpkg.com/three@0.132.2/examples/js/renderers/CSS3DRenderer.js"></script>

// 	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
// 	<script src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"></script>

// 	<script defer src="https://combis.hr/virtual-city/js-preload/circle-progress.min.js"></script>
// 	<script defer src="https://combis.hr/virtual-city/js-preload/preloader.js"></script>
// 	<script defer src="https://combis.hr/virtual-city/js/script.js?v=1.1"></script>

// </head>

// <body class="page-en android-native nestodrugo">

// 	<!-- gallery -->
// 	<div class="gallery-wrap" data-method="galleryRotateControll galleryControll">
// 		<div class="gallery-inner">
// 			<img src="https://combis.hr/virtual-city/img/zurich.jpg" alt="galleryImage" class="gallery-image">

// 			<div class="close-button">
// 				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.828 10.828">
//     <g transform="translate(1.414 1.414)">
//         <line x1="8" y2="8" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
//         <line x2="8" y2="8" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>			</div>
// 		</div>
// 	</div>

// 	<!-- Header -->
// 	<header class="header" id="page-header"></header>
// 	<!-- /Header -->

// <div class="main home-page" id="main">

// 	<!-- preloader -->
// 	<div class="preloader-wrap" id="preloaderWrap">
// 		<div class="image-wrap">
// 			<p class="small-text">
// 				Loading... please wait
// 			</p>
// 			<img src="https://combis.hr/virtual-city/img/preloader.png" alt="preloader-image">

// 			<img class="piece-image piece1" src="https://combis.hr/virtual-city/img/preloader-piece1.png" alt="preloader-piece-image">
// 			<img class="piece-image piece2" src="https://combis.hr/virtual-city/img/preloader-piece2.png" alt="preloader-piece-image">
// 			<img class="piece-image piece3" src="https://combis.hr/virtual-city/img/preloader-piece3.png" alt="preloader-piece-image">
// 			<img class="piece-image piece4" src="https://combis.hr/virtual-city/img/preloader-piece4.png" alt="preloader-piece-image">

// 			<div class="inner-images">
// 				<img src="https://combis.hr/virtual-city/img/loader-inner1.png" alt="inner-image1">
// 				<img src="https://combis.hr/virtual-city/img/loader-inner2.png" alt="inner-image2">
// 				<img src="https://combis.hr/virtual-city/img/loader-inner3.png" alt="inner-image3">
// 			</div>

// 			<p class="text">
// 				Combis Smart City Solutions
// 			</p>

// 			<p class="counter">
// 				76
// 			</p>
// 		</div>

// 		<div class="loader-circle" id="loaderCircle"></div>
// 	</div>

//     <div class="intro-screen" data-method="introController">
//         <div class="intro-screen-inner">
//             <!-- <p class="intro-claim">
//                 be smart
//             </p> -->

//             <h1 class="intro-title">
//                 Combis Smart City Solutions
//             </h1>

//             <p class="intro-text">
//                 Smart cities are cities of the future. Already today, more than 50% of the total global population lives in urban settings, and the percentage will only keep getting bigger.
//                 <br>
//                 <br>
//                 What kind of city would you like to live in?
//                 <br>
//                 <br>
//                 Join us on a virtual tour of a smart city and discover all the ways technology can transform our day-to-day lives for the better...
//             </p>

//             <a href="#" class="button-1">
//                 <span>
//                     Let's see together
//                 </span>
//             </a>

//             <a href="https://combis.hr/virtual-city" class="lang-switch">
//                 Nastavi na Hrvatsku verziju
//             </a>

//         </div>
//     </div>

// 	<section class="canvas-wrap disabled" data-method="initThree" data-en="true">
//         <div class="canvas-inner"></div>
//     </section>

//     <!-- portrait / smaller screens slider -->
//     <div class="smaller-screens-slider-wrap" data-method="smallerScreenSwiperInit">
//     	<a href="#" class="close-button">
//     		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.828 10.828">
//     <g transform="translate(1.414 1.414)">
//         <line x1="8" y2="8" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
//         <line x2="8" y2="8" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>    	</a>
//     	<p class="bg-text">
//     		Discover
//     	</p>

//     	<div class="slider-wrap">
//     		<div class="swiper">
//     			<div class="swiper-wrapper">
//     				<div class="swiper-slide">
//     					<div class="slide-card" data-slide-index="0">
// 	    					<div class="image-wrap">
// 	    						<img src="https://combis.hr/virtual-city/img/new-mobile/1-onecity.png" alt="slide-image2">
// 	    					</div>

// 	    					<p class="title">
// 	    						OneCity App
// 	    					</p>

// 	    					<p class="text">
//                                 The best the city has to offer
// 	    					</p>
//     					</div>
//     				</div>

//     				<div class="swiper-slide">
//     					<div class="slide-card" data-slide-index="1">
// 	    					<div class="image-wrap">
// 	    						<img src="https://combis.hr/virtual-city/img/new-mobile/2-zeleni-grad.png" alt="slide-image1">
// 	    					</div>

// 	    					<p class="title">
//                                 Green city
// 	    					</p>

// 	    					<p class="text">
//                                 Green city - Smart city
// 	    					</p>
//     					</div>
//     				</div>

//                     <div class="swiper-slide">
//     					<div class="slide-card" data-slide-index="2">
// 	    					<div class="image-wrap">
// 	    						<img src="https://combis.hr/virtual-city/img/new-mobile/3-etransport.png" alt="slide-image1">
// 	    					</div>

// 	    					<p class="title">
//                                 Smart transport and mobility
// 	    					</p>

// 	    					<p class="text">
//                                 E-transport
// 	    					</p>
//     					</div>
//     				</div>

//     				<div class="swiper-slide">
//     					<div class="slide-card" data-slide-index="3">
// 	    					<div class="image-wrap">
// 	    						<img src="https://combis.hr/virtual-city/img/new-mobile/4-pametni-parking.png" alt="slide-image2">
// 	    					</div>

// 	    					<p class="title">
//                                 Smart parking
// 	    					</p>

// 	    					<p class="text">
//                                 Imagine no longer having to endlessly drive around the city looking for a free parking space
// 	    					</p>
//     					</div>
//     				</div>

//     				<div class="swiper-slide">
//     					<div class="slide-card" data-slide-index="4">
// 	    					<div class="image-wrap">
// 	    						<img src="https://combis.hr/virtual-city/img/new-mobile/5-financijske-institucije.png" alt="slide-image2">
// 	    					</div>

// 	    					<p class="title">
//                                 Smart finance
// 	    					</p>

// 	    					<p class="text">
//                                 Financial institutions
// 	    					</p>
//     					</div>
//     				</div>

//     				<div class="swiper-slide">
//     					<div class="slide-card" data-slide-index="5">
// 	    					<div class="image-wrap">
// 	    						<img src="https://combis.hr/virtual-city/img/new-mobile/6-pametno-ugostiteljstvo.png" alt="slide-image1">
// 	    					</div>

// 	    					<p class="title">
//                                 Smart hospitality industry
// 	    					</p>

// 	    					<p class="text">
//                                 There are seemingly no limits to what technology can do, but it???s all for nothing without the human factor.
// 	    					</p>
//     					</div>
//     				</div>

//                     <div class="swiper-slide">
//     					<div class="slide-card" data-slide-index="6">
// 	    					<div class="image-wrap">
// 	    						<img src="https://combis.hr/virtual-city/img/new-mobile/7-pametna-industrija.png" alt="slide-image2">
// 	    					</div>

// 	    					<p class="title">
//                                 Smart industry
// 	    					</p>

// 	    					<p class="text">
//                                 How cities can save energy and be more transparent with their citizens
// 	    					</p>
//     					</div>
//     				</div>

//                     <div class="swiper-slide">
//     					<div class="slide-card" data-slide-index="7">
// 	    					<div class="image-wrap">
// 	    						<img src="https://combis.hr/virtual-city/img/new-mobile/8-rimac.png" alt="slide-image1">
// 	    					</div>

// 	    					<p class="title">
//                                 Rimac Automobili
// 	    					</p>

// 	    					<p class="text">
//                                 Smart solutions for smart manufacturing
// 	    					</p>
//     					</div>
//     				</div>

//                     <div class="swiper-slide">
//     					<div class="slide-card" data-slide-index="8">
// 	    					<div class="image-wrap">
// 	    						<img src="https://combis.hr/virtual-city/img/new-mobile/9-digital-signage.png" alt="slide-image2">
// 	    					</div>

// 	    					<p class="title">
//                                 Digital Signage
// 	    					</p>

// 	    					<p class="text">
//                                 More than advertising space
// 	    					</p>
//     					</div>
//     				</div>
//     			</div>
//     		</div>
//     	</div>

//     	<div class="button-navigation">
//             <a href="#" class="button prev">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>            </a>
//             <p class="pagination">
//                 <span>03</span>
//                 /
//                 <small>09</small>
//             </p>
//             <a href="#" class="button next">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>            </a>
//         </div>
//     </div>

//     <!-- content part -->
//     <div class="content-wrap">
//     	<a href="#" class="close-button">
//     		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.828 10.828">
//     <g transform="translate(1.414 1.414)">
//         <line x1="8" y2="8" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
//         <line x2="8" y2="8" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>    	</a>

//         <div class="content-wrap-inner">
//             <div class="content">
//                 <div class="screen-info-wrap">
//                     <p class="big-number">
//                         <span>
//                             01
//                         </span>
//                     </p>

//                     <div class="text-line">
//                         <span>Be smart</span>
//                         <i></i>
//                     </div>

//                     <p class="screen-title">
//                         <span>
//                             OneCity App
//                         </span>
//                     </p>
//                 </div>

//                 <div class="white-wrap first-white-wrap no-description">
//                     <div class="screen-number">
//                         <span>01</span>
//                     </div>

//                     <div class="button-navigation">
//                         <a href="#" class="button prev">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                         <p class="pagination">
//                             <span>03</span>
//                             /
//                             <small>09</small>
//                         </p>
//                         <a href="#" class="button next">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                     </div>

//                     <p class="small-screen-title">
//                         THE BEST THE CITY HAS TO OFFER
//                     </p>
//                 </div>

//                 <div class="grey-wrap video-static">

//                     <div class="content-inner">
//                         <h3 class="main-title">
//                             Digital City Offices
//                         </h3>

//                         <hr>

//                         <p class="text">
//                             Imagine 100% digital city offices. With the help of the OneCity App, which lets citizens stay connected with city services, citizens can receive information and communicate with the city. The app can also serve as an additional payment channel for utilities and other bills. The OneCity App???s central system also supports the city with big data analytics and AI tools to aid decision-making.
//                         </p>

//                         <a href="#" class="info-box">
//                             <div class="info-box-inner">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 36">
//   <path d="M1.406,29.829H2.813V19.671H1.406A1.406,1.406,0,0,1,0,18.265V14.906A1.406,1.406,0,0,1,1.406,13.5H9.281a1.406,1.406,0,0,1,1.406,1.406V29.829h1.406A1.406,1.406,0,0,1,13.5,31.235v3.359A1.406,1.406,0,0,1,12.094,36H1.406A1.406,1.406,0,0,1,0,34.594V31.235A1.406,1.406,0,0,1,1.406,29.829ZM6.75,0a5.063,5.063,0,1,0,5.063,5.063A5.062,5.062,0,0,0,6.75,0Z"/>
// </svg>                            </div>
//                             <div class="info-box-inner">
//                                 <p>
//                                     What impact could this have on our day-to-day lives?
//                                 </p>
//                             </div>
//                         </a>

//                         <p class="text">
//                             Imagine having an overview of all your requests and open proceedings directed at the city administration in one place... We know how tedious it can be when you have to complete multiple forms across various city offices around the city. Now imagine if you could do all of those things from the comfort of your own home, including kindergarten applications and school admissions...
//                         </p>

//                         <p class="text">
//                             Would you like to know which services are available in any of the companies managed by the city, including conditions and rates? Are you tired of all the convoluted bills you???ve been getting in the post, and you just want clear info here and now?
//                             <br>
//                             <br>
//                             Is there any reason why you should pore over bills coming due? A service that brings them together in one place will help you gain better insight into all of your utility and energy bills.
//                         </p>

//                         <div class="line-title-wrap">
//                             <hr>

//                             <h4 class="secondary-title title">
//                                 Instead of looking for information, let the information find you...
//                             </h4>

//                             <hr>
//                         </div>

//                         <p class="text">
//                             Be the first to know if there are any emergency situations in the city. Notifications on earthquakes, flooding, epidemics, road closures, and traffic re-routing in your city. You???re driving in your car and debating which road to take? Street closure and traffic re-routing notifications will make that decision much easier.
//                         </p>

//                         <div class="slider-outer" data-method="swiperInit">
//                             <div class="slider-wrap">
//                                 <div class="swiper">
//                                     <div class="swiper-wrapper">
//                                         <div class="swiper-slide" data-method="cardRotateControll">
//                                             <div class="slide-card">
//                                                 <img src="https://combis.hr/virtual-city/img/architecture-g35024b4fc_1280.jpg" alt="architecture" class="gallery-trigger thumbnail" data-src="https://combis.hr/virtual-city/img/architecture-g35024b4fc_1280.jpg">
//                                             </div>
//                                         </div>

//                                         <div class="swiper-slide" data-method="cardRotateControll">
//                                             <div class="slide-card">
//                                                 <img src="https://combis.hr/virtual-city/img/new/female-student-using-phone-sitting-under-tree-in-2021-08-28-20-06-13-utc.JPG" alt="woman" class="gallery-trigger thumbnail" data-src="https://combis.hr/virtual-city/img/new/female-student-using-phone-sitting-under-tree-in-2021-08-28-20-06-13-utc.JPG">
//                                             </div>
//                                         </div>

//                                         <div class="swiper-slide" data-method="cardRotateControll">
//                                             <div class="slide-card">
//                                                 <img src="https://combis.hr/virtual-city/img/three-g3d0f6648d_1280.jpg" alt="three" class="gallery-trigger thumbnail" data-src="https://combis.hr/virtual-city/img/three-g3d0f6648d_1280.jpg">
//                                             </div>
//                                         </div>

//                                         <div class="swiper-slide" data-method="cardRotateControll">
//                                             <div class="slide-card">
//                                                 <img src="https://combis.hr/virtual-city/img/new/andrey-kirov-i7qsJX0Ym44-unsplash.jpg" alt="architecture" class="gallery-trigger thumbnail" data-src="https://combis.hr/virtual-city/img/new/andrey-kirov-i7qsJX0Ym44-unsplash.jpg">
//                                             </div>
//                                         </div>

//                                         <div class="swiper-slide" data-method="cardRotateControll">
//                                             <div class="slide-card">
//                                                 <img src="https://combis.hr/virtual-city/img/new/city-park-lawn-with-modern-building-in-sunset-2022-02-08-22-37-26-utc.jpg" alt="sample" class="gallery-trigger thumbnail" data-src="https://combis.hr/virtual-city/img/new/city-park-lawn-with-modern-building-in-sunset-2022-02-08-22-37-26-utc.jpg">
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <a href="#" class="slider-button prev">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                             <a href="#" class="slider-button next">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                         </div>

//                     </div>
//                 </div>

//                 <div class="white-wrap contact-section-wrap">
//                     <div class="content-inner">
//                         <hr>

//                         <h4 class="secondary-title margin-2 title">
//                             Which of the services offered by municipally owned companies are available in your area? What about the neighbouring areas?
//                         </h4>

//                         <p class="text">
//                             You are interested in public transport options between two locations in the city, you want to see the routes and schedules, or even better, find out exactly when the next bus is leaving? A smart city allows you to find out all this and more ??? are there any traffic jams, road works, or traffic disruptions on certain lines?
//                             <br>
//                             <br>
//                             Would you like to know which parking lot has available parking spaces and which one is the closest and least expensive? We know the answer is yes!
//                             <br>
//                             <br>
//                         </p>
//                             <h4 class="secondary-title margin-2 title">
//                                 Information by location and service
//                             </h4>
//                         <p class="text">
//                             There is no need to research, ask around, look for events that still may have a few tickets left, or try to sniff out free admissions! You can have the latest information on all the events that are currently happening in your city, as they are happening, in the palm of your hand, and you decide whether you???d like to sort them by location or the activity/event that you are interested in...
//                             <br>
//                             <br>
//                             What emergency services are available to you in the city? Having access to an overview of emergency services according to different fields (disease control, children???s emergency department, etc.) will take at least some weight off your shoulders.
//                             <br>
//                             <br>
//                         </p>

//                         <h4 class="secondary-title margin-2 title">
//                             First time visiting the city?
//                         </h4>

//                         <p class="text">
//                             You can find hotels, restaurants, ice cream parlours, nightclubs, concert venues, theatres, and more right at your fingertips, as easy as one-two-three. Take advantage of the full potential of a smart city.
//                         </p>

//                         <hr>
//                     </div>
//                 </div>

//                 <div class="grey-wrap contact-numbers no-table">
//                     <div class="bottom-scene-slide-navigation">
//                         <div class="screen-number">
//                             <span>01</span>
//                         </div>

//                         <div class="button-navigation">
//                             <a href="#" class="button prev">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                             <p class="pagination">
//                                 <span>03</span>
//                                 /
//                                 <small>09</small>
//                             </p>
//                             <a href="#" class="button next">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                         </div>

//                         <p class="small-screen-title">
//                             THE BEST THE CITY HAS TO OFFER
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div class="content-wrap-inner">
//             <div class="content">
//                 <div class="screen-info-wrap">
//                     <p class="big-number">
//                         <span>
//                             02
//                         </span>
//                     </p>

//                     <div class="text-line">
//                         <span>Be smart</span>
//                         <i></i>
//                     </div>

//                     <p class="screen-title">
//                         <span>
//                             Green city
//                         </span>
//                     </p>
//                 </div>

//                 <div class="white-wrap first-white-wrap">
//                     <div class="screen-number">
//                         <span>02</span>
//                     </div>

//                     <div class="button-navigation">
//                         <a href="#" class="button prev">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                         <p class="pagination">
//                             <span>03</span>
//                             /
//                             <small>09</small>
//                         </p>
//                         <a href="#" class="button next">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                     </div>

//                     <p class="small-screen-title">
//                         GREEN CITY
//                     </p>

//                     <div class="content-inner">
//                         <h5 class="short-description">
//                             Imagine living in a city with a negligible environmental footprint, where the air is clean, energy consumption optimised, municipal waste intelligently organised... all of that is possible... in a smart city.
//                         </h5>
//                     </div>
//                 </div>

//                 <div class="grey-wrap">
//                     <div class="video-wrap" data-method="cardRotateControll">
//                         <div class="video-inner">
//                             <div
//                                 class="video-thumbnail thumbnail gallery-trigger"
//                                 style="background-image: url('https://combis.hr/virtual-city/img/new/beautiful-modern-cityscape-in-sunset-2021-09-01-21-41-34-utc.jpg');"
//                                 data-src="https://combis.hr/virtual-city/img/new/beautiful-modern-cityscape-in-sunset-2021-09-01-21-41-34-utc.jpg">
//                             </div>

//                             <span class="shine"></span>
//                         </div>
//                     </div>

//                     <div class="content-inner">
//                         <h3 class="main-title">
//                             Clean energy
//                         </h3>

//                         <hr>

//                         <h4 class="secondary-title">
//                             Imagine a digital control panel which can help you find all the information on each section of the city???s energy infrastructure.
//                         </h4>

//                         <p class="text cf">
//                             Meter monitoring systems for remote reading serve for potential power grid deviations, but they can also be used to provide users with transparent data (electric energy meter readings). Furthermore, since the system can collect data from various sources and perform a real-time energy efficiency analysis, it also makes it easy to calculate potential losses, energy dissipation, and emissions of air pollutants.

//                             <br><br>
//                             <a class="button-1 thin f-right" href="https://www.combis.hr/iot/" target="_blank">
//                                 <span>LEARN MORE!</span>
//                             </a>
//                         </p>

//                         <a href="#" class="info-box">
//                             <div class="info-box-inner">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 36">
//   <path d="M1.406,29.829H2.813V19.671H1.406A1.406,1.406,0,0,1,0,18.265V14.906A1.406,1.406,0,0,1,1.406,13.5H9.281a1.406,1.406,0,0,1,1.406,1.406V29.829h1.406A1.406,1.406,0,0,1,13.5,31.235v3.359A1.406,1.406,0,0,1,12.094,36H1.406A1.406,1.406,0,0,1,0,34.594V31.235A1.406,1.406,0,0,1,1.406,29.829ZM6.75,0a5.063,5.063,0,1,0,5.063,5.063A5.062,5.062,0,0,0,6.75,0Z"/>
// </svg>                            </div>
//                             <div class="info-box-inner">
//                                 <p>
//                                     Smart waste management
//                                 </p>
//                             </div>
//                         </a>

//                         <p class="text cf">
//                             In many cities, smart waste management is a major sustainability issue. Imagine smart waste containers that make it possible to charge for services based on volume, mass, or the number of times you dispose of waste. The sensors send real-time data on the remaining free capacity of waste containers directly to the system, which uses the data to calculate the best route for the trucks, saving time and fuel.

//                             <br><br>
//                             <a class="button-1 thin f-right" href="https://www.hrvatskitelekom.hr/poslovni/ict/evidencija-odvoza-komunalnog-otpada" target="_blank">
//                                 <span>LEARN MORE!</span>
//                             </a>
//                         </p>

//                         <h4 class="secondary-title margin-3">
//                             Clean air
//                         </h4>

//                         <p class="text">
//                             Clean air is a luxury that many large cities sadly no longer enjoy, which is why monitoring air quality and planning city management accordingly is extremely important. The air quality monitoring functionality makes it easy to receive information on air quality. The sensors that measure key parameters in the air are easy to set up, after which they transfer data to the platform where the data is analysed and displayed. Information on air quality can be used to make decisions on reducing traffic congestion or on potential malfunctions, issuing warnings to citizens, and the like.
//                         </p>

//                         <div class="slider-outer" data-method="swiperInit">
//                             <div class="slider-wrap">
//                                 <div class="swiper">
//                                     <div class="swiper-wrapper">
//                                         <div class="swiper-slide" data-method="cardRotateControll">
//                                             <div class="slide-card">
//                                                 <img src="https://combis.hr/virtual-city/img/manhattan-g293958d03_1920.jpg" alt="manhattan" class="gallery-trigger thumbnail" data-src="https://combis.hr/virtual-city/img/manhattan-g293958d03_1920.jpg">
//                                             </div>
//                                         </div>

//                                         <div class="swiper-slide" data-method="cardRotateControll">
//                                             <div class="slide-card">
//                                                 <img src="https://combis.hr/virtual-city/img/shenzhen-g92d14d78c_1280.jpg" alt="shenzhen" class="gallery-trigger thumbnail" data-src="https://combis.hr/virtual-city/img/shenzhen-g92d14d78c_1280.jpg">
//                                             </div>
//                                         </div>

//                                         <div class="swiper-slide" data-method="cardRotateControll">
//                                             <div class="slide-card">
//                                                 <img src="https://combis.hr/virtual-city/img/aerial-g2472f198c_1280.jpg" alt="aerial" class="gallery-trigger thumbnail" data-src="https://combis.hr/virtual-city/img/aerial-g2472f198c_1280.jpg">
//                                             </div>
//                                         </div>

//                                         <div class="swiper-slide" data-method="cardRotateControll">
//                                             <div class="slide-card">
//                                                 <img src="https://combis.hr/virtual-city/img/panorama-g129edfb65_1280.jpg" alt="panorama" class="gallery-trigger thumbnail" data-src="https://combis.hr/virtual-city/img/panorama-g129edfb65_1280.jpg">
//                                             </div>
//                                         </div>

//                                         <div class="swiper-slide" data-method="cardRotateControll">
//                                             <div class="slide-card">
//                                                 <img src="https://combis.hr/virtual-city/img/stockholm-gd751649bd_1280.jpg" alt="stockholm" class="gallery-trigger thumbnail" data-src="https://combis.hr/virtual-city/img/stockholm-gd751649bd_1280.jpg">
//                                             </div>
//                                         </div>

//                                         <div class="swiper-slide" data-method="cardRotateControll">
//                                             <div class="slide-card">
//                                                 <img src="https://combis.hr/virtual-city/img/manhattan-g293958d03_1920.jpg" alt="manhattan" class="gallery-trigger thumbnail" data-src="https://combis.hr/virtual-city/img/manhattan-g293958d03_1920.jpg">
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <a href="#" class="slider-button prev">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                             <a href="#" class="slider-button next">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                         </div>

//                     </div>
//                 </div>

//                 <div class="white-wrap contact-section-wrap">
//                     <div class="content-inner">
//                         <hr>

//                         <h4 class="secondary-title margin-2 title">
//                             Think green ??? win-win!
//                         </h4>

//                         <p class="text">
//                             The transition to renewable energy sources, such as photovoltaic systems, allows the use of green energy in production processes, thereby significantly reducing emissions. In addition to cutting expenses and becoming energy-independent, companies also contribute to a sustainable and cleaner environment. Win-win!
//                         </p>

//                         <div class="media-description-wrap">
//                             <div class="video-wrap" data-method="cardRotateControll">
//                                 <div class="video-inner">
//                                     <div
//                                         class="video-thumbnail thumbnail gallery-trigger"
//                                         style="background-image: url('https://combis.hr/virtual-city/img/solar-energy-g08581f4d7_1280.jpg');"
//                                         data-src="https://combis.hr/virtual-city/img/solar-energy-g08581f4d7_1280.jpg">
//                                     </div>

//                                     <span class="shine"></span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="grey-wrap contact-numbers no-table">
//                     <div class="bottom-scene-slide-navigation">
//                         <div class="screen-number">
//                             <span>02</span>
//                         </div>

//                         <div class="button-navigation">
//                             <a href="#" class="button prev">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                             <p class="pagination">
//                                 <span>03</span>
//                                 /
//                                 <small>09</small>
//                             </p>
//                             <a href="#" class="button next">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                         </div>

//                         <p class="small-screen-title">
//                             GREEN CITY
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div class="content-wrap-inner">
//             <div class="content">
//                 <div class="screen-info-wrap">
//                     <p class="big-number">
//                         <span>
//                             03
//                         </span>
//                     </p>

//                     <div class="text-line">
//                         <span>Be smart</span>
//                         <i></i>
//                     </div>

//                     <p class="screen-title">
//                         <span>
//                             Smart transport and mobility
//                         </span>
//                     </p>
//                 </div>

//                 <div class="white-wrap first-white-wrap">
//                     <div class="screen-number">
//                         <span>03</span>
//                     </div>

//                     <div class="button-navigation">
//                         <a href="#" class="button prev">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                         <p class="pagination">
//                             <span>03</span>
//                             /
//                             <small>09</small>
//                         </p>
//                         <a href="#" class="button next">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                     </div>

//                     <p class="small-screen-title">
//                         E-TRANSPORT
//                     </p>

//                     <div class="content-inner">
//                         <h5 class="short-description">
//                             As cities grow, distances between point A and point B keep growing too, as does the need for green city zones. How can we reconcile these conflicting demands? By being smart about it.
//                         </h5>
//                     </div>
//                 </div>

//                 <div class="grey-wrap video-static">
//                     <div class="video-wrap" data-method="cardRotateControll">
//                         <div class="video-inner">
//                             <div
//                                 class="video-thumbnail thumbnail gallery-trigger"
//                                 style="background-image: url('https://combis.hr/virtual-city/img/amsterdam-g89928f827_1280.jpg');"
//                                 data-src="https://combis.hr/virtual-city/img/amsterdam-g89928f827_1280.jpg">
//                             </div>

//                             <span class="shine"></span>
//                         </div>
//                     </div>

//                     <div class="content-inner">
//                         <h3 class="main-title">
//                             E-Transport
//                         </h3>

//                         <hr>

//                         <p class="text">
//                             Even though the number of motor vehicles is not on the decline, there is a positive trend in many cities of turning traffic zones into green areas. Picture a city with clean air and fewer traffic jams... we???re sure that you???re also picturing many more smiling faces. The system of public city bicycles was also initiated to bring us a step closer to living in these types of cities.
//                             <br>
//                             An increasing number of young people support practical transport solutions and are not overly concerned with owning a car, bicycle, or scooter. What matters to them is getting from A to B as quickly and as easily as possible. If that also includes minimum environmental impact ??? even better! The service offered by the public city bicycle system enables more accessible public transport for both citizens and visitors and provides companies with an additional source of income. Another win-win!
//                         </p>

//                         <a href="#" class="info-box">
//                             <div class="info-box-inner">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 36">
//   <path d="M1.406,29.829H2.813V19.671H1.406A1.406,1.406,0,0,1,0,18.265V14.906A1.406,1.406,0,0,1,1.406,13.5H9.281a1.406,1.406,0,0,1,1.406,1.406V29.829h1.406A1.406,1.406,0,0,1,13.5,31.235v3.359A1.406,1.406,0,0,1,12.094,36H1.406A1.406,1.406,0,0,1,0,34.594V31.235A1.406,1.406,0,0,1,1.406,29.829ZM6.75,0a5.063,5.063,0,1,0,5.063,5.063A5.062,5.062,0,0,0,6.75,0Z"/>
// </svg>                            </div>
//                             <div class="info-box-inner">
//                                 <p>
//                                     Electric vehicles
//                                 </p>
//                             </div>
//                         </a>

//                         <p class="text cf">
//                             The system includes electric bicycles, bicycle parking racks / charging docks, and a program that manages the bicycle rental system. Users can pay with credit cards to hire bikes, and a mobile app is also available to end users. All bicycles are equipped with a GPS tracking system which reduces the possibility of theft. Around the world, electric bikes are getting more and more popular. Become a part of cutting-edge global trends and introduce new services.
//                         </p>
//                     </div>
//                 </div>

//                 <div class="grey-wrap contact-numbers">
//                     <div class="bottom-scene-slide-navigation">
//                         <div class="screen-number">
//                             <span>03</span>
//                         </div>

//                         <div class="button-navigation">
//                             <a href="#" class="button prev">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                             <p class="pagination">
//                                 <span>03</span>
//                                 /
//                                 <small>09</small>
//                             </p>
//                             <a href="#" class="button next">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                         </div>

//                         <p class="small-screen-title desktop-nobrake">
//                             E-TRANSPORT
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div class="content-wrap-inner">
//             <div class="content">
//                 <div class="screen-info-wrap">
//                     <p class="big-number">
//                         <span>
//                             04
//                         </span>
//                     </p>

//                     <div class="text-line">
//                         <span>Be smart</span>
//                         <i></i>
//                     </div>

//                     <p class="screen-title">
//                         <span>
//                             Smart parking
//                         </span>
//                     </p>
//                 </div>

//                 <div class="white-wrap first-white-wrap no-description">
//                     <div class="screen-number">
//                         <span>04</span>
//                     </div>

//                     <div class="button-navigation">
//                         <a href="#" class="button prev">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                         <p class="pagination">
//                             <span>03</span>
//                             /
//                             <small>09</small>
//                         </p>
//                         <a href="#" class="button next">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                     </div>

//                     <p class="small-screen-title">
//                         SMART PARKING
//                     </p>
//                 </div>

//                 <div class="grey-wrap video-static">
//                     <div class="video-wrap" data-method="cardRotateControll">
//                         <div class="video-inner">
//                             <div
//                                 class="video-thumbnail thumbnail gallery-trigger"
//                                 style="background-image: url('https://combis.hr/virtual-city/img/new/shutterstock_1742724962.jpg');"
//                                 data-src="https://combis.hr/virtual-city/img/new/shutterstock_1742724962.jpg">
//                             </div>

//                             <span class="shine"></span>
//                         </div>
//                     </div>

//                     <div class="content-inner">
//                         <h3 class="main-title">
//                             Smart parking
//                         </h3>

//                         <hr>

//                         <p class="text">
//                             Imagine no longer having to endlessly drive around the city looking for a free parking space, imagine not having to deal with road rage from drivers blocking traffic with their hazards on, trying to nab a parking space as you???re forced to just wait there, wasting your fuel, time, and mental energy. Thanks to the smart parking service, you can reduce your stress levels, as well as the harmful environmental impact.
//                         </p>

//                         <a href="#" class="info-box">
//                             <div class="info-box-inner">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 36">
//   <path d="M1.406,29.829H2.813V19.671H1.406A1.406,1.406,0,0,1,0,18.265V14.906A1.406,1.406,0,0,1,1.406,13.5H9.281a1.406,1.406,0,0,1,1.406,1.406V29.829h1.406A1.406,1.406,0,0,1,13.5,31.235v3.359A1.406,1.406,0,0,1,12.094,36H1.406A1.406,1.406,0,0,1,0,34.594V31.235A1.406,1.406,0,0,1,1.406,29.829ZM6.75,0a5.063,5.063,0,1,0,5.063,5.063A5.062,5.062,0,0,0,6.75,0Z"/>
// </svg>                            </div>
//                             <div class="info-box-inner">
//                                 <p>
//                                     Magnetic sensors
//                                 </p>
//                             </div>
//                         </a>

//                         <p class="text cf">
//                             Underground magnetic sensors installed in parking spaces recognise cars as large magnetic fields and can detect when a vehicle is parked there and when the parking spot is free. Real-time information on whether the parking space is free or not is displayed on a mobile app available to drivers. The app gives drivers an overview of free parking spaces at the target destination, with additional functionalities such as route-to navigation, purchasing a parking ticket, setting parking duration, extending the validity of the ticket, and payment.

//                             <br><br>
//                             <a href="https://godigital.hrvatskitelekom.hr/case-study-kako-funkcionira-dubrovacki-pametni-parking/" target="_blank" class="button-1 thin f-right">
//                                 <span>LEARN MORE!</span>
//                             </a>
//                         </p>
//                     </div>
//                 </div>

//                 <div class="grey-wrap contact-numbers">
//                     <div class="bottom-scene-slide-navigation">
//                         <div class="screen-number">
//                             <span>04</span>
//                         </div>

//                         <div class="button-navigation">
//                             <a href="#" class="button prev">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                             <p class="pagination">
//                                 <span>03</span>
//                                 /
//                                 <small>09</small>
//                             </p>
//                             <a href="#" class="button next">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                         </div>

//                         <p class="small-screen-title">
//                             SMART PARKING
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div class="content-wrap-inner">
//             <div class="content">
//                 <div class="screen-info-wrap">
//                     <p class="big-number">
//                         <span>
//                             05
//                         </span>
//                     </p>

//                     <div class="text-line">
//                         <span>Be smart</span>
//                         <i></i>
//                     </div>

//                     <p class="screen-title">
//                         <span>
//                             Smart finance
//                         </span>
//                     </p>
//                 </div>

//                 <div class="white-wrap first-white-wrap">
//                     <div class="screen-number">
//                         <span>05</span>
//                     </div>

//                     <div class="button-navigation">
//                         <a href="#" class="button prev">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                         <p class="pagination">
//                             <span>03</span>
//                             /
//                             <small>09</small>
//                         </p>
//                         <a href="#" class="button next">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                     </div>

//                     <p class="small-screen-title">
//                         FINANCIAL INSTITUTIONS
//                     </p>

//                     <div class="content-inner">
//                         <h5 class="short-description">
//                             Smart cities, smart citizens, smart banks. Technology allows service providers to get closer to their users and clients than ever before.
//                         </h5>
//                     </div>
//                 </div>

//                 <div class="grey-wrap">
//                     <div class="video-wrap" data-method="cardRotateControll">
//                         <div class="video-inner">
//                             <div
//                                 class="video-thumbnail thumbnail gallery-trigger"
//                                 style="background-image: url('https://combis.hr/virtual-city/img/new/happy-cheerful-european-ginger-woman-working-remot-2021-11-16-18-10-27-utc.jpg');"
//                                 data-src="https://combis.hr/virtual-city/img/new/happy-cheerful-european-ginger-woman-working-remot-2021-11-16-18-10-27-utc.jpg">
//                             </div>

//                             <span class="shine"></span>
//                         </div>
//                     </div>

//                     <div class="content-inner">
//                         <h3 class="main-title">
//                             Win the hearts and minds of your clients with a little help from our digital solutions
//                         </h3>

//                         <hr>

//                         <p class="text">
//                             The best way to win the trust of your users and clients is to make sure they know how much you value them and that their needs come first. We???ve been working on solutions and services that enable you to do just that.
//                         </p>

//                         <a href="#" class="info-box">
//                             <div class="info-box-inner">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 36">
//   <path d="M1.406,29.829H2.813V19.671H1.406A1.406,1.406,0,0,1,0,18.265V14.906A1.406,1.406,0,0,1,1.406,13.5H9.281a1.406,1.406,0,0,1,1.406,1.406V29.829h1.406A1.406,1.406,0,0,1,13.5,31.235v3.359A1.406,1.406,0,0,1,12.094,36H1.406A1.406,1.406,0,0,1,0,34.594V31.235A1.406,1.406,0,0,1,1.406,29.829ZM6.75,0a5.063,5.063,0,1,0,5.063,5.063A5.062,5.062,0,0,0,6.75,0Z"/>
// </svg>                            </div>
//                             <div class="info-box-inner">
//                                 <p>
//                                     Discover our business automation solutions
//                                 </p>
//                             </div>
//                         </a>

//                         <p class="text">
//                             Discover our business automation solutions ??? automate as many processes as possible, and don???t waste the time and skills of your employees on repetitive tasks. Allow your employees to utilise their expertise to the fullest extent. Discover how...
//                             <br>

//                             <div class="link-wrap">
//                                 <div class="inner">
//                                     <a class="button-1 thin" target="_blank" href="https://www.combis.hr/automation-solutions">
//                                         <span>
//                                             automation-solutions
//                                         </span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </p>

//                         <div class="image-text-wrap">
//                             <div class="itw-inner" data-method="cardRotateControll">
//                                 <div class="image-wrap">
//                                     <img src="https://combis.hr/virtual-city/img/5474028.jpg" alt="5474028" class="gallery-trigger thumbnail" data-src="https://combis.hr/virtual-city/img/5474028-big.jpg">
//                                 </div>
//                             </div>

//                             <div class="itw-inner">
//                                 <p class="itw-text">
//                                     Seize the moment
//                                 </p>
//                             </div>
//                         </div>

//                         <p class="text cf">
//                             The world is becoming increasingly more digital, with processes changing by the second. Which is why we have developed solutions to tackle the technology push we see around us head-on. Adapt your business tools and processes to the new era we are entering.
//                             <br><br>

//                             Learn about our business digitalisation solutions.
//                             <br>
//                             <div class="link-wrap">
//                                 <div class="inner">
//                                     <a class="button-1 thin" target="_blank" href="https://combiscloud.hr">
//                                         <span>
//                                             combiscloud
//                                         </span>
//                                     </a>
//                                 </div>
//                                 <div class="inner">
//                                     <a class="button-1 thin" target="_blank" href="https://www.combis.hr/en/ema-enterprise-mobility-administration/">
//                                         <span>
//                                             combis ema
//                                         </span>
//                                     </a>
//                                 </div>
//                                 <div class="inner">
//                                     <a class="button-1 thin" target="_blank" href="https://www.combis.hr/en/call-from-teams/">
//                                         <span>
//                                             call from teams
//                                         </span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </p>

//                         <div class="line-title-wrap">
//                             <hr>

//                             <h4 class="secondary-title title">
//                                 Identify new opportunities
//                             </h4>

//                             <hr>
//                         </div>

//                         <p class="text cf">
//                             We combine business with pleasure ??? discover what the new era of ATMs looks like.

//                             <br><br>
//                             <a href="#" class="button-1 thin f-right comkiosk-link">
//                                 <span>LEARN MORE!</span>
//                             </a>
//                         </p>

//                         <div class="media-description-wrap">
//                             <div class="video-wrap" data-method="cardRotateControll">
//                                 <div class="video-inner">
//                                     <div
//                                         class="video-thumbnail thumbnail gallery-trigger"
//                                         style="background-image: url('https://combis.hr/virtual-city/img/new/combis30sec.jpg');"
//                                         data-src='https://combis.hr/virtual-city/img/new/combis30sec.jpg'>
//                                     </div>

//                                     <span class="shine"></span>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="line-title-wrap">
//                             <hr>

//                             <h4 class="secondary-title title">
//                                 Stay safe
//                             </h4>

//                             <hr>
//                         </div>

//                         <p class="text cf">
//                             We???ve got your back. Our knowledge and expertise guarantee that you will stay safe in the virtual world. Click here without fear of negative consequences.

//                             <br><br>
//                             <a href="https://combis30sec.com/en/" class="button-1 thin f-right" target="_blank">
//                                 <span>LEARN MORE!</span>
//                             </a>
//                         </p>
//                     </div>
//                 </div>

//                 <div class="grey-wrap contact-numbers">
//                     <div class="bottom-scene-slide-navigation">
//                         <div class="screen-number">
//                             <span>05</span>
//                         </div>

//                         <div class="button-navigation">
//                             <a href="#" class="button prev">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                             <p class="pagination">
//                                 <span>03</span>
//                                 /
//                                 <small>09</small>
//                             </p>
//                             <a href="#" class="button next">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                         </div>

//                         <p class="small-screen-title">
//                             FINANCIAL INSTITUTIONS
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div class="content-wrap-inner">
//             <div class="content">
//                 <div class="screen-info-wrap">
//                     <p class="big-number">
//                         <span>
//                             06
//                         </span>
//                     </p>

//                     <div class="text-line">
//                         <span>Be smart</span>
//                         <i></i>
//                     </div>

//                     <p class="screen-title">
//                         <span>
//                             Smart hospitality industry
//                         </span>
//                     </p>
//                 </div>

//                 <div class="white-wrap first-white-wrap">
//                     <div class="screen-number">
//                         <span>06</span>
//                     </div>

//                     <div class="button-navigation">
//                         <a href="#" class="button prev">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                         <p class="pagination">
//                             <span>03</span>
//                             /
//                             <small>09</small>
//                         </p>
//                         <a href="#" class="button next">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                     </div>

//                     <p class="small-screen-title">
//                         HOTELS
//                     </p>

//                     <div class="content-inner">
//                         <h5 class="short-description short-description-2">
//                             There are seemingly no limits to what technology can do, but it???s all for nothing without the human factor.
//                         </h5>
//                     </div>
//                 </div>

//                 <div class="grey-wrap">
//                     <div class="video-wrap" data-method="cardRotateControll">
//                         <div class="video-inner">
//                             <div
//                                 class="video-thumbnail thumbnail gallery-trigger"
//                                 style="background-image: url('https://combis.hr/virtual-city/img/new/overwater-villa-balcony-overlooking-tropical-lagoo-2021-08-26-15-59-37-utc.jpg');"
//                                 data-src="https://combis.hr/virtual-city/img/new/overwater-villa-balcony-overlooking-tropical-lagoo-2021-08-26-15-59-37-utc.jpg">
//                             </div>

//                             <span class="shine"></span>
//                         </div>
//                     </div>

//                     <div class="content-inner">
//                         <h3 class="main-title">
//                             When the guest is so much more than a guest
//                         </h3>

//                         <hr>

//                         <p class="text">
//                             Surprise your guests and make them feel truly special and unique. The personal approach made easy, putting the guest first ??? all of this can be made possible with our digital solutions.
//                         </p>

//                         <a href="#" class="info-box">
//                             <div class="info-box-inner">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 36">
//   <path d="M1.406,29.829H2.813V19.671H1.406A1.406,1.406,0,0,1,0,18.265V14.906A1.406,1.406,0,0,1,1.406,13.5H9.281a1.406,1.406,0,0,1,1.406,1.406V29.829h1.406A1.406,1.406,0,0,1,13.5,31.235v3.359A1.406,1.406,0,0,1,12.094,36H1.406A1.406,1.406,0,0,1,0,34.594V31.235A1.406,1.406,0,0,1,1.406,29.829ZM6.75,0a5.063,5.063,0,1,0,5.063,5.063A5.062,5.062,0,0,0,6.75,0Z"/>
// </svg>                            </div>
//                             <div class="info-box-inner">
//                                 <p>
//                                     Discover our business automation solutions
//                                 </p>
//                             </div>
//                         </a>

//                         <p class="text">
//                             Discover our business automation solutions ??? automate as many processes as possible, and don???t waste the time and skills of your employees on repetitive tasks. Allow your employees to utilise their expertise to the fullest extent. Discover how...
//                             <br>

//                             <div class="link-wrap">
//                                 <div class="inner">
//                                     <a class="button-1 thin" target="_blank" href="https://www.combis.hr/automation-solutions">
//                                         <span>
//                                             AUTOMATION SOLUTIONS
//                                         </span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </p>

//                         <div class="image-text-wrap">
//                             <div class="itw-inner" data-method="cardRotateControll">
//                                 <div class="image-wrap">
//                                     <img src="https://combis.hr/virtual-city/img/new/mohammed-nasim-C8H2p9cvB_8-unsplash.jpg" alt="5474028" class="gallery-trigger thumbnail" data-src="https://combis.hr/virtual-city/img/new/mohammed-nasim-C8H2p9cvB_8-unsplash.jpg">
//                                 </div>
//                             </div>

//                             <div class="itw-inner">
//                                 <p class="itw-text">
//                                     Seize the moment
//                                 </p>
//                             </div>
//                         </div>

//                         <p class="text">
//                             The world is becoming increasingly more digital, with processes changing by the second. Which is why we have developed solutions to tackle the technology push we see around us head-on. Adapt your business tools and processes to the new era we are entering.
//                             <br><br>
//                             Learn about our business digitalisation solutions.
//                             <br>
//                             <div class="link-wrap">
//                                 <div class="inner">
//                                     <a class="button-1 thin" target="_blank" href="https://combiscloud.hr">
//                                         <span>
//                                             combiscloud
//                                         </span>
//                                     </a>
//                                 </div>
//                                 <div class="inner">
//                                     <a class="button-1 thin" target="_blank" href="https://www.combis.hr/en/ema-enterprise-mobility-administration/">
//                                         <span>
//                                             combis ema
//                                         </span>
//                                     </a>
//                                 </div>
//                                 <div class="inner">
//                                     <a class="button-1 thin" target="_blank" href="https://www.combis.hr/en/call-from-teams/">
//                                         <span>
//                                             call from teams
//                                         </span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </p>

//                         <div class="line-title-wrap">
//                             <hr>

//                             <h4 class="secondary-title title">
//                                 Stay safe
//                             </h4>

//                             <hr>
//                         </div>

//                         <p class="text cf">
//                             We???ve got your back. Our knowledge and expertise guarantee that you will stay safe in the virtual world. Click here without fear of negative consequences.

//                             <br><br>
//                             <a href="https://combis30sec.com/en/" target="_blank" class="button-1 thin f-right">
//                                 <span>LEARN MORE!</span>
//                             </a>
//                         </p>
//                     </div>
//                 </div>

//                 <div class="grey-wrap contact-numbers">
//                     <div class="media-description-wrap">
//                         <div class="video-wrap" data-method="cardRotateControll">
//                             <div class="video-inner">
//                                 <div
//                                     class="video-thumbnail thumbnail gallery-trigger"
//                                     style="background-image: url('https://combis.hr/virtual-city/img/new/yang-wewe-UBe-M4bBxjw-unsplash.jpg');"
//                                     data-src='https://combis.hr/virtual-city/img/new/yang-wewe-UBe-M4bBxjw-unsplash.jpg'>
//                                 </div>

//                                 <span class="shine"></span>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="bottom-scene-slide-navigation">
//                         <div class="screen-number">
//                             <span>06</span>
//                         </div>

//                         <div class="button-navigation">
//                             <a href="#" class="button prev">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                             <p class="pagination">
//                                 <span>03</span>
//                                 /
//                                 <small>09</small>
//                             </p>
//                             <a href="#" class="button next">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                         </div>

//                         <p class="small-screen-title">
//                             HOTELS
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div class="content-wrap-inner">
//             <div class="content">
//                 <div class="screen-info-wrap">
//                     <p class="big-number">
//                         <span>
//                             07
//                         </span>
//                     </p>

//                     <div class="text-line">
//                         <span>Be smart</span>
//                         <i></i>
//                     </div>

//                     <p class="screen-title">
//                         <span>
//                             Smart industry
//                         </span>
//                     </p>
//                 </div>

//                 <div class="white-wrap first-white-wrap no-description">
//                     <div class="screen-number">
//                         <span>07</span>
//                     </div>

//                     <div class="button-navigation">
//                         <a href="#" class="button prev">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                         <p class="pagination">
//                             <span>03</span>
//                             /
//                             <small>09</small>
//                         </p>
//                         <a href="#" class="button next">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                     </div>

//                     <p class="small-screen-title">
//                         INDUSTRY
//                     </p>
//                 </div>

//                 <div class="grey-wrap video-static">
//                     <div class="video-wrap" data-method="cardRotateControll">
//                         <div class="video-inner">
//                             <div
//                                 class="video-thumbnail thumbnail gallery-trigger"
//                                 style="background-image: url('https://combis.hr/virtual-city/img/biel-morro-HCha-UHkIg8-unsplash.jpg');"
//                                 data-src="https://combis.hr/virtual-city/img/biel-morro-HCha-UHkIg8-unsplash.jpg">
//                             </div>

//                             <span class="shine"></span>
//                         </div>
//                     </div>

//                     <div class="content-inner">
//                         <h3 class="main-title">
//                             Smart management of energy products
//                         </h3>

//                         <hr>

//                         <p class="text">
//                             Meter monitoring systems for remote reading serve for potential power grid deviations, but they can also be used to provide users with transparent data (electric energy meter readings). Since the system can collect data from various sources and perform a real-time energy efficiency analysis, it also makes it easy to calculate potential losses, energy dissipation, and emissions of air pollutants.
//                         </p>

//                         <a href="#" class="info-box">
//                             <div class="info-box-inner">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 36">
//   <path d="M1.406,29.829H2.813V19.671H1.406A1.406,1.406,0,0,1,0,18.265V14.906A1.406,1.406,0,0,1,1.406,13.5H9.281a1.406,1.406,0,0,1,1.406,1.406V29.829h1.406A1.406,1.406,0,0,1,13.5,31.235v3.359A1.406,1.406,0,0,1,12.094,36H1.406A1.406,1.406,0,0,1,0,34.594V31.235A1.406,1.406,0,0,1,1.406,29.829ZM6.75,0a5.063,5.063,0,1,0,5.063,5.063A5.062,5.062,0,0,0,6.75,0Z"/>
// </svg>                            </div>
//                             <div class="info-box-inner">
//                                 <p>
//                                     How cities can save energy and be more transparent with their citizens
//                                 </p>
//                             </div>
//                         </a>

//                         <p class="text">
//                             The ComEnergy solution by Combis is the most important piece of the puzzle when it comes to solving the challenges that every energy management system needs to address in order to earn the right to be called a smart city system. It is a technological platform for collecting data from remote measuring points (meters and sensors) in real time using IoT technology and cloud computing.
//                         </p>

//                         <div class="line-title-wrap">
//                             <hr>

//                             <h4 class="secondary-title title">
//                                 Data transparency
//                             </h4>

//                             <hr>
//                         </div>

//                         <p class="text cf">
//                             The ComEnergy solution is designed to be multi-user, located in the cloud, and has built-in data analytics performed as data is collected (in real time). Furthermore, it is not dedicated to just one energy product (only water, only electricity) but can simultaneously collect data on several energy products in the system (water, electricity, gas, steam).

//                             <br><br>
//                             <a href="https://www.combis.hr/iot/" target="_blank" class="button-1 thin f-right">
//                                 <span>LEARN MORE!</span>
//                             </a>
//                         </p>
//                     </div>
//                 </div>

//                 <div class="grey-wrap contact-numbers">
//                     <div class="content-inner">
//                         <h4 class="secondary-title title">
//                             Rimac Automobili
//                         </h4>

//                         <p class="text cf">
//                             We are happy when we are on the side of innovation. We help the best stay the best.

//                             <br><br>
//                             <a href="#" class="button-1 thin f-right rimac-link">
//                                 <span>LEARN MORE!</span>
//                             </a>
//                         </p>
//                     </div>

//                     <div class="bottom-scene-slide-navigation">
//                         <div class="screen-number">
//                             <span>07</span>
//                         </div>

//                         <div class="button-navigation">
//                             <a href="#" class="button prev">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                             <p class="pagination">
//                                 <span>03</span>
//                                 /
//                                 <small>09</small>
//                             </p>
//                             <a href="#" class="button next">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                         </div>

//                         <p class="small-screen-title">
//                             INDUSTRY
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div class="content-wrap-inner">
//             <div class="content">
//                 <div class="screen-info-wrap">
//                     <p class="big-number">
//                         <span>
//                             08
//                         </span>
//                     </p>

//                     <div class="text-line">
//                         <span>Be smart</span>
//                         <i></i>
//                     </div>

//                     <p class="screen-title">
//                         <span>
//                             Rimac Automobili
//                         </span>
//                     </p>
//                 </div>

//                 <div class="white-wrap first-white-wrap no-description">
//                     <div class="screen-number">
//                         <span>08</span>
//                     </div>

//                     <div class="button-navigation">
//                         <a href="#" class="button prev">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                         <p class="pagination">
//                             <span>03</span>
//                             /
//                             <small>09</small>
//                         </p>
//                         <a href="#" class="button next">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                     </div>

//                     <p class="small-screen-title desktop-nobrake">
//                         SMART SOLUTIONS FOR <br>
//                         SMART MANUFACTURING
//                     </p>
//                 </div>

//                 <div class="grey-wrap video-static">
//                     <div class="video-wrap" data-method="cardRotateControll">
//                         <div class="video-inner">
//                             <div
//                                 class="video-thumbnail thumbnail gallery-trigger"
//                                 style="background-image: url('https://combis.hr/virtual-city/img/GQ_car_post_003-02-2880x1622.jpg');"
//                                 data-src="https://combis.hr/virtual-city/img/GQ_car_post_003-02-2880x1622.jpg">
//                             </div>

//                             <span class="shine"></span>
//                         </div>
//                     </div>

//                     <div class="content-inner">
//                         <h3 class="main-title">
//                             Smart solutions for smart manufacturing
//                         </h3>

//                         <hr>

//                         <p class="text">
//                             Rimac Automobili is a technology company that designs and manufactures the next generation of electric cars and high-efficiency vehicle propulsion systems. The company was founded in 2009 by Mate Rimac, driven by a vision of creating a sports car for the 21st century, with a firm belief that electric powertrains can be used to power the next generation of sports cars and can make them better, faster, and more exciting. And he was right.
//                         </p>

//                         <a href="#" class="info-box">
//                             <div class="info-box-inner">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 36">
//   <path d="M1.406,29.829H2.813V19.671H1.406A1.406,1.406,0,0,1,0,18.265V14.906A1.406,1.406,0,0,1,1.406,13.5H9.281a1.406,1.406,0,0,1,1.406,1.406V29.829h1.406A1.406,1.406,0,0,1,13.5,31.235v3.359A1.406,1.406,0,0,1,12.094,36H1.406A1.406,1.406,0,0,1,0,34.594V31.235A1.406,1.406,0,0,1,1.406,29.829ZM6.75,0a5.063,5.063,0,1,0,5.063,5.063A5.062,5.062,0,0,0,6.75,0Z"/>
// </svg>                            </div>
//                             <div class="info-box-inner">
//                                 <p>
//                                     When innovation is part of your DNA, you have to have the ability to create anytime and anywhere.
//                                 </p>
//                             </div>
//                         </a>

//                         <p class="text">
//                             Scalability, optimisation, power, and security are the words that best describe the requirements that need to be met for today???s engineers to work with graphics-intensive applications. CAD/CAM (Computer-Aided Design and Manufacturing) software like Catia and 3DEXPERIENCE require powerful CPU and graphics capabilities, and such workstations are hard to come by. Even in normal conditions, getting this kind of hardware takes months. In extreme circumstances such as the COVID-19 crisis, when the delivery of all hardware, especially specialist hardware, comes to a complete halt, this challenge becomes even more pronounced.
//                         </p>

//                         <div class="line-title-wrap">
//                             <hr>

//                             <h4 class="secondary-title title">
//                                 Working without interruptions from the safety of your home while retaining the level of user experience and high security standards
//                             </h4>

//                             <hr>
//                         </div>

//                         <p class="text">
//                             Given the complex requirements of Rimac Automobili, Combis offered its expertise in connecting several different solutions offered by partner companies VMware, HPE, and NVIDIA, successfully integrating them and enabling the use of personalised CAD/CAM graphic virtual workstations to Rimac Automobili engineers from any location and any device. Windows 10 VDI workstations without graphics cards were assigned to other employees who did not need CAD/CAM specialist software. The overall arrangement includes NVIDIA V100 advanced data centre GPUs installed in physical servers that allow graphics load balancing and scaling on Horizon workstations via the NVIDIA GRID system.
//                             <br><br>
//                         </p>

//                         <h4 class="secondary-title margin-2 title">
//                             We are happy when we are on the side of innovation
//                         </h4>

//                         <p class="text cf">
//                             For the user, the biggest advantage is the unity and integrity of the solution provided by HCI infrastructure with higher performance compared to traditional hardware solutions, at the same time providing the end user with the best VDI solution currently available on the market, and security guaranteed by one of the most robust SDN solutions. If we also consider the graphic capabilities provided by the world???s largest GPU manufacturer ??? we can truly say we have all the ingredients for success!

//                             <br><br>
//                             <a href="https://www.combis.hr/wp-content/uploads/2020/09/CASE_STUDY_RIMAC_EN.pdf" target="_blank" class="button-1 thin f-right">
//                                 <span>LEARN MORE!</span>
//                             </a>
//                         </p>
//                     </div>
//                 </div>

//                 <div class="grey-wrap contact-numbers">
//                     <div class="bottom-scene-slide-navigation">
//                         <div class="screen-number">
//                             <span>08</span>
//                         </div>

//                         <div class="button-navigation">
//                             <a href="#" class="button prev">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                             <p class="pagination">
//                                 <span>03</span>
//                                 /
//                                 <small>09</small>
//                             </p>
//                             <a href="#" class="button next">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                         </div>

//                         <p class="small-screen-title desktop-nobrake">
//                             SMART SOLUTIONS FOR<br>
//                             SMART MANUFACTURING
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div class="content-wrap-inner">
//             <div class="content">
//                 <div class="screen-info-wrap">
//                     <p class="big-number">
//                         <span>
//                             09
//                         </span>
//                     </p>

//                     <div class="text-line">
//                         <span>Be smart</span>
//                         <i></i>
//                     </div>

//                     <p class="screen-title">
//                         <span>
//                             Digital Signage
//                         </span>
//                     </p>
//                 </div>

//                 <div class="white-wrap first-white-wrap no-description">
//                     <div class="screen-number">
//                         <span>09</span>
//                     </div>

//                     <div class="button-navigation">
//                         <a href="#" class="button prev">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                         <p class="pagination">
//                             <span>03</span>
//                             /
//                             <small>09</small>
//                         </p>
//                         <a href="#" class="button next">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                        </a>
//                     </div>

//                     <p class="small-screen-title desktop-nobrake">
//                         MORE THAN <br>
//                         ADVERTISING SPACE
//                     </p>
//                 </div>

//                 <div class="grey-wrap video-static">
//                     <div class="video-wrap" data-method="cardRotateControll">
//                         <div class="video-inner">
//                             <div
//                                 class="video-thumbnail thumbnail gallery-trigger"
//                                 style="background-image: url('https://combis.hr/virtual-city/img/new/closeup-woman-withdrawing-the-cash-via-atm-busine-2021-08-30-06-50-56-utc.jpg');"
//                                 data-src="https://combis.hr/virtual-city/img/new/closeup-woman-withdrawing-the-cash-via-atm-busine-2021-08-30-06-50-56-utc.jpg">
//                             </div>

//                             <span class="shine"></span>
//                         </div>
//                     </div>

//                     <div class="content-inner">
//                         <h3 class="main-title">
//                             Smart advertising
//                         </h3>

//                         <hr>

//                         <p class="text">
//                             Digital screens in public places reach more users than video content shown on other media (relative to the number of views/viewers). An outdoor digital screen has a constant number of views throughout the campaign as it attracts attention with its light, colours, and video messages.
//                         </p>

//                         <a href="#" class="info-box">
//                             <div class="info-box-inner">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 36">
//   <path d="M1.406,29.829H2.813V19.671H1.406A1.406,1.406,0,0,1,0,18.265V14.906A1.406,1.406,0,0,1,1.406,13.5H9.281a1.406,1.406,0,0,1,1.406,1.406V29.829h1.406A1.406,1.406,0,0,1,13.5,31.235v3.359A1.406,1.406,0,0,1,12.094,36H1.406A1.406,1.406,0,0,1,0,34.594V31.235A1.406,1.406,0,0,1,1.406,29.829ZM6.75,0a5.063,5.063,0,1,0,5.063,5.063A5.062,5.062,0,0,0,6.75,0Z"/>
// </svg>                            </div>
//                             <div class="info-box-inner">
//                                 <p>
//                                     Combining business and pleasure ??? a new era of ATMs
//                                 </p>
//                             </div>
//                         </a>

//                         <p class="text cf">
//                             We know that people spend more time looking at digital screens than traditional posters. It???s hardly surprising considering that the screens are bright and display animated colourful content, which is more attractive to the eye than static content. That is why we have developed ComKiosk, a specific Digital Signage solution that, in addition to serving as a platform for projecting digital messages, is also a functional ATM. We also offer other digital signage devices and numerous self-service devices such as ATMs, currency exchange machines, payment kiosks, etc.

//                             <br><br><br><br>
//                             <a href="https://www.combis.hr/en/contact/" target="_blank" class="button-1 thin f-right">
//                                 <span>WOULD YOU LIKE TO KNOW MORE?</span>
//                             </a>
//                         </p>
//                     </div>
//                 </div>

//                 <div class="grey-wrap contact-numbers">
//                     <div class="bottom-scene-slide-navigation">
//                         <div class="screen-number">
//                             <span>09</span>
//                         </div>

//                         <div class="button-navigation">
//                             <a href="#" class="button prev">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                             <p class="pagination">
//                                 <span>03</span>
//                                 /
//                                 <small>09</small>
//                             </p>
//                             <a href="#" class="button next">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.309 9.789">
//     <g transform="translate(1.414 1.414)">
//         <line x1="3.48" y2="3.48" stroke-linecap="round" stroke-width="2"/>
//         <line x1="3.48" y1="3.48" transform="translate(0 3.48)" stroke-linecap="round" stroke-width="2"/>
//     </g>
// </svg>                            </a>
//                         </div>

//                         <p class="small-screen-title desktop-nobrake">
//                             MORE THAN <br>
//                             ADVERTISING SPACE
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

// </div>

// </body>

// 	<script type="x-shader/x-vertex" id="vertexShader">
// 		varying vec3 vPosition;

// 		void main () {
// 			vPosition = position;
// 			vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
// 			gl_Position = projectionMatrix * mvPosition;
// 			gl_PointSize = 8.0 / -mvPosition.z;
// 		}
// 	</script>

// 	<script type="x-shader/x-fragment" id="fragmentShader">
// 		varying vec3 vPosition;

// 		float norm (float val, float max, float min) {
// 			return (val - min) / (max - min);
// 		}

// 		void main () {
// 			vec3 color = vec3(247.0 / 255.0, 181.0 / 255.0, 0.0);

// 			float addedVal = norm(0.0 + vPosition.y, 10.0, 0.0);

// 			addedVal = 0.5 + vPosition.z * 0.5;

// 			//color = vec3(15.0 * vPosition.z, 15.0 * vPosition.z, 15.0 * vPosition.z);
// 			gl_FragColor = vec4(color, 0.5);
// 		}
// 	</script>

// </html>
