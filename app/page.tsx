import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { Contacts } from "@/components/contacts"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"
import { TriangleDivider } from "@/components/triangle-divider"

export default function Home() {
  return (
    <main className="relative">
      <CursorGlow />
      <Navigation />
      <Hero />
      <Marquee />
      <TriangleDivider />
      <Services />
      <TriangleDivider />
      <Portfolio />
      <TriangleDivider />
      <About />
      <TriangleDivider />
      <Team />
      <TriangleDivider />
      <Contacts />
      <Footer />
    </main>
  )
}
