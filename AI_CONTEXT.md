# Contexto del Proyecto: "Guatemala Coffee Hub"

## Arquitectura: 
Monolito en Next.js (App Router) + Supabase (PostgreSQL).

## Arquitectura:
Marketplace B2C que conecta pequeños productores de café guatemalteco con clientes locales y extranjeros. Enfoque en storytelling (historia y origen) y transparencia geográfica.

## Esquema de Datos (Resumen):

* `producers`: Almacena fincas, historia y geolocalización (lat/long).

* `products`: Atributos técnicos del café (tueste, variedad, altura, peso) vinculados a un productor.

* `departments`: Clasificación por origen geográfico en Guatemala.

## Stack Geoespacial: 
Uso de coordenadas decimales y JSONB para polígonos de parcelas, integrados con APIs de Mapas (Mapbox/Google Earth).

## Objetivo de respuesta: 
Generar sugerencias de tablas, queries o lógica de negocio que respeten la integridad referencial y la escalabilidad del marketplace.