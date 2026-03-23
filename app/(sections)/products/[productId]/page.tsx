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
  const productId = (await params).productId;
  
  return(
   <div>
    <Banner />

    {/* GUIPIL DIVIDER */}
    <SectionDivider />
    
    
      <CardSection 
      coffee_ID={productId}
      />

  
    {/*Footer */}
     
    </div>
  );
}

export default ProductDetails;