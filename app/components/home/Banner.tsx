import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[187px]">
      <div className="h-[137px] relative">
        <Image src={"/banner.png"} alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Banner;
