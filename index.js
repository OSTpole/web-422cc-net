// index.js (422cc Worker)
export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    // BIONIC FAVICON SYNC PROTOCOL
    if (pathname === "/favicon.ico" || pathname === "/favicon.png") {
      // Wir redirecten Google direkt auf dein finales Asset in der Werft
      return Response.redirect("https://raw.githubusercontent.com/OSTpole/422cc-unit/main/favicon.png", 301);
    }

    // --- HIER FOLGT DEIN BESTEHENDER 422CC CODE MIT DEM HTML ---
    const color = "#50ffb0"; // Bionisches Smaragdgrün
    const sharedCSS = `@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap'); body { background:#050505; color:#fff; font-family:'Orbitron', sans-serif; }`;

    const html = `<!DOCTYPE html><html><head><title>422CC // THE EMERALD GNOSIS</title>
      <style>\${sharedCSS}</style>
      
      <link rel="icon" type="image/png" href="/favicon.png">
      
    </head><body>
      <h1 style="color:\${color}">422CC Club</h1>
      <p style="opacity:0.6;">Operative Präzision. Smaragdgrüne Gnosis.</p>
    </body></html>`;
    return new Response(html, { headers: { "Content-Type": "text/html" } });
  }
};
