# 接案鬼故事・年底交換禮物小聚

> 送出你想告別的禮物，換回一點我們都懂的療癒

## 專案簡介

這是一個基於 Vue 3 + Vite + Tailwind CSS 開發的活動網站，用於宣傳年底交換禮物小聚活動。

## 技術棧

- **框架**: Vue 3 (Composition API)
- **建置工具**: Vite
- **樣式**: Tailwind CSS
- **動畫**: GSAP
- **測試**: Vitest + @vue/test-utils

## 開發方法論

本專案遵循以下開發實踐：

- **TDD (Test-Driven Development)**: 測試驅動開發
- **BDD (Behavior-Driven Development)**: 行為驅動開發
- **DDD (Domain-Driven Design)**: 領域驅動設計

詳細內容請參考：
- [TDD 測試點](./tdd.md)
- [BDD 場景文件](./bdd.md)
- [DDD 結構設計](./ddd.md)
- [任務說明](./task.md)

## 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

開發伺服器將在 `http://localhost:5173` 啟動

### 建置生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

### 執行測試

```bash
# 執行測試
npm run test

# 執行測試 UI
npm run test:ui
```

## 專案結構

```
freelance-gift-exchange-2025/
├── index.html              # HTML 入口檔案
├── package.json            # 專案依賴配置
├── vite.config.js          # Vite 配置
├── tailwind.config.js      # Tailwind CSS 配置
├── postcss.config.js       # PostCSS 配置
├── src/
│   ├── main.js             # 應用程式入口
│   ├── App.vue             # 根元件
│   ├── style.css           # 全域樣式
│   └── components/
│       ├── HomePage.vue    # 首頁元件
│       └── HomePage.test.js # 首頁測試
├── bdd.md                  # BDD 文件
├── ddd.md                  # DDD 文件
├── tdd.md                  # TDD 文件
└── task.md                 # 任務說明
```

## 設計風格

### 主色調

- 漸層紫藍：`from-[#6C63FF] to-[#00C9FF]`
- 代表夜色與神秘感

### 互動動畫

- 使用 GSAP 實現淡入與浮動效果
- 頁面滾動時的動畫效果
- Tailwind 內建的 `animate-bounce` 動畫

## 功能特色

- ✅ 響應式設計，支援各種裝置
- ✅ 流暢的 GSAP 動畫效果
- ✅ 主視覺漸層設計
- ✅ 雨天備案資訊展示
- ✅ 一鍵報名功能
- ✅ 完整的測試覆蓋

## 驗收標準

依據 BDD 文件，本專案需滿足以下驗收標準：

### 首頁可視內容
- ✅ 顯示時間、地點、流程與報名按鈕

### 雨天備案
- ✅ 頁面可見「雨天備案」區塊與展覽資訊

### 報名導向
- ✅ 點擊 CTA 導向 Google 表單

## 測試

本專案包含完整的單元測試，涵蓋：

1. 主標題顯示
2. 報名按鈕功能
3. 雨天備案區塊
4. 活動資訊顯示
5. 活動流程顯示
6. 漸層背景樣式

執行 `npm run test` 查看測試結果。

## 部署

建議部署平台：
- Vercel
- Netlify
- GitHub Pages

建置後的檔案位於 `dist/` 目錄。

## License

MIT

## 聯絡資訊

© 2025 接案鬼故事 Freelance Gift Exchange
