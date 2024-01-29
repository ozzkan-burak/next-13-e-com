import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[237px">
      <div className="h-[137px]">
        <Image
          src={
            "https://thumbs.dreamstime.com/b/single-blank-red-banner-ribbon-vector-isolated-multipurpose-text-template-109073118.jpg"
          }
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default Banner;
