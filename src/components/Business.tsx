import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Business.css';

const businesses = [
  {
    id: "source",
    title: "SOURCE+",
    subtitle: "知の基盤・メディア事業",
    logo: "/assets/LOGO-SOURCEplus.png",
    description: "一次情報をベースに情報を収集・分析し、構造化された知を社会に発信します。",
    details: [
      { name: "ORIGIN+", desc: "神話・歴史・文化・民俗を一次資料から再編集し、現代の文脈で再解釈する知的メディア。" },
      { name: "RS+", desc: "地域・産業・社会構造をデータと一次資料から紐解き、可視化する分析メディア。" }
    ],
    path: "/source"
  },
  {
    id: "field",
    title: "FIELD+",
    subtitle: "地方創生事業・実装領域",
    logo: "/assets/LOGO-FIELDplus.png",
    description: "地域の資源・文化・産業を「現場」として捉え、メディアでの知見を構想設計・事業化・イベント・誘致など具体的な形へ接続します。",
    details: [
      { name: "目的", desc: "新しいものを外から持ち込むのではなく、地域の現在地を起点に「＋」を生み出すこと。" }
    ],
    path: "/field"
  },
  {
    id: "lab",
    title: "LAB+",
    subtitle: "技術基盤・AI実装",
    logo: "/assets/LOGO-LABplus.png",
    description: "AIを単体事業ではなく、スタジオ全体を支える共通インフラとして定義しています。",
    details: [
      { name: "役割", desc: "調査・分析・判断といった知識労働の課題に対し、士業向けに培ったAI活用の知見を、地域事業等へ還流します。" }
    ],
    path: "/lab"
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
};

export default function Business() {
  return (
    <section className="section business-section" id="business-details">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">BUSINESS</h2>
        <p className="section-subtitle">各事業領域</p>
        
        <motion.div 
          className="business-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {businesses.map((biz) => (
            <motion.div key={biz.id} variants={cardVariants} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Link to={biz.path} className="biz-card">
                <div className="biz-card-header">
                  {biz.logo && <img src={biz.logo} alt={biz.title} className="biz-logo" />}
                  <div className="biz-title-wrap">
                    <h3 className="biz-title">{biz.title}</h3>
                    <span className="biz-subtitle">{biz.subtitle}</span>
                  </div>
                </div>
                <div className="biz-card-body">
                  <p className="biz-desc">{biz.description}</p>
                  <ul className="biz-details">
                    {biz.details.map((detail, idx) => (
                      <li key={idx}>
                        <strong>{detail.name}</strong>
                        <p>{detail.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="biz-card-footer mt-auto pt-8">
                  <span className="biz-link-btn">
                    詳細を見る <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
