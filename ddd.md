# 🧱 DDD（Domain-Driven Design）結構概念

- **核心 Domain：活動參與**

- **Entities**
- User：活動參加者（name, email, 是否報名, 是否已出席）
- Event：交換禮物活動本體（地點、時間、流程）
- Gift：使用者帶來的禮物（名稱、描述、照片、交換結果）
- WeatherPlan：天氣備案（戶外／室內場地）

- **Subdomains**
- Registration：報名流程與資格
- Interaction：使用者在網站中的互動動畫與導覽
- Content：展覽與流程內容結構（可連後台管理活動）

- **Bounded Contexts（建議）**
- Registration BC：處理報名規則、名額、表單導向
  （含禮物預算指引：建議300元上下，超過也沒關係）
- Event BC：維護活動基本資料與流程節點
- Participation BC：簽到、出席、禮物交換結果
- Presentation BC：前端互動、動畫與頁面組成（可與 Design System 對接）

- **Aggregate 與不變條件（示意）**
- Event 為聚合根，管理流程節點與 WeatherPlan
- User 與其 Gift 可作為 Participation 聚合的一部分
- 不變條件：
  - 使用者報名需在 Event 報名期間內
  - 禮物狀態需在交換完成後更新交換結果
  - 出席狀態由簽到流程驅動

- **Domain Services（示意）**
- RegistrationService：驗證名額、導向表單、處理報名確認
- GiftExchangeService：配對與交換結果計算
- AttendanceService：簽到與出席紀錄

- **Repository（示意）**
- UserRepository, EventRepository, GiftRepository, WeatherPlanRepository

- **通用語彙（Ubiquitous Language）**
- 報名、簽到、出席、禮物、交換結果、雨天備案
