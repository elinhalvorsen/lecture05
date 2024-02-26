import { useContext, useEffect } from "react";
import { MapContext } from "./MapContext";
import Layer from "ol/layer/Layer";
const useLayer = (layer: Layer, checked: boolean) => {
  const { setVectorLayers } = useContext(MapContext);

  useEffect(() => {
    if (checked) {
      setVectorLayers((old) => [...old, layer]);
    }
    return () => setVectorLayers((old) => old.filter((l) => l !== layer));
  }, [checked]);
};
export default useLayer;
