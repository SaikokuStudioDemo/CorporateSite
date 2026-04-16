import { motion } from 'framer-motion';
import ArticleCardStream from '../components/ArticleCardStream';
import './Page.css';

const YouTubeLogo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const SubstackLogo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
  </svg>
);

const NoteLogo = () => (
  <span style={{ fontWeight: 800, fontFamily: 'Helvetica, Arial, sans-serif', letterSpacing: '-0.07em', fontSize: '24px', lineHeight: 1 }}>note</span>
);

export default function SourcePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8 }
    })
  };

  return (

    <main className="page-main">
      <div className="page-header" style={{ backgroundImage: 'url(/assets/hero-bg.png)' }}>
        <div className="page-header-overlay"></div>
        <motion.div
          className="page-header-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/assets/LOGO-SOURCEplus.png" alt="SOURCE+" className="page-logo" />
          <p className="page-subtitle">知の基盤・メディア事業</p>
        </motion.div>
      </div>

      <div className="page-content container">

        {/* Editorial Section Header */}
        <section className="magazine-intro-area">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUp}
            className="magazine-branding-wrap"
          >
            <img
              src="/assets/LOGO-CultureHackJapan.png"
              alt="Culture Hack Japan"
              className="magazine-chj-logo"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="magazine-origin-rs">
              <img src="/assets/LOGO-ORIGINplus.png" alt="ORIGIN+" />
              <span>✕</span>
              <img src="/assets/LOGO-RSplus.png" alt="RS+" />
            </div>
            <div className="magazine-concept-area">
              <p className="magazine-tagline-lead">
                一次情報を紐解き、様々な角度から日本の価値観を可視化し、共に考えるメディア。
              </p>
              <div className="magazine-tagline-flow">
                <span className="flow-step">現代の問い</span>
                <span className="flow-line"></span>
                <span className="flow-step">歴史の根拠</span>
                <span className="flow-line"></span>
                <span className="flow-step">現代への接続</span>
              </div>
              <p className="magazine-tagline-sub">
                過去の知恵をもとに、<br className="mobile-br"/>現在まで続く日本の文化を国内外へ配信しています。
              </p>
            </div>
          </motion.div>
        </section>

        <ArticleCardStream />

        {/* Official Platforms Links */}
        <section style={{ marginTop: '2rem', paddingBottom: '6rem', display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            custom={1}
            className="media-platforms-container"
          >
            <div className="media-platforms-title">PLATFORMS</div>
            <div className="media-platforms-links">
              <a href="#" className="media-brand-link" aria-label="note">
                <NoteLogo />
              </a>
              <a href="#" className="media-brand-link" aria-label="Substack">
                <SubstackLogo />
              </a>
              <a href="#" className="media-brand-link" aria-label="YouTube">
                <YouTubeLogo />
              </a>
              <a href="#" className="media-brand-link" aria-label="Instagram">
                <InstagramLogo />
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
