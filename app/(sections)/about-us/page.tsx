import Banner from "../../homeSections/Banner";
import models from "../../../components/indexComponents"
import WhoAreWe from "./who-are-we"
import VisionandMision from "./vision-and-mision"


const { SectionDivider } = models;
// Product page
export default function Page() {
  return (
    <div>
    <Banner />
    {/* GUIPIL DIVIDER */}
    <SectionDivider />

    <WhoAreWe/>

    <VisionandMision/>

    </div>
   
  );
}
