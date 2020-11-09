import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SetAlert(props) {
    const [state, setState] = React.useState({
        open: true
    });

    const { open } = state;
    const vertical = "top",
        horizontal = "right";

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setState({ open: false });
    };

    return (
        <div>            
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity={props.color}>
                    {props&&props.message}
                </Alert>
            </Snackbar>
        </div>
    );
}
