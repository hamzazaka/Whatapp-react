import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, Search, SearchOutlined } from '@material-ui/icons';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar_header">
            <Avatar/>
            <div className="sidebar_headerRight">
                <IconButton>
                <DonutLarge/>
                </IconButton>
                <IconButton>
                <Chat/>
                </IconButton>
                <IconButton>
                <MoreVert/>
                </IconButton>
            </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                <SearchOutlined/>
                <input type="text" placeholder='Search or Start a new Chat' />
                </div>
            </div>

            <div className="sidebar_chats">

            </div>
        </div>
    )
}
