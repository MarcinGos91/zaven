export type nullOrString = null | string

export type characterType = {
  id: number
  name: string
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string
  episode: string[],
  url: string
  created: string
}

export type pageType = {
  data: {
    info: {
      count: number,
      next: nullOrString,
      pages: number,
      prev: nullOrString,
    }
    results:characterType[]
  }
} 


