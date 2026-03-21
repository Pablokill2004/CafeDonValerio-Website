import Banner from "../../Banner";
import models from "../../../../components/indexComponents"
import CardSection from "../cardSection";

const { SectionDivider } = models;

/**
 * How Dynamic Routes Work:
 *  Route                              Example URL            params
  * pages/products/[productId].js  ->  /products/1  ->  { productId: '1' }
  * pages/products/[productId].js  ->  /products/2  ->  { productId: '2' }
  * pages/products/[productId].js  ->  /products/3  ->  { productId: '3' }
*/
async function ProductDetails({
    params
  }:{
    params: Promise<{productId: string}>
  }
){
  const productId = (await params).productId; // { productId: 'X' }
  
  const cafeSpecs = [
    { label: "Tueste", value: "Medio" },
    { label: "Altura", value: "20 cm" },
    { label: "Color", value: "blanco" },
    { label: "Tipo", value: "Molido" },
    { label: "Peso", value: "60 lb" },
    { label: "Variedad", value: "" },
    { label: "Lugar de Origen", value: "" }
  ];
  
  return(
   <div>
    <Banner />

    {/* GUIPIL DIVIDER */}
    <SectionDivider />
    
  
      <CardSection 
        title="Café Especial Don Valerio"
        image="/images/Home_images/CoffesCarrousel/coffee1.png" // Cambia esto por tu imagen real
        specs={cafeSpecs}
      />

  
    {/*Footer */}
     
    </div>
  );
}

export default ProductDetails;