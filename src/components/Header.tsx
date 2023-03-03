import Image from 'next/image';

export default function Header() {
  return (
    <header className="h-[10vh] flex items-center lg:px-4">
      <Image
        className=''
        src="/assets/img/logo.webp"
        width={48}
        height={48}
        alt=""
      />
    </header>
  );
}