import { motion } from 'framer-motion';
import './Page.css';

export default function FieldPage() {
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
          <img src="/assets/LOGO-FIELDplus.png" alt="FIELD+" className="page-logo" />
          <p className="page-subtitle">地方創生事業・実装領域</p>
        </motion.div>
      </div>

      <div className="page-content container">
        <section className="page-section">
          <motion.h2 
            className="page-section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            地域の「現在地」を起点に、「＋」を生み出す
          </motion.h2>
          <div className="page-text-block text-center">
            <p>
              地域の資源・文化・産業を「現場」として捉え、メディアでの知見を構想設計・事業化・イベント・誘致など具体的な形へ接続します。
            </p>
            <p className="mt-4" style={{ color: 'var(--color-text-muted)' }}>
              ※プロジェクト詳細や実績は準備中です。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
