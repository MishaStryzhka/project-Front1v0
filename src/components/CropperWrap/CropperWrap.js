import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';

const CropperWrap = ({ yourImage, setCroppedArea }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  //   console.log('zoom', zoom);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
    setCroppedArea({ croppedArea });
  }, []);

  return (
    <Cropper
      image={yourImage}
      crop={crop}
      zoom={zoom}
      aspect={3 / 4}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
      zoomSpeed={0.1}
    />
  );
};

export default CropperWrap;
