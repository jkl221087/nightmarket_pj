// 定義翻譯內容
const translations = {
    zh: {
        pageTitle: "台灣夜市搜尋地圖",
        currentLanguage: "中文",
        exploreTitle: "探索夜市文化",
        exploreDesc: "您的夜市探索之旅從這裡開始",
        nightMarketMap: "夜市地圖",
        community: "社群",
        nightMarketIntro: "夜市介紹"
    },
    en: {
        pageTitle: "Taiwan Night Market Map",
        currentLanguage: "English",
        exploreTitle: "Explore Night Market Culture",
        exploreDesc: "Start your night market journey here",
        nightMarketMap: "Night Market Map",
        community: "Community",
        nightMarketIntro: "Introduction"
    }
};

// 初始化語言
let currentLang = localStorage.getItem('language') || 'zh';

// 更新頁面內容的函數
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // 更新語言切換按鈕的文字
    const currentLanguageSpan = document.getElementById('currentLanguage');
    if (currentLanguageSpan) {
        currentLanguageSpan.textContent = translations[currentLang].currentLanguage;
    }
}

// 切換語言的函數
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('language', currentLang);
    updateContent();
    console.log('Language switched to:', currentLang); // 用於調試
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初化時更新內容
    updateContent();
    
    // 添加語言切換按鈕的事件監聽器
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
});

// 導出函數供其他文件使用
window.i18n = {
    toggleLanguage,
    updateContent,
    currentLang,
    translations
};
