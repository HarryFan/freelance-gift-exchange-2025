<template>
  <div ref="container" class="absolute inset-0 overflow-hidden pointer-events-none"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const container = ref(null)
let resizeObserver

onMounted(() => {
  const bubbleCount = 15
  const colors = ['#6C63FF', '#00C9FF', '#FFFFFF']
  const bubbles = []

  const createBubble = () => {
    const bubble = document.createElement('div')
    bubble.className = 'bubble'
    container.value.appendChild(bubble)
    bubbles.push(bubble)
    return bubble
  }

  const animateBubble = (bubble) => {
    const size = gsap.utils.random(30, 120)
    const startX = gsap.utils.random(0, window.innerWidth)
    const startY = gsap.utils.random(window.innerHeight, window.innerHeight * 1.5)
    const duration = gsap.utils.random(8, 15)
    const color = gsap.utils.random(colors)

    gsap.set(bubble, {
      width: size,
      height: size,
      x: startX,
      y: startY,
      backgroundColor: color,
      opacity: 0,
      boxShadow: `0 0 15px ${color}, 0 0 30px ${color}`
    })

    gsap.to(bubble, {
      y: -size,
      x: '+=random(-100, 100)',
      opacity: gsap.utils.random(0.3, 0.7),
      duration: duration,
      ease: 'none',
      repeat: -1,
      delay: gsap.utils.random(0, 10),
      onRepeat: () => {
        const newSize = gsap.utils.random(30, 120)
        const newStartX = gsap.utils.random(0, window.innerWidth)
        gsap.set(bubble, {
          width: newSize,
          height: newSize,
          x: newStartX,
          y: window.innerHeight + newSize,
        })
      }
    })
  }

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = createBubble()
    animateBubble(bubble)
  }

  const handleResize = () => {
    gsap.killTweensOf('.bubble')
    bubbles.forEach(bubble => {
      animateBubble(bubble)
    })
  }

  resizeObserver = new ResizeObserver(handleResize)
  resizeObserver.observe(container.value)
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
  gsap.killTweensOf('.bubble')
})
</script>

<style>
.bubble {
  position: absolute;
  border-radius: 50%;
  filter: blur(10px);
  will-change: transform, opacity;
}
</style>
