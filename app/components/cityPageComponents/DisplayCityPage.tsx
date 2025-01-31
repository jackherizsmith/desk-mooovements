'use client';

import { useEffect, useState } from 'react';

import { Heading, Flex } from '@radix-ui/themes';
import { CityData } from '@/app/utils/types';
import { DisplayPlaceCard } from '@/app/components/DisplayPlaceCard';
import FilterButtons from './FilterButtons';
import CityHeader from './CityHeader';

export default function DisplayCityPage({
  city,
  workSpacesData,
  trueAmenitiesWithId,
}: CityData) {
  const [selectedFilter, setSelectedFilter] = useState('all') as any;
  const [workSpaceState, setWorkSpaceState] = useState(workSpacesData);
  useEffect(() => {
    const filteredWorkspace = workSpacesData.filter((space: any) => {
      if (selectedFilter === 'all') return true;
      return space[`${selectedFilter}`];
    });
    setWorkSpaceState(filteredWorkspace);
  }, [selectedFilter, workSpacesData]);

  return (
    <>
      <Flex direction='column' gap='3' align='center'>
        {city && city.length > 0 ? (
          <>
            <CityHeader data-testid='city-header' city={city} />
            <FilterButtons setSelectedFilter={setSelectedFilter} />

            <Heading data-testid='city-workspaces' as='h2' size='5'>
              {workSpacesData && workSpaceState.length} Work Spaces
            </Heading>
            <div data-testid='place-card-container'>
              {workSpacesData &&
                workSpaceState.map((space) => (
                  <DisplayPlaceCard
                    key={space.name}
                    pageRoute={`places/${space.id}`}
                    imageLink={space.image}
                    placeName={space.name}
                    flavourText={space.address}
                    amenityList={`${trueAmenitiesWithId?.find(
                      (amenity) =>
                        amenity.id === (space.id as unknown as string)
                    )?.amenities}`}
                  />
                ))}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Flex>
    </>
  );
}
