import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Landing(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-8 z-10">
              <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-pulse">
                Beaststats
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-white/80">
                Chess Streams | Watch Alongs | Creative Videos
              </p>
              <div className="flex flex-wrap gap-6">
                <Button asChild className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                  <Link href="#about">About Me</Link>
                </Button>
                <Button asChild className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                  <Link href="#content">My Content</Link>
                </Button>
              </div>
              <div className="flex space-x-6 mt-8">
                <SocialLink href="https://www.twitch.tv/beaststatsofficial" Icon={TwitchIcon} color="#9146FF" />
                <SocialLink href="https://youtube.com/beaststats" Icon={YoutubeIcon} color="#FF0000" />
                <SocialLink href="https://x.com/beast_stats" Icon={TwitterIcon} color="#1DA1F2" />
              </div>
            </div>
            <div className="flex justify-center lg:justify-end relative z-0">
              <div className="relative w-full h-[400px] max-w-[400px]">
                <Image 
                  src="https://yt3.googleusercontent.com/IN_V8hbZ9KqI_Utvz60fFLnCSOGMVZiAsXwoHQA-HRjvcWygnLDOfnTFnllgAkzbiUYkaHhx=s900-c-k-c0x00ffffff-no-rj" 
                  layout="fill"
                  objectFit="cover"
                  alt="Beaststats" 
                  className="rounded-full border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-300" 
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Section id="about" title="About Beaststats" gradientFrom="from-blue-400" gradientTo="to-emerald-400">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Beaststats is a passionate content creator, specializing in chess streams, thought-provoking watch alongs, and creative video projects. With years of experience on Twitch and YouTube, I've built a community that thrives on intellectual discourse and entertainment.
              </p>
              <p className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed">
                My deep understanding of chess and keen analytical skills allow me to provide insightful commentary and interactive gameplay. Beyond chess, I explore a wide range of topics, showcasing my versatility and curiosity.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="https://cbin.b-cdn.net/img/BE/Beaststats1_N9GFR_960x978.jpeg" width={500} height={500} alt="Beaststats Streaming Setup" className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300" />
            </div>
          </div>
        </Section>
        <Section id="content" title="Featured Content" gradientFrom="from-pink-400" gradientTo="to-purple-600">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "", desc: "", image: "https://img.youtube.com/vi/iGa8fxp58-g/maxresdefault.jpg", link: "https://www.youtube.com/watch?v=iGa8fxp58-g" },
              { title: "", desc: "", image: "https://img.youtube.com/vi/YEJrkohoH_U/maxresdefault.jpg", link: "https://www.youtube.com/watch?v=YEJrkohoH_U" },
              { title: "", desc: "", image: "https://img.youtube.com/vi/W2AcOjrqq28/maxresdefault.jpg", link: "https://www.youtube.com/watch?v=W2AcOjrqq28" },
            ].map((item, index) => (
              <ContentCard key={index} {...item} />
            ))}
          </div>
        </Section>
        <Section id="contact" title="Get in Touch" gradientFrom="from-yellow-400" gradientTo="to-orange-500">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Have a question, collaboration opportunity, or just want to say hello? Fill out the form, and I'll get back to you as soon as possible.
              </p>
              <div className="mt-12 flex space-x-6">
                <SocialLink href="https://www.twitch.tv/beaststatsofficial" Icon={TwitchIcon} color="#9146FF" />
                <SocialLink href="https://youtube.com/beaststats" Icon={YoutubeIcon} color="#FF0000" />
                <SocialLink href="https://x.com/beast_stats" Icon={TwitterIcon} color="#1DA1F2" />
              </div>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
      <footer className="bg-gray-900 py-6 w-full shrink-0">
        <div className="container px-4 md:px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-300">&copy; 2024 Beaststats. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function SocialLink({ href, Icon, color }: { href: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; color: string }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Icon className={`h-12 w-12 text-white hover:text-[${color}] transition-colors duration-300`} />
    </Link>
  );
}

function Section({ id, title, gradientFrom, gradientTo, children }: { id: string; title: string; gradientFrom: string; gradientTo: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`w-full py-20 md:py-32 bg-gradient-to-b ${gradientFrom} ${gradientTo}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl mb-16 text-center bg-clip-text text-transparent ${gradientFrom} ${gradientTo}">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function ContentCard({ title, desc, image, link }: { title: string; desc: string; image: string; link: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-800 transform hover:scale-105 transition-all duration-300">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full h-64">
          <Image src={image} layout="fill" objectFit="cover" alt={title} className="transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white line-clamp-2">{title}</h3>
          <p className="mt-2 text-sm text-gray-300">{desc}</p>
        </div>
      </Link>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="space-y-6">
      <Input type="text" placeholder="Name" className="w-full bg-gray-800 border-gray-700 text-white text-lg p-4 rounded-xl" />
      <Input type="email" placeholder="Email" className="w-full bg-gray-800 border-gray-700 text-white text-lg p-4 rounded-xl" />
      <Textarea placeholder="Message" className="w-full bg-gray-800 border-gray-700 text-white text-lg p-4 rounded-xl" />
      <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
        Send Message
      </Button>
    </form>
  );
}

function TwitchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}