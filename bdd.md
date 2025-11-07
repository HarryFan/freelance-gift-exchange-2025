# 🎨 主視覺風格建議

- **主色調**
- 漸層紫藍（代表夜色與神秘）
- from-[#6C63FF] to-[#00C9FF]
- 可延伸為背景漸層、圓形裝飾、CTA 按鈕 hover 效果

- **元素建議**
- 使用漸層圓形背景作為主圖層次（有點像流動氣泡感）
- 搭配貓頭鷹、鱗翅、破碎 deadline 清單等微插圖作點綴

- **互動動畫**
- 使用 Framer Motion 或 GSAP
- 頁面滾動淡入、交換卡片浮動等

---

# 📄 BDD（Behavior-Driven Development）文件草稿

Feature: 使用者瀏覽活動頁面並成功報名

Scenario: 使用者點開活動網站
  Given 我是訪客
  When 我打開活動首頁
  Then 我應該看到交換禮物活動的時間、地點、流程與報名按鈕

Scenario: 使用者查看雨天備案
  Given 我在網站上
  When 我滑到「雨天備案」區塊
  Then 我會看到蝶蛾特展的介紹與集合說明

Scenario: 使用者點擊報名按鈕
  Given 我已閱讀活動內容
  When 我點擊「我要報名」的 CTA 按鈕
  Then 我應該被導向到 Google 表單頁面
