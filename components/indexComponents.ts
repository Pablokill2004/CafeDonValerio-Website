/*
Since it's a .ts file, TypeScript automatically
infers the types of imported components, 
including their accessories.
*/

// Index to import all components from a single file
import ScrollContainerCarrousel  from './homeComponents/ScrollContainer_Carrousel';
import ModernBoxWithImage from './homeComponents/ModernBoxWithImage';
import Footer from './others/Footer';

const IndexComponents = {
  ScrollContainerCarrousel,
  ModernBoxWithImage,
  Footer,
};

export default IndexComponents;



