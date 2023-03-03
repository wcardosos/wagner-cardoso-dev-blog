interface PostProps {
  title: string
  date: Date
  resume: string
}

export default function Post({ title, date, resume }: PostProps) {
  return (
    <article className="grid gap-4 w-full lg:w-[512px] lg:p-4 hover:bg-gray-900 cursor-pointer rounded-lg">
      <div className="grid gap-2">
        <strong
          className="font-bold text-2xl text-red-500 text-ellipsis whitespace-nowrap overflow-hidden"
        >
          {title}
        </strong>
        <p className="text-sm">
          {
            date.toLocaleDateString(
              'pt-br', 
              { day: 'numeric', month: 'long', year: 'numeric' }
            )
          }
        </p>
      </div>
      <p className="text-ellipsis whitespace-nowrap overflow-hidden">{resume}</p>
    </article>
  );
}