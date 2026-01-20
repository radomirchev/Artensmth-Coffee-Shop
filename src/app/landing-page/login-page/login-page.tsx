import { IgrButton, IgrCheckbox, IgrInput } from '@infragistics/igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './login-page.module.css';
import createClassTransformer from '../../style-utils';
import '/src/app/base-view-styles.css';

export default function LoginPage() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();
  const [value, setValue] = useState<string | undefined>();
  const [value1, setValue1] = useState<string | undefined>();
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <div className={classes("row-layout login-page-container")}>
        <div className={classes("row-layout login-form-row-layout")}>
          <div className={classes("column-layout login-form-column-layout")}>
            <h4 className={classes("content")}>
              <span>Login</span>
            </h4>
            <div className={classes("column-layout login-form-fields")}>
              <IgrInput type="email" value={value} label="Email address" required={true} outlined={true} onChange={(e) => setValue(e.detail)} className={classes("login-email-input")}>
                <p slot="value-missing">This field is required</p>
              </IgrInput>
              <IgrInput type="password" value={value1} label="Password" required={true} outlined={true} onChange={(e) => setValue1(e.detail)} className={classes("login-email-input")}>
                <p slot="value-missing">This field is required</p>
              </IgrInput>
              <div className={classes("row-layout remember-me-forgot-pass")}>
                <IgrCheckbox labelPosition="after" checked={checked} onChange={(e) => setChecked(!!e.detail.checked)} className={classes("remember-me-checkbox")}>
                  <span>Remember me</span>
                </IgrCheckbox>
                <a target="_blank" className={classes("typography__body-2 forgot-password-link")}>
                  <span>Forgot your password?</span>
                </a>
              </div>
              <IgrButton type="button" className={classes("sign-in-button")}>
                <span>Sign in</span>
              </IgrButton>
            </div>
            <div className={classes("row-layout create-account-prompt")}>
              <p className={classes("typography__body-2 content")}>
                <span>Don't have an account?</span>
              </p>
              <a target="_blank" onClick={() => navigate(`/landing-page/register-page`)} className={classes("typography__body-2 create-account-link")}>
                <span>Create new account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
