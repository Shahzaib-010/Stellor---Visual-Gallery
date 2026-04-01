"use client";

import { useState } from "react";
import MediaCard from "./MediaCard";
import Modal from "./Modal";

export default function GalleryGrid({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} onSelect={setActiveItem} />
        ))}
      </div>
      <Modal item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  );
}
