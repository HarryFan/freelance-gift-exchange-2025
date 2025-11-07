<template>
  <div ref="rootEl" class="min-h-screen bg-gradient-to-b from-[#6C63FF] to-[#00C9FF] text-white font-sans">
    <header class="text-center py-10 px-4">
      <h1 class="text-4xl md:text-5xl font-extrabold animate-bounce mb-3">接案鬼故事｜年底交換禮物小聚</h1>
      <p class="text-sm text-gray-200 mb-4">Freelance Gift Exchange 2025</p>
      <p class="text-lg md:text-xl mt-2 font-medium">送出你想告別的禮物，換回一點我們都懂的療癒</p>
      <p class="text-base md:text-lg mt-2 italic">用禮物打開話題，用故事連結人心</p>
    </header>

    <main class="max-w-4xl mx-auto px-4 pb-10">
      <!-- 活動簡介 -->
      <section class="bg-white/95 backdrop-blur text-gray-800 p-6 md:p-8 rounded-2xl shadow-lg mb-10">
        <h2 class="text-2xl font-bold mb-4 text-center">🧭 活動簡介</h2>
        <div class="space-y-3 text-gray-700 leading-relaxed">
          <p>每年年底，都該有點小儀式，替這一年瘋狂又真實的接案人生，畫下一個「好啦算了我選擇原諒」的句點。</p>
          <p>我們邀請你，帶來一份「你願意分享」的禮物，或是「你很想送走」的東西。不限價值、不限風格，只要你願意講出它背後的故事，我們就想聽。</p>
          <p class="font-medium text-purple-700">這是一場溫柔的交換，也是一場自由接案人生的對話。</p>
        </div>
      </section>

      <!-- 活動資訊 -->
      <section class="bg-white/95 backdrop-blur text-gray-800 p-6 md:p-8 rounded-2xl shadow-lg mb-10">
        <h2 class="text-2xl font-bold mb-4">📅 活動資訊</h2>
        <div class="space-y-2">
          <div class="flex items-start">
            <span class="font-bold min-w-[120px]">活動時間｜</span>
            <span>2024 年 11 月 30 日（日）</span>
          </div>
          <div class="flex items-start">
            <span class="font-bold min-w-[120px]">前導集合｜</span>
            <span>下午 14:30，二二八和平公園（靠近館前路入口－國立台灣博物館前集合）</span>
          </div>
          <div class="flex items-start">
            <span class="font-bold min-w-[120px]">主活動時間｜</span>
            <span>下午 15:00 – 15:30</span>
          </div>
          <div class="flex items-start">
            <span class="font-bold min-w-[120px]">主活動地點｜</span>
            <span>Campus Cafe 館前店（台北市中正區館前路8號）</span>
          </div>
          <div class="flex items-start">
            <span class="font-bold min-w-[120px]">交流時間｜</span>
            <span>聚餐交流至 16:30，自由離席</span>
          </div>
        </div>
      </section>

      <!-- 活動流程 -->
      <section class="bg-white/95 backdrop-blur text-gray-800 p-6 md:p-8 rounded-2xl shadow-lg mb-10">
        <h2 class="text-2xl font-bold mb-4">🧾 活動流程</h2>
        <div class="space-y-3">
          <div class="flex items-start border-l-4 border-purple-500 pl-4 py-2">
            <span class="font-bold min-w-[140px] text-purple-700">14:30 – 14:50</span>
            <span>前導暖身：公園散步、閒聊＋暖場</span>
          </div>
          <div class="flex items-start border-l-4 border-blue-500 pl-4 py-2">
            <span class="font-bold min-w-[140px] text-blue-700">14:50 – 15:00</span>
            <span>一起移動至餐廳報到</span>
          </div>
          <div class="flex items-start border-l-4 border-pink-500 pl-4 py-2">
            <span class="font-bold min-w-[140px] text-pink-700">15:00 – 15:30</span>
            <span>🎁 交換禮物 + 簡短自我介紹</span>
          </div>
          <div class="flex items-start border-l-4 border-green-500 pl-4 py-2">
            <span class="font-bold min-w-[140px] text-green-700">15:30 – 16:30</span>
            <span>🍔 聚餐 + 自由交流（你要聊天、抱怨、約合作都可以）</span>
          </div>
        </div>
      </section>

      <!-- 禮物規則 -->
      <section class="bg-white/95 backdrop-blur text-gray-800 p-6 md:p-8 rounded-2xl shadow-lg mb-10">
        <h2 class="text-2xl font-bold mb-4">🎁 禮物規則</h2>
        <div class="space-y-3">
          <p><strong>不限主題、不限價格（建議300元上下）</strong></p>
          <p><strong>歡迎：</strong>創意工具、書籍、前東家週邊、廢物療癒小物、奇葩案子的紀念品</p>
          <p class="text-purple-700 font-medium">重點是「有故事」可分享，不用特別買，但帶誠意來！</p>
        </div>
      </section>

      <!-- 雨天備案 -->
      <section id="rain-plan" class="bg-blue-50 p-6 md:p-8 rounded-2xl shadow-lg mb-10 text-gray-800">
        <h2 class="text-2xl font-bold mb-4">☔ 雨天備案：鱗翅與靈魂的交換前導</h2>
        <p class="mb-4">若當天下雨，我們將把前導活動移至：</p>
        <div class="bg-white p-5 rounded-xl shadow-md border-2 border-blue-200">
          <h3 class="text-xl font-semibold mb-3 text-blue-900">🔍 特展｜島嶼飛行：臺灣蝶蛾生存記</h3>
          <div class="space-y-2 text-gray-700">
            <p><strong>📍 地點：</strong>國立台灣博物館（本館）</p>
            <p><strong>🕒 時間：</strong>14:30 集合</p>
            <p><strong>💰 票價：</strong>全票30元，學生票15元</p>
            <p class="pt-2">超過 <strong>300 件蝶蛾標本</strong>，從夜行、擬態到光害，根本就像我們這些案場人生的縮影。</p>
          </div>
        </div>
        <p class="mt-4 text-gray-700">雨天也要飛行，躲雨也能交流。請留意活動前一天 Email／IG 限時通知！</p>
      </section>

      <!-- 誰適合參加 -->
      <section class="bg-white/95 backdrop-blur text-gray-800 p-6 md:p-8 rounded-2xl shadow-lg mb-10">
        <h2 class="text-2xl font-bold mb-4">🙋‍♀️ 誰適合參加？</h2>
        <ul class="space-y-2 list-none">
          <li class="flex items-start">
            <span class="text-purple-600 mr-2">✓</span>
            <span>自由工作者、接案人、創意產業從業者</span>
          </li>
          <li class="flex items-start">
            <span class="text-purple-600 mr-2">✓</span>
            <span>想擺脫孤單與社交尷尬，用一杯咖啡＋一個故事找到共鳴的人</span>
          </li>
          <li class="flex items-start">
            <span class="text-purple-600 mr-2">✓</span>
            <span>想把這一年的 chaos 化為創意連結的人</span>
          </li>
        </ul>
      </section>

      <!-- 活動特色 -->
      <section class="bg-white/95 backdrop-blur text-gray-800 p-6 md:p-8 rounded-2xl shadow-lg mb-10">
        <h2 class="text-2xl font-bold mb-4">✅ 活動特色</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-center space-x-3">
            <span class="text-3xl">🧃</span>
            <span>小型、輕鬆、無壓力社交</span>
          </div>
          <div class="flex items-center space-x-3">
            <span class="text-3xl">📷</span>
            <span>有拍照、有吐槽、有溫度</span>
          </div>
          <div class="flex items-center space-x-3">
            <span class="text-3xl">🧠</span>
            <span>有趣的交換環節、暖心的結尾分享</span>
          </div>
          <div class="flex items-center space-x-3">
            <span class="text-3xl">💬</span>
            <span>可匿名參加（但不匿名交換禮物 XD）</span>
          </div>
        </div>
      </section>

      <!-- 報名方式 -->
      <section class="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 md:p-8 rounded-2xl shadow-lg mb-10">
        <h2 class="text-2xl font-bold mb-4 text-center">📌 報名方式</h2>
        <div class="space-y-3 text-center">
          <p class="text-lg">👉 本活動 <strong>限額 15 人</strong>，填寫下方表單報名參加！</p>
          <p>👉 活動費用自理（餐廳自由點餐），無額外報名費</p>
          <p>👉 填完表單後，我們會寄送詳細提醒信件！</p>
        </div>
      </section>

      <!-- CTA 按鈕 -->
      <section class="text-center mb-10">
        <a
          href="https://forms.gle/56esaLJvPCgTh4nN6"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xl font-bold px-10 py-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-purple-500/50 transform transition-all duration-300"
        >🎁 我要報名</a>
        <p class="text-white mt-4 text-sm">名額有限，先搶先贏！</p>
      </section>
    </main>

    <footer class="text-center text-sm text-white/80 py-6 border-t border-white/20">
      <p class="mb-2">© 2025 接案鬼故事 Freelance Gift Exchange</p>
      <p class="text-xs">用禮物打開話題，用故事連結人心</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const rootEl = ref(null)

onMounted(() => {
  const gsap = window && window.gsap ? window.gsap : null
  if (!gsap || !rootEl.value) return
  const items = rootEl.value.querySelectorAll('header, section, footer')
  gsap.set(items, { opacity: 0, y: 12 })
  items.forEach((el, i) => {
    gsap.to(el, { opacity: 1, y: 0, duration: 0.6, delay: 0.08 * i, ease: 'power2.out' })
  })
})
</script>
