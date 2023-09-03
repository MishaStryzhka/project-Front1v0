import { useParams } from 'react-router-dom';

const DirectionPage = () => {
  const { direction } = useParams();

  return <p>{direction}</p>;
};

export default DirectionPage;
