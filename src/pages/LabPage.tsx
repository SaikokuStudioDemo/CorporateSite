import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Page.css';

export default function LabPage() {
  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
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
            SECTION 1: 税務 (Tax Agent Group)
        ======================================================== */}
        {/* 1-1: Tax Agent */}
        <section className="fullscreen-section">
          <motion.a 
            href="#" target="_blank" rel="noopener noreferrer"
            className="item-detail-content clickable-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, margin: "-10% 0px" }}
          >
            <div className="external-indicator">
              <ExternalLink size={24} />
            </div>
            <div className="item-detail-icon has-logo">
              <img src="/assets/LOGO-TaxAgent.png" alt="Tax Agent" className="item-detail-logo-img" />
            </div>
            <div className="item-detail-subtitle">複雑な税務判断を、確かな根拠で支える専門家パートナー。</div>
            <p className="item-detail-desc">膨大な税務資料や判例から、必要な情報を瞬時に特定・構造化し、税理士の意思決定を高度化するAIツールです。</p>
          </motion.a>
        </section>

        {/* 1-2: Tax Agent α */}
        <section className="fullscreen-section">
          <motion.a 
            href="#" target="_blank" rel="noopener noreferrer"
            className="item-detail-content clickable-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, margin: "-10% 0px" }}
          >
            <div className="external-indicator">
              <ExternalLink size={24} />
            </div>
            <div className="item-detail-icon has-logo">
              <img src="/assets/LOGO-TaxAgentα.png" alt="Tax Agent α" className="item-detail-logo-img" />
            </div>
            <div className="item-detail-subtitle">身近な税務の疑問を、一人ひとりの手に。</div>
            <p className="item-detail-desc">生活者向けの直感的な税務・申告サポートアプリ版です。</p>
          </motion.a>
        </section>


        {/* =======================================================
            SECTION 2: 労務 (Labor Agent Group)
        ======================================================== */}
        {/* 2-1: Labor Agent */}
        <section className="fullscreen-section">
          <motion.a 
            href="#" target="_blank" rel="noopener noreferrer"
            className="item-detail-content clickable-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, margin: "-10% 0px" }}
          >
            <div className="external-indicator">
              <ExternalLink size={24} />
            </div>
            <div className="item-detail-icon has-logo">
              <img src="/assets/LOGO-LaborAgent.png" alt="Labor Agent" className="item-detail-logo-img" />
            </div>
            <div className="item-detail-subtitle">法令遵守と現場の最適化を両立させる、次世代の労務管理。</div>
            <p className="item-detail-desc">複雑化する労働法規や社内規定を統合的に理解し、実務上の判断を迅速にサポートするAIエージェントです。</p>
          </motion.a>
        </section>

        {/* 2-2: Labor Agent α */}
        <section className="fullscreen-section">
          <motion.a 
            href="#" target="_blank" rel="noopener noreferrer"
            className="item-detail-content clickable-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, margin: "-10% 0px" }}
          >
            <div className="external-indicator">
              <ExternalLink size={24} />
            </div>
            <div className="item-detail-icon has-logo">
              <img src="/assets/LOGO-LaborAgentα.png" alt="Labor Agent α" className="item-detail-logo-img" />
            </div>
            <div className="item-detail-subtitle">働く個人の権利と環境をテクノロジーで守る。</div>
            <p className="item-detail-desc">従業員側の視点に立ち、労務と生活の最適化をサポートします。</p>
          </motion.a>
        </section>


        {/* =======================================================
            SECTION 3: 食 (Food/Life Group)
        ======================================================== */}
        {/* 3-1: Culett */}
        <section className="fullscreen-section">
          <motion.a 
            href="#" target="_blank" rel="noopener noreferrer"
            className="item-detail-content clickable-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, margin: "-10% 0px" }}
          >
            <div className="external-indicator">
              <ExternalLink size={24} />
            </div>
            <div className="item-detail-icon has-logo">
              <img src="/assets/LOGO-Culett.png" alt="Culett" className="item-detail-logo-img" />
            </div>
            <div className="item-detail-subtitle">日々の「食」を、データと感性でデザインする。</div>
            <p className="item-detail-desc">ユーザーの嗜好や健康状態に合わせ、持続可能な食生活と豊かな食事体験を提案するパーソナル・ミールプランナーアプリです。</p>
          </motion.a>
        </section>


        {/* =======================================================
            SECTION 4: 農業 (Agriculture/Field Group)
        ======================================================== */}
        {/* 4-1: AgraWalk */}
        <section className="fullscreen-section">
          <motion.a 
            href="#" target="_blank" rel="noopener noreferrer"
            className="item-detail-content clickable-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, margin: "-10% 0px" }}
          >
            <div className="external-indicator">
              <ExternalLink size={24} />
            </div>
            <div className="item-detail-icon has-logo">
              <img src="/assets/LOGO-AgraWalk.png" alt="AgraWalk" className="item-detail-logo-img" />
            </div>
            <div className="item-detail-subtitle">地域の風景と農業の営みを、データで未来へつなぐ。</div>
            <p className="item-detail-desc">農業現場の知見や地域の歩みを可視化し、持続可能な地域産業の構築を支援するフィールド実装型のソリューションです。</p>
          </motion.a>
        </section>

      </div>
    </div>
  );
}
