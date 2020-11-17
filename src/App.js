import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Home from "./panels/index"
import DarkNetFox from "./panels/DarkNetFox"

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
            }
        });
        bridge.send("VKWebAppResizeWindow", {"width": 800, "height": 1000});
        async function get_user() {
            var user_data = await bridge.send("VKWebAppGetUserInfo");
			setUser(user_data);
        }
        get_user();

	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel}>
			<DarkNetFox id='dnf' go={go} />
			<Home id='home' fetchedUser={fetchedUser} go={go} />
		</View>
	)
}

export default App;