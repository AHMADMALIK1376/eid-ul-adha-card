import React, { useState, useEffect } from 'react'
import HTMLFlipBook from "react-pageflip";
import hugIcon from '../assets/hug-icon.png';
import sacrificeIcon from '../assets/sacrifice-icon.png';
import duaIcon from '../assets/dua-icon.png';
import blessingIcon from '../assets/blessing-icon.png';
import familyIcon from '../assets/family-icon.png';
import prayerIcon from '../assets/prayer-icon.png';
import eidPrayerIcon from '../assets/eid-prayer.png';
import eidiGiftIcon from '../assets/eidi-gift.png';

function Book() {

  const [bookSize, setBookSize] = useState({ width: 340, height: 480 });

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 400) {
        setBookSize({ width: 270, height: 380 });
      } else if (w < 768) {
        setBookSize({ width: 310, height: 440 });
      } else {
        setBookSize({ width: 370, height: 520 });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const eidPages = [
    {
      title: "EID GREETINGS",
      subtitle: "عید کی مبارکباد",
      icon: hugIcon,
      message: "Sending you warm wishes on this blessed day. May Allah fill your heart with peace, joy, and endless blessings. Eid Mubarak!"
    },
    {
      title: "SACRIFICE & DEVOTION",
      subtitle: "قربانی اور عبادت",
      icon: sacrificeIcon,
      message: "On this blessed occasion of Eid ul-Adha, may Allah accept your sacrifices, answer your prayers, and fill your home with happiness and your heart with love."
    },
    {
      title: "SPECIAL DUA",
      subtitle: "خاص دعا",
      icon: duaIcon,
      message: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
      translation: "Our Lord, accept this from us. You are the Hearing, the Knowing. (Al-Baqarah 2:127)"
    },
    {
      title: "EID PRAYER",
      subtitle: "عید کی نماز",
      icon: eidPrayerIcon,
      message: "Eid ul-Adha prayer will be held at the main mosque at 8:00 AM sharp. Please arrive early with wudu. Bring your prayer mat. Takbeerat will begin 30 minutes before prayer. Let's pray together as one Ummah!"
    },
    {
      title: "BLESSINGS OF EID",
      subtitle: "عید کی برکتیں",
      icon: blessingIcon,
      message: "May the magic of this Eid bring lots of happiness and fill your life with wonderful moments. Enjoy this special day with your loved ones and cherish every moment."
    },
    {
      title: "FAMILY WISHES",
      subtitle: "خاندانی دعائیں",
      icon: familyIcon,
      message: "May Allah's blessings be with you today, tomorrow, and always. Wishing you and your family a very happy and blessed Eid ul-Adha!"
    },
    {
     title: "PRAYERS FOR ALL",
      subtitle: "سب کے لیے دعا",
      icon: prayerIcon,
      message: "May this Eid bring peace to the world, happiness to all homes, and blessings to every heart. Ameen!"
    },
    {
     title: "DONT FORGET EIDI",
      subtitle: "میری عیدی",
      icon: eidiGiftIcon,
      message: "This is my EasyPaisa: 0332-5775570 you can send me online Eidi or just give me by hand. May Allah bless you abundantly. Eid Mubarak! 💚"
    }
  ];

  const getIcon = (index) => {
    const iconStyle = { width: '68px', height: '68px', objectFit: 'contain' };
    const icons = [
      <img key="hug" src={hugIcon} alt="" style={iconStyle} />,
      <img key="sacrifice" src={sacrificeIcon} alt="" style={iconStyle} />,
      <img key="dua" src={duaIcon} alt="" style={iconStyle} />,
      <img key="prayer" src={eidPrayerIcon} alt="" style={iconStyle} />,
      <img key="blessing" src={blessingIcon} alt="" style={iconStyle} />,
      <img key="family" src={familyIcon} alt="" style={iconStyle} />,
      <img key="prayerAll" src={prayerIcon} alt="" style={iconStyle} />,
      <img key="eidi" src={eidiGiftIcon} alt="" style={iconStyle} />
    ];
    return icons[index] || <img key="fallback" src={hugIcon} alt="" style={iconStyle} />;
  };

  const CornerLines = () => (
    <>
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: '6px', left: '6px' }}><line x1="0" y1="0" x2="11" y2="0" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round"/><line x1="0" y1="0" x2="0" y2="11" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round"/></svg>
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: '6px', right: '6px' }}><line x1="18" y1="0" x2="7" y2="0" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round"/><line x1="18" y1="0" x2="18" y2="11" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round"/></svg>
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', bottom: '6px', left: '6px' }}><line x1="0" y1="18" x2="11" y2="18" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round"/><line x1="0" y1="18" x2="0" y2="7" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round"/></svg>
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', bottom: '6px', right: '6px' }}><line x1="18" y1="18" x2="7" y2="18" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round"/><line x1="18" y1="18" x2="18" y2="7" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round"/></svg>
    </>
  );

  const GoldCornerLines = () => (
    <>
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: '6px', left: '6px' }}><line x1="0" y1="0" x2="11" y2="0" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/><line x1="0" y1="0" x2="0" y2="11" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/></svg>
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', top: '6px', right: '6px' }}><line x1="18" y1="0" x2="7" y2="0" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/><line x1="18" y1="0" x2="18" y2="11" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/></svg>
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', bottom: '6px', left: '6px' }}><line x1="0" y1="18" x2="11" y2="18" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/><line x1="0" y1="18" x2="0" y2="7" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/></svg>
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ position: 'absolute', bottom: '6px', right: '6px' }}><line x1="18" y1="18" x2="7" y2="18" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/><line x1="18" y1="18" x2="18" y2="7" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/></svg>
    </>
  );

  return (
    <HTMLFlipBook 
      width={bookSize.width} 
      height={bookSize.height}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size='fixed'
      mobileScrollSupport={true}
      flippingTime={800}
      usePortrait={false}
      showPageCorners={false}
      disableFlipByClick={false}
      swipeDistance={20}
      style={{ margin: '0 auto' }}
    >
      {/* ============ COVER PAGE ============ */}
      <div style={{ background: 'transparent' }}>
        <div style={{ 
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column', 
          alignItems: 'center', justifyContent: 'center', padding: '24px',
          background: '#1A1A2E',
          border: '3px solid #16213E', position: 'relative', overflow: 'hidden',
          boxSizing: 'border-box'
        }}>
          <GoldCornerLines />
          {[...Array(12)].map((_, i) => (
            <span key={i} style={{ position: 'absolute', top: `${Math.random() * 85}%`, left: `${Math.random() * 85}%`, fontSize: `${6 + Math.random() * 12}px`, color: '#FFD700', opacity: 0.3 + Math.random() * 0.5 }}>✦</span>
          ))}
          <svg width="100" height="100" viewBox="0 0 80 80" style={{ marginBottom: '18px', position: 'relative', zIndex: 1 }}>
            <circle cx="40" cy="40" r="36" fill="#FFD700" stroke="#E8B800" strokeWidth="3"/>
            <circle cx="52" cy="30" r="30" fill="#1A1A2E"/>
          </svg>
          <p style={{ fontSize: '24px', fontWeight: '700', color: '#FFD700', marginBottom: '8px', textAlign: 'center', direction: 'rtl', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", letterSpacing: '2px', position: 'relative', zIndex: 1 }}>عید الاضحیٰ مبارک</p>
          <h1 style={{ fontSize: '28px', fontWeight: '800', textAlign: 'center', marginBottom: '14px', color: '#FFD700', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", lineHeight: '1.3', letterSpacing: '3px', textShadow: '2px 2px 0px #16213E', position: 'relative', zIndex: 1 }}>EID UL-ADHA<br/>MUBARAK</h1>
          <svg width="200" height="8" style={{ margin: '8px 0', position: 'relative', zIndex: 1 }}><line x1="0" y1="4" x2="80" y2="4" stroke="#FFD700" strokeWidth="1.5"/><circle cx="100" cy="4" r="3" fill="#FFD700"/><line x1="120" y1="4" x2="200" y2="4" stroke="#FFD700" strokeWidth="1.5"/></svg>
          
          <img 
            src="/mosque-icon.png" 
            alt=""
            style={{ 
              width: '65px', height: '65px', marginTop: '12px', 
              position: 'relative', zIndex: 2, objectFit: 'contain',
              filter: 'drop-shadow(0 0 6px rgba(255,215,0,0.4)) brightness(1.3)'
            }} 
          />
        </div>
      </div>

      {/* ============ INNER PAGES (8) ============ */}
      {eidPages.map((page, index) => (
        <div key={index} style={{ background: 'transparent' }}>
          <div style={{ 
            width: '100%', height: '100%', display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center', padding: '24px 18px',
            background: '#FFFFFF', border: '3px solid #1A1A2E',
            position: 'relative', boxSizing: 'border-box'
          }}>
            <CornerLines />
            <div style={{ marginBottom: '10px' }}>{getIcon(index)}</div>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1A1A2E', marginBottom: '4px', textAlign: 'center', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", letterSpacing: '4px' }}>{page.title}</h2>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px', textAlign: 'center', fontFamily: 'serif' }}>{page.subtitle}</p>
            <svg width="100" height="2" style={{ margin: '4px 0 8px' }}><line x1="0" y1="1" x2="38" y2="1" stroke="#1A1A2E" strokeWidth="1.5"/><circle cx="50" cy="1" r="2" fill="#1A1A2E"/><line x1="62" y1="1" x2="100" y2="1" stroke="#1A1A2E" strokeWidth="1.5"/></svg>
            <p style={{ fontSize: '15px', color: '#333', textAlign: 'center', lineHeight: '1.8', padding: '0 6px', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", letterSpacing: '0.5px' }}>{page.message}</p>
            <div style={{ minHeight: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {page.translation ? (
                <p style={{ fontSize: '12px', color: '#666', textAlign: 'center', marginTop: '6px', fontStyle: 'italic', lineHeight: '1.5', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif" }}>{page.translation}</p>
              ) : (<div style={{ height: '6px' }}></div>)}
            </div>
          </div>
        </div>
      ))}

      {/* ============ BACK COVER ============ */}
      <div style={{ background: 'transparent' }}>
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', background: '#1A1A2E', border: '3px solid #16213E', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
          <GoldCornerLines />
          {[...Array(8)].map((_, i) => (<span key={i} style={{ position: 'absolute', top: `${Math.random() * 85}%`, left: `${Math.random() * 85}%`, fontSize: `${8 + Math.random() * 10}px`, color: '#FFD700', opacity: 0.3 }}>✦</span>))}
          <svg width="40" height="36" viewBox="0 0 36 32"><path d="M18 30 C18 30, 2 20, 2 12 C2 7, 6 3, 10 3 C13 3, 16 5.5, 18 8 C20 5.5, 23 3, 26 3 C30 3, 34 7, 34 12 C34 20, 18 30, 18 30Z" fill="#FF6B6B" stroke="#E05555" strokeWidth="2"/></svg>
          <p style={{ fontSize: '20px', color: '#FFD700', fontWeight: '700', marginTop: '18px', marginBottom: '10px', textAlign: 'center', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", letterSpacing: '3px' }}>WITH LOVE & DUA</p>
          <svg width="160" height="4" style={{ margin: '12px 0' }}><line x1="0" y1="2" x2="62" y2="2" stroke="#FFD700" strokeWidth="1.5"/><circle cx="80" cy="2" r="2" fill="#FFD700"/><line x1="98" y1="2" x2="160" y2="2" stroke="#FFD700" strokeWidth="1.5"/></svg>
          <p style={{ color: '#E8D5A0', fontSize: '15px', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", textAlign: 'center', lineHeight: '1.6' }}>May this Eid bring you peace,<br/>prosperity, and countless blessings.<br/>Ameen!</p>
          <svg width="160" height="4" style={{ margin: '12px 0' }}><line x1="0" y1="2" x2="62" y2="2" stroke="#FFD700" strokeWidth="1.5"/><circle cx="80" cy="2" r="2" fill="#FFD700"/><line x1="98" y1="2" x2="160" y2="2" stroke="#FFD700" strokeWidth="1.5"/></svg>
          <p style={{ color: '#B0B0C0', fontSize: '12px', marginTop: '10px', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", letterSpacing: '3px' }}>FROM</p>
          <p style={{ color: '#FFD700', fontSize: '18px', fontWeight: '700', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", letterSpacing: '3px' }}>[M.Ahmad Malik]</p>
        </div>
      </div>
      
    </HTMLFlipBook>
  );
}

export default Book;