import TopicLayout from "@/components/TopicLayout";

export default function MikrobiologiePage() {
  return (
    <TopicLayout title="Mikrobiologie mléka">
      {/* 1. Základní rozdělení mikroorganismů */}
      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
            1. Mikroorganismy v mléce
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">👍 Užitečné mikroorganismy</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><span className="font-semibold">Mléčné bakterie:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>Lactobacillus - jogurty, kysané mléko</li>
                    <li>Streptococcus - zakysané výrobky</li>
                    <li>Bifidobacterium - probiotika</li>
                  </ul>
                </li>
                <li><span className="font-semibold">Sýrařské kultury:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>Propionibacterium - sýry</li>
                    <li>Penicillium - plísňové sýry</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">⚠️ Nežádoucí mikroorganismy</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><span className="font-semibold">Kontaminující:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>E. coli - fekální znečištění</li>
                    <li>Pseudomonas - kažení při chlazení</li>
                    <li>Clostridium - duření sýrů</li>
                  </ul>
                </li>
                <li><span className="font-semibold">Patogenní:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>Staphylococcus aureus - toxiny</li>
                    <li>Salmonella - infekce</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hlavní faktory růstu */}
      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
            2. Co ovlivňuje růst mikroorganismů?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">🔍 Nejdůležitější faktory</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><span className="font-semibold">Teplota:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>Chlad (0-7 °C) - zpomalení růstu</li>
                    <li>Optimum (30-37 °C) - rychlý růst</li>
                    <li>Teplo ({'>'}70 °C) - ničení bakterií</li>
                  </ul>
                </li>
                <li><span className="font-semibold">pH mléka:</span> 6,4 - 6,8</li>
                <li><span className="font-semibold">Přístup kyslíku</span></li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">⚡ Praktické dopady</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><span className="font-semibold">Při skladování:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>Rychlé zchlazení po nadojení</li>
                    <li>Udržování při 4-8 °C</li>
                    <li>Omezení přístupu vzduchu</li>
                  </ul>
                </li>
                <li><span className="font-semibold">Při zpracování:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>Dodržení pasteračních teplot</li>
                    <li>Kontrola pH produktů</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Kontrola kvality */}
      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
            3. Kontrola kvality mléka
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">📊 Limitní hodnoty</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><span className="font-semibold">Syrové mléko:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>Celkový počet: {`< 100 000 KTJ/ml`}</li>
                    <li>Koliformní: {`< 1000 KTJ/ml`}</li>
                  </ul>
                </li>
                <li><span className="font-semibold">Pasterované mléko:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>Celkový počet: {`< 50 000 KTJ/ml`}</li>
                    <li>Koliformní: negativní</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">🛡️ Prevence</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><span className="font-semibold">Základní opatření:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>Čistota při dojení</li>
                    <li>Správná sanitace zařízení</li>
                    <li>Rychlé zchlazení</li>
                    <li>Kontrola teploty skladování</li>
                  </ul>
                </li>
                <li><span className="font-semibold">Kontroly:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>Měření teploty</li>
                    <li>Mikrobiologické rozbory</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tepelné ošetření */}
      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
            4. Tepelné ošetření
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">🌡️ Základní metody</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><span className="font-semibold">Pasterace:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>Šetrná: 72 °C / 15 s</li>
                    <li>Vysoká: 85 °C / 20 s</li>
                  </ul>
                </li>
                <li><span className="font-semibold">UHT záhřev:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>135-150 °C / 1-2 s</li>
                    <li>Trvanlivé mléko</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">✨ Účinky ošetření</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><span className="font-semibold">Pasterace:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>Zničení patogenů</li>
                    <li>Zachování živin</li>
                    <li>Krátká trvanlivost</li>
                  </ul>
                </li>
                <li><span className="font-semibold">UHT:</span>
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>Sterilní produkt</li>
                    <li>Dlouhá trvanlivost</li>
                    <li>Změna chuti</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
}
