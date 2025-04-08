// 页脚加载脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取页脚容器
    const footerContainer = document.querySelector('.site-footer');
    
    if (footerContainer) {
        // 直接插入页脚HTML内容，而不是通过fetch加载
        footerContainer.innerHTML = `
        <div class="footer-content">
            <div class="footer-section about">
                <h4>关于我们</h4>
                <p>AI宝宝起名助手致力于结合传统文化与现代科技，为您的宝宝提供美好而有意义的名字。</p>
            </div>
            <div class="footer-section links">
                <h4>快速链接</h4>
                <ul>
                    <li><a href="guide.html">使用指南</a></li>
                    <li><a href="encyclopedia.html">名字百科</a></li>
                    <li><a href="contact.html">联系我们</a></li>
                </ul>
            </div>
            <div class="footer-section contact">
                <h4>联系方式</h4>
                <p><i class="fas fa-envelope"></i> hi@goodnamecradle.space</p>
                <!-- 暂时隐藏社交媒体图标，待未来配置
                <div class="social-icons">
                    <a href="#"><i class="fab fa-weixin"></i></a>
                    <a href="#"><i class="fab fa-weibo"></i></a>
                </div>
                -->
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 起名助手 <!-- <a href="#">隐私政策</a> | <a href="#">使用条款</a> --></p>
        </div>
        `;
    }
});