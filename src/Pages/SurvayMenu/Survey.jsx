// import React from 'react';

import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Componants/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useSurvey from "../../hooks/useSurvey";
import MenuItem from "../Shared/MenuItem/MenuItem";

const Survey = () => {
    const [tabIndex,setTabIndex] = useState(0);
    const[servey]= useSurvey();
     
    const Phone = servey.filter(item =>item.category === 'Phone');
    const Internet= servey.filter(item =>item.category === 'Internet');
    const HomeAutomation = servey.filter(item =>item.category === 'Home Automation');
    const WearableTechnology = servey.filter(item =>item.category === 'Wearable Technology');
    const CloudStorage = servey.filter(item =>item.category === 'Cloud Storage');
    return (
        <div>
            <Helmet><title>SurveySleuth | Survey</title></Helmet>
           <SectionTitle heading={"Here all Survey"} subHeading={"Want to show this survey"}></SectionTitle>    
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>All</Tab>
    <Tab>Phone</Tab>
    <Tab>Internet</Tab>
    <Tab>Home Automation</Tab>
    <Tab>Wearable Technology</Tab>
    <Tab>Cloud Storage</Tab>
   
  </TabList>
  <TabPanel>
    <div  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5">
    {
         servey.map(item =><MenuItem key={item._id} item={item}></MenuItem>) 
    }
    </div>
  </TabPanel>
  <TabPanel>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
    {
         Phone.map(item =><MenuItem key={item._id} item={item}></MenuItem>) 
    }
    </div>
  </TabPanel>
  <TabPanel>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
    {
        Internet.map(item =><MenuItem key={item._id} item={item}></MenuItem>) 
    }
    </div>
  </TabPanel>
  <TabPanel>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
    {
        WearableTechnology.map(item =><MenuItem key={item._id} item={item}></MenuItem>) 
    }
    </div>
  </TabPanel>
  <TabPanel>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
    {
        HomeAutomation.map(item =><MenuItem key={item._id} item={item}></MenuItem>) 
    }
    </div>
  </TabPanel>
  <TabPanel>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
    {
        CloudStorage.map(item =><MenuItem key={item._id} item={item}></MenuItem>) 
    }
    </div>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Survey;