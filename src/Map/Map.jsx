import { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

function Map() {
  const mapDiv = useRef(null);
  useEffect(() => {
    if (mapDiv.current) {
      const map = new WebMap({
        basemap: "topo-vector"
      });
      const view = new MapView({
        container: mapDiv.current,
        map: map,
        zoom: 4,
        center: [-122.4194, 37.7749]
      });
      const layer = new FeatureLayer({
        // URL to the service
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/0"
        });
        map.add(layer);
    }
  }, []);
  return <div className="mapDiv" ref={mapDiv}></div>;
}

export default Map