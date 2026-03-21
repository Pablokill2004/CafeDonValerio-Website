import models from "../../../components/indexComponents"

const { ModernBoxWithImage } = models;

const InfoSection1 = () => {
  return (
    <section className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* ========= 1st col - Image ========= */}
        <div className="h-72 md:h-96 lg:h-[60rem]">
          <ModernBoxWithImage
            title="¿Qué hacen que el café guatemalteco sea único?"
            image="/images/Home_images/antigua_Guatemala.jpg"
            backgroundBoxColor="bg-transparent"
          />
        </div>

        {/* ========= 2nd col - Image2 + Text ========= */}
        <div className="flex flex-col gap-4">
          {/* --------- Image2 --------- */}
          <div className="h-48 md:h-64 lg:h-[28rem]">
            <ModernBoxWithImage
              title="¿Qué hacen que el café guatemalteco sea único?"
              image="/images/Home_images/Lake_Atitlan_in_Guatemala.png"
              unoptimized
              backgroundBoxColor="bg-transparent"
            />
          </div>
          {/* --------- Text --------- */}
          <div className="flex min-h-48 font-body text-foreground lg:text-xl justify-center items-center p-6">
            <p>o lacinia, mattis sapien a, sollicitudin nisi.
               Maecenas maximus, urna a fermentum egestas, augue leo semper ex, ut gravida enim odio at ipsum. Morbi vel tincidunt nisl.vitae massa. Vestibulum ut eleifend quam.
                sum ha sido el texto de relleno estándar de las industrias desde el </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection1;