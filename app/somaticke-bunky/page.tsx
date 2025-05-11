import TopicLayout from "@/components/TopicLayout";

export default function SomatickeBunkyPage() {
  return (
    <TopicLayout title="Somatické buňky v mléce">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          Co jsou somatické buňky?
        </h2>        <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100">
          <p className="mb-4 text-gray-700">
            Somatické buňky jsou buňky tělesné tkáně, které se přirozeně vyskytují v mléce. 
            Jejich počet je důležitým ukazatelem zdravotního stavu mléčné žlázy a kvality mléka.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Typy somatických buněk
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Epiteliální buňky</li>
                <li>Leukocyty</li>
                <li>Neutrofily</li>
                <li>Makrofágy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Normální hodnoty
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{"<"} 200 000 buněk/ml: Výborná kvalita</li>
                <li>200 000 - 400 000 buněk/ml: Dobrá kvalita</li>
                <li>{">"} 400 000 buněk/ml: Zvýšený počet</li>
                <li>{">"} 800 000 buněk/ml: Indikace mastitidy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          Význam sledování somatických buněk
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Zdravotní aspekt
            </h3>
            <p className="text-gray-700">
              Počet somatických buněk je klíčovým ukazatelem zdraví vemene 
              a včasným indikátorem mastitidy.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Ekonomický aspekt
            </h3>
            <p className="text-gray-700">
              Zvýšený počet somatických buněk má přímý vliv na cenu mléka 
              a ekonomiku chovu dojnic.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Technologický aspekt
            </h3>
            <p className="text-gray-700">
              Vysoký počet somatických buněk ovlivňuje zpracovatelnost mléka 
              a kvalitu mléčných výrobků.
            </p>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
}
