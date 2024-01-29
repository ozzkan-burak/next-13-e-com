import { Banner, Category } from "./components";

export default function Home() {
  const categoryData = [
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
    {
      name: "Ayakkabı",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center px-3 md:px-3 gap-3 md:gap-10 my-5 md:my-10 overflow-x-auto">
        {categoryData.map((category, index) => {
          return <Category category={category.name} />;
        })}
      </div>
      <div>
        <Banner />
      </div>
    </>
  );
}
