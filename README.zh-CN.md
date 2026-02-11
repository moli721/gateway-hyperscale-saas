# Vexar - API 网关落地页

<div align="center">

[English](./README.md) | **简体中文**

</div>

<div align="center">

![Vexar](https://img.shields.io/badge/Vexar-v2.0-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

一个现代化、高性能的 Vexar SaaS 平台落地页，具有 3D 卡片交互、流畅动画和玻璃态设计。

[在线演示](#) · [报告问题](#) · [功能建议](#)

</div>

---

## ✨ 特性

### 🎨 设计与界面
- **玻璃态设计** - 超现代的玻璃效果 UI，带有背景模糊
- **3D 卡片堆叠** - 交互式扇形卡片布局，带有透视变换
- **流畅动画** - 由 Framer Motion 驱动的弹簧物理动画
- **深色主题** - 纯黑美学配合蓝/紫色强调
- **响应式设计** - 移动优先的断点优化

### 🚀 性能
- **Vite 构建系统** - 闪电般快速的 HMR 和优化的生产构建
- **代码分割** - 基于路由的自动代码分割
- **懒加载** - 按需加载图片和组件
- **资源优化** - 压缩和缓存的静态资源

### 🛠️ 开发体验
- **TypeScript** - 全代码库类型安全
- **ESLint** - 一致的代码风格和质量
- **热模块替换** - 开发过程中即时反馈
- **组件库** - `/components/ui` 中的可复用 UI 组件

---

## 📦 技术栈

| 类别 | 技术 |
|------|------|
| **框架** | React 19.2 |
| **语言** | TypeScript 5.9 |
| **构建工具** | Vite 7.3 |
| **样式** | Tailwind CSS 4.1 |
| **动画** | Framer Motion 12.34 |
| **路由** | React Router 7.13 |
| **图标** | Lucide React |
| **工具库** | clsx, tailwind-merge |

---

## 🚀 快速开始

### 前置要求

- Node.js 20.19+ 或 22.12+
- npm 或 yarn 或 pnpm

### 安装

```bash
# 克隆仓库
git clone https://github.com/moli721/gateway-hyperscale-saas.git
cd gateway-hyperscale-saas

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

应用将在 `http://localhost:5173` 可用

### 生产构建

```bash
# 构建项目
npm run build

# 预览生产构建
npm run preview
```

---

## 📁 项目结构

```
v0-project/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── ui/             # UI 组件库
│   │   │   └── card-stack.tsx
│   │   ├── FloatingAIChat.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── SearchModal.tsx
│   ├── pages/              # 路由页面
│   │   ├── Homepage.tsx
│   │   ├── PricingPage.tsx
│   │   └── DocsPage.tsx
│   ├── lib/                # 工具函数
│   │   └── utils.ts
│   ├── App.tsx             # 根组件
│   ├── main.tsx            # 入口文件
│   └── index.css           # 全局样式
├── public/                 # 静态资源
├── tailwind.config.js      # Tailwind 配置
├── tsconfig.json           # TypeScript 配置
├── vite.config.ts          # Vite 配置
└── package.json
```

---

## 🎨 核心组件

### CardStack 组件
交互式 3D 卡片堆叠，扇形布局：
- 拖拽导航功能
- 键盘导航（方向键）
- 自动播放模式
- 可自定义透视和深度
- 基于弹簧的动画

```tsx
<CardStack
  items={features}
  cardWidth={480}
  cardHeight={320}
  overlap={0.6}
  spreadDeg={38}
  loop={true}
  showDots={true}
/>
```

### 设计系统
- **颜色**：纯黑背景配合蓝/紫色强调
- **字体**：Inter（正文）、Instrument Serif（强调）、SF Pro Display（标题）
- **间距**：一致的 8px 网格系统
- **边框**：超细白色边框，低透明度
- **阴影**：分层阴影营造深度感

---

## 🎯 可用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动带 HMR 的开发服务器 |
| `npm run build` | 生产环境构建 |
| `npm run preview` | 本地预览生产构建 |
| `npm run lint` | 运行 ESLint 检查代码质量 |

---

## 🌐 浏览器支持

- Chrome/Edge（最新 2 个版本）
- Firefox（最新 2 个版本）
- Safari（最新 2 个版本）
- 移动浏览器（iOS Safari、Chrome Mobile）

---

## 📝 配置

### Tailwind CSS
`tailwind.config.js` 中的自定义调色板和设计令牌：
- 背景颜色（绝对黑、深炭灰）
- 强调色（电蓝、鲜紫）
- 带透明度变体的文本颜色
- 自定义字体系列和动画

### TypeScript
启用严格模式：
- 类型导入使用 `verbatimModuleSyntax`
- 配置路径别名
- React JSX 转换

---

## 🤝 贡献

欢迎贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'feat: 添加某个功能'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 开启 Pull Request

### 提交规范
遵循 [约定式提交](https://www.conventionalcommits.org/zh-hans/)：
- `feat:` 新功能
- `fix:` 错误修复
- `docs:` 文档变更
- `style:` 代码格式变更
- `refactor:` 代码重构
- `perf:` 性能优化
- `test:` 测试更新
- `chore:` 构建/工具变更

---

## 📄 许可证

本项目为私有和专有项目。

---

## 🙏 致谢

- [React](https://react.dev/) - UI 框架
- [Vite](https://vitejs.dev/) - 构建工具
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS
- [Framer Motion](https://www.framer.com/motion/) - 动画库
- [Lucide](https://lucide.dev/) - 图标库

---

<div align="center">

**使用现代 Web 技术用 ❤️ 构建**

</div>
