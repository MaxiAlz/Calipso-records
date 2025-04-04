import { FaMicrophoneLines } from 'react-icons/fa6';
import { BsSliders2Vertical, BsFillMusicPlayerFill } from 'react-icons/bs';
import { MdVideocam, MdEvent, MdLibraryMusic, MdPublic } from 'react-icons/md';

export const servicios = [
  {
    id: 1,
    titulo: 'Grabación',
    subtitulo: 'Captura tu sonido con calidad profesional',
    descripcion: `
      <p class="text-lg font-semibold">En nuestro estudio, grabamos todo tipo de instrumentos y voces con una calidad excepcional.</p>
      <h3 class="text-md font-bold mt-4">📌 Características del servicio:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Contamos con una <strong>Sala Live</strong> ideal para la grabación de baterías, guitarras y voces en vivo.</li>
        <li>Disponemos de una <strong>Sala ISO</strong> completamente aislada, perfecta para voces, podcasts, locuciones e instrumentos acústicos.</li>
        <li>Usamos equipos de última generación para garantizar una captura de audio clara y profesional.</li>
      </ul>
      <h3 class="text-md font-bold mt-4">🎵 ¿Qué estilos trabajamos?</h3>
      <p>Nos adaptamos a las necesidades de cada artista. Puedes elegir con qué técnico trabajar y recibir apoyo de productores y músicos sesionistas.</p>
      <h3 class="text-md font-bold mt-4">💰 Costos</h3>
      <p>Presupuestamos según tu idea y requerimientos. Contáctanos sin compromiso en la sección de contacto de nuestra web.</p>
    `,
    icono: <FaMicrophoneLines className='h-10 w-10' />,
    imagen:
      'https://images.pexels.com/photos/6052309/pexels-photo-6052309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    titulo: 'Mezcla',
    subtitulo: 'Dale equilibrio y profundidad a tu sonido',
    descripcion: `
      <p class="text-lg font-semibold">Tu música con un sonido balanceado y profesional, lista para impactar a tu audiencia.</p>
      <h3 class="text-md font-bold mt-4">📌 Características del servicio:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Mezcla híbrida combinando <strong>hardware analógico</strong> y <strong>plugins digitales</strong> de alta calidad (UAD, Waves, FabFilter, Izotope, etc.).</li>
        <li>Trabajo detallado en ecualización, compresión, paneo y efectos para una mezcla limpia y dinámica.</li>
        <li>Tu pago queda congelado hasta que estés 100% conforme con el resultado final.</li>
      </ul>
      <h3 class="text-md font-bold mt-4">🔍 ¿Cómo funciona?</h3>
      <ol class="list-decimal pl-5 mt-2">
        <li>Nos contactas para definir los detalles del trabajo.</li>
        <li>Eliges el ingeniero de mezcla, o nosotros lo asignamos según tu estilo musical.</li>
        <li>Subes tus pistas en formato WAV a través de Wetransfer.</li>
        <li>Recibes la mezcla en el plazo acordado.</li>
        <li>Incluye revisiones hasta que estés satisfecho.</li>
      </ol>
      <h3 class="text-md font-bold mt-4">🎧 ¿Qué recibirás?</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Un archivo <strong>.wav en 24 bits</strong> con la calidad original.</li>
        <li>Un archivo <strong>MP3 320 kbps</strong> con volumen de master como referencia.</li>
      </ul>
      <h3 class="text-md font-bold mt-4">💰 Costos</h3>
      <p>Consúltanos para pactar los detalles antes de iniciar el trabajo.</p>
    `,
    icono: <BsSliders2Vertical className='h-10 w-10' />,
    imagen:
      'https://images.pexels.com/photos/11044812/pexels-photo-11044812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    titulo: 'Mastering',
    subtitulo: 'Prepara tu música para cualquier plataforma',
    descripcion: `
      <p class="text-lg font-semibold">El último paso para que tu música suene con potencia y claridad en cualquier medio.</p>
      <h3 class="text-md font-bold mt-4">📌 Características del servicio:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Corrección final de frecuencias, nivel de volumen y dinámica.</li>
        <li>Optimización para streaming, vinilo, CD y otros formatos.</li>
        <li>Entrega en distintos formatos y versiones (radio edit, instrumental, acapella).</li>
      </ul>
      <h3 class="text-md font-bold mt-4">💰 Costos</h3>
      <p>Presupuesto a medida según la cantidad de canciones y requerimientos.</p>
    `,
    icono: <BsFillMusicPlayerFill className='h-10 w-10' />,
    imagen:
      'https://images.pexels.com/photos/4988137/pexels-photo-4988137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    titulo: 'Live Sessions',
    subtitulo: 'Graba y filma tu presentación en vivo',
    descripcion: `
      <p class="text-lg font-semibold">Captura la esencia de tu música con una sesión en vivo de calidad profesional.</p>
      <ul class="list-disc pl-5 mt-2">
        <li>Filmación en alta definición con múltiples cámaras.</li>
        <li>Grabación de audio en vivo con mezcla profesional.</li>
        <li>Edición y corrección de color para una estética cinematográfica.</li>
      </ul>
      <h3 class="text-md font-bold mt-4">💰 Costos</h3>
      <p>Contáctanos para personalizar tu sesión en vivo.</p>
    `,
    icono: <MdVideocam className='h-10 w-10' />,
    imagen:
      'https://images.pexels.com/photos/7502173/pexels-photo-7502173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    titulo: 'Producción de Shows en Vivo',
    subtitulo: 'Organización y sonido para eventos',
    descripcion: `
      <p class="text-lg font-semibold">Te ayudamos a llevar tu show en vivo al siguiente nivel.</p>
      <ul class="list-disc pl-5 mt-2">
        <li>Sonido profesional con técnicos especializados.</li>
        <li>Iluminación y montaje de escenario.</li>
        <li>Coordinación técnica y logística del evento.</li>
      </ul>
      <h3 class="text-md font-bold mt-4">💰 Costos</h3>
      <p>Solicita un presupuesto según el tipo y tamaño del evento.</p>
    `,
    icono: <MdEvent className='h-10 w-10' />,
    imagen:
      'https://images.pexels.com/photos/2728555/pexels-photo-2728555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    titulo: 'B-tracking de Instrumentos',
    subtitulo: 'Acompañamiento musical de calidad',
    descripcion: `
      <p class="text-lg font-semibold">Grabación de pistas instrumentales para enriquecer tu producción.</p>
      <ul class="list-disc pl-5 mt-2">
        <li>Guitarras, bajos, teclados, percusión y más.</li>
        <li>Músicos sesionistas disponibles según el estilo.</li>
        <li>Entrega en pistas separadas y mezcladas.</li>
      </ul>
      <h3 class="text-md font-bold mt-4">💰 Costos</h3>
      <p>Precios ajustados según la cantidad de instrumentos y tiempo de grabación.</p>
    `,
    icono: <MdLibraryMusic className='h-10 w-10' />,
    imagen:
      'https://images.pexels.com/photos/5809492/pexels-photo-5809492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 7,
    titulo: 'Distribución Digital',
    subtitulo: 'Lleva tu música a todas las plataformas',
    descripcion: `
      <p class="text-lg font-semibold">Publica tu música en las principales plataformas de streaming.</p>
      <ul class="list-disc pl-5 mt-2">
        <li>Distribución en Spotify, Apple Music, YouTube Music y más.</li>
        <li>Registro de derechos y generación de ingresos.</li>
        <li>Informe de estadísticas y reportes de reproducciones.</li>
      </ul>
      <h3 class="text-md font-bold mt-4">💰 Costos</h3>
      <p>Planes personalizados según la cantidad de lanzamientos.</p>
    `,
    icono: <MdPublic className='h-10 w-10' />,
    imagen:
      'https://images.pexels.com/photos/6686442/pexels-photo-6686442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];
