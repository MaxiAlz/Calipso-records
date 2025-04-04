const PaylistSpotify = () => {
  return (
    <div className='m-2 sm:m-5'>
      <h2 className='text-3xl font-bold text-center mb-4'>
        Trabajos en los que hemos participado
      </h2>
      <p className='text-center text-lg mb-12 max-w-3xl mx-auto'>
        Tenemos el honor de haber sido parte de estos trabajos en las diferentes
        etapas de produccion
      </p>
      <div className='sm:px-20'>
        <iframe
          style={{ borderRadius: '12px' }}
          src='https://open.spotify.com/embed/playlist/7wO9BTxPWjT5kal8UB95yo?utm_source=generator'
          width='100%'
          height='500'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
};

export { PaylistSpotify };
