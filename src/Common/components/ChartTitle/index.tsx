type Props = {
  children: React.ReactNode;
  styled?: string;
};

const ChartTitle: React.FC<Props> = ({ children }: Props) => {
  return (
    <h5 className='w-full text-center font-semibold text-2xl my-4'>
      {children}
    </h5>
  );
};

export default ChartTitle;
