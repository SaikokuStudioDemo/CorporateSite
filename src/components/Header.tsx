import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (location.pathname !== '/') {
      // トップページ以外にいる場合はトップページに遷移してからハッシュにスクロールしたいが、
      // 簡単のためまずはトップに遷移させる（あるいは別の設計にする）
      navigate(`/#${id}`);
      // 本来は遷移後のスクロール位置調整などが必要ですが一旦簡易実装
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="header-logo" onClick={() => window.scrollTo(0, 0)}>
          <img src="/assets/LOGO-SAIKOKUSTUDIONoSpace.png" alt="SAIKOKU STUDIO" />
        </Link>
        <nav className="header-nav">
          <button onClick={() => handleNavClick('about')}>ABOUT</button>
          <button onClick={() => handleNavClick('business')}>BUSINESS</button>
          <button onClick={() => handleNavClick('mvv')}>PHILOSOPHY</button>
          <button onClick={() => handleNavClick('company')}>COMPANY</button>
        </nav>
      </div>
    </header>
  );
}
