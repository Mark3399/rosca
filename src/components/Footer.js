import { Panel, Placeholder } from 'rsuite';
import { useEffect, useState } from 'react';

export function Footer1() {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 600px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 600px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <>
            {matches ? <div style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#f7f7fa', height: '53vh'
            }}>
                <Panel header="Descriere" style={{ backgroundColor: 'white', margin: '5px', width: '30vw' }}>
                    <Placeholder.Paragraph />
                </ Panel>
                <Panel header="Beneficii" style={{ backgroundColor: 'white', margin: '5px', width: '30vw' }}>
                    <Placeholder.Paragraph />
                </Panel>
                <Panel header="Contact" style={{ backgroundColor: 'white', margin: '5px', width: '30vw' }}>
                    <Placeholder.Paragraph />
                </Panel>
            </div>
                :
                <div style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7fa',
                }}>
                    <Panel header="Descriere" style={{ backgroundColor: 'white', margin: '5px', width: '90vw' }}>
                        <Placeholder.Paragraph />
                    </ Panel>
                    <Panel header="Beneficii" style={{ backgroundColor: 'white', margin: '5px', width: '90vw' }}>
                        <Placeholder.Paragraph />
                    </Panel>
                    <Panel header="Contact" style={{ backgroundColor: 'white', margin: '5px', width: '90vw', }}>
                        <Placeholder.Paragraph />
                    </Panel>
                </div>
            }
        </>
    )
}