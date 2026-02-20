import Header from '@/components/Header';
import HomeClient from './HomeClient';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Header />
      <HomeClient />
    </main>
  );
}