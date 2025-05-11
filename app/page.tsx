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
            <div className="flex gap-4 mt-8">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Více informací
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                O projektu
              </button>
            </div>
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

      {/* Somatické buňky */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Somatické buňky v mléce
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Somatické buňky jsou přirozenou součástí mléka a jejich počet je 
                důležitým ukazatelem zdravotního stavu dojnic a kvality mléka.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Indikátor zdraví vemene</li>
                <li>Vliv na kvalitu mléčných výrobků</li>
                <li>Standardy kvality a limity</li>
                <li>Monitoring a kontrola</li>
              </ul>
            </div>
            <div className="flex-1 milk-drop bg-blue-100 rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Věděli jste?
                </h3>
                <p className="text-gray-700">
                  Počet somatických buněk v mléce je klíčovým parametrem při určování
                  kvality mléka a má přímý vliv na jeho cenu a zpracovatelnost.
                </p>
              </div>
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
