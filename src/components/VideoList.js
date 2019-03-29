import React, { Component } from "react";
import { List, Image, Dimmer, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { reproduzVideo } from '../store/actions/reproduz-video'; 
// import { dispatch } from "rxjs/internal/observable/pairs";

class VideoList extends Component{
  renderVideo(video, index){
    return (
      <List animated verticalAlign="middle" key={index}>
        <List.Item onClick={() => this.props.reproduz(video)} >
          
          <Image rounded size="small" src={video.snippet.thumbnails.high.url} />
          
          <List.Content>
            <List.Header>{video.snippet.title}</List.Header>
            {/* <List.Description>{video.snippet.description}</List.Description> */}
          </List.Content>
        </List.Item>
      </List>
    );
  }

  render(){
    return (
      <div className="video-list">
      {
        this.props.carregando && (<Dimmer active inverted>
          <Loader size="medium">Carregando...</Loader>
        </Dimmer>)
      }
        {
          this.props.videos.map((video, index) => {
            return this.renderVideo(video, index)
          })
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reproduz: (video) => dispatch(reproduzVideo(video))
  }
}

const mapStateToProps = state => {
  return {
    videos: state.busca.videos,
    carregando: state.busca.carregando,
    erro: state.busca.erro
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);
