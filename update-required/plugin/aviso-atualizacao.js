/*
 * Insanox - aviso de atualizacao obrigatoria.
 *
 * Este plugin substitui todos os scrapers antigos: para qualquer filme ou serie
 * ele devolve uma unica fonte, que e o video de aviso. Os itens do addon
 * (insanox-atualize-*) nao recebem nada daqui porque o addon ja entrega a fonte.
 */
var AVISO_URL = "https://raw.githubusercontent.com/viniwalkersp2023/aaaaaa/main/update-required/midia/aviso.mp4";
var AVISO_TITULO = "ATUALIZE O INSANOX";
var AVISO_DESCRICAO = "Fale com @viniwalkersp para conseguir a versão nova.";

var getStreamsAviso = async function (tmdbId, mediaType, season, episode) {
  if (String(tmdbId || "").toLowerCase().indexOf("insanox-atualize") >= 0) return [];
  return [
    {
      name: "Insanox",
      title: AVISO_TITULO,
      description: AVISO_DESCRICAO,
      /* Numerico como os providers de producao: e o formato que as versoes
         antigas do app esperam na qualidade da fonte. */
      quality: 1080,
      group: "Insanox",
      provider: "Insanox",
      headers: {},
      type: "video",
      url: AVISO_URL
    }
  ];
};

/* O runtime antigo procura global.getStreams; o atual le module.exports.
   A resolucao do global segue o padrao dos providers de producao, porque
   runtimes antigos nao tem globalThis. */
var __global = (typeof globalThis !== "undefined")
  ? globalThis
  : (typeof global !== "undefined" ? global : (typeof self !== "undefined" ? self : this));

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getStreams: getStreamsAviso };
  module.exports.getStreams = getStreamsAviso;
} else {
  __global.getStreams = getStreamsAviso;
}