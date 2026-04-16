import { useEffect, useRef, useState } from 'react';
import articlesData from '../data/articles.json';

interface Article {
  id: string;
  tag: string;
  title: string;
  source: string;
  connect: string;
  published: string;
}

function buildDisplayList(articles: Article[]): Article[] {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()
  );
  const top3 = sorted.slice(0, 3);
  const rest = sorted.slice(3);

  // Fisher-Yates shuffle, pick 5
  const shuffled = [...rest];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return [...top3, ...shuffled.slice(0, 5)];
}

const CARD_WIDTH = 250;
const CARD_GAP = 16;
const SCROLL_SPEED = 0.6; // px/frame
const STAGGER_INTERVAL = 0.12; // seconds
const CARD_DURATION = 0.5; // seconds
const AUTO_SCROLL_DELAY = 2000; // ms after last card appears

export default function ArticleCardStream() {
  const articles: Article[] = articlesData;
  const [displayList] = useState<Article[]>(() => buildDisplayList(articles));

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef(0);
  const directionRef = useRef(1); // 1 = right, -1 = left
  const rafRef = useRef<number>(0);
  const isHoveredRef = useRef(false);
  const scrollStartedRef = useRef(false);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  // IntersectionObserver to trigger animations when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Start auto-scroll after all cards have animated in
  useEffect(() => {
    if (!cardsVisible || scrollStartedRef.current) return;

    const lastCardDelay = (displayList.length - 1) * STAGGER_INTERVAL + CARD_DURATION;
    const totalDelay = lastCardDelay * 1000 + AUTO_SCROLL_DELAY;

    const timer = setTimeout(() => {
      scrollStartedRef.current = true;
      startScroll();
    }, totalDelay);

    return () => clearTimeout(timer);
  }, [cardsVisible]);

  function startScroll() {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!isHoveredRef.current) {
        const contentWidth =
          displayList.length * (CARD_WIDTH + CARD_GAP) - CARD_GAP;
        const containerWidth = track.parentElement?.clientWidth ?? 0;
        const maxScroll = Math.max(0, contentWidth - containerWidth + 48); // 24px padding each side

        scrollPosRef.current += SCROLL_SPEED * directionRef.current;

        if (scrollPosRef.current >= maxScroll) {
          scrollPosRef.current = maxScroll;
          directionRef.current = -1;
        } else if (scrollPosRef.current <= 0) {
          scrollPosRef.current = 0;
          directionRef.current = 1;
        }

        track.style.transform = `translateX(-${scrollPosRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ marginBottom: '64px' }}>
      {/* Section Header */}
      <div
        style={{
          marginBottom: '28px',
          padding: '0 24px',
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            color: 'var(--color-accent)',
            letterSpacing: '0.15em',
            marginBottom: '6px',
          }}
        >
          コンテンツ紹介
        </div>
      </div>

      {/* Card Track */}
      <div
        style={{
          overflow: 'hidden',
          padding: '8px 0',
        }}
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: `${CARD_GAP}px`,
            padding: '8px 24px',
            width: 'max-content',
            willChange: 'transform',
          }}
        >
          {displayList.map((article, i) => {
            const delay = i * STAGGER_INTERVAL;
            return (
              <div
                key={article.id}
                style={{
                  width: `${CARD_WIDTH}px`,
                  flexShrink: 0,
                  background: 'var(--color-surface)',
                  border: '0.5px solid var(--color-divider)',
                  borderRadius: '10px',
                  padding: '18px 16px',
                  boxSizing: 'border-box',
                  cursor: 'default',
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity ${CARD_DURATION}s ease ${delay}s, transform ${CARD_DURATION}s ease ${delay}s, border-color 0.2s ease`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    'var(--color-divider)';
                }}
              >
                {/* Tag */}
                <div
                  style={{
                    fontSize: '10px',
                    color: 'var(--color-accent)',
                    letterSpacing: '0.12em',
                    marginBottom: '10px',
                  }}
                >
                  {article.tag}
                </div>

                {/* Title */}
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '13px',
                    lineHeight: 1.6,
                    marginBottom: '12px',
                    color: 'var(--color-text)',
                  }}
                >
                  {article.title}
                </div>

                {/* Source */}
                <div
                  style={{
                    fontSize: '10px',
                    color: 'var(--color-text-muted)',
                    borderTop: '0.5px solid var(--color-divider)',
                    paddingTop: '10px',
                  }}
                >
                  {article.source}
                </div>

                {/* Connect */}
                <div
                  style={{
                    fontSize: '10px',
                    color: 'var(--color-accent)',
                    marginTop: '8px',
                    fontStyle: 'italic',
                  }}
                >
                  → {article.connect}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
