


function App() {
  

  return (
    <>
    <main className="max-w-2xl mx-auto grid grid-cols-2 gap-8 px-4">
      <div className="py-8  flex flex-col">
        <h1 className="text-4xl font-bold uppercase mb-8">
         <span className="text-5xl">URL to video</span> <br/>
         <span className="bg-gradient-to-br from-emerald-500 to-sky-500 bg-clip-text text-transparent"> with power of AI</span></h1>
      <form className=" grid gap-2 overflow-hidden">
      <input
      className="bg-transparent border-2 rounded-full text-white  px-4 py-2 grow" type="url" placeholder="https...."/>
      <button className="bg-emerald-500 text-white px-4 py-2 rounded-full uppercase"
      type="submit" >Create&nbsp; Video</button>

      </form></div>
      <div className="py-4">
        <div className="bg-gray-200 w-[240px] h-[380px] text-gray-500 rounded-2xl p-8 ">Video here</div>
      </div>
    </main>
      
    </>
  )
}

export default App
