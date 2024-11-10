import Bio from '@/features/home/components/Bio';
import Toolbelt from '@/features/home/components/Toolbelt';

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-start gap-y-9 p-4 font-[family-name:var(--font-geist-sans)] lg:p-8">
      <Bio />
      <Toolbelt />
    </div>
  );
}
