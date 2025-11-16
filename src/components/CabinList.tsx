import React from "react";
import CabinCard from "./CabinCard";
import { CabinListItem } from "@/types/database.types";
import { getCabins } from "@/services/services-data";

async function CabinList() {
  const cabins = await getCabins();
  return (
    <>
      {" "}
      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin: CabinListItem) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default CabinList;
