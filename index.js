// index.js (NC-Placeholder V2 - Bionic Terminal)
export default {
  async fetch(request, env) {
    const html = `<!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <title>NC-422 Command Center V2</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&display=swap');
            body { 
                background: #050505; color: #50ffb0; 
                font-family: 'Orbitron', sans-serif; 
                display: flex; flex-direction: column; align-items: center; justify-content: center; 
                height: 100vh; margin: 0; overflow: hidden;
            }
            .bionic-terminal { 
                border: 2px solid #50ffb0; padding: 40px; border-radius: 20px; 
                text-align: left; box-shadow: 0 0 40px rgba(80, 255, 176, 0.2);
                position: relative;
            }
            h1 { letter-spacing: 12px; text-transform: uppercase; margin: 0; font-size: 1.2rem;}
            .terminal-lines { margin-top: 30px; opacity: 0.8; font-size: 0.8rem; line-height: 1.8;}
            .brand { position: absolute; bottom: 10px; right: 20px; font-size: 0.6rem; opacity: 0.3; }
            .blink { animation: blinker 1.5s linear infinite; }
            @keyframes blinker { 50% { opacity: 0; } }
        </style>
    </head>
    <body>
        <div class="bionic-terminal">
            <h1>NC-422 Command Center</h1>
            <div class="terminal-lines">
                &gt; Initializing... [Pass]<br>
                &gt; Sovereign Grid Active [Online]<br>
                &gt; Gnosis Check: Pass [Imperial Standard]<br>
                &gt; System Status: Online <span class="blink">_</span>
            </div>
            <div class="brand">OSTpole IMP // EMERALD GNOSIS V2</div>
        </div>
    </body>
    </html>`;

    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  }
};
