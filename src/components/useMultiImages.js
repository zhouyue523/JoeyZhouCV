import { useState, useEffect } from 'react'

const EXTS = ['jpg', 'JPG', 'png', 'PNG', 'jpeg', 'JPEG', 'webp', 'WEBP']

function tryLoadImg(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = () => resolve(null)
    img.src = src
  })
}

export function useMultiImages(basePath, max = 40) {
  const [images, setImages] = useState([])

  useEffect(() => {
    let cancelled = false
    const found = []
    let stopped = false

    async function discover() {
      for (let i = 0; i < max; i++) {
        if (cancelled || stopped) break
        let loaded = null
        for (const ext of EXTS) {
          const path =
            i === 0
              ? `/images/${basePath}.${ext}`
              : `/images/${basePath}-${i}.${ext}`
          loaded = await tryLoadImg(path)
          if (loaded) break
        }
        if (loaded) {
          found.push(loaded)
        } else if (i > 0) {
          stopped = true
        }
      }
      if (!cancelled) setImages(found)
    }

    discover()

    return () => {
      cancelled = true
    }
  }, [basePath, max])

  return images
}
