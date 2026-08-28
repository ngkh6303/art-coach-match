/* Studio Field Notes reminder: 繁體中文編輯式工作室氣質、米白紙張、墨綠與陶土橙；內容先建立信任，再引導申請。 */
import { useState } from "react";
import { ArrowDownRight, ArrowRight, Check, Menu, X } from "lucide-react";

const GOOGLE_FORM_URL = "";
const artTracks = [
  ["01", "繪畫與插畫", "觀察、角色、視覺故事與個人風格"],
  ["02", "色彩與綜合媒介", "粉彩、水彩、壓克力、拼貼與混合創作"],
  ["03", "立體創作與手作", "紙材、黏土、物件與有趣的空間結構"],
];
const steps = [
  ["01", "先了解孩子", "分享孩子的年齡、興趣、創作習慣，以及他們喜歡怎樣的學習空間。"],
  ["02", "我們閱讀這份小簡介", "我們會留意藝術方向、教學方式、可用時間與家庭期望是否互相配合。"],
  ["03", "由你們決定要不要認識", "我們只作初步介紹，之後由家長、孩子與教練一起判斷是否適合。"],
];
const definitions = [
  ["角色", "不是替孩子畫好，而是陪他找到自己的方法。", "藝術教練的工作不是把每一幅畫改到「正確」，而是觀察孩子如何思考、如何嘗試，然後提供合適的材料、問題與示範，讓孩子逐漸建立自己的判斷。"],
  ["方法", "把技術變成可以探索的工具。", "好的藝術教練可以教構圖、線條、色彩、比例與媒介運用，但不會把課堂變成單純臨摹。技術應該幫助孩子表達想法，而不是掩蓋孩子的想法。"],
  ["關係", "先聽，再教；先建立安全感，再挑戰。", "孩子需要一個可以放心試錯的空間。教練會用清楚而溫和的回饋，讓孩子知道哪裡可以再試一次，也知道哪裡已經出現屬於自己的選擇。"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Studio Field Notes 首頁">
          <span className="brand-mark" aria-hidden="true"><span /><span /></span>
          <span className="brand-name"><small>兒童藝術教練配對</small><strong>Studio Field Notes</strong></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? "關閉選單" : "開啟選單"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <button onClick={() => scrollTo("definition")}>什麼是藝術教練</button>
          <button onClick={() => scrollTo("art-tracks")}>藝術方向</button>
          <button className="nav-cta" onClick={() => scrollTo("apply")}>尋找合適教練 <ArrowRight size={16} /></button>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span>工作室筆記 / 01</span> 給家長與藝術教練</p>
          <h1>合適的藝術教練，會為孩子的<em>觀看方式</em>留出空間。</h1>
          <p className="hero-intro">一個為兒童與家長而設的藝術教練配對入口，幫助你尋找願意聆聽、懂得引導，也能陪孩子一步一步建立創作信心的人。</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo("apply")}>告訴我們孩子喜歡創作甚麼 <ArrowDownRight size={18} /></button>
            <button className="text-link" onClick={() => scrollTo("definition")}>先了解藝術教練 <ArrowRight size={16} /></button>
          </div>
          <p className="micro-note"><span className="dot" /> 不公開建立個人檔案，不承諾結果，只先作一次認真的初步介紹。</p>
        </div>
        <div className="hero-visual reveal reveal-delay">
          <div className="image-frame"><img src="/manus-storage/art-coach-hero_6bc52eeb.jpg" alt="孩子在溫暖的工作室與藝術教練一起畫畫" /></div>
          <div className="image-caption"><span>工作室觀察</span><strong>為第一筆落下留一點空間。</strong></div>
          <div className="index-stamp">HK / 2026<br /><b>開放<br />工作室</b></div>
        </div>
      </section>

      <section className="signal-strip section-shell" aria-label="服務原則">
        <div><span className="strip-number">A</span><strong>給孩子</strong><p>先保留好奇，再談修正。</p></div>
        <div><span className="strip-number">B</span><strong>給家長</strong><p>清楚下一步，不用被推銷。</p></div>
        <div><span className="strip-number">C</span><strong>給教練</strong><p>一份更完整的簡介，而不是人氣排名。</p></div>
      </section>

      <section id="definition" className="definition-section section-shell">
        <div className="section-heading"><p className="eyebrow"><span>工作室筆記 / 02</span> 先定義，再配對</p><h2>究竟甚麼是<br /><em>藝術教練？</em></h2><p className="section-lede">藝術教練不是把孩子訓練成同一種樣子的人。他們以藝術創作為入口，陪孩子練習觀察、選擇、表達與完成。</p></div>
        <div className="definition-list">{definitions.map(([label, title, body]) => <article className="definition-item" key={label}><span className="definition-label">{label}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
      </section>

      <section className="difference-section section-shell">
        <div className="difference-copy"><p className="eyebrow"><span>工作室筆記 / 03</span> 找到正確的期待</p><h2>不是每一堂藝術課，<em>都在做同一件事。</em></h2><p>家長尋找的可能是興趣啟蒙、穩定創作的習慣、作品集方向，或者一個讓孩子重新喜歡畫畫的安全空間。了解差異，配對才有意義。</p></div>
        <div className="comparison-card"><div className="comparison-row heading"><span></span><strong>一般興趣班</strong><strong>藝術教練</strong></div><div className="comparison-row"><span>課程焦點</span><p>跟隨固定主題與步驟</p><p>按孩子反應調整探索方向</p></div><div className="comparison-row"><span>成果理解</span><p>完成一件課堂作品</p><p>理解過程、選擇與表達</p></div><div className="comparison-row"><span>教學關係</span><p>老師向全班示範</p><p>教練與孩子一起觀察和回應</p></div><div className="comparison-row"><span>適合情況</span><p>想輕鬆接觸多種媒介</p><p>想建立個人方向或需要細緻陪伴</p></div></div>
      </section>

      <section id="art-tracks" className="art-tracks section-shell">
        <div className="section-heading"><p className="eyebrow"><span>工作室筆記 / 04</span> 好奇心可以走到哪裡</p><h2>從孩子已經<br /><em>留意的媒介開始。</em></h2></div>
        <div className="track-list">{artTracks.map(([number, title, note]) => <article className="track-card" key={number}><span className="track-number">{number}</span><div><h3>{title}</h3><p>{note}</p></div><ArrowRight size={19} className="arrow-up" /></article>)}</div>
        <div className="art-image"><img src="/manus-storage/art-coach-painting_c0b56b85.jpg" alt="孩子在藝術課堂調配顏色" /></div>
      </section>

      <section className="how-section"><div className="section-shell how-grid"><div className="how-intro"><p className="eyebrow light"><span>工作室筆記 / 05</span> 配對方式，簡單說明</p><h2>一份小簡介。<br /><em>一個更好的開始。</em></h2><p>我們不會承諾完美配對，也不會把孩子或教練簡化成幾個標籤。我們先閱讀你分享的細節，再作一個有根據的初步介紹。</p></div><div className="step-list">{steps.map(([number, title, copy]) => <div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>

      <section className="parent-guide section-shell"><div><p className="eyebrow"><span>工作室筆記 / 06</span> 給家長的判斷框架</p><h2>第一次認識教練時，<em>可以問甚麼？</em></h2></div><div className="guide-grid"><div><span>01</span><h3>他如何回應孩子的想法？</h3><p>留意教練是否願意先問孩子想做甚麼，而不是立即把作品改成自己的版本。</p></div><div><span>02</span><h3>他會如何處理不成功的嘗試？</h3><p>藝術學習一定會有不如意的時候。好的回應應該幫孩子理解，而不是只說「錯了」。</p></div><div><span>03</span><h3>這個安排是否適合家庭生活？</h3><p>確認課堂地點、時間、媒介、收費與聯絡方式都清楚，讓創作可以穩定地發生。</p></div></div></section>

      <section id="apply" className="apply-section section-shell"><div className="apply-note"><p className="eyebrow"><span>申請入口</span> 給家長與藝術教練</p><h2>告訴我們，下一個合適的開始可以是甚麼。</h2><p>用一份簡短表格分享基本資料。家長可以描述孩子的興趣與需要；藝術教練則可以介紹專長、經驗、可教時段與授課地點。</p><div className="privacy-list"><p><Check size={16} /> 資料只用於初步了解與配對。</p><p><Check size={16} /> 不會自動建立公開教練檔案。</p><p><Check size={16} /> 認識之後，是否繼續由雙方決定。</p></div></div><div className="form-card">{GOOGLE_FORM_URL ? <iframe title="藝術教練配對申請表" src={`${GOOGLE_FORM_URL}?embedded=true`} loading="lazy" /> : <><div className="form-card-top"><span>表格 / 01</span><span>約 3 分鐘</span></div><h3>藝術教練配對資料表</h3><p>正式 Google Form 連結接入後，會在這裡直接顯示。目前先提供透明的設定入口，方便你按項目內的表格藍圖建立正式表單。</p><button className="button button-primary full" onClick={() => window.open("https://forms.google.com", "_blank", "noopener,noreferrer")}>開啟 Google Forms <ArrowRight size={17} /></button><p className="form-footnote">涉及兒童資料的部分，請由家長或監護人填寫。</p></>}</div></section>

      <section className="closing-section section-shell"><div className="closing-mark"><span /><span /></div><div><p className="eyebrow"><span>最後一頁</span> 創作學習很個人</p><h2>好的教學，從聆聽開始。</h2></div><img src="/manus-storage/art-coach-making_4dcfaa17.jpg" alt="孩子與藝術老師一起製作紙材和黏土作品" /></section>
      <footer className="site-footer section-shell"><div className="footer-brand"><span className="brand-mark" aria-hidden="true"><span /><span /></span><strong>Studio Field Notes</strong></div><p>給兒童與家長的藝術教練配對入口。<br />香港服務背景 · 詳細安排待確認</p><div className="footer-links"><button onClick={() => scrollTo("apply")}>申請入口</button><button onClick={() => scrollTo("definition")}>什麼是藝術教練</button></div><small>© 2026 Studio Field Notes。資料只用於初步介紹，不代表保證配對或教學結果。</small></footer>
    </main>
  );
}
