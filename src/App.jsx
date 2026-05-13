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
  Feather
} from 'lucide-react';
import { itineraryData, checklistData } from './data/itinerary';

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
  CheckCircle
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

  const toggleChecklist = (index) => {
    setCompletedItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const openNav = (coords) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${coords}`, '_blank');
  };

  const searchNearby = (coords) => {
    window.open(`https://www.google.com/maps/search/餐廳/@${coords},15z`, '_blank');
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
            <div className="flight-card-route text-center">TPE - NRT</div>
          </div>
          <div className="flight-card">
            <div className="flight-card-label magic-font text-center">Return ✈ JX801</div>
            <div className="flight-card-time text-center">14:10 <span className="opacity-50 mx-1">→</span> 16:40</div>
            <div className="flight-card-route text-center">NRT - TPE</div>
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
                  DAY {day}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="container mt-10">
        <AnimatePresence mode="wait">
          {activeTab === 'map' ? (
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
                  <div key={idx} className="itinerary-item">
                    <div className="icon-box">
                      <Icon size={20} />
                    </div>
                    <div className="item-content">
                      <div className="item-time magic-font">{item.time}</div>
                      <h4 className="item-activity">{item.activity}</h4>
                      <div className="transport-tag">
                        <Train size={12} /> {item.transport}
                      </div>
                      <div className={`item-note-card ${item.critical ? 'critical' : ''}`}>
                        <p className="note-text">{item.note}</p>
                        <button onClick={() => openNav(item.coords)} className="nav-btn">
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
                      <button onClick={() => openNav(opt.coords)} className="food-loc-btn">
                        <MapPin size={12} /> 查看位置
                      </button>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => searchNearby(currentDayData.items[0].coords)} 
                  className="search-nearby-btn"
                >
                  <Search size={16} /> 🔍 顯現周邊美食
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="checklist"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
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
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
