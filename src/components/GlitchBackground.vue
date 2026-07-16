<template>
  <div class="glitch-bg">
    <canvas ref="noiseCanvas" class="noise-canvas"></canvas>
    <div class="vignette"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNoise } from '../composables/useNoise.js'

const noiseCanvas = ref(null)
useNoise(noiseCanvas)
</script>

<style scoped>
.glitch-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.noise-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}

.vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
}
</style>
