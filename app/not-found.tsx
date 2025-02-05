import Footer from '@/components/footer';
import Header from '@/components/header';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className='main__container'>
        <div className='not-found'>
          <h1 className='text-3xl mb-6'>404</h1>
          <p>
            여긴 아직 공사 중! 🔧🚀 <br />곧 멋진 콘텐츠가 찾아올 거예요! 기대해
            주세요! 🎈😊
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
