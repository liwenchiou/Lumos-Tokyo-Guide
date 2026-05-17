export const itineraryData = {
    1: {
        date: "5.25 Mon",
        title: "踏入魔法界",
        items: [
            { time: "08:10", activity: "桃園機場報到", icon: "Plane", note: "【星宇 JX800】第一航廈。建議提早抵達享受貴賓室或逛逛機場。", transport: "桃園機場 T1", coords: "25.0792,121.2342", critical: true },
            { time: "10:40", activity: "起飛：桃園 TPE", icon: "PlaneTakeoff", note: "準備享受胡同燒肉機上餐與星宇魔法飛行。", transport: "StarLux JX800", coords: "25.0792,121.2342" },
            { time: "15:05", activity: "抵達成田機場 NRT", icon: "PlaneLanding", note: "抵達成田 T2。辦理 VJW 入境。搭乘 Skyliner 直達京成上野站。", transport: "NRT Terminal 2", coords: "35.7722,140.3876" },
            { time: "17:30", activity: "新御徒町 Check-in", icon: "Home", note: "搭乘「大江戶線」一站抵達。放下行李，準備出發東京時尚殿堂！", transport: "京成上野 → 大江戶線 → 新御徒町", coords: "35.7054,139.7835" },
            { time: "18:40", activity: "銀座時尚夜巡", icon: "Sparkles", note: "從飯店旁「上野站」搭乘銀座線直達。欣賞經典和光鐘樓與 Ginza Six 奢華夜景，感受極致優雅的東京首夜。", transport: "上野站 → 東京地鐵銀座線 (12分) → 銀座站", coords: "35.6721,139.7656" }
        ],
        food: {
            breakfast: [{ name: "TPE 貴賓室/輕食", note: "機場內星巴克或 T1 輕食區。", coords: "25.0792,121.2342" }],
            lunch: [{ name: "星宇機上餐", note: "胡同燒肉聯名餐，必喝星宇特調。", coords: "25.0792,121.2342" }],
            dinner: [
                { name: "銀座 篝 (Kagari)", note: "銀座超人氣雞白湯拉麵，湯頭濃郁如濃湯，魔法級的美味！", coords: "35.6710,139.7628" },
                { name: "肉屋橫丁 (秋葉原)", note: "回程可選。豪華和牛燒肉吃到飽，離新御徒町很近。", coords: "35.6985,139.7731" }
            ]
        }
    },
    2: {
        date: "5.26 Tue",
        title: "霍格華茲開學日",
        items: [
            { time: "09:30", activity: "前往影城", icon: "Train", note: "新御徒町站搭乘「都營大江戶線」直達豐島園，不需轉車！", transport: "都營大江戶線 (直達)", coords: "35.7054,139.7835" },
            { time: "10:30", activity: "哈利波特影城", icon: "Castle", note: "【九又四分之三月台】沉浸式魔法體驗。建議預留 4 小時。", transport: "豐島園站徒步 2 分", coords: "35.7454,139.6481" },
            { time: "18:00", activity: "新宿夜巡", icon: "Sparkles", note: "回程搭大江戶線在新宿下車，看 3D 貓與新宿繁華夜景。", transport: "都營大江戶線", coords: "35.6905,139.7005" }
        ],
        food: {
            breakfast: [{ name: "新御徒町 7-11", note: "必買炸雞與厚切三明治，車上墊胃。", coords: "35.7054,139.7835" }],
            lunch: [{ name: "Backlot Cafe", note: "影城內必喝奶油啤酒與學院主題餐。", coords: "35.7454,139.6481" }],
            dinner: [
                { name: "六歌仙 燒肉", note: "新宿頂級和牛，需預約。", coords: "35.6925,139.6991" },
                { name: "風雲兒 拉麵", note: "新宿超人氣沾麵，湯頭極濃郁。", coords: "35.6874,139.6981" }
            ]
        }
    },
    3: {
        date: "5.27 Wed",
        title: "城市之巔與潮流",
        items: [
            { time: "10:00", activity: "明治神宮", icon: "TreePine", note: "搭乘大江戶線直達代代木站，步行 5 分鐘抵達。參拜壯麗鳥居。", transport: "新御徒町 → 都營大江戶線 (直達) → 代代木", coords: "35.6764,139.6993" },
            { time: "12:30", activity: "敘敘苑 澀谷店", icon: "Utensils", note: "預約午餐時段。38樓高空景觀與高級燒肉。", transport: "原宿站 → JR 山手線 → 澀谷站", coords: "35.6595,139.7003" },
            { time: "14:30", activity: "原宿 & 表參道", icon: "ShoppingBag", note: "逛潮流店、竹下通，感受日本最尖端流行。", transport: "澀谷 → 半藏門線/銀座線 → 表參道", coords: "35.6705,139.7031" },
            { time: "16:00", activity: "bills 表參道", icon: "Utensils", note: "預約下午茶/早午餐。世界第一鬆餅朝聖。", transport: "表參道東急廣場 (步行)", coords: "35.6687,139.7055" },
            { time: "18:00", activity: "SHIBUYA SKY", icon: "CloudSun", note: "預約夕陽時段俯瞰東京全景，預約 18:00 最美。", transport: "表參道 → 半藏門線/銀座線 → 澀谷", coords: "35.6585,139.7023" }
        ],
        food: {
            breakfast: [{ name: "新御徒町周邊", note: "快速墊胃出發前往明治神宮。", coords: "35.7054,139.7835" }],
            lunch: [{ name: "敘敘苑 澀谷店", note: "已預約 12:30。高空夜景高級燒肉。", coords: "35.6595,139.7003" }],
            dinner: [
                { name: "bills 表參道", note: "已預約 16:00。鬆餅與歐式料理。", coords: "35.6687,139.7055" },
                { name: "極味屋 漢堡排", note: "澀谷 PARCO 店，自己煎的樂趣。", coords: "35.6620,139.6991" }
            ]
        }
    },
    4: {
        date: "5.28 Thu",
        title: "海景、鋼彈與老街",
        items: [
            { time: "09:00", activity: "築地市場", icon: "Fish", note: "大江戶線直達。大啖新鮮海鮮丼與玉子燒。", transport: "新御徒町 → 都營大江戶線 → 築地市場", coords: "35.6655,139.7707" },
            { time: "11:30", activity: "東京晴空塔 Skytree", icon: "Castle", note: "世界第一高塔，俯瞰關東平原。建議步行至東銀座站搭乘淺草線直達最方便。", transport: "東銀座站 → 都營淺草線 (直達) → 押上站", coords: "35.7101,139.8107" },
            { time: "14:00", activity: "淺草雷門", icon: "MapPin", note: "搭乘淺草線抵達，參拜後步行至碼頭。", transport: "押上站 → 都營淺草線 (1站) → 淺草站", coords: "35.7148,139.7967" },
            { time: "16:30", activity: "水上巴士前往台場", icon: "Ship", note: "搭乘未來感船隻 Himiko/Hotaluna 前往台場。", transport: "淺草碼頭 → 水上巴士 → 台場", coords: "35.6246,139.7755" },
            { time: "18:00", activity: "台場：獨角獸鋼彈", icon: "Zap", note: "看鋼彈表演、彩虹大橋夜景、購物中心。", transport: "台場 → 百合海鷗號 → 汐留 → 大江戶線", coords: "35.6246,139.7755" }
        ],
        food: {
            breakfast: [{ name: "築地 虎杖", note: "豪華海鮮珠寶盒，視覺味覺享受。", coords: "35.6655,139.7707" }],
            lunch: [{ name: "淺草 今半", note: "百年壽喜燒老店，午餐時段較划算。", coords: "35.7121,139.7925" }],
            dinner: [
                { name: "台場 Bills", note: "彩虹大橋海景餐，氛圍無敵。", coords: "35.6288,139.7744" },
                { name: "和幸豬排 台場", note: "CP值超高的炸豬排連鎖店。", coords: "35.6268,139.7755" }
            ]
        }
    },
    5: {
        date: "5.29 Fri",
        title: "最後掃貨與歸途",
        items: [
            { time: "09:30", activity: "最後掃貨：多慶屋", icon: "ShoppingBag", note: "飯店旁紫色大樓，最後採買藥妝零食。", transport: "步行 10 分鐘", coords: "35.7073,139.7753" },
            { time: "11:00", activity: "前往成田：Skyliner", icon: "Train", note: "務必搭上此班，預計 11:45 抵達成田 T2。", transport: "京成上野 → Skyliner", coords: "35.7124,139.7761" },
            { time: "11:45", activity: "星宇報到 (成田 T2)", icon: "CheckCircle", note: "【重要】起飛前 2.5 小時抵達，留時間逛免稅店。", transport: "成田 T2", coords: "35.7722,140.3876", critical: true },
            { time: "14:10", activity: "起飛：成田 NRT", icon: "PlaneTakeoff", note: "星宇 JX801。帶著滿滿魔法戰利品回台灣。", transport: "StarLux JX801", coords: "35.7722,140.3876" },
            { time: "16:40", activity: "抵達：桃園 TPE", icon: "PlaneLanding", note: "平安抵達台灣，魔法旅程圓滿結束。", transport: "TPE Terminal 1", coords: "25.0792,121.2342" }
        ],
        food: {
            breakfast: [{ name: "MISOJYU 淺草", note: "精緻味噌湯早餐，溫暖你的胃。", coords: "35.7115,139.7941" }],
            lunch: [{ name: "成田機場免稅區", note: "最後一碗日式拉麵或伴手禮區輕食。", coords: "35.7722,140.3876" }],
            dinner: [{ name: "台灣想念的味道", note: "溫暖的家與台灣美食。", coords: "25.0792,121.2342" }]
        }
    }
};

export const checklistData = [
    { text: "護照正本 (效期 6 個月以上)", critical: true },
    { text: "Visit Japan Web 入境審查 QR Code", critical: true },
    { text: "旅遊平安險 & 海外突發疾病醫療險", critical: true },
    { text: "星宇航空電子登機證 (APP)", critical: true },
    { text: "哈利波特影城門票 (5/26 10:30)", critical: true },
    { text: "SHIBUYA SKY 門票 (5/27 18:00)", critical: true },
    { text: "東京晴空塔 門票 (預約 5/28 11:30)", critical: true },
    { text: "Skyliner 機場快線來回票 (預購優惠)", critical: false },
    { text: "敘敘苑 澀谷店 預約 (5/27 12:30)", critical: true },
    { text: "bills 表參道 預約 (5/27 16:00)", critical: true },
    { text: "六歌仙 燒肉 預約 (5/26 晚餐)", critical: true },
    { text: "淺草 今半 壽喜燒 預約 (5/28 午餐)", critical: true },
    { text: "水上巴士 淺草-台場 預約 (5/28 16:30)", critical: false },
    { text: "日本 ESIM / 實體網卡 (確認開通)", critical: true },
    { text: "Apple Wallet 綁定 Suica/Pasmo", critical: false },
    { text: "日幣現金 & 海外刷卡高回饋信用卡", critical: true },
    { text: "哈利波特學院袍/魔法棒 (重要裝備)", critical: false }
];
