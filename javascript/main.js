console.log('main.js loaded');
// 台灣夜市完整資料
const marketData = {
    // 基隆市
    '基隆廟口夜市': {
        title: '基隆廟口夜市',
        openTime: '下午2點至凌晨1點',
        location: '基隆市仁三路27號周邊',
        transport: {
            train: '基隆火車站步行約8分鐘',
            bus: '基隆客運：基隆火車站或廟口站下車'
        },
        intro: '基隆廟口夜市是基隆市最著名的觀光夜市，以海鮮小吃聞名。位於市中心的奠濟宮前，已有百年以上歷史，是台灣最具特色的夜市之一。',
        features: [
            '在地特色海鮮小吃',
            '百年歷史夜市',
            '廟宇文化特色',
            '交通便利位於市中心'
        ],
        mustTry: [
            {
                name: '天婦羅',
                shop: '老店天婦羅',
                price: '50元起',
                desc: '新鮮海鮮裹粉酥炸'
            },
            {
                name: '鼎邊趖',
                shop: '廟口鼎邊趖',
                price: '45元',
                desc: '特色海鮮湯麵'
            },
            {
                name: '營養三明治',
                shop: '老牌三明治',
                price: '40元',
                desc: '基隆特色早餐'
            }
        ]
    },

    // 台北市
    '士林夜市': {
        title: '士林夜市',
        openTime: '下午4點至凌晨1點',
        location: '台北市士林區大東路、大南路、基河路周邊',
        transport: {
            mrt: '捷運淡水線劍潭站1號出口',
            bus: '紅30、225、255、618、620等公車'
        },
        intro: '士林夜市是台北市規模最大的夜市，也是國際旅客必訪景點之一。以各式小吃、流行服飾、精品、小玩意與娛樂游戲聞名。',
        features: [
            '台北最大規模夜市',
            '美食與購物兼具',
            '知名觀光景點',
            '交通便利'
        ],
        mustTry: [
            {
                name: '大餅包小餅',
                shop: '士林大餅包小餅',
                price: '65元',
                desc: '外皮酥脆內餡多汁'
            },
            {
                name: '炸雞排',
                shop: '豪大大雞排',
                price: '80元',
                desc: '酥脆多汁超人氣'
            }
        ]
    },

    '寧夏夜市': {
        title: '寧夏夜市',
        openTime: '下午5點至凌晨12點',
        location: '台北市大同區寧夏路',
        transport: {
            mrt: '捷運中山站或雙連站步行約10分鐘',
            bus: '49、246、288、669等公車'
        },
        intro: '寧夏夜市以傳統台灣小吃聞名，是台北市最具代表性的美食夜市之一。夜市規模精簡但品質精良，獲得米其林必比登推薦。',
        features: [
            '米其林推薦夜市',
            '傳統台灣小吃',
            '在地人推薦',
            '環境整潔舒適'
        ],
        mustTry: [
            {
                name: '胡椒餅',
                shop: '豪季胡椒餅',
                price: '50元',
                desc: '外皮酥脆內餡香濃'
            },
            {
                name: '麻油雞',
                shop: '老字號麻油雞',
                price: '120元',
                desc: '溫補養身好味道'
            }
        ]
    },

    '饒河街觀光夜市': {
        title: '饒河街觀光夜市',
        openTime: '下午4點至凌晨12點',
        location: '台北市松山區饒河街',
        transport: {
            mrt: '捷運松山站5號出口',
            bus: '204、254、309、505至饒河街口站'
        },
        intro: '饒河街觀光夜市是台北市第一條觀光夜市，長約600公尺，約有539個攤位。以傳統小吃、服飾、精品、小玩意與娛樂遊戲聞名。',
        features: [
            '台北首條觀光夜市',
            '攤位種類多元',
            '交通便利',
            '環境整潔舒適'
        ],
        mustTry: [
            {
                name: '胡椒餅',
                shop: '蔡家胡椒餅',
                price: '35元',
                desc: '外皮酥脆、內餡多汁'
            },
            {
                name: '藥燉排骨',
                shop: '老店藥燉排骨',
                price: '120元',
                desc: '湯頭濃郁、肉質鮮嫩'
            }
        ]
    },

    '臨江街觀光夜市': {
        title: '臨江街觀光夜市',
        openTime: '下午4點至凌晨12點',
        location: '台北市大安區臨江街',
        transport: {
            mrt: '捷運信義安和站4號出口',
            bus: '0東、22、226、288、611、668'
        },
        intro: '通稱通化夜市，是台北市知名的觀光夜市之一。以海鮮、傳統小吃聞名，也有許多創新美食。',
        features: [
            '在地美食薈萃',
            '創新料理多元',
            '生鮮海產豐富',
            '���完善'
        ],
        mustTry: [
            {
                name: '生猛海鮮',
                shop: '老字號海鮮',
                price: '時價',
                desc: '新鮮直送、現點現煮'
            },
            {
                name: '麻辣臭豆腐',
                shop: '老王麻辣臭豆腐',
                price: '60元',
                desc: '外酥內嫩、香辣夠味'
            }
        ]
    },

    '華西街夜市': {
        title: '華西街夜市',
        openTime: '下午4點至凌晨12點',
        location: '台北市萬華區華西街',
        transport: {
            mrt: '捷運龍山寺站1號出口',
            bus: '49、231、234、310、658、藍29'
        },
        intro: '又稱蛇街，是台北市最老的夜市之一，以特色蛇料理聞名於世，也有許多傳統台灣小吃。',
        features: [
            '百年歷史夜市',
            '特色蛇料理',
            '傳統台菜餐廳',
            '在地老字號小吃'
        ],
        mustTry: [
            {
                name: '蛇料理',
                shop: '華西街蛇店',
                price: '300元起',
                desc: '特色養生料理'
            },
            {
                name: '魷魚羹',
                shop: '老字號魷魚羹',
                price: '70元',
                desc: '湯頭鮮美、料多實在'
            }
        ]
    },

    // 新北市
    '樂華夜市': {
        title: '樂華夜市',
        openTime: '下午4點至凌晨12點',
        location: '新北市永和區永平路與保平路口',
        transport: {
            bus: '262、624、670、橘2、綠2',
            other: '捷運頂溪站步行約15分鐘'
        },
        intro: '新北市永和區最具規模的夜市，以平價美食聞名，是在地居民最愛的美食天堂。',
        features: [
            '在地人氣夜市',
            '平價美食眾多',
            '小吃種類豐富',
            '生活機能便利'
        ],
        mustTry: [
            {
                name: '炸雞翅',
                shop: '老王炸雞',
                price: '40元/支',
                desc: '外酥內嫩、調味獨特'
            },
            {
                name: '臭豆腐',
                shop: '樂華臭豆腐',
                price: '50元',
                desc: '外酥內軟、醬料特製'
            }
        ]
    },

    '五股廟前夜市': {
        title: '五股廟前夜市',
        openTime: '下午4點至凌晨12點',
        location: '新北市五股區成泰路',
        transport: {
            bus: '637、638、858、F627、F628',
            other: '開車建議停五股區公所停車場'
        },
        intro: '五股廟前夜市位於五股區成泰路上，以在地小吃及平價服飾聞名，是在地居民喜愛的傳統夜市。',
        features: [
            '在地傳統夜市',
            '平價美食眾多',
            '生活購物便利',
            '廟口文化特色'
        ],
        mustTry: [
            {
                name: '蚵仔煎',
                shop: '老牌蚵仔煎',
                price: '60元',
                desc: '蛋香濃郁、蚵仔新鮮'
            },
            {
                name: '潤餅',
                shop: '廟前潤餅',
                price: '45元',
                desc: '料多實在、醬料特製'
            }
        ]
    },

    '興南夜市': {
        title: '興南夜市',
        openTime: '下午5點至凌晨12點',
        location: '新北市中和區興南路',
        transport: {
            mrt: '捷運景安站步行約10分鐘',
            bus: '57、214、227、262、706、橘2'
        },
        intro: '興南夜市是中和區最具規模的夜市之一，以平價美食及小吃聞名，深受在地居民喜愛。',
        features: [
            '在地美食薈萃',
            '價格親民實惠',
            '交通便利',
            '生活機能完善'
        ],
        mustTry: [
            {
                name: '大腸麵線',
                shop: '老店大腸麵線',
                price: '35元',
                desc: '湯頭香醇、大腸入味'
            },
            {
                name: '炸雞排',
                shop: '興南雞排王',
                price: '70元',
                desc: '外酥內嫩、調味獨特'
            }
        ]
    },

    // 桃園市
    '中壢觀光夜市': {
        title: '中壢觀光夜市',
        openTime: '下午4點至凌晨1點',
        location: '桃園市中壢區新明路',
        transport: {
            train: '中壢火車站步行約15分鐘',
            bus: '112、115、170、5008、5035'
        },
        intro: '中壢觀光夜市位於中壢火車站附近，是桃園市最具規模的夜市之一，以多元美食及學生平價商品聞名。',
        features: [
            '學生平價美食',
            '交通便利',
            '商品種類多元',
            '鄰近商圈熱鬧'
        ],
        mustTry: [
            {
                name: '蔥油餅',
                shop: '老王蔥油餅',
                price: '40元',
                desc: '外酥內軟、蔥香四溢'
            },
            {
                name: '滷味',
                shop: '中壢老店滷味',
                price: '30元起',
                desc: '湯汁入味、選擇多樣'
            }
        ]
    },

    '桃園觀光夜市': {
        title: '桃園觀光夜市',
        openTime: '下午4點至凌晨12點',
        location: '桃園市桃園區中正路',
        transport: {
            train: '桃園火車站步行約10分鐘',
            bus: '11、112、115、116、132、133'
        },
        intro: '桃園觀光夜市位於桃園市區中心，是當地最具代表性的夜市，結合美食、購物與娛樂等多元功能。',
        features: [
            '在地特色小吃',
            '交通便利',
            '購物娛樂多元',
            '環境整潔舒適'
        ],
        mustTry: [
            {
                name: '藥燉排骨',
                shop: '老字號藥燉排骨',
                price: '130元',
                desc: '湯頭濃郁、肉質鮮嫩'
            },
            {
                name: '蚵仔煎',
                shop: '阿明蚵仔煎',
                price: '60元',
                desc: '蛋香十足、蚵仔新鮮'
            }
        ]
    },

    // 新竹市
    '城隍廟夜市': {
        title: '城隍廟夜市',
        openTime: '下午2點至晚上12點',
        location: '新竹市北區中山路',
        transport: {
            train: '新竹火車站步行約10分鐘',
            bus: '1、2、3、11、15、17路公車'
        },
        intro: '新竹城隍廟夜市是新竹最具代表性的夜市，以廟口小吃聞名，擁有超過百年歷史，是新竹市最重要的觀光景點之一。',
        features: [
            '百年歷史夜市',
            '傳統美食薈萃',
            '廟宇文化特色',
            '在地人氣小吃'
        ],
        mustTry: [
            {
                name: '貢丸湯',
                shop: '老店貢丸',
                price: '40元',
                desc: '新竹名產、Q彈有勁'
            },
            {
                name: '米粉',
                shop: '廟口米粉',
                price: '50元',
                desc: '新竹特產、乾炒香氣'
            }
        ]
    },

    // 中部地區-台中市
    '逢甲夜市': {
        title: '逢甲夜市',
        openTime: '下午2點至凌晨2點',
        location: '台中市西屯區文華路',
        transport: {
            bus: '25、28、35、69路公車',
            other: '可搭乘台中捷運綠線至逢甲'
        },
        intro: '逢甲夜市是台中市最著名的觀光夜市，位於逢甲大學附近，以創新小吃及平價服飾聞名，是台灣規模最大的夜市之一。',
        features: [
            '台中最大夜市',
            '創新美食多元',
            '學生平價商圈',
            '國際觀光勝地'
        ],
        mustTry: [
            {
                name: '大腸包小腸',
                shop: '逢甲名店',
                price: '45元',
                desc: '招牌美食、香氣四溢'
            },
            {
                name: '黃金炸雞排',
                shop: '老王炸雞',
                price: '70元',
                desc: '外酥內嫩、超大份量'
            }
        ]
    },

    '一中商圈': {
        title: '一中商圈',
        openTime: '下午2點至凌晨12點',
        location: '台中市北區一中街',
        transport: {
            bus: '8、14、27、30、59路公車',
            other: '可搭乘台中捷運綠線至台中高工站'
        },
        intro: '一中街商圈位於台中第一名校台中一中附近，是年輕人最愛的美食天堂，以平價美食、創新小吃及流行服飾聞名。',
        features: [
            '學生平價美食',
            '創新小吃雲集',
            '行飾商圈',
            '年輕人最愛'
        ],
        mustTry: [
            {
                name: '大判燒',
                shop: '一中大判燒',
                price: '35元',
                desc: '多種口味、現烤香甜'
            },
            {
                name: '酥嫩雞排',
                shop: '人氣雞排店',
                price: '65元',
                desc: '特製醬料、外酥內嫩'
            }
        ]
    },

    '東海夜市': {
        title: '東海夜市',
        openTime: '下午4點至凌晨12點',
        location: '台中市龍井區新興路',
        transport: {
            bus: '50、168、169路公車',
            other: '鄰近東海大學'
        },
        intro: '東海夜市位於東海大學附近，是台中知名的文青夜市，以異國料理及創意小吃聞名，深受學生族群喜愛。',
        features: [
            '文青風格夜市',
            '異國美食雲集',
            '創意料理多元',
            '學生消費族群'
        ],
        mustTry: [
            {
                name: '泰式炒粿條',
                shop: '泰味小館',
                price: '80元',
                desc: '道地泰式風味'
            },
            {
                name: '墨西哥捲餅',
                shop: '異國美食',
                price: '90元',
                desc: '特製醬料、料多實在'
            }
        ]
    },

    // 彰化縣
    '彰化市觀光夜市': {
        title: '彰化市觀光夜市',
        openTime: '下午5點至凌晨12點',
        location: '彰化市中山路二段',
        transport: {
            train: '彰化火車站步行約10分鐘',
            bus: '彰化客運：彰化站或中山路口站下車'
        },
        intro: '彰化市觀光夜市位於彰化市區中心，是當地最具規模的夜市，以在地特色小吃及平價商品聞名。',
        features: [
            '在地特色小吃',
            '平價商品眾多',
            '交通便利',
            '生活機能完善'
        ],
        mustTry: [
            {
                name: '肉圓',
                shop: '老店肉圓',
                price: '35元',
                desc: '彰化名產、特製醬料'
            },
            {
                name: '扁食',
                shop: '阿婆扁食',
                price: '40元',
                desc: '皮薄餡多、湯頭清甜'
            }
        ]
    },

    // 南投縣
    '南投觀光夜市': {
        title: '南投觀光夜市',
        openTime: '下午5點至凌晨11點',
        location: '南投市和三路',
        transport: {
            bus: '南投客運：南投站下車',
            other: '建議開車前往，備有停車場'
        },
        intro: '南投觀光夜市是南投市區重要的夜市之一，提供在地特色美食及日常用品，深受當地居民喜愛。',
        features: [
            '在地美食薈萃',
            '價格實惠',
            '停車方便',
            '生活採購便利'
        ],
        mustTry: [
            {
                name: '南投意麵',
                shop: '老字號意麵',
                price: '45元',
                desc: '特製醬料、口感獨特'
            },
            {
                name: '竹筍湯',
                shop: '阿明竹筍湯',
                price: '50元',
                desc: '在地食材、清甜可口'
            }
        ]
    },

    // 台南市
    '花園夜市': {
        title: '花園夜市',
        openTime: '週四至日 下午5點至凌晨1點',
        location: '台南市北區海安路三段與和緯路口',
        transport: {
            train: '台南火車站轉乘公車',
            bus: '0右、5、18路公車'
        },
        intro: '花園夜市是台南最大的觀光夜市，擁有超過400個攤位，提供多樣化的美食、遊戲商品。',
        features: [
            '台南最大夜市',
            '美食種類豐富',
            '娛樂設施多元',
            '週末熱鬧滾滾'
        ],
        mustTry: [
            {
                name: '棺材板',
                shop: '花園棺材板',
                price: '60元',
                desc: '特色料理、內餡豐富'
            },
            {
                name: '鹽酥雞',
                shop: '老王鹽酥雞',
                price: '65元起',
                desc: '外酥內嫩、調味獨特'
            }
        ]
    },

    '武聖夜市': {
        title: '武聖夜市',
        openTime: '下午5點至凌晨12點',
        location: '台南市中西區武聖路',
        transport: {
            bus: '2、5、19路公車',
            other: '近台南火車站'
        },
        intro: '武聖夜市是台南在地人最愛的夜市之一，以平價美食和在地小吃聞名，充滿濃厚的台南風情。',
        features: [
            '在地人氣夜市',
            '傳統小吃薈萃',
            '價格親民',
            '交通便利'
        ],
        mustTry: [
            {
                name: '擔仔麵',
                shop: '老店擔仔麵',
                price: '50元',
                desc: '傳統風味、湯頭香醇'
            },
            {
                name: '碗粿',
                shop: '阿嬤碗粿',
                price: '35元',
                desc: '古早味、料多實在'
            }
        ]
    },

    // 高雄市
    '六合夜市': {
        title: '六合夜市',
        openTime: '下午5點至凌晨1點',
        location: '高雄市新興區六合二路',
        transport: {
            mrt: '捷運美麗島站1號出口',
            bus: '0南、0北、25、33、60、76、77路'
        },
        intro: '六合夜市是高雄最著名的觀光夜市，以海鮮、在地小吃聞名，也是國際旅客必訪景點。',
        features: [
            '高雄代表性夜市',
            '國際觀光勝地',
            '海鮮美食薈萃',
            '交通便利'
        ],
        mustTry: [
            {
                name: '木瓜牛奶',
                shop: '老牌木瓜牛奶',
                price: '70元',
                desc: '新鮮現打、濃郁香甜'
            },
            {
                name: '海鮮粥',
                shop: '六合海鮮粥',
                price: '80元',
                desc: '料多實在、海味十足'
            }
        ]
    },

    // 繼續高雄市的夜市
    '瑞豐夜市': {
        title: '瑞豐夜市',
        openTime: '週二、四、五、六、日 下午6點至凌晨1點',
        location: '高雄市左營區裕誠路',
        transport: {
            mrt: '捷運巨蛋站1號出口',
            bus: '3、紅35、168、219、301'
        },
        intro: '瑞豐夜市是高雄最大的觀光夜市，擁有1000多個攤位，提供多樣化的美食、服飾和娛樂設施。',
        features: [
            '高雄最大夜市',
            '攤位種類豐富',
            '美食選擇多元',
            '交通便利'
        ],
        mustTry: [
            {
                name: '蚵仔煎',
                shop: '老字號蚵仔煎',
                price: '60元',
                desc: '蛋香濃郁、蚵仔新鮮'
            },
            {
                name: '臭豆腐',
                shop: '瑞豐臭豆腐',
                price: '50元',
                desc: '外酥內嫩、醬料特製'
            }
        ]
    },

    '凱旋夜市': {
        title: '凱旋夜市',
        openTime: '每日下午5點至凌晨1點',
        location: '高雄市前鎮區凱旋四路',
        transport: {
            mrt: '捷運凱旋站步行約10分鐘',
            bus: '0南、168、205、紅35'
        },
        intro: '凱旋夜市是���雄新興的大型夜市，以創新美食和娛樂設施聞名，擁有現代化的購物環境。',
        features: [
            '現代化夜市',
            '創新美食多元',
            '娛樂設施完善',
            '環境寬敞舒適'
        ],
        mustTry: [
            {
                name: '海鮮炒麵',
                shop: '阿興海鮮炒麵',
                price: '80元',
                desc: '海味十足、份量實在'
            },
            {
                name: '烤肉串',
                shop: '老王烤肉',
                price: '10元/串起',
                desc: '現烤現賣、調味獨特'
            }
        ]
    },

    // 東部地區-花蓮縣
    '東大門夜市': {
        title: '東大門夜市',
        openTime: '每日下午6點至凌晨12點',
        location: '花蓮市中山路與重慶路口',
        transport: {
            train: '花蓮火車站步行約15分鐘',
            bus: '花蓮市區公車1路、5路'
        },
        intro: '東大門夜市是花蓮最大的觀光夜市，結合原住民特色美食與在地小吃，提供獨特的東部風味。',
        features: [
            '花蓮最大夜市',
            '原住民美食特色',
            '在地小吃薈萃',
            '觀光客必訪'
        ],
        mustTry: [
            {
                name: '原住民烤肉',
                shop: '山地美食',
                price: '100元起',
                desc: '特色醃製、炭烤香氣'
            },
            {
                name: '蔥油餅',
                shop: '東大門蔥油餅',
                price: '45元',
                desc: '外酥內軟、蔥香四溢'
            }
        ]
    },

    // 台東縣
    '臺東觀光夜市': {
        title: '臺東觀光夜市',
        openTime: '週四、五、六 下午5點至凌晨12點',
        location: '台東市中華路與正氣路口',
        transport: {
            train: '台東火車站步行約10分鐘',
            bus: '台東市區公車'
        },
        intro: '台東觀光夜市以在地特色小吃和原住民美食聞名，提供純樸的東台灣風味。',
        features: [
            '在地特色小吃',
            '原住民美食',
            '價格實惠',
            '純樸風味'
        ],
        mustTry: [
            {
                name: '阿美族風味飯',
                shop: '原住民美食',
                price: '80元',
                desc: '特色醃製、風味獨特'
            },
            {
                name: '炸蝦捲',
                shop: '老店炸蝦捲',
                price: '60元',
                desc: '酥脆可口、蝦味十足'
            }
        ]
    },

    // 離島地區-澎湖縣
    '馬公觀光夜市': {
        title: '馬公觀光夜市',
        openTime: '下午6點至凌晨12點',
        location: '澎湖縣馬公市中正路',
        transport: {
            plane: '澎湖機場搭乘計程車約10分鐘',
            bus: '澎湖公車：馬公總站下車'
        },
        intro: '馬公觀光夜市是澎湖最具代表性的夜市，以新鮮海產、在地小吃聞名，提供獨特的離島風味美食。',
        features: [
            '離島特色夜市',
            '新鮮海產美食',
            '在地小吃薈萃',
            '觀光客必訪'
        ],
        mustTry: [
            {
                name: '仙人掌冰',
                shop: '馬公仙人掌冰',
                price: '50元',
                desc: '在地特產、清涼消暑'
            },
            {
                name: '海鮮炒麵',
                shop: '阿嬤海鮮炒麵',
                price: '90元',
                desc: '新鮮海產、在地風味'
            }
        ]
    },

    // 金門縣
    '金門觀光夜市': {
        title: '金門觀光夜市',
        openTime: '下午5點至凌晨11點',
        location: '金門縣金城�����生路',
        transport: {
            plane: '金門機場搭乘計程車約15分鐘',
            bus: '金門公車：金城總站下車'
        },
        intro: '金門觀光夜市結合在地特色美食與傳統小吃，提供獨特的金門風味，是體驗金門美食文化的好去處。',
        features: [
            '金門特色小吃',
            '傳統美食薈萃',
            '在地風味獨特',
            '觀光客推薦'
        ],
        mustTry: [
            {
                name: '貢糖',
                shop: '老字號貢糖',
                price: '100元/包',
                desc: '金門特產、香甜可口'
            },
            {
                name: '高粱牛肉麵',
                shop: '金門牛肉麵',
                price: '120元',
                desc: '特製高粱湯頭、肉質鮮美'
            }
        ]
    },

    // 在 marketData 中添加新的夜市資料
    '南機場夜市': {
        title: '南機場夜市',
        openTime: '下午4點至凌晨12點',
        location: '台北市中華路二段307巷',
        transport: {
            mrt: '捷運龍山寺站2號出口步行約10分鐘',
            bus: '12、20、49、246、250、253、656、657'
        },
        intro: '南機場夜市以平價美食聞名，是在地��最愛的美食天堂。特別以米粉湯、排骨酥、四神湯等傳統小吃最受歡迎。',
        features: [
            '在地人氣夜市',
            '傳統小吃薈萃',
            '價格實惠',
            '古早味美食'
        ],
        mustTry: [
            {
                name: '米粉湯',
                shop: '老字號米粉湯',
                price: '45元',
                desc: '料多實在、湯頭鮮美'
            },
            {
                name: '排骨酥',
                shop: '老店排骨酥',
                price: '60元',
                desc: '外酥內嫩、肉質鮮美'
            }
        ]
    },

    '景美夜市': {
        title: '景美夜市',
        openTime: '下午4點至凌晨12點',
        location: '台北市文山區景美街',
        transport: {
            mrt: '捷運景美站1號出口',
            bus: '251、252、253、660、666、671、673'
        },
        intro: '景美夜市位於景美捷運站附近，是文山區最具規模的夜市，以學生平價美食和在地小吃聞名。',
        features: [
            '學生平價美食',
            '交通便利',
            '在地特色小吃',
            '生活機能佳'
        ],
        mustTry: [
            {
                name: '炸雞排',
                shop: '景美雞排王',
                price: '70元',
                desc: '外酥內嫩、調味獨特'
            },
            {
                name: '臭豆腐',
                shop: '老王臭豆腐',
                price: '45元',
                desc: '外酥內軟、醬料特製'
            }
        ]
    },

    '大龍街夜市': {
        title: '大龍街夜市',
        openTime: '下午4點至凌晨12點',
        location: '台北市大同區大龍街',
        transport: {
            mrt: '捷運圓山站1號出口步行約10分鐘',
            bus: '2、9、215、223、250、302'
        },
        intro: '大龍街夜市是在地型傳統夜市，以平價美食和傳統小吃聞名，深受附近居民喜愛。',
        features: [
            '在地傳統夜市',
            '平價美食',
            '傳統小吃',
            '在地人推薦'
        ],
        mustTry: [
            {
                name: '大腸麵線',
                shop: '老店大腸麵線',
                price: '40元',
                desc: '湯頭濃郁、大腸入味'
            },
            {
                name: '蚵仔煎',
                shop: '阿明蚵仔煎',
                price: '60元',
                desc: '蛋香濃郁、蚵仔新鮮'
            }
        ]
    },

    // 新����市補充
    '三重文化夜市': {
        title: '三重文化夜市',
        openTime: '下午4點至凌晨12點',
        location: '新北市三重區文化北路',
        transport: {
            mrt: '捷運三重國小站2號出口',
            bus: '13、41、221、225、227、306、307'
        },
        intro: '三重文化夜市是三重區最具規模的夜市之一，以平價美食和多元小吃聞名，是在地居民休閒娛樂的好去處。',
        features: [
            '在地美食薈萃',
            '價格實惠',
            '交通便利',
            '商品種類多'
        ],
        mustTry: [
            {
                name: '蔥抓餅',
                shop: '老王蔥抓餅',
                price: '40元',
                desc: '外酥內軟、蔥香四溢'
            },
            {
                name: '滷味',
                shop: '文化滷味',
                price: '30元起',
                desc: '入味夠勁、選擇多樣'
            }
        ]
    },

    '金山老街夜市': {
        title: '金山老街夜市',
        openTime: '下午3點至晚上9點',
        location: '新北市金山區中正路',
        transport: {
            bus: '1815、862、863',
            other: '建議開車前往，備有停車場'
        },
        intro: '金山老街夜市結合傳統市集與觀光夜市特色，以海鮮、溫泉美食及在地特產聞名。',
        features: [
            '海鮮美食',
            '溫泉特色',
            '在地特產',
            '傳統市集風情'
        ],
        mustTry: [
            {
                name: '海鮮粥',
                shop: '老店海鮮粥',
                price: '80元',
                desc: '新鮮海味、料多實在'
            },
            {
                name: '溫泉蛋',
                shop: '金山溫泉蛋',
                price: '30元',
                desc: '溫泉特製、口感獨特'
            }
        ]
    },

    // 桃園市
    '大溪老街夜市': {
        title: '大溪老街夜市',
        openTime: '下午2點至晚上8點',
        location: '桃園市大溪區和平路',
        transport: {
            bus: '5090、5091、5098',
            other: '建議開車前往，附近有停車場'
        },
        intro: '大溪老街夜市結合歷史街區特色，以傳統小吃及在地特產聞名，古色古香的街道氛圍，是體驗台灣早期街道風情的好去處。',
        features: [
            '歷史街區特色',
            '傳統小吃薈萃',
            '在地特產',
            '古蹟文化氛圍'
        ],
        mustTry: [
            {
                name: '豆干',
                shop: '大溪老店豆干',
                price: '50元起',
                desc: '在地特產、口感獨特'
            },
            {
                name: '草仔粿',
                shop: '老字號草仔粿',
                price: '30元',
                desc: '傳統風味、香甜可口'
            }
        ]
    },

    // 台中市
    '忠孝路夜市': {
        title: '忠孝路夜市',
        openTime: '下午4點至凌晨12點',
        location: '台中市東區忠孝路',
        transport: {
            bus: '33、35、41、73、271',
            other: '鄰近台中火車站'
        },
        intro: '忠孝路夜市是台中市區老字號夜市，以平價美食和在地小吃聞名，深受在地居民喜愛。',
        features: [
            '在地老字號夜市',
            '平價美食',
            '傳統小吃',
            '交通便利'
        ],
        mustTry: [
            {
                name: '肉圓',
                shop: '老店肉圓',
                price: '35元',
                desc: '外皮Q彈、內餡香濃'
            },
            {
                name: '排骨酥麵',
                shop: '忠孝排骨酥麵',
                price: '65元',
                desc: '湯頭濃郁、排骨酥香'
            }
        ]
    },

    '旱溪夜市': {
        title: '旱溪夜市',
        openTime: '下午4點至凌晨12點',
        location: '台中市東區旱溪街',
        transport: {
            bus: '20、27、33、35、41、45',
            other: '近台中火車站'
        },
        intro: '旱溪夜市是台中東區重要的夜市之一，以在地特色小吃和平價商品聞名，是在地居民休閒購物的好去處。',
        features: [
            '在地美食薈萃',
            '平價商品',
            '生活機能佳',
            '交通便利'
        ],
        mustTry: [
            {
                name: '麻辣燙',
                shop: '老王麻辣燙',
                price: '50元起',
                desc: '湯頭香辣、料多實在'
            },
            {
                name: '蚵仔煎',
                shop: '阿明蚵仔煎',
                price: '60元',
                desc: '蛋香濃郁、蚵仔新鮮'
            }
        ]
    },

    // 彰化縣
    '員林觀光夜市': {
        title: '員林觀光夜市',
        openTime: '下午5點至凌晨12點',
        location: '彰化縣員林市民生路',
        transport: {
            train: '員林火車站步行約10分鐘',
            bus: '員林客運：員���站下車'
        },
        intro: '員林觀光夜市是員林地區最具規模的夜市，提供多樣化的美食和商品，是當地重要的休閒娛樂場所。',
        features: [
            '地方特色小吃',
            '平價商品',
            '交通便利',
            '生活機能完善'
        ],
        mustTry: [
            {
                name: '肉圓',
                shop: '員林老店肉圓',
                price: '35元',
                desc: '在地特色、醬料獨特'
            },
            {
                name: '蛋餅',
                shop: '阿婆蛋餅',
                price: '30元',
                desc: '外酥內軟、料多實在'
            }
        ]
    },

    // 南投縣
    '埔里第三市場夜市': {
        title: '埔里第三市場夜市',
        openTime: '下午4點至晚上11點',
        location: '南投縣埔里鎮中山路',
        transport: {
            bus: '南投客運：埔里站下車',
            other: '建議開車前往，附近有停車場'
        },
        intro: '埔里第三市場夜市結合傳統市場特色，以在地小吃和農特產品聞名，提供純樸的山城美食體驗。',
        features: [
            '傳統市場特色',
            '在地農特產品',
            '山城美食',
            '價格實惠'
        ],
        mustTry: [
            {
                name: '竹筍湯',
                shop: '老店竹筍湯',
                price: '50元',
                desc: '在地食材、清甜可口'
            },
            {
                name: '山豬肉',
                shop: '山產店',
                price: '100元起',
                desc: '特色山產、風味獨特'
            }
        ]
    },

    // 嘉義市
    '文化路夜市': {
        title: '文化路夜市',
        openTime: '下午5點至凌晨12點',
        location: '嘉義市東區文化路',
        transport: {
            train: '嘉義火車站步行約15分鐘',
            bus: '嘉義市公車：文化路口站'
        },
        intro: '文化路夜市是嘉義市最具代表性的觀光夜市，以雞肉飯、火雞肉飯等在地特色小吃聞名，也有許多創新美食。',
        features: [
            '嘉義最大夜市',
            '在地特色小吃',
            '平價美食',
            '交通便利'
        ],
        mustTry: [
            {
                name: '火雞肉飯',
                shop: '老字號火雞肉飯',
                price: '45元',
                desc: '肉質鮮嫩、醬汁香濃'
            },
            {
                name: '豆花',
                shop: '古早味豆花',
                price: '35元',
                desc: '滑嫩香甜、配料豐富'
            }
        ]
    },

    '東市場': {
        title: '東市場',
        openTime: '早上6點至晚上8點',
        location: '嘉義市東區中山路',
        transport: {
            train: '嘉義火車站步行約10分鐘',
            bus: '嘉義市公車：東市場站'
        },
        intro: '東市場是嘉義市歷史悠久的傳統市場，白天是生鮮市場，傍晚轉變為美食夜市，提供在地特色小吃。',
        features: [
            '傳統市場特色',
            '在地美食薈萃',
            '價格實惠',
            '歷史悠久'
        ],
        mustTry: [
            {
                name: '雞肉飯',
                shop: '老店雞肉飯',
                price: '40元',
                desc: '嘉義名產、香醇可口'
            },
            {
                name: '蚵仔煎',
                shop: '東市場蚵仔煎',
                price: '60元',
                desc: '新鮮海味、外酥內軟'
            }
        ]
    },

    // 台南市
    '大東夜市': {
        title: '大東夜市',
        openTime: '下午5點至凌晨12點',
        location: '台南市東區林森路一段',
        transport: {
            bus: '2、5、6、21路公車',
            other: '近台南火車站'
        },
        intro: '大東夜市是台南東區重要的夜市之一，以平價美食和在地小吃聞名，深受學生和在地居民喜愛。',
        features: [
            '在地美食薈萃',
            '學生平價美食',
            '交通便利',
            '生活機能佳'
        ],
        mustTry: [
            {
                name: '鹽酥雞',
                shop: '老王鹽酥雞',
                price: '60元起',
                desc: '外酥內嫩、調味獨特'
            },
            {
                name: '潤餅',
                shop: '大東潤餅',
                price: '45元',
                desc: '料多實在、口感豐富'
            }
        ]
    },

    '海安路夜市': {
        title: '海安路夜市',
        openTime: '下午5點至凌晨12點',
        location: '台南市中西區海安路',
        transport: {
            bus: '2、5、15路公車',
            other: '近台南火車站'
        },
        intro: '海安路夜市結合文創與美食特色，在古老街區中展現新風貌，是台南新興的特色夜市。',
        features: [
            '文創特色夜市',
            '古蹟街區風情',
            '創新美食',
            '藝術氛圍'
        ],
        mustTry: [
            {
                name: '創意炒飯',
                shop: '海安創意炒飯',
                price: '80元',
                desc: '創新口味、食材新鮮'
            },
            {
                name: '手作甜點',
                shop: '文創甜點店',
                price: '60元起',
                desc: '精緻美味、造型特別'
            }
        ]
    },

    // 高雄市
    '大魯閣草衙道': {
        title: '大魯閣草衙道',
        openTime: '週一至週日 11:00-22:00',
        location: '高雄市前鎮區中安路1號',
        transport: {
            mrt: '捷運草衙站1號出口直通',
            bus: '紅3、紅3C、33、高雄客運8023'
        },
        intro: '大魯閣草衙道是結合購物中心與美食廣場的現代化商場，提供多元化的購物、餐飲和娛樂體驗。',
        features: [
            '現代化商場',
            '美食廣場',
            '購物娛樂',
            '交通便利'
        ],
        mustTry: [
            {
                name: '日式拉麵',
                shop: '山小屋拉麵',
                price: '180元起',
                desc: '湯頭濃郁、麵條Q彈'
            },
            {
                name: '韓式炸雞',
                shop: '韓式炸雞專賣',
                price: '230元起',
                desc: '外酥內嫩、醬料特製'
            }
        ]
    },

    // 高雄市
    '金鑽夜市': {
        title: '金鑽夜市',
        openTime: '下午5點至凌晨12點',
        location: '高雄市前鎮區瑞隆路與復興三路口',
        transport: {
            mrt: '捷運凱旋站2號出口步行約10分鐘',
            bus: '紅3、紅3C、168、205'
        },
        intro: '金鑽夜市是高雄新興的大型夜市，結合美食、購物與娛樂，提供多元化的休閒體驗。',
        features: [
            '新興大型夜市',
            '美食購物娛樂',
            '環境寬敞舒適',
            '交通便利'
        ],
        mustTry: [
            {
                name: '海鮮炒麵',
                shop: '金鑽海鮮炒麵',
                price: '90元',
                desc: '海味十足、麵條Q彈'
            },
            {
                name: '烤肉串',
                shop: '老王烤肉',
                price: '20元/串起',
                desc: '現烤現賣、醬料特製'
            }
        ]
    },

    // 宜蘭縣
    '東門夜市': {
        title: '宜蘭東門夜市',
        openTime: '下午5點至凌晨12點',
        location: '宜蘭市東門路與舊城南路口',
        transport: {
            train: '宜蘭火車站步行約10分鐘',
            bus: '國光客運、首都客運：宜蘭轉運站'
        },
        intro: '宜蘭東門夜市是當地最具規模的觀光夜市，以在地特色小吃和農特產品聞名，展現宜蘭獨特的飲食文化。',
        features: [
            '在地特色小吃',
            '農特產品',
            '傳統美食',
            '觀光夜市'
        ],
        mustTry: [
            {
                name: '蒜味肉羹',
                shop: '老店蒜味肉羹',
                price: '55元',
                desc: '在地特色、湯頭濃郁'
            },
            {
                name: '糕渣',
                shop: '東門糕渣',
                price: '40元',
                desc: '宜蘭特產、香Q可口'
            }
        ]
    },

    // 花蓮市
    '東大門夜市': {
        title: '東大門夜市',
        openTime: '下午6點至凌晨12點',
        location: '花蓮市重慶路原花蓮市場',
        transport: {
            train: '花蓮火車站步行約15分鐘',
            bus: '花蓮客運：東大門夜市站'
        },
        intro: '東大門夜市是花蓮最大的觀光夜市，分為福町夜市、原住民一條街、大陸各省一條街等區域，提供多元化的美食體驗。',
        features: [
            '花蓮最大夜市',
            '原住民美食',
            '異國料理',
            '在地特色小吃'
        ],
        mustTry: [
            {
                name: '原住民烤肉',
                shop: '山地美食',
                price: '100元起',
                desc: '特色醃製、炭烤香氣'
            },
            {
                name: '炸蛋蔥油餅',
                shop: '老王蔥油餅',
                price: '50元',
                desc: '外酥內軟、蛋香四溢'
            }
        ]
    },

    // 台東市
    '正氣夜市': {
        title: '正氣夜市',
        openTime: '下午5點至凌晨12點',
        location: '台東市正氣路',
        transport: {
            train: '台東火車站步行約10分鐘',
            bus: '台東市區公車：正氣路站'
        },
        intro: '正氣夜市是台東市區重要的夜市之一，以在地特色小吃和原住民美食聞名，展現台東獨特的飲食文化。',
        features: [
            '在地特色小吃',
            '原住民美食',
            '平價美食',
            '生活機能佳'
        ],
        mustTry: [
            {
                name: '阿美族風味飯',
                shop: '原住民美食店',
                price: '80元',
                desc: '特色調味、風味獨特'
            },
            {
                name: '杏仁茶',
                shop: '老字號杏仁茶',
                price: '45元',
                desc: '香醇濃郁、養生美味'
            }
        ]
    }
};

// 更新夜市資訊的函數
function updateMarketInfo(marketName) {
    const market = marketData[marketName];
    if (!market) return;

    const marketInfo = document.getElementById('market-info');

    marketInfo.classList.add('fade-out');
    setTimeout(() => {
    marketInfo.innerHTML = `
        <div class="market-detail">
            <div class="market-header">
                <h1>${market.title}</h1>
                <div class="market-basic">
                    <div class="basic-item">
                        <i class="fas fa-clock"></i>
                        <span>${market.openTime}</span>
                    </div>
                    <div class="basic-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${market.location}</span>
                    </div>
                </div>
            </div>

            <div class="market-intro">
                <div class="intro-text">
                    <p>${market.intro}</p>
                    <div class="feature-tags">
                        ${market.features.map(feature => `
                            <span class="tag">${feature}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="intro-image">
                    <img src="../672311620.jpg" alt="${market.title}的景色">
                </div>
            </div>

            <div class="transport-info">
                <h2>交通資訊</h2>
                <div class="transport-grid">
                    ${Object.entries(market.transport).map(([type, info]) => `
                        <div class="transport-item">
                            <div class="transport-icon">
                                <i class="fas fa-${type === 'mrt' ? 'subway' : 
                                                   type === 'bus' ? 'bus' : 
                                                   type === 'train' ? 'train' : 
                                                   type === 'plane' ? 'plane' : 'walking'}"></i>
                            </div>
                            <div class="transport-detail">
                                <h3>${type === 'mrt' ? '捷運' : 
                                     type === 'bus' ? '公車' : 
                                     type === 'train' ? '火車' :
                                     type === 'plane' ? '飛機' : '其他'}</h3>
                                <p>${info}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="food-section">
                <h2>必吃美食</h2>
                <div class="food-grid">
                    ${market.mustTry.map(food => `
                        <div class="food-card">
                            <div class="food-image">
                                <img src="../672311620.jpg" alt="${food.name}">
                            </div>
                            <div class="food-info">
                                <h3>${food.name}</h3>
                                <div class="food-detail">
                                    <p class="shop"><i class="fas fa-store"></i> ${food.shop}</p>
                                    <p class="price"><i class="fas fa-tag"></i> ${food.price}</p>
                                    <p class="desc"><i class="fas fa-info-circle"></i> ${food.desc}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
        
     // 更新完成後移除 fade-out 並加上 fade-in
    marketInfo.classList.remove('fade-out');
    marketInfo.classList.add('fade-in');
    
    // 0.5秒後移除 fade-in 類別
    setTimeout(() => {
    marketInfo.classList.remove('fade-in');
    }, 500);

    // 滾動到夜市資訊區域
    marketInfo.scrollIntoView({ behavior: 'smooth' });
    }
        , 500);
}

function toggleList(element) {
    element.parentNode.classList.toggle("active");
}


//介紹頁面的夜市切換
document.addEventListener('DOMContentLoaded', function() {
  const marketItems = document.querySelectorAll('.market-item');
  marketItems.forEach(market => {
    market.addEventListener('click', function() {
      // 使用 trim() 確保去除多餘空白
      const marketName = this.textContent.trim();
      console.log("點擊的夜市名稱：", marketName);
      updateMarketInfo(marketName);
      
      // 選中效果：清除其他項目的 active 類別，並為當前項目添加 active 類別
      marketItems.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });
});


// document.addEventListener('DOMContentLoaded', function() {
//     // 處理城市點擊事件
//     const cityItems = document.querySelectorAll('.city-name');
//     cityItems.forEach(city => {
//         city.addEventListener('click', function() {
//             const parent = this.parentElement;
//             parent.classList.toggle('active');
//         });
//     });

//     // 處理夜市點擊事件
//     const marketItems = document.querySelectorAll('.market-item');
//     marketItems.forEach(market => {
//         market.addEventListener('click', function() {
//             const marketName = this.textContent;
//             updateMarketInfo(marketName);
            
//             // 添加選中效果
//             document.querySelectorAll('.market-item').forEach(item => {
//                 item.classList.remove('active');
//             });
//             this.classList.add('active');
//         });
//     });
// });

let slideIndex = 0;
const slidesWrapper = document.querySelector('.slides-wrapper');
const totalSlides = document.querySelectorAll('.slides').length;

// 複製第一張幻燈片到最後
const firstSlideClone = document.querySelector('.slides').cloneNode(true);
slidesWrapper.appendChild(firstSlideClone);

// 更新 CSS 以適應新增的幻燈片
slidesWrapper.style.width = `${(totalSlides + 1) * 100}%`;
document.querySelectorAll('.slides').forEach(slide => {
    slide.style.width = `${100 / (totalSlides + 1)}%`;
});

function showSlides() {
    slideIndex++;
    slidesWrapper.style.transition = 'transform 1.5s ease-in-out';
    slidesWrapper.style.transform = `translateX(-${slideIndex * (100 / (totalSlides + 1))}%)`;

    // 當滑到複製的那一張時
    if (slideIndex >= totalSlides) {
        // 等待過渡動畫完成後
        setTimeout(() => {
            // 關閉過渡動畫
            slidesWrapper.style.transition = 'none';
            // 瞬間跳回第一張
            slideIndex = 0;
            slidesWrapper.style.transform = 'translateX(0)';
        }, 1500);
    }
}

// 每8秒換一張圖
setInterval(showSlides, 8000);

// 初始化顯示
showSlides(); 