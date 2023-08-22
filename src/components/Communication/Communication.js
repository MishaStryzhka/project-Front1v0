import Loader from 'components/Loader/Loader';
import Image from 'images/Loader.png';

const Communication = () => {
  return (
    <>
      <p>Communication</p>
      <Loader height={300} width={300} $urlImage={Image} />
      <Loader height={100} width={100} $urlImage={Image} />
      <Loader height={20} width={20} $urlImage={Image} />
    </>
  );
};

export default Communication;
