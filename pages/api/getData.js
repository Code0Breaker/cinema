// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function getData(req, res) {
  const { itemsToAdd } = req.body;
  let defaultItems = itemsToAdd || 16;
  const result = await axios.get(
    `https://kodikapi.com/list?token=47e2452dd8e8301b4a61df6994f14dad&limit=${defaultItems}&with_material_data=true`
  );

  const sliderResult = await axios.get(
    `https://kodikapi.com/list?token=47e2452dd8e8301b4a61df6994f14dad&limit=30&order=desc&sort=created_at&types=foreign-movie,foreign-serial,cartoon-serial,anime-serial&year=2022&with_material_data=true`
  );

  if (defaultItems % 100 === 0) {
  }

  // axios.get('//dumps.kodik.biz/films.json').then(r=>{
  //   console.log(r.data);
  // })
  res.send({
    data: result.data.results,
    sliderResult: sliderResult.data.results,
  });
}
