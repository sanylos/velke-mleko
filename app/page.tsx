export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/milk-pattern.png')] opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-8 items-center text-center">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 tracking-tight">
                VELKÉ MLÉKO
              </h1>
              <p className="text-xl md:text-2xl text-blue-800/80 max-w-2xl mx-auto leading-relaxed">
                Poznejte fascinující svět mléka - zdroj života, výživy a zdraví
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#temata" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
              <a href="#statistiky" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium border border-blue-200">
                Statistiky v ČR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20" id="temata">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Klíčová témata</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                  <svg className="w-7 h-7 text-blue-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-900">Složení mléka</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Mléko je komplexní potravina obsahující proteiny, tuky, laktózu,
                minerály a vitamíny. Každá složka hraje důležitou roli v nutričním
                profilu a vlastnostech mléka.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                  <svg className="w-7 h-7 text-blue-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-900">Enzymy v mléce</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Enzymy jsou přirozenou součástí mléka a mají vliv na jeho
                skladovatelnost a zpracování. Mezi hlavní enzymy patří lipázy,
                proteázy a další bioaktivní složky.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                  <svg className="w-7 h-7 text-blue-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-blue-900">Mikrobiologie mléka</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
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
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white" id="statistiky">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Spotřeba a produkce mléka v ČR
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Klíčové ukazatele mlékárenského průmyslu v České republice
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white shadow-lg rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-8 h-8 text-blue-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-3">95,9 %</div>
                <p className="text-gray-700 text-lg">Tržnost mléka</p>
              </div>
            </div>
            <div className="group bg-white shadow-lg rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-8 h-8 text-blue-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-3">263 kg</div>
                <p className="text-gray-700 text-lg">Spotřeba mléčných výrobků<br />na obyvatele</p>
              </div>
            </div>
            <div className="group bg-white shadow-lg rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-8 h-8 text-blue-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-3">134 %</div>
                <p className="text-gray-700 text-lg">Soběstačnost v mléce</p>
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

      {/* Alergie a intolerance */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Alergie a intolerance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Alergie na mléčnou bílkovinu</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Tělo reaguje na přítomnost mléčných bílkovin (zejména kasein a syrovátkové bílkoviny).
                </p>
                <p>
                  Imunitně podmíněná reakce → může vést ke zhoršené toleranci mléka a mléčných produktů.
                </p>
                <p>
                  Uváděna jako samostatná zdravotní komplikace v rámci technologické kvality mléka.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Laktózová intolerance</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Porucha štěpení laktózy kvůli nedostatku enzymu laktáza.
                </p>
                <p>
                  Význam laktózy: slouží jako substrát pro růst mikroorganismů, je redukující disacharid
                  s omezenou rozpustností (→ nutnost řízené krystalizace).
                </p>
                <p>
                  V prezentacích je zdůrazněna technologická důležitost laktózy, ne její intolerance – ale
                  její absence/porucha trávení má výživový dopad.
                </p>
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

      {/* Somatické buňky */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Somatické buňky v mléce
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Co jsou somatické buňky?</h3>
              <p className="text-gray-700">
                Somatické buňky jsou buňky tělesné tkáně, které se přirozeně vyskytují v mléce.
                Jejich počet je důležitým ukazatelem zdravotního stavu mléčné žlázy a kvality mléka.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Význam pro kvalitu</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• {"<"} 200 000 buněk/ml: Výborná kvalita</li>
                <li>• 200 000 - 400 000 buněk/ml: Dobrá kvalita</li>
                <li>• {">"} 400 000 buněk/ml: Zvýšený počet</li>
                <li>• {">"} 800 000 buněk/ml: Indikace mastitidy</li>
              </ul>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Aspekty sledování</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Zdravotní stav dojnic</li>
                <li>• Ekonomika produkce</li>
                <li>• Technologická zpracovatelnost</li>
                <li>• Kvalita mléčných výrobků</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
