import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="milk-gradient py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-6 items-center text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900">
              VELKÉ MLÉKO
            </h1>
            <p className="text-xl md:text-2xl text-blue-800/80 max-w-2xl">
              Poznejte fascinující svět mléka - zdroj života, výživy a zdraví
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img src="/icons/composition.svg" alt="Složení mléka" className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-semibold text-blue-900">Složení mléka</h3>
              </div>
              <p className="text-gray-700">
                Mléko je komplexní potravina obsahující proteiny, tuky, laktózu,
                minerály a vitamíny. Každá složka hraje důležitou roli v nutričním
                profilu a vlastnostech mléka.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img src="/icons/enzyme.svg" alt="Enzymy v mléce" className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-semibold text-blue-900">Enzymy v mléce</h3>
              </div>
              <p className="text-gray-700">
                Enzymy jsou přirozenou součástí mléka a mají vliv na jeho
                skladovatelnost a zpracování. Mezi hlavní enzymy patří lipázy,
                proteázy a další bioaktivní složky.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <img src="/icons/microbiology.svg" alt="Mikrobiologie mléka" className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-semibold text-blue-900">Mikrobiologie mléka</h3>
              </div>
              <p className="text-gray-700">
                Mikrobiologická kvalita mléka je klíčová pro jeho bezpečnost
                a trvanlivost. Zahrnuje jak prospěšné bakterie mléčného kvašení,
                tak i potenciální kontaminanty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kvalita mléka */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Faktory ovlivňující kvalitu mléka
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Fyzikální faktory</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Teplota skladování</li>
                <li>pH a titrační kyselost</li>
                <li>Hustota a bod mrznutí</li>
                <li>Viskozita a povrchové napětí</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">Chemické faktory</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Obsah bílkovin a kaseinu</li>
                <li>Tučnost mléka</li>
                <li>Obsah laktózy</li>
                <li>Minerální látky a vitamíny</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Plemena skotu */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Plemena skotu v České republice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">H</span>
                <h3 className="text-2xl font-semibold text-blue-900 ml-4">Holštýnské plemeno</h3>
              </div>
              <p className="text-gray-700 mb-2">Typ: mléčné</p>
              <p className="text-gray-700 font-semibold">Užitkovost: ~8373 l/laktaci</p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">S</span>
                <h3 className="text-2xl font-semibold text-blue-900 ml-4">České strakaté</h3>
              </div>
              <p className="text-gray-700 mb-2">Typ: kombinované</p>
              <p className="text-gray-700 font-semibold">Užitkovost: ~6352 l/laktaci</p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">O</span>
                <h3 className="text-2xl font-semibold text-blue-900 ml-4">Ostatní plemena</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Montbeliarde</li>
                <li>• Jersey</li>
                <li>• Ayrshire</li>
              </ul>
              <p className="text-gray-700 mt-2">Celkem cca 6,7 % zastoupení</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiky */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Spotřeba a produkce mléka v ČR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95,9 %</div>
                <p className="text-gray-700">Tržnost mléka</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">263 kg</div>
                <p className="text-gray-700">Spotřeba mléčných výrobků na obyvatele<br />(bez másla)</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">134 %</div>
                <p className="text-gray-700">Soběstačnost v mléce</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typy a složení mléka */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Typy mléka</h2>
              <div className="space-y-4">
                <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Kolostrum (mlezivo)</h3>
                  <p className="text-gray-700">První 3–5 dní po porodu</p>
                </div>
                <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Zralé mléko</h3>
                  <p className="text-gray-700">Po období mleziva, běžné pro výživu</p>
                </div>
                <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Mléka nezralá</h3>
                  <p className="text-gray-700">Např. mléko samců – nevhodné pro výživu</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Složení kravského mléka</h2>
              <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100">
                <ul className="space-y-4 text-gray-700">
                  <li><span className="font-semibold">Tuk:</span> 3,4–4,2 %, tvořen triacylglyceroly</li>
                  <li><span className="font-semibold">Bílkoviny:</span> cca 3,3 % (hlavně kasein 80 % a syrovátkové bílkoviny)</li>
                  <li><span className="font-semibold">Laktóza:</span> cca 4,8 %</li>
                  <li><span className="font-semibold">Minerální látky:</span> Ca²⁺, K⁺, Na⁺, Cl⁻</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologické vlastnosti */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Technologické vlastnosti a zpracování
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Technologické vlastnosti</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Kyselost</li>
                <li>• Syřitelnost/kvasnost</li>
                <li>• Termostabilita</li>
              </ul>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Základní zpracování</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Odstřeďování a standardizace tučnosti</li>
                <li>• Homogenizace a deaerace</li>
                <li>• Pasterace:
                  <ul className="pl-6 mt-2 space-y-1">
                    <li>- 63 °C / 30 min (dlouhodobá)</li>
                    <li>- 72 °C / 15 s (šetrná)</li>
                    <li>- 85 °C / 5 s (vysoká)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="milk-gradient py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Chcete se dozvědět více o mléce?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Prozkoumejte naše vzdělávací materiály a objevte fascinující svět
            mlékárenství a zpracování mléka.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Prozkoumat materiály
          </button>
        </div>
      </section>
    </div>
  );
}
