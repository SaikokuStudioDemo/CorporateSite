import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Epilogue.css';

export default function Epilogue() {
  const containerRef = useRef(null);
  
  // Track the scroll position of the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start fading when the top of the element hits 80% of the viewport (near the bottom)
    // Becomes fully dark when the bottom of the element hits the bottom of the viewport
    offset: ["start 80%", "end 100%"]
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  return (
    <section className="epilogue-section" ref={containerRef}>
      {/* Dynamic background fade */}
      <motion.div 
        className="epilogue-bg-overlay"
        style={{ opacity: backgroundOpacity }}
      />

      <div className="container epilogue-container">
        <motion.div 
          className="epilogue-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <img 
            src="/assets/LOGO-SAIKOKUSTUDIONoSpace.png" 
            alt="SAIKOKU STUDIO" 
            className="epilogue-logo" 
          />
          
          <h2 className="epilogue-title">SAIKOKU STUDIOは、「編集装置」です。</h2>
          
          <div className="epilogue-text">
            <p>
              私たちは企業の永続性や、サービスの維持を目的とはしていません。<br className="desktop-only" />
              必要な時と場所にだけ入り込み、散在する情報を「編集」する。
            </p>
            <p>
              自走する仕組みができたら、「編集装置」の役割が終わる時。<br className="desktop-only" />
              そこまでが私たちの仕事です。
            </p>
            <p>
              私たちは純粋な「編集装置」として存在し続けます。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
