# Google Analytics 集成指南

## 概述

本项目已集成了Google Analytics（分析）跟踪代码，用于收集网站访问数据和用户行为信息。跟踪ID为：`G-EYFTN03GJ7`。

## 现有集成

目前，Google Analytics代码已添加到以下文件中：

- `index.html`

## 添加到新页面的步骤

当创建新的HTML页面时，请确保在每个页面的`<head>`部分添加以下代码：

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-EYFTN03GJ7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EYFTN03GJ7');
</script>
```

## 最佳实践

1. 确保代码放置在`<head>`标签内，尽可能靠近顶部
2. 验证代码是否正常工作：
   - 使用Google Analytics实时报告查看是否有数据流入
   - 使用Google Tag Assistant扩展程序验证标签是否正确实现
3. 遵守数据隐私法规，确保网站有适当的隐私政策

## 注意事项

- 不要更改跟踪ID（`G-EYFTN03GJ7`），除非有特殊需求
- 在开发环境中测试时，可能需要过滤掉自己的IP地址，以避免数据污染

## 相关资源

- [Google Analytics官方文档](https://developers.google.com/analytics)
- [Google Analytics数据隐私设置](https://support.google.com/analytics/answer/9019185)