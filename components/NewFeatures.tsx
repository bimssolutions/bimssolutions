import Image from "next/image"

interface NewFeaturesTypes {
  imgUrl: string
  title: string
  subtitle: any
}

export default function NewFeatures({ imgUrl, title, subtitle }: NewFeaturesTypes) {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px] items-center md:items-start">
      <div
        className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]"
      >
        <Image src={`/assets/${imgUrl}`} width={30} height={30} alt="icon" className="w-1/2 h-1/2 object-contain" />
      </div>
      <h1 className="mt-[26px] font-medium text-[24px] leading-[30px]">
        {title}
      </h1>
      <p className="flex-1 mt-[16px] font-light text-[18px] leading-[32px]">
        {subtitle}
      </p>
    </div>
  )
}
