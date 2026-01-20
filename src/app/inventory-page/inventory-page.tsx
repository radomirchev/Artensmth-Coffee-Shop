import { IgrBadge, IgrButton, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrIconButton, IgrList, IgrListHeader, IgrListItem, IgrRating, IgrSelect, IgrSelectItem } from '@infragistics/igniteui-react';
import { useState } from 'react';
import styles from './inventory-page.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function InventoryPage() {
  const classes = createClassTransformer(styles);
  const [stockLevelListSelectedItem, setStockLevelListSelectedItem] = useState<string | undefined>();
  const [categoryListSelectedItem, setCategoryListSelectedItem] = useState<string | undefined>();
  const [value, setValue] = useState<string>('1');
  const [value1, setValue1] = useState<number>(4);
  const [value2, setValue2] = useState<number>(5);
  const [value3, setValue3] = useState<number>(4);
  const [value4, setValue4] = useState<number>(4);
  const [value5, setValue5] = useState<number>(4);
  const [value6, setValue6] = useState<number>(5);

  return (
    <>
      <div className={classes("column-layout inventory-page-container")}>
        <div className={classes("row-layout inventory-section")}>
          <div className={classes("column-layout inventory-wrapper")}>
            <div className={classes("column-layout inventory-header")}>
              <h3 className={classes("content")}>
                <span>Coffee Inventory</span>
              </h3>
              <p className={classes("typography__body-1 content")}>
                <span>Track the stock levels of your favorite artisanal coffees.</span>
              </p>
            </div>
            <div className={classes("row-layout inventory-content")}>
              <div className={classes("column-layout product-filters")}>
                <div className={classes("column-layout inventory-header")}>
                  <IgrList className={classes("category-list")}>
                    <IgrListHeader>
                      <div>Category</div>
                    </IgrListHeader>
                    <div style={{ display: 'contents' }} onClick={() => setCategoryListSelectedItem('1')}>
                      <IgrListItem selected={categoryListSelectedItem != null && categoryListSelectedItem === '1'}>
                        <div slot="title">Single Origin</div>
                      </IgrListItem>
                    </div>
                    <div style={{ display: 'contents' }} onClick={() => setCategoryListSelectedItem('2')}>
                      <IgrListItem selected={categoryListSelectedItem != null && categoryListSelectedItem === '2'}>
                        <div slot="title">Blends</div>
                      </IgrListItem>
                    </div>
                    <div style={{ display: 'contents' }} onClick={() => setCategoryListSelectedItem('3')}>
                      <IgrListItem selected={categoryListSelectedItem != null && categoryListSelectedItem === '3'}>
                        <div slot="title">Decaf</div>
                      </IgrListItem>
                    </div>
                  </IgrList>
                  <a className={classes("typography__body-2 see-more-categories")}>
                    <span>See more</span>
                  </a>
                </div>
                <IgrList className={classes("category-list")}>
                  <IgrListHeader>
                    <div>Stock Level</div>
                  </IgrListHeader>
                  <div style={{ display: 'contents' }} onClick={() => setStockLevelListSelectedItem('1')}>
                    <IgrListItem selected={stockLevelListSelectedItem != null && stockLevelListSelectedItem === '1'}>
                      <div slot="title">High Stock</div>
                    </IgrListItem>
                  </div>
                  <div style={{ display: 'contents' }} onClick={() => setStockLevelListSelectedItem('2')}>
                    <IgrListItem selected={stockLevelListSelectedItem != null && stockLevelListSelectedItem === '2'}>
                      <div slot="title">Medium Stock</div>
                    </IgrListItem>
                  </div>
                  <div style={{ display: 'contents' }} onClick={() => setStockLevelListSelectedItem('3')}>
                    <IgrListItem selected={stockLevelListSelectedItem != null && stockLevelListSelectedItem === '3'}>
                      <div slot="title">Low Stock</div>
                    </IgrListItem>
                  </div>
                </IgrList>
              </div>
              <div className={classes("column-layout product-list-right-content")}>
                <div className={classes("row-layout product-list-sort")}>
                  <p className={classes("typography__body-1 content")}>
                    <span>Showing 1-5 of 5 results</span>
                  </p>
                  <IgrSelect outlined={false} label="Sort by" value={value} onChange={(e) => setValue(e.detail.value ?? '')} className={classes("sort-by-select")}>
                    <IgrSelectItem value="1" key="e949935b-0f89-4de8-8b21-38f3dd46385a">
                      <span>Featured</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="2" key="bd35f1b7-1759-4074-a3c0-8bc234963a92">
                      <span>Recently added</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="3" key="41bf5e40-7885-4bce-a915-ae76fb427598">
                      <span>Price low to high</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="4" key="2525ef6e-d76a-4610-b2aa-1b4406f94a02">
                      <span>Price high to low</span>
                    </IgrSelectItem>
                  </IgrSelect>
                </div>
                <div className={classes("row-layout product-cards")}>
                  <IgrCard className={classes("colombian-supremo")}>
                    <IgrCardMedia className={classes("media-content")}>
                      <img src="/src/assets/Auto%20generated%20image%20for%2081c9fd1d-eeec-4dbd-9bbe-93615b4521f2-22ae6cf1-6b64-4749-a440-423d420e7c97.png" alt="" className={classes("image")} />
                    </IgrCardMedia>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Colombian Supremo</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Smooth &amp; Balanced</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout colombian-supremo-content")}>
                        <div className={classes("row-layout colombian-supremo-rating")}>
                          <IgrRating value={value1} onChange={(e) => setValue1(e.detail)} className={classes("colombian-supremo-stars")}></IgrRating>
                          <p className={classes("typography__body-2 content")}>
                            <span>(150)</span>
                          </p>
                        </div>
                        <h6 className={classes("content")}>
                          <span>$14.99</span>
                        </h6>
                        <div className={classes("row-layout colombian-supremo-stock")}>
                          <IgrBadge variant="success" className={classes("colombian-supremo-stock-badge")}>
                            <span>In Stock</span>
                          </IgrBadge>
                          <IgrIconButton variant="flat" className={classes("colombian-supremo-edit")}>
                            <span className={classes("material-icons")}>
                              <span>edit</span>
                            </span>
                          </IgrIconButton>
                        </div>
                      </div>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")}>
                      <div style={{ display: 'contents' }} slot="start">
                        <IgrButton type="button" className={classes("colombian-supremo-add")}>
                          <span className={classes("material-icons")}>
                            <span>add_shopping_cart</span>
                          </span>
                          <span>Add to cart</span>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                  <IgrCard className={classes("colombian-supremo")}>
                    <IgrCardMedia className={classes("media-content")}>
                      <img src="/src/assets/Auto%20generated%20image%20for%2075baf07f-a995-475f-9e96-17d675f77884-eaf424a8-7f77-498f-a59c-0be1ee983c36.png" alt="" className={classes("image")} />
                    </IgrCardMedia>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Ethiopian Yirgacheffe</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Fruity &amp; Floral</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout colombian-supremo-content")}>
                        <div className={classes("row-layout colombian-supremo-rating")}>
                          <IgrRating value={value2} onChange={(e) => setValue2(e.detail)} className={classes("colombian-supremo-stars")}></IgrRating>
                          <p className={classes("typography__body-2 content")}>
                            <span>(200)</span>
                          </p>
                        </div>
                        <h6 className={classes("content")}>
                          <span>$16.50</span>
                        </h6>
                        <div className={classes("row-layout colombian-supremo-stock")}>
                          <IgrBadge variant="Warn" className={classes("colombian-supremo-stock-badge")}>
                            <span>Low Stock</span>
                          </IgrBadge>
                          <IgrIconButton variant="flat" className={classes("colombian-supremo-edit")}>
                            <span className={classes("material-icons")}>
                              <span>edit</span>
                            </span>
                          </IgrIconButton>
                        </div>
                      </div>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")}>
                      <div style={{ display: 'contents' }} slot="start">
                        <IgrButton type="button" className={classes("colombian-supremo-add")}>
                          <span className={classes("material-icons")}>
                            <span>add_shopping_cart</span>
                          </span>
                          <span>Add to cart</span>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                  <IgrCard className={classes("colombian-supremo")}>
                    <IgrCardMedia className={classes("media-content")}>
                      <img src="/src/assets/Auto%20generated%20image%20for%2057fdd465-7c81-412e-a772-b5da8e0abfd1-52789c2a-69cb-4032-9fee-396346452541.png" alt="" className={classes("image")} />
                    </IgrCardMedia>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Brazilian Santos</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Nutty &amp; Chocolatey</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout colombian-supremo-content")}>
                        <div className={classes("row-layout colombian-supremo-rating")}>
                          <IgrRating value={value3} onChange={(e) => setValue3(e.detail)} className={classes("colombian-supremo-stars")}></IgrRating>
                          <p className={classes("typography__body-2 content")}>
                            <span>(180)</span>
                          </p>
                        </div>
                        <h6 className={classes("content")}>
                          <span>$12.75</span>
                        </h6>
                        <div className={classes("row-layout colombian-supremo-stock")}>
                          <IgrBadge variant="success" className={classes("colombian-supremo-stock-badge")}>
                            <span>In Stock</span>
                          </IgrBadge>
                          <IgrIconButton variant="flat" className={classes("colombian-supremo-edit")}>
                            <span className={classes("material-icons")}>
                              <span>edit</span>
                            </span>
                          </IgrIconButton>
                        </div>
                      </div>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")}>
                      <div style={{ display: 'contents' }} slot="start">
                        <IgrButton type="button" className={classes("colombian-supremo-add")}>
                          <span className={classes("material-icons")}>
                            <span>add_shopping_cart</span>
                          </span>
                          <span>Add to cart</span>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                  <IgrCard className={classes("colombian-supremo")}>
                    <IgrCardMedia className={classes("media-content")}>
                      <img src="/src/assets/Auto%20generated%20image%20for%207485d9d3-3caa-4e2a-8f43-5537e2069b01-265ad33c-e657-4804-bf85-6bcaeb375f63.png" alt="" className={classes("image")} />
                    </IgrCardMedia>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Sumatran Mandheling</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Earthy &amp; Bold</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout colombian-supremo-content")}>
                        <div className={classes("row-layout colombian-supremo-rating")}>
                          <IgrRating value={value4} onChange={(e) => setValue4(e.detail)} className={classes("colombian-supremo-stars")}></IgrRating>
                          <p className={classes("typography__body-2 content")}>
                            <span>(100)</span>
                          </p>
                        </div>
                        <h6 className={classes("content")}>
                          <span>$15.50</span>
                        </h6>
                        <div className={classes("row-layout colombian-supremo-stock")}>
                          <IgrBadge variant="success" className={classes("colombian-supremo-stock-badge")}>
                            <span>In Stock</span>
                          </IgrBadge>
                          <IgrIconButton variant="flat" className={classes("colombian-supremo-edit")}>
                            <span className={classes("material-icons")}>
                              <span>edit</span>
                            </span>
                          </IgrIconButton>
                        </div>
                      </div>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")}>
                      <div style={{ display: 'contents' }} slot="start">
                        <IgrButton type="button" className={classes("colombian-supremo-add")}>
                          <span className={classes("material-icons")}>
                            <span>add_shopping_cart</span>
                          </span>
                          <span>Add to cart</span>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                  <IgrCard className={classes("colombian-supremo")}>
                    <IgrCardMedia className={classes("media-content")}>
                      <img src="/src/assets/Auto%20generated%20image%20for%20d0c9e75d-a576-4a9f-b745-88e6754de65f-6abd3d77-9d2e-4009-8385-6a994e1ae490.png" alt="" className={classes("image")} />
                    </IgrCardMedia>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Guatemalan Antigua</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Spicy &amp; Smoky</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout colombian-supremo-content")}>
                        <div className={classes("row-layout colombian-supremo-rating")}>
                          <IgrRating value={value5} onChange={(e) => setValue5(e.detail)} className={classes("colombian-supremo-stars")}></IgrRating>
                          <p className={classes("typography__body-2 content")}>
                            <span>(130)</span>
                          </p>
                        </div>
                        <h6 className={classes("content")}>
                          <span>$13.99</span>
                        </h6>
                        <div className={classes("row-layout colombian-supremo-stock")}>
                          <IgrBadge variant="success" className={classes("colombian-supremo-stock-badge")}>
                            <span>In Stock</span>
                          </IgrBadge>
                          <IgrIconButton variant="flat" className={classes("colombian-supremo-edit")}>
                            <span className={classes("material-icons")}>
                              <span>edit</span>
                            </span>
                          </IgrIconButton>
                        </div>
                      </div>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")}>
                      <div style={{ display: 'contents' }} slot="start">
                        <IgrButton type="button" className={classes("colombian-supremo-add")}>
                          <span className={classes("material-icons")}>
                            <span>add_shopping_cart</span>
                          </span>
                          <span>Add to cart</span>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                  <IgrCard className={classes("colombian-supremo")}>
                    <IgrCardMedia className={classes("media-content")}>
                      <img src="/src/assets/Auto%20generated%20image%20for%20137f0fcb-0cff-4d10-9f82-3c9b0fc5e760-922a71e3-cf20-42a6-b5e7-f5fa1c293ba6.png" alt="" className={classes("image")} />
                    </IgrCardMedia>
                    <IgrCardHeader>
                      <h3 slot="title">
                        <span>Kenyan AA</span>
                      </h3>
                      <h5 slot="subtitle">
                        <span>Bright &amp; Berry</span>
                      </h5>
                    </IgrCardHeader>
                    <IgrCardContent className={classes("body-content")}>
                      <div className={classes("column-layout colombian-supremo-content")}>
                        <div className={classes("row-layout colombian-supremo-rating")}>
                          <IgrRating value={value6} onChange={(e) => setValue6(e.detail)} className={classes("colombian-supremo-stars")}></IgrRating>
                          <p className={classes("typography__body-2 content")}>
                            <span>(190)</span>
                          </p>
                        </div>
                        <h6 className={classes("content")}>
                          <span>$17.25</span>
                        </h6>
                        <div className={classes("row-layout colombian-supremo-stock")}>
                          <IgrBadge variant="success" className={classes("colombian-supremo-stock-badge")}>
                            <span>In Stock</span>
                          </IgrBadge>
                          <IgrIconButton variant="flat" className={classes("colombian-supremo-edit")}>
                            <span className={classes("material-icons")}>
                              <span>edit</span>
                            </span>
                          </IgrIconButton>
                        </div>
                      </div>
                    </IgrCardContent>
                    <IgrCardActions className={classes("actions-content")}>
                      <div style={{ display: 'contents' }} slot="start">
                        <IgrButton type="button" className={classes("colombian-supremo-add")}>
                          <span className={classes("material-icons")}>
                            <span>add_shopping_cart</span>
                          </span>
                          <span>Add to cart</span>
                        </IgrButton>
                      </div>
                    </IgrCardActions>
                  </IgrCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
