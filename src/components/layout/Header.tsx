import Image from 'next/image';

import avatarImage from '@/assets/avatar.png';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between p-8">
        {/* Currently only have one. Eventually will add more - e.g. blog */}
        {/* // TODO: Maybe should extract this into separate component, but maybe do that once there's more item in navbar */}
        <nav className="font-bold text-xl">
          <ul>
            <li className="hover:text-[#ff7f00]">
              <Link href="#">About</Link>
            </li>
          </ul>
        </nav>
        <div className="size-[72px]">
          <Image
            className="h-full w-full aspect-square rounded-full"
            src={avatarImage}
            alt="Charae profile"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
