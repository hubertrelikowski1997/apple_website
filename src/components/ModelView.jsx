import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import Iphone from "./Iphone";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index === 2} ? 'right-[[100%]]' : ''`}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls />

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large'`}
        position={(0, 0, 0)}
      >
        <Suspense fallback={<div>Loading</div>}>
          <Iphone />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;