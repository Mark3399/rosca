
import { Panel, Placeholder } from 'rsuite';
import { useEffect, useState } from 'react';

export function Locatii() {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 600px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 600px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return matches ? web() : mobile();

}

function mobile() {
    return < >
        <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
            <div style={{ backgroundColor: 'black', width: '92vw', margin: '5px', backgroundColor: '#f7f7fa', borderRadius: '15px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
                    <img src="amiral.png" style={{
                        width: '100%',
                        height: "270px",
                        borderRadius: '15px'
                    }} />
                    <div style={{ margin: '15px' }}><h2>Helen</h2></div>
                    <Panel header="Capacitate" style={{ backgroundColor: 'white', margin: '5px', width: '90%' }}>
                        <Placeholder.Paragraph />
                    </ Panel>
                    <Panel header="Locatie" style={{ backgroundColor: 'white', margin: '5px', width: '90%' }}>
                        <Placeholder.Paragraph />
                    </ Panel>
                    <Panel header="Pret" style={{ backgroundColor: 'white', margin: '5px', width: '90%' }}>
                        <Placeholder.Paragraph />
                    </ Panel>

                </div>

            </div>
            <div style={{ backgroundColor: 'black', width: '92vw', margin: '5px', backgroundColor: '#f7f7fa', borderRadius: '15px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
                    <img src="amiral.png" style={{
                        width: '100%',
                        height: "270px",
                        borderRadius: '15px'
                    }} />
                    <div style={{ margin: '15px' }}><h2>Helen</h2></div>
                    <Panel header="Capacitate" style={{ backgroundColor: 'white', margin: '5px', width: '90%' }}>
                        <Placeholder.Paragraph />
                    </ Panel>
                    <Panel header="Locatie" style={{ backgroundColor: 'white', margin: '5px', width: '90%' }}>
                        <Placeholder.Paragraph />
                    </ Panel>
                    <Panel header="Pret" style={{ backgroundColor: 'white', margin: '5px', width: '90%' }}>
                        <Placeholder.Paragraph />
                    </ Panel>

                </div>

            </div>
            <div style={{ backgroundColor: 'black', width: '92vw', margin: '5px', backgroundColor: '#f7f7fa', borderRadius: '15px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
                    <img src="amiral.png" style={{
                        width: '100%',
                        height: "270px",
                        borderRadius: '15px'
                    }} />
                    <div style={{ margin: '15px' }}><h2>Helen</h2></div>
                    <Panel header="Capacitate" style={{ backgroundColor: 'white', margin: '5px', width: '90%' }}>
                        <Placeholder.Paragraph />
                    </ Panel>
                    <Panel header="Locatie" style={{ backgroundColor: 'white', margin: '5px', width: '90%' }}>
                        <Placeholder.Paragraph />
                    </ Panel>
                    <Panel header="Pret" style={{ backgroundColor: 'white', margin: '5px', width: '90%' }}>
                        <Placeholder.Paragraph />
                    </ Panel>

                </div>

            </div>


        </div>
    </>
}

function web() {
    return < >
        <div style={{ display: 'flex', justifyContent: 'space-around', }}>
            <div style={{ backgroundColor: 'black', width: '33vw', height: '92vh', margin: '5px', backgroundColor: '#f7f7fa', borderRadius: '15px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
                    <img src="amiral.png" style={{
                        width: '100%',
                        height: "270px",
                        borderRadius: '15px'
                    }} />
                    <div style={{ margin: '15px' }}><h2>Helen</h2></div>
                    <Panel header="Capacitate" style={{ backgroundColor: 'white', margin: '5px', width: '30vw' }}>
                        <Placeholder.Paragraph />
                    </ Panel>
                    <Panel header="Locatie" style={{ backgroundColor: 'white', margin: '5px', width: '30vw' }}>
                        <Placeholder.Paragraph />
                    </ Panel>
                    <Panel header="Pret" style={{ backgroundColor: 'white', margin: '5px', width: '30vw' }}>
                        <Placeholder.Paragraph />
                    </ Panel>

                </div>

            </div>

            <div style={{ backgroundColor: 'black', width: '33vw', height: '92vh', margin: '5px', backgroundColor: '#f7f7fa', borderRadius: '15px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
                    <img src="avagarden.png" style={{
                        width: '100%',
                        height: "270px",
                        borderRadius: '15px'
                    }} />
                    <div style={{ margin: '15px' }}><h2>Avagarden</h2></div>
                    <Panel header="Capacitate" style={{ backgroundColor: 'white', margin: '5px', width: '30vw' }}>
                        <Placeholder.Paragraph />
                    </ Panel>
                    <Panel header="Locatie" style={{ backgroundColor: 'white', margin: '5px', width: '30vw' }}>
                        <Placeholder.Paragraph />
                    </ Panel>
                    <Panel header="Pret" style={{ backgroundColor: 'white', margin: '5px', width: '30vw' }}>
                        <Placeholder.Paragraph />
                    </ Panel>

                </div>

            </div>

            <div style={{ backgroundColor: 'black', width: '33vw', height: '92vh', margin: '5px', backgroundColor: '#f7f7fa', borderRadius: '15px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
                    <img src="helen.png" style={{
                        width: '100%',
                        height: "270px",
                        borderRadius: '15px'
                    }} />
                    <div style={{ margin: '15px' }}><h2>Amiral</h2></div>
                    <Panel header="Capacitate" style={{ backgroundColor: 'white', margin: '5px', width: '30vw' }}>
                        <Placeholder.Paragraph />
                    </ Panel>
                    <Panel header="Locatie" style={{ backgroundColor: 'white', margin: '5px', width: '30vw' }}>
                        <Placeholder.Paragraph />
                    </ Panel>
                    <Panel header="Pret" style={{ backgroundColor: 'white', margin: '5px', width: '30vw' }}>
                        <Placeholder.Paragraph />
                    </ Panel>

                </div>

            </div>

        </div>
    </>
}