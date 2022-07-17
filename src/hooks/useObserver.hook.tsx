import {useEffect, MutableRefObject} from 'react'

const useObserver = (fetchFunction: () => void, isLoading: boolean, observerRef: MutableRefObject<HTMLDivElement | null>, isSuccess: boolean) => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && isSuccess && !isLoading) fetchFunction()
    })
    observerRef?.current && observer.observe(observerRef.current)
  },[isLoading])

}

export default useObserver;