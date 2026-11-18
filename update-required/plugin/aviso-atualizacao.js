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

module.exports.getStreams = async function (tmdbId, mediaType, season, episode) {
  if (String(tmdbId || "").toLowerCase().indexOf("insanox-atualize") >= 0) return [];
  return [
    {
      name: "Insanox",
      title: AVISO_TITULO,
      description: AVISO_DESCRICAO,
      quality: "Aviso",
      provider: "Insanox",
      url: AVISO_URL
    }
  ];
};