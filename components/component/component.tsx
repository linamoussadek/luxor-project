"use client";

import { useEffect } from 'react';
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Component() {
  useEffect(() => {
    const handleScroll = () => {
      const video = document.querySelector('[data-scroll]') as HTMLVideoElement;
      if (video) {
        const scrolled = window.scrollY;
        video.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-20 flex items-center bg-primary text-primary-foreground">
          <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <img src="/Luxor-logo.png" alt="Luxor Logo" className="h-10 w-auto sm:h-12 md:h-14 lg:h-12"/>
            <span className="sr-only">Soil Solutions</span>
          </Link>
          <nav className="ml-auto flex gap-6 sm:gap-8 lg:gap-10">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              SERVICES
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              ABOUT
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              APPROACH
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              CONTACT
            </Link>
          </nav>
        </header>
        <main className="flex-1 relative">
          <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
            <video className="absolute top-0 left-0 w-full h-full object-cover brightness-50" autoPlay loop muted data-scroll>
              <source src="/jumbotron-background.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <div className="relative z-10 container mx-auto text-center px-4 md:px-6 max-w-2xl">
              <div className="text-primary-foreground">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-heading">
                    SUSTAINABLE SOIL SOLUTIONS
                  </h1>
                  <p className="text-lg md:text-xl">
                    At Parc Luxor, we're dedicated to improving soil health and enhancing agricultural productivity
                    through innovative, data-driven treatments.
                  </p>
                  <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#8c7434] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                  >
                    GET IN TOUCH
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section id="approach" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto text-left px-4 md:px-6 max-w-8xl">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="order-1 lg:order-2">
                  <img
                      src="/who-we-are.png"
                      width="550"
                      height="310"
                      alt="Soil Solutions Approach"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                </div>
                <div className="order-2 lg:order-1 space-y-4">
                  <div className="inline-block rounded-lg bg-custom-gold px-3 py-1 text-sm">ABOUT US</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    WHO WE ARE
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Soil Solutions is a team of passionate soil experts dedicated to helping farmers and landowners
                    improve the health and productivity of their land. We combine cutting-edge science with sustainable
                    practices to deliver tailored solutions that promote long-term soil vitality.
                  </p>
                </div>
              </div>
            </div>
          </section>


          <section id="services" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto text-left px-4 md:px-6 max-w-8xl">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-custom-gold px-3 py-1 text-sm">OUR SERVICES</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    TAILORED SOIL TREATMENT SOLUTIONS
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    We offer a range of soil treatment services to address your unique agricultural needs, from nutrient
                    balancing to microbial inoculation and more.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="bg-card p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold">Nutrient Balancing</h3>
                    <p className="text-muted-foreground">
                      Our experts analyze your soils composition and develop a customized plan to optimize nutrient
                      levels for improved plant growth and yield.
                    </p>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold">Microbial Inoculation</h3>
                    <p className="text-muted-foreground">
                      We introduce beneficial microorganisms to your soil, enhancing its overall health and promoting
                      natural nutrient cycling.
                    </p>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold">Soil Remediation</h3>
                    <p className="text-muted-foreground">
                      Our advanced techniques help restore degraded or contaminated soils, revitalizing their structure
                      and fertility.
                    </p>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold">Erosion Control</h3>
                    <p className="text-muted-foreground">
                      We implement sustainable solutions to prevent soil erosion, preserving your lands integrity and
                      productivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="approach" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container mx-auto text-left px-4 md:px-6 max-w-8xl">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="order-2 lg:order-1">
                  <img
                      src="/approach.jpg"
                      width="550"
                      height="310"
                      alt="Soil Solutions Approach"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="inline-block rounded-lg bg-custom-gold px-3 py-1 text-sm">OUR APPROACH</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    DATA-DRIVEN, SUSTAINABLE SOLUTIONS
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    At Soil Solutions, we take a comprehensive, data-driven approach to soil treatment. By analyzing the
                    unique characteristics of your land, we develop tailored solutions that promote long-term soil
                    health
                    and environmental sustainability.
                  </p>
                  <ul className="grid gap-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary"/>
                      Detailed soil testing and analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary"/>
                      Customized treatment plans
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary"/>
                      Eco-friendly, sustainable practices
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary"/>
                      Ongoing monitoring and optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto text-left px-4 md:px-6 max-w-8xl">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-custom-gold px-3 py-1 text-sm">GET IN TOUCH</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    HAVE A QUESTION? LET'S TALK.
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Fill out the form below and one of our soil experts will reach out to you shortly.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input type="text" id="name" placeholder="Enter your name"/>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input type="email" id="email" placeholder="Enter your email"/>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..."/>
                  </div>
                  <Button type="submit"
                          className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-customGold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Send us a message
                  </Button>
                </form>
              </div>
            </div>
          </section>

        </main>
        <footer className="bg-primary text-primary-foreground p-6 md:py-12 w-full shrink-0">
          <div className="text-center max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
            <div className="grid gap-1">
              <h3 className="font-semibold">Company</h3>
              <Link href="#" prefetch={false}>
                About Us
              </Link>
              <Link href="#" prefetch={false}>
                Our Team
              </Link>
              <Link href="#" prefetch={false}>
                Careers
              </Link>
              <Link href="#" prefetch={false}>
                News
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Services</h3>
              <Link href="#" prefetch={false}>
                Nutrient Balancing
              </Link>
              <Link href="#" prefetch={false}>
                Microbial Inoculation
              </Link>
              <Link href="#" prefetch={false}>
                Soil Remediation
              </Link>
              <Link href="#" prefetch={false}>
                Erosion Control
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Resources</h3>
              <Link href="#" prefetch={false}>
                Blog
              </Link>
              <Link href="#" prefetch={false}>
                Case Studies
              </Link>
              <Link href="#" prefetch={false}>
                FAQs
              </Link>
              <Link href="#" prefetch={false}>
                Contact
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Legal</h3>
              <Link href="#" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" prefetch={false}>
                Terms of Service
              </Link>
              <Link href="#" prefetch={false}>
                Cookie Policy
              </Link>
            </div>
            <div className="grid gap-1">
              <h3 className="font-semibold">Connect</h3>
              <Link href="#" prefetch={false}>
                Phone: 123123123123
              </Link>
              <Link href="#" prefetch={false}>
                Email: test@gmail.com
              </Link>
              <Link href="#" prefetch={false}>
                Address: 123 test street
              </Link>
            </div>
          </div>
        </footer>
      </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c7a64c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5"/>
      </svg>
  );
}


