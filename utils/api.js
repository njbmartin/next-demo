import fetch from 'isomorphic-unfetch'
import urljoin from 'url-join'
import getConfig from 'next/config'

export const getUrl = async (url) => {
    const { publicRuntimeConfig } = getConfig()
    
    console.log(new Date().toLocaleString())

    const fetchUrl = urljoin(publicRuntimeConfig.apiUrl, url)
    console.log('api', fetchUrl)
    const res = await fetch(fetchUrl)
    const json = await res.json()
    return json
}