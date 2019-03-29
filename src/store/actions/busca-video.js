import youtubeSearch from "youtube-api-v3-search";
import YTApi from "../../Api";
import { dispatch } from "rxjs/internal/observable/range";

const API_KEY = YTApi;

export const buscaVideoInicio = () => {
  return {
    type: 'BUSCA_VIDEO_INICIO', // type: Nome da Action
    carregando: true,
    erro: false
  }
}

export const buscaVideoSucesso = (videos) => {
  return {
    type: 'BUSCA_VIDEO_SUCESSO', // type: Nome da Action
    videos,
    carregando: false,
    erro: false
  }
}

export const buscaVideoErro = () => {
  return {
    type: 'BUSCA_VIDEO_ERRO', // type: Nome da Action
    carregando: false,
    erro: true
  }
}

export const buscaVideo = (termo) => { // busca o video passando o Termo
  return dispatch => {
    dispatch(buscaVideoInicio()) // Chama dipatch buscaVideoInicio
    youtubeSearch(API_KEY, {q: termo})
    .then((data) => dispatch(buscaVideoSucesso(data.items))) // Chama action quando da sucesso
    .catch(() =>dispatch(buscaVideoErro())) // Chama action quando da erro
  }
}

