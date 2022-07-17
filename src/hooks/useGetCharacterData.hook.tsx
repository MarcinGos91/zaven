import axios  from 'axios';
import {useInfiniteQuery} from 'react-query';

const useGetCharacterData = () => {
  const {isLoading, isError, isSuccess, data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage} = useInfiniteQuery('fetch characters', 
  async ({pageParam = 1}) => await axios.get(`character?page=${pageParam}`),
  {
    getNextPageParam: (queryInfo, pages) => {
      const lastPage = queryInfo.data.info.pages;
      return pages.length < lastPage ? pages.length +1 : undefined;
    }
  })

  return ({isLoading, isError, isSuccess, data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage})
}

export default useGetCharacterData;