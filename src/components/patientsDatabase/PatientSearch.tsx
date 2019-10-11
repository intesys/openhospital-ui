import Grid from '@material-ui/core/Grid';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import * as React from "react";
import Input from "@material-ui/core/Input";
import styles from './styles/PatientSearch.style';
export interface Props extends WithStyles<typeof styles> { }



class Search  extends React.Component<Props> {
    public state = {
        query: "",
        results: []
    }

    public getPatientSearchDetails = () => {
        fetch(`http://javadev.intesys.it:3310/oh-api/patients/`+ this.state.query)
            .then(({ data }) => {
                this.setState({
                    results: data.data
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    handleKeyDown = (e) => {
        this.setState({
            query: this.search.value
        });
        if (e.key === 'Enter') {
            this.getPatientSearchDetails()
            window.location.pathname = `/PatientDatabase/PatientDetails/`+ this.state.query
        }
    }


    public render() {

        return (

                <Grid container={true} item={true}  spacing={24}>
                    <Grid item={true} container={true}  >
                        <input
                            id="patient ID"
                            placeholder="Search for Patient ID, Patient name..."
                            ref={input => this.search = input}
                            onKeyPress={this.handleKeyDown}
                            margin="normal"
                            type="search"
                            style={{width:"inherit", padding:15,borderRadius:10,borderWidth: 1}}
                        />

                    </Grid>
                </Grid>


        )
    }
}

export default Search