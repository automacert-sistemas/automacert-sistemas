import { useEffect, useRef, useState } from 'react'

export default function useInView( options?: IntersectionObserverInit) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log('Is in view')
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.disconnect() //Disconnect on viewport
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return {ref,isInView}
}