import React from "react";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { CheckOutHeader } from "../Address/CheckOutHeader";
import Style from "./payment.module.css";
import { Card } from "./paymentComponent/Card";
import { Cod } from "./paymentComponent/Cod";
import { GooglePay } from "./paymentComponent/GooglePay";
import { Upi } from "./paymentComponent/Upi";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export const Payment = () => {
  const [cartEdit, setCartEdit] = useState(false);
  const [detail, setDetail] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleEdit = () => {
    setCartEdit(true);
  };
  const handleDetail = () => {
    setDetail(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div>
        <CheckOutHeader />
      </div>
      <div className={Style.pcnt}>
        <div>
          <h3 className={Style.phe}>CHOOSE PAYMENT METHOD</h3>
        </div>
        <div className={Style.Psidebar}>
          <div className={Style.pTab}>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderRight: 2,
                borderColor: "divider",
              }}
            >
              <Tab
                sx={{
                  borderBottom: 0.5,
                  borderColor: "#ebebeb",
                  fontSize: 15,
                }}
                label="Credit/Debit Card"
                {...a11yProps(0)}
              />

              <Tab
                sx={{ borderBottom: 0.5, borderColor: "#ebebeb", fontSize: 15 }}
                label="UPI"
                {...a11yProps(1)}
              />

              <Tab
                sx={{ borderBottom: 0.5, borderColor: "#ebebeb", fontSize: 15 }}
                label="GooglePay"
                {...a11yProps(2)}
              />

              <Tab
                sx={{ borderBottom: 0.5, borderColor: "#ebebeb", fontSize: 15 }}
                label="Net Banking"
                {...a11yProps(3)}
              />

              <Tab
                sx={{ borderBottom: 0.5, borderColor: "#ebebeb", fontSize: 15 }}
                label="Mobile Wallets"
                {...a11yProps(4)}
              />

              <Tab
                sx={{ borderBottom: 0.5, borderColor: "#ebebeb", fontSize: 15 }}
                label="Cash on Delivery"
                {...a11yProps(5)}
              />

              <Tab label="Gift Card" sx={{ fontSize: 15 }} {...a11yProps(6)} />
            </Tabs>
          </div>
          <div className={Style.pTabpanel}>
            <TabPanel value={value} index={0}>
              <Card />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Upi />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <GooglePay />
            </TabPanel>
            <TabPanel value={value} index={3}></TabPanel>
            <TabPanel value={value} index={4}></TabPanel>
            <TabPanel value={value} index={5}>
              <Cod />
            </TabPanel>
            <TabPanel value={value} index={6}>
              Item Seven
            </TabPanel>
          </div>
          <div className={Style.pDetail}>
            <div>
              <div className="bag">
                {detail ? (
                  <div>
                    <div>
                      <img src="" alt="" />
                    </div>
                    <div>
                      <div>
                        <p>Swiss Beauty Pro Primer With Vit-C & E</p>
                        <p>25ml</p>
                      </div>
                      <div>
                        <p>Qty : 1</p>
                        <p>
                          <span>399s</span>
                          <span>299d</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p>3 Items in your Bag</p>
                  </div>
                )}
                {cartEdit ? (
                  <div></div>
                ) : (
                  <button
                    style={{
                      backgroundColor: "#fff",
                      border: "none",
                      color: "#fc2779",
                      fontSize: "12px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      width: "auto",
                      margin: "-10px 0 0 0",
                    }}
                    onClick={handleEdit}
                  >
                    EDIT ^
                  </button>
                )}
              </div>
              <div className="priceDiv">
                <div>
                  <p>Sub Total</p>
                  <p>₹1647</p>
                </div>
                <div>
                  <p>Shipping Charge</p>
                  <p style={{ color: "#4db6ac" }}>Free</p>
                </div>
                <div style={{ paddingBottom: "10px" }}>
                  <p>Discount</p>
                  <p>₹79.9</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="grandiv">
              <h4>Grand Total</h4>
              <p>₹848</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};