export default function obtenerNombrePaisesLimitrofes(borders) {
  async (borders) => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const todosPaises = await response.json();

    return borders
      .map((codigo) => {
        const pais = todosPaises.find((p) => p.cca3 === codigo);
        return pais ? pais.name.common : null;
      })
      .filter(Boolean);
  };
}
