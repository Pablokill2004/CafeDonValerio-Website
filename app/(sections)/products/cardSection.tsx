import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import models from "../../../components/indexComponents";

const { ModernBoxWithImage } = models;

// 1. Cambiamos la función para que lea el archivo directamente
async function getCoffeeSpecs(coffeeID: string | number) {
  try {
    // Construimos la ruta correcta: app/api/coffees.json desde la raíz del proyecto
    const filePath = path.join(process.cwd(), 'app', 'api', 'coffees.json');
    
    // Leemos el contenido del archivo
    const fileContents = await fs.readFile(filePath, 'utf8');
    
    // Lo convertimos a un arreglo de objetos JavaScript
    const coffeesArray = JSON.parse(fileContents);

    // Buscamos el café que coincida con coffee_id=2 que viene de la URL
    // Convertimos ambos a String por si acaso uno es número y otro texto
    const coffee = coffeesArray.find((c: any) => String(c.coffee_id) === String(coffeeID));

    if (!coffee) {
      throw new Error(`No se encontró el café con el ID: ${coffeeID}`);
    }

    return coffee;
  } catch (error) {
    console.error("Error leyendo el archivo JSON:", error);
    // Retornamos null para manejar el error amigablemente en la interfaz
    return null; 
  }
}

export default async function ProductCard({ coffee_ID }: { coffee_ID: string | number }) {
  // 2. Llamamos a nuestra nueva función
  const CoffeeSpecs = await getCoffeeSpecs(coffee_ID);

  // 3. Manejo de error si el ID no existe en el JSON
  if (!CoffeeSpecs) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Café no encontrado</h1>
      </section>
    );
  }

  // Filtramos las propiedades que NO queremos en la lista
  const keysToExclude = ['id', 'name', 'img'];
  const specsList = Object.entries(CoffeeSpecs).filter(
    ([key]) => !keysToExclude.includes(key)
  );

  return (
    <section className="min-h-screen p-10 flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto bg-card p-6 md:p-10 shadow-lg">
        
        {/* COLUMNA IZQUIERDA (Imagen) */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
          <ModernBoxWithImage
            title={CoffeeSpecs.name}
            image={CoffeeSpecs.img || "/images/default-product.png"}
            backgroundBoxColor="bg-transparent"
          />
        </div>

        {/* COLUMNA DERECHA (Detalles) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 mt-8 md:mt-0 md:pl-16">
          {specsList.map(([key, value]) => (
            <div key={key} className="flex flex-wrap gap-2 text-xl md:text-2xl text-card-foreground tracking-wide">
              <span className='font-title font-semibold capitalize'>{key}:</span>
              <span>{String(value)}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}