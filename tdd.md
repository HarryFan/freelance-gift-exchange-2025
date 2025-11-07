# 🧪 TDD（Test-Driven Development）測試點建議

```tsx
describe("活動網頁測試", () => {
  it("應該正確顯示活動主標題", () => {
    render(<HomePage />);
    expect(screen.getByText("接案鬼故事・年底交換禮物小聚")).toBeInTheDocument();
  });

  it("應該正確跳轉到報名表單", () => {
    render(<HomePage />);
    const button = screen.getByText("我要報名");
    fireEvent.click(button);
    expect(window.location.href).toContain("forms.gle");
  });

  it("應該可以顯示雨天備案區塊", () => {
    render(<HomePage />);
    expect(screen.getByText("☔ 雨天備案")).toBeInTheDocument();
  });
});
```
