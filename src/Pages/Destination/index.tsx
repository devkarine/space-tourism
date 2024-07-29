import { useState, useEffect } from 'react';
import * as S from './styled';
import { ImgDestination } from '../../components/ImgDestination';
import { TabNavDestination } from '../../components/TabNav/TabNavDestination';
import { Title } from '../../components/Title';
import destinationsData from './destinations.json';
import { Header } from '../../components/Header';

interface DestinationData {
  image: string;
  title: string;
  description: string;
  distance: string;
  travelTime: string;
}

export const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState('moon');
  const [destinations, setDestinations] = useState<{
    [key: string]: DestinationData;
  }>({});

  useEffect(() => {
    setDestinations(destinationsData);
  }, []);

  const handleTabClick = (destination: string) => {
    setSelectedDestination(destination);
  };

  const destination = destinations[selectedDestination];

  return (
    <S.Container>
      <Header />
      <S.DestinationContent>
        <Title position="01" text="PICK YOUR DESTINATION" variant="secondary" />
        {destination && (
          <S.MainContent>
            <section>
              <ImgDestination src={destination.image} alt={destination.title} />
            </section>

            <section>
              <TabNavDestination onTabClick={handleTabClick} />

              <S.WrapperDestinations>
                <Title text={destination.title} variant="primary" />
                <S.DestinationDescription>
                  {destination.description}
                </S.DestinationDescription>
                <S.Distance>
                  <div>
                    <p>AVG. DISTANCE</p>
                    <span>{destination.distance.toLocaleUpperCase()}</span>
                  </div>
                  <div>
                    <p>EST. TRAVEL TIME</p>
                    <span>{destination.travelTime.toLocaleUpperCase()}</span>
                  </div>
                </S.Distance>
              </S.WrapperDestinations>
            </section>
          </S.MainContent>
        )}
      </S.DestinationContent>
    </S.Container>
  );
};
