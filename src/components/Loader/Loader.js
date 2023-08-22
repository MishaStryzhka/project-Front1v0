// import IconLoader from 'images/icons/IconLoader';
import { LoaderWraper, Spinner } from './Loader.styled';

const Loader = ({ width, height, $urlImage }) => {
  return (
    <LoaderWraper width={width} height={height} $urlImage={$urlImage}>
      <Spinner width={width} height={height}></Spinner>
    </LoaderWraper>
  );
};

export default Loader;
