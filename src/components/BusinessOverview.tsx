import { motion } from 'framer-motion';
import './BusinessOverview.css';

export default function BusinessOverview() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="section overview-section" id="business">
      <div className="container">
        <motion.div 
          className="overview-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <h2 className="section-title">ECOSYSTEM</h2>
          <p className="section-subtitle">事業の全体像</p>
          <div className="overview-intro">
            <p><strong>SAIKOKU STUDIOは3つの領域をハブとして束ねています。</strong></p>
            <p>神話・歴史・地域・産業・制度・テクノロジー。<br/>分断されがちな知を横断的に接続し、メディア・AI・地域事業として社会に実装します。</p>
          </div>
        </motion.div>

        <motion.div 
          className="overview-graphics"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <img 
            src="/assets/business-bg.png" 
            alt="SAIKOKU STUDIOの3つの領域のエコシステム図" 
            className="overview-img"
          />
        </motion.div>
      </div>
    </section>
  );
}
