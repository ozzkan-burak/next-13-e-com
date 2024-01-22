"use-client";

import React, { type ReactElement } from "react";

interface IDataProps {
  category: string;
}

const Category = ({ category }: IDataProps): ReactElement => {
  return (
    <div className="border text-slate-500 rounded-full min-v-[120px] flex flex-1 justify-center items-center cursor-pointer px-4 py-2">
      {category}
    </div>
  );
};

export default Category;
