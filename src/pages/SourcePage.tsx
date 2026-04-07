import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Edit3, FileText, Video, Camera } from 'lucide-react';
import './Page.css';

const MEDIA_ITEMS = [
  {
    id: 'note',
    number: '01',
    title: 'note',
    desc: '日々の考察や一次情報をベースにしたコラムを配信中。日本の文化や社会構造に関わる深い知見をテキスト主導でお届けします。',
    icon: <Edit3 size={40} />,
    color: '#41c9b4',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'substack',
    number: '02',
    title: 'Substack',
    desc: 'より深く構造化された知と、ニュースレターをお届けします。時代を読むための手がかりとなる専門的なレポートを定期配信しています。',
    icon: <FileText size={40} />,
    color: '#ff6719',
    image: 'https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'youtube',
    number: '03',
    title: 'YouTube',
    desc: '「Culture Hack Japan」として活動中。日本の文化の「いま」を切り取り、長尺のドキュメンタリーやリッチな解説映像として発信しています。',
    icon: <Video size={40} />,
    color: '#ff0000',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'instagram',
    number: '04',
    title: 'Instagram',
    desc: 'ビジュアルを活かした短いクリップや写真を配信。感覚的に捉えられるカルチャーのエッセンスや現場の空気感をショート形式でお届けします。',
    icon: <Camera size={40} />,
    color: '#E1306C',
    image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function SourcePage() {
  const [activeItem, setActiveItem] = useState(MEDIA_ITEMS[0]);

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
        
        {/* Editorial Intro Section (Minimalist) */}
        {/* 他のページに影響が出ないようインラインで余白を上書きし、上部余白を詰める */}
        <section className="editorial-intro" style={{ textAlign: 'center', margin: '1rem 0 7rem 0' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '3rem',
              flexWrap: 'wrap'
            }}
          >
            <img 
              src="/assets/LOGO-ORIGINplus.png" 
              alt="ORIGIN+" 
              style={{ height: '12rem', objectFit: 'contain', opacity: 0.9 }} 
            />
            <div style={{ fontSize: '2rem', color: 'var(--color-text-muted)', fontWeight: 300 }}>
              ✕
            </div>
            <img 
              src="/assets/LOGO-RSplus.png" 
              alt="RS+" 
              style={{ height: '12rem', objectFit: 'contain', opacity: 0.9 }} 
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            style={{ 
              marginTop: '2.5rem', 
              fontSize: '1.15rem', 
              color: 'var(--color-text-muted)', 
              letterSpacing: '0.15em',
              fontWeight: 600
            }}
          >
            2つの知性を束ね、社会へ還流させるメディア・プラットフォーム
          </motion.p>
        </section>

        {/* Dynamic Hover Index Section */}
        <section className="hover-index-container">
          
          {/* Left: List */}
          <div className="hover-index-list">
            {MEDIA_ITEMS.map((item) => (
              <a 
                key={item.id}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover-index-item ${activeItem.id === item.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveItem(item)}
              >
                <div className="hover-index-number">{item.number}</div>
                <h3 className="hover-index-title">
                  {item.icon} {item.title}
                </h3>
                <p className="hover-index-desc">
                  {item.desc}
                </p>
                <ExternalLink size={28} className="hover-index-external" />
              </a>
            ))}
          </div>

          {/* Right: Dynamic Image Display */}
          <div className="hover-index-image-wrapper">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.title}
                className="hover-index-image"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </AnimatePresence>
            
            {/* 色のオーバーレイ (任意) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeItem.id}-overlay`}
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: `linear-gradient(to top, rgba(0,0,0,0.4), transparent)`,
                  borderBottom: `8px solid ${activeItem.color}`
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>

        </section>

      </div>
    </main>
  );
}
