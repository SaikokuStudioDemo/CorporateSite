import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: 'url(/assets/hero-bg.png)' }}></div>
      <div className="hero-overlay"></div>
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="hero-copy">理解なき行動は、<br/>持続しない。</h2>
        <p className="hero-subcopy">
          私たちは、過去の蓄積と現在の構造を読み解き、<br/>
          未来の選択肢を設計するための思想と実装の中枢です。
        </p>
      </motion.div>
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">SCROLL</span>
      </div>
    </section>
  );
}
