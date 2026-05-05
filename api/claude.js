<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
<meta name="theme-color" content="#2C1810">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="CB Checklist">
<link rel="manifest" href="manifest.json">
<title>Casa de Bolos | Checklist</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --cr:#FDF6EC;--wm:#FEFCF8;--br:#2C1810;--md:#6B3D2E;--lt:#C17F5A;
  --gd:#D4A843;--gn:#27AE60;--gnb:#EAFAF1;--rd:#C0392B;--or:#E67E22;
  --r:14px;--rs:10px;
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
body{background:var(--cr);font-family:'DM Sans',sans-serif;color:var(--br);min-height:100vh;}
.page{display:none;min-height:100vh;}
.page.on{display:block;animation:fu .3s ease;}
@keyframes fu{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
.hdr{background:var(--br);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;box-shadow:0 2px 12px rgba(0,0,0,.3);}
.logo{font-family:'DM Serif Display',serif;color:var(--gd);font-size:1.15rem;}
.logo small{color:rgba(255,255,255,.4);font-size:.6rem;display:block;letter-spacing:1.5px;}
.hdr-right{display:flex;align-items:center;gap:10px;}
.hdr-user{color:rgba(255,255,255,.7);font-size:.75rem;}
.hdr-logout{background:rgba(255,255,255,.1);border:none;color:rgba(255,255,255,.7);padding:5px 10px;border-radius:20px;font-size:.7rem;cursor:pointer;font-family:'DM Sans',sans-serif;}
.tabs{display:flex;background:var(--wm);border-bottom:2px solid #E8D8C8;position:sticky;top:52px;z-index:99;}
.tab{flex:1;padding:10px 4px;border:none;background:transparent;font-family:'DM Sans',sans-serif;font-size:.65rem;font-weight:600;color:var(--lt);cursor:pointer;text-transform:uppercase;letter-spacing:.5px;border-bottom:3px solid transparent;margin-bottom:-2px;transition:all .2s;}
.tab.on{color:var(--br);border-bottom-color:var(--gd);}

/* LOGIN */
#pg-login{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 20px;background:var(--br);}
.login-card{background:var(--wm);border-radius:20px;padding:28px 24px;width:100%;max-width:380px;}
.login-title{font-family:'DM Serif Display',serif;font-size:1.3rem;margin-bottom:20px;}
.lf-group{margin-bottom:14px;}
.lf-label{font-size:.68rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--md);margin-bottom:6px;display:block;}
.lf-input{width:100%;padding:12px 14px;border-radius:var(--rs);border:2px solid #E8D8C8;background:#FFF;font-family:'DM Sans',sans-serif;font-size:.9rem;color:var(--br);outline:none;transition:border .2s;}
.lf-input:focus{border-color:var(--gd);}
.login-err{color:var(--rd);font-size:.78rem;margin-bottom:12px;display:none;}
.login-err.show{display:block;}

/* BUTTONS */
.btn{display:block;width:100%;background:var(--br);color:var(--gd);border:none;border-radius:var(--rs);padding:14px;font-family:'DM Sans',sans-serif;font-size:.92rem;font-weight:600;cursor:pointer;transition:all .2s;}
.btn:hover{background:var(--md);}
.btn:disabled{opacity:.4;cursor:not-allowed;}
.btn-outline{background:transparent;color:var(--md);border:2px solid #E8D8C8;border-radius:var(--rs);padding:11px 16px;font-family:'DM Sans',sans-serif;font-size:.85rem;font-weight:500;cursor:pointer;}

/* BODY */
.body-wrap{padding:20px 16px 100px;max-width:540px;margin:0 auto;}
.pg-title{font-family:'DM Serif Display',serif;font-size:1.6rem;line-height:1.2;margin-bottom:4px;}
.pg-sub{color:var(--lt);font-size:.83rem;margin-bottom:20px;}
.fg{margin-bottom:14px;}
.fl{font-size:.68rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--md);margin-bottom:6px;display:block;}
select,input[type=text],input[type=password],input[type=tel]{width:100%;padding:11px 13px;border-radius:var(--rs);border:2px solid #E8D8C8;background:var(--wm);font-family:'DM Sans',sans-serif;font-size:.88rem;color:var(--br);outline:none;transition:border .2s;-webkit-appearance:none;}
select:focus,input:focus{border-color:var(--gd);}
.sw{position:relative;}
.sw::after{content:'▾';position:absolute;right:12px;top:50%;transform:translateY(-50%);color:var(--lt);pointer-events:none;}

/* CARDS */
.cards{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:18px;}
@media(max-width:360px){.cards{grid-template-columns:1fr 1fr;}}
.card{border:2px solid #E8D8C8;border-radius:var(--rs);padding:11px 8px;cursor:pointer;background:var(--wm);transition:all .2s;text-align:center;}
.card:hover{border-color:var(--gd);}
.card.sel{border-color:var(--gd);background:linear-gradient(135deg,#FFF9E6,#FEF3D0);box-shadow:0 0 0 3px rgba(212,168,67,.15);}
.cbar{height:4px;border-radius:99px;margin-bottom:7px;}
.cicon{font-size:1.4rem;margin-bottom:3px;}
.cname{font-size:.68rem;font-weight:600;color:var(--br);line-height:1.3;}
.ccnt{font-size:.58rem;color:var(--lt);margin-top:2px;}
.cat-lbl{font-size:.65rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--md);margin:14px 0 7px;padding:3px 9px;background:#F0E4D4;border-radius:20px;display:inline-block;}

/* STATUS BAR */
.sheets-bar{display:flex;align-items:center;gap:8px;background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--rs);padding:9px 13px;margin-bottom:14px;font-size:.75rem;}
.sdot{width:7px;height:7px;border-radius:50%;flex-shrink:0;}
.dg{background:var(--gn);}.dr{background:var(--rd);}.do{background:var(--or);}
.stext{flex:1;color:var(--md);}

/* CHECKLIST */
#pg-cl-wrap{max-width:540px;margin:0 auto;}
.cl-hdr{padding:14px 18px;display:flex;align-items:center;gap:11px;}
.cl-back{border:none;background:rgba(255,255,255,.15);color:white;width:34px;height:34px;border-radius:50%;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.cl-name{font-family:'DM Serif Display',serif;color:var(--gd);font-size:1.1rem;}
.cl-sub{color:rgba(255,255,255,.5);font-size:.7rem;margin-top:1px;}
.prog-wrap{background:var(--wm);padding:11px 18px;border-bottom:1px solid #E8D8C8;}
.prog-row{display:flex;justify-content:space-between;font-size:.68rem;font-weight:600;color:var(--md);margin-bottom:5px;text-transform:uppercase;letter-spacing:.7px;}
.prog-track{height:5px;background:#E8D8C8;border-radius:99px;overflow:hidden;}
.prog-fill{height:100%;background:linear-gradient(90deg,var(--lt),var(--gd));border-radius:99px;transition:width .4s ease;}
.ibody{padding:14px 13px 120px;}
.stitle{font-family:'DM Serif Display',serif;font-size:.95rem;color:var(--md);margin:18px 0 9px;padding-left:9px;border-left:3px solid var(--gd);}
.item{background:var(--wm);border-radius:var(--rs);border:2px solid #EDE4D8;margin-bottom:8px;overflow:hidden;transition:border .2s;}
.item.done{border-color:var(--gn);}
.item-top{display:flex;align-items:flex-start;padding:11px 12px;gap:10px;cursor:pointer;}
.ichk{width:23px;height:23px;border-radius:50%;border:2.5px solid #CCC;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;transition:all .2s;font-size:.8rem;}
.item.done .ichk{background:var(--gn);border-color:var(--gn);color:white;}
.itxt{flex:1;font-size:.83rem;line-height:1.4;color:var(--br);}
.itxt.alrt{font-weight:700;color:var(--rd);}
.pbadge{font-size:.6rem;background:#FFF3E0;color:var(--lt);border:1px solid #F0D8C0;border-radius:20px;padding:2px 6px;font-weight:600;flex-shrink:0;margin-top:2px;}
.item.done .pbadge{background:var(--gnb);color:var(--gn);border-color:#B8EFD0;}
.item-extras{border-top:1px dashed #DDD;padding:10px 12px;background:#FAFAF8;display:none;}
.item-extras.show{display:block;}
.ex-lbl{font-size:.65rem;font-weight:700;color:var(--md);text-transform:uppercase;letter-spacing:.8px;margin-bottom:7px;}
.obs-input{width:100%;padding:9px 11px;border-radius:8px;border:2px solid #E8D8C8;background:#FFF;font-family:'DM Sans',sans-serif;font-size:.82rem;color:var(--br);outline:none;resize:none;transition:border .2s;min-height:60px;}
.obs-input:focus{border-color:var(--gd);}
.count-row{display:flex;align-items:center;gap:10px;margin-top:8px;background:#FFF9F0;border-radius:8px;padding:10px 12px;border:1px solid #F0D8A0;}
.count-label{font-size:.78rem;color:var(--md);flex:1;font-weight:500;}
.count-input{width:80px;padding:7px 10px;border-radius:8px;border:2px solid #E8D8C8;font-family:'DM Sans',sans-serif;font-size:.95rem;font-weight:700;color:var(--br);text-align:center;outline:none;}
.count-input:focus{border-color:var(--gd);}
.count-unit{font-size:.72rem;color:var(--lt);font-weight:600;}
.count-alert{font-size:.68rem;color:var(--rd);font-weight:700;margin-top:4px;display:none;}
.count-alert.show{display:block;}
.uarea{border:2px dashed var(--gd);border-radius:var(--rs);padding:13px;text-align:center;cursor:pointer;background:#FFFDF5;position:relative;margin-top:10px;}
.uarea input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%;}
.uicon{font-size:1.3rem;margin-bottom:2px;}
.utxt{font-size:.7rem;color:var(--md);}
.tgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;margin-top:7px;}
.thumb{aspect-ratio:1;border-radius:7px;overflow:hidden;position:relative;border:2px solid var(--gn);}
.thumb img{width:100%;height:100%;object-fit:cover;}
.thrm{position:absolute;top:2px;right:2px;background:rgba(192,57,43,.85);color:white;border:none;border-radius:50%;width:17px;height:17px;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center;}
.botbar{position:fixed;bottom:0;left:0;right:0;background:var(--wm);border-top:1px solid #E8D8C8;padding:11px 15px;box-shadow:0 -4px 16px rgba(44,24,16,.1);display:flex;gap:8px;max-width:540px;margin:0 auto;z-index:150;}

/* SUCCESS */
.ok-wrap{min-height:80vh;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;padding:36px 20px;}
.ok-icon{width:76px;height:76px;background:var(--gn);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;margin-bottom:16px;box-shadow:0 0 0 12px rgba(39,174,96,.12);animation:pop .4s cubic-bezier(.175,.885,.32,1.275);}
@keyframes pop{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}
.ok-title{font-family:'DM Serif Display',serif;font-size:1.7rem;margin-bottom:7px;}
.ok-sub{color:var(--lt);font-size:.83rem;line-height:1.5;max-width:260px;margin-bottom:14px;}
.ok-details{background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:13px 17px;margin:8px 0;text-align:left;width:100%;max-width:360px;}
.ok-row{display:flex;justify-content:space-between;font-size:.8rem;padding:4px 0;border-bottom:1px solid #F0E8DC;}
.ok-row:last-child{border:none;}
.ok-row span:first-child{color:var(--md);}
.ok-row span:last-child{font-weight:600;}

/* HISTÓRICO */
.hist-filters{display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;}
.hf{padding:6px 12px;border-radius:20px;border:1.5px solid #E8D8C8;background:var(--wm);font-size:.7rem;font-weight:600;cursor:pointer;color:var(--md);font-family:'DM Sans',sans-serif;}
.hf.on{background:var(--br);color:var(--gd);border-color:var(--br);}
.hist-item{background:var(--wm);border-radius:var(--rs);border:1px solid #E8D8C8;margin-bottom:8px;overflow:hidden;}
.hi-top{display:flex;align-items:center;gap:10px;padding:11px 13px;cursor:pointer;}
.hi-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
.hi-info{flex:1;}
.hi-title{font-weight:600;font-size:.83rem;color:var(--br);}
.hi-meta{font-size:.7rem;color:var(--lt);margin-top:2px;}
.hi-pct{font-size:.85rem;font-weight:700;}
.hi-pct.g{color:var(--gn);}.hi-pct.y{color:var(--or);}.hi-pct.r{color:var(--rd);}
.hi-chevron{color:var(--lt);font-size:.8rem;transition:transform .2s;}
.hi-chevron.open{transform:rotate(180deg);}
.hi-detail{display:none;border-top:1px solid #F0E8DC;padding:12px 13px;background:#FAFAF8;}
.hi-detail.show{display:block;}
.hid-row{display:flex;gap:8px;padding:5px 0;font-size:.78rem;border-bottom:1px solid #F5EFE8;align-items:flex-start;}
.hid-row:last-child{border:none;}
.hid-status{flex-shrink:0;font-size:.8rem;}
.hid-text{flex:1;color:var(--br);line-height:1.35;}
.hid-obs{font-size:.72rem;color:var(--md);font-style:italic;margin-top:2px;}
.hid-photos{display:flex;gap:4px;margin-top:4px;flex-wrap:wrap;}
.hid-photo{width:60px;height:60px;border-radius:6px;object-fit:cover;border:1px solid #DDD;cursor:pointer;}
.empty-hist{text-align:center;color:var(--lt);font-size:.83rem;padding:32px 16px;}
.loading-hist{text-align:center;color:var(--lt);font-size:.83rem;padding:32px 16px;}

/* ADMIN */
.admin-section{background:var(--wm);border-radius:var(--r);border:1px solid #E8D8C8;padding:18px;margin-bottom:16px;}
.admin-section-title{font-family:'DM Serif Display',serif;font-size:1rem;margin-bottom:14px;}
.user-row{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #F0E8DC;}
.user-row:last-child{border:none;}
.user-avatar{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.85rem;font-weight:700;color:white;flex-shrink:0;}
.user-info{flex:1;}
.user-name{font-size:.85rem;font-weight:600;}
.user-meta{font-size:.7rem;color:var(--lt);}
.user-role{font-size:.65rem;padding:2px 8px;border-radius:20px;font-weight:700;}
.role-admin{background:#FFF9E6;color:var(--gd);border:1px solid #F0D8A0;}
.role-user{background:var(--gnb);color:var(--gn);border:1px solid #B8EFD0;}
.user-del{background:none;border:none;color:var(--rd);cursor:pointer;font-size:.85rem;padding:4px;}
.add-user-form{border-top:1px solid #E8D8C8;padding-top:14px;margin-top:4px;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;}
.badge-red{background:#FDEDEC;color:var(--rd);border:1px solid #F5B7B1;border-radius:20px;padding:2px 8px;font-size:.65rem;font-weight:700;}
.badge-green{background:var(--gnb);color:var(--gn);border:1px solid #B8EFD0;border-radius:20px;padding:2px 8px;font-size:.65rem;font-weight:700;}

/* MODAL / OVERLAY */
.modal-bg{position:fixed;inset:0;background:rgba(44,24,16,.6);z-index:8000;display:none;align-items:flex-end;justify-content:center;}
.modal-bg.show{display:flex;}
.modal{background:var(--wm);border-radius:20px 20px 0 0;padding:22px 18px;width:100%;max-width:540px;animation:slideUp .3s ease;}
@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
.overlay{position:fixed;inset:0;background:rgba(44,24,16,.55);display:none;align-items:center;justify-content:center;z-index:9999;}
.overlay.on{display:flex;}
.ov-box{background:var(--wm);border-radius:var(--r);padding:26px 22px;text-align:center;max-width:250px;}
.spinner{width:42px;height:42px;border:4px solid #E8D8C8;border-top-color:var(--gd);border-radius:50%;animation:spin .8s linear infinite;margin:0 auto 13px;}
@keyframes spin{to{transform:rotate(360deg)}}
.toast{position:fixed;bottom:85px;left:50%;transform:translateX(-50%) translateY(16px);background:var(--br);color:var(--gd);padding:9px 18px;border-radius:99px;font-size:.76rem;font-weight:600;opacity:0;transition:all .3s;white-space:nowrap;z-index:9999;}
.toast.on{opacity:1;transform:translateX(-50%) translateY(0);}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(1.3)}}
@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
</style>
</head>
<body>

<div class="overlay" id="overlay">
  <div class="ov-box"><div class="spinner"></div><div style="font-size:.85rem;color:var(--md)"><strong style="color:var(--br);display:block;margin-bottom:3px;" id="ov-txt">Enviando...</strong>Aguarde</div></div>
</div>
<div class="toast" id="toast"></div>

<!-- ZOOM FOTO -->
<div class="modal-bg" id="zoom-modal" onclick="closeZoom()">
  <div style="padding:20px;max-width:520px;width:100%;">
    <img id="zoom-img" style="width:100%;border-radius:12px;max-height:80vh;object-fit:contain;">
  </div>
</div>

<!-- ════ LOGIN ════ -->
<div class="page on" id="pg-login">
  <div style="background:var(--br);min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 20px;">
    <div style="font-family:'DM Serif Display',serif;color:var(--gd);font-size:2rem;text-align:center;margin-bottom:4px;">🎂 Casa de Bolos</div>
    <div style="color:rgba(255,255,255,.4);font-size:.72rem;letter-spacing:2px;margin-bottom:32px;">CONTROLE OPERACIONAL</div>
    <div class="login-card">
      <div class="login-title">Entrar no sistema</div>
      <div class="lf-group"><span class="lf-label">👤 Usuário</span><input class="lf-input" type="text" id="login-user" placeholder="Digite seu usuário" autocomplete="username"></div>
      <div class="lf-group"><span class="lf-label">🔒 Senha</span><input class="lf-input" type="password" id="login-pass" placeholder="Digite sua senha" autocomplete="current-password"></div>
      <div class="login-err" id="login-err">Usuário ou senha incorretos</div>
      <button class="btn" onclick="doLogin()">Entrar →</button>
    </div>
  </div>
</div>

<!-- ════ APP ════ -->
<div class="page" id="pg-app">
  <div class="hdr">
    <div class="logo">Casa de Bolos<small>CONTROLE OPERACIONAL</small></div>
    <div class="hdr-right">
      <span class="hdr-user" id="hdr-user-name"></span>
      <button class="hdr-logout" onclick="doLogout()">Sair</button>
    </div>
  </div>
  <div class="tabs" id="main-tabs">
    <button class="tab on" onclick="goTab('sel')" id="tab-sel">📋 Checklist</button>
    <button class="tab" onclick="goTab('hist')" id="tab-hist">📂 Histórico</button>
    <button class="tab" onclick="goTab('painel')" id="tab-painel" style="display:none">🏠 Painel</button>
    <button class="tab" onclick="goTab('score')" id="tab-score" style="display:none">🏆 Score</button>
    <button class="tab" onclick="goTab('ia')" id="tab-ia" style="display:none">🤖 IA</button>
    <button class="tab" onclick="goTab('auditoria')" id="tab-auditoria" style="display:none">🔍 Auditoria</button>
    <button class="tab" onclick="goTab('padrao')" id="tab-padrao" style="display:none">📸 Padrão IA</button>
    <button class="tab" onclick="goTab('estoque-ia')" id="tab-estoque-ia">🔢 Estoque IA</button>
    <button class="tab" onclick="goTab('admin')" id="tab-admin" style="display:none">⚙️ Admin</button>
  </div>

  <!-- SELEÇÃO -->
  <div style="display:none" id="scr-sel">
  <div class="body-wrap">
    <div class="sheets-bar"><div class="sdot dg"></div><div class="stext">Firebase conectado ✅</div></div>
    <h1 class="pg-title">Qual checklist<br>vai fazer?</h1>
    <p class="pg-sub">Selecione a loja e o tipo de verificação</p>
    <div class="fg"><span class="fl">📍 Loja</span>
      <div class="sw"><select id="s-store" onchange="updBtn()">
        <option value="">Escolha a loja...</option>
        <option value="meier">Méier</option>
        <option value="tijuca">Tijuca</option>
        <option value="copacabana">Copacabana</option>
        <option value="botafogo">Botafogo</option>
        <option value="ilha">Ilha do Governador</option>
      </select></div>
    </div>
    <div class="fg"><span class="fl">📋 Tipo de Checklist</span>
      <div class="cat-lbl">🏪 Atendimento Diário</div><div class="cards" id="cards-atend"></div>
      <div class="cat-lbl">🍳 Cozinha Diária</div><div class="cards" id="cards-coz"></div>
      <div class="cat-lbl">📆 Rotinas Semanais</div><div class="cards" id="cards-semanal"></div>
      <div class="cat-lbl">📊 Controles Gerais</div><div class="cards" id="cards-geral"></div>
    </div>
    <button class="btn" id="btn-start" disabled onclick="startCL()">Iniciar Checklist →</button>
  </div>
  </div>

  <!-- CHECKLIST -->
  <div style="display:none" id="scr-cl">
  <div id="pg-cl-wrap">
    <div class="cl-hdr" id="cl-hdr" style="background:var(--br);">
      <button class="cl-back" onclick="goBack()">←</button>
      <div><div class="cl-name" id="cl-title">—</div><div class="cl-sub" id="cl-sub">—</div></div>
    </div>
    <div class="prog-wrap">
      <div class="prog-row"><span>Progresso</span><span id="prog-txt">0/0</span></div>
      <div class="prog-track"><div class="prog-fill" id="prog-fill" style="width:0%"></div></div>
    </div>
    <div class="ibody" id="ibody"></div>
    <div class="botbar">
      <button class="btn-outline" onclick="goBack()">← Voltar</button>
      <button class="btn" id="btn-send" onclick="sendCL()">Enviar</button>
    </div>
  </div>
  </div>

  <!-- SUCESSO -->
  <div style="display:none" id="scr-ok">
  <div class="ok-wrap">
    <div class="ok-icon">✓</div>
    <h2 class="ok-title">Enviado!</h2>
    <p class="ok-sub">Checklist salvo no Firebase e disponível para todos.</p>
    <div class="ok-details" id="okd"></div>
    <button class="btn" style="max-width:280px;margin-top:10px;" onclick="newCL()">Novo Checklist</button>
  </div>
  </div>

  <!-- HISTÓRICO -->
  <div style="display:none" id="scr-hist">
  <div class="body-wrap">
    <h1 class="pg-title">Histórico</h1>
    <p class="pg-sub" id="hist-sub">Carregando...</p>
    <div class="hist-filters" id="hist-filters"></div>
    <div id="hist-list"><div class="loading-hist">⏳ Carregando registros do Firebase...</div></div>
  </div>
  </div>

  <!-- PAINEL DO DONO -->
  <div style="display:none" id="scr-painel">
  <div class="body-wrap">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
      <h1 class="pg-title" style="margin:0;">Painel do Dono</h1>
      <button onclick="loadPainel()" style="background:transparent;border:1px solid #E8D8C8;border-radius:99px;padding:5px 12px;font-size:.7rem;color:var(--md);cursor:pointer;font-family:inherit;">🔄 Atualizar</button>
    </div>
    <p class="pg-sub" id="painel-data">Carregando...</p>

    <!-- ALERTAS CRÍTICOS — aparecem primeiro se houver -->
    <div style="background:#FDEDEC;border:1.5px solid #F5B7B1;border-radius:var(--r);padding:14px;margin-bottom:14px;display:none;" id="painel-alertas-box">
      <div style="font-size:.75rem;font-weight:700;color:var(--rd);margin-bottom:8px;text-transform:uppercase;letter-spacing:.8px;">🚨 Alertas Críticos</div>
      <div id="painel-alertas"></div>
    </div>

    <!-- STATUS LOJAS — cards grandes com score visual -->
    <div style="font-size:.7rem;font-weight:700;color:var(--md);text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px;">📍 Status das lojas hoje</div>
    <div id="painel-lojas" style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px;"></div>

    <!-- RANKING -->
    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:10px;text-transform:uppercase;letter-spacing:.8px;">🏆 Ranking geral das lojas</div>
      <div id="painel-ranking"></div>
    </div>

    <!-- REINCIDÊNCIAS -->
    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:10px;text-transform:uppercase;letter-spacing:.8px;">🔁 Falhas recorrentes</div>
      <div id="painel-reincidencias"><div style="font-size:.8rem;color:var(--lt);">Calculando...</div></div>
    </div>

    <!-- COBRAR AGORA -->
    <div style="background:#FEF9E7;border:1.5px solid #F9E79F;border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <div style="font-size:.75rem;font-weight:700;color:var(--or);margin-bottom:10px;text-transform:uppercase;letter-spacing:.8px;">⚡ O que cobrar agora</div>
      <div id="painel-cobrar"></div>
    </div>

    <!-- RELATÓRIO INTELIGENTE IA -->
    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:6px;text-transform:uppercase;letter-spacing:.8px;">🤖 Relatório inteligente IA</div>
      <p style="font-size:.78rem;color:var(--lt);margin-bottom:10px;line-height:1.5;">A IA analisa padrões ao longo do tempo e gera insights como: "Loja Botafogo falha consistentemente às sextas-feiras."</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
        <select id="rel-ia-periodo" style="padding:8px 10px;border-radius:var(--rs);border:1px solid #E8D8C8;font-family:inherit;font-size:.82rem;">
          <option value="7">Últimos 7 dias</option>
          <option value="15">Últimos 15 dias</option>
          <option value="30">Últimos 30 dias</option>
        </select>
        <select id="rel-ia-loja" style="padding:8px 10px;border-radius:var(--rs);border:1px solid #E8D8C8;font-family:inherit;font-size:.82rem;">
          <option value="todas">Todas as lojas</option>
          <option value="meier">Méier</option>
          <option value="tijuca">Tijuca</option>
          <option value="copacabana">Copacabana</option>
          <option value="botafogo">Botafogo</option>
          <option value="ilha">Ilha do Governador</option>
        </select>
      </div>
      <button class="btn" onclick="gerarRelatorioIA()" id="btn-rel-ia">🤖 Gerar relatório com IA</button>
      <div id="rel-ia-resultado" style="display:none;margin-top:12px;"></div>
    </div>
  </div>
  </div>

  <!-- SCORE OPERACIONAL -->
  <div style="display:none" id="scr-score">
  <div class="body-wrap">
    <h1 class="pg-title">Score Operacional</h1>
    <p class="pg-sub">Conformidade por loja, gerente e turno</p>

    <!-- SCORE GERAL -->
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px;">
      <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;text-align:center;">
        <div style="font-family:'DM Serif Display',serif;font-size:2rem;color:var(--gn);" id="score-rede">—</div>
        <div style="font-size:.65rem;color:var(--lt);text-transform:uppercase;letter-spacing:.8px;margin-top:2px;">Score Rede</div>
      </div>
      <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;text-align:center;">
        <div style="font-family:'DM Serif Display',serif;font-size:2rem;color:var(--or);" id="score-pendencias">—</div>
        <div style="font-size:.65rem;color:var(--lt);text-transform:uppercase;letter-spacing:.8px;margin-top:2px;">Pendências</div>
      </div>
      <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;text-align:center;">
        <div style="font-family:'DM Serif Display',serif;font-size:2rem;color:var(--rd);" id="score-criticos">—</div>
        <div style="font-size:.65rem;color:var(--lt);text-transform:uppercase;letter-spacing:.8px;margin-top:2px;">Críticos</div>
      </div>
    </div>

    <!-- SCORE POR LOJA -->
    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:12px;text-transform:uppercase;letter-spacing:.8px;">Score por Loja</div>
      <div id="score-lojas"></div>
    </div>

    <!-- REINCIDÊNCIAS DETALHADAS -->
    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:12px;text-transform:uppercase;letter-spacing:.8px;">🔁 Reincidências 30 dias</div>
      <div id="score-reincidencias"><div style="font-size:.8rem;color:var(--lt);">Calculando...</div></div>
    </div>

    <!-- PLANOS DE AÇÃO ABERTOS -->
    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:12px;text-transform:uppercase;letter-spacing:.8px;">📋 Planos de Ação Abertos</div>
      <div id="score-acoes"><div style="font-size:.8rem;color:var(--lt);">Nenhum plano de ação aberto.</div></div>
    </div>

    <button class="btn" onclick="loadScore()">🔄 Atualizar score</button>

    <!-- EXPORTAÇÃO -->
    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-top:14px;">
      <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:10px;text-transform:uppercase;letter-spacing:.8px;">📤 Exportar Relatórios</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <select id="exp-tipo" style="font-size:.8rem;padding:8px;border-radius:var(--rs);border:1px solid #E8D8C8;font-family:inherit;">
          <option value="diario">Relatório Diário</option>
          <option value="semanal">Relatório Semanal</option>
          <option value="mensal">Relatório Mensal</option>
          <option value="sanitario">Relatório Sanitário</option>
          <option value="nao_conformidades">Não Conformidades</option>
          <option value="plano_acao">Plano de Ação</option>
        </select>
        <select id="exp-loja" style="font-size:.8rem;padding:8px;border-radius:var(--rs);border:1px solid #E8D8C8;font-family:inherit;">
          <option value="todas">Todas as lojas</option>
          <option value="meier">Méier</option>
          <option value="tijuca">Tijuca</option>
          <option value="copacabana">Copacabana</option>
          <option value="botafogo">Botafogo</option>
          <option value="ilha">Ilha do Governador</option>
        </select>
      </div>
      <div style="display:flex;gap:8px;margin-top:8px;">
        <button class="btn" style="flex:1;background:var(--rd);" onclick="exportarPDF()">📄 Exportar PDF</button>
        <button class="btn" style="flex:1;background:var(--gn);" onclick="exportarExcel()">📊 Exportar Excel</button>
      </div>
    </div>
  </div>
  </div>

  <!-- MODO AUDITORIA -->
  <div style="display:none" id="scr-auditoria">
  <div class="body-wrap">
    <h1 class="pg-title">Modo Auditoria</h1>
    <p class="pg-sub">Auditoria surpresa — compare com o que a loja reportou</p>

    <div style="background:#FEF9E7;border:1px solid #F9E79F;border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <div style="font-size:.75rem;font-weight:700;color:var(--or);margin-bottom:6px;">⚡ Auditoria Surpresa</div>
      <p style="font-size:.82rem;color:var(--br);line-height:1.5;">Você está em modo auditor. Os dados do checklist da equipe serão comparados com o que você encontrar agora.</p>
    </div>

    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <span class="fl">Loja a auditar</span>
      <div class="sw"><select id="aud-loja">
        <option value="meier">Méier</option>
        <option value="tijuca">Tijuca</option>
        <option value="copacabana">Copacabana</option>
        <option value="botafogo">Botafogo</option>
        <option value="ilha">Ilha do Governador</option>
      </select></div>
    </div>

    <div id="aud-resultado" style="margin-bottom:14px;"></div>

    <button class="btn" onclick="iniciarAuditoria()">🔍 Iniciar Auditoria Surpresa</button>
  </div>
  </div>

  <!-- IA -->
  <div style="display:none" id="scr-ia">
  <div class="body-wrap">
    <h1 class="pg-title">Inteligência IA</h1>
    <p class="pg-sub">Análise automática da sua operação com Claude AI</p>

    <!-- CHAT IA -->
    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);overflow:hidden;margin-bottom:14px;">
      <div style="background:var(--br);padding:12px 16px;display:flex;align-items:center;gap:8px;">
        <div style="width:8px;height:8px;background:var(--gn);border-radius:50%;animation:pulse 2s infinite;"></div>
        <span style="color:var(--gd);font-size:.85rem;font-weight:600;">Assistente IA — Online</span>
        <span style="color:rgba(255,255,255,.3);font-size:.65rem;margin-left:auto;">Claude</span>
      </div>
      <div style="padding:14px;min-height:220px;max-height:320px;overflow-y:auto;display:flex;flex-direction:column;gap:10px;" id="ia-messages">
        <div style="background:#F0E8DC;border-radius:12px 12px 12px 4px;padding:10px 14px;font-size:.82rem;line-height:1.5;max-width:88%;color:var(--br);">
          Olá! Sou a IA do sistema Casa de Bolos. Posso analisar conformidade, identificar padrões de risco e gerar relatórios inteligentes.<br><br>Como posso ajudar?
        </div>
      </div>
      <!-- Quick prompts -->
      <div style="padding:8px 14px;border-top:1px solid #E8D8C8;display:flex;gap:6px;flex-wrap:wrap;">
        <button onclick="iaQuick('Qual loja está com pior desempenho?')" style="font-size:.65rem;padding:4px 10px;border-radius:99px;border:1px solid #E8D8C8;background:transparent;color:var(--md);cursor:pointer;font-family:inherit;">🏪 Pior loja</button>
        <button onclick="iaQuick('Quais itens são mais esquecidos nos checklists?')" style="font-size:.65rem;padding:4px 10px;border-radius:99px;border:1px solid #E8D8C8;background:transparent;color:var(--md);cursor:pointer;font-family:inherit;">⚠️ Mais esquecidos</button>
        <button onclick="iaQuick('Gere recomendações para melhorar a operação')" style="font-size:.65rem;padding:4px 10px;border-radius:99px;border:1px solid #E8D8C8;background:transparent;color:var(--md);cursor:pointer;font-family:inherit;">💡 Recomendações</button>
        <button onclick="iaQuick('Analise as reincidências de falhas')" style="font-size:.65rem;padding:4px 10px;border-radius:99px;border:1px solid #E8D8C8;background:transparent;color:var(--md);cursor:pointer;font-family:inherit;">🔁 Reincidências</button>
      </div>
      <div style="padding:10px 14px;border-top:1px solid #E8D8C8;display:flex;gap:8px;">
        <input id="ia-input" style="flex:1;padding:9px 14px;border-radius:99px;border:2px solid #E8D8C8;font-family:inherit;font-size:.83rem;color:var(--br);outline:none;" placeholder="Pergunte sobre a operação..." onkeydown="if(event.key==='Enter')iaEnviar()">
        <button onclick="iaEnviar()" style="background:var(--br);color:var(--gd);border:none;border-radius:50%;width:38px;height:38px;font-size:1rem;cursor:pointer;flex-shrink:0;">→</button>
      </div>
    </div>

    <!-- GERAR RELATÓRIO IA -->
    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:10px;text-transform:uppercase;letter-spacing:.8px;">📊 Relatório Automático com IA</div>
      <select id="ia-rel-periodo" style="width:100%;margin-bottom:8px;padding:9px 12px;border-radius:var(--rs);border:1px solid #E8D8C8;font-family:inherit;font-size:.85rem;">
        <option>Hoje</option><option>Esta semana</option><option>Este mês</option>
      </select>
      <select id="ia-rel-tipo" style="width:100%;margin-bottom:8px;padding:9px 12px;border-radius:var(--rs);border:1px solid #E8D8C8;font-family:inherit;font-size:.85rem;">
        <option value="geral">Relatório geral</option>
        <option value="sanitario">Relatório sanitário</option>
        <option value="nao_conformidades">Não conformidades</option>
        <option value="gerente">Score por gerente</option>
        <option value="reincidencias">Reincidências</option>
      </select>
      <button class="btn" onclick="iaRelatorio()" style="margin-bottom:8px;">Gerar relatório com IA</button>
      <div id="ia-relatorio-result" style="margin-top:12px;font-size:.82rem;line-height:1.6;color:var(--br);display:none;"></div>
    </div>

    <!-- ALERTAS AUTOMÁTICOS -->
    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:10px;text-transform:uppercase;letter-spacing:.8px;">🔔 Configurar Alertas</div>
      <div style="font-size:.8rem;color:var(--md);margin-bottom:10px;">Alertas automáticos por WhatsApp e Email</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <label style="display:flex;align-items:center;gap:8px;font-size:.82rem;">
          <input type="checkbox" id="alerta-checklist" checked> Checklist não feito
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:.82rem;">
          <input type="checkbox" id="alerta-critico" checked> Item crítico reprovado
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:.82rem;">
          <input type="checkbox" id="alerta-temperatura"> Temperatura fora do padrão
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:.82rem;">
          <input type="checkbox" id="alerta-validade" checked> Validade vencida
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:.82rem;">
          <input type="checkbox" id="alerta-reincidencia" checked> Falha recorrente
        </label>
        <label style="display:flex;align-items:center;gap:8px;font-size:.82rem;">
          <input type="checkbox" id="alerta-score"> Queda de score
        </label>
      </div>
      <div style="margin-top:10px;">
        <span class="fl">Email para alertas</span>
        <input type="email" id="alerta-email" placeholder="gerente@casadebolos.com.br" style="width:100%;padding:9px 12px;border-radius:var(--rs);border:1px solid #E8D8C8;font-family:inherit;font-size:.85rem;">
      </div>
      <button class="btn" style="margin-top:10px;" onclick="salvarAlertas()">💾 Salvar configurações</button>
    </div>

    <!-- APROVAÇÃO DE PLANOS DE AÇÃO -->
    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:10px;text-transform:uppercase;letter-spacing:.8px;">✅ Aprovar Planos de Ação</div>
      <div id="aprovacao-lista"><div style="font-size:.8rem;color:var(--lt);">Nenhum plano aguardando aprovação.</div></div>
      <button class="btn" style="margin-top:10px;" onclick="carregarAprovacoes()">🔄 Atualizar</button>
    </div>
  </div>
  </div>
  <!-- PADRÃO IA -->
  <div style="display:none" id="scr-padrao">
  <div class="body-wrap">
    <h1 class="pg-title">Padrão IA</h1>
    <p class="pg-sub">Cadastre fotos padrão e compare automaticamente com fotos enviadas</p>

    <!-- ABAS INTERNAS -->
    <div style="display:flex;gap:8px;margin-bottom:16px;border-bottom:2px solid #E8D8C8;padding-bottom:0;">
      <button onclick="padraTab('cadastrar')" id="ptab-cadastrar" style="padding:8px 14px;border:none;background:transparent;font-family:inherit;font-size:.75rem;font-weight:700;color:var(--gd);border-bottom:2px solid var(--gd);margin-bottom:-2px;cursor:pointer;">📸 Cadastrar Padrão</button>
      <button onclick="padraTab('comparar')" id="ptab-comparar" style="padding:8px 14px;border:none;background:transparent;font-family:inherit;font-size:.75rem;font-weight:600;color:var(--lt);cursor:pointer;">🔍 Comparar Foto</button>
      <button onclick="padraTab('historico')" id="ptab-historico" style="padding:8px 14px;border:none;background:transparent;font-family:inherit;font-size:.75rem;font-weight:600;color:var(--lt);cursor:pointer;">📊 Histórico</button>
    </div>

    <!-- CADASTRAR PADRÃO -->
    <div id="padrao-cadastrar">
      <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-bottom:14px;">
        <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:12px;text-transform:uppercase;letter-spacing:.8px;">Novo padrão de referência</div>

        <div style="margin-bottom:12px;">
          <span class="fl">Categoria do padrão</span>
          <div class="sw"><select id="pad-categoria" onchange="updPadCategoria()">
            <option value="vitrine">🛍️ Vitrine e Balcão</option>
            <option value="limpeza">🧹 Limpeza Geral</option>
            <option value="uniforme">👕 Uniforme da Equipe</option>
            <option value="estoque">📦 Estoque Organizado</option>
            <option value="cozinha">👨‍🍳 Cozinha e Produção</option>
            <option value="embalagens">📫 Embalagens</option>
            <option value="geladeira">🥶 Geladeira e Câmara</option>
            <option value="banheiro">🚿 Banheiro</option>
          </select></div>
        </div>

        <div style="margin-bottom:12px;">
          <span class="fl">Nome descritivo</span>
          <input type="text" id="pad-nome" placeholder="Ex: Vitrine de abertura — segunda a sexta" style="width:100%;padding:10px 13px;border-radius:var(--rs);border:2px solid #E8D8C8;font-family:inherit;font-size:.88rem;color:var(--br);outline:none;">
        </div>

        <div style="margin-bottom:12px;">
          <span class="fl">Critérios do padrão ideal</span>
          <textarea id="pad-criterios" placeholder="Descreva o que deve estar correto nesta foto:&#10;- Balcão limpo e organizado&#10;- Todos os produtos identificados&#10;- Sem sujeira ou resíduos visíveis&#10;- Iluminação adequada" style="width:100%;padding:10px 13px;border-radius:var(--rs);border:2px solid #E8D8C8;font-family:inherit;font-size:.83rem;color:var(--br);outline:none;resize:vertical;min-height:90px;line-height:1.5;"></textarea>
        </div>

        <div style="margin-bottom:12px;">
          <span class="fl">Nível de severidade</span>
          <div class="sw"><select id="pad-severidade">
            <option value="critico">🔴 Crítico — Operação não pode abrir sem conformidade</option>
            <option value="alto">🟠 Alto — Deve ser corrigido no mesmo turno</option>
            <option value="medio">🟡 Médio — Corrigir no prazo de 24h</option>
            <option value="baixo">🟢 Baixo — Registrar e melhorar gradualmente</option>
          </select></div>
        </div>

        <!-- UPLOAD FOTOS PADRÃO -->
        <div style="margin-bottom:12px;">
          <span class="fl">📸 Fotos padrão (mín. 1, máx. 5 por ângulo)</span>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:6px;" id="pad-angulos">
            <div>
              <div style="font-size:.65rem;color:var(--md);font-weight:600;margin-bottom:4px;">Ângulo frontal</div>
              <div class="uarea" style="padding:10px;min-height:80px;position:relative;">
                <input type="file" accept="image/*" multiple onchange="addPadFoto(event,'frontal')" style="position:absolute;inset:0;opacity:0;cursor:pointer;">
                <div style="font-size:.7rem;color:var(--lt);">📷 Frontal</div>
              </div>
              <div id="pad-thumb-frontal" style="display:flex;gap:3px;flex-wrap:wrap;margin-top:4px;"></div>
            </div>
            <div>
              <div style="font-size:.65rem;color:var(--md);font-weight:600;margin-bottom:4px;">Ângulo lateral</div>
              <div class="uarea" style="padding:10px;min-height:80px;position:relative;">
                <input type="file" accept="image/*" multiple onchange="addPadFoto(event,'lateral')" style="position:absolute;inset:0;opacity:0;cursor:pointer;">
                <div style="font-size:.7rem;color:var(--lt);">📷 Lateral</div>
              </div>
              <div id="pad-thumb-lateral" style="display:flex;gap:3px;flex-wrap:wrap;margin-top:4px;"></div>
            </div>
            <div>
              <div style="font-size:.65rem;color:var(--md);font-weight:600;margin-bottom:4px;">Detalhe/Close</div>
              <div class="uarea" style="padding:10px;min-height:80px;position:relative;">
                <input type="file" accept="image/*" multiple onchange="addPadFoto(event,'detalhe')" style="position:absolute;inset:0;opacity:0;cursor:pointer;">
                <div style="font-size:.7rem;color:var(--lt);">📷 Detalhe</div>
              </div>
              <div id="pad-thumb-detalhe" style="display:flex;gap:3px;flex-wrap:wrap;margin-top:4px;"></div>
            </div>
          </div>
        </div>

        <button class="btn" onclick="salvarPadrao()">💾 Salvar padrão de referência</button>
      </div>

      <!-- PADRÕES CADASTRADOS -->
      <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;">
        <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:12px;text-transform:uppercase;letter-spacing:.8px;">Padrões cadastrados</div>
        <div id="pad-lista"><div style="font-size:.82rem;color:var(--lt);">Nenhum padrão cadastrado ainda.</div></div>
      </div>
    </div>

    <!-- COMPARAR FOTO -->
    <div id="padrao-comparar" style="display:none;">
      <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-bottom:14px;">
        <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:12px;text-transform:uppercase;letter-spacing:.8px;">Analisar conformidade</div>

        <div style="margin-bottom:12px;">
          <span class="fl">Padrão de referência</span>
          <div class="sw"><select id="comp-padrao-sel" onchange="updCompPadrao()">
            <option value="">Selecione o padrão...</option>
          </select></div>
        </div>

        <div id="comp-padrao-preview" style="display:none;margin-bottom:12px;">
          <div style="font-size:.7rem;font-weight:600;color:var(--md);margin-bottom:6px;">FOTOS PADRÃO (REFERÊNCIA)</div>
          <div id="comp-padrao-fotos" style="display:flex;gap:6px;flex-wrap:wrap;"></div>
          <div id="comp-padrao-criterios" style="font-size:.78rem;color:var(--md);margin-top:8px;padding:8px;background:#F5EDE0;border-radius:var(--rs);line-height:1.5;"></div>
        </div>

        <div style="margin-bottom:12px;">
          <span class="fl">📷 Foto enviada pelo funcionário</span>
          <div class="uarea" id="comp-drop">
            <input type="file" accept="image/*" capture="environment" onchange="addCompFoto(event)">
            <div class="uicon">📷</div>
            <div class="utxt"><strong>Tirar foto agora</strong> ou selecionar da galeria</div>
          </div>
          <div id="comp-preview" style="margin-top:8px;display:none;">
            <img id="comp-img" style="width:100%;border-radius:var(--rs);max-height:220px;object-fit:cover;">
          </div>
        </div>

        <div style="margin-bottom:12px;">
          <span class="fl">Loja e responsável</span>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div class="sw"><select id="comp-loja">
              <option value="meier">Méier</option>
              <option value="tijuca">Tijuca</option>
              <option value="copacabana">Copacabana</option>
              <option value="botafogo">Botafogo</option>
              <option value="ilha">Ilha do Governador</option>
            </select></div>
            <input type="text" id="comp-responsavel" placeholder="Nome do responsável" style="padding:10px 13px;border-radius:var(--rs);border:2px solid #E8D8C8;font-family:inherit;font-size:.85rem;outline:none;">
          </div>
        </div>

        <button class="btn" id="btn-comparar" onclick="compararFoto()">🔍 Analisar com IA</button>
      </div>

      <!-- RESULTADO DA ANÁLISE -->
      <div id="comp-resultado" style="display:none;">
        <div style="background:var(--wm);border:2px solid #E8D8C8;border-radius:var(--r);padding:16px;margin-bottom:14px;" id="comp-resultado-card">
        </div>
      </div>
    </div>

    <!-- HISTÓRICO DE ANÁLISES -->
    <div id="padrao-historico" style="display:none;">
      <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <div style="font-size:.75rem;font-weight:700;color:var(--md);text-transform:uppercase;letter-spacing:.8px;">Histórico de análises IA</div>
          <button onclick="loadPadraoHist()" style="font-size:.7rem;padding:4px 10px;border-radius:99px;border:1px solid #E8D8C8;background:transparent;color:var(--md);cursor:pointer;font-family:inherit;">🔄 Atualizar</button>
        </div>
        <div id="pad-historico-lista"><div style="font-size:.82rem;color:var(--lt);">Nenhuma análise registrada.</div></div>
      </div>
    </div>

  </div>
  </div>
  <!-- ESTOQUE IA -->
  <div style="display:none" id="scr-estoque-ia">
  <div class="body-wrap">
    <h1 class="pg-title">Estoque IA</h1>
    <p class="pg-sub">Tire foto do estoque e a IA conta os itens automaticamente</p>

    <!-- INSTRUÇÃO -->
    <div style="background:#EAF5EE;border:1px solid #B8EFD0;border-radius:var(--r);padding:12px 14px;margin-bottom:14px;display:flex;gap:10px;align-items:flex-start;">
      <span style="font-size:1.2rem;">💡</span>
      <div style="font-size:.8rem;color:var(--br);line-height:1.6;">
        <strong>Como funciona:</strong> tire uma foto do estoque de um item específico (ex: prateleira de embalagens 32). A IA vai contar visualmente e preencher a quantidade automaticamente no checklist.
      </div>
    </div>

    <!-- SELEÇÃO DO ITEM -->
    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:12px;text-transform:uppercase;letter-spacing:.8px;">1. Selecionar item do estoque</div>

      <div style="margin-bottom:10px;">
        <span class="fl">Categoria</span>
        <div class="sw"><select id="est-categoria" onchange="updEstItens()">
          <option value="embalagens">📦 Embalagens</option>
          <option value="materias">🥚 Matérias-primas</option>
          <option value="limpeza">🧴 Produtos de limpeza</option>
          <option value="personalizado">✏️ Personalizado</option>
        </select></div>
      </div>

      <div style="margin-bottom:10px;">
        <span class="fl">Item específico</span>
        <div class="sw"><select id="est-item">
          <option value="Embalagem 32">Embalagem 32</option>
          <option value="Embalagem 50">Embalagem 50</option>
          <option value="Embalagem 56">Embalagem 56</option>
          <option value="Sacola média">Sacola média</option>
          <option value="Sacola grande">Sacola grande</option>
          <option value="BoloBag">BoloBag</option>
          <option value="Embalagem iFood">Embalagem iFood</option>
          <option value="Embalagem de presente">Embalagem de presente</option>
          <option value="Papel acoplado (rolos)">Papel acoplado</option>
          <option value="Velas">Velas</option>
          <option value="Granulado (potes)">Granulado</option>
        </select></div>
      </div>

      <div id="est-item-custom" style="display:none;margin-bottom:10px;">
        <span class="fl">Nome do item</span>
        <input type="text" id="est-item-custom-val" placeholder="Ex: Farinha de trigo sem fermento" style="width:100%;padding:10px 13px;border-radius:var(--rs);border:2px solid #E8D8C8;font-family:inherit;font-size:.85rem;outline:none;">
      </div>

      <div style="margin-bottom:10px;">
        <span class="fl">Unidade de medida</span>
        <div class="sw"><select id="est-unidade">
          <option value="unidades">Unidades (un.)</option>
          <option value="pacotes">Pacotes</option>
          <option value="caixas">Caixas</option>
          <option value="rolos">Rolos</option>
          <option value="kg">Quilos (kg)</option>
          <option value="litros">Litros</option>
        </select></div>
      </div>
    </div>

    <!-- FOTO -->
    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;margin-bottom:14px;">
      <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:12px;text-transform:uppercase;letter-spacing:.8px;">2. Tirar foto do estoque</div>

      <div class="uarea" id="est-drop">
        <input type="file" accept="image/*" capture="environment" onchange="estAddFoto(event)">
        <div class="uicon">📷</div>
        <div class="utxt"><strong>Tirar foto agora</strong><br><span style="font-size:.68rem;color:var(--lt);">Enquadre bem o estoque do item selecionado</span></div>
      </div>

      <div id="est-preview" style="display:none;margin-top:10px;">
        <img id="est-img" style="width:100%;border-radius:var(--rs);max-height:260px;object-fit:cover;border:2px solid #E8D8C8;">
        <div style="display:flex;gap:8px;margin-top:8px;">
          <button onclick="analisarEstoque()" id="btn-est-analisar" class="btn" style="flex:2;">🔢 Contar com IA</button>
          <button onclick="estNovaFoto()" style="flex:1;padding:10px;border-radius:99px;border:1px solid #E8D8C8;background:transparent;color:var(--md);font-family:inherit;font-size:.82rem;cursor:pointer;">📷 Nova foto</button>
        </div>
      </div>
    </div>

    <!-- RESULTADO -->
    <div id="est-resultado" style="display:none;">
      <div style="background:var(--wm);border:2px solid #E8D8C8;border-radius:var(--r);padding:16px;margin-bottom:14px;">
        <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:12px;text-transform:uppercase;letter-spacing:.8px;">📊 Resultado da contagem</div>
        <div id="est-resultado-conteudo"></div>
      </div>
    </div>

    <!-- HISTÓRICO DE CONTAGENS -->
    <div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:.75rem;font-weight:700;color:var(--md);text-transform:uppercase;letter-spacing:.8px;">📋 Últimas contagens</div>
        <button onclick="loadEstHist()" style="font-size:.68rem;padding:4px 10px;border-radius:99px;border:1px solid #E8D8C8;background:transparent;color:var(--md);cursor:pointer;font-family:inherit;">🔄</button>
      </div>
      <div id="est-hist"><div style="font-size:.82rem;color:var(--lt);">Nenhuma contagem registrada.</div></div>
    </div>
  </div>
  </div>
  <!-- ADMIN -->
  <div style="display:none" id="scr-admin">
  <div class="body-wrap">
    <h1 class="pg-title">Admin</h1>
    <p class="pg-sub">Gerencie usuários e configurações</p>
    <div class="admin-section">
      <div class="admin-section-title">👥 Usuários Cadastrados</div>
      <div id="users-list"></div>
      <div class="add-user-form">
        <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:10px;text-transform:uppercase;letter-spacing:.8px;">+ Novo Usuário</div>
        <div class="form-row">
          <div><span class="fl">Login</span><input type="text" id="nu-login" placeholder="ex: joao.silva"></div>
          <div><span class="fl">Senha</span><input type="password" id="nu-pass" placeholder="mínimo 4 dígitos"></div>
        </div>
        <div class="form-row">
          <div><span class="fl">Nome completo</span><input type="text" id="nu-name" placeholder="João Silva"></div>
          <div><span class="fl">Loja</span>
            <div class="sw"><select id="nu-store">
              <option value="todas">Todas as lojas</option>
              <option value="meier">Méier</option>
              <option value="tijuca">Tijuca</option>
              <option value="copacabana">Copacabana</option>
              <option value="botafogo">Botafogo</option>
              <option value="ilha">Ilha do Governador</option>
            </select></div>
          </div>
        </div>
        <button class="btn" onclick="addUser()">Cadastrar Usuário</button>
      </div>
    </div>
    <div class="admin-section">
      <div class="admin-section-title">📊 Estatísticas Firebase</div>
      <div id="admin-stats" style="font-size:.83rem;color:var(--md);">Carregando...</div>
    </div>
  </div>
  </div>

</div><!-- fim pg-app -->

<script type="module">
// ═══════════════════════════════════════════════
//  FIREBASE — CARREGAMENTO DINÂMICO (não bloqueia o app)
// ═══════════════════════════════════════════════
const firebaseConfig = {
  apiKey: "AIzaSyDWrPl9XrcFGQB_X13Pa1RC3nwqUz2Oj-g",
  authDomain: "casa-de-bolos-checklist.firebaseapp.com",
  projectId: "casa-de-bolos-checklist",
  storageBucket: "casa-de-bolos-checklist.firebasestorage.app",
  messagingSenderId: "912637980142",
  appId: "1:912637980142:web:6c10825f5ac055e75f32ff"
};

// Firebase carrega em background — app funciona mesmo sem ele
let db = null;
let collection, addDoc, getDocs, query, where, doc, updateDoc;
let fbReady = false;
let fbError = false;

async function initFirebase(){
  try{
    const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
    const fs = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
    collection = fs.collection;
    addDoc = fs.addDoc;
    getDocs = fs.getDocs;
    query = fs.query;
    where = fs.where;
    doc = fs.doc;
    updateDoc = fs.updateDoc;
    const app = initializeApp(firebaseConfig);
    db = fs.getFirestore(app);
    fbReady = true;
    console.log('✅ Firebase conectado');
    // Atualiza indicador de status
    const bar = document.querySelector('.stext');
    if(bar) bar.textContent = 'Firebase conectado ✅';
  }catch(e){
    fbError = true;
    console.warn('⚠️ Firebase não disponível — modo offline:', e.message);
    const bar = document.querySelector('.stext');
    if(bar){ bar.textContent = '⚠️ Modo offline — dados salvos localmente'; bar.style.color='var(--or)';}
    const dot = document.querySelector('.sdot');
    if(dot) dot.style.background='var(--or)';
  }
}

// Inicia Firebase em background sem bloquear
initFirebase();

// ═══════════════════════════════════════════════
//  CONSTANTES
// ═══════════════════════════════════════════════
const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbx5ZdcxpuMSlIB2Jivhai-tKNXUEVjEUUiyI33LYnkumKLxxm0LXSp-9vvPQeqj11P18g/exec';
const WPP_NUM   = '5521982792825';
const WPP_KEY   = '2540368';
const STORES    = {meier:'Méier',tijuca:'Tijuca',copacabana:'Copacabana',botafogo:'Botafogo',ilha:'Ilha do Governador'};

// ═══════════════════════════════════════════════
//  USUÁRIOS MASTER
// ═══════════════════════════════════════════════
const MASTER_USERS = [
  {login:'admin',      pass:'admin123',  name:'Marcio (Admin)',  store:'todas', role:'admin'},
  {login:'meier',      pass:'35807339',  name:'Loja Meier',      store:'meier', role:'user'},
  {login:'botafogo',   pass:'39888893',  name:'Loja Botafogo',   store:'botafogo', role:'user'},
  {login:'copacabana', pass:'39865914',  name:'Loja Copacabana', store:'copacabana', role:'user'},
  {login:'tijuca',     pass:'31739558',  name:'Loja Tijuca',     store:'tijuca', role:'user'},
  {login:'ilha',       pass:'21371698',  name:'Loja Ilha',       store:'ilha', role:'user'},
  {login:'helen',      pass:'991330105', name:'Helen Mendes',    store:'todas', role:'user'},
  {login:'fabiola',    pass:'979766647', name:'Fabiola Felinto', store:'todas', role:'user'},
];

function getUsers(){
  const local = JSON.parse(localStorage.getItem('cb_users')||'[]');
  const merged = [...MASTER_USERS];
  local.forEach(u=>{ if(!merged.find(m=>m.login===u.login)) merged.push(u); });
  return merged;
}
function saveUsers(u){
  const soLocal = u.filter(x=>!MASTER_USERS.find(m=>m.login===x.login));
  localStorage.setItem('cb_users',JSON.stringify(soLocal));
}

// ═══════════════════════════════════════════════
//  CHECKLISTS
// ═══════════════════════════════════════════════
const CL={
  ab_atend:{cat:'atend',name:'Abertura Atendimento',icon:'🌅',color:'#D4A843',sections:[
    {title:'Apresentação Pessoal',items:[
      {t:'Uniforme limpo, sapatos limpos, sem brincos, piercing, unhas grandes, anéis e cordão',p:true},
      {t:'Verificar se máquinas de cartão e telefone estão carregados',p:false},
      {t:'Ligar o computador e abrir o sistema de notas',p:false},
      {t:'FOTO GERAL DO ATENDIMENTO: balcão, geladeira de pote, armário de velas e BoloBag, armário de papel acoplado — tudo limpo e organizado',p:true},
    ]},
    {title:'Contagem de Embalagens — Abertura',items:[
      {t:'Sacola média',p:true,count:false,min:20},
      {t:'Sacola grande',p:true,count:false,min:20},
      {t:'Embalagem de presente',p:true,count:true,min:20},
      {t:'Embalagem 32',p:true,count:true,min:20},
      {t:'Embalagem 50',p:true,count:true,min:20},
      {t:'Embalagem 56',p:true,count:true,min:20},
      {t:'Embalagem iFood',p:true,count:true,min:20},
      {t:'Papel acoplado (rolos)',p:true,count:true,min:5},
      {t:'Velas',p:true,count:true,min:20},
      {t:'Granulado (potes)',p:true,count:true,min:5},
      {t:'BoloBag',p:true,count:true,min:20},
    ]},
    {title:'Preparo da Vitrine',items:[
      {t:'Tirar coberturas de chocolate, ganache, aniversário de chocolate da geladeira, doce de leite e encher saco de churros',p:true},
      {t:'Separar 3 espátulas, copos de cobertura, balança, reabastecer papel acoplado, granulado, sacola média e grande, embalagem iFood, colher, guardanapo, faca, velas e BoloBag',p:true},
      {t:'Verificar validade dos bolos e bolos de pote na geladeira',p:false},
      {t:'Olhar bolos e potes prontos (sobra do dia anterior) e atualizar iFood e 99Food',p:true},
    ]},
    {title:'Cardápio & Sistemas',items:[
      {t:'Olhar caderno de produção e atualizar cardápio Web, iFood e 99Food',p:false},
      {t:'Separar as encomendas dos bolos que já estão prontos',p:false},
      {t:'Começar a responder clientes do WhatsApp',p:false},
      {t:'Fazer lista de transmissão até às 10:00',p:false},
    ]},
    {title:'Pós-Venda',items:[
      {t:'Realizar pós-venda e verificar reclamações. Problema não resolvível: encaminhar ao responsável via WhatsApp IMEDIATAMENTE',p:false},
    ]},
  ]},
  delivery:{cat:'atend',name:'Rotina Delivery',icon:'🛵',color:'#2471A3',sections:[
    {title:'Abertura & Preparo',items:[
      {t:'Limpeza da mesa de apoio, abastecimento com papel acoplado, sacolas, etiquetas. Verificar e abastecer impressora',p:true},
      {t:'Separar pedidos agendados. Verificar bolos para montagem e começar a montar',p:false},
      {t:'Acessar Cardápio Web, iFood e 99Food e atualizar os sabores disponíveis',p:false},
      {t:'Revisar mensagens WhatsApp — NENHUM cliente pode ficar sem resposta',p:false},
      {t:'Confirmar se entregas reservadas são para aquele horário e data',p:false},
    ]},
    {title:'Operação de Entregas',items:[
      {t:'Liberar entregadores com pedidos separados e confirmar forma de pagamento',p:false},
      {t:'Registrar no Cardápio Web os pedidos que cada entregador está saindo e dar saída no sistema',p:false},
      {t:'ENTREGADORES SÓ PODEM SAIR COM MÁQUINAS CARREGADAS',p:false},
      {t:'A cada retorno do entregador: OBRIGATÓRIO fechar as entregas. PROIBIDO fechar só no fim do dia',p:false},
    ]},
    {title:'Fechamento Delivery',items:[
      {t:'Salvar contato de novos clientes todos os dias',p:false},
      {t:'Fechamento dos entregadores no caderno: coberturas, embalagens, taxas acima de 5km, trocas, quantidade de bolos',p:true},
      {t:'Limpeza da mesa de apoio, guardar papel acoplado, sacolas, embalagens',p:true},
      {t:'Lançar todos os pedidos no sistema',p:false},
    ]},
  ]},
  fe_atend:{cat:'atend',name:'Fechamento Atendimento',icon:'🌙',color:'#7D3C98',sections:[
    {title:'Vitrine & Produtos',items:[
      {t:'Abastecimento da vitrine — bolos do dia anterior devem ser vendidos PRIMEIRO',p:true},
      {t:'Verificar geladeira de bolos de pote',p:false},
      {t:'Montagem dos bolos para exposição no balcão',p:true},
      {t:'Atualização iFood, 99Food e Cardápio Web',p:false},
      {t:'Loja com mais de 2 clientes no balcão: PEDIR AJUDA IMEDIATAMENTE',p:false},
      {t:'Verificar bolos para desenformar e colocar no balcão/geladeira de pote',p:false},
      {t:'PROIBIDO dar troco aos entregadores',p:false},
    ]},
    {title:'Financeiro',items:[
      {t:'Tirar as notas fiscais (somar cartão, PIX e iFood)',p:true},
      {t:'Deixar todos os telefones e máquinas de cartão carregando',p:false},
      {t:'NÃO DEIXAR PAPÉIS EM CIMA DAS MESAS',p:false},
    ]},
    {title:'Limpeza',items:[
      {t:'Arrumar armário do papel acoplado e armário do computador',p:false},
      {t:'Limpeza do armário de estoque dos bolos de delivery e embalagens',p:true},
      {t:'Limpeza da geladeira de pote por dentro',p:true},
      {t:'Limpeza do chão do atendimento e da cozinha',p:true},
      {t:'Lavar os utensílios utilizados no atendimento',p:false},
      {t:'Mesa do delivery, mesa de apoio, lixeira e paredes limpas',p:true},
    ]},
    {title:'Contagem de Embalagens — Fechamento',items:[
      {t:'Sacola média',p:true,count:false,min:20},
      {t:'Sacola grande',p:true,count:false,min:20},
      {t:'Embalagem de presente',p:true,count:true,min:20},
      {t:'Embalagem 32',p:true,count:true,min:20},
      {t:'Embalagem 50',p:true,count:true,min:20},
      {t:'Embalagem 56',p:true,count:true,min:20},
      {t:'Embalagem iFood',p:true,count:true,min:20},
      {t:'Papel acoplado (rolos)',p:true,count:true,min:5},
      {t:'Velas',p:true,count:true,min:20},
      {t:'Granulado (potes)',p:true,count:true,min:5},
      {t:'BoloBag',p:true,count:true,min:20},
    ]},
    {title:'Preparo para Amanhã',items:[
      {t:'Guardar coberturas na geladeira com etiqueta de validade',p:false},
      {t:'Verificar quais coberturas estão faltando para produção do dia seguinte',p:false},
      {t:'Se o lixeiro não vier buscar o lixo: LIGAR IMEDIATAMENTE!',p:false},
    ]},
  ]},
  ab_coz:{cat:'coz',name:'Abertura Cozinha',icon:'👨‍🍳',color:'#E67E22',sections:[
    {title:'Início do Turno',items:[
      {t:'Bater o ponto assim que começar a trabalhar',p:false},
      {t:'Usar uniforme limpo da produção na cozinha',p:true},
      {t:'Verificar se chegou matéria prima e armazenar pela validade',p:false},
      {t:'Pegar utensílios do dia: faca, espátula, bacia, colher, ralador, potes',p:false},
      {t:'LAVAR O MAQUINÁRIO antes de usar',p:false},
    ]},
    {title:'Verificações & Forno',items:[
      {t:'Verificar na geladeira produtos abertos para uso imediato',p:false},
      {t:'Se necessário: cobertura de chocolate FOGO MÉDIO por 40 min, depois desligar e manter por mais 20 min',p:false},
      {t:'LIGAR O FORNO somente na hora de colocar os bolos — chama em ALTURA MÉDIA',p:false},
      {t:'FORNO É RESPONSABILIDADE DE TODOS: verificar temperatura 150° constantemente',p:false},
    ]},
    {title:'Produção',items:[
      {t:'Verificar a produção do dia e seguir a ordem correta',p:false},
      {t:'Durante a produção: mesa limpa e organizada',p:true},
      {t:'Não começar NENHUMA tarefa do dia posterior sem terminar as tarefas do dia',p:false},
      {t:'OBRIGAÇÃO de saber os sabores produzidos e marcar bolos de mesma massa com sabores diferentes',p:true},
      {t:'LOJA LIMPA DURANTE A PRODUÇÃO: chão limpo, matérias primas guardadas, potes fechados',p:true},
    ]},
  ]},
  fe_coz:{cat:'coz',name:'Fechamento Cozinha',icon:'🧹',color:'#27AE60',sections:[
    {title:'Limpeza de Equipamentos',items:[
      {t:'Fogão, batedeira, forno, exaustor, liquidificadores, mesas e utensílios LIMPOS',p:true},
      {t:'Lixeiras limpas diariamente',p:false},
      {t:'Limpar geladeira e deixar organizada',p:true},
      {t:'Tanque de apoio limpo e sem nada dentro',p:false},
      {t:'Tirar grade dos ralos para limpeza e recolocar',p:false},
    ]},
    {title:'Preparo para Amanhã',items:[
      {t:'Formas untadas na quantidade correta?',p:false},
      {t:'Preparos feitos: queijo ralado, cenoura, banana, maçã, goiabada, gotas gelando, caramelo, farofa, tortas montadas',p:true},
      {t:'Guardar matérias primas que sobraram com DATA DE VALIDADE',p:false},
      {t:'Abastecer estoque diário',p:false},
      {t:'Deixar 2 luvas de molho para lavar no dia seguinte',p:false},
    ]},
    {title:'Verificações Finais',items:[
      {t:'Conferir validades: geladeira, potes embaixo da mesa e estoque diário',p:false},
      {t:'Verificar se tem alguma fruta podre na fruteira',p:false},
      {t:'Deixar balança carregando para o dia seguinte',p:false},
      {t:'DESLIGAR O GÁS',p:false},
      {t:'Abastecer dispenser de papel toalha, álcool em gel e detergente',p:false},
      {t:'Guardar TODO material de limpeza no estoque próprio',p:false},
    ]},
  ]},
  limp_seg:{cat:'semanal',name:'Limpeza — Segunda',icon:'📅',color:'#1A5276',sections:[{title:'Segunda-feira',items:[
    {t:'Limpeza completa da geladeira / câmara fria',p:true},
    {t:'Limpeza do carrinho de frutas',p:true},
    {t:'Sanitizar frutas',p:true},
    {t:'Limpeza das prateleiras do estoque',p:true},
  ]}]},
  limp_ter:{cat:'semanal',name:'Limpeza — Terça',icon:'📅',color:'#1F618D',sections:[{title:'Terça-feira',items:[
    {t:'Limpeza do forno por dentro e por fora',p:true},
    {t:'Limpeza das mesas de apoio',p:true},
    {t:'Limpeza do banheiro / vestiário',p:true},
    {t:'Limpeza completa do fogão',p:true},
    {t:'Limpeza do exaustor',p:true},
  ]}]},
  limp_qua:{cat:'semanal',name:'Limpeza — Quarta',icon:'📅',color:'#2874A6',sections:[{title:'Quarta-feira',items:[
    {t:'Arrumar e organizar estoque completo',p:true},
    {t:'Limpar carrinhos de transporte',p:true},
  ]}]},
  limp_qui:{cat:'semanal',name:'Limpeza — Quinta',icon:'📅',color:'#2E86C1',sections:[{title:'Quinta-feira',items:[
    {t:'Limpeza das mesas de apoio',p:true},
    {t:'Limpeza das paredes da cozinha',p:true},
    {t:'Limpeza do banheiro / vestiário',p:true},
  ]}]},
  limp_sex:{cat:'semanal',name:'Limpeza — Sexta',icon:'📅',color:'#3498DB',sections:[{title:'Sexta-feira',items:[
    {t:'Manutenção geral: verificar todos os pontos da semana e corrigir pendências',p:true},
    {t:'Loja em perfeitas condições de higiene para o fim de semana',p:true},
  ]}]},
  estoque_sab:{cat:'semanal',name:'Estoque — Sábado',icon:'📦',color:'#784212',sections:[
    {title:'Contagem de Estoque Semanal',items:[
      {t:'Achocolatado',p:false,count:true,min:1},
      {t:'Açúcar cristal',p:false,count:true,min:1},
      {t:'Açúcar mascavo',p:false,count:true,min:1},
      {t:'Açúcar refinado',p:false,count:true,min:1},
      {t:'Maizena',p:false,count:true,min:1},
      {t:'Canela em pó',p:false,count:true,min:1},
      {t:'Castanha do Pará',p:false,count:true,min:1},
      {t:'Chocolate em barra meio amargo Harald Top',p:false,count:true,min:1},
      {t:'Chocolate em pó',p:false,count:true,min:1},
      {t:'Coco em flocos — úmido e adoçado',p:false,count:true,min:1},
      {t:'Coco ralado — úmido e adoçado',p:false,count:true,min:1},
      {t:'Creme de avelã Casa de Bolos',p:false,count:true,min:1},
      {t:'Creme de leite',p:false,count:true,min:1},
      {t:'Doce de leite Itambé',p:false,count:true,min:1},
      {t:'Farinha de trigo com fermento',p:false,count:true,min:1},
      {t:'Farinha de trigo integral',p:false,count:true,min:1},
      {t:'Farinha de trigo sem fermento',p:false,count:true,min:1},
      {t:'Fermento em pó',p:false,count:true,min:1},
      {t:'Fubá',p:false,count:true,min:1},
      {t:'Goiabada',p:false,count:true,min:1},
      {t:'Gotas de chocolate',p:false,count:true,min:1},
      {t:'Iogurte',p:false,count:true,min:1},
      {t:'Leite condensado',p:false,count:true,min:1},
      {t:'Leite de coco',p:false,count:true,min:1},
      {t:'Leite em pó',p:false,count:true,min:1},
      {t:'Margarina Sofiteli',p:false,count:true,min:1},
      {t:'Milharina',p:false,count:true,min:1},
      {t:'Milho em lata',p:false,count:true,min:1},
      {t:'Óleo de soja',p:false,count:true,min:1},
      {t:'Ovos',p:false,count:true,min:1},
      {t:'Queijo',p:false,count:true,min:1},
      {t:'Requeijão',p:false,count:true,min:1},
      {t:'Embalagem 32',p:false,count:true,min:20},
      {t:'Embalagem 50',p:false,count:true,min:20},
      {t:'Embalagem 56',p:false,count:true,min:20},
      {t:'Detergente louça',p:false,count:true,min:2},
      {t:'Detergente clorado',p:false,count:true,min:2},
      {t:'Desengordurante',p:false,count:true,min:2},
      {t:'Sanitizante',p:false,count:true,min:2},
    ]},
  ]},
  sanitario:{cat:'geral',name:'Checklist Sanitário',icon:'🧼',color:'#1A5276',sections:[
    {title:'Temperatura e Armazenamento',items:[
      {t:'Temperatura da câmara fria (registrar °C)',p:true,count:true,min:-18},
      {t:'Temperatura das geladeiras (registrar °C)',p:true,count:true,min:0},
      {t:'Produtos identificados com etiqueta',p:true},
      {t:'Data de produção registrada em todos os itens',p:true},
      {t:'Data de validade registrada e dentro do prazo',p:true},
      {t:'Lote registrado',p:false},
      {t:'Armazenamento correto por tipo de produto',p:true},
      {t:'Produtos fora do chão (prateleiras/paletes)',p:true},
      {t:'Separação cru/cozido quando aplicável',p:true},
    ]},
    {title:'Higiene e Limpeza',items:[
      {t:'Bancadas higienizadas antes da produção',p:true},
      {t:'Utensílios higienizados e armazenados corretamente',p:true},
      {t:'Lixeiras limpas e com tampa',p:true},
      {t:'Piso, ralo e parede em bom estado e limpos',p:true},
      {t:'Controle de pragas — verificar armadilhas e registros',p:true},
    ]},
    {title:'Apresentação Pessoal',items:[
      {t:'Uso de touca por todos os manipuladores',p:true},
      {t:'Ausência de adornos (brincos, anéis, relógio)',p:true},
      {t:'Uniforme limpo e completo',p:true},
      {t:'Lavagem das mãos registrada',p:true},
    ]},
  ]},
  custo_agua:{cat:'geral',name:'Marcação Água',icon:'💧',color:'#1ABC9C',sections:[{title:'Marcação de Água — Toda Segunda',items:[
    {t:'Registrar leitura atual do hidrômetro com foto',p:true},
    {t:'Comparar com leitura da semana anterior e registrar consumo',p:false},
    {t:'Verificar se há vazamentos visíveis',p:false},
    {t:'Registrar no caderno: data + leitura + consumo',p:false},
  ]}]},
  custo_gas:{cat:'geral',name:'Marcação Gás',icon:'🔥',color:'#E74C3C',sections:[{title:'Marcação de Gás — Toda Segunda',items:[
    {t:'Verificar e fotografar nível atual do(s) botijão(ões)',p:true},
    {t:'Registrar quantidade de botijões cheios em estoque',p:false},
    {t:'Anotar consumo estimado da semana anterior',p:false},
    {t:'Verificar se há cheiro de gás ou vazamento',p:false},
    {t:'Registrar no caderno: data + nível + estoque',p:false},
  ]}]},
  resposta_app:{cat:'geral',name:'Avaliações Apps',icon:'⭐',color:'#F39C12',sections:[{title:'Responder 99Food e iFood — Toda Segunda',items:[
    {t:'Acessar painel iFood e verificar avaliações pendentes',p:false},
    {t:'Responder TODAS as avaliações do iFood',p:true},
    {t:'Acessar painel 99Food e verificar avaliações pendentes',p:false},
    {t:'Responder TODAS as avaliações do 99Food',p:true},
    {t:'Avaliações negativas: registrar e encaminhar ao responsável',p:false},
    {t:'Foto da tela com todas as avaliações respondidas',p:true},
  ]}]},
};

const CATS={atend:'cards-atend',coz:'cards-coz',semanal:'cards-semanal',geral:'cards-geral'};

// ═══════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════
let ST={user:null,type:'',store:'',items:[],histFilter:'todos',editingId:null};
let historyCache=[];

// ═══════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════
window.addEventListener('DOMContentLoaded',()=>{
  buildCards();
  document.getElementById('login-pass').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
  document.getElementById('login-user').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('login-pass').focus();});
});

// ═══════════════════════════════════════════════
//  LOGIN
// ═══════════════════════════════════════════════
function doLogin(){
  const login=document.getElementById('login-user').value.trim().toLowerCase();
  const pass=document.getElementById('login-pass').value;
  const users=getUsers();
  const user=users.find(u=>u.login===login&&u.pass===pass);
  if(!user){document.getElementById('login-err').classList.add('show');return;}
  document.getElementById('login-err').classList.remove('show');
  ST.user=user;
  document.getElementById('hdr-user-name').textContent=user.name;
  document.getElementById('tab-admin').style.display=user.role==='admin'?'':'none';
  document.getElementById('tab-painel').style.display=user.role==='admin'?'':'none';
  document.getElementById('tab-score').style.display=user.role==='admin'?'':'none';
  document.getElementById('tab-ia').style.display=user.role==='admin'?'':'none';
  document.getElementById('tab-auditoria').style.display=user.role==='admin'?'':'none';
  document.getElementById('tab-padrao').style.display=user.role==='admin'?'':'none';
  document.getElementById('tab-estoque-ia').style.display='';
  buildStoreSelect(user);
  showPage('pg-app');
  goTab('sel');
}

function doLogout(){ST.user=null;showAllScr('sel');showPage('pg-login');document.getElementById('login-user').value='';document.getElementById('login-pass').value='';}

function buildStoreSelect(user){
  const sel=document.getElementById('s-store');
  sel.innerHTML='';
  if(user.role==='admin'||user.store==='todas'){
    sel.innerHTML=`<option value="">Escolha a loja...</option><option value="meier">Méier</option><option value="tijuca">Tijuca</option><option value="copacabana">Copacabana</option><option value="botafogo">Botafogo</option><option value="ilha">Ilha do Governador</option>`;
    sel.disabled=false;
  } else {
    sel.innerHTML=`<option value="${user.store}">${STORES[user.store]}</option>`;
    sel.value=user.store;sel.disabled=true;ST.store=user.store;
  }
  updBtn();
}

// ═══════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════
function showPage(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));document.getElementById(id).classList.add('on');}
function showAllScr(active){['sel','cl','ok','hist','painel','score','ia','auditoria','padrao','estoque-ia','admin'].forEach(s=>{const el=document.getElementById('scr-'+s);if(el)el.style.display=s===active?'':'none';});}
function goTab(t){
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('on'));
  document.getElementById('tab-'+t)?.classList.add('on');
  if(t==='sel'){showAllScr('sel');}
  else if(t==='hist'){showAllScr('hist');loadHist();}
  else if(t==='painel'){showAllScr('painel');loadPainel();}
  else if(t==='score'){showAllScr('score');loadScore();}
  else if(t==='ia'){showAllScr('ia');carregarConfigAlertas();carregarAprovacoes();}
  else if(t==='auditoria'){showAllScr('auditoria');}
  else if(t==='padrao'){showAllScr('padrao');renderPadLista();updCompSelect();}
  else if(t==='estoque-ia'){showAllScr('estoque-ia');loadEstHist();}
  else if(t==='admin'){showAllScr('admin');renderAdmin();}
}
function goBack(){goTab('sel');}
function newCL(){ST.editingId=null;goTab('sel');}

// ═══════════════════════════════════════════════
//  CARDS
// ═══════════════════════════════════════════════
function buildCards(){
  Object.values(CATS).forEach(id=>{const g=document.getElementById(id);if(g)g.innerHTML='';});
  Object.entries(CL).forEach(([k,d])=>{
    const g=document.getElementById(CATS[d.cat]);if(!g)return;
    const tot=d.sections.reduce((a,s)=>a+s.items.length,0);
    const div=document.createElement('div');
    div.className='card';div.id='card-'+k;div.onclick=()=>pick(k);
    div.innerHTML=`<div class="cbar" style="background:${d.color}"></div><div class="cicon">${d.icon}</div><div class="cname">${d.name}</div><div class="ccnt">${tot} itens</div>`;
    g.appendChild(div);
  });
}

function pick(k){ST.type=k;document.querySelectorAll('.card').forEach(c=>c.classList.remove('sel'));document.getElementById('card-'+k).classList.add('sel');updBtn();}
function updBtn(){ST.store=document.getElementById('s-store').value;document.getElementById('btn-start').disabled=!(ST.store&&ST.type);}

// ═══════════════════════════════════════════════
//  CHECKLIST
// ═══════════════════════════════════════════════
function startCL(){
  const def=CL[ST.type];ST.items=[];
  def.sections.forEach(s=>s.items.forEach(it=>ST.items.push({...it,done:false,photos:[],show:false,obs:'',qty:''})));
  document.getElementById('cl-hdr').style.background=def.color;
  document.getElementById('cl-title').textContent=def.icon+' '+def.name;
  document.getElementById('cl-sub').textContent=STORES[ST.store]+' · '+ST.user.name;
  renderItems();updProg();showAllScr('cl');window.scrollTo(0,0);
}

function renderItems(){
  const def=CL[ST.type];const body=document.getElementById('ibody');body.innerHTML='';
  let idx=0;
  def.sections.forEach(s=>{
    const h=document.createElement('div');h.className='stitle';h.textContent=s.title;body.appendChild(h);
    s.items.forEach(()=>{body.appendChild(buildItem(idx));idx++;});
  });
}

function buildItem(idx){
  const it=ST.items[idx];
  const div=document.createElement('div');
  div.className='item'+(it.done?' done':'');div.id='it-'+idx;
  const alrt=/(PROIBIDO|OBRIGATÓRIO|RESPONSABILIDADE|IMEDIATAMENTE|DESLIGAR O GÁS|NENHUM|OBRIGAÇÃO|LIGAR IMEDIATAMENTE)/.test(it.t);

  // Item com contagem ou só foto (sacola média/grande)
  if(it.count !== undefined){
    const qty = it.qty||'';
    const below = it.count && qty!==''&&parseInt(qty)<(it.min||20);
    div.innerHTML=`
      <div class="item-top" onclick="toggleCount(${idx})">
        <div class="ichk">${it.done?'✓':''}</div>
        <div class="itxt">${it.t}</div>
        ${it.p?`<span class="pbadge">${it.done&&it.photos&&it.photos.length>0?'📸 OK':'📸 foto'}</span>`:''}
      </div>
      <div class="item-extras show" id="ex-${idx}">
        ${it.count?`
        <div class="count-row">
          <span class="count-label">📦 Quantidade contada:</span>
          <input class="count-input" type="number" min="0" placeholder="0" value="${qty}"
            oninput="saveQty(${idx},this.value)" onblur="checkQty(${idx})">
          <span class="count-unit">un.</span>
        </div>
        <div class="count-alert${below?' show':''}" id="alert-${idx}">
          ⚠️ Abaixo do mínimo (${it.min||20} unidades)! Reabastecer.
        </div>`:''}
        ${it.p?`
        <div style="margin-top:${it.count?'10':'0'}px;">
          <div class="ex-lbl">📷 Foto obrigatória do estoque</div>
          ${!it.photos||it.photos.length===0?`<div class="uarea"><input type="file" accept="image/*" capture="environment" multiple onchange="addPh(event,${idx})"><div class="uicon">📷</div><div class="utxt"><strong>Tirar foto</strong> do estoque</div></div>`:''}
          <div class="tgrid">${(it.photos||[]).map((p,pi)=>`<div class="thumb"><img src="${p}" onclick="openZoom('${p}')"><button class="thrm" onclick="rmPh(${idx},${pi});event.stopPropagation()">×</button></div>`).join('')}</div>
          ${it.photos&&it.photos.length>0&&it.photos.length<3?`<div class="uarea" style="margin-top:6px;"><input type="file" accept="image/*" capture="environment" multiple onchange="addPh(event,${idx})"><div class="utxt" style="font-size:.68rem;">+ Mais fotos</div></div>`:''}
        </div>`:''}
        <div class="ex-lbl" style="margin-top:8px;">📝 Observação (opcional)</div>
        <textarea class="obs-input" placeholder="Ex: faltando, pedido feito..." oninput="saveObs(${idx},this.value)" style="min-height:44px;">${it.obs||''}</textarea>
      </div>`;
    return div;
  }

  div.innerHTML=`
    <div class="item-top" onclick="toggle(${idx})">
      <div class="ichk">${it.done?'✓':''}</div>
      <div class="itxt${alrt?' alrt':''}">${it.t}</div>
      ${it.p?`<span class="pbadge">${it.done?'📸 OK':'📸 foto'}</span>`:''}
    </div>
    <div class="item-extras${(it.show||it.done)?' show':''}" id="ex-${idx}">
      <div class="ex-lbl">📝 Observação (opcional)</div>
      <textarea class="obs-input" placeholder="Adicione uma observação sobre este item..." oninput="saveObs(${idx},this.value)">${it.obs||''}</textarea>
      ${it.p?`
      <div style="margin-top:10px;">
        <div class="ex-lbl">📷 Foto obrigatória</div>
        ${it.photos.length===0?`<div class="uarea"><input type="file" accept="image/*" capture="environment" multiple onchange="addPh(event,${idx})"><div class="uicon">📷</div><div class="utxt"><strong>Tirar foto</strong> ou selecionar da galeria</div></div>`:''}
        <div class="tgrid">${it.photos.map((p,pi)=>`<div class="thumb"><img src="${p}" onclick="openZoom('${p}')"><button class="thrm" onclick="rmPh(${idx},${pi});event.stopPropagation()">×</button></div>`).join('')}</div>
        ${it.photos.length>0&&it.photos.length<3?`<div class="uarea" style="margin-top:6px;"><input type="file" accept="image/*" capture="environment" multiple onchange="addPh(event,${idx})"><div class="utxt" style="font-size:.68rem;">+ Mais fotos</div></div>`:''}
      </div>`:''}
    </div>`;
  return div;
}

function rerender(idx){const el=document.getElementById('it-'+idx);if(el)el.replaceWith(buildItem(idx));}
function saveObs(idx,v){ST.items[idx].obs=v;}
function saveQty(idx,v){
  ST.items[idx].qty=v;
  const it=ST.items[idx];
  // Marcado como feito só quando tem quantidade E foto (se foto obrigatória)
  const hasQty = v!==''&&parseInt(v)>=0;
  const hasPhoto = !it.p || (it.photos&&it.photos.length>0);
  ST.items[idx].done = hasQty && hasPhoto;
  rerender(idx);
  updProg();
  checkQty(idx);
}
function checkQty(idx){
  const it=ST.items[idx];
  const alert=document.getElementById('alert-'+idx);
  if(!alert)return;
  const qty=parseInt(it.qty||0);
  const below=it.qty!==''&&qty<(it.min||20);
  alert.classList.toggle('show',below);
  document.getElementById('it-'+idx).style.borderColor=below?'var(--or)':it.done?'var(--gn)':'#EDE4D8';
}
function toggle(idx){
  const it=ST.items[idx];
  if(it.count)return;
  it.show=true;
  if(it.p&&!it.done&&it.photos.length===0){rerender(idx);return;}
  if(it.p&&it.photos.length===0){toast('📸 Foto obrigatória!');return;}
  it.done=!it.done;rerender(idx);updProg();
}
function toggleCount(idx){
  const input=document.querySelector(`#ex-${idx} .count-input`);
  if(input)input.focus();
}

// Comprime foto para máximo 400px e qualidade 50% — reduz de ~2MB para ~50KB
function compressPhoto(dataUrl, maxSize=400, quality=0.5){
  return new Promise(resolve=>{
    const img=new Image();
    img.onload=()=>{
      const canvas=document.createElement('canvas');
      let w=img.width, h=img.height;
      if(w>h){ if(w>maxSize){h=Math.round(h*maxSize/w);w=maxSize;} }
      else { if(h>maxSize){w=Math.round(w*maxSize/h);h=maxSize;} }
      canvas.width=w; canvas.height=h;
      canvas.getContext('2d').drawImage(img,0,0,w,h);
      resolve(canvas.toDataURL('image/jpeg',quality));
    };
    img.onerror=()=>resolve(dataUrl);
    img.src=dataUrl;
  });
}

function addPh(ev,idx){
  Array.from(ev.target.files).forEach(f=>{
    const r=new FileReader();
    r.onload=async e=>{
      // Comprime antes de salvar
      const compressed = await compressPhoto(e.target.result);
      ST.items[idx].photos.push(compressed);
      if(ST.items[idx].count===true){
        const hasQty=ST.items[idx].qty!==''&&parseInt(ST.items[idx].qty||0)>=0;
        ST.items[idx].done=hasQty&&ST.items[idx].photos.length>0;
      } else if(ST.items[idx].count===false){
        ST.items[idx].done=ST.items[idx].photos.length>0;
      } else {
        ST.items[idx].done=true;
      }
      ST.items[idx].show=true;
      rerender(idx);updProg();
    };
    r.readAsDataURL(f);
  });
}
function addPh_old(){}
function rmPh(idx,pi){ST.items[idx].photos.splice(pi,1);if(ST.items[idx].photos.length===0&&ST.items[idx].p)ST.items[idx].done=false;rerender(idx);updProg();}
function updProg(){
  const done=ST.items.filter(i=>i.done).length,total=ST.items.length;
  document.getElementById('prog-txt').textContent=`${done} / ${total}`;
  document.getElementById('prog-fill').style.width=(total?Math.round(done/total*100):0)+'%';
  const btn=document.getElementById('btn-send');
  btn.textContent=done===total?'✓ Enviar Completo':`Enviar (${done}/${total})`;
  btn.style.opacity=done>0?'1':'0.5';
}

// ═══════════════════════════════════════════════
//  ENVIO → FIREBASE
// ═══════════════════════════════════════════════
async function sendCL(){
  const done=ST.items.filter(i=>i.done).length,total=ST.items.length;
  if(done===0){toast('Preencha ao menos 1 item!');return;}
  if(ST.items.filter(i=>i.p&&i.done&&i.photos.length===0).length>0){toast('📸 Envie todas as fotos obrigatórias!');return;}

  // Captura GPS
  let gps = null;
  try {
    if(navigator.geolocation){
      gps = await new Promise((res)=>{
        navigator.geolocation.getCurrentPosition(
          p=>res({lat:p.coords.latitude.toFixed(6),lng:p.coords.longitude.toFixed(6)}),
          ()=>res(null),
          {timeout:5000}
        );
      });
    }
  }catch(e){}

  setOv(true,'Salvando...');
  const now=new Date();
  const rec={
    store:ST.store,storeName:STORES[ST.store],
    type:ST.type,typeName:CL[ST.type].name,
    operator:ST.user.name,userLogin:ST.user.login,
    done,total,pct:Math.round(done/total*100),
    totalPhotos:ST.items.reduce((a,i)=>a+i.photos.length,0),
    itensList:ST.items.map(i=>({text:i.t,done:i.done,photo:i.p,photoCount:i.photos.length,obs:i.obs||'',photos:i.photos||[],count:i.count||false,qty:i.qty||'',min:i.min||0})),
    timeStr:now.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}),
    dateStr:now.toLocaleDateString('pt-BR'),
    ts:now.toISOString(),
    gps: gps,
    createdAt:new Date()
  };

  // Salva localmente como backup imediato
  const localHist = JSON.parse(localStorage.getItem('cb_hist')||'[]');
  localHist.unshift({...rec, id: Date.now()});
  localStorage.setItem('cb_hist', JSON.stringify(localHist.slice(0,100)));

  // Firebase — só tenta se estiver pronto
  let fbId=null;
  if(fbReady && db){
    try{
      const fbPromise = ST.editingId
        ? updateDoc(doc(db,'checklists',ST.editingId),rec).then(()=>ST.editingId)
        : addDoc(collection(db,'checklists'),rec).then(r=>r.id);
      const timeoutPromise = new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),15000));
      fbId = await Promise.race([fbPromise, timeoutPromise]);
      if(ST.editingId) ST.editingId=null;
    }catch(e){console.warn('Firebase sendCL:',e.message);}
  }

  setOv(false);

  // Sheets e WhatsApp em background — não bloqueiam a tela
  const payload={id:fbId||Date.now(),data:rec.dateStr,hora:rec.timeStr,loja:rec.storeName,responsavel:rec.operator,checklist:rec.typeName,itens_concluidos:rec.done,total_itens:rec.total,conformidade_pct:rec.pct,total_fotos:rec.totalPhotos,status:rec.pct===100?'COMPLETO':'PARCIAL',itens_detalhes:rec.itensList.map(i=>`${i.done?'✓':'✗'} ${i.text}${i.photo?` [📸${i.photoCount}]`:''}${i.obs?` — ${i.obs}`:''}`).join('\n')};
  fetch(SHEETS_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}).catch(()=>{});
  enviarWpp(rec);

  document.getElementById('okd').innerHTML=`
    <div class="ok-row"><span>Loja</span><span>${rec.storeName}</span></div>
    <div class="ok-row"><span>Checklist</span><span>${CL[rec.type].icon} ${rec.typeName}</span></div>
    <div class="ok-row"><span>Responsável</span><span>${rec.operator}</span></div>
    <div class="ok-row"><span>Conformidade</span><span>${rec.done}/${rec.total} (${rec.pct}%)</span></div>
    <div class="ok-row"><span>Fotos</span><span>${rec.totalPhotos}</span></div>
    <div class="ok-row"><span>Horário</span><span>${rec.timeStr} · ${rec.dateStr}</span></div>
    <div class="ok-row"><span>Firebase</span><span style="color:${fbId?'var(--gn)':'var(--or)'}">${fbId?'✅ Salvo na nuvem':'⚠️ Salvo localmente'}</span></div>`;
  showAllScr('ok');
}

// ═══════════════════════════════════════════════
//  WHATSAPP
// ═══════════════════════════════════════════════
async function enviarWpp(rec){
  if(!WPP_NUM||!WPP_KEY)return;
  const feitos=rec.itensList.filter(i=>i.done);
  const naoFeitos=rec.itensList.filter(i=>!i.done);
  let msg=`📋 *CHECKLIST CASA DE BOLOS*\n📅 ${rec.dateStr} às ${rec.timeStr}\n🏪 *${rec.storeName}* — ${CL[rec.type].icon} ${rec.typeName}\n👤 ${rec.operator}\n📊 Conformidade: *${rec.pct}%* (${rec.done}/${rec.total})\n\n`;
  if(naoFeitos.length>0){msg+=`❌ *NÃO REALIZADOS (${naoFeitos.length}):*\n`;naoFeitos.forEach(i=>{msg+=`• ${i.text}\n`;if(i.obs)msg+=`  💬 ${i.obs}\n`;});msg+='\n';}
  if(feitos.length>0){msg+=`✅ *REALIZADOS (${feitos.length}):*\n`;feitos.slice(0,8).forEach(i=>{msg+=`• ${i.text}${i.obs?` — ${i.obs}`:''}\n`;});if(feitos.length>8)msg+=`• _...e mais ${feitos.length-8} itens_\n`;}
  try{await fetch(`https://api.callmebot.com/whatsapp.php?phone=${WPP_NUM}&text=${encodeURIComponent(msg)}&apikey=${WPP_KEY}`);}catch(e){}
}

// ═══════════════════════════════════════════════
//  HISTÓRICO ← FIREBASE
// ═══════════════════════════════════════════════
async function loadHist(){
  const listEl = document.getElementById('hist-list');
  const subEl  = document.getElementById('hist-sub');
  listEl.innerHTML='<div class="loading-hist">⏳ Carregando registros...</div>';
  subEl.textContent='Carregando...';

  // Aguarda Firebase estar pronto (máx 12 segundos)
  if(!fbReady && !fbError){
    listEl.innerHTML='<div class="loading-hist">⏳ Conectando ao Firebase...</div>';
    let waited = 0;
    while(!fbReady && !fbError && waited < 12000){
      await new Promise(r=>setTimeout(r,300));
      waited += 300;
    }
  }

  // Tenta Firebase mesmo que tenha dado fbError antes (pode ser erro temporário)
  if(fbReady && db){
    let snap = null;
    try{
      if(ST.user.role==='admin'||ST.user.store==='todas'){
        snap = await getDocs(collection(db,'checklists'));
      } else {
        const q = query(collection(db,'checklists'),where('store','==',ST.user.store));
        snap = await getDocs(q);
      }
    }catch(e){
      console.warn('Firebase loadHist erro:', e.message);
    }

    if(snap && snap.size > 0){
      historyCache = snap.docs
        .map(d=>({id:d.id,...d.data()}))
        .sort((a,b)=>(b.ts||'').localeCompare(a.ts||''));
      renderHist();
      return;
    }

    if(snap && snap.size === 0){
      // Firebase conectou mas não tem dados ainda
      listEl.innerHTML='<div class="empty-hist">Nenhum checklist encontrado no Firebase.<br><button onclick="loadHist()" style="margin-top:10px;background:var(--br);color:var(--gd);border:none;border-radius:8px;padding:8px 16px;font-size:.8rem;cursor:pointer;">🔄 Tentar novamente</button></div>';
      subEl.textContent='0 registros';
      return;
    }
  }

  // Firebase não disponível — usa localStorage como fallback
  const local = JSON.parse(localStorage.getItem('cb_hist')||'[]');
  historyCache = local;

  if(local.length > 0){
    renderHist();
    listEl.insertAdjacentHTML('afterbegin',`
      <div style="background:#FEF9E7;border:1px solid var(--or);border-radius:8px;padding:10px 14px;margin-bottom:12px;font-size:.78rem;color:var(--or);">
        ⚠️ Firebase offline — mostrando registros deste dispositivo.
        <button onclick="loadHist()" style="display:block;margin-top:6px;background:var(--br);color:var(--gd);border:none;border-radius:99px;padding:5px 14px;font-size:.7rem;cursor:pointer;font-family:inherit;">🔄 Tentar Firebase novamente</button>
      </div>`);
  } else {
    listEl.innerHTML=`
      <div class="empty-hist">
        📶 Firebase não conectado e sem dados locais.<br>
        <small style="color:var(--lt);display:block;margin-top:4px;">Verifique sua conexão com a internet.</small>
        <button onclick="reconectarFirebase()" style="margin-top:12px;background:var(--br);color:var(--gd);border:none;border-radius:8px;padding:10px 18px;font-size:.82rem;cursor:pointer;font-family:inherit;">🔄 Reconectar e tentar novamente</button>
      </div>`;
    subEl.textContent='Offline';
  }
}

async function reconectarFirebase(){
  // Reinicia a conexão com Firebase e tenta de novo
  fbReady = false;
  fbError = false;
  db = null;
  document.getElementById('hist-list').innerHTML='<div class="loading-hist">⏳ Reconectando ao Firebase...</div>';
  await initFirebase();
  await new Promise(r=>setTimeout(r,2000));
  loadHist();
}

function renderHist(){
  const all=historyCache;
  const stores=[...new Set(all.map(r=>r.storeName))];
  const fEl=document.getElementById('hist-filters');
  fEl.innerHTML=`<button class="hf${ST.histFilter==='todos'?' on':''}" onclick="setHistFilter('todos')">Todos</button>`
    +stores.map(s=>`<button class="hf${ST.histFilter===s?' on':''}" onclick="setHistFilter('${s}')">${s}</button>`).join('');
  const filtered=ST.histFilter==='todos'?all:all.filter(r=>r.storeName===ST.histFilter);
  document.getElementById('hist-sub').textContent=`${filtered.length} registro(s)`;
  const list=document.getElementById('hist-list');
  if(filtered.length===0){list.innerHTML='<div class="empty-hist">Nenhum checklist encontrado.</div>';return;}
  list.innerHTML=filtered.map((r,i)=>{
    const pctClass=r.pct>=80?'g':r.pct>=50?'y':'r';
    const dotColor=r.pct>=80?'var(--gn)':r.pct>=50?'var(--or)':'var(--rd)';
    const itensHtml=(r.itensList||[]).map(it=>`
      <div class="hid-row">
        <span class="hid-status">${it.done?'✅':'❌'}</span>
        <div style="flex:1">
          <div class="hid-text">${it.text}${it.count&&it.qty!==''?` <strong style="color:var(--br)">[${it.qty} un.]${parseInt(it.qty)<(it.min||20)?' ⚠️':''}</strong>`:''}</div>
          ${it.obs?`<div class="hid-obs">💬 ${it.obs}</div>`:''}
          ${it.photos&&it.photos.length>0?`<div class="hid-photos">${it.photos.map(p=>`<img class="hid-photo" src="${p}" onclick="openZoom('${p}')">`).join('')}</div>`:''}
        </div>
      </div>`).join('');
    const isOwner=ST.user?.role==='admin'||r.userLogin===ST.user?.login;
    return`
    <div class="hist-item">
      <div class="hi-top" onclick="toggleHist(${i})">
        <div class="hi-dot" style="background:${dotColor}"></div>
        <div class="hi-info">
          <div class="hi-title">${CL[r.type]?CL[r.type].icon:''} ${r.typeName} — ${r.storeName}</div>
          <div class="hi-meta">${r.operator} · ${r.timeStr} · ${r.dateStr}</div>
        </div>
        <div class="hi-pct ${pctClass}">${r.pct}%</div>
        <div class="hi-chevron" id="chev-${i}">▾</div>
      </div>
      <div class="hi-detail" id="hdet-${i}">
        <div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap;align-items:center;">
          <span class="badge-green">✅ ${r.done} feitos</span>
          ${r.total-r.done>0?`<span class="badge-red">❌ ${r.total-r.done} não feitos</span>`:''}
          ${r.totalPhotos>0?`<span style="font-size:.7rem;color:var(--md);">📸 ${r.totalPhotos} fotos</span>`:''}
          ${isOwner?`<button onclick="editarChecklist('${r.id}',${i})" style="margin-left:auto;background:var(--br);color:var(--gd);border:none;border-radius:8px;padding:5px 12px;font-size:.72rem;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;">✏️ Editar</button>`:''}
        </div>
        ${itensHtml}
      </div>
    </div>`;
  }).join('');
}

function setHistFilter(f){ST.histFilter=f;renderHist();}
function toggleHist(i){const det=document.getElementById('hdet-'+i);const chev=document.getElementById('chev-'+i);const isOpen=det.classList.contains('show');det.classList.toggle('show',!isOpen);chev.classList.toggle('open',!isOpen);}

function editarChecklist(fbId,i){
  const rec=historyCache[i];
  if(!rec)return;
  ST.type=rec.type;ST.store=rec.store;ST.editingId=fbId;
  const def=CL[ST.type];ST.items=[];
  let idx=0;
  def.sections.forEach(s=>s.items.forEach(it=>{
    const salvo=rec.itensList[idx]||{};
    ST.items.push({...it,done:salvo.done||false,photos:salvo.photos||[],obs:salvo.obs||'',show:salvo.done||false});
    idx++;
  }));
  document.getElementById('cl-hdr').style.background=def.color;
  document.getElementById('cl-title').textContent='✏️ Editando: '+def.icon+' '+def.name;
  document.getElementById('cl-sub').textContent=STORES[rec.store]+' · '+rec.operator;
  renderItems();updProg();showAllScr('cl');window.scrollTo(0,0);
  toast('✏️ Modo edição — faça as alterações e reenvie');
}

// ═══════════════════════════════════════════════
//  PAINEL DO DONO
// ═══════════════════════════════════════════════
async function loadPainel(){
  document.getElementById('painel-data').textContent='Atualizado às '+new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})+' — '+new Date().toLocaleDateString('pt-BR');
  if(!historyCache.length) await loadHistSilent();

  const hoje = new Date().toLocaleDateString('pt-BR');
  const stores = Object.entries(STORES);
  const lojasFeitas=[], lojasFaltando=[], lojasRisco=[];

  // Cards de status por loja — layout completo
  const painelLojas = document.getElementById('painel-lojas');
  painelLojas.innerHTML = stores.map(([k,nome])=>{
    const recsHoje = historyCache.filter(r=>r.store===k&&r.dateStr===hoje);
    const feito = recsHoje.length>0;
    const pct = feito?Math.round(recsHoje.reduce((a,r)=>a+r.pct,0)/recsHoje.length):0;
    const borCor = !feito?'var(--rd)':pct>=80?'var(--gn)':pct>=60?'var(--or)':'var(--rd)';
    const bgCor = !feito?'#FDEDEC':pct>=80?'#EAFAF1':pct>=60?'#FEF9E7':'#FDEDEC';
    const emoji = !feito?'❌':pct>=80?'✅':pct>=60?'⚠️':'🚨';
    const status = !feito?'Sem checklist hoje':pct>=80?'Operação normal':pct>=60?'Atenção necessária':'Situação crítica';
    const checklists = recsHoje.map(r=>r.typeName).join(', ')||'—';
    const ultimoOp = recsHoje.length?recsHoje[0].operator:'—';

    if(!feito) lojasFaltando.push(nome);
    else if(pct<60) lojasRisco.push(nome);
    else lojasFeitas.push(nome);

    return`<div style="background:${bgCor};border:2px solid ${borCor}30;border-left:4px solid ${borCor};border-radius:var(--r);padding:13px 14px;display:flex;align-items:center;gap:12px;">
      <div style="font-size:1.6rem;">${emoji}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:.9rem;font-weight:700;color:var(--br);">${nome}</div>
        <div style="font-size:.72rem;color:var(--md);margin-top:2px;">${status}</div>
        <div style="font-size:.68rem;color:var(--lt);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${feito?'✓ '+checklists:'Nenhum checklist enviado'}</div>
        ${feito?`<div style="font-size:.65rem;color:var(--lt);">Último: ${ultimoOp}</div>`:''}
      </div>
      <div style="text-align:right;flex-shrink:0;">
        <div style="font-family:'DM Serif Display',serif;font-size:1.7rem;color:${borCor};line-height:1;">${feito?pct+'%':'—'}</div>
        <div style="font-size:.6rem;color:var(--lt);">${recsHoje.length} checklist(s)</div>
      </div>
    </div>`;
  }).join('');

  // Alertas críticos
  const alertasBox = document.getElementById('painel-alertas-box');
  const alertasEl = document.getElementById('painel-alertas');
  if(lojasFaltando.length||lojasRisco.length){
    alertasBox.style.display='block';
    let html='';
    lojasFaltando.forEach(l=>html+=`<div style="font-size:.82rem;color:var(--rd);padding:4px 0;border-bottom:1px solid #F5B7B1;">🚫 <strong>${l}</strong> — Sem checklist hoje</div>`);
    lojasRisco.forEach(l=>html+=`<div style="font-size:.82rem;color:var(--or);padding:4px 0;border-bottom:1px solid #F5B7B1;">⚠️ <strong>${l}</strong> — Conformidade crítica</div>`);
    alertasEl.innerHTML=html;
  } else {
    alertasBox.style.display='none';
  }

  // Ranking geral (todos os dias)
  const rankData = stores.map(([k,nome])=>{
    const recs = historyCache.filter(r=>r.store===k);
    const pct = recs.length?Math.round(recs.reduce((a,r)=>a+r.pct,0)/recs.length):0;
    const hoje_recs = historyCache.filter(r=>r.store===k&&r.dateStr===hoje);
    const pctHoje = hoje_recs.length?Math.round(hoje_recs.reduce((a,r)=>a+r.pct,0)/hoje_recs.length):null;
    return {nome, pct, total:recs.length, pctHoje};
  }).sort((a,b)=>b.pct-a.pct);

  document.getElementById('painel-ranking').innerHTML = rankData.map((l,i)=>{
    const medal = i===0?'🥇':i===1?'🥈':i===2?'🥉':`${i+1}º`;
    const cor = l.pct>=80?'var(--gn)':l.pct>=60?'var(--or)':'var(--rd)';
    const tendencia = l.pctHoje!==null?(l.pctHoje>l.pct?'↑':'↓'):'—';
    const tendCor = l.pctHoje!==null?(l.pctHoje>l.pct?'var(--gn)':'var(--rd)'):'var(--lt)';
    return`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #F0E8DC;">
      <span style="font-size:.9rem;min-width:22px;">${medal}</span>
      <span style="flex:1;font-size:.85rem;font-weight:600;color:var(--br);">${l.nome}</span>
      <div style="width:90px;height:6px;background:#EEE;border-radius:99px;overflow:hidden;">
        <div style="width:${l.pct}%;height:100%;background:${cor};border-radius:99px;"></div>
      </div>
      <span style="font-size:.82rem;font-weight:700;color:${cor};min-width:36px;text-align:right;">${l.pct}%</span>
      <span style="font-size:.75rem;color:${tendCor};min-width:16px;">${tendencia}</span>
    </div>`;
  }).join('');

  // Reincidências
  calcReincidencias('painel-reincidencias');

  // O que cobrar agora
  let cobrar='';
  lojasFaltando.forEach(l=>cobrar+=`<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid #F5E9C0;"><span style="font-size:.85rem;">🔴</span><div style="flex:1;font-size:.82rem;color:var(--br);">Cobrar <strong>${l}</strong> — checklist não enviado hoje</div></div>`);
  lojasRisco.forEach(l=>cobrar+=`<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid #F5E9C0;"><span style="font-size:.85rem;">🟠</span><div style="flex:1;font-size:.82rem;color:var(--br);">Verificar não conformidades em <strong>${l}</strong></div></div>`);
  if(!cobrar) cobrar='<div style="font-size:.82rem;color:var(--gn);padding:8px 0;">✅ Tudo em dia! Nenhuma cobrança necessária agora.</div>';
  document.getElementById('painel-cobrar').innerHTML=cobrar;

  // Carrega histórico de estoque também
  loadEstHist();
}

// ═══════════════════════════════════════════════
//  RELATÓRIO INTELIGENTE IA
// ═══════════════════════════════════════════════
async function gerarRelatorioIA(){
  const dias = document.getElementById('rel-ia-periodo').value;
  const loja = document.getElementById('rel-ia-loja').value;
  const btn = document.getElementById('btn-rel-ia');
  const resultado = document.getElementById('rel-ia-resultado');

  btn.disabled=true; btn.textContent='⏳ Analisando padrões...';
  resultado.style.display='block';
  resultado.innerHTML='<div style="font-size:.82rem;color:var(--lt);text-align:center;padding:12px;">⏳ A IA está analisando padrões dos últimos '+dias+' dias...</div>';

  if(!historyCache.length) await loadHistSilent();

  // Filtra por loja e período
  const agora = new Date();
  const filtrado = historyCache.filter(r=>{
    if(loja!=='todas'&&r.store!==loja) return false;
    const d = new Date(r.ts||r.createdAt?.seconds*1000||Date.now());
    return (agora-d)/(1000*60*60*24)<=parseInt(dias);
  });

  // Monta dados estruturados para a IA
  const porLoja = {};
  const porDia = {};
  const porChecklist = {};
  const itensFalhos = {};

  filtrado.forEach(r=>{
    // Por loja
    if(!porLoja[r.storeName]) porLoja[r.storeName]={total:0,somaPct:0,falhas:[]};
    porLoja[r.storeName].total++;
    porLoja[r.storeName].somaPct+=r.pct;

    // Por dia da semana
    const data = new Date(r.ts||Date.now());
    const diaSemana = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'][data.getDay()];
    if(!porDia[diaSemana]) porDia[diaSemana]={total:0,somaPct:0};
    porDia[diaSemana].total++;
    porDia[diaSemana].somaPct+=r.pct;

    // Por checklist
    if(!porChecklist[r.typeName]) porChecklist[r.typeName]={total:0,somaPct:0};
    porChecklist[r.typeName].total++;
    porChecklist[r.typeName].somaPct+=r.pct;

    // Itens falhos
    (r.itensList||[]).filter(i=>!i.done).forEach(it=>{
      const key = `${r.storeName}|${it.text.substring(0,50)}`;
      if(!itensFalhos[key]) itensFalhos[key]={store:r.storeName,item:it.text,count:0};
      itensFalhos[key].count++;
    });
  });

  // Formata para a IA
  const resumoLojas = Object.entries(porLoja).map(([l,d])=>`${l}: ${Math.round(d.somaPct/d.total)}% (${d.total} registros)`).join('; ');
  const resumoDias = Object.entries(porDia).map(([d,v])=>`${d}: ${Math.round(v.somaPct/v.total)}%`).join('; ');
  const resumoCL = Object.entries(porChecklist).map(([c,v])=>`${c}: ${Math.round(v.somaPct/v.total)}%`).join('; ');
  const topFalhas = Object.values(itensFalhos).sort((a,b)=>b.count-a.count).slice(0,10)
    .map(f=>`"${f.item.substring(0,50)}" em ${f.store} (${f.count}x)`).join('; ');

  const prompt = `Você é um consultor especialista em operações de confeitaria. Analise os dados operacionais abaixo e gere um relatório inteligente com insights reais e acionáveis.

PERÍODO: Últimos ${dias} dias | ESCOPO: ${loja==='todas'?'Todas as lojas':STORES[loja]||loja}
TOTAL DE CHECKLISTS: ${filtrado.length}

CONFORMIDADE POR LOJA:
${resumoLojas}

CONFORMIDADE POR DIA DA SEMANA:
${resumoDias}

CONFORMIDADE POR TIPO DE CHECKLIST:
${resumoCL}

TOP 10 ITENS MAIS FALHOS:
${topFalhas||'Nenhum dado disponível'}

INSTRUÇÕES:
Gere um relatório executivo com:
1. Resumo geral (2-3 linhas com os números principais)
2. Padrões identificados (ex: "A loja Botafogo falha consistentemente na limpeza às sextas-feiras")
3. Lojas em destaque positivo e negativo
4. Os 3 itens que mais prejudicam o score
5. Ações prioritárias com responsável e prazo (máx. 5 ações)
6. Previsão de tendência

Seja específico, use os nomes reais das lojas e dos itens. Escreva como um relatório executivo direto ao dono do negócio.`;

  try{
    const res = await fetch('https://casadebolos-proxy.vercel.app/api/claude',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-5',
        max_tokens:1500,
        messages:[{role:'user',content:prompt}]
      })
    });
    const data = await res.json();
    const reply = data.content?.[0]?.text||'Erro ao gerar relatório.';

    resultado.innerHTML=`
      <div style="border-top:1px solid #E8D8C8;padding-top:12px;margin-top:4px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
          <div style="width:8px;height:8px;background:var(--gn);border-radius:50%;"></div>
          <span style="font-size:.72rem;font-weight:700;color:var(--md);text-transform:uppercase;letter-spacing:.8px;">Relatório IA — ${new Date().toLocaleDateString('pt-BR')} ${new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</span>
        </div>
        <div style="font-size:.83rem;color:var(--br);line-height:1.8;white-space:pre-wrap;">${reply.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>')}</div>
        <div style="margin-top:12px;display:flex;gap:8px;">
          <button onclick="document.getElementById('rel-ia-resultado').style.display='none'" style="font-size:.72rem;padding:5px 14px;border-radius:99px;border:1px solid #E8D8C8;background:transparent;color:var(--md);cursor:pointer;font-family:inherit;">Fechar</button>
          <button onclick="copiarRelatorio()" style="font-size:.72rem;padding:5px 14px;border-radius:99px;border:1px solid var(--gd);background:transparent;color:var(--gd);cursor:pointer;font-family:inherit;">📋 Copiar</button>
        </div>
      </div>`;
  }catch(e){
    resultado.innerHTML='<div style="font-size:.82rem;color:var(--rd);">Erro ao conectar com a IA. Verifique sua internet.</div>';
  }finally{
    btn.disabled=false; btn.textContent='🤖 Gerar relatório com IA';
  }
}

function copiarRelatorio(){
  const texto = document.querySelector('#rel-ia-resultado div[style*="pre-wrap"]')?.innerText||'';
  navigator.clipboard?.writeText(texto).then(()=>toast('📋 Relatório copiado!')).catch(()=>toast('Copie manualmente o texto.'));
}

// ═══════════════════════════════════════════════
//  ANÁLISE DE ESTOQUE IA
// ═══════════════════════════════════════════════
let estFotoBase64 = null;

function updEstItens(){
  const cat = document.getElementById('est-categoria').value;
  const sel = document.getElementById('est-item');
  const custom = document.getElementById('est-item-custom');

  if(cat==='personalizado'){
    sel.style.display='none';
    custom.style.display='block';
    return;
  }
  sel.style.display='block';
  custom.style.display='none';

  const opcoes = {
    embalagens:[
      'Embalagem 32','Embalagem 50','Embalagem 56',
      'Sacola média','Sacola grande','BoloBag',
      'Embalagem iFood','Embalagem de presente','Papel acoplado (rolos)','Velas','Granulado (potes)'
    ],
    materias:[
      'Achocolatado','Açúcar cristal','Açúcar mascavo','Açúcar refinado',
      'Maizena','Farinha de trigo com fermento','Farinha de trigo sem fermento',
      'Fermento em pó','Fubá','Ovos','Leite condensado','Creme de leite',
      'Doce de leite Itambé','Margarina Sofiteli','Chocolate em pó',
      'Gotas de chocolate','Chocolate em barra Harald'
    ],
    limpeza:[
      'Detergente louça','Detergente clorado','Desengordurante','Sanitizante',
      'Álcool 70%','Papel toalha','Luvas descartáveis'
    ]
  };

  sel.innerHTML = (opcoes[cat]||[]).map(o=>`<option value="${o}">${o}</option>`).join('');
}

function estAddFoto(ev){
  const f = ev.target.files[0];
  if(!f) return;
  const r = new FileReader();
  r.onload = async e=>{
    const c = await compressPhoto(e.target.result, 1024, 0.85);
    estFotoBase64 = c.split(',')[1];
    document.getElementById('est-img').src = c;
    document.getElementById('est-preview').style.display='block';
    document.getElementById('est-drop').style.display='none';
  };
  r.readAsDataURL(f);
}

function estNovaFoto(){
  estFotoBase64=null;
  document.getElementById('est-preview').style.display='none';
  document.getElementById('est-drop').style.display='block';
  document.getElementById('est-resultado').style.display='none';
  document.getElementById('est-img').src='';
}

async function analisarEstoque(){
  if(!estFotoBase64){toast('Adicione uma foto primeiro!');return;}

  const cat = document.getElementById('est-categoria').value;
  const itemNome = cat==='personalizado'
    ? document.getElementById('est-item-custom-val').value.trim()
    : document.getElementById('est-item').value;
  const unidade = document.getElementById('est-unidade').value;

  if(!itemNome){toast('Informe o nome do item!');return;}

  const btn = document.getElementById('btn-est-analisar');
  btn.disabled=true; btn.textContent='⏳ Contando...';
  setOv(true,'IA contando itens...');

  const prompt = `Você é um especialista em controle de estoque de confeitaria/padaria.

Analise esta foto de estoque e conte os itens visíveis.
ITEM A CONTAR: ${itemNome}
UNIDADE: ${unidade}

Retorne APENAS um JSON válido:
{
  "quantidade_contada": número inteiro,
  "confianca": "alta/media/baixa",
  "observacoes": "o que você viu na foto",
  "itens_visiveis": "descrição do que está visível",
  "alertas": ["alerta 1 se houver"],
  "recomendacao": "recomendação sobre o estoque"
}

Se não conseguir contar com precisão, estime e indique confiança baixa.`;

  try{
    const res = await fetch('https://casadebolos-proxy.vercel.app/api/claude',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-5',
        max_tokens:600,
        messages:[{role:'user',content:[
          {type:'image',source:{type:'base64',media_type:'image/jpeg',data:estFotoBase64}},
          {type:'text',text:prompt}
        ]}]
      })
    });
    const data = await res.json();
    const text = data.content?.[0]?.text||'';
    const clean = text.replace(/```json|```/g,'').trim();
    const resultado = JSON.parse(clean);

    // Salva no histórico
    const hist = JSON.parse(localStorage.getItem('cb_est_hist')||'[]');
    hist.unshift({
      id:Date.now().toString(),
      item:itemNome, unidade,
      quantidade:resultado.quantidade_contada,
      confianca:resultado.confianca,
      observacoes:resultado.observacoes,
      foto:'data:image/jpeg;base64,'+estFotoBase64,
      data:new Date().toLocaleDateString('pt-BR'),
      hora:new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}),
      operador:ST.user.name
    });
    localStorage.setItem('cb_est_hist',JSON.stringify(hist.slice(0,100)));

    // Renderiza resultado
    const confCor = resultado.confianca==='alta'?'var(--gn)':resultado.confianca==='media'?'var(--or)':'var(--rd)';
    const confLabel = resultado.confianca==='alta'?'✅ Alta':'⚠️ Média';

    document.getElementById('est-resultado-conteudo').innerHTML=`
      <div style="text-align:center;padding:12px 0;border-bottom:1px solid #E8D8C8;margin-bottom:12px;">
        <div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:4px;">${itemNome}</div>
        <div style="font-family:'DM Serif Display',serif;font-size:3.5rem;color:var(--br);line-height:1;">${resultado.quantidade_contada}</div>
        <div style="font-size:.82rem;color:var(--lt);">${unidade}</div>
        <div style="font-size:.72rem;font-weight:700;color:${confCor};margin-top:4px;">Confiança: ${confLabel}</div>
      </div>

      <div style="margin-bottom:10px;">
        <div style="font-size:.7rem;font-weight:700;color:var(--md);margin-bottom:4px;">👁️ O que a IA viu:</div>
        <div style="font-size:.8rem;color:var(--br);line-height:1.5;">${resultado.itens_visiveis}</div>
      </div>

      <div style="margin-bottom:10px;">
        <div style="font-size:.7rem;font-weight:700;color:var(--md);margin-bottom:4px;">📝 Observações:</div>
        <div style="font-size:.8rem;color:var(--br);line-height:1.5;">${resultado.observacoes}</div>
      </div>

      ${resultado.alertas?.length?`<div style="background:#FEF9E7;border:1px solid #F9E79F;border-radius:var(--rs);padding:8px 10px;margin-bottom:10px;">
        ${resultado.alertas.map(a=>`<div style="font-size:.78rem;color:var(--or);">⚠️ ${a}</div>`).join('')}
      </div>`:''}

      <div style="background:#EAF5EE;border:1px solid #B8EFD0;border-radius:var(--rs);padding:8px 10px;margin-bottom:12px;">
        <div style="font-size:.78rem;color:var(--gn);">💡 ${resultado.recomendacao}</div>
      </div>

      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button onclick="usarQtdContagem(${resultado.quantidade_contada},'${itemNome}')" class="btn" style="flex:2;font-size:.8rem;">✅ Usar essa quantidade</button>
        <button onclick="estNovaFoto()" style="flex:1;padding:10px;border-radius:99px;border:1px solid #E8D8C8;background:transparent;color:var(--md);font-family:inherit;font-size:.8rem;cursor:pointer;">📷 Nova foto</button>
      </div>`;

    document.getElementById('est-resultado').style.display='block';
    document.getElementById('est-resultado').scrollIntoView({behavior:'smooth'});
    loadEstHist();

  }catch(e){
    toast('Erro na análise. Tente novamente.');
    console.error(e);
  }finally{
    btn.disabled=false; btn.textContent='🔢 Contar com IA';
    setOv(false);
  }
}

function usarQtdContagem(qtd, item){
  toast(`✅ Quantidade ${qtd} de "${item}" registrada!`);
  // Salva no localStorage para uso no próximo checklist
  const qtds = JSON.parse(localStorage.getItem('cb_qtd_cache')||'{}');
  qtds[item] = qtd;
  localStorage.setItem('cb_qtd_cache', JSON.stringify(qtds));
}

function loadEstHist(){
  const hist = JSON.parse(localStorage.getItem('cb_est_hist')||'[]');
  const el = document.getElementById('est-hist');
  if(!el) return;
  if(!hist.length){el.innerHTML='<div style="font-size:.82rem;color:var(--lt);">Nenhuma contagem registrada.</div>';return;}
  el.innerHTML = hist.slice(0,10).map(h=>{
    const confCor = h.confianca==='alta'?'var(--gn)':h.confianca==='media'?'var(--or)':'var(--rd)';
    return`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #F0E8DC;">
      ${h.foto?`<img src="${h.foto}" style="width:44px;height:44px;object-fit:cover;border-radius:6px;border:1px solid #DDD;flex-shrink:0;" onclick="openZoom('${h.foto}')">`:''}
      <div style="flex:1;min-width:0;">
        <div style="font-size:.82rem;font-weight:700;color:var(--br);">${h.item}</div>
        <div style="font-size:.7rem;color:var(--lt);">${h.data} ${h.hora} · ${h.operador}</div>
        <div style="font-size:.68rem;color:${confCor};">Confiança: ${h.confianca}</div>
      </div>
      <div style="text-align:right;flex-shrink:0;">
        <div style="font-family:'DM Serif Display',serif;font-size:1.4rem;color:var(--br);">${h.quantidade}</div>
        <div style="font-size:.65rem;color:var(--lt);">${h.unidade}</div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════
//  SCORE OPERACIONAL
// ═══════════════════════════════════════════════
async function loadScore(){
  if(!historyCache.length) await loadHistSilent();
  const stores = Object.entries(STORES);

  // Score geral da rede
  const pctGeral = historyCache.length
    ? Math.round(historyCache.reduce((a,r)=>a+r.pct,0)/historyCache.length)
    : 0;
  const cor = pctGeral>=80?'var(--gn)':pctGeral>=60?'var(--or)':'var(--rd)';
  document.getElementById('score-rede').textContent=pctGeral+'%';
  document.getElementById('score-rede').style.color=cor;

  // Pendências e críticos (simulados por % baixo)
  const criticos = historyCache.filter(r=>r.pct<50).length;
  const pendencias = historyCache.filter(r=>r.pct<80&&r.pct>=50).length;
  document.getElementById('score-pendencias').textContent=pendencias;
  document.getElementById('score-criticos').textContent=criticos;

  // Score por loja
  const scoreLojas = stores.map(([k,nome])=>{
    const recs = historyCache.filter(r=>r.store===k);
    const pct = recs.length?Math.round(recs.reduce((a,r)=>a+r.pct,0)/recs.length):0;
    return {nome,pct,total:recs.length,k};
  }).sort((a,b)=>b.pct-a.pct);

  document.getElementById('score-lojas').innerHTML = scoreLojas.map(l=>{
    const c = l.pct>=80?'var(--gn)':l.pct>=60?'var(--or)':'var(--rd)';
    return `<div style="margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
        <span style="font-size:.82rem;font-weight:600;">${l.nome}</span>
        <span style="font-size:.82rem;font-weight:700;color:${c};">${l.pct}%</span>
      </div>
      <div style="height:6px;background:#EEE;border-radius:99px;overflow:hidden;">
        <div style="width:${l.pct}%;height:100%;background:${c};border-radius:99px;transition:width 1s;"></div>
      </div>
      <div style="font-size:.65rem;color:var(--lt);margin-top:2px;">${l.total} registros</div>
    </div>`;
  }).join('');

  // Reincidências detalhadas
  calcReincidencias('score-reincidencias');

  // Planos de ação
  const acoes = JSON.parse(localStorage.getItem('cb_acoes')||'[]');
  const abertas = acoes.filter(a=>a.status!=='resolvido');
  document.getElementById('score-acoes').innerHTML = abertas.length
    ? abertas.map(a=>{
        const riskColor = a.risco==='critico'?'var(--rd)':a.risco==='alto'?'var(--rd)':a.risco==='medio'?'var(--or)':'var(--gd)';
        return `<div style="background:#FDF6EC;border-left:3px solid ${riskColor};border-radius:0 var(--rs) var(--rs) 0;padding:10px 12px;margin-bottom:8px;">
          <div style="font-size:.78rem;font-weight:700;color:var(--br);">${a.item}</div>
          <div style="font-size:.7rem;color:var(--lt);">Loja: ${STORES[a.store]||a.store} · Resp: ${a.responsavel} · Prazo: ${a.prazo}</div>
          <div style="font-size:.65rem;font-weight:700;color:${riskColor};margin-top:3px;text-transform:uppercase;">Risco: ${a.risco}</div>
          <button onclick="resolverAcao('${a.id}')" style="margin-top:6px;font-size:.65rem;padding:3px 10px;border-radius:99px;border:1px solid var(--gn);color:var(--gn);background:transparent;cursor:pointer;font-family:inherit;">Marcar resolvido</button>
        </div>`;
      }).join('')
    : '<div style="font-size:.8rem;color:var(--lt);">Nenhum plano de ação aberto.</div>';
}

function calcReincidencias(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  const agora = new Date();
  const reinci = {};
  historyCache.forEach(r=>{
    const dataRec = new Date(r.ts||r.dateStr);
    const diffDias = Math.floor((agora-dataRec)/(1000*60*60*24));
    (r.itensList||[]).forEach(it=>{
      if(!it.done){
        const key = `${r.store}|${it.text}`;
        if(!reinci[key]) reinci[key]={store:r.store,item:it.text,d7:0,d15:0,d30:0};
        if(diffDias<=7) reinci[key].d7++;
        if(diffDias<=15) reinci[key].d15++;
        if(diffDias<=30) reinci[key].d30++;
      }
    });
  });
  const lista = Object.values(reinci).filter(r=>r.d30>=2).sort((a,b)=>b.d30-a.d30).slice(0,8);
  if(!lista.length){el.innerHTML='<div style="font-size:.8rem;color:var(--lt);">Nenhuma reincidência identificada.</div>';return;}
  el.innerHTML = lista.map(r=>{
    const cor = r.d7>=3?'var(--rd)':r.d15>=3?'var(--or)':'var(--gd)';
    return `<div style="border-left:3px solid ${cor};padding:8px 10px;margin-bottom:8px;background:var(--cr);border-radius:0 var(--rs) var(--rs) 0;">
      <div style="font-size:.78rem;font-weight:700;color:var(--br);">${STORES[r.store]||r.store}: ${r.item.substring(0,50)}${r.item.length>50?'...':''}</div>
      <div style="font-size:.68rem;color:var(--lt);margin-top:3px;">
        Últimos 7d: <strong style="color:${r.d7>=3?'var(--rd)':''}">${r.d7}x</strong> · 
        15d: <strong>${r.d15}x</strong> · 
        30d: <strong>${r.d30}x</strong>
      </div>
    </div>`;
  }).join('');
}

async function loadHistSilent(){
  if(!fbReady || !db){
    const local = JSON.parse(localStorage.getItem('cb_hist')||'[]');
    if(local.length) historyCache = local;
    return;
  }
  try{
    const snap = ST.user?.role==='admin'||ST.user?.store==='todas'
      ? await getDocs(collection(db,'checklists'))
      : await getDocs(query(collection(db,'checklists'),where('store','==',ST.user.store)));
    historyCache = snap.docs.map(d=>({id:d.id,...d.data()}))
      .sort((a,b)=>(b.ts||'').localeCompare(a.ts||''));
  }catch(e){
    console.warn('loadHistSilent:',e.message);
    const local = JSON.parse(localStorage.getItem('cb_hist')||'[]');
    if(local.length) historyCache = local;
  }
}

// ═══════════════════════════════════════════════
//  PLANO DE AÇÃO
// ═══════════════════════════════════════════════
function abrirPlanoAcao(item, store, pct){
  const risco = pct===0?'critico':pct<30?'alto':pct<60?'medio':'baixo';
  const id = Date.now().toString();
  const prazo = risco==='critico'?'Hoje':risco==='alto'?'Amanhã':'Esta semana';
  const acao = {
    id, item, store,
    risco, prazo,
    responsavel:'Gerente',
    status:'aberto',
    criadoEm: new Date().toLocaleDateString('pt-BR'),
    obs:'', fotoCorrecao:''
  };
  const acoes = JSON.parse(localStorage.getItem('cb_acoes')||'[]');
  acoes.unshift(acao);
  localStorage.setItem('cb_acoes',JSON.stringify(acoes.slice(0,100)));
  toast(`📋 Plano de ação criado! Risco: ${risco.toUpperCase()}`);
}

function resolverAcao(id){
  const acoes = JSON.parse(localStorage.getItem('cb_acoes')||'[]');
  const idx = acoes.findIndex(a=>a.id===id);
  if(idx>=0){ acoes[idx].status='resolvido'; localStorage.setItem('cb_acoes',JSON.stringify(acoes)); }
  loadScore();
  toast('✅ Plano de ação resolvido!');
}

// ═══════════════════════════════════════════════
//  IA CHAT
// ═══════════════════════════════════════════════
let iaChatHistory = [];

async function iaEnviar(){
  const input = document.getElementById('ia-input');
  const msg = input.value.trim();
  if(!msg) return;
  input.value='';
  iaAddMsg(msg,'user');
  iaChatHistory.push({role:'user',content:msg});
  await iaCallClaude();
}

async function iaQuick(msg){
  iaAddMsg(msg,'user');
  iaChatHistory.push({role:'user',content:msg});
  await iaCallClaude();
}

function iaAddMsg(text, role){
  const msgs = document.getElementById('ia-messages');
  const div = document.createElement('div');
  const isUser = role==='user';
  div.style.cssText=`background:${isUser?'var(--br)':'#F0E8DC'};color:${isUser?'var(--gd)':'var(--br)'};border-radius:${isUser?'12px 12px 4px 12px':'12px 12px 12px 4px'};padding:10px 14px;font-size:.82rem;line-height:1.5;max-width:88%;${isUser?'align-self:flex-end;margin-left:auto;':''}`;
  div.innerHTML=text.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
  msgs.appendChild(div);
  msgs.scrollTop=msgs.scrollHeight;
}

function iaAddTyping(){
  const msgs = document.getElementById('ia-messages');
  const div = document.createElement('div');
  div.id='ia-typing';
  div.style.cssText='background:#F0E8DC;border-radius:12px 12px 12px 4px;padding:10px 14px;max-width:80px;';
  div.innerHTML='<span style="display:inline-flex;gap:4px;"><span style="width:6px;height:6px;background:var(--lt);border-radius:50%;animation:bounce .8s infinite;display:inline-block;"></span><span style="width:6px;height:6px;background:var(--lt);border-radius:50%;animation:bounce .8s .1s infinite;display:inline-block;"></span><span style="width:6px;height:6px;background:var(--lt);border-radius:50%;animation:bounce .8s .2s infinite;display:inline-block;"></span></span>';
  msgs.appendChild(div);
  msgs.scrollTop=msgs.scrollHeight;
}

async function iaCallClaude(){
  const btn = document.querySelector('#scr-ia button[onclick="iaEnviar()"]');
  if(btn) btn.disabled=true;
  iaAddTyping();

  // Contexto operacional real
  const totalRecs = historyCache.length;
  const hoje = new Date().toLocaleDateString('pt-BR');
  const recsHoje = historyCache.filter(r=>r.dateStr===hoje).length;
  const pctMedio = totalRecs?Math.round(historyCache.reduce((a,r)=>a+r.pct,0)/totalRecs):0;

  const systemPrompt = `Você é o assistente de inteligência operacional do sistema Casa de Bolos.
Dados reais disponíveis:
- Total de registros: ${totalRecs}
- Registros hoje: ${recsHoje}
- Conformidade média da rede: ${pctMedio}%
- Lojas: Méier, Tijuca, Copacabana, Botafogo, Ilha do Governador
Responda em português, de forma objetiva e acionável. Use dados reais quando disponíveis.`;

  try{
    const res = await fetch('https://casadebolos-proxy.vercel.app/api/claude',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-5',
        max_tokens:800,
        system:systemPrompt,
        messages:iaChatHistory.slice(-10)
      })
    });
    const data = await res.json();
    const reply = data.content?.[0]?.text||'Erro ao processar.';
    document.getElementById('ia-typing')?.remove();
    iaAddMsg(reply,'ai');
    iaChatHistory.push({role:'assistant',content:reply});
  }catch(e){
    document.getElementById('ia-typing')?.remove();
    iaAddMsg('Erro de conexão. Verifique sua internet.','ai');
  }finally{
    if(btn) btn.disabled=false;
  }
}

async function iaRelatorio(){
  const periodo = document.getElementById('ia-rel-periodo').value;
  const result = document.getElementById('ia-relatorio-result');
  result.style.display='block';
  result.innerHTML='⏳ Gerando relatório...';

  const pctMedio = historyCache.length?Math.round(historyCache.reduce((a,r)=>a+r.pct,0)/historyCache.length):0;
  const prompt = `Gere um relatório executivo de conformidade operacional para o período: ${periodo}.
Dados: ${historyCache.length} registros, conformidade média ${pctMedio}%.
Lojas: Méier, Tijuca, Copacabana, Botafogo, Ilha do Governador.
Formato: resumo executivo, principais problemas, recomendações prioritárias. Seja objetivo e acionável.`;

  try{
    const res = await fetch('https://casadebolos-proxy.vercel.app/api/claude',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-5',
        max_tokens:1000,
        messages:[{role:'user',content:prompt}]
      })
    });
    const data = await res.json();
    const reply = data.content?.[0]?.text||'Erro.';
    result.innerHTML=reply.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
  }catch(e){
    result.innerHTML='Erro ao gerar relatório.';
  }
}
// ═══════════════════════════════════════════════
//  EXPORTAÇÃO PDF
// ═══════════════════════════════════════════════
async function exportarPDF(){
  const tipo=document.getElementById('exp-tipo').value;
  const loja=document.getElementById('exp-loja').value;
  setOv(true,'Gerando PDF...');
  if(!historyCache.length) await loadHistSilent();
  const filtrado=loja==='todas'?historyCache:historyCache.filter(r=>r.store===loja);
  const hoje=new Date().toLocaleDateString('pt-BR');
  const tiposNome={diario:'Diário',semanal:'Semanal',mensal:'Mensal',sanitario:'Sanitário',nao_conformidades:'Não Conformidades',plano_acao:'Plano de Ação'};
  const pctMedio=filtrado.length?Math.round(filtrado.reduce((a,r)=>a+r.pct,0)/filtrado.length):0;
  const win=window.open('','_blank');
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Relatório ${tiposNome[tipo]} — Casa de Bolos</title>
  <style>body{font-family:Arial,sans-serif;margin:20px;color:#333;}h1{color:#2C1810;border-bottom:2px solid #D4A843;padding-bottom:8px;}h2{color:#6B3D2E;font-size:1rem;margin-top:16px;}.item{padding:6px 0;border-bottom:1px solid #EEE;font-size:.88rem;}.ok{color:#27AE60;}.fail{color:#C0392B;}.meta{color:#999;font-size:.75rem;}.score{font-size:1.5rem;font-weight:bold;color:#2C1810;}@media print{body{margin:0;}}</style></head><body>
  <h1>🎂 Casa de Bolos — Relatório ${tiposNome[tipo]||tipo}</h1>
  <p class="meta">Gerado em: ${hoje} | Loja: ${loja==='todas'?'Todas as lojas':STORES[loja]}</p>
  <p>Total de registros: <strong>${filtrado.length}</strong> | Conformidade média: <span class="score">${pctMedio}%</span></p>
  <h2>Registros</h2>
  ${filtrado.slice(0,50).map(r=>`<div class="item"><strong>${r.storeName}</strong> — ${r.typeName} — ${r.operator}<br><span class="meta">${r.dateStr} ${r.timeStr}</span>${r.gps?`<span class="meta"> 📍${r.gps.lat},${r.gps.lng}</span>`:''}<span class="${r.pct>=80?'ok':'fail'}"> ${r.pct}%</span>${(r.itensList||[]).filter(i=>!i.done).length>0?`<br><span class="fail">❌ ${(r.itensList||[]).filter(i=>!i.done).map(i=>i.text.substring(0,50)).join(' · ')}</span>`:''}</div>`).join('')}
  <script>window.onload=()=>window.print();<\/script></body></html>`);
  win.document.close();
  setOv(false);
}

async function exportarExcel(){
  const tipo=document.getElementById('exp-tipo').value;
  const loja=document.getElementById('exp-loja').value;
  if(!historyCache.length) await loadHistSilent();
  const filtrado=loja==='todas'?historyCache:historyCache.filter(r=>r.store===loja);
  const hoje=new Date().toLocaleDateString('pt-BR').replace(/\//g,'-');
  let csv='Data,Hora,Loja,Checklist,Responsável,Conformidade(%),Feitos,Total,Fotos,GPS\n';
  filtrado.forEach(r=>{
    const gpsStr=r.gps?`${r.gps.lat};${r.gps.lng}`:'';
    csv+=`"${r.dateStr}","${r.timeStr}","${r.storeName}","${r.typeName}","${r.operator}",${r.pct},${r.done},${r.total},${r.totalPhotos},"${gpsStr}"\n`;
  });
  csv+='\n\nNÃO CONFORMIDADES\nData,Hora,Loja,Checklist,Item,Observação\n';
  filtrado.forEach(r=>{
    (r.itensList||[]).filter(i=>!i.done).forEach(it=>{
      csv+=`"${r.dateStr}","${r.timeStr}","${r.storeName}","${r.typeName}","${it.text.replace(/"/g,"'")}","${it.obs||''}"\n`;
    });
  });
  const blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download=`relatorio_casadebolos_${tipo}_${hoje}.csv`;
  a.click();URL.revokeObjectURL(url);
  toast('✅ Excel exportado!');
}

// ═══════════════════════════════════════════════
//  MODO AUDITORIA
// ═══════════════════════════════════════════════
async function iniciarAuditoria(){
  const loja=document.getElementById('aud-loja').value;
  if(!historyCache.length) await loadHistSilent();
  const ultimosCL=historyCache.filter(r=>r.store===loja).slice(0,3);
  if(!ultimosCL.length){document.getElementById('aud-resultado').innerHTML=`<div style="font-size:.82rem;color:var(--rd);">Nenhum checklist encontrado para ${STORES[loja]}.</div>`;return;}
  let html=`<div style="background:#FEF9E7;border:1px solid #F9E79F;border-radius:var(--r);padding:14px;margin-bottom:10px;"><div style="font-size:.75rem;font-weight:700;color:var(--or);margin-bottom:8px;">📋 Últimos checklists de ${STORES[loja]}</div>`;
  ultimosCL.forEach(r=>{
    const naoFeitos=(r.itensList||[]).filter(i=>!i.done);
    html+=`<div style="border-bottom:1px solid #F5E9C0;padding:8px 0;"><div style="font-size:.82rem;font-weight:600;">${r.typeName} — ${r.dateStr} ${r.timeStr}</div><div style="font-size:.75rem;color:var(--md);">Operador: ${r.operator} | Score: ${r.pct}%</div>${r.gps?`<div style="font-size:.7rem;color:var(--lt);">📍 ${r.gps.lat}, ${r.gps.lng}</div>`:''} ${naoFeitos.length?`<div style="font-size:.75rem;color:var(--rd);margin-top:4px;">❌ ${naoFeitos.map(i=>i.text.substring(0,40)).join(', ')}</div>`:'<div style="font-size:.75rem;color:var(--gn);">✅ Todos feitos</div>'}</div>`;
  });
  html+=`</div><div style="background:var(--wm);border:1px solid #E8D8C8;border-radius:var(--r);padding:14px;"><div style="font-size:.75rem;font-weight:700;color:var(--md);margin-bottom:8px;">🔍 Sua avaliação como auditor</div><textarea id="aud-obs" placeholder="Descreva o que encontrou..." style="width:100%;padding:10px;border-radius:var(--rs);border:1px solid #E8D8C8;font-family:inherit;font-size:.82rem;min-height:80px;resize:vertical;"></textarea><div style="margin-top:8px;"><span class="fl">Nota da auditoria (0-100)</span><input type="number" id="aud-nota" min="0" max="100" placeholder="85" style="width:100%;padding:9px;border-radius:var(--rs);border:1px solid #E8D8C8;font-family:inherit;font-size:.88rem;"></div><div class="uarea" style="margin-top:10px;"><input type="file" accept="image/*" capture="environment" onchange="audFotoUp(event)"><div class="uicon">📷</div><div class="utxt">Foto obrigatória</div></div><div id="aud-fotos" style="margin-top:8px;"></div><button class="btn" style="margin-top:10px;" onclick="salvarAuditoria('${loja}')">📤 Salvar auditoria</button></div>`;
  document.getElementById('aud-resultado').innerHTML=html;
}

let _audFotos=[];
function audFotoUp(ev){
  Array.from(ev.target.files).forEach(f=>{
    const r=new FileReader();
    r.onload=async e=>{const c=await compressPhoto(e.target.result);_audFotos.push(c);document.getElementById('aud-fotos').innerHTML=_audFotos.map(p=>`<img src="${p}" style="width:70px;height:70px;object-fit:cover;border-radius:6px;margin:3px;">`).join('');};
    r.readAsDataURL(f);
  });
}

async function salvarAuditoria(loja){
  const obs=document.getElementById('aud-obs')?.value||'';
  const nota=document.getElementById('aud-nota')?.value;
  if(!nota){toast('Informe a nota!');return;}
  const aud={id:Date.now().toString(),loja,lojaName:STORES[loja],obs,nota:parseInt(nota),fotos:[..._audFotos],data:new Date().toLocaleDateString('pt-BR'),hora:new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}),auditor:ST.user.name};
  const audits=JSON.parse(localStorage.getItem('cb_audits')||'[]');
  audits.unshift(aud);localStorage.setItem('cb_audits',JSON.stringify(audits.slice(0,50)));
  _audFotos=[];
  toast('✅ Auditoria salva!');
  document.getElementById('aud-resultado').innerHTML=`<div style="background:var(--gnb);border:1px solid #B8EFD0;border-radius:var(--r);padding:14px;font-size:.82rem;color:var(--gn);">✅ Auditoria registrada! Nota: ${nota}/100</div>`;
}

// ═══════════════════════════════════════════════
//  ALERTAS E EMAIL
// ═══════════════════════════════════════════════
function salvarAlertas(){
  const config={checklist:document.getElementById('alerta-checklist').checked,critico:document.getElementById('alerta-critico').checked,temperatura:document.getElementById('alerta-temperatura').checked,validade:document.getElementById('alerta-validade').checked,reincidencia:document.getElementById('alerta-reincidencia').checked,score:document.getElementById('alerta-score').checked,email:document.getElementById('alerta-email').value};
  localStorage.setItem('cb_alertas',JSON.stringify(config));
  toast('✅ Alertas salvos!');
}

// ═══════════════════════════════════════════════
//  APROVAÇÃO DE PLANOS DE AÇÃO
// ═══════════════════════════════════════════════
function carregarAprovacoes(){
  const acoes=JSON.parse(localStorage.getItem('cb_acoes')||'[]');
  const pendentes=acoes.filter(a=>a.status==='aberto');
  const el=document.getElementById('aprovacao-lista');
  if(!el) return;
  if(!pendentes.length){el.innerHTML='<div style="font-size:.8rem;color:var(--lt);">Nenhum plano aguardando aprovação.</div>';return;}
  el.innerHTML=pendentes.map(a=>{
    const rc=a.risco==='critico'||a.risco==='alto'?'var(--rd)':a.risco==='medio'?'var(--or)':'var(--gd)';
    return`<div style="background:var(--cr);border-left:3px solid ${rc};border-radius:0 var(--rs) var(--rs) 0;padding:10px 12px;margin-bottom:8px;"><div style="font-size:.78rem;font-weight:700;color:var(--br);">${a.item}</div><div style="font-size:.7rem;color:var(--lt);">${STORES[a.store]||a.store} · Resp: ${a.responsavel} · Prazo: ${a.prazo}</div><div style="font-size:.65rem;font-weight:700;color:${rc};text-transform:uppercase;margin:4px 0;">Risco: ${a.risco}</div><textarea placeholder="Observação..." style="width:100%;font-size:.75rem;padding:6px;border-radius:6px;border:1px solid #E8D8C8;font-family:inherit;min-height:40px;resize:none;margin-bottom:6px;" id="ap-obs-${a.id}"></textarea><div style="display:flex;gap:6px;"><button onclick="aprovarAcao('${a.id}','aprovado')" style="flex:1;font-size:.7rem;padding:5px;border-radius:99px;border:none;background:var(--gn);color:white;cursor:pointer;font-family:inherit;">✅ Aprovar</button><button onclick="aprovarAcao('${a.id}','reprovado')" style="flex:1;font-size:.7rem;padding:5px;border-radius:99px;border:none;background:var(--rd);color:white;cursor:pointer;font-family:inherit;">❌ Reprovar</button></div></div>`;
  }).join('');
}

function aprovarAcao(id,decisao){
  const acoes=JSON.parse(localStorage.getItem('cb_acoes')||'[]');
  const idx=acoes.findIndex(a=>a.id===id);
  if(idx>=0){const obs=document.getElementById(`ap-obs-${id}`)?.value||'';acoes[idx].status=decisao;acoes[idx].aprovadoPor=ST.user.name;acoes[idx].obsAprovacao=obs;acoes[idx].dataAprovacao=new Date().toLocaleDateString('pt-BR');localStorage.setItem('cb_acoes',JSON.stringify(acoes));}
  toast(`${decisao==='aprovado'?'✅ Aprovado':'❌ Reprovado'}!`);
  carregarAprovacoes();
}

// ═══════════════════════════════════════════════
//  ADMIN
// ═══════════════════════════════════════════════
function renderAdmin(){
  const users=getUsers();
  document.getElementById('users-list').innerHTML=users.map((u,i)=>`
    <div class="user-row">
      <div class="user-avatar" style="background:${u.role==='admin'?'#D4A843':'#27AE60'}">${u.name.charAt(0)}</div>
      <div class="user-info"><div class="user-name">${u.name}</div><div class="user-meta">Login: ${u.login} · ${u.store==='todas'?'Todas':STORES[u.store]||u.store}</div></div>
      <span class="user-role ${u.role==='admin'?'role-admin':'role-user'}">${u.role==='admin'?'Admin':'Usuário'}</span>
      ${u.role!=='admin'?`<button class="user-del" onclick="delUser(${i})">🗑</button>`:''}
    </div>`).join('');
  // Stats
  document.getElementById('admin-stats').innerHTML='⏳ Carregando...';
  if(fbReady && db){
    getDocs(collection(db,'checklists')).then(snap=>{
      const total=snap.size;
      const hoje=new Date().toLocaleDateString('pt-BR');
      const hoje_count=snap.docs.filter(d=>d.data().dateStr===hoje).length;
      document.getElementById('admin-stats').innerHTML=`
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px;">
          <div style="background:var(--cr);border-radius:10px;padding:12px;text-align:center;"><div style="font-family:'DM Serif Display',serif;font-size:1.8rem;">${total}</div><div style="font-size:.7rem;color:var(--lt);">Total de registros</div></div>
          <div style="background:var(--cr);border-radius:10px;padding:12px;text-align:center;"><div style="font-family:'DM Serif Display',serif;font-size:1.8rem;">${hoje_count}</div><div style="font-size:.7rem;color:var(--lt);">Hoje</div></div>
        </div>`;
    }).catch(()=>{document.getElementById('admin-stats').innerHTML='Erro ao carregar stats.';});
  } else {
    const local = JSON.parse(localStorage.getItem('cb_hist')||'[]');
    const hoje=new Date().toLocaleDateString('pt-BR');
    document.getElementById('admin-stats').innerHTML=`
      <div style="font-size:.78rem;color:var(--or);">⚠️ Modo offline</div>
      <div style="font-size:.82rem;color:var(--md);margin-top:4px;">${local.length} registros locais · ${local.filter(r=>r.dateStr===hoje).length} hoje</div>`;
  }
}

function addUser(){
  const login=document.getElementById('nu-login').value.trim().toLowerCase();
  const pass=document.getElementById('nu-pass').value;
  const name=document.getElementById('nu-name').value.trim();
  const store=document.getElementById('nu-store').value;
  if(!login||!pass||!name){toast('Preencha todos os campos!');return;}
  if(pass.length<4){toast('Senha mínimo 4 caracteres!');return;}
  const users=getUsers();
  if(users.find(u=>u.login===login)){toast('Login já existe!');return;}
  const local=JSON.parse(localStorage.getItem('cb_users')||'[]');
  local.push({login,pass,name,store,role:'user'});
  localStorage.setItem('cb_users',JSON.stringify(local));
  document.getElementById('nu-login').value='';document.getElementById('nu-pass').value='';document.getElementById('nu-name').value='';
  renderAdmin();toast('✅ Usuário cadastrado!');
}

function delUser(i){
  const users=getUsers();
  if(users[i].role==='admin'){toast('Não é possível remover o admin!');return;}
  const local=JSON.parse(localStorage.getItem('cb_users')||'[]');
  const idx=local.findIndex(u=>u.login===users[i].login);
  if(idx>=0)local.splice(idx,1);
  localStorage.setItem('cb_users',JSON.stringify(local));
  renderAdmin();toast('Usuário removido.');
}

// ═══════════════════════════════════════════════
//  UTILS
// ═══════════════════════════════════════════════
function openZoom(src){document.getElementById('zoom-img').src=src;document.getElementById('zoom-modal').classList.add('show');}
function closeZoom(){document.getElementById('zoom-modal').classList.remove('show');}
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),2800);}
function setOv(v,txt=''){document.getElementById('overlay').classList.toggle('on',v);if(txt)document.getElementById('ov-txt').textContent=txt;}

// Expor funções globalmente
// ═══════════════════════════════════════════════
//  PADRÃO IA — RECONHECIMENTO DE PADRÃO POR FOTO
// ═══════════════════════════════════════════════
let padFotos = {frontal:[], lateral:[], detalhe:[]};
let compFotoBase64 = null;

const PAD_CATEGORIAS = {
  vitrine:'🛍️ Vitrine e Balcão',
  limpeza:'🧹 Limpeza Geral',
  uniforme:'👕 Uniforme da Equipe',
  estoque:'📦 Estoque Organizado',
  cozinha:'👨‍🍳 Cozinha e Produção',
  embalagens:'📫 Embalagens',
  geladeira:'🥶 Geladeira e Câmara',
  banheiro:'🚿 Banheiro'
};

function padraTab(tab){
  ['cadastrar','comparar','historico'].forEach(t=>{
    document.getElementById('padrao-'+t).style.display = t===tab?'':'none';
    const btn = document.getElementById('ptab-'+t);
    btn.style.color = t===tab?'var(--gd)':'var(--lt)';
    btn.style.borderBottom = t===tab?'2px solid var(--gd)':'none';
    btn.style.fontWeight = t===tab?'700':'600';
  });
  if(tab==='cadastrar') renderPadLista();
  if(tab==='comparar') updCompSelect();
  if(tab==='historico') loadPadraoHist();
}

async function addPadFoto(ev, angulo){
  const files = Array.from(ev.target.files);
  for(const f of files){
    if(padFotos[angulo].length>=5){toast('Máximo 5 fotos por ângulo!');break;}
    const r = new FileReader();
    await new Promise(res=>{
      r.onload = async e=>{
        const c = await compressPhoto(e.target.result, 600, 0.7);
        padFotos[angulo].push(c);
        renderPadThumbs(angulo);
        res();
      };
      r.readAsDataURL(f);
    });
  }
}

function renderPadThumbs(angulo){
  const el = document.getElementById('pad-thumb-'+angulo);
  if(!el) return;
  el.innerHTML = padFotos[angulo].map((p,i)=>`
    <div style="position:relative;">
      <img src="${p}" style="width:48px;height:48px;object-fit:cover;border-radius:5px;border:2px solid var(--gn);">
      <button onclick="rmPadFoto('${angulo}',${i})" style="position:absolute;top:-5px;right:-5px;background:var(--rd);color:white;border:none;border-radius:50%;width:16px;height:16px;font-size:.55rem;cursor:pointer;line-height:1;display:flex;align-items:center;justify-content:center;">×</button>
    </div>`).join('');
}

function rmPadFoto(angulo, idx){
  padFotos[angulo].splice(idx,1);
  renderPadThumbs(angulo);
}

function salvarPadrao(){
  const nome = document.getElementById('pad-nome').value.trim();
  const cat = document.getElementById('pad-categoria').value;
  const criterios = document.getElementById('pad-criterios').value.trim();
  const sev = document.getElementById('pad-severidade').value;
  const totalFotos = padFotos.frontal.length + padFotos.lateral.length + padFotos.detalhe.length;

  if(!nome){toast('Informe o nome do padrão!');return;}
  if(!criterios){toast('Descreva os critérios do padrão!');return;}
  if(totalFotos===0){toast('Adicione pelo menos 1 foto padrão!');return;}

  const padrao = {
    id: Date.now().toString(),
    nome, cat, criterios, sev,
    catNome: PAD_CATEGORIAS[cat],
    fotos: {...padFotos},
    totalFotos,
    criadoPor: ST.user.name,
    criadoEm: new Date().toLocaleDateString('pt-BR'),
    totalAnalises: 0,
    mediaScore: 0
  };

  const padroes = JSON.parse(localStorage.getItem('cb_padroes')||'[]');
  padroes.unshift(padrao);
  localStorage.setItem('cb_padroes', JSON.stringify(padroes));

  // Reset form
  padFotos = {frontal:[],lateral:[],detalhe:[]};
  ['frontal','lateral','detalhe'].forEach(a=>renderPadThumbs(a));
  document.getElementById('pad-nome').value='';
  document.getElementById('pad-criterios').value='';

  toast('✅ Padrão salvo com sucesso!');
  renderPadLista();
}

function renderPadLista(){
  const padroes = JSON.parse(localStorage.getItem('cb_padroes')||'[]');
  const el = document.getElementById('pad-lista');
  if(!el) return;
  if(!padroes.length){
    el.innerHTML='<div style="font-size:.82rem;color:var(--lt);">Nenhum padrão cadastrado ainda.</div>';
    return;
  }
  el.innerHTML = padroes.map(p=>{
    const sevColor = p.sev==='critico'?'var(--rd)':p.sev==='alto'?'var(--or)':p.sev==='medio'?'var(--gd)':'var(--gn)';
    const sevLabel = p.sev==='critico'?'🔴 Crítico':p.sev==='alto'?'🟠 Alto':p.sev==='medio'?'🟡 Médio':'🟢 Baixo';
    const allFotos = [...(p.fotos.frontal||[]),...(p.fotos.lateral||[]),...(p.fotos.detalhe||[])];
    return`<div style="border:1px solid #E8D8C8;border-radius:var(--rs);padding:12px;margin-bottom:10px;background:var(--cr);">
      <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:8px;">
        <div style="flex:1;">
          <div style="font-size:.85rem;font-weight:700;color:var(--br);">${p.catNome}</div>
          <div style="font-size:.78rem;color:var(--md);margin-top:1px;">${p.nome}</div>
          <div style="font-size:.65rem;color:var(--lt);margin-top:2px;">Criado por ${p.criadoPor} · ${p.criadoEm} · ${p.totalFotos} foto(s)</div>
        </div>
        <div style="text-align:right;">
          <span style="font-size:.65rem;font-weight:700;color:${sevColor};">${sevLabel}</span>
          ${p.totalAnalises>0?`<div style="font-size:.65rem;color:var(--lt);margin-top:2px;">📊 ${p.totalAnalises} análises · média ${p.mediaScore}%</div>`:''}
        </div>
      </div>
      <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px;">
        ${allFotos.slice(0,4).map(f=>`<img src="${f}" style="width:52px;height:52px;object-fit:cover;border-radius:5px;border:1px solid #DDD;" onclick="openZoom('${f}')">`).join('')}
        ${allFotos.length>4?`<div style="width:52px;height:52px;background:#EEE;border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:.7rem;color:var(--lt);">+${allFotos.length-4}</div>`:''}
      </div>
      <div style="font-size:.72rem;color:var(--md);background:#F5EDE0;padding:7px 9px;border-radius:var(--rs);line-height:1.5;margin-bottom:8px;">${p.criterios.substring(0,120)}${p.criterios.length>120?'...':''}</div>
      <button onclick="excluirPadrao('${p.id}')" style="font-size:.68rem;padding:4px 12px;border-radius:99px;border:1px solid var(--rd);color:var(--rd);background:transparent;cursor:pointer;font-family:inherit;">🗑 Excluir</button>
    </div>`;
  }).join('');
}

function excluirPadrao(id){
  const padroes = JSON.parse(localStorage.getItem('cb_padroes')||'[]');
  const novo = padroes.filter(p=>p.id!==id);
  localStorage.setItem('cb_padroes',JSON.stringify(novo));
  renderPadLista();
  updCompSelect();
  toast('Padrão excluído.');
}

function updCompSelect(){
  const padroes = JSON.parse(localStorage.getItem('cb_padroes')||'[]');
  const sel = document.getElementById('comp-padrao-sel');
  if(!sel) return;
  sel.innerHTML = '<option value="">Selecione o padrão...</option>';
  padroes.forEach(p=>{
    sel.innerHTML += `<option value="${p.id}">${p.catNome} — ${p.nome}</option>`;
  });
}

function updCompPadrao(){
  const id = document.getElementById('comp-padrao-sel').value;
  const preview = document.getElementById('comp-padrao-preview');
  if(!id){preview.style.display='none';return;}
  const padroes = JSON.parse(localStorage.getItem('cb_padroes')||'[]');
  const p = padroes.find(x=>x.id===id);
  if(!p){preview.style.display='none';return;}

  const allFotos = [...(p.fotos.frontal||[]),...(p.fotos.lateral||[]),...(p.fotos.detalhe||[])];
  document.getElementById('comp-padrao-fotos').innerHTML = allFotos.map((f,i)=>{
    const label = i<p.fotos.frontal.length?'Frontal':i<p.fotos.frontal.length+p.fotos.lateral.length?'Lateral':'Detalhe';
    return`<div style="text-align:center;">
      <img src="${f}" style="width:70px;height:70px;object-fit:cover;border-radius:6px;border:2px solid var(--gn);cursor:pointer;" onclick="openZoom('${f}')">
      <div style="font-size:.55rem;color:var(--lt);margin-top:2px;">${label}</div>
    </div>`;
  }).join('');

  document.getElementById('comp-padrao-criterios').innerHTML = `<strong>Critérios:</strong> ${p.criterios}`;
  preview.style.display='block';
}

async function addCompFoto(ev){
  const f = ev.target.files[0];
  if(!f) return;
  const r = new FileReader();
  r.onload = async e=>{
    const c = await compressPhoto(e.target.result, 800, 0.75);
    compFotoBase64 = c.split(',')[1];
    document.getElementById('comp-img').src = c;
    document.getElementById('comp-preview').style.display='block';
    document.getElementById('comp-drop').style.display='none';
  };
  r.readAsDataURL(f);
}

async function compararFoto(){
  const padId = document.getElementById('comp-padrao-sel').value;
  if(!padId){toast('Selecione um padrão de referência!');return;}
  if(!compFotoBase64){toast('Adicione a foto para análise!');return;}

  const padroes = JSON.parse(localStorage.getItem('cb_padroes')||'[]');
  const padrao = padroes.find(p=>p.id===padId);
  if(!padrao){toast('Padrão não encontrado!');return;}

  const loja = document.getElementById('comp-loja').value;
  const responsavel = document.getElementById('comp-responsavel').value||ST.user.name;
  const btn = document.getElementById('btn-comparar');
  btn.disabled=true; btn.textContent='⏳ Analisando...';
  setOv(true,'IA analisando conformidade...');

  const allPadFotos = [...(padrao.fotos.frontal||[]),...(padrao.fotos.lateral||[]),...(padrao.fotos.detalhe||[])];
  const padBase64s = allPadFotos.slice(0,3).map(f=>f.split(',')[1]).filter(Boolean);

  // Monta mensagem com fotos padrão + foto enviada
  const content = [
    {type:'text', text:`Você é um auditor especializado em qualidade operacional de confeitaria.

CATEGORIA AVALIADA: ${padrao.catNome}
PADRÃO: ${padrao.nome}

CRITÉRIOS DO PADRÃO IDEAL:
${padrao.criterios}

As primeiras ${padBase64s.length} imagem(ns) são as FOTOS PADRÃO (referência ideal).
A ÚLTIMA imagem é a FOTO ENVIADA pelo funcionário para análise.

Analise comparativamente e retorne APENAS um JSON válido:
{
  "score": 0-100,
  "aprovado": true/false,
  "conformidades": ["item conforme 1", "item conforme 2"],
  "nao_conformidades": ["problema 1 encontrado", "problema 2"],
  "comparacao": "texto comparando o que está igual e diferente do padrão",
  "recomendacoes": ["ação corretiva 1", "ação corretiva 2"],
  "urgencia": "imediata/hoje/semana",
  "resumo": "avaliação geral em 2 linhas"
}`},
    ...padBase64s.map(b=>({type:'image',source:{type:'base64',media_type:'image/jpeg',data:b}})),
    {type:'image',source:{type:'base64',media_type:'image/jpeg',data:compFotoBase64}}
  ];

  try{
    const res = await fetch('https://casadebolos-proxy.vercel.app/api/claude',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-5',
        max_tokens:1200,
        messages:[{role:'user',content}]
      })
    });
    const data = await res.json();
    const text = data.content?.[0]?.text||'';
    const clean = text.replace(/```json|```/g,'').trim();
    const resultado = JSON.parse(clean);

    // Atualiza stats do padrão
    const idx = padroes.findIndex(p=>p.id===padId);
    if(idx>=0){
      padroes[idx].totalAnalises = (padroes[idx].totalAnalises||0)+1;
      const scores = JSON.parse(localStorage.getItem('cb_comp_hist')||'[]')
        .filter(h=>h.padId===padId).map(h=>h.score);
      scores.push(resultado.score);
      padroes[idx].mediaScore = Math.round(scores.reduce((a,b)=>a+b,0)/scores.length);
      localStorage.setItem('cb_padroes',JSON.stringify(padroes));
    }

    // Salva no histórico
    const hist = JSON.parse(localStorage.getItem('cb_comp_hist')||'[]');
    const rec = {
      id:Date.now().toString(),
      padId, padNome:padrao.nome, padCat:padrao.catNome,
      loja, lojaName:STORES[loja], responsavel,
      score:resultado.score, aprovado:resultado.aprovado,
      naoConformidades:resultado.nao_conformidades,
      recomendacoes:resultado.recomendacoes,
      urgencia:resultado.urgencia,
      fotoEnviada:'data:image/jpeg;base64,'+compFotoBase64,
      data:new Date().toLocaleDateString('pt-BR'),
      hora:new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'}),
      resultado
    };
    hist.unshift(rec);
    localStorage.setItem('cb_comp_hist',JSON.stringify(hist.slice(0,200)));

    // Se reprovado, cria plano de ação automático
    if(!resultado.aprovado){
      resultado.nao_conformidades?.forEach(nc=>{
        abrirPlanoAcao(`[${padrao.catNome}] ${nc}`, loja, resultado.score);
      });
    }

    // Exibe resultado
    renderCompResultado(resultado, padrao, rec);

    // Alerta WhatsApp se crítico e reprovado
    if(!resultado.aprovado && padrao.sev==='critico'){
      enviarWpp({
        storeName:STORES[loja], typeName:'Análise IA — '+padrao.catNome,
        operator:responsavel, pct:resultado.score,
        dateStr:rec.data, timeStr:rec.hora,
        itensList:resultado.nao_conformidades?.map(nc=>({done:false,text:nc,obs:'',photo:false}))
      });
    }

  }catch(e){
    toast('Erro na análise. Tente novamente.');
    console.error(e);
  }finally{
    btn.disabled=false; btn.textContent='🔍 Analisar com IA';
    setOv(false);
  }
}

function renderCompResultado(r, padrao, rec){
  const scoreColor = r.score>=80?'var(--gn)':r.score>=60?'var(--or)':'var(--rd)';
  const urgLabel = r.urgencia==='imediata'?'⚡ Correção imediata!':r.urgencia==='hoje'?'🔴 Corrigir hoje':'🟡 Corrigir esta semana';
  const sevColor = padrao.sev==='critico'?'var(--rd)':padrao.sev==='alto'?'var(--or)':'var(--gd)';

  document.getElementById('comp-resultado-card').innerHTML=`
    <!-- SCORE -->
    <div style="text-align:center;padding:16px 0;border-bottom:1px solid #E8D8C8;margin-bottom:14px;">
      <div style="font-family:'DM Serif Display',serif;font-size:3rem;color:${scoreColor};line-height:1;">${r.score}%</div>
      <div style="font-size:.82rem;font-weight:700;color:${r.aprovado?'var(--gn)':'var(--rd)'};margin-top:4px;">${r.aprovado?'✅ APROVADO':'❌ REPROVADO'}</div>
      <div style="font-size:.72rem;color:var(--lt);margin-top:2px;">${padrao.catNome} — ${rec.lojaName} · ${rec.data}</div>
      ${!r.aprovado?`<div style="font-size:.72rem;font-weight:700;color:var(--rd);margin-top:6px;">${urgLabel}</div>`:''}
    </div>

    <!-- COMPARAÇÃO -->
    <div style="font-size:.82rem;color:var(--br);line-height:1.6;background:#F5EDE0;padding:10px 12px;border-radius:var(--rs);margin-bottom:12px;">
      <strong>📊 Análise comparativa:</strong><br>${r.comparacao}
    </div>

    <!-- CONFORMIDADES -->
    ${r.conformidades?.length?`<div style="margin-bottom:12px;">
      <div style="font-size:.7rem;font-weight:700;color:var(--gn);margin-bottom:6px;text-transform:uppercase;letter-spacing:.8px;">✅ Em conformidade (${r.conformidades.length})</div>
      ${r.conformidades.map(c=>`<div style="font-size:.78rem;padding:4px 0;color:var(--br);border-bottom:1px solid #F0E8DC;">• ${c}</div>`).join('')}
    </div>`:''}

    <!-- NÃO CONFORMIDADES -->
    ${r.nao_conformidades?.length?`<div style="margin-bottom:12px;">
      <div style="font-size:.7rem;font-weight:700;color:var(--rd);margin-bottom:6px;text-transform:uppercase;letter-spacing:.8px;">❌ Não conformidades (${r.nao_conformidades.length})</div>
      ${r.nao_conformidades.map(c=>`<div style="font-size:.78rem;padding:4px 0;color:var(--rd);border-bottom:1px solid #FDEDEC;">• ${c}</div>`).join('')}
    </div>`:''}

    <!-- RECOMENDAÇÕES -->
    ${r.recomendacoes?.length?`<div style="margin-bottom:12px;">
      <div style="font-size:.7rem;font-weight:700;color:var(--md);margin-bottom:6px;text-transform:uppercase;letter-spacing:.8px;">💡 Ações corretivas</div>
      ${r.recomendacoes.map((c,i)=>`<div style="font-size:.78rem;padding:6px 0;color:var(--br);border-bottom:1px solid #F0E8DC;"><strong>${i+1}.</strong> ${c}</div>`).join('')}
    </div>`:''}

    <!-- BOTÕES -->
    <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap;">
      <button onclick="novaAnalise()" style="flex:1;padding:10px;border-radius:99px;background:var(--br);color:var(--gd);border:none;font-family:inherit;font-size:.8rem;font-weight:600;cursor:pointer;">Nova análise</button>
      ${!r.aprovado?`<button onclick="padraTab('historico')" style="flex:1;padding:10px;border-radius:99px;background:transparent;color:var(--md);border:1px solid #E8D8C8;font-family:inherit;font-size:.8rem;cursor:pointer;">Ver histórico</button>`:''}
    </div>`;

  document.getElementById('comp-resultado').style.display='block';
  document.getElementById('comp-resultado').scrollIntoView({behavior:'smooth'});
}

function novaAnalise(){
  compFotoBase64=null;
  document.getElementById('comp-preview').style.display='none';
  document.getElementById('comp-drop').style.display='block';
  document.getElementById('comp-resultado').style.display='none';
  document.getElementById('comp-img').src='';
  window.scrollTo(0,0);
}

function loadPadraoHist(){
  const hist = JSON.parse(localStorage.getItem('cb_comp_hist')||'[]');
  const el = document.getElementById('pad-historico-lista');
  if(!el) return;
  if(!hist.length){el.innerHTML='<div style="font-size:.82rem;color:var(--lt);">Nenhuma análise registrada.</div>';return;}

  el.innerHTML = hist.map(h=>{
    const c = h.score>=80?'var(--gn)':h.score>=60?'var(--or)':'var(--rd)';
    return`<div style="border:1px solid #E8D8C8;border-radius:var(--rs);padding:12px;margin-bottom:8px;background:var(--cr);">
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:44px;height:44px;border-radius:50%;background:${c}20;border:2px solid ${c};display:flex;align-items:center;justify-content:center;font-size:.85rem;font-weight:700;color:${c};flex-shrink:0;">${h.score}%</div>
        <div style="flex:1;">
          <div style="font-size:.82rem;font-weight:700;color:var(--br);">${h.padCat} — ${h.lojaName}</div>
          <div style="font-size:.72rem;color:var(--lt);">${h.padNome} · ${h.responsavel} · ${h.data} ${h.hora}</div>
          <div style="font-size:.68rem;color:${h.aprovado?'var(--gn)':'var(--rd)'};font-weight:700;margin-top:2px;">${h.aprovado?'✅ APROVADO':'❌ REPROVADO'}</div>
        </div>
        ${h.fotoEnviada?`<img src="${h.fotoEnviada}" style="width:52px;height:52px;object-fit:cover;border-radius:6px;border:1px solid #DDD;flex-shrink:0;" onclick="openZoom('${h.fotoEnviada}')">`:''}
      </div>
      ${h.naoConformidades?.length?`<div style="margin-top:8px;font-size:.72rem;color:var(--rd);">❌ ${h.naoConformidades.join(' · ')}</div>`:''}
    </div>`;
  }).join('');
}

window.gerarRelatorioIA=gerarRelatorioIA;window.copiarRelatorio=copiarRelatorio;
window.updEstItens=updEstItens;window.estAddFoto=estAddFoto;window.estNovaFoto=estNovaFoto;
window.analisarEstoque=analisarEstoque;window.usarQtdContagem=usarQtdContagem;window.loadEstHist=loadEstHist;
window.padraTab=padraTab;
window.addPadFoto=addPadFoto;
window.rmPadFoto=rmPadFoto;
window.salvarPadrao=salvarPadrao;
window.excluirPadrao=excluirPadrao;
window.updCompPadrao=updCompPadrao;
window.addCompFoto=addCompFoto;
window.compararFoto=compararFoto;
window.novaAnalise=novaAnalise;
window.loadPadraoHist=loadPadraoHist;

// ── EXPOSIÇÃO GLOBAL DE TODAS AS FUNÇÕES ──
window.doLogin=doLogin;
window.doLogout=doLogout;
window.goTab=goTab;
window.goBack=goBack;
window.newCL=newCL;
window.pick=pick;
window.updBtn=updBtn;
window.startCL=startCL;
window.toggle=toggle;
window.toggleCount=toggleCount;
window.addPh=addPh;
window.rmPh=rmPh;
window.saveObs=saveObs;
window.saveQty=saveQty;
window.checkQty=checkQty;
window.sendCL=sendCL;
window.compressPhoto=compressPhoto;
window.setHistFilter=setHistFilter;
window.toggleHist=toggleHist;
window.editarChecklist=editarChecklist;
window.loadHist=loadHist;
window.reconectarFirebase=reconectarFirebase;
window.loadPainel=loadPainel;
window.loadScore=loadScore;
window.gerarRelatorioIA=gerarRelatorioIA;
window.copiarRelatorio=copiarRelatorio;
window.exportarPDF=exportarPDF;
window.exportarExcel=exportarExcel;
window.iniciarAuditoria=iniciarAuditoria;
window.audFotoUp=audFotoUp;
window.salvarAuditoria=salvarAuditoria;
window.salvarAlertas=salvarAlertas;
window.carregarAprovacoes=carregarAprovacoes;
window.aprovarAcao=aprovarAcao;
window.resolverAcao=resolverAcao;
window.iaEnviar=iaEnviar;
window.iaQuick=iaQuick;
window.iaRelatorio=iaRelatorio;
window.updEstItens=updEstItens;
window.estAddFoto=estAddFoto;
window.estNovaFoto=estNovaFoto;
window.analisarEstoque=analisarEstoque;
window.usarQtdContagem=usarQtdContagem;
window.loadEstHist=loadEstHist;
window.padraTab=padraTab;
window.addPadFoto=addPadFoto;
window.rmPadFoto=rmPadFoto;
window.salvarPadrao=salvarPadrao;
window.excluirPadrao=excluirPadrao;
window.updCompPadrao=updCompPadrao;
window.addCompFoto=addCompFoto;
window.addUser=addUser;
window.delUser=delUser;
window.openZoom=openZoom;
window.closeZoom=closeZoom;
</script>
</body>
</html>
