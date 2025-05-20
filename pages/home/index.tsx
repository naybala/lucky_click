"use client";

import React from "react";
import { Carousel } from "primereact/carousel";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function HomePage() {
  const { t } = useTranslation("common");

  const items = [
    {
      id: 1,
      src: "/images/place-holder-ph.jpg",
      alt: "HomePage Image 1",
      priority: true,
    },
    { id: 2, src: "/images/place-holder-ph.jpg", alt: "HomePage Image 2" },
    { id: 3, src: "/images/place-holder-ph.jpg", alt: "HomePage Image 3" },
    { id: 4, src: "/images/place-holder-ph.jpg", alt: "HomePage Image 4" },
    { id: 5, src: "/images/place-holder-ph.jpg", alt: "HomePage Image 5" },
  ];

  const itemTemplate = (item: {
    src: string;
    alt: string;
    priority?: boolean;
  }) => (
    <div className="flex justify-center">
      <Image
        src={item.src}
        alt={item.alt}
        width={300}
        height={200}
        className="rounded shadow-md h-auto w-auto"
        priority={item.priority === true}
      />
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto pt-4 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <h5>{t("home-info")}</h5>
        <Carousel
          value={items}
          numVisible={1}
          numScroll={1}
          itemTemplate={itemTemplate}
          className="custom-carousel w-full"
          circular
          autoplayInterval={3000}
          showNavigators={false}
        />
      </div>
    </div>
  );
}
