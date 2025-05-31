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
        <li>Contamos con una <strong>Sala acondicionada acusticamente</strong> ideal para la grabación de instrumentos y vocales</li>
        <li>Disponemos de una <strong>Equipamiento optimo </strong> especial para cada ocacion</li>
        <li>Buscamos ser un equipo dedicado a solucionar tus problemas, ayudarte en tu proceso creativo y que te sientas como durante todo el proceso.</li>
      </ul>
      <h3 class="text-md font-bold mt-4">🎵 ¿Qué estilos trabajamos?</h3>
      <p>Nos adaptamos a las necesidades de cada artista. Siempre estamos dispuestos a escucharte, recibir apoyo de productores y músicos sesionistas para tus sesiones de grabacion.</p>
      <h3 class="text-md font-bold mt-4">💰 Costos</h3>
      <p>Presupuestamos según tu idea y requerimientos. Contáctanos sin compromiso para charlar con nosotros y crear un plan unico para vos</p>
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
        <li>Mezcla <strong>digital</strong> y <strong>especial para tu cancion</strong> </li>
        <li>Trabajamos detalladamente en cada seccion la produccion, buscamos el balance perfecto y aplicamos los procesos necesarios para cada ocacion.</li>
        <li>Tu pago queda congelado hasta que estés 100% conforme con el resultado final.</li>
      </ul>
      <h3 class="text-md font-bold mt-4">🔍 ¿Cómo funciona?</h3>
      <ol class="list-decimal pl-5 mt-2">
        <li>Nos contactas para definir los detalles del trabajo.</li>
        <li>Nos envias tus tracks o multipista.</li>
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
    <h3 class="text-md font-bold mt-6">🎬 Ejemplo de sesión</h3>
    <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; max-width:100%; margin-top:1rem; border-radius:0.5rem;">
      <iframe src="https://www.youtube.com/embed/iEfsbfy2jU4" title="ENSAYO SESION - NORTE IMPASIBLE - [ Calipso Records ]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
    </div>
    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Filmado y producido en Calipso Records.</p>
  `,
    icono: <MdVideocam className='h-10 w-10' />,
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
