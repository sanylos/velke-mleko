import TopicLayout from "@/components/TopicLayout";

export default function SomatickeBunkyPage() {
    return (
        <TopicLayout title="Somatické buňky v mléce">
            {/* Základní charakteristika */}
            <section className="mb-12">
                <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
                    <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
                        <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                        Charakteristika somatických buněk
                    </h2>
                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                        <p className="text-gray-700 mb-4">
                            Somatické buňky jsou buňky tělesných tkání, které se přirozeně vyskytují v mléce. Jejich počet (PSB) je důležitým ukazatelem zdravotního stavu mléčné žlázy a kvality mléka.
                        </p>
                        <h3 className="text-xl font-semibold text-blue-800 mb-3">Složení somatických buněk</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Epiteliální buňky (2-20 %)</li>
                            <li>Neutrofily (převládají při zánětu, 30-75 %)</li>
                            <li>Makrofágy (30-60 %)</li>
                            <li>Lymfocyty (10-24 %)</li>
                            <li>Ostatní buňky (eosinofily, bazofily)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Faktory ovlivňující PSB */}
            <section className="mb-12">
                <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
                    <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
                        <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                        Faktory ovlivňující PSB
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Fyziologické faktory</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Věk zvířete</li>
                                <li>Fáze laktace</li>
                                <li>Roční období</li>
                                <li>Stres</li>
                                <li>Způsob dojení</li>
                            </ul>
                        </div>
                        
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Patologické faktory</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Mastitida (zánět mléčné žlázy)</li>
                                <li>Bakteriální infekce</li>
                                <li>Poranění vemene</li>
                                <li>Systémová onemocnění</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hodnoty PSB a jejich interpretace */}
            <section className="mb-12">
                <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
                    <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
                        <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                        Hodnoty PSB a jejich interpretace
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Krávy</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>{"< 200 000/ml: Výborná kvalita"}</li>
                                <li>{"200 000 - 400 000/ml: Dobrá kvalita"}</li>
                                <li>{"> 400 000/ml: Zhoršená kvalita"}</li>
                                <li>{"> 800 000/ml: Pravděpodobná mastitida"}</li>
                            </ul>
                        </div>
                        
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Kozy</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>{"< 1 000 000/ml: Normální"}</li>
                                <li>{"1 - 1,5 mil/ml: Zvýšené"}</li>
                                <li>{"> 1,5 mil/ml: Vysoké"}</li>
                            </ul>
                        </div>
                        
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Ovce</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>{"< 500 000/ml: Normální"}</li>
                                <li>{"500 000 - 1 mil/ml: Zvýšené"}</li>
                                <li>{"> 1 mil/ml: Vysoké"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enzymatický aparát somatických buněk */}
            <section className="mb-12">
                <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
                    <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
                        <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                        Enzymatický aparát somatických buněk
                    </h2>
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-800 mb-3">Hlavní enzymy</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>N-acetyl-β-D-glukosaminidasa</li>
                                <li>Katalasa</li>
                                <li>Laktátdehydrogenasa</li>
                                <li>Alkalická fosfatasa</li>
                                <li>Kyselá fosfatasa</li>
                            </ul>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Lysozym</li>
                                <li>Myeloperoxidasa</li>
                                <li>Beta-glukuronidasa</li>
                                <li>Arylsulfatasa</li>
                                <li>Různé proteasy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Význam sledování PSB */}
            <section className="mb-12">
                <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
                    <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
                        <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                        Význam sledování PSB
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Pro chovatele</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Kontrola zdravotního stavu stáda</li>
                                <li>Včasná detekce mastitid</li>
                                <li>Ekonomické aspekty produkce</li>
                                <li>Optimalizace managementu dojení</li>
                            </ul>
                        </div>
                        
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Pro zpracovatele</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Kvalita mléčných výrobků</li>
                                <li>Trvanlivost produktů</li>
                                <li>Technologické vlastnosti mléka</li>
                                <li>Ekonomické aspekty zpracování</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </TopicLayout>
    );
}
