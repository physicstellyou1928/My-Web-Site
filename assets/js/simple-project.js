/**
 * 简单项目页面的JavaScript功能
 * 包含语言切换和按钮交互功能
 */
document.addEventListener('DOMContentLoaded', function() {
  // 语言切换逻辑
  /**
   * 设置当前显示语言
   * @param {string} lang - 语言代码，'zh'为中文，'en'为英文
   */
  function setLang(lang) {
    try {
      console.log('设置语言:', lang);
      console.log('找到的中文元素数量:', document.querySelectorAll('.lang-zh').length);
      console.log('找到的英文元素数量:', document.querySelectorAll('.lang-en').length);
      
      // 显示当前语言的元素，隐藏其他语言的元素
      document.querySelectorAll('.lang-zh').forEach(el => {
        el.style.display = (lang === 'zh' ? 'block' : 'none');
      });
      
      document.querySelectorAll('.lang-en').forEach(el => {
        el.style.display = (lang === 'en' ? 'block' : 'none');
        if (lang === 'en') {
          console.log('设置英文元素可见:', el);
        }
      });
      
      // 切换按钮文本也随语言变化
      const langBtn = document.getElementById('langToggleBtn');
      if (langBtn) {
        langBtn.textContent = (lang === 'zh' ? 'English' : '中文');
        console.log('设置按钮文本为:', langBtn.textContent);
      }
      
      // 将用户语言选择保存到浏览器本地存储
      localStorage.setItem('simpleProjectLang', lang);
      
      // 解决问题1: 清空结果框并隐藏
      const resultBox = document.getElementById('result');
      if (resultBox) {
        resultBox.style.display = 'none';
        resultBox.innerHTML = '';
        console.log('已清空结果框');
      }
      
      console.log('语言已切换为: ' + (lang === 'zh' ? '中文' : 'English'));
    } catch (error) {
      console.error('设置语言时发生错误:', error);
      // 确保至少显示中文内容
      document.querySelectorAll('.lang-zh').forEach(el => el.style.display = 'block');
    }
  }

  try {
    // 初始化：检查本地存储中是否有用户之前选择的语言，如果没有则默认为中文
    let currentLang = localStorage.getItem('simpleProjectLang') || 'zh';
    setLang(currentLang);

    // 语言切换按钮点击事件
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
      langBtn.addEventListener('click', function() {
        // 切换语言：中文变英文，英文变中文
        currentLang = (currentLang === 'zh' ? 'en' : 'zh');
        setLang(currentLang);
      });
    } else {
      console.warn('未找到语言切换按钮');
    }

    // 原有功能：演示按钮点击事件，现在支持双语显示
    const demoButton = document.getElementById('demoButton');
    const resultBox = document.getElementById('result');
    if (demoButton) {
      demoButton.addEventListener('click', function() {
        if (resultBox) {
          // 显示结果框
          resultBox.style.display = 'block';
          
          // 根据当前语言显示不同文本
          if (currentLang === 'zh') {
            resultBox.innerHTML = '<p>您点击了按钮！</p><p>当前时间: ' + new Date().toLocaleString() + '</p>';
          } else {
            resultBox.innerHTML = '<p>You clicked the button!</p><p>Current time: ' + new Date().toLocaleString() + '</p>';
          }
          
          // 添加淡入动画效果
          resultBox.style.opacity = '0';
          setTimeout(() => {
            resultBox.style.transition = 'opacity 0.5s ease';
            resultBox.style.opacity = '1';
          }, 10);
        }
      });
    } else {
      console.warn('未找到演示按钮');
    }
  } catch (error) {
    console.error('初始化时发生错误:', error);
    // 确保页面至少显示默认内容
    document.querySelectorAll('.lang-zh').forEach(el => el.style.display = 'block');
  }
  
  // 控制台提示
  console.log('简单项目页面已加载完成');
});
