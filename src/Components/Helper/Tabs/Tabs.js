import React, { Component } from 'react';
import Domestic from "../../Home/DomesticSearchBox";
import International from "../../Home/InternationalSearchBox";
import Hotel from "../../Home/Hotel";
import Train from "../../Home/Train";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MaterialIcon from "material-icons-react";
import "./tabs.css"

class CustomTabs extends Component {
    render() {
      return (
        <Tabs  
            defaultTab="Domestic"
            onChange={(tabId) => { console.log(tabId) }}
        >
          <TabList>
            <Tab tabFor="Domestic">
            <MaterialIcon
                  icon="airplanemode_active"
                  className="tabsIcon"
                  size="small"
                />
            پرواز داخلی
            </Tab>
            <Tab tabFor="International">
            <MaterialIcon
                  icon="language"
                  className="tabsIcon"
                  size="small"
                />
                پرواز خارجی
            </Tab>
            <Tab tabFor="Hotel">
            <MaterialIcon
                  icon="hotel"
                  className="tabsIcon"
                  size="small"
                />
            هتل</Tab>
            <Tab tabFor="Train">
            <MaterialIcon
                  icon="train"
                  className="tabsIcon"
                  size="small"
                />
            قطار</Tab>
          </TabList>
          <TabPanel tabId="Domestic">
            <Domestic />
          </TabPanel>
          <TabPanel tabId="International">
          <International />
          </TabPanel>
          <TabPanel tabId="Hotel">
            <Hotel/>
          </TabPanel>
          <TabPanel tabId="Train">
            <Train/>
          </TabPanel>
        </Tabs>
      );
    }
  }

  export default CustomTabs;
