import TopicLayout from "@/components/TopicLayout";

export default function TemlCviceniPage() {
  return (
    <TopicLayout title="TEML cvičení">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          Praktická cvičení TEML
        </h2>        <div className="bg-white shadow-lg rounded-xl p-6 mb-6 border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-2 h-12 bg-blue-600 rounded-full mr-4"></div>
                <h3 className="text-xl font-semibold text-blue-900">
                  Obecné zásady
                </h3>
              </div>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Bezpečnost práce v laboratoři</li>
                <li>Správná laboratorní praxe</li>
                <li>Vedení laboratorního deníku</li>
                <li>Zpracování výsledků měření</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Požadavky na splnění
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Aktivní účast na cvičeních</li>
                <li>Vypracování protokolů</li>
                <li>Úspěšné splnění zápočtového testu</li>
                <li>Dodržování laboratorního řádu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          Témata cvičení
        </h2>
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              1. Základní rozbor mléka
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Stanovení hustoty mléka</li>
              <li>Stanovení titrační kyselosti</li>
              <li>Měření aktivní kyselosti (pH)</li>
              <li>Stanovení tučnosti</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              2. Mikrobiologické vyšetření
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Příprava kultivačních půd</li>
              <li>Stanovení celkového počtu mikroorganismů</li>
              <li>Důkaz koliformních bakterií</li>
              <li>Mikroskopické vyšetření</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              3. Technologické vlastnosti
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Syřitelnost mléka</li>
              <li>Termostabilita</li>
              <li>Stanovení inhibičních látek</li>
              <li>Kryoskopické vyšetření</li>
            </ul>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
}
