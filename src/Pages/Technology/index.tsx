import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Title } from '../../components/Title';
import * as S from './styled';
import technologyData from './technology.json';

interface TechnologyData {
  image_small: string;
  image_large: string;
  title: string;
  description: string;
}

export const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(0);
  const [technologys, setTechnologys] = useState<TechnologyData[]>([]);

  useEffect(() => {
    const technologyArray = Object.values(technologyData) as TechnologyData[];
    setTechnologys(technologyArray);
  }, []);

  const handleTabClick = (index: number) => {
    setSelectedTechnology(index);
  };

  const technology = technologys[selectedTechnology];

  return (
    <S.Container>
      <Header />

      <S.WrapperTecnology>
        <Title position="03" text="SPACE LAUNCH 101" variant="secondary" />
        {technology && (
          <S.Main>
            <S.PaginationContent>
              {technologys.map((_, index) => (
                <Pagination
                  key={index}
                  onClick={() => handleTabClick(index)}
                  variant="secondary"
                  size="large"
                  isSelected={index === selectedTechnology}
                  index={index + 1}
                />
              ))}
            </S.PaginationContent>

            <S.TechnologyContent>
              <h2>THE TERMINOLOGY…</h2>
              <h3>{technology.title.toLocaleUpperCase()}</h3>
              <p>{technology.description}</p>
            </S.TechnologyContent>

            <S.ImgTechnology>
              <img src={technology.image_large} alt={technology.title} />
            </S.ImgTechnology>
          </S.Main>
        )}
      </S.WrapperTecnology>
    </S.Container>
  );
};
