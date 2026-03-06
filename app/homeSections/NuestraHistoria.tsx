import InfoSection1 from "./nuestraHistoriaSections/InfoSection1";
import InfoSection2 from "./nuestraHistoriaSections/InfoSection2";

import NuestraHistoriaBanner from "./nuestraHistoriaSections/NuestraHistoriaBanner";

const nuestraHistoria = () => {
  return (
    <div>

  {/* Our History's Banner  */}
   <NuestraHistoriaBanner />
   <InfoSection1 />
   <InfoSection2 />

  </div>
  );
};

export default nuestraHistoria;