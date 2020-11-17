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

const DarkNetFox = ({ id, go }) => {
	return(
	<Panel id={id} >
		<PanelHeader>
			<Div className="head">
				Автор проекта
			</Div>
		</PanelHeader>

        <Div className="test">
            <Cell className="name" before={<Avatar src="https://sun9-39.userapi.com/RPfNtX7HD3q8KyICBKyC8nGZg_tdttuNdf6TBg/Al4J8ud2c-g.jpg"/>} description='17 лет, Омск'>
                <Div className="dnf_info">
                {`Антошкин Сергей`}
                </Div>
            </Cell>
        </Div>

        <Div className="bt_" />

        <Div className="about_info_dnf">
            <Div className="dnf_contacts">Контакты</Div>
            <Div className="dnf_contacts_BUTTONS">
                <Button stretched  style={{ marginRight: 8 }} mode="commerce" size="l" onClick={() => {
                    window.open("https://www.instagram.com/the_darknetfox/");
                }}>
                    Instagram
                </Button>
                <Button stretched style={{ marginRight: 8 }} size="l" onClick={() => {
                    window.open("https://t.me/darknetfox");
                }}>
                    Telegram
                </Button>
                <Button stretched style={{ marginRight: 8 }} size="l" onClick={() => {
                    window.open("https://vk.com/id407464535");
                }}>
                    ВКонтакте - 1
                </Button>
                <Button stretched style={{ marginRight: 8 }} size="l" onClick={() => {
                    window.open("https://vk.com/darknetfox");
                }}>
                    ВКонтакте - 2
                </Button>
            </Div>
        </Div>

        <Div className="bb_" />

		<Div className="tut_navernoe_chtoto_budet">
			Тут наверное что-то будет...
		</Div>

        <Div className="test">
			<Div className="info" onClick={go} data-to="home">
				Домой
			</Div>
		</Div>
	</Panel >
	)
};

export default DarkNetFox;