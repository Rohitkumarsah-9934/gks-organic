import { Leaf, ShieldCheck } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-maroon text-white">
      <div className="container-page flex items-center justify-between py-2 text-xs sm:text-sm">
        <span className="flex items-center gap-2 font-script text-base sm:text-lg">
          <Leaf className="h-5 w-5 fill-green-400 text-green-300" />
          Pure Goodness, Naturally.
        </span>
        <span className="flex items-center gap-2 border-l border-white/30 pl-3 font-medium sm:pl-6">
          <ShieldCheck className="h-5 w-5 fill-green-400 text-white" />
          100% Natural
        </span>
      </div>
    </div>
  );
}
