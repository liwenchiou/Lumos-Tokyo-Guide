export const itineraryData = {
    1: {
        date: "5.25 Mon",
        title: "踏入魔法界",
        items: [
            { time: "08:10", activity: "桃園機場報到", icon: "Plane", note: "【星宇 JX800】第一航廈。建議提早抵達享受貴賓室或逛逛機場。", transport: "桃園機場 T1", coords: "25.0792,121.2342", critical: true },
            { time: "10:40", activity: "起飛：桃園 TPE", icon: "PlaneTakeoff", note: "準備享受胡同燒肉機上餐與星宇魔法飛行。", transport: "StarLux JX800", coords: "25.0792,121.2342" },
            { time: "15:05", activity: "抵達成田機場 NRT", icon: "PlaneLanding", note: "抵達成田 T2。辦理 VJW 入境。搭乘 Skyliner 直達京成上野站。", transport: "成田機場第2・第3候機樓站 ➔ (京成電鐵 Skyliner) ➔ 京成上野站", coords: "35.7722,140.3876" },
            { time: "17:30", activity: "Check-in: Serorin Light Hotel Tokyo", icon: "Home", note: "大江戶線「新御徒町站」A4 出口步行 3 分鐘即達。放下行李準備開吃！", transport: "京成上野站 ➔ 步行至 上野御徒町站 ➔ 都營大江戶線 ➔ 新御徒町站", coords: "35.7053,139.7837" },
            { 
                time: "18:30", 
                activity: "阿美橫丁商店街 (Ameyoko)", 
                icon: "Sparkles", 
                note: "從飯店步行 10 分鐘或搭地鐵 1 站即達。東京最熱鬧、最接地氣的露天商店街！集結了無數藥妝店、零食雜貨、水果攤與海鮮居酒屋，充滿濃厚的人情味與在地煙火氣，是體驗東京夜生活的絕佳首選！", 
                transport: "步行 10 分鐘 或 新御徒町站 ➔ 都營大江戶線 (1站) ➔ 上野御徒町站", 
                coords: "35.7101,139.7744" 
            },
            { 
                time: "19:00", 
                activity: "晚餐：拉麵 鴨 to 蔥", 
                icon: "Utensils", 
                note: "上野神級拉麵，排隊名店，湯頭僅使用鴨、蔥、水。位在阿美橫町內。", 
                transport: "步行 5 分鐘", 
                coords: "35.7088,139.7744",
                link: "https://maps.app.goo.gl/2VLe7avivYNRT9q26?g_st=il"
            },
            { 
                time: "19:00", 
                activity: "晚餐：文樂 燒鳥 (Yakitori Bunraku)", 
                icon: "Utensils", 
                note: "上野阿美橫町高人氣居酒屋，爽脆燒鳥與經典燉牛雜，露天座位氣氛超棒。", 
                transport: "步行 5 分鐘", 
                coords: "35.7100,139.7744",
                link: "https://maps.app.goo.gl/gCH7oBwrPxxL2UDz7?g_st=il"
            },
            { time: "21:30", activity: "返回飯店休息", icon: "Home", note: "結束首日魔法旅程，回飯店充電。", transport: "步行 10 分鐘", coords: "35.7053,139.7837" }
        ],
        food: {
            breakfast: [{ name: "TPE 貴賓室/輕食", note: "機場內星巴克或 T1 輕食區。", coords: "25.0792,121.2342" }],
            lunch: [{ name: "星宇機上餐", note: "胡同燒肉聯名餐，必喝星宇特調。", coords: "25.0792,121.2342" }],
            dinner: [
                { 
                    name: "拉麵 鴨 to 蔥", 
                    note: "上野神級拉麵，排隊名店，湯頭僅使用鴨、蔥、水。位在阿美橫町內。", 
                    coords: "35.7088,139.7744",
                    link: "https://maps.app.goo.gl/2VLe7avivYNRT9q26?g_st=il"
                },
                { 
                    name: "文樂 燒鳥 (Yakitori Bunraku)", 
                    note: "上野阿美橫町高人氣居酒屋，爽脆燒鳥與經典燉牛雜，露天座位氣氛超棒。", 
                    coords: "35.7100,139.7744",
                    link: "https://maps.app.goo.gl/gCH7oBwrPxxL2UDz7?g_st=il"
                },
                { name: "肉屋橫丁 (秋葉原)", note: "回程可選。豪華和牛燒肉吃到飽，離新御徒町很近。", coords: "35.6985,139.7731" }
            ]
        }
    },
    2: {
        date: "5.26 Tue",
        title: "霍格華茲開學日",
        items: [
            { time: "09:00", activity: "步行至新御徒町站", icon: "MapPin", note: "離開飯店，步行約 3 分鐘前往新御徒町站 A4 出口。", transport: "步行", coords: "35.7068,139.7835" },
            { time: "09:30", activity: "前往影城", icon: "Train", note: "新御徒町站搭乘「都營大江戶線」直達豐島園，不需轉車！", transport: "新御徒町站 ➔ 都營大江戶線 (直達) ➔ 豐島園站", coords: "35.7454,139.6481" },
            { time: "10:30", activity: "哈利波特影城", icon: "Castle", note: "【九又四分之三月台】沉浸式魔法體驗。建議預留 4 小時。", transport: "豐島園站徒步 2 分", coords: "35.7454,139.6481" },
            { 
                time: "17:30", 
                activity: "花園神社", 
                icon: "MapPin", 
                note: "新宿東口的守護神，隱密而寧靜的能量景點。參拜祈求旅途平安，黃昏時分點亮的紅燈籠非常有大正浪漫的氣氛！", 
                transport: "豐島園站 ➔ 都營大江戶線 ➔ 東新宿站 (A2出口) ➔ 步行 8 分鐘", 
                coords: "35.6935,139.7051"
            },
            { 
                time: "18:15", 
                activity: "新宿夜巡 (3D 貓)", 
                icon: "Sparkles", 
                note: "步行前往東口廣場，觀看著名的新宿 3D 貓立體大螢幕。順便拍攝熱鬧的新宿街景！", 
                transport: "步行 5 分鐘", 
                coords: "35.6905,139.7005" 
            },
            { 
                time: "19:00", 
                activity: "晚餐：利久牛舌 (Lumine Est 新宿店)", 
                icon: "Utensils", 
                note: "位於 Lumine Est 7 樓。來自仙台的超人氣炭烤厚切牛舌，Q彈脆口多汁，搭配麥飯與牛尾湯簡直是絕配！", 
                transport: "步行 2 分鐘 (新宿站直通)", 
                coords: "35.6912,139.7011",
                link: "https://bobbytravel.tw/rikyu-gyutan/"
            },
            { 
                time: "20:15", 
                activity: "甜點：HARBS 水果千層蛋糕 (Lumine Est 新宿店)", 
                icon: "Utensils", 
                note: "位於 Lumine Est 地下 2 樓。招牌水果千層蛋糕（Mille-crepes）非常強大，新鮮水果配上極致細膩奶油，必吃朝聖！", 
                transport: "電梯下至 B2", 
                coords: "35.6912,139.7011",
                link: "https://maps.app.goo.gl/MLBgws1UtQiE5GbE9?g_st=il"
            },
            { 
                time: "21:00", 
                activity: "歌舞伎町一番街", 
                icon: "Sparkles", 
                note: "東京最著名、最繁華的紅燈區入口。必拍著名的「歌舞伎町一番街」紅色霓虹牌坊，感受極致眩目的東京不夜城霓虹夜生活！", 
                transport: "步行 5 分鐘", 
                coords: "35.6938,139.7015" 
            },
            { time: "21:45", activity: "返回飯店休息", icon: "Home", note: "新宿夜巡圓滿結束，搭乘大江戶線直達回飯店充電。", transport: "東新宿站 (或 新宿西口站) ➔ 都營大江戶線 (直達) ➔ 新御徒町站", coords: "35.7053,139.7837" }
        ],
        food: {
            breakfast: [{ name: "新御徒町 7-11", note: "必買炸雞與厚切三明治，車上墊胃。", coords: "35.7068,139.7835" }],
            lunch: [{ name: "Backlot Cafe", note: "影城內必喝奶油啤酒與學院主題餐。", coords: "35.7454,139.6481" }],
            dinner: [
                { name: "六歌仙 燒肉", note: "新宿頂級和牛，需預約。", coords: "35.6925,139.6991" },
                { name: "風雲兒 拉麵", note: "新宿超人氣沾麵，湯頭極濃郁。", coords: "35.6874,139.6981" },
                { 
                    name: "HARBS (Lumine Est 新宿店)", 
                    note: "超人氣甜點店，招牌「水果千層蛋糕」超級強！水果新鮮、奶油細緻不膩，必吃推薦！位在 Lumine Est 地下 2 樓。", 
                    coords: "35.6912,139.7011",
                    link: "https://maps.app.goo.gl/MLBgws1UtQiE5GbE9?g_st=il"
                },
                { 
                    name: "牛舌炭燒 利久 (Lumine Est 新宿店)", 
                    note: "來自仙台的超人氣炭烤牛舌專賣店！炭烤厚切牛舌口感Q彈脆口、鹹香多汁，搭配麥飯與牛尾湯簡直是絕配！位於 Lumine Est 7 樓。", 
                    coords: "35.6912,139.7011",
                    link: "https://bobbytravel.tw/rikyu-gyutan/"
                }
            ]
        }
    },
    3: {
        date: "5.27 Wed",
        title: "綠意芬多精與澀谷潮流",
        items: [
            { 
                time: "09:30", 
                activity: "明治神宮", 
                icon: "TreePine", 
                note: "搭乘大江戶線直達代代木站，步行 5 分鐘抵達。清晨的明治神宮清幽涼爽，參拜巨大而神聖的大鳥居，在森林環抱的參道中享受芬多精，沉澱心靈。", 
                transport: "新御徒町站 ➔ 都營大江戶線 (直達) ➔ 代代木站", 
                coords: "35.6764,139.6993" 
            },
            { 
                time: "12:00", 
                activity: "午餐：敘敘苑 澀谷店", 
                icon: "Utensils", 
                note: "【已預約 12:30】大啖頂級燒肉！預約窗景座位享受 38 樓高空景觀與高級燒肉午間套餐，高CP值又極致享受！", 
                transport: "代代木站/原宿站 ➔ JR 山手線 ➔ 澀谷站", 
                coords: "35.6595,139.7003",
                reserved: true
            },
            { 
                time: "14:00", 
                activity: "澀谷潮流購物", 
                icon: "Sparkles", 
                note: "吃飽直接在澀谷開逛！必逛潮流地標澀谷 PARCO（6F 任天堂/Jump 旗艦店與潮牌聖地）及體驗經典的澀谷十字路口，感受眩目的東京心臟不夜城！", 
                transport: "步行", 
                coords: "35.6620,139.6991" 
            },
            { 
                time: "16:30", 
                activity: "原宿 & 表參道潮流探索", 
                icon: "ShoppingBag", 
                note: "從澀谷沿著貓街散步至原宿與表參道，探索竹下通特色店鋪、潮流服飾聖地，接著漫步至極富設計感的精品大道表參道。順便享用下午茶：世界第一的鬆餅 bills 表參道或文青咖啡 Tas Yard！", 
                transport: "步行 (貓街散步) 或 澀谷站 ➔ JR 山手線 ➔ 原宿站", 
                coords: "35.6705,139.7031" 
            },
            { 
                time: "19:00", 
                activity: "晚餐：SHAKE SHACK 外苑いちょう並木店 🌳", 
                icon: "Utensils", 
                note: "坐落於明治神宮外苑銀杏大道旁，以超人氣的開闊露天座位著稱。四周被繁茂的樹蔭包圍，是東京最悠閒浪漫的景觀漢堡店！點份多汁漢堡與限定奶昔，享受夢幻的東京之夜！", 
                transport: "表參道 ➔ 步行 10 分鐘 或搭地鐵銀座線 ➔ 外苑前站 (4a出口) ➔ 步行 5 分鐘", 
                coords: "35.6733,139.7199",
                link: "https://share.google/AQ6L1hGfmUPNbYKWl"
            },
            { 
                time: "21:30", 
                activity: "返回飯店休息", 
                icon: "Home", 
                note: "搭乘地鐵或大江戶線直達回新御徒町，結束充實美妙的一天。", 
                transport: "外苑前站 ➔ 東京地鐵銀座線 ➔ 青山一丁目站 (轉乘) ➔ 都營大江戶線 ➔ 新御徒町站", 
                coords: "35.7053,139.7837" 
            }
        ],
        food: {
            breakfast: [{ name: "新御徒町周邊", note: "出發前快速墊胃或超商美食。", coords: "35.7068,139.7835" }],
            lunch: [{ name: "敘敘苑 澀谷店", note: "已預約 12:30。高空景觀高級燒肉。", coords: "35.6595,139.7003" }],
            dinner: [
                { 
                    name: "SHAKE SHACK 外苑いちょう並木店", 
                    note: "超人氣露天綠意景觀漢堡！位於明治神宮外苑銀杏林蔭大道旁，被繁茂綠意樹蔭包圍的戶外露天座位氣氛絕佳，享受最悠閒寫意的東京浪漫之夜！", 
                    coords: "35.6733,139.7199",
                    link: "https://share.google/AQ6L1hGfmUPNbYKWl"
                },
                { 
                    name: "Tas Yard (千駄谷)", 
                    note: "隱身在北參道巷弄的文青咖啡廳！招牌日式咖哩飯溫潤濃郁，招牌咖啡凍與法式吐司更是隱藏版神級美味，氛圍安靜清雅。", 
                    coords: "35.6756,139.7057",
                    link: "https://maps.app.goo.gl/cvju4QB9jwL6q6ZC9?g_st=il"
                },
                { 
                    name: "bills 表參道", 
                    note: "朝聖「世界第一的鬆餅」！位於東急廣場 7 樓，招牌香蕉蜂蜜奶油鬆餅口感如雲朵般綿密，還有視野絕佳的空中庭園平台！", 
                    coords: "35.6687,139.7055",
                    link: "https://maps.app.goo.gl/2yacpXSDY6q7fjxm7?g_st=il"
                },
                { name: "極味屋 漢堡排", note: "澀谷 PARCO 店，自己煎的樂趣。", coords: "35.6620,139.6991" }
            ]
        }
    },
    4: {
        date: "5.28 Thu",
        title: "海景、鋼彈與老街",
        items: [
            { time: "08:30", activity: "步行至新御徒町站", icon: "MapPin", note: "離開飯店，步行前往新御徒町站，開始海鮮美食之旅。", transport: "步行", coords: "35.7068,139.7835" },
            { time: "09:00", activity: "築地市場", icon: "Fish", note: "大江戶線直達。大啖新鮮海鮮丼與玉子燒。", transport: "新御徒町站 ➔ 都營大江戶線 (直達) ➔ 築地市場站", coords: "35.6655,139.7707" },
            { time: "11:30", activity: "東京晴空塔 Skytree", icon: "Castle", note: "世界第一高塔，俯瞰關東平原。建議步行至東銀座站搭乘淺草線直達最方便。", transport: "築地步行至 東銀座站 ➔ 都營淺草線 (直達) ➔ 押上站 (晴空塔直通)", coords: "35.7101,139.8107" },
            { time: "14:00", activity: "淺草雷門", icon: "MapPin", note: "搭乘淺草線抵達，參拜後步行至碼頭。", transport: "押上站 ➔ 都營淺草線 (1站) ➔ 淺草站", coords: "35.7148,139.7967" },
            { time: "16:30", activity: "水上巴士前往台場", icon: "Ship", note: "搭乘未來感船隻 Himiko/Hotaluna 前往台場。", transport: "淺草碼頭 ➔ (水上巴士 Himiko/Hotaluna) ➔ 台場海濱公園", coords: "35.6246,139.7755" },
            { time: "18:00", activity: "台場：獨角獸鋼彈", icon: "Zap", note: "看鋼彈表演、彩虹大橋夜景、購物中心。", transport: "台場站 ➔ 百合海鷗號 ➔ 汐留站 (轉乘) ➔ 都營大江戶線 ➔ 新御徒町站", coords: "35.6246,139.7755" },
            { time: "21:30", activity: "返回飯店休息", icon: "Home", note: "從台場搭乘百合海鷗號至汐留，轉乘大江戶線直達新御徒町。", transport: "台場站 ➔ 百合海鷗號 ➔ 汐留站 (轉乘) ➔ 都營大江戶線 ➔ 新御徒町站", coords: "35.7053,139.7837" }
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
        title: "古城散策與魔法歸途",
        items: [
            { 
                time: "08:15", 
                activity: "退房與前往京成上野站", 
                icon: "Home", 
                note: "清晨辦理退房，直接攜帶所有行李前往京成上野站，提早寄存行李，擺脫最後一天拉行李回飯店搬運的焦慮！", 
                transport: "步行至 新御徒町站 ➔ 都營大江戶線 ➔ 上野御徒町站 ➔ 步行至 京成上野站", 
                coords: "35.7124,139.7761" 
            },
            { 
                time: "08:30", 
                activity: "京成上野站行李寄存 🔒", 
                icon: "CheckCircle", 
                note: "將行李寄存在京成上野站的大型置物櫃或人工行李寄存處 (ecbo cloak)。一身輕鬆展開最後的皇居散步！", 
                transport: "京成上野站置物櫃", 
                coords: "35.7124,139.7761" 
            },
            { 
                time: "09:00", 
                activity: "皇居外苑二重橋散策 🏰", 
                icon: "TreePine", 
                note: "清晨東御苑週五閉園，但外圍的二重橋（眼鏡橋）、護城河與松林為 24 小時開放！悠閒散步拍照，感受江戶城的雄偉與日本皇室歷史底蘊。", 
                transport: "上野站 ➔ JR 山手線/京濱東北線 ➔ 東京車站 丸之內口 ➔ 步行 10 分鐘", 
                coords: "35.6802,139.7578" 
            },
            { 
                time: "10:00", 
                activity: "東京車站丸之內站舍 🏢", 
                icon: "Sparkles", 
                note: "從二重橋步行約 8-10 分鐘即可抵達。欣賞並拍攝宏偉的百年復古紅磚車站，順便在東京車站丸之內廣場留下絕美紀念照！拍完搭山手線返回上野站。", 
                transport: "步行 8 分鐘 ➔ 東京車站 ➔ JR 山手線 (7分鐘) ➔ 上野站", 
                coords: "35.6812,139.7671" 
            },
            { 
                time: "11:00", 
                activity: "前往成田：Skyliner", 
                icon: "Train", 
                note: "在京成上野站領取寄存行李，直接搭乘 Skyliner 特快列車直達機場，預計 11:45 抵達成田 T2。", 
                transport: "京成上野站 ➔ (京成電鐵 Skyliner) ➔ 成田機場第2・第3候機樓站", 
                coords: "35.7124,139.7761" 
            },
            { 
                time: "11:45", 
                activity: "星宇報到 (成田 T2)", 
                icon: "CheckCircle", 
                note: "【重要】起飛前 2.5 小時抵達，辦理行李託運並進入免稅店，享受最後的免稅採購與精緻美味午餐。", 
                transport: "成田 T2", 
                coords: "35.7722,140.3876", 
                critical: true 
            },
            { 
                time: "14:10", 
                activity: "起飛：成田 NRT", 
                icon: "PlaneTakeoff", 
                note: "星宇 JX801。帶著滿滿魔法戰利品與不捨回台灣。", 
                transport: "StarLux JX801", 
                coords: "35.7722,140.3876" 
            },
            { 
                time: "16:40", 
                activity: "抵達：桃園 TPE", 
                icon: "PlaneLanding", 
                note: "平安抵達台灣，魔法旅程圓滿結束。", 
                transport: "TPE Terminal 1", 
                coords: "25.0792,121.2342" 
            }
        ],
        food: {
            breakfast: [{ name: "飯店周邊輕食", note: "清晨出發前在超商快速墊胃，或是上野美味麵包店。", coords: "35.7068,139.7835" }],
            lunch: [{ name: "東京車站 / 成田機場美食", note: "東京車站一番街拉麵，或成田機場內最後的日式定食，吃飽飽再登機！", coords: "35.7722,140.3876" }],
            dinner: [{ name: "台灣溫暖的家", note: "平安返家，享用想念的台灣美味。", coords: "25.0792,121.2342" }]
        }
    }
};

export const checklistData = [
    { text: "護照正本 (效期 6 個月以上)", critical: true },
    { text: "Visit Japan Web 入境審查 QR Code", critical: true },
    { text: "旅遊平安險 & 海外突發疾病醫療險", critical: true },
    { text: "星宇航空電子登機證 (APP)", critical: true },
    { text: "哈利波特影城門票 (5/26 10:30)", critical: true },
    { text: "東京晴空塔 門票 (預約 5/28 11:30)", critical: true },
    { text: "Skyliner 機場快線來回票 (預購)", critical: false },
    { text: "水上巴士 淺草-台場 預約 (5/28 16:30)", critical: false },
    { text: "日本 ESIM / 實體網卡 (確認開通)", critical: true },
    { text: "Apple Wallet 綁定 Suica/Pasmo", critical: false },
    { text: "日幣現金 & 海外刷卡高回饋信用卡", critical: true },
    { text: "哈利波特學院袍/魔法棒 (重要裝備)", critical: false }
];
