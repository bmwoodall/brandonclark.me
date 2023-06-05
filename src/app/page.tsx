import * as React from 'react';
import { Avatar, Contact, Experience, ResumeLink, Section } from '@/components';
import { EXPERIENCES } from '@/constants';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Page() {
  return (
    <>
      <div className="absolute right-4 top-4 z-50">
        <ThemeToggle />
      </div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 lg:px-8 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div className="flex flex-col">
              <div className="-ml-8">
                <Avatar />
              </div>
              <h1 className="mt-4 font-display text-4xl/tight font-light ">Howdy! I'm Brandon.</h1>
              <p className="mb-4 text-sm/6  max-w-sm">
                A frontend engineer specializing in building accessible, performant, and delightful
                user experiences.
              </p>
              <div className="py-4">
                <Contact />
              </div>
            </div>
          </div>
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <Section title="About Me">
              <p className="mb-4">
                I'm a frontend engineer based in Austin, TX, who has spent the last 13 years working
                with teams to create digital products and experiences. With an eye for detail and a
                voice for the end user, I am passionate about building inclusive, thoughtful and
                delightful experiences for all users.
              </p>
              <p className="mb-4">
                When I am not coding, you can find me spending time with my wife and two pups,
                woodworking or playing video games.
              </p>
            </Section>
            <Section title="Recent Work">
              <div className="flex flex-col gap-20 mt-4">
                {EXPERIENCES.map((experience) => (
                  <Experience key={experience.company} {...experience} />
                ))}
              </div>
              <div className="mt-12">
                <ResumeLink />
              </div>
            </Section>
          </main>
        </div>
      </div>
    </>
  );
}
