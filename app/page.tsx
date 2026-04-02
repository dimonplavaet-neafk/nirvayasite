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
import { 
  TriangleDotsDivider, 
  LotusDivider, 
  MandalaDivider, 
  VerticalLineDivider 
} from "@/components/triangle-divider"

export default function Home() {
  return (
    <main className="relative">
      <CursorGlow />
      <Navigation />
      <Hero />
      <Marquee />
      <TriangleDotsDivider />
      <Services />
      <LotusDivider />
      <Portfolio />
      <MandalaDivider />
      <About />
      <VerticalLineDivider />
      <Team />
      <VerticalLineDivider />
      <Contacts />
      <Footer />
    </main>
  )
}
