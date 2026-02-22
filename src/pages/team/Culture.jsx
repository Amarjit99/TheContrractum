export default function Culture() {
    return (
    <div className="w-full bg-white text-black">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Life at YourCompany
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Where innovation, collaboration, and growth create a thriving
            workplace.
          </p>
        </div>
      </section>

      {/* ================= CULTURE SECTION ================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Our Culture
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                💡 Innovation
              </h3>
              <p className="text-sm sm:text-base">
                We empower creative thinking and encourage bold ideas that shape
                the future.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                🤝 Collaboration
              </h3>
              <p className="text-sm sm:text-base">
                Teamwork drives our success. We grow together and support each
                other.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                📈 Growth
              </h3>
              <p className="text-sm sm:text-base">
                Continuous learning and development help our team reach their
                full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORK ENVIRONMENT ================= */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Work Environment
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Our workspace is built for productivity, creativity, and balance.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="https://source.unsplash.com/600x400/?office"
              alt="Office"
              className="w-full h-56 sm:h-64 object-cover rounded-xl shadow-md"
            />
            <img
              src="https://source.unsplash.com/600x400/?teamwork"
              alt="Teamwork"
              className="w-full h-56 sm:h-64 object-cover rounded-xl shadow-md"
            />
            <img
              src="https://source.unsplash.com/600x400/?workspace"
              alt="Workspace"
              className="w-full h-56 sm:h-64 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            What Our Team Says
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
              <p className="italic text-sm sm:text-base mb-4">
                "The culture here motivates me to push boundaries and grow
                professionally."
              </p>
              <h4 className="font-semibold text-sm sm:text-base">
                — Jane Doe, Product Lead
              </h4>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
              <p className="italic text-sm sm:text-base mb-4">
                "Flexible work and supportive leadership make it an inspiring
                place to work."
              </p>
              <h4 className="font-semibold text-sm sm:text-base">
                — John Smith, Software Engineer
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-primary text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Join Our Team
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg">
            Be part of a culture that celebrates innovation and collaboration.
          </p>

          <button className="mt-8 bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300">
            Explore Careers
          </button>
        </div>
      </section>

    </div>
  );
}
