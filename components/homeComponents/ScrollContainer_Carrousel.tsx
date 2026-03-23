"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Coffee {
  coffee_id: string | number
  img: string
  name: string
  weight: string
}

export default function ScrollContainerCarrousel({ coffees }: { coffees: Coffee[] }) {
  const router = useRouter();
  return (
    
    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
      {coffees.map((coffee) => (
        /* Coffee Card */
        <div
          key={coffee.coffee_id}
          className="bg-card min-w-80 md:min-w-96 shadow-md snap-start p-12 flex flex-col overflow-hidden"
        >
          <div className="relative aspect-square w-full">
            <Image
              src={coffee.img}
              alt={coffee.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 320px, 384px"
            />
          </div>

          <h3 id="NuestroCafes" className="mt-4 text-xl font-medium">{coffee.name}</h3>
          <p className="font-body">{coffee.weight}</p>
          
          <button  onClick={() => router.push(`/products/${encodeURIComponent(coffee.coffee_id)}`)}
          className="transition-colors duration-200 cursor-pointer bg-primary hover:bg-secondary mt-8 mx-auto px-6 py-2 rounded-full w-fit">
              <p className="text-sm font-medium text-primary-foreground">
              Ver más
              </p>
          </button>
        </div>
      ))}
    </div>
  )
}