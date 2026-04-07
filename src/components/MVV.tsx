import { motion } from 'framer-motion';
import './MVV.css';

const values = [
  {
    title: "Truth Seeking",
    jpTitle: "真実を探求する",
    desc: "一次情報に基づく誠実な姿勢で、事実・歴史・地域の声に向き合う。"
  },
  {
    title: "Creative Impact",
    jpTitle: "創造力で未来を切り開く",
    desc: "新しい技術や独自の視点を取り入れ、社会に前向きな変化を生む。"
  },
  {
    title: "Local Partnership",
    jpTitle: "地域とともに歩む",
    desc: "地域の声に寄り添い、共創を通じて全体最適の価値を創り上げる。"
  },
  {
    title: "Designing Harmony",
    jpTitle: "美しさをデザインする",
    desc: "文化・物語・風景・産業の調和を重んじ、持続可能な姿を描く。"
  }
];

export default function MVV() {
  return (
    <section className="section mvv-section" id="mvv">
      <div className="container">
        <h2 className="section-title">PHILOSOPHY</h2>
        <p className="section-subtitle">企業理念</p>

        <div className="mvv-content">
          <motion.div 
            className="mvv-block mission"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mvv-label">MISSION</h3>
            <p className="mvv-statement">日本の多様な魅力を再発見し、未来へつなぐ美しい社会を創造する。</p>
          </motion.div>

          <motion.div 
            className="mvv-block vision"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="mvv-label">VISION</h3>
            <p className="mvv-statement">メディアと創造的プロジェクトを通じて、日本の可能性を広げるプラットフォームになる。</p>
          </motion.div>

          <motion.div 
            className="mvv-values"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="mvv-label">VALUES</h3>
            <div className="values-grid">
              {values.map((v, i) => (
                <div className="value-item" key={i}>
                  <div className="value-number">0{i + 1}</div>
                  <h4 className="value-title">{v.jpTitle}</h4>
                  <span className="value-entitle">{v.title}</span>
                  <p className="value-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
