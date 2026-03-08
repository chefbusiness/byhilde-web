export interface Zone {
  slug: string;
  name: string;
  type: 'distrito' | 'municipio';
  area: 'madrid-capital' | 'noroeste' | 'norte';
  areaLabel: string;
  description: string;
  neighborhoods?: string[];
}

export const zones: Zone[] = [
  // ─── MADRID CAPITAL — DISTRITOS ──────────────────────────
  {
    slug: 'centro',
    name: 'Centro',
    type: 'distrito',
    area: 'madrid-capital',
    areaLabel: 'Madrid Capital',
    description: 'El corazón de Madrid, donde lo histórico se funde con lo contemporáneo. Diseñamos interiores que respetan la esencia de edificios con carácter y los transforman en espacios funcionales y sofisticados.',
    neighborhoods: ['Sol', 'Malasaña', 'Chueca', 'Lavapiés'],
  },
  {
    slug: 'salamanca',
    name: 'Salamanca',
    type: 'distrito',
    area: 'madrid-capital',
    areaLabel: 'Madrid Capital',
    description: 'El distrito más exclusivo de Madrid. Creamos interiorismos a la altura de sus edificios señoriales: materiales nobles, acabados impecables y diseño atemporal para viviendas y locales de lujo.',
    neighborhoods: ['Recoletos', 'Goya', 'Castellana', 'Lista'],
  },
  {
    slug: 'chamberi',
    name: 'Chamberí',
    type: 'distrito',
    area: 'madrid-capital',
    areaLabel: 'Madrid Capital',
    description: 'Un barrio con personalidad propia y arquitectura ecléctica. Proyectamos interiores que dialogan con la riqueza arquitectónica de Chamberí, combinando tradición y modernidad.',
    neighborhoods: ['Trafalgar', 'Almagro', 'Gaztambide', 'Arapiles'],
  },
  {
    slug: 'chamartin',
    name: 'Chamartín',
    type: 'distrito',
    area: 'madrid-capital',
    areaLabel: 'Madrid Capital',
    description: 'Zona residencial y empresarial de primer nivel. Diseñamos espacios que combinan la elegancia de sus viviendas con la funcionalidad que demandan oficinas y locales de la zona.',
    neighborhoods: ['El Viso', 'Prosperidad', 'Ciudad Jardín', 'Hispanoamérica'],
  },
  {
    slug: 'retiro',
    name: 'Retiro',
    type: 'distrito',
    area: 'madrid-capital',
    areaLabel: 'Madrid Capital',
    description: 'Vivir junto al pulmón verde de Madrid merece interiores que capturen la luz y la serenidad del entorno. Creamos espacios luminosos, elegantes y conectados con la naturaleza.',
    neighborhoods: ['Ibiza', 'Jerónimos', 'Niño Jesús', 'Pacífico'],
  },
  {
    slug: 'arganzuela',
    name: 'Arganzuela',
    type: 'distrito',
    area: 'madrid-capital',
    areaLabel: 'Madrid Capital',
    description: 'Un distrito en plena transformación urbana. Diseñamos interiores contemporáneos para lofts, pisos reformados y locales comerciales en una de las zonas con mayor proyección de Madrid.',
    neighborhoods: ['Delicias', 'Legazpi', 'Chopera', 'Atocha'],
  },
  {
    slug: 'moncloa-aravaca',
    name: 'Moncloa-Aravaca',
    type: 'distrito',
    area: 'madrid-capital',
    areaLabel: 'Madrid Capital',
    description: 'Residencial, verde y con viviendas amplias. Creamos proyectos de interiorismo que aprovechan la generosidad de los espacios de Moncloa y Aravaca con diseño funcional y elegante.',
    neighborhoods: ['Aravaca', 'Moncloa', 'Argüelles', 'Ciudad Universitaria'],
  },
  {
    slug: 'latina',
    name: 'Latina',
    type: 'distrito',
    area: 'madrid-capital',
    areaLabel: 'Madrid Capital',
    description: 'Un distrito con carácter popular y arquitectura variada. Transformamos viviendas y locales en espacios modernos y funcionales que revitalizan cada rincón del barrio.',
    neighborhoods: ['Puerta del Ángel', 'Lucero', 'Aluche', 'Campamento'],
  },
  {
    slug: 'hortaleza',
    name: 'Hortaleza',
    type: 'distrito',
    area: 'madrid-capital',
    areaLabel: 'Madrid Capital',
    description: 'Zona residencial moderna con viviendas nuevas y espacios comerciales en crecimiento. Diseñamos interiores que combinan la estética contemporánea con la calidez del hogar.',
    neighborhoods: ['Pinar del Rey', 'Canillas', 'Virgen del Cortijo', 'Valdebebas'],
  },

  // ─── ZONA NOROESTE ───────────────────────────────────────
  {
    slug: 'villanueva-de-la-canada',
    name: 'Villanueva de la Cañada',
    type: 'municipio',
    area: 'noroeste',
    areaLabel: 'Zona Noroeste de Madrid',
    description: 'Nuestro municipio, donde está nuestro estudio. Conocemos cada rincón de Villanueva de la Cañada y diseñamos interiores para chalets, viviendas y locales con la cercanía de quien vive aquí.',
  },
  {
    slug: 'villanueva-del-pardillo',
    name: 'Villanueva del Pardillo',
    type: 'municipio',
    area: 'noroeste',
    areaLabel: 'Zona Noroeste de Madrid',
    description: 'Municipio vecino con encanto residencial. Diseñamos interiores para viviendas unifamiliares y chalets que reflejan la tranquilidad y el estilo de vida de la zona noroeste.',
  },
  {
    slug: 'majadahonda',
    name: 'Majadahonda',
    type: 'municipio',
    area: 'noroeste',
    areaLabel: 'Zona Noroeste de Madrid',
    description: 'Una de las zonas residenciales más demandadas del noroeste de Madrid. Creamos interiores exclusivos para viviendas y locales comerciales a la altura del nivel de vida de Majadahonda.',
  },
  {
    slug: 'las-rozas',
    name: 'Las Rozas',
    type: 'municipio',
    area: 'noroeste',
    areaLabel: 'Zona Noroeste de Madrid',
    description: 'Municipio con una oferta residencial y comercial de alto nivel. Diseñamos proyectos de interiorismo para chalets, áticos y locales que destacan por su elegancia y funcionalidad.',
  },
  {
    slug: 'pozuelo-de-alarcon',
    name: 'Pozuelo de Alarcón',
    type: 'municipio',
    area: 'noroeste',
    areaLabel: 'Zona Noroeste de Madrid',
    description: 'El municipio con mayor renta per cápita de España. Proyectamos interiores de lujo para viviendas, chalets y espacios comerciales que reflejan la exclusividad de Pozuelo.',
  },
  {
    slug: 'boadilla-del-monte',
    name: 'Boadilla del Monte',
    type: 'municipio',
    area: 'noroeste',
    areaLabel: 'Zona Noroeste de Madrid',
    description: 'Entorno residencial privilegiado rodeado de naturaleza. Creamos interiores acogedores y sofisticados para viviendas unifamiliares y chalets en Boadilla del Monte.',
  },
  {
    slug: 'torrelodones',
    name: 'Torrelodones',
    type: 'municipio',
    area: 'noroeste',
    areaLabel: 'Zona Noroeste de Madrid',
    description: 'Entre la sierra y la ciudad, con viviendas de carácter. Diseñamos interiores que aprovechan las vistas, la luz natural y el entorno privilegiado de Torrelodones.',
  },
  {
    slug: 'galapagar',
    name: 'Galapagar',
    type: 'municipio',
    area: 'noroeste',
    areaLabel: 'Zona Noroeste de Madrid',
    description: 'Municipio serrano con encanto natural. Transformamos viviendas y chalets en espacios cálidos y funcionales que conectan con el paisaje y el estilo de vida de Galapagar.',
  },
  {
    slug: 'collado-villalba',
    name: 'Collado Villalba',
    type: 'municipio',
    area: 'noroeste',
    areaLabel: 'Zona Noroeste de Madrid',
    description: 'Centro neurálgico de la Sierra de Guadarrama. Diseñamos interiores modernos y acogedores para viviendas y locales comerciales en Collado Villalba y alrededores.',
  },
  {
    slug: 'el-escorial',
    name: 'El Escorial',
    type: 'municipio',
    area: 'noroeste',
    areaLabel: 'Zona Noroeste de Madrid',
    description: 'Patrimonio histórico y entorno natural incomparable. Creamos interiores que respetan el carácter del municipio y lo fusionan con diseño contemporáneo y funcional.',
  },
  {
    slug: 'san-lorenzo-de-el-escorial',
    name: 'San Lorenzo de El Escorial',
    type: 'municipio',
    area: 'noroeste',
    areaLabel: 'Zona Noroeste de Madrid',
    description: 'Al pie del Monasterio, un municipio con historia y personalidad. Proyectamos interiores que dialogan con la arquitectura tradicional y el entorno monumental de San Lorenzo.',
  },

  // ─── ZONA NORTE ──────────────────────────────────────────
  {
    slug: 'alcobendas',
    name: 'Alcobendas',
    type: 'municipio',
    area: 'norte',
    areaLabel: 'Zona Norte de Madrid',
    description: 'Polo empresarial y residencial del norte de Madrid. Diseñamos interiores para oficinas, locales comerciales y viviendas modernas con la funcionalidad que Alcobendas demanda.',
  },
  {
    slug: 'san-sebastian-de-los-reyes',
    name: 'San Sebastián de los Reyes',
    type: 'municipio',
    area: 'norte',
    areaLabel: 'Zona Norte de Madrid',
    description: 'Municipio dinámico con crecimiento residencial y comercial. Creamos proyectos de interiorismo para viviendas, oficinas y locales que combinan estilo y practicidad.',
  },
];

export function getZoneBySlug(slug: string): Zone | undefined {
  return zones.find((z) => z.slug === slug);
}

export function getZonesByArea(area: Zone['area']): Zone[] {
  return zones.filter((z) => z.area === area);
}
