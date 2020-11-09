import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {
    Grid,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Paper,
    Typography
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

const checkDetails=[
    {key:1, label:'Aasiya Jayavant', isActive:false},
    {key:2, label:'Luvleen Lawarence', isActive:false},
    {key:3, label:'Rey Mibourne', isActive:false},
    {key:4, label:'Cayla Brister', isActive:false},
    {key:5, label:'', isActive:false},
    {key:6, label:'', isActive:false},
    {key:7, label:'', isActive:false},
    {key:8, label:'', isActive:false},
    {key:9, label:'', isActive:false},
]

export default function CheckboxesGroup() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        aasiyaJayavant: false,
        luvleenLawarence: false,
        reyMibourne: false,
        caylaBrister: false,
        deveedaasNandi: false,
        obaseyChidy: false,
        xenieDolezelova: false,
        ezequielDengra: false,
        aaronAlmaraz: false,
        jelenaDenisova: false
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { aasiyaJayavant,
        luvleenLawarence,
        reyMibourne,
        caylaBrister,
        deveedaasNandi,
        obaseyChidy,
        xenieDolezelova,
        ezequielDengra,
        aaronAlmaraz,
        jelenaDenisova } = state;
    // const error = [aasiyaJayavant, luvleenLawarence, reyMibourne, caylaBrister, deveedaasNandi, obaseyChidy].filter((v) => v).length !== 2;
    const portugal = aasiyaJayavant || luvleenLawarence || reyMibourne || caylaBrister;
    const nicaragua = deveedaasNandi || obaseyChidy || xenieDolezelova || ezequielDengra;
    const marshallIslands = aaronAlmaraz || jelenaDenisova;
    const isNoValueSelected = aasiyaJayavant || luvleenLawarence || reyMibourne || caylaBrister || deveedaasNandi || obaseyChidy ||
        xenieDolezelova || ezequielDengra || aaronAlmaraz || jelenaDenisova;
    const noValueSelected = (
        <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
        ><Typography style={{top:'50%', position:'absolute'}} component='h3' variant='h5'>No Value Selected</Typography></Grid>
    )
    return (
        <>
            <Grid container item xs={12} sm={2} md={2}></Grid>
            <Grid container item xs={12} sm={4} md={4}>
                <Paper style={{ minWidth: '410px' }}>
                    <Grid item xs={10} sm={12} md={12}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <Typography component='h3' variant='h5'>Portugal</Typography>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={aasiyaJayavant} onChange={handleChange} name="aasiyaJayavant" />}
                                    label="Aasiya Jayavant"
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={luvleenLawarence} onChange={handleChange} name="luvleenLawarence" />}
                                    label="Luvleen Lawarence"
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={reyMibourne} onChange={handleChange} name="reyMibourne" />}
                                    label="Rey Mibourne"
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={caylaBrister} onChange={handleChange} name="caylaBrister" />}
                                    label="Cayla Brister"
                                />
                            </FormGroup>
                            <Typography component='h3' variant='h5'>Nicaragua</Typography>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={deveedaasNandi} onChange={handleChange} name="deveedaasNandi" />}
                                    label="Deveedaas Nandi"
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={obaseyChidy} onChange={handleChange} name="obaseyChidy" />}
                                    label="Obasey Chidy"
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={xenieDolezelova} onChange={handleChange} name="xenieDolezelova" />}
                                    label="Xenie Dolezelova"
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={ezequielDengra} onChange={handleChange} name="ezequielDengra" />}
                                    label="Ezequiel Dengra"
                                />
                            </FormGroup>
                            <Typography component='h3' variant='h5'>Marshall Islands</Typography>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={aaronAlmaraz} onChange={handleChange} name="aaronAlmaraz" />}
                                    label="Aaron Almaraz"
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={jelenaDenisova} onChange={handleChange} name="jelenaDenisova" />}
                                    label="Jelena Denisova"
                                />

                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Paper>
            </Grid>
            <Grid container item xs={10} sm={4} md={4}>

                <Paper style={{ width: '410px' }}>
                    {!isNoValueSelected ? noValueSelected : (<Grid item xs={10} sm={12} md={12} spacing={2} className={classes.formControl}>
                        {portugal && <Typography component='h3' variant='h5'>Portugal</Typography>}
                        {aasiyaJayavant && (<Alert 
                            icon={false}
                            onClose={() => setState({ ...state, aasiyaJayavant: false })}                            
                        >Aasiya Jayavant</Alert>)}<br/>
                        {luvleenLawarence && (<Alert
                            icon={false}
                            onClose={() => setState({ ...state, luvleenLawarence: false, })}
                        >Luvleen Lawarence</Alert>)}<br/>
                        {reyMibourne && (<Alert
                            icon={false}
                            onClose={() => setState({ ...state, reyMibourne: false, })}
                        >Rey Mibourne</Alert>)}<br/>
                        {caylaBrister && (<Alert
                            icon={false}
                            onClose={() => setState({ ...state, caylaBrister: false, })}
                        >Cayla Brister</Alert>)}<br/>
                        {nicaragua && <Typography component='h3' variant='h5'>Nicaragua</Typography>}
                        {deveedaasNandi && (<Alert
                            icon={false}
                            onClose={() => setState({ ...state, deveedaasNandi: false, })}
                        >Deveedaas Nandi</Alert>)}<br/>
                        {obaseyChidy && (<Alert
                            icon={false}
                            onClose={() => setState({ ...state, obaseyChidy: false, })}
                        >Obasey Chidy</Alert>)}<br/>
                        {xenieDolezelova && (<Alert
                            icon={false}
                            onClose={() => setState({ ...state, xenieDolezelova: false, })}
                        >Xenie Dolezelova</Alert>)}<br/>
                        {ezequielDengra && (<Alert
                            icon={false}
                            onClose={() => setState({ ...state, ezequielDengra: false, })}
                        >Ezequiel Dengra</Alert>)}<br/>
                        {marshallIslands && <Typography component='h3' variant='h5'>Marshall Islands</Typography>}
                        {aaronAlmaraz && (<Alert
                            icon={false}
                            onClose={() => setState({ ...state, aaronAlmaraz: false, })}
                        >Aaron Almaraz</Alert>)}<br/>
                        {jelenaDenisova && (<Alert
                            icon={false}
                            onClose={() => setState({ ...state, jelenaDenisova: false, })}
                        >Jelena Denisova</Alert>)}<br/>
                    </Grid>)}
                </Paper>
            </Grid>
            <Grid container item xs={12} sm={2} md={2}></Grid>
        </>
    );
}