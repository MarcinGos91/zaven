import React, {FunctionComponent, useRef } from 'react'
import { useGetCharacterData, useObserver, useGlobalContext} from '../hooks';
import { pageType, characterType} from '../ts/types';
import {Card} from '../components';
import { Loading, Error, NoSuchGuy} from '../pages'
import { ALL_CHARACTERS} from '../config/constants'

const Main:FunctionComponent = () => {

  const {isLoading, data, fetchNextPage, isError, isSuccess} = useGetCharacterData()
  const {filterValue, status} = useGlobalContext()
  const observerRef = useRef<HTMLDivElement | null>(null);
  useObserver(fetchNextPage, isLoading, observerRef, isSuccess)
  const handleLoadMore = () => {
    fetchNextPage()
  }

  if (isError) return <Error />
  if (isLoading || !data) return (<Loading />)

  const aggregatedCharacters = data.pages.reduce((total: characterType[], current: pageType) => [...total, ...current.data.results], [] as characterType[])
  const filteredByStatus = aggregatedCharacters.filter((character: characterType) => status===ALL_CHARACTERS ? true : character.status === status);
  const filteredCharacters = filteredByStatus.filter((singleCharacter: characterType) => {
    return filterValue ? singleCharacter.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()) : true;
  });
  
  return (
      <main className='global--container' >
        {filteredCharacters.length ? 
            <section className='characters' >
            {filteredCharacters?.map((singleCharacter: characterType) => 
              <Card name={singleCharacter.name} img={singleCharacter.image} status={singleCharacter.status} key={singleCharacter.id} />
            )}
          </section>
          :
          <NoSuchGuy loadMore={handleLoadMore} />
        }
        <div ref={observerRef} />
      </main>
    )
}

export default Main;