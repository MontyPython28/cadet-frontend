import {Classes} from '@blueprintjs/core';
import classNames from 'classnames';
import * as React from 'react';

type State = {
  loading: boolean;
};

class SideContentSound extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { loading: true };
  }

  public componentDidMount() {
    //do nothing
  }

  public render() {
    // Default text will be hidden by visualizer.js when 'draw_data' is called
    return (
	
      <div className={classNames('sa-list-visualizer', Classes.DARK)}>
        <p id="data-visualizer-default-text" className={Classes.RUNNING_TEXT}>
          The sound tab allows you to play and pause your custom sounds, change their volume and add additional filters to change how the audio sounds..
          <br />
          <br />
          Have fun experimenting with the filters!
          <br />
        </p>
		<button id = "soundButton">
			Play
		</button>
      </div>
    );
  }

}

export default SideContentSound;
