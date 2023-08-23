import { LoaderWraper, Spinner } from './Loader.styled';

const Loader = ({ width, height, urlImage, colorParent, className }) => {
  return (
    <LoaderWraper
      width={width}
      height={height}
      $urlImage={urlImage}
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
