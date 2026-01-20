import { IgrAvatar, IgrCalendar, IgrCard, IgrCardContent, IgrCardHeader, IgrList, IgrListItem } from '@infragistics/igniteui-react';
import { IgrPieChart, IgrPieChartModule } from '@infragistics/igniteui-react-charts';
import { useState } from 'react';
import { useGetCoffeeFlavorProfiles } from '../hooks/coffee-flavor-preferences-hooks';
import styles from './user-dashboard.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

IgrPieChartModule.register();

export default function UserDashboard() {
  const classes = createClassTransformer(styles);
  const date = new Date('10/26/2024 00:00:00');
  const [recentOrdersListSelectedItem, setRecentOrdersListSelectedItem] = useState<string | undefined>();
  const [subscriptionInfoListSelectedItem, setSubscriptionInfoListSelectedItem] = useState<string | undefined>();
  const { coffeeFlavorPreferencesCoffeeFlavorProfiles } = useGetCoffeeFlavorProfiles();

  return (
    <>
      <div className={classes("column-layout user-dashboard-container")}>
        <div className={classes("column-layout dashboard-content")}>
          <div className={classes("column-layout dashboard-header")}>
            <h4 className={classes("content")}>
              <span>My Coffee Dashboard</span>
            </h4>
            <p className={classes("typography__body-1 content")}>
              <span>Manage your subscription, view shipments, and explore your flavor profile.</span>
            </p>
          </div>
          <div className={classes("row-layout dashboard-metrics")}>
            <IgrCard className={classes("next-shipment-card")}>
              <IgrCardHeader>
                <div slot="thumbnail">
                  <IgrAvatar shape="circle" className={classes("next-shipment-icon")}>
                    <span className={classes("material-icons icon")}>
                      <span>local_shipping</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title">
                  <span>Next Shipment</span>
                </h3>
                <h5 slot="subtitle">
                  <span></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout next-shipment-content")}>
                  <h3 className={classes("content")}>
                    <span>Oct 26, 2024</span>
                  </h3>
                  <div className={classes("row-layout next-shipment-details")}>
                    <p className={classes("typography__subtitle-2 shipment-status")}>
                      <span>On Schedule</span>
                    </p>
                    <p className={classes("typography__body-2 content")}>
                      <span>Your next delivery is almost here!</span>
                    </p>
                  </div>
                </div>
              </IgrCardContent>
            </IgrCard>
            <IgrCard className={classes("next-shipment-card")}>
              <IgrCardHeader>
                <div slot="thumbnail">
                  <IgrAvatar shape="circle" className={classes("next-shipment-icon_1")}>
                    <span className={classes("material-icons icon_1")}>
                      <span>event</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title">
                  <span>Delivery Calendar</span>
                </h3>
                <h5 slot="subtitle">
                  <span></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout next-shipment-content")}>
                  <IgrCalendar hideHeader={true} headerOrientation="horizontal" value={date} className={classes("delivery-calendar")}></IgrCalendar>
                </div>
              </IgrCardContent>
            </IgrCard>
            <IgrCard className={classes("next-shipment-card")}>
              <IgrCardHeader>
                <div slot="thumbnail">
                  <IgrAvatar shape="circle" className={classes("next-shipment-icon_2")}>
                    <span className={classes("material-icons icon_2")}>
                      <span>water_drop</span>
                    </span>
                  </IgrAvatar>
                </div>
                <h3 slot="title">
                  <span>Coffee Flavor Profile</span>
                </h3>
                <h5 slot="subtitle">
                  <span></span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout next-shipment-content")}>
                  <div className={classes("group")}>
                    <IgrPieChart dataSource={coffeeFlavorPreferencesCoffeeFlavorProfiles} labelMemberPath valueMemberPath></IgrPieChart>
                  </div>
                </div>
              </IgrCardContent>
            </IgrCard>
          </div>
          <div className={classes("row-layout dashboard-statistics")}>
            <div className={classes("column-layout recent-orders-section")}>
              <div className={classes("column-layout dashboard-header")}>
                <h5 className={classes("content")}>
                  <span>Recent Orders</span>
                </h5>
                <p className={classes("typography__body-2 content")}>
                  <span>Your latest coffee deliveries</span>
                </p>
              </div>
              <IgrList className={classes("recent-orders-list")}>
                <div style={{ display: 'contents' }} onClick={() => setRecentOrdersListSelectedItem('0')}>
                  <IgrListItem selected={recentOrdersListSelectedItem != null && recentOrdersListSelectedItem === '0'}>
                    <div slot="start">
                      <IgrAvatar shape="circle" className={classes("order-1-avatar order-1-avatar_1")}>
                        <span className={classes("material-icons icon_3")}>
                          <span>coffee</span>
                        </span>
                      </IgrAvatar>
                    </div>
                    <div slot="title">Ethiopian Yirgacheffe</div>
                    <div slot="subtitle">Delivered Oct 10, 2024</div>
                  </IgrListItem>
                </div>
                <div style={{ display: 'contents' }} onClick={() => setRecentOrdersListSelectedItem('1')}>
                  <IgrListItem selected={recentOrdersListSelectedItem != null && recentOrdersListSelectedItem === '1'}>
                    <div slot="start">
                      <IgrAvatar shape="circle" className={classes("order-1-avatar order-1-avatar_2")}>
                        <span className={classes("material-icons icon_3")}>
                          <span>coffee</span>
                        </span>
                      </IgrAvatar>
                    </div>
                    <div slot="title">Brazilian Santos</div>
                    <div slot="subtitle">Delivered Sep 10, 2024</div>
                  </IgrListItem>
                </div>
              </IgrList>
            </div>
            <div className={classes("column-layout recent-orders-section")}>
              <div className={classes("column-layout dashboard-header")}>
                <h5 className={classes("content")}>
                  <span>Subscription Details</span>
                </h5>
                <p className={classes("typography__body-2 content")}>
                  <span>Your current plan and next billing date</span>
                </p>
              </div>
              <IgrList className={classes("recent-orders-list")}>
                <div style={{ display: 'contents' }} onClick={() => setSubscriptionInfoListSelectedItem('0')}>
                  <IgrListItem selected={subscriptionInfoListSelectedItem != null && subscriptionInfoListSelectedItem === '0'}>
                    <div slot="start">
                      <IgrAvatar shape="circle" className={classes("order-1-avatar order-1-avatar_3")}>
                        <span className={classes("material-icons icon_3")}>
                          <span>military_tech</span>
                        </span>
                      </IgrAvatar>
                    </div>
                    <div slot="title">Current Plan</div>
                    <div slot="subtitle">Enthusiast Brew</div>
                  </IgrListItem>
                </div>
                <div style={{ display: 'contents' }} onClick={() => setSubscriptionInfoListSelectedItem('1')}>
                  <IgrListItem selected={subscriptionInfoListSelectedItem != null && subscriptionInfoListSelectedItem === '1'}>
                    <div slot="start">
                      <IgrAvatar shape="circle" className={classes("order-1-avatar order-1-avatar_4")}>
                        <span className={classes("material-icons icon_3")}>
                          <span>payment</span>
                        </span>
                      </IgrAvatar>
                    </div>
                    <div slot="title">Next Billing Date</div>
                    <div slot="subtitle">Oct 26, 2024</div>
                  </IgrListItem>
                </div>
              </IgrList>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
