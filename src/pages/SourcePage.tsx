import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import './Page.css';

const MAGAZINE_CONTENT = {
  branding: {
    logo: '/assets/LOGO-CultureHackJapan.png',
  },
  items: [
    {
      id: 'articles',
      number: '01',
      category: 'ARTICLES',
      title: 'The Art of Wa: Contemporary Minimalism',
      desc: 'noteやSubstackにて、日々の考察や社会構造の分析、専門的なレポートを配信しています。テキスト主導のメディアとして、時代を読むための手がかりをお届けします。',
      image: '/assets/note_image.png',
      links: [
        { label: 'note', url: '#' },
        { label: 'Substack', url: '#' }
      ]
    },
    {
      id: 'youtube',
      number: '02',
      category: 'YOUTUBE',
      title: 'Journeys Through Kyoto: Ancient & Modern',
      desc: '「Culture Hack Japan」として活動中。日本の文化の「いま」を切り取り、長尺のドキュメンタリーやリッチな解説映像として発信しています。',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200',
      links: [
        { label: 'YouTube', url: '#' }
      ]
    },
    {
      id: 'instagram',
      number: '03',
      category: 'INSTAGRAM',
      title: 'Exploring Imperfection',
      desc: 'ビジュアルを活かした短いクリップや写真を配信。感覚的に捉えられるカルチャーのエッセンスや現場の空気感をショート形式でお届けします。',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&q=80&w=1200',
      links: [
        { label: 'Instagram', url: '#' }
      ]
    }
  ]
};

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
              src={MAGAZINE_CONTENT.branding.logo} 
              alt="Culture Hack Japan" 
              className="magazine-chj-logo"
              onError={(e) => {
                // Fallback if logo not found yet
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="magazine-origin-rs">
              <img src="/assets/LOGO-ORIGINplus.png" alt="ORIGIN+" />
              <span>✕</span>
              <img src="/assets/LOGO-RSplus.png" alt="RS+" />
            </div>
            <p className="magazine-tagline">
              一次情報を元に、様々な角度から現代と歴史をつなぐ情報を配信しています。
            </p>
          </motion.div>
        </section>

        {/* Magazine Grid Layout */}
        <section className="magazine-grid">
          
          {/* Card 01: Articles (Large Horizontal) */}
          <motion.div 
            className="mag-card mag-card-articles"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeInUp}
          >
            <div className="mag-card-inner">
              <div className="mag-card-content">
                <span className="mag-card-number">{MAGAZINE_CONTENT.items[0].number}</span>
                <span className="mag-card-category">{MAGAZINE_CONTENT.items[0].category}</span>
                <h3 className="mag-card-title">{MAGAZINE_CONTENT.items[0].title}</h3>
                <p className="mag-card-desc">{MAGAZINE_CONTENT.items[0].desc}</p>
                <div className="mag-card-links">
                  {MAGAZINE_CONTENT.items[0].links.map((link, idx) => (
                    <a key={idx} href={link.url} className="mag-link-btn">
                      {link.label} <ArrowRight size={14} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="mag-card-image" style={{ backgroundImage: `url(${MAGAZINE_CONTENT.items[0].image})` }}>
                <div className="mag-image-overlay" />
              </div>
            </div>
          </motion.div>

          {/* Card 02: YouTube (Tall Vertical) */}
          <motion.div 
            className="mag-card mag-card-youtube"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeInUp}
          >
            <div className="mag-card-inner">
              <div className="mag-card-image" style={{ backgroundImage: `url(${MAGAZINE_CONTENT.items[1].image})` }}>
                <div className="mag-video-play">
                  <Play fill="white" size={32} />
                </div>
                <div className="mag-image-overlay" />
                <div className="mag-card-image-content">
                  <span className="mag-card-category">{MAGAZINE_CONTENT.items[1].category}</span>
                  <h3 className="mag-card-title">{MAGAZINE_CONTENT.items[1].title}</h3>
                  <div className="mag-card-links">
                    <a href={MAGAZINE_CONTENT.items[1].links[0].url} className="mag-link-btn white">
                      {MAGAZINE_CONTENT.items[1].links[0].label} <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 03: Instagram (Square/Wide) */}
          <motion.div 
            className="mag-card mag-card-instagram"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeInUp}
          >
            <div className="mag-card-inner">
              <div className="mag-card-content">
                <span className="mag-card-number">{MAGAZINE_CONTENT.items[2].number}</span>
                <span className="mag-card-category">{MAGAZINE_CONTENT.items[2].category}</span>
                <h3 className="mag-card-title">{MAGAZINE_CONTENT.items[2].title}</h3>
                <p className="mag-card-desc">{MAGAZINE_CONTENT.items[2].desc}</p>
                <div className="mag-card-links">
                  <a href={MAGAZINE_CONTENT.items[2].links[0].url} className="mag-link-btn">
                    {MAGAZINE_CONTENT.items[2].links[0].label} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
              <div className="mag-card-image" style={{ backgroundImage: `url(${MAGAZINE_CONTENT.items[2].image})` }}>
                <div className="mag-image-overlay" />
              </div>
            </div>
          </motion.div>

        </section>

      </div>
    </main>
  );
}
