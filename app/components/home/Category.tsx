"use-client";

import React, { type ReactElement } from "react";

interface IDataProps {
  data: [];
}

const Category = ({ data }: IDataProps): ReactElement => {
  console.log(data);
  return <div>Category</div>;
};

export default Category;
