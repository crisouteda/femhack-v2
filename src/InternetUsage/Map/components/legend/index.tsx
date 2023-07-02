const legendData = {
  "0-10%": "bg-[#f2ffe5]",
  "10-20%": "bg-[#d8ffb3]",
  "20-30%": "bg-[#beff80]",
  "30-40%": "bg-[#a4ff4d]",
  "40-50%": "bg-[#8aff1a]",
  "50-60%": "bg-[#71e600]",
  "60-70%": "bg-[#58b300]",
  "70-80%": "bg-[#3f8000]",
  "80-90%": "bg-[#264d00]",
  "90-100%": "bg-[#0d1a00]",
};

const Legend = () => (
  <div>
    <h5 className='text-lg font-semibold my-6'>Legend</h5>
    {Object.entries(legendData).map(([percentage, color]: string[]) => (
      <div
        className='flex justify-between whitespace-nowrap mb-2'
        key={percentage}
      >
        {percentage} <span className={`ml-2 w-[20px] h-[20px] ${color}`} />
      </div>
    ))}
  </div>
);

export default Legend;
