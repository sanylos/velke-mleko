import TopicLayout from "@/components/TopicLayout";

export default function MikrobiologiePage() {
  return (
    <TopicLayout title="Mikrobiologie mléka">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          Mikroorganismy v mléce
        </h2>          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-2 h-12 bg-blue-600 rounded-full mr-4"></div>
                <h3 className="text-xl font-semibold text-blue-900">
                  Užitečné mikroorganismy
                </h3>
              </div>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Mléčné bakterie (Lactobacillus, Streptococcus)</li>
                <li>Propionové bakterie</li>
                <li>Ušlechtilé plísně</li>
                <li>Kvasinky pro speciální výroby</li>
              </ul>
            </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Nežádoucí mikroorganismy
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Koliformní bakterie</li>
              <li>Psychrotrofní bakterie</li>
              <li>Termorezistentní mikroorganismy</li>
              <li>Patogenní mikroorganismy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          Faktory ovlivňující mikrobiální růst
        </h2>
        <div className="glass-card p-6 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Vnitřní faktory
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>pH mléka</li>
                <li>Oxidačně-redukční potenciál</li>
                <li>Dostupnost živin</li>
                <li>Přirozené antimikrobiální látky</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Vnější faktory
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Teplota skladování</li>
                <li>Vlhkost prostředí</li>
                <li>Přístup kyslíku</li>
                <li>Světlo</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Technologické zásahy
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pasterace</li>
                <li>UHT záhřev</li>
                <li>Chlazení</li>
                <li>Modifikace atmosféry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
}
