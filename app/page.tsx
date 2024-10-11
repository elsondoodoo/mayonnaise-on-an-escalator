import { ModeToggle } from '@/components/ui/toggle-mode';
import {ProfileForm} from '@/components/ui/UserForm';
import Image from 'next/image';
import mayo from './mayo.jpg';
export default function Home() {
  return(
    
      <main className = 'p-24'>
        <section className="py-12 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold">
          Mayonnaise On An Escalator
        </h1>
        <div className = 'pt-5'>
        <Image src={mayo} alt="Mayonnaise on an escalator" width={500} height={500} placeholder='blur'/>
        </div>
        <p className = 'pt-5 text-2xl text-muted-foreground'>
          I love Mayos
        </p>
        </section>
        <div className="flex gap-6 items-center justify-center">
          <ModeToggle />
        </div>
        <ProfileForm />
      </main>
  );
}

 
