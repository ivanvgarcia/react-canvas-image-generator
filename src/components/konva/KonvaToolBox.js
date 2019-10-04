import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reorderAvatars, increaseStep, reduceStep } from 'actions/avatar';
import { ReactComponent as Back } from 'components/svgs/back.svg';
import { ReactComponent as Next } from 'components/svgs/next.svg';
import { ReactComponent as Undo } from 'components/svgs/undo.svg';
import { ReactComponent as Redo } from 'components/svgs/redo.svg';

const KonvaToolBox = ({ goBack, goNext, screen }) => {
  const history = useSelector(state => state.avatar.history);
  const step = useSelector(state => state.avatar.step);
  const dispatch = useDispatch();

  const addVibration = () => {
    window.navigator.vibrate(200);
  };

  const handleUndo = () => {
    if (step === 0) {
      return;
    }
    dispatch(reduceStep());
    const previous = history[step - 1];
    dispatch(reorderAvatars(previous));
  };

  const handleRedo = () => {
    if (step === history.length - 1) {
      return;
    }
    dispatch(increaseStep());
    const next = history[step + 1];
    dispatch(reorderAvatars(next));
  };

  return (
    <KonvaToolBox>
      {screen.current > 1 && (
        <Back onClick={goBack} onTouchStart={addVibration}>
          Back
        </Back>
      )}
      {screen.current < 4 && (
        <Next onClick={goNext} onTouchStart={addVibration}>
          Undo
        </Next>
      )}
      {screen.current === 3 && (
        <>
          <Undo onClick={handleUndo} onTouchStart={addVibration}>
            Undo
          </Undo>
          <Redo onClick={handleRedo} onTouchStart={addVibration}>
            Undo
          </Redo>
        </>
      )}
    </KonvaToolBox>
  );
};

export default KonvaToolBox;
