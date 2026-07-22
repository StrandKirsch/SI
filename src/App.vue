<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import portraitSrc from './assets/画像.svg'
// 预加载大体积 SVG，确保进入 sidestory 时已缓存
const preload = new Image()
preload.src = portraitSrc
</script>

<style>
:root {
  --color-black: #000000;
  --color-white: #ffffff;
  --color-off-white: #f7f7f7;
  --color-line: #171717;
  --font-family: 'Inter', 'Helvetica Neue', sans-serif;
  --radius-sm: 8px;
  --radius-md: 12px;
  --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.05);
  --shadow-card-hover: 0 8px 32px rgba(0, 0, 0, 0.12);
  --transition-fast: 0.2s ease;
  --transition-smooth: 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--color-black);
  user-select: none;
  -webkit-user-select: none;
}

#app * {
  user-select: none;
  -webkit-user-select: none;
}

/* 全局隐藏横向滚动条 */
* {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
*::-webkit-scrollbar {
  display: none;
}

#app {
  width: 100%;
  min-height: 100vh;
}

/* ── Level page layout (sidebar + content) ── */
.level-layout {
  display: flex;
  min-height: 100vh;
  background: var(--color-off-white);
}

.level-main {
  flex: 1;
  min-width: 0;
}

@media (max-width: 767px) {
  .level-layout {
    flex-direction: column;
  }
}
</style>