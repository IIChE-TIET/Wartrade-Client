import { useEffect } from "react"

const useTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title
    return () => {
      document.title = prevTitle
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useTitle
