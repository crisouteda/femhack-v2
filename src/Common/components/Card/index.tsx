type Props = {
  children: React.ReactNode;
  styled?: string;
};

const Card: React.FC<Props> = ({ children, styled }: Props) => {
  return (
    <div
      className={`${styled} w-full h-full relative bg-white px-[100px] rounded-3xl flex max-h-[80vh] min-h-[560px] opacity-[0.95]`}
    >
      {children}
    </div>
  );
};

export default Card;
