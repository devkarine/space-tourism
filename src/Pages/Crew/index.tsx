import { useEffect, useState } from 'react';
import crewData from './crew.json';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import * as S from './styled';
import { Pagination } from '../../components/Pagination';

interface CrewData {
  image: string;
  role: string;
  name: string;
  description: string;
}

export const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(0);
  const [crews, setCrews] = useState<CrewData[]>([]);

  useEffect(() => {
    const crewArray = Object.values(crewData) as CrewData[];
    setCrews(crewArray);
  }, []);

  const handleTabClick = (index: number) => {
    setSelectedCrew(index);
  };

  const crew = crews[selectedCrew];

  return (
    <S.Container>
      <Header />
      <S.CrewContent>
        <Title position="02" text="MEET YOUR CREW" variant="secondary" />
        {crew && (
          <S.MainContent>
            <S.WrapperCrew>
              <div>
                <S.RoleCrew>{crew.role.toLocaleUpperCase()}</S.RoleCrew>
                <S.NameCrew>{crew.name.toLocaleUpperCase()} </S.NameCrew>
                <S.DescriptionCrew>{crew.description}</S.DescriptionCrew>
              </div>
              <S.PaginationWrapper>
                {crews.map((_, index) => (
                  <Pagination
                    key={index}
                    onClick={() => handleTabClick(index)}
                    variant="primary"
                    size="small"
                    isSelected={index === selectedCrew}
                  />
                ))}
              </S.PaginationWrapper>
            </S.WrapperCrew>
            <S.ImgCrew>
              <img src={crew.image} alt={crew.name} />
            </S.ImgCrew>
          </S.MainContent>
        )}
      </S.CrewContent>
    </S.Container>
  );
};
