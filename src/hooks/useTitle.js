
import { useEffect } from 'react';

const useTitle = (title) => {

    useEffect(()=> {
        document.title = `${title}/NewsYatra`
    })
  return (
   null
  )
}

export default useTitle
