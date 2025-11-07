# 接案鬼故事｜年底交換禮物小聚

Freelance Gift Exchange 2025 - Vue 3 單頁式活動網站

## 專案簡介

這是一個使用 Vue 3 + Vite + Tailwind CSS 建立的單頁式活動網站，展示「接案鬼故事｜年底交換禮物小聚」的活動資訊。

## 技術棧

- **Vue 3** - 前端框架
- **Vite** - 建置工具
- **Tailwind CSS** - 樣式框架
- **GSAP** (可選) - 動畫庫

## 安裝與執行

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

### 建置生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 專案結構

```
.
├── docs/              # 文件資料夾
│   ├── 文案.txt      # 活動文案
│   ├── bdd.md        # BDD 文件
│   ├── ddd.md        # DDD 文件
│   ├── tdd.md        # TDD 文件
│   └── task.md       # 任務說明
├── src/
│   ├── components/
│   │   └── HomePage.vue  # 主頁面元件
│   ├── App.vue       # 根元件
│   ├── main.js       # 入口檔案
│   └── style.css     # 全域樣式
├── index.html        # HTML 模板
├── package.json      # 專案配置
├── vite.config.js    # Vite 配置
├── tailwind.config.js # Tailwind 配置
└── postcss.config.js  # PostCSS 配置
```

## 設計特色

- **主色調**：漸層紫藍 (`#6C63FF` → `#00C9FF`)
- **動畫效果**：CSS 動畫 + GSAP（可選）
- **響應式設計**：支援手機、平板、桌面裝置
- **視覺效果**：背景漸層、圓形裝飾、毛玻璃效果

## 功能驗證

根據 BDD 文件，網站應包含：

- ✅ 活動時間、地點、流程與報名按鈕
- ✅ 禮物規則文案（包含「建議300元上下，超過也沒關係」）
- ✅ 雨天備案區塊與展覽資訊
- ✅ 報名按鈕導向 Google 表單

## 授權

MIT License

