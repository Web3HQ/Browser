let core = require('../../../system_assets/modules/OhHaiBrowser.Core');

module.exports = function load(){
	let aboutPage = core.generateElement(`
	<div class='SettingsList'>
	        <center><img width="128px" src="../assets/imgs/logo.png"></center>
		<p>Browser Version</p>
		<span>${window.OhHaiBrowser.version}</span>

		<p>Update Status</p>
		<span>Update system isn't available, yet :(</span>

		<p>Join the community</p>
		<a href='javascript:window.OhHaiBrowser.tabs.activePage.navigate("https://discord.gg/DFYadQmv3E");'>Discord server</a>

	</div>`);



	return aboutPage;
};
