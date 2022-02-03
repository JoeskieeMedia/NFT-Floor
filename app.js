const { Client } = require("discord.js");
const client = new Client({intents: 32767})
const sdk = require("api")("@opensea/v1.0#1felivgkyk6vyw2");



client.on('ready', ()=>{
  const slug = client.user.username;
	const slugFormatted = slug.toLowerCase().replace(/\s+/g, "");

	 setInterval(() => {
    sdk["retrieving-collection-stats"]({
      collection_slug: `${slugFormatted}`,
    })
      .then((res) =>{
        
		client.user.setPresence({ activities: [{ name: ` OpenSea Floor is ${res.stats.floor_price}`, type: "WATCHING" }]})
          
	  })
      .catch((err) => console.error(err));
  }, 10000);
  
	
})
client.login("OTM4ODk5NjM1MDAxNTIwMTM5.YfxAbA.sBnNPO-wnqMn8QE6ypZDQmK91cU");
