import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[237px] bg-orange-500 flex items-center justify-center">
      <div className="h-[137px] relative w-full">
        <Image
          src={"/banner4.jpg"}
          fill
          alt=""
          className=" object-fill object-center"
        />
      </div>
    </div>
  );
};

export default Banner;
