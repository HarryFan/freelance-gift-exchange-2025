# 任務說明（task.md）

- **目標**
- 依據 BDD/DDD/TDD，建立 Vue 3 的活動頁元件與基本驗收標準

- **參考文件**
- [bdd.md](./bdd.md)
- [ddd.md](./ddd.md)
- [tdd.md](./tdd.md)

---

## 待辦事項

- **建立 Vue 3 頁面元件**
- 將提供的 HTML 轉為 `HomePage.vue`（保留 Tailwind 樣式、結構與 CTA）
- 將 `body` 上的背景漸層類名，移至元件容器的包裹層

- **動畫選型與實作**
- 優先採用 GSAP（Vue 友善），避免使用 Framer Motion（偏 React）
- 先以 CSS 動畫（例如 `animate-bounce`）呈現；若 `window.gsap` 存在，啟用淡入與浮動效果

- **設計系統對應**
- 使用主色漸層 `from-[#6C63FF] to-[#00C9FF]`
- CTA hover 效果與圓形漸層裝飾可後續抽成 tokens/components

- **測試（對齊 tdd.md）**
- 應顯示主標題「接案鬼故事・年底交換禮物小聚」
- 點擊「我要報名」應導向 Google 表單（以 `target="_blank"` 開新分頁）
- 應能顯示「☔ 雨天備案」區塊

---

## 驗收標準（依 BDD）

- **首頁可視內容**
- 顯示時間、地點、流程與報名按鈕

- **雨天備案**
- 頁面可見「雨天備案」區塊與展覽資訊

- **報名導向**
- 點擊 CTA 導向 Google 表單（占位連結可先用 `https://forms.gle/your-form-link`）

- **禮物規則文案**
- 顯示文案需包含：`不限主題、不限價格（建議300元上下，超過也沒關係）`

---

## 使用方式

- 在現有 Vue 3 專案中，將 `src/components/HomePage.vue` 複製進去後於 `App.vue` 引入：

```vue
<script setup>
import HomePage from './components/HomePage.vue'
</script>

<template>
  <HomePage />
</template>
```

- Tailwind 可先用 CDN（開發）或安裝 PostCSS/Tailwind（正式）。
- 若要啟用 GSAP 動畫，可在主入口或 `index.html` 引入：

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
```
