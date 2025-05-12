import TopicLayout from "@/components/TopicLayout";

export default function EnzymyPage() {
    return (
        <TopicLayout title="Enzymy v mléce">
            {/* Transferasy */}
            <section className="mb-12">
                <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
                    <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
                        <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                        Transferasy
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Katalyzují přenos skupin atomů nebo částí molekul mezi dvěma substráty.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg mb-4">
                        <h3 className="text-xl font-semibold text-blue-800 mb-3">Hlavní typy</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Aspartam-aminotransferasa a alaninaminotransferasa (katalyzují transaminace aminokyselin)</li>
                            <li>Glykokinasa a pyruvátkinasa (katalyzují fermentaci laktózy)</li>
                            <li>Fosfotransferasy, hexosotransferasy, aminotransferasy, acylaminotransferasy</li>
                            <li>Galaktosyltransferasa (součást enzymu laktosynthetasy)</li>
                            <li>γ-glutamyltransferasa (účastní se syntézy mléčných bílkovin)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Hydrolasy */}
            <section className="mb-12">
                <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
                    <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
                        <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                        Hydrolasy
                    </h2>

                    {/* Lipasy */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Lipasy</h3>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>Hydrolyzují triacylglyceroly na glycerol a mastné kyseliny</li>
                                <li>Největší aktivitu vykazují v mlezivu a mastitidním mléce</li>
                                <li>Mléčná lipasa (LPL) hydrolyzuje VLDL lipoproteiny</li>
                                <li>V kravském mléce je vázána hlavně na kasein αs (až 80 %)</li>
                                <li>Optimální podmínky: pH 9,2 a teplota 37 °C</li>
                                <li>Je termolabilní, pasterace snižuje její aktivitu</li>
                            </ul>
                        </div>
                    </div>

                    {/* Fosfatasy */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Fosfatasy</h3>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>Hydrolyzují vazbu estericky vázané kyseliny fosforečné</li>
                                <li>Bovinní mléko obsahuje alkalickou (ALP) a kyselou fosfatasu (ACP)</li>
                                <li>ALP slouží jako index hodnocení účinnosti pasterace</li>
                                <li>Defosforylace kaseinů snižuje tepelnou stabilitu mléčných výrobků</li>
                            </ul>
                        </div>
                    </div>

                    {/* Proteasy */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Proteasy</h3>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>Zahrnují nativní proteasy (např. plasmin) a mikrobiální proteasy</li>
                                <li>Hydrolyzují bílkoviny, vedou ke zvýšení nebílkovinných sloučenin</li>
                                <li>Mikrobiální proteasy produkují bakterie rodů Pseudomonas, Flavobacterium, Proteus, Bacillus, Alcaligenes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Antibakteriální enzymy */}
            <section className="mb-12">
                <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
                    <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
                        <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                        Antibakteriální enzymy
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Laktoferin (LF)</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Glykoprotein vázající ionty Fe</li>
                                <li>Antibakteriální, antifungální a antivirová aktivita</li>
                                <li>Nutriční význam (zdroj AK, Fe)</li>
                                <li>Bioaktivní a imunoregulační účinky ve střevě</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Lysozym</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Štěpí glykosidické vazby mukopolysacharidů</li>
                                <li>Působí baktericidně</li>
                                <li>Brání růstu mikroorganismů</li>
                                <li>Množství závisí na obsahu leukocytů</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Význam enzymů */}
            <section className="mb-12">
                <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-all">
                    <h2 className="text-3xl font-semibold text-blue-900 mb-6 flex items-center">
                        <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                        Význam enzymů v mléce
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Diagnostický význam</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Indikace zdravotního stavu mléčné žlázy</li>
                                <li>Indikace správnosti tepelného ošetření</li>
                                <li>Hodnocení kvality mléka</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Technologický význam</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Žádoucí změny v mléčných výrobcích</li>
                                <li>Rozklad složek mléka</li>
                                <li>Vliv na trvanlivost produktů</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">Další oxidoreduktasy</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Katalasa</li>
                                <li>Xantinooxidasa</li>
                                <li>Sulfhydryloxidasa</li>
                                <li>Peroxid-dismutasa</li>
                                <li>Laktátdehydrogenasa (LDH)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </TopicLayout>
    );
}
