'use client';
import Header from '@/components/Header';
import ProjectsClient from '../ProjectsClient';

export default function Projects() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <ProjectsClient />
    </main>
  );
}
