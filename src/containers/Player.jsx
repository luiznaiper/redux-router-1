import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const hasPlaying = Object.keys(props.playing).length > 0;
  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    </div>
  ) : (
    <>
      <h2>That video does not exist</h2>
      <Link to="/">Back to home</Link>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
