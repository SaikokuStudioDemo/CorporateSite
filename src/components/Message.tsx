import { motion } from 'framer-motion';
import './Message.css';

export default function Message() {
  return (
    <section className="section message-section" id="about">
      <div className="container">
        <motion.div 
          className="message-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="message-text">
            <h3 className="message-heading">SAIKOKU STUDIOは<br/>「ハブ」であり「編集装置」です。</h3>
            <p>
              何かを固定化することではなく、動かし、編集し、次につながる状態をつくることを役割としています。<br/><br/>
              思想を形にし、構造を設計し、実装まで責任を持って関わります。<br/>
              神話・歴史・地域・産業・制度・テクノロジー。分断されがちな知を横断的に接続し、メディア・AI・地域事業として社会に実装します。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
