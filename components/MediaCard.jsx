import Image from "next/image";

export default function MediaCard({ item, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 hover:border-white/20"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 p-5">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-300/80">
          {item.category}
        </p>
        <h3 className="text-xl font-medium text-white">{item.title}</h3>
        <p className="text-sm leading-6 text-stone-300">{item.description}</p>
      </div>
    </button>
  );
}
