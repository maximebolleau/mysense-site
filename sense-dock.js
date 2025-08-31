(function(){
  try{
    var css = ""
      + ".sense-dock{position:fixed;right:18px;bottom:18px;display:flex;flex-direction:column;gap:10px;z-index:9999}"
      + ".sense-dock a{background:rgba(17,17,17,.9);color:#fff;text-decoration:none;border:1px solid rgba(255,255,255,.15);"
      + "padding:10px 12px;border-radius:999px;font:600 13px/1.1 Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;"
      + "box-shadow:0 6px 24px rgba(0,0,0,.35)}"
      + ".sense-dock a:hover{background:#111}"
      + "@media (max-width:640px){.sense-dock{right:12px;bottom:12px}}";
    var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
    var dock = document.createElement('div'); dock.className='sense-dock';
    dock.innerHTML = '<a href="/performance.html">Performance</a><a href="/production.html">Creative&nbsp;Prod</a>';
    document.body.appendChild(dock);
  }catch(e){}
})();
