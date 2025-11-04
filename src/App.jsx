import Header from "./components/header"
import Hero from "./components/hero"

export default function App() {
  return (
    <main>
      {/* Gradient image*/}
      <img
        className="fixed inset-0 w-full h-full object-cover opacity-60 -z-10"
        src="/transparent-gradient-fade-free-png.png"
        alt="Gradient background"
      />

    <Header />

    <Hero />
    
    </main>
  )
}