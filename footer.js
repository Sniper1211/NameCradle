// 页脚加载脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取页脚容器
    const footerContainer = document.querySelector('.site-footer');
    
    if (footerContainer) {
        // 使用fetch加载页脚组件
        fetch('footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('无法加载页脚组件');
                }
                return response.text();
            })
            .then(data => {
                // 替换现有页脚内容
                footerContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('加载页脚时出错:', error);
                // 如果加载失败，提供一个基本的页脚作为备份
                footerContainer.innerHTML = `
                <div class="footer-content">
                    <div class="footer-section contact">
                        <h4>联系方式</h4>
                        <p><i class="fas fa-envelope"></i> hi@goodnamecradle.space</p>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2025 起名助手 | <a href="#">隐私政策</a> | <a href="#">使用条款</a></p>
                    </div>
                </div>
                `;
            });
    }
});