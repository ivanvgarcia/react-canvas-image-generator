/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { usePersistentCanvas } from 'components/hooks';
import EditTools from 'components/editTools/EditTools';
import avatarApi from 'config/baseUrl';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import KonvaCanvas from 'components/konva/KonvasCanvas';
import AvatarList from 'components/avatar/AvatarList';
import {
  Main,
  Buttons,
  CanvasContainer,
  ToolsContainer,
  CanvasCSS
} from 'components/canvas/CanvasStyles';
import {
  getAvatars,
  chooseAvatar,
  addChosenAvatar,
  reorderAvatars,
  increaseStep,
  reduceStep
} from 'actions/avatar';
import ConfirmationScreen from 'components/confirmationScreen/ConfirmationScreen';
import { ReactComponent as Back } from 'components/svgs/back.svg';
import { ReactComponent as Next } from 'components/svgs/next.svg';
import { ReactComponent as Undo } from 'components/svgs/undo.svg';
import { ReactComponent as Redo } from 'components/svgs/redo.svg';

const AvatarCanvas = props => {
  const user = useSelector(state => state.auth.user);
  const history = useSelector(state => state.avatar.history);
  const step = useSelector(state => state.avatar.step);
  const dispatch = useDispatch();
  const [data, setData, canvasRef, scene] = usePersistentCanvas();
  const [isMobile, setIsMobile] = useState(false);
  const [jpeg, setJpeg] = useState('');
  const [groupAvatarImg, setGroupAvatarImg] = useState('');
  const [avatar, selectedAvatar] = useState(null);
  const [konva, setKonva] = useState(null);
  const [screen, setScreen] = useState({
    previous: 0,
    current: 1,
    next: 2
  });

  const saveBase64 = async () => {
    let jpegUrl;
    if (konva) {
      jpegUrl = konva.toDataURL({
        mimetype: 'image/png',
        quality: 1,
        pixelRatio: 2 // or other value you need
      });
      setGroupAvatarImg(jpegUrl);
    }

    const canvas = canvasRef.current;

    if (canvas) {
      jpegUrl = canvas.toDataURL('image/png');
      const id = `user-${Date.now()}`;
      const createdAvatar = {
        _id: id,
        url: jpegUrl,
        name: id,
        x: 0,
        y: 0,
        scaleX: 0.4,
        scaleY: 0.4,
        offsetX: 0,
        offsetY: 0,
        rotation: 0,
        skewX: 0,
        skewY: 0
      };

      dispatch(chooseAvatar(createdAvatar));
      dispatch(addChosenAvatar(createdAvatar));
    }

    setJpeg(jpegUrl);
  };

  useEffect(() => {
    window.mobilecheck = function() {
      let check = false;
      (function(a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    };
    if (!window.mobilecheck()) {
      setIsMobile(true);
    }
  }, [isMobile]);

  useEffect(() => {
    (async () => {
      await dispatch(getAvatars());
    })();
  }, [dispatch]);

  const savePhotoToAWS = useCallback(
    async jpeg => {
      const body = { base64: jpeg };
      if (user) {
        body.id = user._id;
      }
      try {
        const result = await avatarApi.post('/upload/cloudinary', body);
      } catch (error) {
        console.error(error);
      }
    },
    [user]
  );

  const goBack = () => {
    const previous = screen.previous - 1;
    const current = screen.previous;
    const next = screen.current;

    switch (screen.previous) {
      case 1:
        window.location.href = '/avatar-generator';
        break;
      case 2:
        setScreen({ ...screen, previous, current, next });
        break;
      case 3:
        setScreen({ ...screen, previous, current, next });
        break;
      case 4:
        setScreen({ ...screen, previous, current, next });
        break;
      default:
        return;
    }
  };

  const goNext = () => {
    const previous = screen.current;
    const current = screen.next;
    const next = screen.next + 1;

    switch (screen.next) {
      case 2:
        saveBase64();
        setScreen({ ...screen, previous, current, next });
        break;
      case 3:
        setScreen({ ...screen, previous, current, next });
        break;
      case 4:
        saveBase64();
        savePhotoToAWS(jpeg);
        setScreen({ ...screen, previous, current, next });
        break;
      case 5:
        setScreen({ ...screen, previous, current, next });
        break;
      default:
        return;
    }
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

  const addVibration = () => {
    window.navigator.vibrate(200);
  };

  if (isMobile)
    return (
      <h1>Sorry, you need to be on a mobile device to access this feature!</h1>
    );

  return (
    <Main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Avatar Generator</title>
        <meta
          name="description"
          content="Create your own avatar using HTML Canvas and tweet it!"
        />
      </Helmet>

      <Buttons>
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
      </Buttons>

      {screen.current === 1 && (
        <CanvasContainer>
          <CanvasCSS ref={canvasRef} width={640} height={1136} />

          <ToolsContainer>
            <EditTools canvasRef={canvasRef} scene={scene} />
          </ToolsContainer>
        </CanvasContainer>
      )}

      {screen.current === 2 && <AvatarList />}

      {screen.current === 3 && (
        <KonvaCanvas
          avatar={avatar}
          setKonva={setKonva}
          selectedAvatar={selectedAvatar}
        />
      )}

      {screen.current === 4 && (
        <ConfirmationScreen
          avatarImg={groupAvatarImg}
          goNext={goNext}
          goBack={goBack}
          screen={screen}
        />
      )}
    </Main>
  );
};

export default AvatarCanvas;
