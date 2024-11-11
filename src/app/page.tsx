import Bio from '@/features/home/components/Bio';
import Toolbelt from '@/features/home/components/Toolbelt';
import WorkExperience from '@/features/home/components/WorkExperience';

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-start font-[family-name:var(--font-geist-sans)]">
      <Bio />
      <Toolbelt />
      <WorkExperience />
    </div>
  );
}
