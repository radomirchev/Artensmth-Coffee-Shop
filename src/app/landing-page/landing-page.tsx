import { IgrButton, IgrIconButton, IgrNavbar } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './landing-page.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function LandingPage() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("column-layout landing-page-container")}>
        <IgrNavbar className={classes("landing-page-nav-bar")}>
          <div className={classes("row-layout group")}>
            <div onClick={() => navigate(`/landing-page/landing-page-content`)} className={classes("row-layout app-logo")}>
              <span className={classes("material-icons app-icon")}>
                <span>coffee</span>
              </span>
              <h6 className={classes("app-title")}>
                <span>Artisanal Coffee</span>
              </h6>
            </div>
            <IgrButton variant="flat" type="button" className={classes("home-nav-button")}>
              <span>Home</span>
            </IgrButton>
            <IgrButton variant="flat" type="button" className={classes("home-nav-button")}>
              <span>How it Works</span>
            </IgrButton>
            <IgrButton variant="flat" type="button" className={classes("home-nav-button")}>
              <span>Pricing</span>
            </IgrButton>
            <IgrButton variant="flat" type="button" className={classes("home-nav-button")}>
              <span>Dashboard</span>
            </IgrButton>
            <IgrButton variant="flat" type="button" className={classes("home-nav-button")}>
              <span>Inventory</span>
            </IgrButton>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrIconButton variant="flat" className={classes("search-icon")}>
              <span className={classes("material-icons icon")}>
                <span>search</span>
              </span>
            </IgrIconButton>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrIconButton variant="flat" className={classes("search-icon")}>
              <span className={classes("material-icons icon")}>
                <span>perm_identity</span>
              </span>
            </IgrIconButton>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrIconButton variant="flat" className={classes("search-icon")}>
              <span className={classes("material-icons icon")}>
                <span>shopping_cart</span>
              </span>
            </IgrIconButton>
          </div>
        </IgrNavbar>
        <div className={classes("landing-page-container_1")}>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
