#carbon-switch-banner {                                                                                      
    position: fixed;                                                                                           
    bottom: -120px;                                                                                            
    left: 50%;                                                                                                 
    transform: translateX(-50%);
    z-index: 2147483647;                                                                                       
    width: calc(100% - 32px);                                                                                
    max-width: 720px;                                                                                          
    transition: bottom 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;                            
    box-sizing: border-box;                                                                                  
  }                                                                                                            
  #carbon-switch-banner.csb-visible { bottom: 16px; }                                                        
  #csb-inner {                                                                                                 
    background: #052e16;                                                                                     
    color: #fff;                                                                                               
    border-radius: 14px;                                                                                     
    padding: 14px 16px;                                                                                        
    display: flex;
    align-items: center;                                                                                       
    gap: 12px;                                                                                               
    box-shadow: 0 8px 40px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2);
    border: 1px solid rgba(34,197,94,0.3);                                                                     
  }
  #csb-leaf { font-size: 1.6em; flex-shrink: 0; line-height: 1; }                                              
  #csb-text { flex: 1; min-width: 0; }                                                                         
  #csb-main { font-size: 14px; line-height: 1.4; color: #fff; }
  #csb-main strong { color: #86efac; }                                                                         
  #csb-sub { font-size: 12px; color: rgba(255,255,255,0.6); margin-top: 3px; }                               
  #csb-cta {                                                                                                   
    display: inline-block;                                                                                     
    background: #22c55e;                                                                                       
    color: #fff !important;                                                                                    
    text-decoration: none !important;                                                                        
    padding: 9px 18px;                                                                                         
    border-radius: 8px;                                                                                      
    font-size: 13px;                                                                                           
    font-weight: 700;
    white-space: nowrap;                                                                                       
    transition: background 0.15s;                                                                            
    border: none;                                                                                              
    cursor: pointer;
  }                                                                                                            
  #csb-cta:hover { background: #16a34a !important; text-decoration: none !important; }                       
  #csb-close {                                                                        
    background: rgba(255,255,255,0.12);                                                                        
    border: none;                      
    color: rgba(255,255,255,0.7);                                                                              
    font-size: 14px;                                                                                         
    cursor: pointer;                                                                                           
    padding: 6px 8px;                                                                                          
    border-radius: 6px;
    line-height: 1;                                                                                            
    transition: background 0.15s;                                                                            
  }                              
  #csb-close:hover { background: rgba(255,255,255,0.22); color: #fff; }                                        
  @media (max-width: 600px) {                                          
    #csb-inner { flex-wrap: wrap; }                                                                            
    #csb-sub { display: none; }                                                                                
    #csb-cta { padding: 8px 14px; font-size: 12px; }
  }                                                                                                            
                                                                                                             
  ---                                                                                                          
  popup.html                                                                                                   
   
  <!DOCTYPE html>                                                                                              
  <html lang="en">                                                                                           
  <head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { width: 320px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;       
  background: #fff; color: #1a1a1a; }                                                                          
    .header { background: linear-gradient(135deg, #052e16, #14532d); padding: 20px; text-align: center; color: 
  #fff; }                                                                                                      
    .header .badge { font-size: 2em; margin-bottom: 8px; }                                                   
    .header h1 { font-size: 1.1em; font-weight: 700; margin-bottom: 4px; }                                     
    .header p { font-size: 12px; opacity: 0.8; }                                                               
    .body { padding: 16px 20px; }                                                                              
    .stat { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px solid #f0f0f0;  
  font-size: 13px; }                                                                                           
    .stat:last-child { border-bottom: none; }                                                                  
    .stat-icon { font-size: 1.2em; flex-shrink: 0; }                                                           
    .stat-text { color: #374151; }                                                                             
    .stat-text strong { color: #052e16; }
    .cta { display: block; background: #22c55e; color: #fff; text-decoration: none; text-align: center;        
  padding: 12px; border-radius: 8px; font-weight: 700; font-size: 14px; margin: 16px 20px 12px; }              
    .cta:hover { background: #16a34a; }                                                                        
    .footer { text-align: center; padding: 0 20px 16px; font-size: 11px; color: #888; }                        
    .footer a { color: #15803d; text-decoration: none; }                                                       
  </style>
  </head>                                                                                                      
  <body>                                                                                                     
    <div class="badge">🌿</div>                                                                                 
    <h1>Carbon Switch</h1>     
    <p>Powered by IMPT — the green hotel booking platform</p>                                                  
  </div>                                                                                                     
  <div class="body">                                                                                           
    <div class="stat">
      <div class="stat-icon">🏨</div>                                                                           
      <div class="stat-text"><strong 1.7 million hotels</strong> — same as Booking.com, Expedia,              ─
  Hotels.com</div>                                                                              
    </div>                                                                                                     
    <div class="stat">                                                                                       
      <div class="stat-icon">🌱</div>                                                                           
      <div class="stat-text"><strong 1 ton of CO₂ removed</strong> on every single booking — UN-verified</div>
    </div>                                                                                                     
    <div class="stat">                                                                                         
      <div class="stat-icon">💷</div>                                                                           
      <div class="stat-text"><strong Zero extra cost</strong> — same price as booking direct</div>            ─
    </div>                                                                                                   
    <div class="stat">                                                                                         
      <div class="stat-icon">✓</div>
      <div class="stat-text"><strong>Free cancellation</strong> available on most properties</div>             
    </div>                                                                                                     
  </div>                                                                                                       
  <a class="cta" href="https://app.impt.io/travel/hotels" target="_blank" rel="noopener">Search Hotels on IMPT 
  →</a>                                                                                                        
  <div class="footer">                                                                                         
    Carbon Switch shows you IMPT when you're browsing Booking.com, Expedia, Hotels.com, Airbnb, or
  TripAdvisor.<br><br>                                                                                         
    <a href="https://impt.io/carbon-offset-hotels/" target="_blank">How IMPT carbon removal works</a>          
  </div>                                                                                                       
  </body>                                                                                                      
  </html>   
