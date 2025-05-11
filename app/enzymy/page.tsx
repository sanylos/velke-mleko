import TopicLayout from "@/components/TopicLayout";

export default function EnzymyPage() {
    return (
        <TopicLayout title="Enzymy v mléce">
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-900 mb-4">
                    Přirozené enzymy v mléce
                </h2>
                <div className="bg-white shadow-lg rounded-xl p-6 mb-6 border border-blue-100">
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                        <li>Alkalická fosfatáza - indikátor pasterace</li>
                        <li>Peroxidáza - antioxidační působení</li>
                        <li>Kataláza - rozklad peroxidu vodíku</li>
                        <li>Lipáza - štěpení tuků</li>
                        <li>Xantinoxidáza - metabolismus purinů</li>
                        <li>Laktoperoxidáza - antimikrobiální účinky</li>
                    </ul>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-blue-900 mb-4">
                    Význam enzymů v mlékařství
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-2 h-12 bg-blue-600 rounded-full mr-4"></div>
                            <h3 className="text-xl font-semibold text-blue-900">
                                Technologický význam
                            </h3>
                        </div>
                        <p className="text-gray-700">
                            Enzymy hrají klíčovou roli při zpracování mléka a výrobě
                            mléčných výrobků. Ovlivňují proces zrání sýrů, stabilitu
                            mléčného tuku a další vlastnosti.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-2 h-12 bg-blue-600 rounded-full mr-4"></div>
                            <h3 className="text-xl font-semibold text-blue-900">
                                Kontrola kvality
                            </h3>
                        </div>
                        <p className="text-gray-700">
                            Některé enzymy slouží jako indikátory správného tepelného
                            ošetření mléka nebo jeho mikrobiologické kvality.
                        </p>
                    </div>
                </div>
            </section>
        </TopicLayout>
    );
}
