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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 400) {
        setIsMobile(true);
        setBookSize({ width: 200, height: 280 });
      } else if (w < 768) {
        setIsMobile(false);
        setBookSize({ width: 310, height: 440 });
      } else {
        setIsMobile(false);
        setBookSize({ width: 370, height: 520 });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const fs = isMobile ? {
    coverArabic: '14px',
    coverTitle: '18px',
    title: '13px',
    subtitle: '12px',
    message: '11px',
    translation: '9px',
    icon: '44px',
    padding: '10px 8px',
    coverPadding: '12px',
    moonSize: '60px',
    mosqueIconSize: '38px',
    dividerWidth: '110px',
  } : {
    coverArabic: '24px',
    coverTitle: '28px',
    title: '18px',
    subtitle: '16px',
    message: '15px',
    translation: '12px',
    icon: '68px',
    padding: '24px 18px',
    coverPadding: '24px',
    moonSize: '100px',
    mosqueIconSize: '65px',
    dividerWidth: '200px',
  };

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
      message: "Eid ul-Adha prayer will be held at the main mosque at 8:00 AM sharp. Please arrive early with wudu. Bring your prayer mat."
    },
    {
      title: "BLESSINGS OF EID",
      subtitle: "عید کی برکتیں",
      icon: blessingIcon,
      message: "May the magic of this Eid bring lots of happiness and fill your life with wonderful moments. Enjoy this special day with your loved ones."
    },
    {
      title: "FAMILY WISHES",
      subtitle: "خاندانی دعائیں",
      icon: familyIcon,
      message: "May Allah's blessings be with you today, tomorrow, and always. Wishing you and your family a very happy and blessed Eid!"
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
      message: "EasyPaisa: 0332-5775570. Send me online Eidi or give by hand. May Allah bless you. Eid Mubarak! 💚"
    }
  ];

  const getIcon = (index) => {
    const iconSize = isMobile ? '44px' : '68px';
    const iconStyle = { width: iconSize, height: iconSize, objectFit: 'contain' };
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
      maxShadowOpacity={0.3}
      drawShadow={true}
      showCover={true}
      size='fixed'
      mobileScrollSupport={true}
      flippingTime={600}
      usePortrait={false}
      showPageCorners={false}
      disableFlipByClick={false}
      swipeDistance={30}
      style={{ margin: '0 auto' }}
    >
      {/* ============ COVER PAGE ============ */}
      <div style={{ background: 'transparent' }}>
        <div style={{ 
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column', 
          alignItems: 'center', justifyContent: 'center', padding: fs.coverPadding,
          background: '#1A1A2E', border: '3px solid #16213E',
          position: 'relative', overflow: 'hidden', boxSizing: 'border-box'
        }}>
          <GoldCornerLines />
          {[...Array(isMobile ? 6 : 12)].map((_, i) => (
            <span key={i} style={{ position: 'absolute', top: `${Math.random() * 85}%`, left: `${Math.random() * 85}%`, fontSize: `${6 + Math.random() * 10}px`, color: '#FFD700', opacity: 0.3 + Math.random() * 0.5 }}>✦</span>
          ))}
          <svg width={fs.moonSize} height={fs.moonSize} viewBox="0 0 80 80" style={{ marginBottom: isMobile ? '8px' : '18px', position: 'relative', zIndex: 1 }}>
            <circle cx="40" cy="40" r="36" fill="#FFD700" stroke="#E8B800" strokeWidth="3"/>
            <circle cx="52" cy="30" r="30" fill="#1A1A2E"/>
          </svg>
          <p style={{ fontSize: fs.coverArabic, fontWeight: '700', color: '#FFD700', marginBottom: '4px', textAlign: 'center', direction: 'rtl', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", letterSpacing: '2px', position: 'relative', zIndex: 1 }}>عید الاضحیٰ مبارک</p>
          <h1 style={{ fontSize: fs.coverTitle, fontWeight: '800', textAlign: 'center', marginBottom: isMobile ? '6px' : '14px', color: '#FFD700', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", lineHeight: '1.3', letterSpacing: '3px', textShadow: '2px 2px 0px #16213E', position: 'relative', zIndex: 1 }}>EID UL-ADHA<br/>MUBARAK</h1>
          <svg width={fs.dividerWidth} height="8" style={{ margin: '4px 0', position: 'relative', zIndex: 1 }}><line x1="0" y1="4" x2={isMobile ? "40" : "80"} y2="4" stroke="#FFD700" strokeWidth="1.5"/><circle cx={isMobile ? "55" : "100"} cy="4" r="3" fill="#FFD700"/><line x1={isMobile ? "70" : "120"} y1="4" x2={isMobile ? "110" : "200"} y2="4" stroke="#FFD700" strokeWidth="1.5"/></svg>
          
          <img 
            src="/mosque-icon.png" 
            alt=""
            style={{ 
              width: fs.mosqueIconSize, height: fs.mosqueIconSize, marginTop: '6px', 
              position: 'relative', zIndex: 2, objectFit: 'contain',
              filter: 'drop-shadow(0 0 6px rgba(255,215,0,0.4)) brightness(1.3)'
            }} 
          />
        </div>
      </div>

      {/* ============ INNER PAGES ============ */}
      {eidPages.map((page, index) => (
        <div key={index} style={{ background: 'transparent' }}>
          <div style={{ 
            width: '100%', height: '100%', display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center', padding: fs.padding,
            background: '#FFFFFF', border: '3px solid #1A1A2E',
            position: 'relative', boxSizing: 'border-box'
          }}>
            <CornerLines />
            <div style={{ marginBottom: isMobile ? '4px' : '10px' }}>{getIcon(index)}</div>
            <h2 style={{ fontSize: fs.title, fontWeight: '700', color: '#1A1A2E', marginBottom: '2px', textAlign: 'center', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", letterSpacing: '4px' }}>{page.title}</h2>
            <p style={{ fontSize: fs.subtitle, color: '#555', marginBottom: isMobile ? '4px' : '10px', textAlign: 'center', fontFamily: 'serif' }}>{page.subtitle}</p>
            <svg width={isMobile ? "60" : "100"} height="2" style={{ margin: '2px 0 4px' }}><line x1="0" y1="1" x2={isMobile ? "20" : "38"} y2="1" stroke="#1A1A2E" strokeWidth="1.5"/><circle cx={isMobile ? "30" : "50"} cy="1" r="2" fill="#1A1A2E"/><line x1={isMobile ? "40" : "62"} y1="1" x2={isMobile ? "60" : "100"} y2="1" stroke="#1A1A2E" strokeWidth="1.5"/></svg>
            <p style={{ fontSize: fs.message, color: '#333', textAlign: 'center', lineHeight: '1.6', padding: '0 4px', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", letterSpacing: '0.5px' }}>{page.message}</p>
            <div style={{ minHeight: isMobile ? '18px' : '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {page.translation ? (
                <p style={{ fontSize: fs.translation, color: '#666', textAlign: 'center', marginTop: '3px', fontStyle: 'italic', lineHeight: '1.3', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif" }}>{page.translation}</p>
              ) : (<div style={{ height: '3px' }}></div>)}
            </div>
          </div>
        </div>
      ))}

      {/* ============ BACK COVER ============ */}
      <div style={{ background: 'transparent' }}>
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: fs.coverPadding, background: '#1A1A2E', border: '3px solid #16213E', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
          <GoldCornerLines />
          {[...Array(isMobile ? 4 : 8)].map((_, i) => (<span key={i} style={{ position: 'absolute', top: `${Math.random() * 85}%`, left: `${Math.random() * 85}%`, fontSize: `${8 + Math.random() * 8}px`, color: '#FFD700', opacity: 0.3 }}>✦</span>))}
          <svg width={isMobile ? "28" : "40"} height={isMobile ? "26" : "36"} viewBox="0 0 36 32"><path d="M18 30 C18 30, 2 20, 2 12 C2 7, 6 3, 10 3 C13 3, 16 5.5, 18 8 C20 5.5, 23 3, 26 3 C30 3, 34 7, 34 12 C34 20, 18 30, 18 30Z" fill="#FF6B6B" stroke="#E05555" strokeWidth="2"/></svg>
          <p style={{ fontSize: fs.coverTitle, color: '#FFD700', fontWeight: '700', marginTop: isMobile ? '10px' : '18px', marginBottom: isMobile ? '5px' : '10px', textAlign: 'center', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", letterSpacing: '3px' }}>WITH LOVE & DUA</p>
          <svg width={isMobile ? "100" : "160"} height="4" style={{ margin: '6px 0' }}><line x1="0" y1="2" x2={isMobile ? "38" : "62"} y2="2" stroke="#FFD700" strokeWidth="1.5"/><circle cx={isMobile ? "50" : "80"} cy="2" r="2" fill="#FFD700"/><line x1={isMobile ? "62" : "98"} y1="2" x2={isMobile ? "100" : "160"} y2="2" stroke="#FFD700" strokeWidth="1.5"/></svg>
          <p style={{ color: '#E8D5A0', fontSize: fs.message, fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", textAlign: 'center', lineHeight: '1.5' }}>May this Eid bring you peace,<br/>prosperity, and countless blessings.<br/>Ameen!</p>
          <svg width={isMobile ? "100" : "160"} height="4" style={{ margin: '6px 0' }}><line x1="0" y1="2" x2={isMobile ? "38" : "62"} y2="2" stroke="#FFD700" strokeWidth="1.5"/><circle cx={isMobile ? "50" : "80"} cy="2" r="2" fill="#FFD700"/><line x1={isMobile ? "62" : "98"} y1="2" x2={isMobile ? "100" : "160"} y2="2" stroke="#FFD700" strokeWidth="1.5"/></svg>
          <p style={{ color: '#B0B0C0', fontSize: fs.translation, marginTop: '5px', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", letterSpacing: '3px' }}>FROM</p>
          <p style={{ color: '#FFD700', fontSize: fs.title, fontWeight: '700', fontFamily: "'Agency FB', 'Arial Narrow', sans-serif", letterSpacing: '3px' }}>[M.Ahmad Malik]</p>
        </div>
      </div>
      
    </HTMLFlipBook>
  );
}

export default Book;