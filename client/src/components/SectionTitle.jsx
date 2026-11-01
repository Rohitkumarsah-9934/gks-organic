import { Leaf } from "lucide-react";

export default function SectionTitle({ children }) {
  return (
    <div className="flex w-full items-center justify-center gap-3">
      <div className="h-[2px] flex-1 bg-[#8b2635]"></div>

      <div className="shrink-0 text-center">
        <Leaf className="mx-auto h-6 w-6 fill-green-700 text-green-900" />
        <h2 className="font-serif text-2xl font-bold text-green-900 sm:text-3xl">
          {children}
        </h2>
      </div>

      <div className="h-[2px] flex-1 bg-[#8b2635]"></div>
    </div>
  );
}