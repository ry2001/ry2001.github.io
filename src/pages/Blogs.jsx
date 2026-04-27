export default function Blogs() {
  return (
    <main
      className="font-robotomono bg-blue-300 p-5 select-none flex-grow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <section className="gap-10 p-5 lg:flex-row lg:flex-wrap">
        <div className="py-55 text-center">
          <p>
            Not sure how would you know I plan to put some writing here,
          </p>
          <p>
            but this is still under construction. Please check back later for updates.
          </p>
          <p>
            Check out other stuffs about me in the meantime! TMI: I procrastinate to write blogs!
          </p>
        </div>
      </section>
    </main>
  );
}
