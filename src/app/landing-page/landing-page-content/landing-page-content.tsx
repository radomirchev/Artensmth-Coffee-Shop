import { IgrAvatar, IgrButton, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrList, IgrListItem } from '@infragistics/igniteui-react';
import { useState } from 'react';
import styles from './landing-page-content.module.css';
import createClassTransformer from '../../style-utils';
import '/src/app/base-view-styles.css';

export default function LandingPageContent() {
  const classes = createClassTransformer(styles);
  const [starterPlanBenefitsSelectedItem, setStarterPlanBenefitsSelectedItem] = useState<string | undefined>();
  const [enthusiastPlanBenefitsSelectedItem, setEnthusiastPlanBenefitsSelectedItem] = useState<string | undefined>();
  const [connoisseurPlanBenefitsSelectedItem, setConnoisseurPlanBenefitsSelectedItem] = useState<string | undefined>();

  return (
    <>
      <div className={classes("column-layout landing-page-content-container")}>
        <div className={classes("row-layout hero-section")}>
          <div className={classes("row-layout hero-section-wrapper")}>
            <div className={classes("column-layout hero-section-content")}>
              <h2 className={classes("content")}>
                <span>Artisanal Coffee, Delivered to Your Door</span>
              </h2>
              <h6 className={classes("content")}>
                <span>Experience the freshest roasts and unique flavors from around the world.</span>
              </h6>
              <div className={classes("column-layout hero-buttons")}>
                <div className={classes("row-layout hero-actions")}>
                  <IgrButton type="button" className={classes("main-action-button")}>
                    <span>Subscribe Now</span>
                  </IgrButton>
                  <IgrButton variant="outlined" type="button" className={classes("main-action-button")}>
                    <span>Learn More</span>
                  </IgrButton>
                </div>
                <p className={classes("typography__body-2 engage-statement")}>
                  <span>Join our community of coffee lovers and elevate your morning ritual.</span>
                </p>
              </div>
            </div>
            <img src="/src/assets/Auto%20generated%20image%20for%20b467b9ea-ff73-4450-b349-366393489b14-b33bdec7-a4cd-486b-93ad-f33973961e44.png" alt="" className={classes("hero-image")} />
          </div>
        </div>
        <div className={classes("row-layout how-it-works-section")}>
          <div className={classes("column-layout how-it-works-section-wrapper")}>
            <div className={classes("column-layout how-it-works-header")}>
              <h4 className={classes("content_1")}>
                <span>How It Works</span>
              </h4>
              <h6 className={classes("content_1")}>
                <span>Simple steps to your perfect cup</span>
              </h6>
            </div>
            <div className={classes("row-layout how-it-works-cards")}>
              <IgrCard className={classes("step-1-card")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span> </span>
                  </h3>
                  <h5 slot="subtitle">
                    <span> </span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout step-1-card-content")}>
                    <IgrAvatar shape="circle" className={classes("step-1-icon step-1-icon_1")}>
                      <span className={classes("material-icons icon")}>
                        <span>filter_vintage</span>
                      </span>
                    </IgrAvatar>
                    <h6 className={classes("content")}>
                      <span>Select Your Blend</span>
                    </h6>
                    <p className={classes("typography__body-1 content")}>
                      <span>Choose from our curated selection of single-origin and blended coffees.</span>
                    </p>
                  </div>
                </IgrCardContent>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{ display: 'contents' }} slot="start">
                    <IgrButton variant="flat" type="button" className={classes("step-1-button")}>
                      <span>Learn more</span>
                      <span className={classes("material-icons")}>
                        <span>arrow_right_alt</span>
                      </span>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
              <IgrCard className={classes("step-1-card")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span> </span>
                  </h3>
                  <h5 slot="subtitle">
                    <span> </span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout step-1-card-content")}>
                    <IgrAvatar shape="circle" className={classes("step-1-icon step-1-icon_2")}>
                      <span className={classes("material-icons icon")}>
                        <span>calendar_today</span>
                      </span>
                    </IgrAvatar>
                    <h6 className={classes("content")}>
                      <span>Set Your Schedule</span>
                    </h6>
                    <p className={classes("typography__body-1 content")}>
                      <span>Decide how often you want to receive fresh coffee at your door.</span>
                    </p>
                  </div>
                </IgrCardContent>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{ display: 'contents' }} slot="start">
                    <IgrButton variant="flat" type="button" className={classes("step-1-button")}>
                      <span>Learn more</span>
                      <span className={classes("material-icons")}>
                        <span>arrow_right_alt</span>
                      </span>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
              <IgrCard className={classes("step-1-card")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span> </span>
                  </h3>
                  <h5 slot="subtitle">
                    <span> </span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout step-1-card-content")}>
                    <IgrAvatar shape="circle" className={classes("step-1-icon step-1-icon_3")}>
                      <span className={classes("material-icons icon")}>
                        <span>local_shipping</span>
                      </span>
                    </IgrAvatar>
                    <h6 className={classes("content")}>
                      <span>Enjoy Fresh Coffee</span>
                    </h6>
                    <p className={classes("typography__body-1 content")}>
                      <span>Your freshly roasted coffee will arrive right at your doorstep.</span>
                    </p>
                  </div>
                </IgrCardContent>
                <IgrCardActions className={classes("actions-content")}>
                  <div style={{ display: 'contents' }} slot="start">
                    <IgrButton variant="flat" type="button" className={classes("step-1-button")}>
                      <span>Learn more</span>
                      <span className={classes("material-icons")}>
                        <span>arrow_right_alt</span>
                      </span>
                    </IgrButton>
                  </div>
                </IgrCardActions>
              </IgrCard>
            </div>
          </div>
        </div>
        <div className={classes("row-layout pricing-section")}>
          <div className={classes("column-layout how-it-works-section-wrapper")}>
            <div className={classes("column-layout how-it-works-header")}>
              <h4 className={classes("content_1")}>
                <span>Our Subscription Plans</span>
              </h4>
              <h6 className={classes("content_1")}>
                <span>Choose the perfect plan for your coffee needs</span>
              </h6>
            </div>
            <div className={classes("pricing-cards")}>
              <IgrCard className={classes("starter-plan-card")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span> </span>
                  </h3>
                  <h5 slot="subtitle">
                    <span> </span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout starter-plan-content")}>
                    <div className={classes("column-layout how-it-works-header")}>
                      <div className={classes("column-layout starter-plan-name-and-price")}>
                        <h5 className={classes("content_1")}>
                          <span>Starter Roast</span>
                        </h5>
                        <h2 className={classes("content_1")}>
                          <span>$19.99/month</span>
                        </h2>
                      </div>
                    </div>
                    <p className={classes("typography__body-1 content_1")}>
                      <span>Perfect for light coffee drinkers.</span>
                    </p>
                    <IgrList className={classes("starter-plan-benefits")}>
                      <div style={{ display: 'contents' }} onClick={() => setStarterPlanBenefitsSelectedItem('0')}>
                        <IgrListItem selected={starterPlanBenefitsSelectedItem != null && starterPlanBenefitsSelectedItem === '0'}>
                          <div slot="start">
                            <IgrAvatar shape="circle" className={classes("starter-plan-benefit-1-icon starter-plan-benefit-1-icon_1")}>
                              <span className={classes("material-icons")}>
                                <span>check</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div slot="title">1 bag of coffee per month</div>
                        </IgrListItem>
                      </div>
                      <div style={{ display: 'contents' }} onClick={() => setStarterPlanBenefitsSelectedItem('1')}>
                        <IgrListItem selected={starterPlanBenefitsSelectedItem != null && starterPlanBenefitsSelectedItem === '1'}>
                          <div slot="start">
                            <IgrAvatar shape="circle" className={classes("starter-plan-benefit-1-icon starter-plan-benefit-1-icon_2")}>
                              <span className={classes("material-icons")}>
                                <span>check</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div slot="title">Curated blend</div>
                        </IgrListItem>
                      </div>
                      <div style={{ display: 'contents' }} onClick={() => setStarterPlanBenefitsSelectedItem('2')}>
                        <IgrListItem selected={starterPlanBenefitsSelectedItem != null && starterPlanBenefitsSelectedItem === '2'}>
                          <div slot="start">
                            <IgrAvatar shape="circle" className={classes("starter-plan-benefit-1-icon starter-plan-benefit-1-icon_3")}>
                              <span className={classes("material-icons")}>
                                <span>check</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div slot="title">Free shipping</div>
                        </IgrListItem>
                      </div>
                    </IgrList>
                    <IgrButton type="button" className={classes("step-1-button")}>
                      <span>Choose Plan</span>
                    </IgrButton>
                  </div>
                </IgrCardContent>
              </IgrCard>
              <IgrCard className={classes("starter-plan-card")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span> </span>
                  </h3>
                  <h5 slot="subtitle">
                    <span> </span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout starter-plan-content")}>
                    <div className={classes("column-layout how-it-works-header")}>
                      <div className={classes("column-layout starter-plan-name-and-price")}>
                        <h5 className={classes("content_1")}>
                          <span>Enthusiast Brew</span>
                        </h5>
                        <h2 className={classes("content_1")}>
                          <span>$34.99/month</span>
                        </h2>
                      </div>
                    </div>
                    <p className={classes("typography__body-1 content_1")}>
                      <span>For those who love to explore diverse flavors.</span>
                    </p>
                    <IgrList className={classes("starter-plan-benefits")}>
                      <div style={{ display: 'contents' }} onClick={() => setEnthusiastPlanBenefitsSelectedItem('0')}>
                        <IgrListItem selected={enthusiastPlanBenefitsSelectedItem != null && enthusiastPlanBenefitsSelectedItem === '0'}>
                          <div slot="start">
                            <IgrAvatar shape="circle" className={classes("starter-plan-benefit-1-icon starter-plan-benefit-1-icon_4")}>
                              <span className={classes("material-icons")}>
                                <span>check</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div slot="title">2 bags of coffee per month</div>
                        </IgrListItem>
                      </div>
                      <div style={{ display: 'contents' }} onClick={() => setEnthusiastPlanBenefitsSelectedItem('1')}>
                        <IgrListItem selected={enthusiastPlanBenefitsSelectedItem != null && enthusiastPlanBenefitsSelectedItem === '1'}>
                          <div slot="start">
                            <IgrAvatar shape="circle" className={classes("starter-plan-benefit-1-icon starter-plan-benefit-1-icon_5")}>
                              <span className={classes("material-icons")}>
                                <span>check</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div slot="title">Customizable blends</div>
                        </IgrListItem>
                      </div>
                      <div style={{ display: 'contents' }} onClick={() => setEnthusiastPlanBenefitsSelectedItem('2')}>
                        <IgrListItem selected={enthusiastPlanBenefitsSelectedItem != null && enthusiastPlanBenefitsSelectedItem === '2'}>
                          <div slot="start">
                            <IgrAvatar shape="circle" className={classes("starter-plan-benefit-1-icon starter-plan-benefit-1-icon_6")}>
                              <span className={classes("material-icons")}>
                                <span>check</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div slot="title">Early access to new roasts</div>
                        </IgrListItem>
                      </div>
                    </IgrList>
                    <IgrButton type="button" className={classes("step-1-button")}>
                      <span>Choose Plan</span>
                    </IgrButton>
                  </div>
                </IgrCardContent>
              </IgrCard>
              <IgrCard className={classes("starter-plan-card")}>
                <IgrCardHeader>
                  <h3 slot="title">
                    <span> </span>
                  </h3>
                  <h5 slot="subtitle">
                    <span> </span>
                  </h5>
                </IgrCardHeader>
                <IgrCardContent className={classes("body-content")}>
                  <div className={classes("column-layout starter-plan-content")}>
                    <div className={classes("column-layout how-it-works-header")}>
                      <div className={classes("column-layout starter-plan-name-and-price")}>
                        <h5 className={classes("content_1")}>
                          <span>Connoisseur Collection</span>
                        </h5>
                        <h2 className={classes("content_1")}>
                          <span>$49.99/month</span>
                        </h2>
                      </div>
                    </div>
                    <p className={classes("typography__body-1 content_1")}>
                      <span>The ultimate experience for true coffee connoisseurs.</span>
                    </p>
                    <IgrList className={classes("starter-plan-benefits")}>
                      <div style={{ display: 'contents' }} onClick={() => setConnoisseurPlanBenefitsSelectedItem('0')}>
                        <IgrListItem selected={connoisseurPlanBenefitsSelectedItem != null && connoisseurPlanBenefitsSelectedItem === '0'}>
                          <div slot="start">
                            <IgrAvatar shape="circle" className={classes("starter-plan-benefit-1-icon starter-plan-benefit-1-icon_7")}>
                              <span className={classes("material-icons")}>
                                <span>check</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div slot="title">3 bags of rare &amp; exclusive coffees per month</div>
                        </IgrListItem>
                      </div>
                      <div style={{ display: 'contents' }} onClick={() => setConnoisseurPlanBenefitsSelectedItem('1')}>
                        <IgrListItem selected={connoisseurPlanBenefitsSelectedItem != null && connoisseurPlanBenefitsSelectedItem === '1'}>
                          <div slot="start">
                            <IgrAvatar shape="circle" className={classes("starter-plan-benefit-1-icon starter-plan-benefit-1-icon_8")}>
                              <span className={classes("material-icons")}>
                                <span>check</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div slot="title">Personalized flavor profile</div>
                        </IgrListItem>
                      </div>
                      <div style={{ display: 'contents' }} onClick={() => setConnoisseurPlanBenefitsSelectedItem('2')}>
                        <IgrListItem selected={connoisseurPlanBenefitsSelectedItem != null && connoisseurPlanBenefitsSelectedItem === '2'}>
                          <div slot="start">
                            <IgrAvatar shape="circle" className={classes("starter-plan-benefit-1-icon starter-plan-benefit-1-icon_9")}>
                              <span className={classes("material-icons")}>
                                <span>check</span>
                              </span>
                            </IgrAvatar>
                          </div>
                          <div slot="title">VIP customer support</div>
                        </IgrListItem>
                      </div>
                    </IgrList>
                    <IgrButton type="button" className={classes("step-1-button")}>
                      <span>Choose Plan</span>
                    </IgrButton>
                  </div>
                </IgrCardContent>
              </IgrCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
