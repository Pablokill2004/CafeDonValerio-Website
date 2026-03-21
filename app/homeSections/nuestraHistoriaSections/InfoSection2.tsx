import models from "../../../components/indexComponents";

const { ModernBoxWithImage } = models;

const InfoSection2 = () => {
  return (
   <section className="bg-[#1F5476] px-6 my-16">
  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 py-6">

    {/* Vertical white line crossing both columns */}
    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px my-4 bg-white" />

    {/* ========= Col 1 ========= */}
    <div className="flex flex-col gap-6 py-4">
      {/* Box 1 */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
        <ModernBoxWithImage
          title="¿Qué hacen que el café guatemalteco sea único?"
          image="/images/Home_images/Lake_Atitlan_in_Guatemala.png"
          unoptimized
          backgroundBoxColor="bg-transparent"
        />
      </div>

      {/* Box 2 - left-aligned text */}
      <div className="w-full py-4 md:py-0 md:aspect-[16/10] flex items-center">
        <p className="pl-6 text-white font-body lg:text-lg">
          tempor. Maecenas venenatis venenatis quam,
          sit amet semper felis cursus sed. Etiam consectetur
          nunc consequat sollicitudin auctor. Curabitur tincidunt,
          neque et efficitur pellentesque, ligula augue elementum
          elit, et sollicitudin dui diam in leo. Cras vitae blandit
          ex. Suspendisse finibus odio lacinia, mattis sapien a,
          sollicitudin nisi. Maecenas maximus, urna a fermentum
          egestas, augue leo semper ex, ut gravida enim odio at ipsum.
          Morbi vel tincidunt nisl.
        </p>
      </div>
    </div>

    {/* Line divider (visible on small/medium screens) */}
    <div className="block md:hidden w-full h-px bg-white" />

    {/* ========= Col 2 ========= */}
    <div className="flex flex-col gap-6">
      {/* Box 1 - left-aligned text */}
      <div className="w-full py-4 md:py-0 md:aspect-[16/10] flex items-center">
        <p className="pl-6 text-white font-body lg:text-lg">
          tempor. Maecenas venenatis venenatis quam,
          sit amet semper felis cursus sed. Etiam consectetur
          nunc consequat sollicitudin auctor. Curabitur tincidunt,
          neque et efficitur pellentesque, ligula augue elementum
          elit, et sollicitudin dui diam in leo. Cras vitae blandit
          ex. Suspendisse finibus odio lacinia, mattis sapien a,
          sollicitudin nisi. Maecenas maximus, urna a fermentum
          egestas, augue leo semper ex, ut gravida enim odio at ipsum.
          Morbi vel tincidunt nisl.
        </p>
      </div>

      {/* Box 2 */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/10]">
        <ModernBoxWithImage
          title="¿Qué hacen que el café guatemalteco sea único?"
          image="/images/Home_images/Lake_Atitlan_in_Guatemala.png"
          unoptimized
          backgroundBoxColor="bg-transparent"
        />
      </div>
    </div>
  </div>
</section>
  );
};

export default InfoSection2;