import TopicLayout from "@/components/TopicLayout";

export default function JakostPage() {
  return (
    <TopicLayout title="Faktory ovlivňující jakost mléka">      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4 text-center">
          Hlavní faktory jakosti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="w-2 h-12 bg-blue-600 rounded-full mr-4"></div>
              <h3 className="text-xl font-semibold text-blue-800">
                Biologické faktory
              </h3>
            </div>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Plemeno dojnic</li>
              <li>Zdravotní stav zvířete</li>
              <li>Laktační období</li>
              <li>Věk dojnice</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="w-2 h-12 bg-blue-600 rounded-full mr-4"></div>
              <h3 className="text-xl font-semibold text-blue-800">
                Vnější faktory
              </h3>
            </div>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Výživa a krmení</li>
              <li>Způsob chovu</li>
              <li>Roční období</li>
              <li>Dojící zařízení a hygiena dojení</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">
          Sledované parametry kvality
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>
                <h3 className="text-xl font-semibold text-blue-800">
                  Chemické složení
                </h3>
              </div>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Obsah tuku</li>
                <li>Obsah bílkovin</li>
                <li>Laktóza</li>
                <li>Sušina</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
                <h3 className="text-xl font-semibold text-blue-800">
                  Hygienické parametry
                </h3>
              </div>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Celkový počet mikroorganismů</li>
                <li>Počet somatických buněk</li>
                <li>Inhibiční látky</li>
                <li>Bod mrznutí</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
                <h3 className="text-xl font-semibold text-blue-800">
                  Technologické vlastnosti
                </h3>
              </div>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Syřitelnost</li>
                <li>Termostabilita</li>
                <li>Kysací schopnost</li>
                <li>Oxidační stabilita</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </TopicLayout>
  );
}
