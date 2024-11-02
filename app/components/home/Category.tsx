"use client";

const Category = () => {
  const categoryList = [
    {
      name: "Sports",
    },
    {
      name: "Electronics",
    },
    {
      name: "Clothing",
    },
    {
      name: "Furniture",
    },
    {
      name: "Books",
    },
    {
      name: "Garden",
    },
    {
      name: "Beauty",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-3 md:gap-10 py-5 md:py-8 px-5 mx-3 md:mx-5 md:px-10 overflow-x-auto">
      {categoryList.map((category, index) => (
        <div
          key={index}
          className=" flex flex-1 cursor-pointer justify-center border text-slate-500 rounded-full min-ww[120px] px-4 py-3 font-bold shadow-sm"
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Category;
