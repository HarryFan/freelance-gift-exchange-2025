<template>
  <div class="min-h-screen gradient-primary relative overflow-hidden">
    <!-- 动态泡泡背景 -->
    <BubbleBackground />

    <!-- 主内容 -->
    <div class="relative z-10 container mx-auto px-4 py-12 md:py-20">
      <!-- 活动标题 -->
      <section class="text-center mb-16 fade-in">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
          接案鬼故事｜年底交換禮物小聚
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-8">
          Freelance Gift Exchange 2025
        </p>

        <!-- 副標語 -->
        <div class="max-w-3xl mx-auto space-y-3">
          <p class="text-lg md:text-xl text-white/95 leading-relaxed">
            帶上一份你用心準備的禮物，換回一點我們都懂的療癒
          </p>
          <p class="text-lg md:text-xl text-white/95 leading-relaxed">
            用禮物打開話題，用交流連結人心
          </p>
        </div>
      </section>

      <!-- 方案 A Modal -->
      <div
        v-if="showPlanAModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
        @click="showPlanAModal = false"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="w-full max-w-xl modal-card modal-a text-gray-900 modal-enter"
          @click.stop
        >
          <button class="modal-close" @click="showPlanAModal = false">×</button>
          <div class="text-4xl mb-2 emoji-icon">💰</div>
          <span class="badge badge-orange mb-2">加碼贊助獎</span>
          <h3 class="text-3xl font-extrabold mb-1 tracking-tight">哈利小叔一獎｜餐費 NT$300</h3>
          <p class="opacity-90 mb-5">可折抵本次聚餐費用</p>
          <div class="modal-note">
            <p class="font-semibold mb-2">抽獎條件：</p>
            <ul class="space-y-1">
              <li>✓ 16:25 在場即可參加 16:25–16:30 抽獎</li>
              <li>✓ 所有選擇一般方案（$100）的參加者皆有機會</li>
            </ul>
          </div>
          <button
            class="btn-gradient-orange"
            @click="showPlanAModal = false"
          >我知道了</button>
        </div>
      </div>

      <!-- 方案 B Modal -->
      <div
        v-if="showPlanBModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
        @click="showPlanBModal = false"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="w-full max-w-xl modal-card modal-b text-gray-900 modal-enter"
          @click.stop
        >
          <button class="modal-close" @click="showPlanBModal = false">×</button>
          <div class="text-4xl mb-2 emoji-icon">🤖</div>
          <span class="badge badge-purple mb-2">社團贊助</span>
          <h3 class="text-3xl font-extrabold mb-1 tracking-tight">哈利小叔加碼獎｜Claude Pro 一個月</h3>
          <p class="opacity-90 mb-5">NT$650</p>
          <div class="modal-note">
            <p class="font-semibold mb-2">抽獎條件：</p>
            <ul class="space-y-1">
              <li>✓ 15:30 在場即可參加 15:30 哈利小叔加碼獎抽獎</li>
              <li>✓ 所有選擇AI保佑我方案（$200）的參加者皆有機會</li>
            </ul>
          </div>
          <button
            class="btn-gradient-purple"
            @click="showPlanBModal = false"
          >我知道了</button>
        </div>
      </div>

      <!-- 抽獎說明 Modal -->
      <div
        v-if="showRulesModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
        @click="showRulesModal = false"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="w-full max-w-xl modal-card modal-info text-gray-900 modal-enter"
          @click.stop
        >
          <button class="modal-close" @click="showRulesModal = false">×</button>
          <div class="text-4xl mb-2 emoji-icon">📜</div>
          <span class="badge mb-2">抽獎規則</span>
          <h3 class="text-2xl font-extrabold mb-3">抽獎規則</h3>
          <div class="modal-note space-y-2">
            <ul class="list-disc pl-5 space-y-1">
              <li>每人限擇一方案：一般方案（$100）或 AI保佑我方案（$200）。</li>
              <li>名額：15:30 哈利小叔加碼獎（AI保佑我方案）抽 1 名｜16:25–16:30 哈利小叔一獎（一般方案）抽 1 名。</li>
              <li>不重複得獎；報名後恕不退費，可轉讓名額予親友。</li>
            </ul>
          </div>
          <button
            class="btn-gradient-orange"
            @click="showRulesModal = false"
          >我了解了</button>
        </div>
      </div>

      <!-- 活動簡介 -->
      <section class="max-w-4xl mx-auto mb-16 fade-in-up">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">🧭 活動簡介</h2>
          <div class="space-y-4 text-white/95 text-lg leading-relaxed">
            <p>
              每年年底，都該有點小儀式，替這一年瘋狂又真實的接案人生，畫下一個「好啦算了我選擇原諒」的句點。
            </p>
            <p>
              我們邀請你，帶來一份能「創造驚喜」的禮物。它可以是你新購入的書籍、精選的設計小物等；需為全新或近新品、外觀與功能完整。重點不是價格，讓我們用禮物帶來一段愉快的體驗（非斷捨離、非清倉）。
            </p>
            <p class="font-medium">
              這是一場溫柔的交換，也是一場自由接案人生的對話。
            </p>
          </div>
        </div>
      </section>

      <!-- 活動資訊 -->
      <section class="max-w-4xl mx-auto mb-16 fade-in-up">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">📅 活動資訊</h2>
          <div class="space-y-4 text-white/95">
            <div class="flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-semibold min-w-[120px]">活動時間｜</span>
              <span>2025年 11 月 30 日（日）</span>
            </div>
            <div class="flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-semibold min-w-[120px]">前導集合｜</span>
              <span>下午 14:30，二二八和平公園（館前路－國立台灣博物館前集合）</span>
            </div>
            <div class="flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-semibold min-w-[120px]">主活動時間｜</span>
              <span>下午 15:00 – 15:30</span>
            </div>
            <div class="flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-semibold min-w-[120px]">主活動地點｜</span>
              <span>Campus Cafe 館前店（台北市中正區館前路8號）</span>
            </div>
            <div class="flex flex-col md:flex-row md:items-center gap-2">
              <span class="font-semibold min-w-[120px]">交流時間｜</span>
              <span>15:35–16:25（16:25–16:30 抽獎）</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 活動流程 -->
      <section class="max-w-4xl mx-auto mb-16 fade-in-up">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">🧾 活動流程</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-white/95">
              <thead>
                <tr class="border-b border-white/20">
                  <th class="text-left py-3 px-4 font-semibold">時間</th>
                  <th class="text-left py-3 px-4 font-semibold">內容</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-white/10">
                  <td class="py-3 px-4">14:30 – 14:50</td>
                  <td class="py-3 px-4">前導暖身：公園散步、閒聊＋暖場</td>
                </tr>
                <tr class="border-b border-white/10">
                  <td class="py-3 px-4">14:50 – 15:00</td>
                  <td class="py-3 px-4">一起移動至餐廳報到</td>
                </tr>
                <tr class="border-b border-white/10">
                  <td class="py-3 px-4">15:00 – 15:30</td>
                  <td class="py-3 px-4">🎁 交換禮物 + 簡短自我介紹</td>
                </tr>
                <tr class="border-b border-white/10">
                  <td class="py-3 px-4">15:30 – 15:35</td>
                  <td class="py-3 px-4">🎟️ 哈利小叔加碼獎抽獎（AI保佑我方案｜報名費$200）：哈利小叔加碼獎　Claude Pro 一個月 NT$650</td>
                </tr>
                <tr class="border-b border-white/10">
                  <td class="py-3 px-4">15:35 – 16:25</td>
                  <td class="py-3 px-4">🍔 聚餐 + 自由交流（你要聊天、抱怨、約合作都可以）</td>
                </tr>
                <tr>
                  <td class="py-3 px-4">16:25 – 16:30</td>
                  <td class="py-3 px-4">🎉 哈利小叔一獎（一般方案｜報名費$100）：哈利小叔一獎　餐費 NT$300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 方案與抽獎機制 -->
      <section class="max-w-4xl mx-auto mb-16 fade-in-up">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">🎯 報名方案與抽獎機制</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/95">

            <!-- 卡片：方案（一般） -->
            <div class="rounded-2xl bg-white/10 p-6 card-hover">
              <div class="text-xl font-bold mb-1">一般方案｜報名費$100</div>
              <p class="mb-2">16:25–16:30 最終抽｜獎品：哈利小叔一獎　餐費 NT$300｜名額：1 名</p>
              <ul class="list-disc pl-5 text-base space-y-1 mb-4">
                <li>事先轉帳完成方具抽獎資格</li>
                <li>不重複得獎</li>
              </ul>
              <button
                class="px-4 py-2 rounded-full bg-white text-[#6C63FF] font-semibold hover:scale-105 transition"
                @click="showPlanAModal = true"
              >了解一般方案</button>
            </div>

            <!-- 卡片：方案（AI保佑我） -->
            <div class="rounded-2xl bg-white/10 p-6 card-hover">
              <div class="text-xl font-bold mb-1">AI保佑我方案｜報名費$200</div>
              <p class="mb-2">15:30 哈利小叔加碼獎抽｜獎品：哈利小叔加碼獎　Claude Pro 一個月 NT$650｜名額：1 名</p>
              <ul class="list-disc pl-5 text-base space-y-1 mb-4">
                <li>事先轉帳完成方具抽獎資格</li>
                <li>不重複得獎</li>
              </ul>
              <button
                class="px-4 py-2 rounded-full bg-white text-[#6C63FF] font-semibold hover:scale-105 transition"
                @click="showPlanBModal = true"
              >了解 AI保佑我方案</button>
            </div>

            <!-- 卡片：規則／獎金池（跨兩欄） -->
            <div class="rounded-2xl bg-white/10 p-6 md:col-span-2 card-hover">
              <div class="text-xl font-bold mb-1">抽獎規則</div>
              <ul class="list-disc pl-5 text-base space-y-1 mb-4">
                <li>每人限擇一方案，皆為事先轉帳報名。</li>
                <li>名額：15:30 哈利小叔加碼獎 1 名（AI保佑我方案）｜16:25–16:30 哈利小叔一獎 1 名（一般方案），不重複得獎。</li>
                <li>報名後恕不退費，可轉讓名額予親友。</li>
              </ul>
              <button
                class="px-4 py-2 rounded-full bg-white/90 text-[#6C63FF] font-semibold hover:scale-105 transition"
                @click="showRulesModal = true"
              >抽獎規則</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 付款方式 -->
      <section class="max-w-4xl mx-auto mb-16 fade-in-up">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">💳 付款方式</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/95 text-lg leading-relaxed">
            <div class="rounded-2xl bg-white/10 p-6 card-hover">
              <p class="font-semibold mb-2">報名與退款政策</p>
              <ul class="list-disc pl-6 space-y-1 text-base md:text-lg">
                <li>本活動僅支援事先轉帳，不提供現場支付。</li>
                <li>完成轉帳＋送出下方 Google 表單 = 報名成功。</li>
                <li>若報名後因事不克出席，敬請見諒恕不退費；建議可轉讓名額予親友參與。</li>
              </ul>
            </div>
            <div class="rounded-2xl bg-white/10 p-6 card-hover">
              <p class="font-semibold mb-2">轉帳支付（請直接依下列資訊匯款）</p>
              <ul class="list-disc pl-6 space-y-1 text-base md:text-lg">
                <li>戶名：范綱栓</li>
                <li>銀行：中國信託（代碼 822）</li>
                <li>分行：竹北分行（1034）</li>
                <li>帳號：034540158873</li>
                <li>聯絡電話：0933974490</li>
                <li>完成轉帳後，請在下方 Google 表單填寫「匯款後五碼」與「報名方案」。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 禮物規則 -->
      <section class="max-w-4xl mx-auto mb-16 fade-in-up">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">🎁 禮物規則</h2>
          <div class="space-y-4 text-white/95 text-lg leading-relaxed">
            <p class="font-semibold">
              不限主題、不限價格（建議 300–500 元）
            </p>
            <p>
              歡迎：創意工具、書籍、設計小物、靈感卡牌、限定週邊等（需為全新或近新品，外觀完整）
            </p>
            <p>
              避免：損壞或功能不全、過期／開封食品或化妝品、二手貼身／衛生用品、企業贈品清倉、明顯瑕疵或有氣味之物
            </p>
            <p class="font-medium">
              建議用心挑選，以全新或近新品為主。
            </p>
          </div>
        </div>
      </section>

      <!-- 雨天備案 -->
      <section class="max-w-4xl mx-auto mb-16 fade-in-up">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">☔ 雨天備案：鱗翅與靈魂的交換前導</h2>
          <div class="space-y-4 text-white/95 text-lg leading-relaxed">
            <p>
              若當天下雨，我們將把前導活動移至：
            </p>
            <div class="space-y-2 pl-4 border-l-4 border-white/30">
              <p><span class="font-semibold">📍</span> 國立台灣博物館（本館）</p>
              <p><span class="font-semibold">🕒</span> 14:30 集合</p>
              <p><span class="font-semibold">💰</span> 全票30元，學生票15元</p>
            </div>
            <div class="mt-6">
              <p class="font-semibold mb-2">🔍 特展｜島嶼飛行：臺灣蝶蛾生存記</p>
              <p>
                超過 300 件蝶蛾標本，從夜行、擬態到光害，根本就像我們這些案場人生的縮影。
              </p>
              <p class="mt-2">
                雨天也要飛行，躲雨也能交流。請留意活動前一天 Email／IG 限時通知！
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 誰適合參加 -->
      <section class="max-w-4xl mx-auto mb-16 fade-in-up">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">🙋‍♀️ 誰適合參加？</h2>
          <ul class="space-y-3 text-white/95 text-lg">
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>自由工作者、接案人、創意產業從業者</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>想擺脫孤單與社交尷尬，用一杯咖啡＋輕鬆聊天找到共鳴的人</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">•</span>
              <span>想把這一年的 chaos 化為創意連結的人</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- 活動特色 -->
      <section class="max-w-4xl mx-auto mb-16 fade-in-up">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">✅ 活動特色</h2>
          <div class="grid md:grid-cols-2 gap-4 text-white/95 text-lg">
            <div class="flex items-start">
              <span class="text-2xl mr-3">🧃</span>
              <span>小型、輕鬆、無壓力社交</span>
            </div>
            <div class="flex items-start">
              <span class="text-2xl mr-3">📷</span>
              <span>有拍照、有吐槽、有溫度</span>
            </div>
            <div class="flex items-start">
              <span class="text-2xl mr-3">🧠</span>
              <span>有趣的交換環節、暖心的結尾分享</span>
            </div>
            <div class="flex items-start">
              <span class="text-2xl mr-3">💬</span>
              <span>可匿名參加（但不匿名交換禮物 XD）</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 報名方式 -->
      <section class="max-w-4xl mx-auto mb-16 fade-in-up">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">📌 報名方式</h2>
          <div class="space-y-4 text-white/95 text-lg mb-8">
            <p>👉 本活動 限額 12 人，填寫下方表單報名參加！</p>
            <p>👉 活動費用自理（餐廳自由點餐，餐點費用約 300 元上下），無額外報名費</p>
            <p>👉 填完表單後，我們會寄送詳細提醒信件！</p>
            <p>👉 本活動僅支援事先轉帳：請依下方帳號匯款，並在表單填寫「匯款後五碼」與「報名方案」。</p>
            <p>👉 請在表單選擇一般方案（$100）或 AI保佑我方案（$200）；完成轉帳即視為報名成功（若因事不克出席，敬請見諒恕不退費，可轉讓名額）。</p>
          </div>
          <a
            href="https://forms.gle/56esaLJvPCgTh4nN6"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-white text-[#6C63FF] font-bold text-xl px-8 py-4 rounded-full hover:scale-110 hover:shadow-2xl transition-all duration-300 transform"
            @click="handleRegisterClick"
          >
            我要報名
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import BubbleBackground from './BubbleBackground.vue'

const handleRegisterClick = () => {
  // 可以在这里添加追踪代码
  console.log('User clicked registration button')
}

const isGsapLoaded = ref(false)
const showPlanAModal = ref(false)
const showPlanBModal = ref(false)
const showRulesModal = ref(false)

onMounted(() => {
  // 检查 GSAP 是否加载
  if (typeof window !== 'undefined' && window.gsap) {
    try {
      isGsapLoaded.value = true
      const gsap = window.gsap

      // 立即设置初始状态为不可见，准备动画（在 CSS 动画开始前）
      gsap.set('.fade-in', { opacity: 0, y: -30, clearProps: 'animation' })
      gsap.set('.fade-in-up', { opacity: 0, y: 30, clearProps: 'animation' })

      // 使用 requestAnimationFrame 确保在下一帧执行动画
      requestAnimationFrame(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            // 确保动画完成后元素可见
            gsap.set('.fade-in, .fade-in-up', { opacity: 1 })
          }
        })

        // 淡入动画 - 標題區塊
        tl.to('.fade-in', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        })

        // 向上淡入动画（延迟）- 內容區塊
        tl.to('.fade-in-up', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }, '-=0.5')
      })
    } catch (error) {
      // 如果 GSAP 执行失败，确保元素可见（CSS 动画会处理）
      console.warn('GSAP animation failed, falling back to CSS:', error)
      isGsapLoaded.value = false
    }
  } else {
    // GSAP 未加载时，CSS 动画会自动处理
    isGsapLoaded.value = false
  }
})
</script>

<style scoped>
/* 默认状态：元素初始不可见，通过动画显示 */
.fade-in {
  opacity: 0;
  /* CSS 动画作为后备 */
  animation: fadeIn 1s ease-out forwards;
}

.fade-in-up {
  opacity: 0;
  /* CSS 动画作为后备 */
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.delay-1000 {
  animation-delay: 1s;
}

.delay-2000 {
  animation-delay: 2s;
}

/* ----- Modal styles (參考提供設計) ----- */
.modal-card {
  position: relative;
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
}

.modal-a {
  background: linear-gradient(180deg, #fde68a 0%, #f59e0b 100%);
}

.modal-b {
  background: linear-gradient(180deg, #e9d5ff 0%, #a78bfa 100%);
}

.modal-info {
  background: linear-gradient(180deg, #fff7ed 0%, #ffffff 100%);
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 14px;
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  line-height: 28px;
  text-align: center;
  font-size: 20px;
  color: #475569;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.modal-note {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 20px;
}

.btn-gradient-orange {
  width: 100%;
  color: #fff;
  font-weight: 700;
  padding: 12px 16px;
  border-radius: 12px;
  background: linear-gradient(90deg, #fb923c 0%, #f97316 100%);
  box-shadow: 0 12px 30px rgba(249, 115, 22, 0.35);
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.btn-gradient-purple {
  width: 100%;
  color: #fff;
  font-weight: 700;
  padding: 12px 16px;
  border-radius: 12px;
  background: linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%);
  box-shadow: 0 12px 30px rgba(124, 58, 237, 0.35);
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.btn-gradient-orange:hover,
.btn-gradient-purple:hover {
  transform: translateY(-1px);
}

/* Modal enter animation */
.modal-enter {
  animation: modalEnter 200ms ease-out;
}

@keyframes modalEnter {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* CTA pulse */
.btn-gradient-orange,
.btn-gradient-purple {
  animation: ctaPulse 2.4s ease-in-out infinite;
}

@keyframes ctaPulse {
  0%, 100% { filter: brightness(1); box-shadow: inherit; }
  50% { filter: brightness(1.05); box-shadow: 0 16px 40px rgba(0,0,0,0.18); }
}

/* Mobile typography tweaks */
@media (max-width: 640px) {
  .modal-card h3 { font-size: 1.25rem; }
  .modal-card .modal-note { font-size: 0.95rem; }
  .modal-card .emoji-icon { font-size: 1.75rem; }
}

/* Emoji bounce + glow */
.emoji-icon {
  position: relative;
  display: inline-block;
  animation: emojiBounce 2.2s ease-in-out infinite;
}

.modal-a .emoji-icon::after,
.modal-b .emoji-icon::after,
.modal-info .emoji-icon::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 64px;
  height: 64px;
  transform: translate(-50%, -50%);
  border-radius: 9999px;
  filter: blur(12px);
  opacity: 0.55;
  animation: emojiGlow 2.2s ease-in-out infinite;
  z-index: -1;
}

.modal-a .emoji-icon::after { background: radial-gradient(closest-side, rgba(251,146,60,0.9), rgba(251,146,60,0.15), transparent); }
.modal-b .emoji-icon::after { background: radial-gradient(closest-side, rgba(167,139,250,0.9), rgba(167,139,250,0.15), transparent); }
.modal-info .emoji-icon::after { background: radial-gradient(closest-side, rgba(252,211,77,0.9), rgba(252,211,77,0.15), transparent); }

@keyframes emojiBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@keyframes emojiGlow {
  0%, 100% { opacity: 0.45; filter: blur(10px); }
  50% { opacity: 0.8; filter: blur(14px); }
}
</style>

