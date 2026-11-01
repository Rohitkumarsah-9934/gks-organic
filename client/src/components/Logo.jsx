import { Leaf } from 'lucide-react';

export default function Logo({ className = '' }) {
  return (
    <div className={`relative inline-flex flex-col items-center leading-none ${className}`}>
      <Leaf className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 -rotate-12 fill-leaf text-leaf-dark" />
      <span className="font-sans text-4xl font-extrabold tracking-tight text-leaf-dark sm:text-5xl">
        GKS<sup className="ml-0.5 align-super text-[10px] font-semibold text-maroon">TM</sup>
      </span>
      <span className="mt-1 flex items-center gap-2 text-[10px] font-semibold tracking-[0.35em] text-leaf-dark sm:text-xs">
        <span className="h-px w-4 bg-leaf-dark" />
        ORGANIC
        <span className="h-px w-4 bg-leaf-dark" />
      </span>
    </div>
  );
}
