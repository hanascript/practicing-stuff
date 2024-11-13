type ProjectProps = {
  index: number;
  title: string;
  setModal: (modal: { active: boolean; index: number }) => void;
};

export const Project = ({ index, title, setModal }: ProjectProps) => {
  return (
    <div
      className='flex w-full items-center justify-between border-t border-gray-400 cursor-pointer py-[50px] px-[100px] hover:opacity-40 group transition-all duration-200 ease-linear'
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <h2 className='text-[60px] m-0 font-normal group-hover:-translate-x-4 transition-all duration-200 ease-linear'>
        {title}
      </h2>
      <p className='font-light group-hover:translate-x-4 transition-all duration-200 ease-linear'>
        Design & Development
      </p>
    </div>
  );
};
