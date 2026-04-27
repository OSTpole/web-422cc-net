export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    // --- 1. DAS FAVICON PROTOKOLL ---
    // Wenn Google oder der Browser nach dem Icon fragt, liefern wir es aus GitHub
    if (pathname === "/favicon.ico" || pathname === "/favicon.png") {
      return Response.redirect("https://raw.githubusercontent.com/OSTpole/web-422cc-net/main/favicon.png", 301);
    }

    // --- 2. DAS SMARAGD-DESIGN (EMERALD GNOSIS) ---
    const html = `<!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <title>422CC // EMERALD GNOSIS</title>
        <link rel="icon" type="image/png" href="/favicon.png">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;900&display=swap');
            body { 
                background: #050505; color: #50ffb0; 
                font-family: 'Orbitron', sans-serif; 
                display: flex; flex-direction: column; align-items: center; justify-content: center; 
                height: 100vh; margin: 0; overflow: hidden;
            }
            .frame { 
                border: 1px solid #50ffb0; padding: 50px; border-radius: 20px; 
                text-align: center; box-shadow: 0 0 30px rgba(80, 255, 176, 0.2);
            }
            h1 { letter-spacing: 15px; text-transform: uppercase; margin: 0; }
            p { letter-spacing: 5px; opacity: 0.7; font-size: 0.8rem; margin-top: 20px; }
            .status { margin-top: 40px; font-size: 0.6rem; color: #fff; opacity: 0.3; }
        </style>
    </head>
    <body>
        <div class="frame">
            <h1>422CC</h1>
            <p>OPERATIVE PRÄZISION // SMARAGDGRÜNE GNOSIS</p>
            <div class="status">SYSTEM STATUS: BIONIC CORE ACTIVE</div>
        </div>
    </body>
    </html>`;

    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  }
};
