document.addEventListener('DOMContentLoaded', function () {
    // 店家數據
    const storeData = {
        1: {
            name: "士林夜市小吃攤",
            description: "位於台北著名的士林夜市內，提供多種台灣傳統小吃，是體驗台灣夜市文化的絕佳去處。店主堅持使用新鮮食材，並以獨特的調味方式，讓每一道小吃都能帶給顧客最道地的台灣味。",
            location: "臺北市士林區大東路士林夜市內",
            hours: "週一至週日 16:00-24:00",
            phone: "02-2881-XXXX",
            rating: "4.5",
            specialties: "招牌大腸包小腸外皮酥脆，內餡多汁；炸雞排外酥內嫩，調味獨特；士林大香腸肉質紮實，風味十足。另有多款飲品可供選擇，是逛街購物後的解饞好選擇。",
        },
        2: {
            name: "饒河街臭豆腐",
            description: "創立於1987年的老字號臭豆腐專賣店，位於熱鬧的饒河街夜市內。店主堅持使用傳統工藝製作臭豆腐，發酵時間長達48小時，確保臭豆腐的風味獨特而不失本味。",
            location: "臺北市松山區饒河街夜市內",
            hours: "週二至週日 17:00-24:00 (週一公休)",
            phone: "02-2765-XXXX",
            rating: "4.7",
            specialties: "招牌臭豆腐外酥內軟，搭配自製泡菜和蒜蓉辣醬，風味絕佳。另有麻辣臭豆腐、臭豆腐湯等多種變化，滿足不同顧客的需求。",
        },
        3: {
            name: "基隆廟口天婦羅",
            description: "位於基隆著名的廟口夜市，店家憑藉三代相傳的獨家炸衣配方，製作出外酥內嫩的天婦羅。每日採購新鮮海產，確保食材的鮮度和品質。",
            location: "基隆市仁愛區愛四路廟口夜市內",
            hours: "週一至週日 11:00-22:00",
            phone: "02-2427-XXXX",
            rating: "4.6",
            specialties: "招牌綜合海鮮天婦羅使用當日捕獲的新鮮海產，包括蝦子、花枝、海鮮等，外酥內嫩，風味絕佳。另有素食天婦羅可供選擇。",
        },
        4: {
            name: "逢甲鹽酥雞",
            description: "創立於1995年的鹽酥雞專賣店，位於熱鬧的逢甲夜市內。店主堅持使用台灣本地雞肉，並以獨家調配的醬料醃製，炸製出香酥可口的鹽酥雞。",
            location: "台中市西屯區文華路逢甲夜市內",
            hours: "週一至週日 15:00-01:00",
            phone: "04-2451-XXXX",
            rating: "4.8",
            specialties: "招牌鹽酥雞外酥內嫩，風味獨特；特製薯條長度適中，外酥內軟；杏鮑菇鮮嫩多汁，是店內的人氣商品。另有多款蔬菜類炸物可供選擇。",
        },
        5: {
            name: "員林肉圓",
            description: "傳承三代的彰化肉圓老店，堅持手工製作，每天限量供應。使用特選豬肉和在地特產芋頭粉製作外皮，口感Q彈有勁，內餡鮮美多汁。",
            location: "彰化縣員林市中正路員林夜市內",
            hours: "週二至週日 10:00-19:30 (週一公休)",
            phone: "04-8341-XXXX",
            rating: "4.5",
            specialties: "招牌肉圓外皮Q彈，內餡使用精選豬肉，搭配特製醬料，風味絕佳。另有清蒸肉圓可供選擇，適合不喜歡油炸食品的顧客。",
        },
        6: {
            name: "埔里山豬肉香腸",
            description: "位於南投埔里的特色小吃，店家使用當地飼養的山豬肉，以傳統工藝製作香腸。肉質紮實有嚼勁，風味獨特，是埔里夜市的招牌美食之一。",
            location: "南投縣埔里鎮中山路埔里夜市內",
            hours: "週三至週一 16:00-23:00 (週二公休)",
            phone: "049-2982-XXXX",
            rating: "4.3",
            specialties: "招牌山豬肉香腸肉質紮實，風味獨特；糯米香腸搭配山豬肉，口感豐富；另有山豬肉乾、山豬肉鬆等多種加工製品可供選購。",
        },
        7: {
            name: "台南度小月擔仔麵",
            description: "創立於1895年的台南老字號麵店，至今已有百餘年歷史。店家堅持使用傳統工藝製作擔仔麵，湯頭熬煮時間長達12小時，鮮美甘甜，麵條彈牙有勁。",
            location: "台南市中西區國華街花園夜市旁",
            hours: "週一至週日 10:00-22:00",
            phone: "06-2231-XXXX",
            rating: "4.9",
            specialties: "招牌擔仔麵湯頭鮮甜，麵條彈牙；蝦仁乾拌麵鮮味十足；肉燥飯香氣撲鼻，是店內的人氣商品。另有多款小菜可供選擇。",
        },
        8: {
            name: "六合木瓜牛奶",
            description: "位於高雄六合夜市的人氣飲品店，店家使用台灣本地種植的木瓜和新鮮牛奶製作，清涼消暑，是夏季的最佳選擇。",
            location: "高雄市新興區六合二路六合夜市內",
            hours: "週一至週日 16:00-24:00",
            phone: "07-2418-XXXX",
            rating: "4.4",
            specialties: "招牌木瓜牛奶使用新鮮木瓜和濃郁牛奶製作，清涼爽口；香蕉牛奶口感綿密；芒果冰沙酸甜可口，是夏季的消暑聖品。",
        },
        9: {
            name: "墾丁大街鮮果冰沙",
            description: "位於恆春墾丁大街的特色飲品店，店家使用屏東在地種植的新鮮水果製作冰沙，口感綿密，風味天然，是遊玩墾丁後的解渴聖品。",
            location: "屏東縣恆春鎮墾丁路墾丁大街內",
            hours: "週一至週日 11:00-23:00",
            phone: "08-8861-XXXX",
            rating: "4.2",
            specialties: "招牌鳳梨冰沙酸甜可口；芒果冰沙使用玉文芒果製作，香甜濃郁；百香果冰沙清新酸甜，是夏季的消暑聖品。另有多款新鮮果汁可供選擇。",
        },
        10: {
            name: "宜蘭蔥油餅",
            description: "位於宜蘭東門夜市的特色小吃，店家使用宜蘭特產三星蔥製作，香氣撲鼻，外酥內嫩，是宜蘭必嚐的美食之一。",
            location: "宜蘭市東門路東門夜市內",
            hours: "週二至週日 15:00-22:30 (週一公休)",
            phone: "03-9321-XXXX",
            rating: "4.7",
            specialties: "招牌蔥油餅使用宜蘭三星蔥製作，外酥內嫩，香氣十足；蔥抓餅口感Q彈；蔥蛋餅內餡豐富，是店內的人氣商品。",
        },
        11: {
            name: "花蓮原住民風味烤肉",
            description: "位於花蓮東大門夜市的特色烤肉攤，店主是阿美族人，堅持使用傳統原住民的調味方式和烤製技術，製作出風味獨特的烤肉。",
            location: "花蓮市中山路東大門夜市內",
            hours: "週一至週日 17:00-24:00",
            phone: "03-8343-XXXX",
            rating: "4.6",
            specialties: "招牌山豬肉串肉質鮮嫩，風味獨特；原住民風味雞翅外皮酥脆，肉質多汁；野生石板魚鮮美可口，是店內的人氣商品。",
        },
        12: {
            name: "台東海鮮粥",
            description: "位於台東中央市場的海鮮粥專賣店，店家使用當日捕獲的新鮮海產製作，粥底熬煮時間長達6小時，鮮美甘甜，營養豐富。",
            location: "台東市中山路中央市場內",
            hours: "週二至週日 06:00-14:00 (週一公休)",
            phone: "089-322-XXXX",
            rating: "4.3",
            specialties: "招牌綜合海鮮粥使用多種新鮮海產製作，包括蝦子、花枝、貝類等，鮮味十足；魚片粥口感滑嫩；蟹黃粥濃郁香醇，是店內的人氣商品。",
        },
        13: {
            name: "澎湖仙人掌冰淇淋",
            description: "位於澎湖馬公市區的特色冰淇淋店，店家使用澎湖特產仙人掌製作冰淇淋，口感綿密，風味獨特，是澎湖必嚐的美食之一。",
            location: "澎湖縣馬公市中正路澎湖夜市內",
            hours: "週一至週日 11:00-21:30",
            phone: "06-9272-XXXX",
            rating: "4.5",
            specialties: "招牌仙人掌冰淇淋口感綿密，風味獨特；仙人掌果醬清新自然；仙人掌奶昔濃郁香甜，是店內的人氣商品。另有多款水果冰淇淋可供選擇。",
        },
        14: {
            name: "金門高粱牛肉乾",
            description: "位於金門金城鎮的特色伴手禮店，店家使用金門特產高粱酒醃製牛肉乾，肉質紮實有嚼勁，風味獨特，是金門必買的伴手禮之一。",
            location: "金門縣金城鎮民生路金門夜市內",
            hours: "週一至週日 09:00-21:00",
            phone: "082-321-XXXX",
            rating: "4.8",
            specialties: "招牌高粱牛肉乾肉質紮實，風味獨特；高粱豬肉乾香氣十足；高粱牛肉條口感有嚼勁，是店內的人氣商品。另有多款高粱酒糖果可供選購。",
        },
        15: {
            name: "綠島海鮮炒麵",
            description: "位於綠島鄉的特色海鮮店，店家使用當日捕獲的新鮮海產製作炒麵，麵條彈牙有勁，海鮮鮮美多汁，是綠島必嚐的美食之一。",
            location: "台東縣綠島鄉中寮村綠島夜市內",
            hours: "週三至週一 11:30-20:00 (週二公休)",
            phone: "089-672-XXXX",
            rating: "4.4",
            specialties: "招牌海鮮炒麵使用多種新鮮海產製作，包括蝦子、花枝、貝類等，鮮味十足；海鮮湯麵湯頭鮮美；炒海鮮份量十足，是店內的人氣商品。",
        }
    };

    // 側邊導航交互
    const sideNavLinks = document.querySelectorAll('.side-nav a');
    sideNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有active類
            sideNavLinks.forEach(l => l.classList.remove('active'));
            
            // 添加active類到當前點擊的連結
            this.classList.add('active');
            
            // 滾動到對應區域
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    // 處理店家卡片點擊事件
    const storeCards = document.querySelectorAll('.store-card');
    const modal = document.getElementById('storeModal');
    const modalClose = document.querySelector('.modal-close');
    
    storeCards.forEach(card => {
        card.addEventListener('click', function() {
            const storeId = this.getAttribute('data-id');
            const store = storeData[storeId];
            
            // 填充模態框內容
            document.getElementById('modalTitle').textContent = store.name;
            document.getElementById('modalDescription').textContent = store.description;
            document.getElementById('modalLocation').textContent = store.location;
            document.getElementById('modalHours').textContent = store.hours;
            document.getElementById('modalPhone').textContent = store.phone;
            document.getElementById('modalRating').textContent = `${store.rating}/5.0`;
            document.getElementById('modalSpecialties').textContent = store.specialties;
            
            // 顯示模態框
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // 防止背景滾動
        });
    });
    
    // 關閉模態框
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // 恢復背景滾動
    });
    
    // 點擊模態框外部關閉模態框
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // 回到頂部按鈕
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 監聽滾動事件，更新側邊導航active狀態
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        // 獲取所有區域
        const regions = document.querySelectorAll('.region');
        
        // 找出當前滾動位置對應的區域
        let currentRegion = null;
        regions.forEach(region => {
            if (region.offsetTop - 150 <= scrollPosition) {
                currentRegion = region.id;
            }
        });
        
        // 更新側邊導航的active狀態
        if (currentRegion) {
            sideNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentRegion}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});