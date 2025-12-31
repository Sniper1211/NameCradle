// 页脚加载脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取页脚容器
    const footerContainer = document.querySelector('.site-footer');
    
    if (footerContainer) {
        // 使用DOM API创建元素，避免使用可能触发CSP限制的innerHTML和模板字符串
        
        // 创建footer-content容器
        const footerContent = document.createElement('div');
        footerContent.className = 'footer-content';
        
        // 创建关于我们部分
        const aboutSection = document.createElement('div');
        aboutSection.className = 'footer-section about';
        
        const aboutTitle = document.createElement('h4');
        aboutTitle.textContent = '关于我们';
        
        const aboutText = document.createElement('p');
        aboutText.textContent = 'AI起名助手致力于结合传统文化与现代科技，为您的提供美好而有意义的名字。';
        
        aboutSection.appendChild(aboutTitle);
        aboutSection.appendChild(aboutText);
        
        // 创建快速链接部分
        const linksSection = document.createElement('div');
        linksSection.className = 'footer-section links';
        
        const linksTitle = document.createElement('h4');
        linksTitle.textContent = '快速链接';
        
        const linksList = document.createElement('ul');
        
        const links = [
            { text: '博客', href: 'blog.html' },
            { text: '使用指南', href: 'guide.html' },
            { text: '名字百科', href: 'encyclopedia.html' },
            { text: '联系我们', href: 'contact.html' },
            { text: '隐私政策', href: 'privacy.html' },
            { text: '条款与免责声明', href: 'terms.html' },
            { text: '关于我们', href: 'about.html' }
        ];
        
        links.forEach(function(link) {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.href;
            anchor.textContent = link.text;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });
        
        linksSection.appendChild(linksTitle);
        linksSection.appendChild(linksList);
        
        // 创建联系方式部分
        const contactSection = document.createElement('div');
        contactSection.className = 'footer-section contact';
        
        const contactTitle = document.createElement('h4');
        contactTitle.textContent = '联系方式';
        
        const contactText = document.createElement('p');
        const emailIcon = document.createElement('i');
        emailIcon.className = 'fas fa-envelope';
        const emailLink = document.createElement('a');
        emailLink.href = 'mailto:hi@goodnamecradle.space';
        emailLink.textContent = ' hi@goodnamecradle.space';
        contactText.appendChild(emailIcon);
        contactText.appendChild(emailLink);
        
        contactSection.appendChild(contactTitle);
        contactSection.appendChild(contactText);
        
        // 创建页脚底部
        const footerBottom = document.createElement('div');
        footerBottom.className = 'footer-bottom';
        
        const copyrightText = document.createElement('p');
        const currentYear = new Date().getFullYear();
        copyrightText.textContent = `© ${currentYear} 起名助手`;
        
        footerBottom.appendChild(copyrightText);
        
        // 组装页脚
        footerContent.appendChild(aboutSection);
        footerContent.appendChild(linksSection);
        footerContent.appendChild(contactSection);
        
        footerContainer.appendChild(footerContent);
        footerContainer.appendChild(footerBottom);
    }
});
