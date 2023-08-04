import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { contract, getCampaigns ,getSubscriptions} = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    console.log('fffff111')

    const data = await getSubscriptions();
    console.log('fffff111222')

    console.log('fffff'+JSON.stringify(data))
    setCampaigns(data);
    console.log('fffff111222')
    setIsLoading(false);
  }

  useEffect(() => {

    if(contract) {
      fetchCampaigns()};
  }, [ contract]);

  return (
    <DisplayCampaigns 
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Home