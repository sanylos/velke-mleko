import TopicLayout from "@/components/TopicLayout";

export default function TemlPrednaskyPage() {
  return (
    <TopicLayout title="TEML přednášky">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          Přehled přednášek
        </h2>
        <div className="space-y-6">          <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>
              <h3 className="text-xl font-semibold text-blue-900">
                Úvod do problematiky mléka
              </h3>
            </div>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Historie mlékařství</li>
              <li>Význam mléka ve výživě</li>
              <li>Současné trendy v mlékárenství</li>
              <li>Legislativní požadavky</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              2. Chemické složení mléka
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mléčné bílkoviny</li>
              <li>Mléčný tuk</li>
              <li>Laktóza a další sacharidy</li>
              <li>Minerální látky a vitaminy</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              3. Fyzikální vlastnosti mléka
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hustota a bod mrznutí</li>
              <li>Kyselost mléka</li>
              <li>Povrchové napětí</li>
              <li>Elektrická vodivost</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              4. Technologické zpracování
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tepelné ošetření mléka</li>
              <li>Mechanické operace</li>
              <li>Membránové procesy</li>
              <li>Fermentační procesy</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              5. Kontrola jakosti
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Odběr a příprava vzorků</li>
              <li>Základní analytické metody</li>
              <li>Instrumentální analýza</li>
              <li>Vyhodnocení výsledků</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          Studijní materiály
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Doporučená literatura
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Odborné knihy a učebnice</li>
              <li>Vědecké články</li>
              <li>Normy a předpisy</li>
              <li>Online zdroje</li>
            </ul>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Požadavky ke zkoušce
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aktivní účast na přednáškách</li>
              <li>Splnění průběžných testů</li>
              <li>Vypracování seminární práce</li>
              <li>Závěrečná zkouška</li>
            </ul>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
}
