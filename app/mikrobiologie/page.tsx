import TopicLayout from "@/components/TopicLayout";

export default function MikrobiologiePage() {
  return (
    <TopicLayout title="Mikrobiologie mléka">
      {/* Mikroorganismy v mléce */}
      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
            Mikroorganismy v mléce
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Užitečné mikroorganismy</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Mléčné bakterie</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Lactobacillus (tyčinky mléčného kvašení)</li>
                    <li>Streptococcus (koky mléčného kvašení)</li>
                    <li>Lactococcus (výroba fermentovaných výrobků)</li>
                    <li>Bifidobacterium (probiotické kultury)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Další užitečné mikroorganismy</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Propionibacterium freudenreichii (výroba sýrů)</li>
                    <li>Penicillium roqueforti, P. camemberti (plísňové sýry)</li>
                    <li>Kluyveromyces marxianus (kvasinky pro kefír)</li>
                    <li>Brevibacterium linens (mazová kultura)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Nežádoucí mikroorganismy</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Kontaminující bakterie</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Escherichia coli a koliformní bakterie</li>
                    <li>Pseudomonas (psychrotrofní bakterie)</li>
                    <li>Clostridium (anaerobní sporulující)</li>
                    <li>Bacillus (aerobní sporulující)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Patogenní mikroorganismy</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Staphylococcus aureus (toxiny)</li>
                    <li>Listeria monocytogenes</li>
                    <li>Salmonella spp.</li>
                    <li>Campylobacter jejuni</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faktory růstu */}
      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
            Faktory ovlivňující růst mikroorganismů
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Vnitřní faktory</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>pH mléka (6,4 - 6,8)</li>
                <li>Vodní aktivita (aw)</li>
                <li>Oxidačně-redukční potenciál</li>
                <li>Obsah živin</li>
                <li>Antimikrobiální látky</li>
                <li>Složení mléka</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Vnější faktory</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Teplota skladování</li>
                <li>Relativní vlhkost</li>
                <li>Přítomnost O₂</li>
                <li>Světlo</li>
                <li>Kontaminace prostředí</li>
                <li>Hygiena výroby</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Technologické zásahy</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Tepelné ošetření</li>
                <li>Chlazení a mrazení</li>
                <li>Změna pH</li>
                <li>Modifikace aw</li>
                <li>Přídavek konzervantů</li>
                <li>Balení a atmosféra</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Růstové fáze */}
      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
            Růstové fáze mikroorganismů
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Základní fáze růstu</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Lag fáze (adaptační) - přizpůsobení prostředí</li>
                <li>Exponenciální fáze - rychlé množení</li>
                <li>Stacionární fáze - vyrovnaný stav</li>
                <li>Fáze odumírání - úbytek životaschopných buněk</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Vliv teploty</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Psychrofilní: optimum 12-15 °C</li>
                <li>Psychrotrofní: růst při 0-7 °C</li>
                <li>Mezofilní: optimum 30-37 °C</li>
                <li>Termofilní: optimum 42-45 °C</li>
                <li>Termotolerantní: přežívají 60-80 °C</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mikrobiologická kvalita */}
      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
            Mikrobiologická kvalita mléka
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Faktory ovlivňující kvalitu</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Zdravotní stav dojnic</li>
                <li>Hygiena dojení</li>
                <li>Čistota dojícího zařízení</li>
                <li>Rychlost zchlazení mléka</li>
                <li>Teplota skladování</li>
                <li>Doba do zpracování</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Mikrobiologické požadavky</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Celkový počet mikroorganismů: {`< 100 000 KTJ/ml`}</li>
                <li>Koliformní bakterie: {`< 1000 KTJ/ml`}</li>
                <li>Psychrotrofní bakterie: {`< 50 000 KTJ/ml`}</li>
                <li>Termofilní bakterie: {`< 5000 KTJ/ml`}</li>
                <li>Sporotvorné bakterie: {`< 1000 KTJ/ml`}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologie konzervace */}
      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
            Technologie konzervace mléka
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Tepelné ošetření</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Termizace: 57-68 °C po dobu 15-20 s</li>
                <li>Pasterace šetrná: 71,7 °C po dobu 15-20 s</li>
                <li>Pasterace vysoká: 85 °C po dobu 20-30 s</li>
                <li>UHT záhřev: 135-150 °C po dobu 1-2 s</li>
                <li>Sterilace v obalu: 115-120 °C po dobu 20-30 min</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Další metody konzervace</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Chlazení: inhibice růstu mikroorganismů</li>
                <li>Mrazení: dlouhodobá stabilizace</li>
                <li>Sušení: snížení vodní aktivity</li>
                <li>Zahušťování: koncentrace složek</li>
                <li>Modifikovaná atmosféra: omezení růstu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prevence a kontrola */}
      <section className="mb-12">
        <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
            Prevence a kontrola
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Preventivní opatření</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Správné postupy dojení (SOP)</li>
                <li>Pravidelná sanitace zařízení</li>
                <li>Kontrola zdravotního stavu zvířat</li>
                <li>Školení personálu</li>
                <li>Monitoring kritických bodů</li>
                <li>Dodržování chladícího řetězce</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Kontrolní metody</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Stanovení celkového počtu mikroorganismů</li>
                <li>Kontrola přítomnosti patogenů</li>
                <li>Měření teploty mléka</li>
                <li>Kontrola účinnosti pasterace</li>
                <li>Monitoring rezistence bakterií</li>
                <li>Sledování biofilmů</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
}
