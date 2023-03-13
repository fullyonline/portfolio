import React from 'react';
import { flexbox, fullWidth, innerFlexboxLeft } from '../styles/styles';
import { Box, Card, CardContent, Typography } from '@mui/material';

export function Impressum(): JSX.Element {
    return (
        <Box className={flexbox}>
            <Card className={fullWidth}>
                <CardContent className={innerFlexboxLeft}>
                    <Typography>
                        <strong>Kontakt-Adresse</strong>
                    </Typography>
                    <Typography>
                        Romano Sabbatella
                        <br />
                        Hochfelderstrasse 17b
                        <br />
                        8173 Neerach
                        <br />
                        Schweiz
                    </Typography>
                    <Typography>
                        E-Mail:
                        <br />
                        romano_sabbi_1993@hotmail.com
                    </Typography>
                    <br />
                    <br />
                    <Typography>
                        <strong>Haftungsausschluss</strong>
                    </Typography>
                    <Typography>
                        Der Autor &uuml;bernimmt keinerlei Gew&auml;hr hinsichtlich der inhaltlichen Richtigkeit,
                        Genauigkeit, Aktualit&auml;t, Zuverl&auml;ssigkeit und Vollst&auml;ndigkeit der Informationen.
                    </Typography>
                    <Typography>
                        Haftungsanspr&uuml;che gegen den Autor wegen Sch&auml;den materieller oder immaterieller Art,
                        welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der ver&ouml;ffentlichten
                        Informationen, durch Missbrauch der Verbindung oder durch technische St&ouml;rungen entstanden
                        sind, werden ausgeschlossen.
                    </Typography>
                    <Typography>
                        Alle Angebote sind unverbindlich. Der Autor beh&auml;lt es sich ausdr&uuml;cklich vor, Teile der
                        Seiten oder das gesamte Angebot ohne besondere Ank&uuml;ndigung zu ver&auml;ndern, zu
                        erg&auml;nzen, zu l&ouml;schen oder die Ver&ouml;ffentlichung zeitweise oder endg&uuml;ltig
                        einzustellen.
                    </Typography>
                    <br />
                    <br />
                    <Typography>
                        <strong>Haftungsausschluss f&uuml;r Links</strong>
                    </Typography>
                    <Typography>
                        Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es
                        wird jegliche Verantwortung f&uuml;r solche Webseiten abgelehnt. Der Zugriff und die Nutzung
                        solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.
                    </Typography>
                    <br />
                    <br />
                    <Typography>
                        <strong>Urheberrechte</strong>
                    </Typography>
                    <Typography>
                        Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser
                        Website, geh&ouml;ren ausschliesslich <strong>Romano Sabbatella</strong> oder den speziell
                        genannten Rechteinhabern. F&uuml;r die Reproduktion jeglicher Elemente ist die schriftliche
                        Zustimmung des Urheberrechtstr&auml;gers im Voraus einzuholen.
                    </Typography>
                    <br />
                    <Typography>
                        <strong>Quelle:</strong>
                    </Typography>
                    <a href="https://www.swissanwalt.ch" target="_blank" rel="noopener noreferrer">
                        <Typography>SwissAnwalt</Typography>
                    </a>
                </CardContent>
            </Card>
        </Box>
    );
}
