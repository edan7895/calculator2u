const translations = {
  en: {
    site_name: "CalcMaster",
    home: "Home",
    health: "Health",
    finance: "Finance",
    education: "Education",
    engineering: "Engineering",
    life: "Daily Life",
    about: "About Us",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    welcome: "Welcome to CalcMaster",
    tagline: "A comprehensive tool hub for everyday, education, finance, and science."
  },
  zh: {
    site_name: "计算大师",
    home: "首页",
    health: "健康",
    finance: "财务",
    education: "教育",
    engineering: "工程",
    life: "生活",
    about: "关于我们",
    privacy: "隐私政策",
    terms: "使用条款",
    welcome: "欢迎来到计算大师",
    tagline: "一个集成日常、教育、财务与科学计算器的工具平台。"
  }
};

function detectLanguage() {
  const lang = navigator.language.startsWith('zh') ? 'zh' : 'en';
  document.documentElement.lang = lang;
  return lang;
}

function translatePage(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

const userLang = detectLanguage();
translatePage(userLang);
document.getElementById('langSwitcher').value = userLang;

document.getElementById('langSwitcher').addEventListener('change', function () {
  const lang = this.value;
  translatePage(lang);
});
