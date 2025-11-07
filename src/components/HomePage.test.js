import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomePage from './HomePage.vue'

describe('活動網頁測試', () => {
  it('應該正確顯示活動主標題', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.text()).toContain('接案鬼故事・年底交換禮物小聚')
  })

  it('應該正確跳轉到報名表單', () => {
    const wrapper = mount(HomePage)
    const link = wrapper.find('a[href*="forms.gle"]')
    expect(link.exists()).toBe(true)
    expect(link.text()).toContain('我要報名')
    expect(link.attributes('target')).toBe('_blank')
  })

  it('應該可以顯示雨天備案區塊', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.text()).toContain('☔ 雨天備案')
  })

  it('應該顯示活動時間資訊', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.text()).toContain('📅 活動資訊')
    expect(wrapper.text()).toContain('2024 年 11 月 30 日')
  })

  it('應該顯示活動流程', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.text()).toContain('🎁 活動流程')
    expect(wrapper.text()).toContain('交換禮物')
  })

  it('應該顯示活動風格與禮物建議', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.text()).toContain('🎨 活動風格與禮物建議')
  })

  it('應該顯示雨天備案詳細資訊', () => {
    const wrapper = mount(HomePage)
    const rainPlan = wrapper.find('#rain-plan')
    expect(rainPlan.exists()).toBe(true)
    expect(rainPlan.text()).toContain('島嶼飛行 — 臺灣蝶蛾生存記')
    expect(rainPlan.text()).toContain('國立台灣博物館')
  })

  it('應該有正確的漸層背景樣式', () => {
    const wrapper = mount(HomePage)
    const rootDiv = wrapper.find('div')
    expect(rootDiv.classes()).toContain('bg-gradient-to-b')
    expect(rootDiv.classes()).toContain('from-[#6C63FF]')
    expect(rootDiv.classes()).toContain('to-[#00C9FF]')
  })
})
