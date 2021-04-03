import React from 'react'
import "./NavBar.scss"
import { Navbar } from 'rsuite';
import { Nav } from 'rsuite';
import { Dropdown } from 'rsuite';
import { Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'

export default function NavBar({ onSelect, activeKey, ...props }) {
    return (
        <Navbar appearance={'inverse'}  {...props}>
            <Navbar.Header>
                <a href="#" className="navbar-brand logo">
                    NAVBAR
              </a>
            </Navbar.Header>
            <Navbar.Body>
                <Nav onSelect={onSelect} activeKey={activeKey}>
                    <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
                        Home
                </Nav.Item>
                    <Nav.Item eventKey="2">Label</Nav.Item>
                    <Nav.Item eventKey="3">Label</Nav.Item>
                    <Dropdown title="Label">
                        <Dropdown.Item eventKey="4">Label</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Label</Dropdown.Item>
                        <Dropdown.Item eventKey="6">Label</Dropdown.Item>
                    </Dropdown>
                </Nav>
                <Nav pullRight>
                    <Nav.Item icon={<Icon icon="cog" />}>Configurações</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    )
}