"use client";

import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import type { CarouselApi } from "../../components/ui/carousel";
import { useTranslation } from "next-i18next";

export default function HomePage() {
  const items = [
    { id: 1, src: "/images/place-holder-ph.jpg", alt: "HomePage Image 1" },
    { id: 2, src: "/images/place-holder-ph.jpg", alt: "HomePage Image 2" },
    { id: 3, src: "/images/place-holder-ph.jpg", alt: "HomePage Image 3" },
    { id: 4, src: "/images/place-holder-ph.jpg", alt: "HomePage Image 4" },
    { id: 5, src: "/images/place-holder-ph.jpg", alt: "HomePage Image 5" },
  ];
  const { t } = useTranslation("common");
  const carouselRef = useRef<CarouselApi | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto pt-4 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <h5>{t("home-info")}</h5>
        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={(api) => (carouselRef.current = api)}
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem key={item.id}>
                <div className="p-4  rounded">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-72 h-auto mx-auto object-cover rounded"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
