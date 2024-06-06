export type ProvinceCityChinaType = {
  Province: ProvinceDataType[];
  City: ProvinceDataType[];
  Area: ProvinceDataType[];
};

export type ProvinceDataType = {
  // code代码
  c: string;
  // name名称
  n: string;
};
