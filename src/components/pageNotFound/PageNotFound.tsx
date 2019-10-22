import * as React from "react";
import Typography from "@material-ui/core/Typography";


class notFound extends React.Component {

    public render() {
        return (
            <div
                style={{
                        display: 'block',
                        margin: 'auto',
                        position: 'relative' }} >
                <Typography color="inherit" style={{fontSize: 250,
                    display: 'block',
                    color: 'red',
                    margin: 'auto',
                    position: 'relative',
                textAlign:'center'}}  >
                    404
                </Typography>
                <Typography color="inherit" style={{fontSize: 100,
                    display: 'block',
                    margin: 'auto',
                    position: 'relative',
                    textAlign:'center'}}  >
                    PAGE NOT FOUND
                </Typography>

        </div>
        );
    }
}

export default notFound;