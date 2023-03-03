import Image from 'next/image';

export default function Intro() {
  return (
    <section className="flex gap-4 lg:px-4">
      <Image
        className="rounded-full"
        src="https://github.com/wcardosos.png?size=72"
        width={72}
        height={72}
        alt="Wagner Cardoso"
      />
      <div className="flex flex-col justify-center gap-2">
        <p>Blog pessoal do <strong className="font-bold text-red-500">Wagner Cardoso</strong></p>
        <p className="text-xs">Pensamentos sobre a minha paixão</p>
      </div>
    </section>
  );
}