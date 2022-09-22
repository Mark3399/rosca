
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import PhoneIcon from '@rsuite/icons/Phone';

export function Navbar1({ changeBody }) {

    return (
        <Navbar>
            <Nav >

                <Nav.Item icon={<HomeIcon />} onSelect={() => changeBody('acasa')}>Acasa</Nav.Item>
                <Nav.Item onClick={() => changeBody('locatii')}>Locatii</Nav.Item>
                <Nav.Item onClick={() => changeBody('meniuri')}>Meniuri</Nav.Item>
            </Nav>
            <Nav pullRight disabled>
                <Nav.Item disabled icon={<PhoneIcon />}>0770123123</Nav.Item>
            </Nav>
        </Navbar>)
}