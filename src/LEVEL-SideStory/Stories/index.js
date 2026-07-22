// 自动扫描所有 story-数字-名字/chapter-数字.json
// 聚合成故事列表，每个故事包含若干章节段落

const chapterModules = import.meta.glob('./*/chapter-*.json', { eager: true })

const storyMap = {}

for (const [path, mod] of Object.entries(chapterModules)) {
  const match = path.match(/^\.\/(story-\d+-.+?)\/chapter-(\d+)\.json$/)
  if (!match) continue
  const storyKey = match[1]
  const chapterNum = parseInt(match[2], 10)
  const data = mod

  if (!storyMap[storyKey]) {
    storyMap[storyKey] = {
      id: storyKey,
      title: data.title,
      author: data.author,
      levelRef: data.levelRef || 'SI-???',
      subtitle: data.subtitle || '',
      chapters: [],
    }
  }

  storyMap[storyKey].chapters[chapterNum - 1] = {
    heading: data.heading,
    body: data.body,
  }
}

export const stories = Object.values(storyMap)
  .sort((a, b) => a.id.localeCompare(b.id))
  .map(story => ({
    id: story.id,
    title: story.title,
    author: story.author,
    levelRef: story.levelRef,
    subtitle: story.subtitle,
    sections: story.chapters.filter(Boolean),
  }))

export function getStoryById(id) {
  return stories.find(s => s.id === id) || null
}
