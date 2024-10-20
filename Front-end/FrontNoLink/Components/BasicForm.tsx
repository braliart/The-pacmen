"use client";
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

// Definir la interfaz para los campos
interface Field {
  label: string;
  type: "text" | "number" | "select" | "radio" | "autocomplete";
  options?: string[];
}

interface FormProps {
  forms: { id: number; fields: Field[] }[];
}

// Función para normalizar texto eliminando acentos
const normalizeText = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
};

const BasicForm: React.FC<FormProps> = ({ forms }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentForm, setCurrentForm] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Lista de alergias más comunes (simplificada para el ejemplo)
  const commonAllergies = [
    "Polen",
    "Césped",
    "Ácaros",
    "Caspa de animales",
    "Picadura de insectos",
    "Látex",
    "Maní",
    "Mariscos",
    "Leche",
    "Huevos",
    "Trigo",
    "Soya",
    "Frutos secos",
    "Chocolate",
    "Gluten",
    "Penicilina",
    "Sulfatos",
    "Fragancias",
    "Nueces",
    "Moho",
    "Polvo",
    "Aspirina",
    "Bismuto",
    "Carbón activado",
    "Ciprofloxacina",
    "Cloro",
    "Clorofila",
    "Codeína",
    "Dextrosa",
    "Eucalipto",
    "Fenol",
    "Fluoruro",
    "Glicerina",
    "Ibuprofeno",
    "Insecticidas",
    "Jabón",
    "Jalea real",
    "Kefir",
    "Leche de cabra",
    "Magnesio",
    "Mentol",
    "Naranja",
    "Ocre",
    "Oxígeno",
    "Paracetamol",
    "Pepino",
    "Polen de abedul",
    "Quinina",
    "Resina",
    "Sal",
    "Sándalo",
    "Té verde",
    "Tinta",
    "Uva",
    "Vinagre",
    "Xilol",
    "Yodo",
    "Zinc",
    "Albahaca",
    "Anacardos",
    "Arroz",
    "Berenjena",
    "Café",
    "Cacao",
    "Canela",
    "Cerezas",
    "Champiñones",
    "Cloroquina",
    "Cobre",
    "Coliflor",
    "Comino",
    "Cordero",
    "Dátiles",
    "Durazno",
    "Eritromicina",
    "Especias",
    "Esturión",
    "Fresas",
    "Gengibre",
    "Ginkgo",
    "Habas",
    "Huevo de pato",
    "Hummus",
    "Jengibre",
    "Jojoba",
    "Kiwi",
    "Lentejas",
    "Lima",
    "Limón",
    "Lúpulo",
    "Maíz",
    "Mandarina",
    "Melocotón",
    "Melón",
    "Miel",
    "Moras",
    "Mostaza",
    "Nuez de macadamia",
    "Ostras",
    "Papaya",
    "Pasta",
    "Patata",
    "Pecanas",
    "Perejil",
    "Pescado blanco",
    "Pistacho",
    "Puerro",
    "Quinoa",
    "Raíz de regaliz",
    "Romero",
    "Sésamo",
    "Soja",
    "Tabaco",
    "Tomate",
    "Trufa",
    "Vainilla",
    "Wasabi",
    "Yogur",
    "Zanahoria",
    "Aceite de palma",
    "Aceitunas",
    "Almendras",
    "Anís",
    "Avena",
    "Azúcar",
    "Bacon",
    "Batata",
    "Berro",
    "Bicarbonato de sodio",
    "Brócoli",
    "Cacahuetes",
    "Calabacín",
    "Calamar",
    "Camu camu",
    "Cebada",
    "Cebolla",
    "Centeno",
    "Chía",
    "Cilantro",
    "Ciruelas",
    "Clavos de olor",
    "Col rizada",
    "Conservantes",
    "Coral",
    "Delfín",
    "Durian",
    "Edulcorantes",
    "Erizos de mar",
    "Espinaca",
    "Espárragos",
    "Galletas",
    "Garbanzo",
    "Granada",
    "Guacamole",
    "Habas de soja",
    "Helado",
    "Higos",
    "Hinojo",
    "Jazmín",
    "Kale",
    "Kéfir",
    "Langosta",
    "Lasaña",
    "Lauril sulfato de sodio",
    "Lavanda",
    "Lenteja",
    "Levadura",
    "Lúpulo",
    "Macedonia",
    "Manteca de cerdo",
    "Mantequilla",
    "Maracuyá",
    "María Luisa",
    "Mejillones",
    "Menta",
    "Miel de abeja",
    "Miso",
    "Naranja sanguina",
    "Nopal",
    "Nuez de Brasil",
    "Nuez de anacardo",
    "Orégano",
    "Pan",
    "Papaya verde",
    "Pasta de tomate",
    "Pimiento",
    "Piña",
    "Plátano",
    "Pomelo",
    "Queso",
    "Rábano",
    "Ralladura de limón",
    "Raíz de ginseng",
    "Remolacha",
    "Repollo",
    "Riboflavina",
    "Rúcula",
    "Salmón",
    "Salsa de soja",
    "Sardina",
    "Sirope de arce",
    "Sobrasada",
    "Stevia",
    "Tamarindo",
    "Tapioca",
    "Tofu",
    "Trucha",
    "Uvas pasas",
    "Vacuna de la gripe",
    "Vejiga de pescado",
    "Vinagre de manzana",
    "Yacón",
    "Yogur de soja",
    "Zanahoria morada",
    "Achiote",
    "Acerola",
    "Achicoria",
    "Aguacate",
    "Alazor",
    "Albaricoque",
    "Alcaravea",
    "Almejas",
    "Alubias",
    "Amaranto",
    "Anona",
    "Arándano",
    "Arroz integral",
    "Asado",
    "Atún",
    "Azafrán",
    "Azúcar moreno",
    "Bacalao",
    "Bambú",
    "Barra de granola",
    "Batido",
    "Bayas de goji",
    "Berenjena blanca",
    "Bicarbonato",
    "Bizcocho",
    "Bombones",
    "Bonito",
    "Borraja",
    "Brotes de soja",
    "Calabaza",
    "Caldo de pescado",
    "Caléndula",
    "Camarón",
    "Camu Camu",
    "Caramelo",
    "Carne de cangrejo",
    "Carragenina",
    "Cartílago de tiburón",
    "Castaña",
    "Cebolla morada",
    "Cerdo",
    "Chalota",
    "Champiñones shiitake",
    "Chicle",
    "Chirimoya",
    "Chucrut",
    "Cidra",
    "Cilantro seco",
    "Coca",
    "Codorniz",
    "Coles de Bruselas",
    "Condimento",
    "Crustáceos",
    "Dátiles frescos",
    "Edamame",
    "Endivia",
    "Escarola",
    "Espuma de leche",
    "Esturión",
    "Fecula de maíz",
    "Fetuccini",
    "Figo",
    "Fresas silvestres",
    "Galletas de avena",
    "Garbanzos cocidos",
    "Gelatina",
    "Gelatina de cerdo",
    "Ginkgo biloba",
    "Ginseng",
    "Gomas de mascar",
    "Gorgonzola",
    "Grana padano",
    "Grasas hidrogenadas",
    "Guayaba",
    "Guisante",
    "Hamburguesa",
    "Helado de vainilla",
    "Hemp",
    "Higo chumbo",
    "Hinojo fresco",
    "Huevos de codorniz",
    "Jabón de coco",
    "Jalapeño",
    "Jengibre fresco",
    "Jojoba aceite",
    "Kamut",
    "Kéfir de coco",
    "Ketchup",
    "Kiwi amarillo",
    "Kombucha",
    "Lactosa",
    "Lard",
    "Leche condensada",
    "Leche de almendras",
    "Leche de soja",
    "Leche evaporada",
    "Lentejas rojas",
    "Limón verde",
    "Limoncillo",
    "Lino",
    "Litchi",
    "Lupino",
    "Macedonia de frutas",
    "Maicena",
    "Mango",
    "Mango verde",
    "Manteca de cacao",
    "Margarina",
    "Marisco",
    "Mascarpone",
    "Melaza",
    "Melón cantalupo",
    "Merluza",
    "Miso blanco",
    "Morcilla",
    "Mostaza en grano",
    "Nabo",
    "Naranja agria",
    "Nata",
    "Nectarina",
    "Nuez moscada",
    "Obleas",
    "Oruga",
    "Ostra del Pacífico",
    "Pan integral",
    "Pan sin gluten",
    "Papaya madura",
    "Pavo",
    "Pepino agrio",
    "Pepino dulce",
    "Pera",
    "Perlón",
    "Pimienta negra",
    "Pimienta rosa",
    "Pimiento morrón",
    "Pistacho verde",
    "Plátano maduro",
    "Pollo",
    "Pulpo",
    "Puré de patata",
    "Queso azul",
    "Queso brie",
    "Queso cheddar",
    "Queso feta",
    "Queso mozzarella",
    "Queso parmesano",
    "Queso ricotta",
    "Quinua",
    "Rábano blanco",
    "Raviolis",
    "Remolacha azucarera",
    "Rúcula salvaje",
    "Sal marina",
    "Salchicha",
    "Salchichón",
    "Salsa BBQ",
    "Salsa de pescado",
    "Sardina en lata",
    "Sashimi",
    "Seitan",
    "Semillas de amapola",
    "Semillas de calabaza",
    "Semillas de cáñamo",
    "Semillas de girasol",
    "Sesame",
    "Seta",
    "Sirope de agave",
    "Sobrasada de Mallorca",
    "Sorbete",
    "Soya texturizada",
    "Tahini",
    "Tamari",
    "Tequila",
    "Tibicos",
    "Tilapia",
    "Tomate cherry",
    "Toronja",
    "Trigo sarraceno",
    "Trucha de río",
    "Turba",
    "Turrón",
    "Uva roja",
    "Uva verde",
    "Vaca",
    "Vainilla en polvo",
    "Vermouth",
    "Vinagre balsámico",
    "Vinagre de sidra",
    "Vino blanco",
    "Yacón en polvo",
    "Yogur de almendras",
    "Zumo de arándano",
    "Zumo de granada",
    "Zumo de naranja",
    "Zumo de tomate",
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddAllergy = (allergy: string) => {
    if (!selectedAllergies.includes(allergy)) {
      setSelectedAllergies([...selectedAllergies, allergy]);
      setSearchTerm(""); // Limpiar el término de búsqueda después de seleccionar una alergia
    }
  };

  const handleRemoveAllergy = (allergy: string) => {
    setSelectedAllergies(selectedAllergies.filter((item) => item !== allergy));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentForm < forms.length - 1) {
      setCurrentForm(currentForm + 1);
    } else {
      alert("Todos los formularios completados.");
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900" : "bg-[#f2f1f6]"
      }`}
    >
      {/* Toggle Theme Button */}
      <div className="absolute top-4 right-4 text-3xl cursor-pointer">
        {isDarkMode ? (
          <FaSun className="text-yellow-400" onClick={toggleTheme} />
        ) : (
          <FaMoon className="text-gray-800" onClick={toggleTheme} />
        )}
      </div>

      {/* Form Container with Transition */}
      <div className="relative w-full max-w-sm md:max-w-md overflow-hidden">
        <div
          key={currentForm}
          className={`p-6 rounded-2xl shadow-lg transition-transform transform duration-500 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">{`Formulario ${
            currentForm + 1
          }`}</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {forms[currentForm].fields.map((field, index) => (
              <div key={index}>
                <label
                  className={`block font-medium mb-1 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                  htmlFor={`field-${currentForm}-${index}`}
                >
                  {field.label}
                </label>

                {field.type === "text" || field.type === "number" ? (
                  <input
                    id={`field-${currentForm}-${index}`}
                    type={field.type}
                    name={`field-${currentForm}-${index}`}
                    value={formData[`field-${currentForm}-${index}`] || ""}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-black"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                    placeholder={`Ingresa ${field.label.toLowerCase()}`}
                  />
                ) : field.type === "select" && field.options ? (
                  <select
                    id={`field-${currentForm}-${index}`}
                    name={`field-${currentForm}-${index}`}
                    value={formData[`field-${currentForm}-${index}`] || ""}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-black"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                  >
                    <option value="">Selecciona una opción</option>
                    {field.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === "radio" && field.options ? (
                  <div className="flex flex-col">
                    {field.options.map((option, idx) => (
                      <label key={idx} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id={`field-${currentForm}-${index}-${idx}`}
                          name={`field-${currentForm}-${index}`}
                          value={option}
                          checked={
                            formData[`field-${currentForm}-${index}`] === option
                          }
                          onChange={handleInputChange}
                          className="focus:ring-blue-500"
                        />
                        <span
                          className={isDarkMode ? "text-white" : "text-black"}
                        >
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            {/* Buscador de Alergias */}
            {currentForm === 1 && (
              <div className="mt-4">
                <label
                  className={`block font-medium mb-1 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Alergias Comunes
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-black"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                  placeholder="Buscar alergias..."
                />
                {searchTerm && (
                  <div
                    className={`mt-2 max-h-32 overflow-y-auto rounded-lg shadow-lg p-2 ${
                      isDarkMode
                        ? "bg-gray-700 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {commonAllergies
                      .filter((allergy) =>
                        normalizeText(allergy).startsWith(
                          normalizeText(searchTerm)
                        )
                      )
                      .map((allergy, idx) => (
                        <div
                          key={idx}
                          className={`cursor-pointer p-1 rounded ${
                            isDarkMode
                              ? "hover:bg-gray-600"
                              : "hover:bg-blue-100"
                          }`}
                          onClick={() => handleAddAllergy(allergy)}
                        >
                          {allergy}
                        </div>
                      ))}
                  </div>
                )}

                {/* Mostrar alergias seleccionadas como chips */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedAllergies.map((allergy, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-black px-2 py-1 rounded-full flex items-center space-x-1"
                    >
                      <span>{allergy}</span>
                      <button
                        type="button"
                        className="text-red-500 ml-1"
                        onClick={() => handleRemoveAllergy(allergy)}
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium"
            >
              {currentForm < forms.length - 1 ? "Siguiente" : "Finalizar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicForm;
