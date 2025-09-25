
/*Component Imports*/
import Header from './components/nav/Header'
import Contact from './components/sections/Contact'



function App() {
  return (
    <div className='bg-base-100 min-h-screen text-light'>
      {/* <Header /> */}

      <main className='pt-20 container mx-auto px-4 space-y-20 md:pt-28 md:px-8 md:space-y-20 lg:pt-36 lg:px-12 lg:space-y-28'>
          <Contact />
      </main>
    </div>

  )
}

export default App
