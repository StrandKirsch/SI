<template>
  <div class="entry-screen" @click="$emit('enter')">
    <div class="entry-content">
      <div class="terminal-prompt">
        <span class="prompt-bracket">[</span>
        <span class="prompt-text" ref="promptRef">ENTER</span>
        <span class="prompt-bracket">]</span>
      </div>
      <div class="subtitle">THE BACKROOMS · LEVEL BROWSER</div>
      <div class="hint">CLICK TO NO-CLIP</div>
    </div>
    <div class="entry-vignette"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGlitchText } from '../composables/useGlitchText.js'

defineEmits(['enter'])

const promptRef = ref(null)
useGlitchText(promptRef, { intervalMin: 100, intervalMax: 220, maxOffset: 3, bigGlitchChance: 0.06, bigGlitchMax: 10 })
</script>

<style scoped>
.entry-screen {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: var(--bg-deep);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}

.entry-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.entry-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, var(--bg-deep) 80%);
  pointer-events: none;
}

.terminal-prompt {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 28px;
}

.prompt-bracket {
  font-family: 'Inter', 'SF Pro Display', sans-serif;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 200;
  color: var(--text-dim);
  transition: color 0.4s;
}

.entry-screen:hover .prompt-bracket {
  color: var(--accent-orange);
}

.prompt-text {
  font-family: 'Inter', 'SF Pro Display', sans-serif;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: 12px;
  text-transform: uppercase;
  transition: color 0.4s;
}

.entry-screen:hover .prompt-text {
  color: var(--accent-crimson);
}

.subtitle {
  font-family: 'JetBrains Mono', 'SF Mono', 'Courier New', monospace;
  font-size: clamp(0.65rem, 1.2vw, 0.85rem);
  color: var(--text-secondary);
  letter-spacing: 4px;
  margin-bottom: 56px;
  transition: color 0.4s;
}

.entry-screen:hover .subtitle {
  color: var(--accent-amber);
}

.hint {
  font-family: 'JetBrains Mono', 'SF Mono', 'Courier New', monospace;
  font-size: 0.7rem;
  color: var(--text-dim);
  letter-spacing: 4px;
  animation: hint-pulse 2.4s ease-in-out infinite;
}

@keyframes hint-pulse {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 0.6; }
}
</style>
