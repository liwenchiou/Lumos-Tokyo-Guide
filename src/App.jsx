import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Map as MapIcon, 
  Scroll, 
  Plane, 
  PlaneTakeoff, 
  PlaneLanding, 
  Home, 
  Train, 
  Castle, 
  Sparkles, 
  TreePine, 
  ShoppingBag, 
  CloudSun, 
  Fish, 
  MapPin, 
  Ship, 
  Zap, 
  CheckCircle, 
  Navigation,
  Utensils,
  Search,
  Check,
  Feather,
  Briefcase,
  Camera
} from 'lucide-react';
import { itineraryData, checklistData, pocketData } from './data/itinerary';

const iconMap = {
  Plane,
  PlaneTakeoff,
  PlaneLanding,
  Home,
  Train,
  Castle,
  Sparkles,
  TreePine,
  ShoppingBag,
  CloudSun,
  Fish,
  MapPin,
  Ship,
  Zap,
  CheckCircle,
  Utensils,
  Search
};

const SparkleEffect = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substr(2, 9);
      const newSparkle = {
        id,
        left: Math.random() * 100,
        top: 100, // starting from bottom of viewport usually, or wherever
      };
      setSparkles(prev => [...prev, newSparkle]);
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== id));
      }, 2000);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {sparkles.map(s => (
        <motion.div
          key={s.id}
          className="sparkle"
          initial={{ left: `${s.left}vw`, top: '100vh', opacity: 0.8 }}
          animate={{ top: '-10vh', opacity: 0 }}
          transition={{ duration: 2, ease: "linear" }}
        />
      ))}
    </>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('map');
  const [currentDay, setCurrentDay] = useState(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    
    // Trip dates: 2026/5/25 ~ 5/29
    if (year === 2026 && month === 5) {
      if (date >= 25 && date <= 29) {
        return date - 24; // 25th is Day 1, 26th is Day 2, etc.
      }
    }
    return 1;
  });
  const [mealTab, setMealTab] = useState('breakfast');
  const [completedItems, setCompletedItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleChecklist = (index) => {
    setCompletedItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const openNav = (coords, link) => {
    if (link) {
      window.open(link, '_blank');
    } else if (coords && coords.startsWith('http')) {
      window.open(coords, '_blank');
    } else {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${coords}`, '_blank');
    }
  };

  const searchNearby = (coords, keyword = '餐廳') => {
    window.open(`https://www.google.com/maps/search/${keyword}/@${coords},15z`, '_blank');
  };

  const currentDayData = itineraryData[currentDay];

  return (
    <div className="pb-24">
      <SparkleEffect />
      
      <header className="container">
        <div className="badge">Mischief Managed</div>
        <h1 className="magic-font">TOKYO 2026</h1>
        
        <div className="flight-info-grid">
          <div className="flight-card">
            <div className="flight-card-label magic-font text-center">Departure ✈ JX800</div>
            <div className="flight-card-time text-center">10:40 <span className="opacity-50 mx-1">→</span> 15:05</div>
            <div className="flight-card-route text-center">TPE T1 - NRT T2</div>
          </div>
          <div className="flight-card">
            <div className="flight-card-label magic-font text-center">Return ✈ JX801</div>
            <div className="flight-card-time text-center">14:10 <span className="opacity-50 mx-1">→</span> 16:40</div>
            <div className="flight-card-route text-center">NRT T2 - TPE T1</div>
          </div>
        </div>
      </header>

      <nav className="container">
        <div className="nav-container">
          <div className="main-tabs">
            <button 
              onClick={() => setActiveTab('map')} 
              className={`tab-btn magic-font ${activeTab === 'map' ? 'active' : ''}`}
            >
              <MapIcon size={16} /> 魔法地圖
            </button>
            <button 
              onClick={() => setActiveTab('checklist')} 
              className={`tab-btn magic-font ${activeTab === 'checklist' ? 'active' : ''}`}
            >
              <Scroll size={16} /> 準備清單
            </button>
            <button 
              onClick={() => setActiveTab('pocket')} 
              className={`tab-btn magic-font ${activeTab === 'pocket' ? 'active' : ''}`}
            >
              <Briefcase size={16} /> 魔法百寶袋
            </button>
          </div>
          {activeTab === 'map' && (
            <div className="day-selector no-scrollbar">
              {[1, 2, 3, 4, 5].map(day => (
                <button
                  key={day}
                  onClick={() => {
                    setCurrentDay(day);
                    window.scrollTo({ top: 250, behavior: 'smooth' });
                  }}
                  className={`day-btn magic-font ${currentDay === day ? 'active' : ''}`}
                >
                  DAY {day} ({itineraryData[day]?.date.split(' ')[0]})
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="container mt-10">
        <AnimatePresence mode="wait">
          {activeTab === 'map' && (
            <motion.div
              key={`day-${currentDay}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-12 border-b border-magic-gold/30 pb-6" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '1.5rem', marginBottom: '3rem' }}>
                <h2 className="magic-font text-2xl font-bold text-white tracking-widest">{currentDayData.title}</h2>
                <span className="magic-font text-sm text-magic-gold/70" style={{ color: 'rgba(212, 175, 55, 0.7)' }}>{currentDayData.date}</span>
              </div>

              {currentDayData.items.map((item, idx) => {
                const Icon = iconMap[item.icon] || MapPin;
                return (
                  <div key={idx} className={`itinerary-item ${item.reserved || item.icon === 'Utensils' || item.icon === 'Fish' ? 'is-food-item' : ''}`}>
                    <div className="icon-box">
                      <Icon size={20} />
                    </div>
                    <div className="item-content">
                      <div className="item-time magic-font">{item.time}</div>
                      <h4 className="item-activity">
                        {item.activity}
                        {item.reserved && (
                          <span className="reserved-tag magic-font">
                            已預約
                          </span>
                        )}
                      </h4>
                      <div className="transport-tag">
                        <Train size={12} /> {item.transport}
                      </div>
                      <div className={`item-note-card ${item.critical ? 'critical' : ''}`}>
                        <p className="note-text">{item.note}</p>
                        <button onClick={() => openNav(item.coords, item.link)} className="nav-btn">
                          <Navigation size={12} /> 路徑顯現
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="parchment-bg food-section">
                <h3 className="magic-font food-title">
                  <Utensils size={20} color="var(--wizard-crimson)" />
                  THE GREAT HALL MENU
                </h3>
                <div className="meal-tabs">
                  <button 
                    onClick={() => setMealTab('breakfast')} 
                    className={`meal-tab-btn ${mealTab === 'breakfast' ? 'active' : ''}`}
                  >
                    🍳 朝食
                  </button>
                  <button 
                    onClick={() => setMealTab('lunch')} 
                    className={`meal-tab-btn ${mealTab === 'lunch' ? 'active' : ''}`}
                  >
                    🍖 午餐
                  </button>
                  <button 
                    onClick={() => setMealTab('dinner')} 
                    className={`meal-tab-btn ${mealTab === 'dinner' ? 'active' : ''}`}
                  >
                    🍷 晚宴
                  </button>
                </div>
                <div className="meal-content min-h-[150px]">
                  {currentDayData.food[mealTab].map((opt, i) => (
                    <div key={i} className="food-option-card">
                      <h5 className="food-name">{opt.name}</h5>
                      <p className="food-note">{opt.note}</p>
                      <button onClick={() => openNav(opt.coords, opt.link)} className="food-loc-btn">
                        <MapPin size={12} /> 查看位置
                      </button>
                    </div>
                  ))}
                </div>
                <div className="search-buttons-group">
                  <button 
                    onClick={() => searchNearby(currentDayData.items[0].coords, '餐廳')} 
                    className="search-nearby-btn"
                  >
                    <Search size={16} /> 🔍 顯現周邊美食
                  </button>
                  <button 
                    onClick={() => searchNearby(currentDayData.items[0].coords, '便利商店')} 
                    className="search-nearby-btn convenience-btn"
                  >
                    <ShoppingBag size={16} /> 🔍 搜尋周邊超商
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'checklist' && (
            <motion.div
              key="checklist"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="parchment-bg checklist-container"
            >
              <h3 className="magic-font checklist-title">
                <Feather size={24} color="var(--wizard-crimson)" />
                入學必備清單
              </h3>
              <div className="checklist-items">
                {checklistData.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`checklist-item ${completedItems.includes(idx) ? 'completed' : ''}`}
                    onClick={() => toggleChecklist(idx)}
                  >
                    <div className="check-box">
                      {completedItems.includes(idx) && <Check size={16} color="var(--wizard-crimson)" />}
                    </div>
                    <div className="checklist-text">
                      <span className="checklist-label">{item.text}</span>
                      {item.critical && <div className="priority-tag">Priority: Critical</div>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'pocket' && (
            <motion.div
              key="pocket"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="parchment-bg pocket-container"
            >
              <h3 className="magic-font pocket-title">
                <Briefcase size={24} color="var(--wizard-crimson)" />
                魔法百寶袋 💼
              </h3>
              <p className="pocket-subtitle">放置您出遊必備的地鐵圖、門票截圖或重要單據，點擊即可瞬間顯現！</p>
              
              <div className="pocket-grid">
                {pocketData.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="pocket-card"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="pocket-card-icon">
                      <Camera size={20} color="var(--magic-gold)" />
                    </div>
                    <div className="pocket-card-info">
                      <h4 className="pocket-card-title magic-font">{item.title}</h4>
                      <p className="pocket-card-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox / Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div 
                className="lightbox-content"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
                <h3 className="lightbox-title magic-font">{selectedImage.title}</h3>
                <div className={`lightbox-img-wrapper ${selectedImage.image?.toLowerCase().endsWith('.pdf') ? 'is-pdf' : ''}`}>
                  {selectedImage.image?.toLowerCase().endsWith('.pdf') ? (
                    <>
                      <iframe
                        src={`${import.meta.env.BASE_URL}pocket/${selectedImage.image}`}
                        title={selectedImage.title}
                        width="100%"
                        height="100%"
                        style={{ border: 'none', borderRadius: '0.75rem' }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="lightbox-fallback" style={{ display: 'none' }}>
                        <div className="fallback-inner">
                          <p className="fallback-magic-text">✨ 魔法文件尚未歸位 ✨</p>
                          <span className="fallback-hint">請將 PDF 命名為：</span>
                          <code className="fallback-filename">{selectedImage.image}</code>
                          <span className="fallback-hint">並放入此路徑資料夾中：</span>
                          <code className="fallback-path">/public/pocket/</code>
                        </div>
                      </div>
                      <a
                        className="pdf-open-btn"
                        href={`${import.meta.env.BASE_URL}pocket/${selectedImage.image}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📄 另開新分頁查看 PDF
                      </a>
                    </>
                  ) : (
                    <>
                      <img 
                        src={`${import.meta.env.BASE_URL}pocket/${selectedImage.image}`} 
                        alt={selectedImage.title} 
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="lightbox-fallback" style={{ display: 'none' }}>
                        <div className="fallback-inner">
                          <p className="fallback-magic-text">✨ 魔法影像尚未歸位 ✨</p>
                          <span className="fallback-hint">請將您的截圖/圖片命名為：</span>
                          <code className="fallback-filename">{selectedImage.image}</code>
                          <span className="fallback-hint">並放入此路徑資料夾中：</span>
                          <code className="fallback-path">/public/pocket/</code>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <p className="lightbox-desc">{selectedImage.description}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
