import { motion } from 'framer-motion';
import { Database, Smartphone, Leaf, FileSpreadsheet, Briefcase, Apple, MapPin, ExternalLink } from 'lucide-react';
import './Page.css';

export default function LabPage() {
  // アイテム登場用のアニメーション
  const introVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { 
      opacity: 1, scale: 1, y: 0,
      transition: { duration: 0.8 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.8 } 
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-header" style={{ backgroundImage: 'url(/assets/hero-bg.png)' }}>
        <div className="page-header-overlay" />
        <div className="page-header-content container">
          <img src="/assets/LOGO-LABplus.png" alt="LAB+" className="page-logo" />
          <p className="page-subtitle">技術基盤・AI実装</p>
        </div>
      </div>

      <div className="scroll-sequence-container" style={{ overflowX: 'hidden' }}>
        
        {/* =======================================================
            SECTION 1: SaaS Services Group
        ======================================================== */}
        <section className="fullscreen-section">
          <motion.div 
            className="giant-typography"
            initial={{ y: 50 }}
            whileInView={{ y: -80 }}
            transition={{ duration: 1.2, ease: "linear" }}
            viewport={{ margin: "200px" }}
          >
            INTELLIGENCE
          </motion.div>

          <motion.div 
            className="group-intro-content container"
            variants={introVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6 }}
          >
            <h2 className="group-intro-title">
              <Database size={64} color="var(--color-accent)"/> SaaS Services
            </h2>
            <div className="group-intro-subtitle">専門家支援AI</div>
            <p className="group-intro-desc">専門的な知識労働の課題に対して、AI活用の知見を還流し、実務基盤を高度化するツールです。</p>
          </motion.div>
        </section>

        {/* 1-1: Tax-Agent */}
        <section className="fullscreen-section">
          <motion.a 
            href="#" target="_blank" rel="noopener noreferrer"
            className="item-detail-content clickable-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            <div className="external-indicator">
              <ExternalLink size={24} />
            </div>
            <div className="item-detail-icon">
              <FileSpreadsheet size={48} color="#b38b59" />
            </div>
            <h3 className="item-detail-title">Tax-Agent</h3>
            <div className="item-detail-subtitle">複雑な税務判断を、確かな根拠で支える専門家パートナー。</div>
            <p className="item-detail-desc">膨大な税務資料や判例から、必要な情報を瞬時に特定・構造化し、税理士の意思決定を高度化するAIツールです。</p>
          </motion.a>
        </section>

        {/* 1-2: Labor-Agent */}
        <section className="fullscreen-section">
          <motion.a 
            href="#" target="_blank" rel="noopener noreferrer"
            className="item-detail-content clickable-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            <div className="external-indicator">
              <ExternalLink size={24} />
            </div>
            <div className="item-detail-icon">
              <Briefcase size={48} color="#b38b59" />
            </div>
            <h3 className="item-detail-title">Labor-Agent</h3>
            <div className="item-detail-subtitle">法令遵守と現場の最適化を両立させる、次世代の労務管理。</div>
            <p className="item-detail-desc">複雑化する労働法規や社内規定を統合的に理解し、実務上の判断を迅速にサポートするAIエージェントです。</p>
          </motion.a>
        </section>


        {/* =======================================================
            SECTION 2: Personalized Applications Group
        ======================================================== */}
        <section className="fullscreen-section" style={{ marginTop: '10vh' }}>
          <motion.div 
            className="giant-typography right"
            initial={{ y: 50 }}
            whileInView={{ y: -80 }}
            transition={{ duration: 1.2, ease: "linear" }}
            viewport={{ margin: "200px" }}
          >
            PERSONALIZED
          </motion.div>

          <motion.div 
            className="group-intro-content container"
            variants={introVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6 }}
          >
            <h2 className="group-intro-title">
              <Smartphone size={64} color="var(--color-accent)"/> Applications
            </h2>
            <div className="group-intro-subtitle">生活者・個人支援アプリ</div>
            <p className="group-intro-desc" style={{ fontWeight: 'bold' }}>知見をパーソナライズ化し、日常へ</p>
            <p className="group-intro-desc mt-2">SaaS等で培った高度な知見を専門家だけのものではなく、一人ひとりが必要なサポートとして直接得られるよう「アプリ化」してお届けしています。</p>
          </motion.div>
        </section>

        {/* 2-1: Tax Agent α */}
        <section className="fullscreen-section">
          <motion.a 
            href="#" target="_blank" rel="noopener noreferrer"
            className="item-detail-content clickable-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            <div className="external-indicator">
              <ExternalLink size={24} />
            </div>
            <div className="item-detail-icon">
              <Smartphone size={48} color="#4A90E2" />
            </div>
            <h3 className="item-detail-title">Tax Agent α</h3>
            <div className="item-detail-subtitle">身近な税務の疑問を、一人ひとりの手に。</div>
            <p className="item-detail-desc">生活者向けの直感的な税務・申告サポートアプリ版です。</p>
          </motion.a>
        </section>

        {/* 2-2: Labor Agent β */}
        <section className="fullscreen-section">
          <motion.a 
            href="#" target="_blank" rel="noopener noreferrer"
            className="item-detail-content clickable-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            <div className="external-indicator">
              <ExternalLink size={24} />
            </div>
            <div className="item-detail-icon">
              <Smartphone size={48} color="#4A90E2" />
            </div>
            <h3 className="item-detail-title">Labor Agent β</h3>
            <div className="item-detail-subtitle">働く個人の権利と環境をテクノロジーで守る。</div>
            <p className="item-detail-desc">従業員側の視点に立ち、労務と生活の最適化をサポートします。</p>
          </motion.a>
        </section>

        {/* 2-3: Culett */}
        <section className="fullscreen-section">
          <motion.a 
            href="#" target="_blank" rel="noopener noreferrer"
            className="item-detail-content clickable-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            <div className="external-indicator">
              <ExternalLink size={24} />
            </div>
            <div className="item-detail-icon">
              <Apple size={48} color="#FF6B6B" />
            </div>
            <h3 className="item-detail-title">Culett（キュレット）</h3>
            <div className="item-detail-subtitle">日々の「食」を、データと感性でデザインする。</div>
            <p className="item-detail-desc">ユーザーの嗜好や健康状態に合わせ、持続可能な食生活と豊かな食事体験を提案するパーソナル・ミールプランナーアプリです。</p>
          </motion.a>
        </section>


        {/* =======================================================
            SECTION 3: Field Solutions Group
        ======================================================== */}
        <section className="fullscreen-section" style={{ marginTop: '10vh' }}>
          <motion.div 
            className="giant-typography"
            initial={{ y: 50 }}
            whileInView={{ y: -80 }}
            transition={{ duration: 1.2, ease: "linear" }}
            viewport={{ margin: "200px" }}
          >
            FIELD WORK
          </motion.div>

          <motion.div 
            className="group-intro-content container"
            variants={introVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6 }}
          >
            <h2 className="group-intro-title">
              <Leaf size={64} color="var(--color-accent)"/> Field Solutions
            </h2>
            <div className="group-intro-subtitle">地域・衛生・歩行支援</div>
            <p className="group-intro-desc">データやAIを画面の中にとどめず、フィジカルな地域産業の現場へとつなぎます。</p>
          </motion.div>
        </section>

        {/* 3-1: Agrawalk */}
        <section className="fullscreen-section">
          <motion.a 
            href="#" target="_blank" rel="noopener noreferrer"
            className="item-detail-content clickable-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            <div className="external-indicator">
              <ExternalLink size={24} />
            </div>
            <div className="item-detail-icon">
              <MapPin size={48} color="#4CAF50" />
            </div>
            <h3 className="item-detail-title">Agrawalk（アグラウォーク）</h3>
            <div className="item-detail-subtitle">地域の風景と農業の営みを、データで未来へつなぐ。</div>
            <p className="item-detail-desc">農業現場の知見や地域の歩みを可視化し、持続可能な地域産業の構築を支援するフィールド実装型のソリューションです。</p>
          </motion.a>
        </section>


      </div>
    </div>
  );
}
