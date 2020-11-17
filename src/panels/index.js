import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import "./css/index.css";

const Home = ({ id, go, fetchedUser }) => {
	return(
	<Panel id={id} >
		<PanelHeader>
			<Div className="head">
				DNF/APP
			</Div>
		</PanelHeader>

		{fetchedUser &&
			<Div className="test">
				<Cell className="name" before={fetchedUser.photo_200 ? 
				<Avatar src={fetchedUser.photo_200}/> : null} description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}>
					<Div className="test">
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
					</Div>
				</Cell>
			</Div>
		}
        <Div className="bt_" />

		<Div className="tut_navernoe_chtoto_budet">
			Тут наверное что-то будет...
		</Div>

		<Div className="test">
			<Div className="info" onClick={go} data-to="dnf">
				Автор
			</Div>
		</Div>

	</Panel >
	)
};

export default Home;