import { LoaderWraper, Spinner } from './Loader.styled';

// ============================

// import Loader from 'components/Loader/Loader';
// import Image from 'images/Loader.png';

// <Loader height={300} width={300} $urlImage={Image} />
// <Loader height={100} width={100} $urlImage={Image} />
// <Loader height={20} width={20} $urlImage={Image} />

// ============================

const Loader = ({ width, height, $urlImage, colorParent, className }) => {
  console.log('urlImage', $urlImage);

  return (
    <LoaderWraper
      width={width}
      height={height}
      $urlImage={$urlImage}
      className={className}
    >
      <Spinner
        width={width}
        height={height}
        $colorParent={colorParent}
      ></Spinner>
    </LoaderWraper>
  );
};

export default Loader;
