import { useState, useEffect } from 'react'

/**
 * @param {function} getData
 * @param {additional params for fetch function} params
 * @returns
 */

export const useFetch = (getData, params, condition = true) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const result = await getData(params)
        setData(result.data)
        setSuccess(true)
      } catch (error) {
        setError({ status: error.response.status, message: error.response.statusText })
      }
      setLoading(false)
    }

    if (condition) {
      fetchData()
    } else {
      loading && setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getData, params, condition])

  return [data, loading, error, success]
}

export default useFetch
