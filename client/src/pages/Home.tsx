/* Studio Field Notes reminder: 成人工藝藝術導師招募，語氣成熟、有份量、清楚說明資料用途；網站導流至 Google Form，不自行儲存資料。 */
import { useState } from "react";
import { ArrowDownRight, ArrowRight, Check, Menu, X } from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe0NEVKpL8CF9sayROozVH7mvE3laXc2FEN3WHOTSym7EZf1g/viewform";
const disciplines = [
  ["01", "陶藝與陶瓷", "手捏、拉坯、泥板、釉藥、陶瓷雕塑與窯燒"],
  ["02", "雕塑與雕刻", "黏土、石膏、木雕、石雕、抽象造型與綜合媒介"],
  ["03", "木工與木雕", "浮雕、圓雕、木器、手工具與傳統木工基礎"],
  ["04", "金工與首飾", "銀飾、蠟雕鑄造、鍛造、焊接與小型金屬創作"],
  ["05", "玻璃、皮革與纖維", "玻璃融合、皮雕、縫紉、刺繡、編織與纖維藝術"],
  ["06", "版畫與繪畫", "木刻、絲網印刷、素描、油畫、水彩與綜合創作"],
];
const process = [
  ["01", "提交你的藝術資料", "介紹你的專長、作品方向、教學經驗與可以教授的課堂形式。"],
  ["02", "我們整理你的創作背景", "我們會按照材料、程度、地點、時段與成人學習需要了解你的適合方向。"],
  ["03", "有合適需要時作初步介紹", "如有相關查詢，我們會按你提供的聯絡方式跟進；是否繼續由雙方決定。"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Studio Field Notes 首頁"><span className="brand-mark" aria-hidden="true"><span /><span /></span><span className="brand-name"><small>成人工藝藝術導師招募</small><strong>Studio Field Notes</strong></span></a>
        <button className="menu-toggle" aria-label={menuOpen ? "關閉選單" : "開啟選單"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <nav className={menuOpen ? "main-nav open" : "main-nav"}><button onClick={() => scrollTo("about")}>我們尋找甚麼</button><button onClick={() => scrollTo("disciplines")}>藝術類別</button><button className="nav-cta" onClick={() => scrollTo("apply")}>填寫導師資料 <ArrowRight size={16} /></button></nav>
      </header>

      <section id="top" className="hero section-shell"><div className="hero-copy reveal"><p className="eyebrow"><span>招募筆記 / 01</span> 給成人工藝藝術導師</p><h1>讓你的手藝，<br /><em>遇見下一位</em><br />認真學習的人。</h1><p className="hero-intro">我們正在建立一個成人工藝藝術導師網絡，連結陶藝、雕塑、木工、金工、玻璃、皮革、版畫與繪畫等不同創作領域。</p><div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo("apply")}>加入導師資料庫 <ArrowDownRight size={18} /></button><button className="text-link" onClick={() => scrollTo("about")}>了解我們尋找的導師 <ArrowRight size={16} /></button></div><p className="micro-note"><span className="dot" /> 不承諾固定學生數量；我們只在有合適需要時作初步介紹。</p></div><div className="hero-visual reveal reveal-delay"><div className="image-frame"><img src="/manus-storage/art-coach-hero_6bc52eeb.jpg" alt="成人導師在工作室示範陶藝與手工創作" /></div><div className="image-caption"><span>工作室觀察</span><strong>每種材料，都有自己的語言。</strong></div><div className="index-stamp">OPEN / 2026<br /><b>CRAFT<br />NETWORK</b></div></div></section>

      <section className="signal-strip section-shell" aria-label="導師招募原則"><div><span className="strip-number">A</span><strong>重視手藝</strong><p>由材料、工具和經驗出發。</p></div><div><span className="strip-number">B</span><strong>尊重成人學習</strong><p>清楚、耐心，不把學員當小朋友。</p></div><div><span className="strip-number">C</span><strong>先作介紹</strong><p>合適與否，由導師和學員一起決定。</p></div></section>

      <section id="about" className="definition-section section-shell"><div className="section-heading"><p className="eyebrow"><span>招募筆記 / 02</span> 我們尋找甚麼</p><h2>有專長的人，<br /><em>也懂得分享。</em></h2><p className="section-lede">我們尋找的不只是作品漂亮的人，而是願意將自己的創作方法、材料知識和工作室經驗，整理成成人可以理解和實踐的學習過程。</p></div><div className="definition-list"><article className="definition-item"><span className="definition-label">手藝</span><div><h3>你對材料有真正的理解。</h3><p>無論是陶泥、木材、石頭、金屬、玻璃、皮革或顏料，你知道工具如何使用，也明白材料的限制和可能性。</p></div></article><article className="definition-item"><span className="definition-label">教學</span><div><h3>你能夠將複雜技術說清楚。</h3><p>成人學員通常帶著不同程度、工作背景和學習目標而來。清楚示範、拆解步驟和給予具體回饋，比單純展示作品更重要。</p></div></article><article className="definition-item"><span className="definition-label">態度</span><div><h3>你願意讓學員發展自己的方向。</h3><p>導師可以提供標準、技術和安全指導，但不需要將每位學員做成同一種風格。好的課堂會留下選擇和探索的空間。</p></div></article></div></section>

      <section id="disciplines" className="art-tracks section-shell"><div className="section-heading"><p className="eyebrow"><span>招募筆記 / 03</span> 導師可以提供的藝術類別</p><h2>由你最熟悉的<br /><em>材料開始。</em></h2></div><div className="track-list">{disciplines.map(([number, title, note]) => <article className="track-card" key={number}><span className="track-number">{number}</span><div><h3>{title}</h3><p>{note}</p></div><ArrowRight size={19} className="arrow-up" /></article>)}</div><div className="art-image"><img src="/manus-storage/art-coach-making_4dcfaa17.jpg" alt="成人在工作室專注製作立體手工藝作品" /></div></section>

      <section className="difference-section section-shell"><div className="difference-copy"><p className="eyebrow"><span>招募筆記 / 04</span> 我們重視的教學方式</p><h2>不只是教一件作品，<em>而是分享一套方法。</em></h2><p>學員可能想學一門新手藝、完成一件作品、建立創作習慣，或者單純在繁忙生活以外保留一段專注時間。導師的工作，是協助他們找到適合自己的節奏。</p></div><div className="comparison-card"><div className="comparison-row heading"><span></span><strong>導師帶來</strong><strong>學員得到</strong></div><div className="comparison-row"><span>材料</span><p>工作室經驗與技術判斷</p><p>理解工具、媒介與安全使用</p></div><div className="comparison-row"><span>過程</span><p>示範、拆解與個別回饋</p><p>按自己的速度練習和修正</p></div><div className="comparison-row"><span>方向</span><p>提供參考，但保留選擇</p><p>逐步建立個人作品和興趣</p></div><div className="comparison-row"><span>關係</span><p>清楚界線、尊重和耐性</p><p>知道自己是否想繼續學習</p></div></div></section>

      <section className="how-section"><div className="section-shell how-grid"><div className="how-intro"><p className="eyebrow light"><span>招募筆記 / 05</span> 加入流程</p><h2>一份資料。<br /><em>一個清楚的開始。</em></h2><p>提交資料後，我們會先了解你的藝術方向和教學條件。這不是公開排名，也不是保證派發學生的合約，而是一個建立初步聯絡的入口。</p></div><div className="step-list">{process.map(([number, title, copy]) => <div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>

      <section id="apply" className="apply-section section-shell"><div className="apply-note"><p className="eyebrow"><span>導師申請入口</span> 成人工藝藝術網絡</p><h2>介紹你的手藝，讓我們知道你可以教甚麼。</h2><p>請準備你的藝術類別、技術程度、教學經驗、可教授的年齡／程度、課堂形式、地點、時間和收費資料。</p><div className="privacy-list"><p><Check size={16} /> 資料只用於初步了解和導師配對。</p><p><Check size={16} /> 不會自動建立公開個人檔案。</p><p><Check size={16} /> 每次介紹前，會按相關需要跟進。</p></div></div><div className="form-card">{GOOGLE_FORM_URL ? <iframe title="成人工藝藝術導師申請表" src={`${GOOGLE_FORM_URL}?embedded=true`} loading="lazy" /> : <><div className="form-card-top"><span>導師表格 / 01</span><span>約 5 分鐘</span></div><h3>成人工藝藝術導師資料表</h3><p>正式 Google Form 連結接入後，導師可以直接在這裡填寫。提交後，回應會由 Google Forms 自動儲存到已連接的 Google Sheets。</p><button className="button button-primary full" onClick={() => window.open("https://forms.google.com", "_blank", "noopener,noreferrer")}>開啟 Google Forms <ArrowRight size={17} /></button><p className="form-footnote">表格內容及欄位已整理在專案內的 Google Form 藍圖。</p></>}</div></section>

      <footer className="site-footer section-shell"><div className="footer-brand"><span className="brand-mark" aria-hidden="true"><span /><span /></span><strong>Studio Field Notes</strong></div><p>成人工藝藝術導師招募入口。<br />陶藝 · 雕塑 · 木工 · 金工 · 更多材料藝術</p><div className="footer-links"><button onClick={() => scrollTo("apply")}>填寫導師資料</button><button onClick={() => scrollTo("disciplines")}>藝術類別</button></div><small>© 2026 Studio Field Notes。提交資料不代表保證學生安排或合作結果。</small></footer>
    </main>
  );
}
