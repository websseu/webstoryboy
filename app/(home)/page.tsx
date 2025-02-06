import data from '@/lib/data';

export default async function HomePage() {
  return (
    <div className='p-5'>
      <div className='space-y-4'>
        {data.pageTitle.map((page, index) => (
          <div key={index}>
            <h2 className='text-2xl font-nexon mb-2'>{page.title}</h2>
            <p className='text-muted-foreground font-nanum'>{page.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
