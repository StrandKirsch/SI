import { defineComponent, h, shallowRef, watch } from 'vue'
import { useRouter } from 'vue-router'
import LevelPage from './LevelPage.vue'
import AuthorSidebar from '../components/AuthorSidebar.vue'

const levelModules = import.meta.glob('./Level[0-9]*.vue')

export default defineComponent({
  name: 'LevelLoader',
  props: {
    id: { type: String, required: true }
  },
  setup(props) {
    const router = useRouter()
    const component = shallowRef(null)
    const loading = shallowRef(true)

    async function loadLevel(id) {
      loading.value = true
      component.value = null

      const key = `./Level${id}.vue`
      const loader = levelModules[key]

      if (loader) {
        try {
          const mod = await loader()
          component.value = mod.default
        } catch (e) {
          console.error(`Failed to load level ${id}:`, e)
          // Fallback to LevelPage.vue on load error
          component.value = LevelPage
        }
      } else {
        // No custom Level component — use generic LevelPage.vue (reads from levels.js)
        component.value = LevelPage
      }
      loading.value = false
    }

    loadLevel(props.id)
    watch(() => props.id, (newId) => loadLevel(newId))

    function goBack() {
      sessionStorage.setItem('skipIntro', '1')
      router.push('/')
    }

    return () => {
      if (loading.value) {
        return h('div', {
          style: {
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            minHeight: '100vh', fontFamily: 'Inter, sans-serif',
            fontSize: '1.25rem', color: '#999', background: '#f7f7f7'
          }
        }, 'Loading...')
      }
      if (!component.value) {
        return h('div', {
          style: {
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', minHeight: '100vh', gap: '20px',
            fontFamily: 'Inter, sans-serif', background: '#f7f7f7', padding: '40px'
          }
        }, [
          h('h1', { style: { fontSize: '3rem', fontWeight: 900, color: '#000' } }, `SI-${props.id}`),
          h('p', { style: { fontSize: '1.25rem', color: '#666' } }, 'Level Not Found'),
          h('p', { style: { fontSize: '1rem', color: '#999' } }, `No data available for SI-${props.id}. Create a Level${props.id}.vue file in the LEVEL folder to add this level.`),
          h('button', {
            onClick: goBack,
            style: {
              padding: '12px 24px', background: '#000', color: '#fff',
              border: 'none', borderRadius: '8px', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 500,
              marginTop: '20px'
            }
          }, '← Back to Index')
        ])
      }
      return h('div', { class: 'level-layout' }, [
        h(AuthorSidebar, { currentLevelId: Number(props.id) }),
        h('div', { class: 'level-main' }, [
          h(component.value, { id: props.id })
        ])
      ])
    }
  }
})
