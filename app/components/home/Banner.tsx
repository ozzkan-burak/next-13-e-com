import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[237px bg-orange-300">
      <div className="h-[137px] relative">
        <Image src={"/banner.png"} alt="" fill />
      </div>
    </div>
  );
};

export default Banner;
