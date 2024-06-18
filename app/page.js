

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <section className="w-full min-h-screen bg-img text-center">
        <div className="relative md:left-1/4 text-white font-semibold md:font-bold md:top-48 top-10 md:w-1/2">
          <h1 className="md:text-7xl text-4xl md:px-20 pb-5">Lorem ipsum dolor sit amet.</h1>
          <p className="md:text-3xl text-xl pb-5">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="text-neutral-200 md:text-lg text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto tenetur soluta dolor, laudantium ipsum aliquid, aliquam error ad consequuntur natus animi nemo possimus doloremque suscipit tempore.</p>
          <div className="grid md:grid-cols-2 gap-1 px-5">
            <button className="bg-neutral-800">Appointment</button>
            <button className="bg-neutral-800">Browse Art</button>
          </div>
        </div>
      </section>

      <section className="w-full md:min-h-screen min-h-96 bg-img-2 text-center">
        <div className="relative md:left-1/4 text-white font-semibold md:font-bold md:top-48 top-10 md:w-1/2">
          <h1 className="md:text-7xl text-4xl md:px-20 pb-5">Lorem ipsum dolor sit amet.</h1>
          <p className="md:text-3xl text-xl pb-5">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="text-neutral-200 md:text-lg text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto tenetur soluta dolor, laudantium ipsum aliquid, aliquam error ad consequuntur natus animi nemo possimus doloremque suscipit tempore.</p>
          <div className="grid md:grid-cols-2 gap-1 px-5">
            <button className="bg-neutral-800">Appointment</button>
            <button className="bg-neutral-800">Browse Art</button>
          </div>
        </div>
      </section>
    </main>
  );
}
