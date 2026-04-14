                                                                                                           
  (function () {                                                                                               
    'use strict';                                                                                              
                                                                                                               
    if (document.getElementById('carbon-switch-banner')) return;                                               
   
    function detectHotel() {                                                                                   
      const host = window.location.hostname;                                                                 
      const path = window.location.pathname;
      const url  = window.location.href;

      let hotelName = '';                                                                                      
      let cityName  = '';
      let isHotelPage = false;                                                                                 
                                                                                                             
      // Booking.com                                                                                           
      if (host.includes('booking.com')) {
        if (path.includes('/hotel/')) {                                                                        
          isHotelPage = true;                                                                                
          const h2 = document.querySelector('h2.pp-header__title, h2[class*="headingTitle"], 
  [data-testid="property-header-title"] h1, h1[class*="hotel-name"]');                                         
          hotelName = h2 ? h2.textContent.trim() : document.title.split(':')[0].trim();
          const cityEl = document.querySelector('[data-testid="breadcrumb"] a:nth-last-child(2),               
  .bui-breadcrumb__item:nth-last-child(2) a');                                                                 
          cityName = cityEl ? cityEl.textContent.trim() : extractCityFromBookingUrl(url);
        } else if (url.includes('searchresults') || url.includes('/searchresults.')) {                         
          isHotelPage = true;                                                                                  
          cityName = getQueryParam('ss') || getQueryParam('city') || '';                                       
        }                                                                                                      
      }                                                                                                        
                                                                                                               
      // Expedia                                                                                             
      else if (host.includes('expedia.')) {
        if (path.match(/\/(en\/|)*Hotel-Search/) || url.includes('/Hotels/')) {
          isHotelPage = true;                                                                                  
          cityName = getQueryParam('destination') || getQueryParam('regionId') || '';
        } else if (path.includes('/hotels/')) {                                                                
          isHotelPage = true;                                                                                
          const h1 = document.querySelector('h1[class*="title"], [data-testid="hotel-name-heading"]');         
          hotelName = h1 ? h1.textContent.trim() : '';                                                         
          const cityEl = document.querySelector('[data-testid="hotel-city"]');                                 
          cityName = cityEl ? cityEl.textContent.trim() : '';                                                  
        }                                                                                                    
      }                                                                                                        
                                                                                                             
      // Hotels.com
      else if (host.includes('hotels.com')) {
        isHotelPage = true;
        const h1 = document.querySelector('h1[class*="uitk-heading"], [data-stid="content-hotel-title"]');     
        hotelName = h1 ? h1.textContent.trim() : '';                                                           
        cityName = getQueryParam('q-destination') || '';                                                       
      }                                                                                                        
                                                                                                               
      // Airbnb                                                                                              
      else if (host.includes('airbnb.com')) {
        if (path.startsWith('/rooms/')) {                                                                      
          isHotelPage = true;
          const h1 = document.querySelector('h1[elementtiming], div[data-section-id="TITLE_DEFAULT"] h1');     
          hotelName = h1 ? h1.textContent.trim() : 'this property';                                            
          cityName = extractCityFromTitle(document.title);                                                     
        } else if (url.includes('/s/') && url.includes('/homes')) {                                            
          isHotelPage = true;                                                                                  
          cityName = decodeURIComponent(path.split('/s/')[1]?.split('/')[0]?.replace(/-/g, ' ') || '');        
        }                                                                                                      
      }                                                                                                        
                                                                                                               
      // TripAdvisor                                                                                         
      else if (host.includes('tripadvisor.')) {
        if (path.includes('/Hotel_Review')) {                                                                  
          isHotelPage = true;
          const h1 = document.querySelector('h1[data-automation="mainH1"], h1.biGQs');                         
          hotelName = h1 ? h1.textContent.trim() : document.title.split('-')[0].trim();                        
          cityName = extractCityFromTitle(document.title);
        }                                                                                                      
      }                                                                                                      
                                                                                                               
      // Kayak                                                                                               
      else if (host.includes('kayak.')) {
        isHotelPage = true;
        const h1 = document.querySelector('h1[class*="title"], h1[class*="name"], h1');                        
        hotelName = h1 ? h1.textContent.trim() : '';
        const cityMatch = path.match(/\/hotels\/([^/,]+)/);                                                    
        cityName = cityMatch ? decodeURIComponent(cityMatch[1].replace(/-/g, ' ')) : getQueryParam('where') ||
  '';                                                                                                          
      }                                                                                                      
                                                                                                               
      // Agoda                                                                                               
      else if (host.includes('agoda.com')) {
        isHotelPage = true;                                                                                    
        const h1 = document.querySelector('h1[class*="hotel-name"], h1[class*="HeaderSection"], 
  h1[data-selenium="hotel-header-name"], h1');                                                                 
        hotelName = h1 ? h1.textContent.trim() : document.title.split('|')[0].trim();                        
        cityName = document.querySelector('[data-selenium="hotel-mosaic-city"]')?.textContent.trim()           
                || extractCityFromTitle(document.title);                                                       
      }                                                                                                        
                                                                                                               
      // Priceline                                                                                             
      else if (host.includes('priceline.com')) {                                                             
        isHotelPage = true;
        const h1 = document.querySelector('h1[data-testid="hotel-name"], h1[class*="HotelName"], h1');
        hotelName = h1 ? h1.textContent.trim() : document.title.split('|')[0].trim();                          
        cityName = extractCityFromTitle(document.title);                                                       
      }                                                                                                        
                                                                                                               
      // Google Hotels                                                                                       
      else if (host.includes('google.com') && path.includes('/travel/hotels')) {
        isHotelPage = true;                                                                                    
        cityName = getQueryParam('q') || getQueryParam('destination') || '';
        const h1 = document.querySelector('h1[class*="hotel"], [data-hveid] h2');                              
        hotelName = h1 ? h1.textContent.trim() : '';                                                           
      }                                                                                                        
                                                                                                               
      // Hilton                                                                                                
      else if (host.includes('hilton.com')) {                                                                
        isHotelPage = true;
        const h1 = document.querySelector('h1[class*="hotel-name"], h1[class*="title"], h1');
        hotelName = h1 ? h1.textContent.trim() : document.title.split('|')[0].trim();                          
        cityName = document.querySelector('[class*="hotel-location"], 
  [class*="location-name"]')?.textContent.trim()                                                               
                || extractCityFromTitle(document.title);                                                     
      }                                                                                                        
                                                                                                             
      // Marriott                                                                                              
      else if (host.includes('marriott.com')) {                                                              
        isHotelPage = true;
        const h1 = document.querySelector('h1[class*="property-name"], h1[class*="t-hotel-name"], h1');
        hotelName = h1 ? h1.textContent.trim() : document.title.split('|')[0].trim();                          
        cityName = document.querySelector('[class*="property-location"],                                       
  [class*="hotel-address-city"]')?.textContent.trim()                                                          
                || extractCityFromTitle(document.title);                                                       
      }                                                                                                        
                                                                                                             
      // IHG
      else if (host.includes('ihg.com')) {
        isHotelPage = true;
        const h1 = document.querySelector('h1[class*="hotel-name"], h1[class*="property"], h1');               
        hotelName = h1 ? h1.textContent.trim() : document.title.split('|')[0].trim();
        cityName = document.querySelector('[class*="hotel-city"], [class*="address-city"]')?.textContent.trim()
                || getQueryParam('qCity') || extractCityFromTitle(document.title);                             
      }                                                                                                        
                                                                                                               
      return { isHotelPage, hotelName: cleanName(hotelName), cityName: cleanName(cityName) };                  
    }
                                                                                                               
    function getQueryParam(key) {                                                                              
      return new URLSearchParams(window.location.search).get(key) || '';
    }                                                                                                          
                                                                                                             
    function extractCityFromBookingUrl(url) {
      const match = url.match(/booking\.com\/hotel\/[a-z]{2}\/([a-z-]+)/i);
      if (match) return toTitleCase(match[1].split('-')[0]);                                                   
      return '';                                                                                               
    }                                                                                                          
                                                                                                               
    function extractCityFromTitle(title) {                                                                   
      const parts = title.split(/[|,–\-]/);
      for (const part of parts) {                                                                              
        const t = part.trim();
        if (t && t.length > 2 && t.length < 40 && !t.toLowerCase().includes('hotel')) return t;                
      }                                                                                                        
      return '';
    }                                                                                                          
                                                                                                             
    function cleanName(str) {                                                                                  
      return str.replace(/\s+/g, ' ').trim().substring(0, 80);
    }                                                                                                          
                                                                                                             
    function toTitleCase(str) {
      return str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }                                                                                                          
  
    function buildImptUrl(hotelName, cityName) {                                                               
      if (!hotelName && !cityName) return 'https://app.impt.io/travel/hotels';                               
      if (cityName) return 'https://app.impt.io/travel/hotels?locationName=' + encodeURIComponent(cityName);   
      return 'https://impt.io/hotels/?s=' + encodeURIComponent(hotelName);                                     
    }                                                                                                          
                                                                                                               
    function injectBanner(hotelName, cityName) {                                                               
      const imptUrl = buildImptUrl(hotelName, cityName);                                                     
      const hotelLabel = hotelName                                                                             
        ? '<strong>' + escHtml(hotelName) + '</strong>'
        : cityName                                                                                             
          ? 'hotels in <strong>' + escHtml(cityName) + '</strong>'                                           
          : 'this hotel';                                                                                      
                                                                                                               
      const banner = document.createElement('div');
      banner.id = 'carbon-switch-banner';                                                                      
      banner.innerHTML =                                                                                     
        '<div id="csb-inner">' +
          '<div id="csb-leaf">🌿</div>' +                                                                       
          '<div id="csb-text">' +                                                                              
            '<div id="csb-main">Book ' + hotelLabel + ' on <strong>IMPT</strong> — same price, <strong>1 ton of
   CO₂ removed</strong></div>' +                                                                               
            '<div id="csb-sub">UN-verified carbon removal · zero extra cost · free cancellation</div>' +     
          '</div>' +                                                                                           
          '<div id="csb-actions">' +                                                                         
            '<a id="csb-cta" href="' + escHtml(imptUrl) + '" target="_blank" rel="noopener">Book on IMPT →</a>'
   +                                                                                                           
            '<button id="csb-close" aria-label="Dismiss">✕</button>' +
          '</div>' +                                                                                           
        '</div>';                                                                                            
                                                                                                               
      document.body.appendChild(banner);                                                                       
  
      requestAnimationFrame(() => {                                                                            
        requestAnimationFrame(() => {                                                                        
          banner.classList.add('csb-visible');
        });
      });                                                                                                      
  
      document.getElementById('csb-close').addEventListener('click', function () {                             
        banner.classList.remove('csb-visible');                                                              
        setTimeout(() => banner.remove(), 300);
        try { sessionStorage.setItem('csb-dismissed', '1'); } catch(e) {}                                      
      });                                                                                                      
                                                                                                               
      document.getElementById('csb-cta').addEventListener('click', function () {                               
        try { sessionStorage.setItem('csb-clicked', '1'); } catch(e) {}                                      
      });                                                                                                      
    }
                                                                                                               
    function escHtml(str) {                                                                                  
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
                                                                                                               
    function init() {
      try {                                                                                                    
        if (sessionStorage.getItem('csb-dismissed') === '1') return;                                         
      } catch(e) {}                                                 
                                                                                                               
      const { isHotelPage, hotelName, cityName } = detectHotel();
      if (!isHotelPage) return;                                                                                
                                                                                                             
      setTimeout(() => {                                                                                       
        if (!document.getElementById('carbon-switch-banner')) {                                              
          injectBanner(hotelName, cityName);                   
        }                                                                                                      
      }, 1500);
    }                                                                                                          
                                                                                                             
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);                                                     
    } else {                                              
      init();                                                                                                  
    }                                                                                                        
     
    let lastUrl = location.href;
    const observer = new MutationObserver(() => {
      if (location.href !== lastUrl) {           
        lastUrl = location.href;                                                                               
        setTimeout(init, 2000); 
      }                                                                                                        
    });                                                                                                        
    observer.observe(document, { subtree: true, childList: true });
                                                                                                               
  })();
