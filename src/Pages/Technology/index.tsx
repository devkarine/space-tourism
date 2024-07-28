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
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const technologyArray = Object.values(technologyData) as TechnologyData[];
    setTechnologys(technologyArray);
  }, []);

  useEffect(() => {
    const updateImageSrc = () => {
      const width = window.innerWidth;
      const imageKey = width <= 900 ? 'image_small' : 'image_large';
      const technology = technologys[selectedTechnology];
      if (technology) {
        setImageSrc(technology[imageKey]);
      }
    };

    updateImageSrc();

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.addEventListener('change', updateImageSrc);

    return () => {
      mediaQuery.removeEventListener('change', updateImageSrc);
    };
  }, [selectedTechnology, technologys]);

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
              <div>{technology.title.toLocaleUpperCase()}</div>
              <div>{technology.description}</div>
            </S.TechnologyContent>

            <div>
              <img src={imageSrc} alt={technology.title} />
            </div>
          </S.Main>
        )}
      </S.WrapperTecnology>
    </S.Container>
  );
};
