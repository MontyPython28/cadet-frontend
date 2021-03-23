import { Classes } from '@blueprintjs/core';
import classNames from 'classnames';
import * as React from 'react';

type State = {
  loading: boolean;
  playing: boolean;
};


class SideContentSound extends React.Component<{}, State> {
  
  constructor(props: any) {
    super(props);
    this.state = { loading: true, playing: true};
  }

  public componentDidMount() {
	//do nothing
  }

  public render() {
    
    return (
      <div className={classNames('sa-list-visualizer', Classes.DARK)}>
        <p id="sound-default-text" className={Classes.RUNNING_TEXT}>
          The sound tab gives you control over your custom sounds. You can play, pause, adjust the volume and download your sounds.
          <br />
 
		  
          <audio controls src = "" id = "sound-tab-player" style={{width: "100%"}}></audio>
          <br />
        </p>
      
      </div>
      
    );
  }

}

export default SideContentSound;
