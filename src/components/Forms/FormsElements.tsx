const FormElements = () => {
  return (
    <>
      <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
        <div className='border-b border-stroke px-6.5 py-4 dark:border-strokedark'>
          <h3 className='font-medium text-black dark:text-white'>
            FormsElements
          </h3>
        </div>
        <div className='flex flex-col gap-5.5 p-6.5'>
          <div>
            <label className='mb-3 block text-black dark:text-white'>
              Default Input
            </label>
            <input
              type='text'
              placeholder='Default Input'
              className='w-full  rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-slate-400 dark:border-l-dark dark:text-white dark:focus:border-primary'
            />
          </div>

          <div>
            <label className='mb-3 block text-black dark:text-white'>
              Active Input
            </label>
            <input
              type='text'
              placeholder='Active Input'
              className='  w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white'
            />
          </div>

          <div>
            <label className='mb-3 block font-medium text-black dark:text-white'>
              Disabled label
            </label>
            <input
              type='text'
              placeholder='Disabled label'
              disabled
              className='  w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:text-white dark:focus:border-primary dark:disabled:bg-black'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { FormElements };
