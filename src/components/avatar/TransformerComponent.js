import React, { Component } from 'react';
import { Transformer } from 'react-konva';

class TransformerComponent extends Component {
  componentDidMount() {
    this.checkNode();
  }
  componentDidUpdate() {
    this.checkNode();
  }
  checkNode() {
    const stage = this.transformer.getStage();
    const { selectedAvatar } = this.props;
    const selectedNode = stage.findOne('.' + selectedAvatar);
    if (selectedNode === this.transformer.node()) {
      return;
    }
    if (selectedNode) {
      this.transformer.attachTo(selectedNode);
      this.transformer.anchorStroke('#db476b');
      this.transformer.anchorFill('#db476b');
      this.transformer.anchorSize(20);
      this.transformer.borderStroke('#000');
      this.transformer.borderDash([20, 10]);
      this.transformer.zIndex(this.props.zIndex);
    } else {
      this.transformer.detach();
    }

    this.transformer.getLayer().batchDraw();
  }
  render() {
    return (
      <Transformer
        ref={node => {
          this.transformer = node;
        }}
      />
    );
  }
}

export default TransformerComponent;
