import  { useState, useEffect} from 'react';
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
  const [destinations, setDestinations] = useState<{ [key: string]: DestinationData }>({});

  useEffect(() => {
    setDestinations(destinationsData);
  }, []);

  const handleTabClick = (destination: string) => {
    setSelectedDestination(destination);
  };

  const destination = destinations[selectedDestination];

  return (
    <S.DestinationContent>
      <Header />
      <Title position="01" text="PICK YOUR DESTINATION" variant="secondary" />
      {destination && (
        <S.MainContent>
          <ImgDestination src={destination.image} alt={destination.title} />

          <section>
            <TabNavDestination onTabClick={handleTabClick} />

            <div>
              <Title text={destination.title} variant="primary" />
              <p>{destination.description}</p>
              <div>
                <div>
                  <p>AVG. DISTANCE</p>
                  <p>{destination.distance}</p>
                </div>
                <div>
                  <p>Est. travel time</p>
                  <p>{destination.travelTime}</p>
                </div>
              </div>
            </div>
          </section>
        </S.MainContent>
      )}
    </S.DestinationContent>
  );
};
