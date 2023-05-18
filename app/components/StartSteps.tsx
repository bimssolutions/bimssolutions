interface StartStepsTypes {
  number: number
  title: string;
  description: string;
}

export default function StartSteps({number, title, description}: StartStepsTypes) {
  return (
    <div className="flex justify-center items-center flex-row">
      <div
        className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]"
      >
        <p className="font-bold text-[20px] text-white">
          0{number}
        </p>
      </div>
      <p className="flex-1 ml-4 font-light text-[18px] leading-[32px]">
        <span className="font-semibold">{title}</span> - {description}
      </p>
    </div>
  )
}
