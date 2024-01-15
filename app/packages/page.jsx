"use client";
import React from "react";
import PacketCard from "../components/PacketCard";
import deals from "../../public/deals.json"
export default function Packages() {
  console.log(deals);
  return (
    <div className="min-h-screen w-full lg:w-11/12 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5">
      <PacketCard data={deals[0]}></PacketCard>
      <PacketCard data={deals[1]}></PacketCard>
      <PacketCard data={deals[2]}></PacketCard>
    </div>
  );
}
