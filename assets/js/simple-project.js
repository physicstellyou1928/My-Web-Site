/**
 * 简单项目页面的JavaScript功能
 */
document.addEventListener('DOMContentLoaded', function() {
  // 获取DOM元素
  const demoButton = document.getElementById('demoButton');
  const resultBox = document.getElementById('result');
  
  // 点击按钮事件
  if (demoButton) {
    demoButton.addEventListener('click', function() {
      // 显示结果框
      if (resultBox) {
        resultBox.style.display = 'block';
        resultBox.innerHTML = '<p>您点击了按钮！</p><p>当前时间: ' + new Date().toLocaleString() + '</p>';
        
        // 添加一个简单的动画效果
        resultBox.style.opacity = '0';
        setTimeout(() => {
          resultBox.style.transition = 'opacity 0.5s ease';
          resultBox.style.opacity = '1';
        }, 10);
      }
    });
  }
  
  // 简单的控制台信息
  console.log('简单项目页面已加载完成');
});
