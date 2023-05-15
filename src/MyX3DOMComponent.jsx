import { useEffect, useRef } from 'react';
import 'x3dom';

function MyX3DOMComponent() {
  const x3domRef = useRef(null);

  useEffect(() => {
    const x3domNode = x3domRef.current;

    const x3dMarkup = `
      <x3d width="400px" height="400px">
        <scene>
          <shape>
            <appearance>
              <material diffuseColor="1 0 0"></material>
            </appearance>
            <box size="4 4 4"></box>
          </shape>
        </scene>
      </x3d>
    `;

    x3domNode.innerHTML = x3dMarkup;
  }, []);

  return (
    <div>
      <div ref={x3domRef}></div>
    </div>
  );
}

export default MyX3DOMComponent;
