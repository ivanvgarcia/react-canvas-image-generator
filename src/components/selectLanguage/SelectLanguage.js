import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as USIcon } from 'components/svgs/united-states.svg';
import { ReactComponent as JPIcon } from 'components/svgs/japan.svg';
import { Styles } from 'components/selectLanguage/styles';

const SelectLanguage = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  console.log(i18n);

  return (
    <div>
      <Styles.Select onClick={() => setOpen(!open)}>
        {i18n.languages[0] === 'en' ? <USIcon /> : <JPIcon></JPIcon>}
      </Styles.Select>

      {open && (
        <Styles.Options>
          {['en', 'ja'].map((lang, idx) => (
            <Styles.Flag key={idx} onClick={() => i18n.changeLanguage(lang)}>
              {lang === 'en' ? <USIcon></USIcon> : <JPIcon></JPIcon>}
            </Styles.Flag>
          ))}
        </Styles.Options>
      )}
    </div>
  );
};

export default SelectLanguage;
