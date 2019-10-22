import Grid           from '@material-ui/core/Grid';
import { WithStyles } from '@material-ui/core/styles';
import { Patient }    from 'generate';
import * as React     from "react";
import styles         from "../patientsDatabase/styles/PatientSearch.style";
export interface Props extends WithStyles<typeof styles> { }



interface IProps {
    info: Patient;
}


class Search  extends React.Component<IProps> {

    public state = {
        query:"",
        loading: false
    }

    public onSearchChange = e => {
        this.setState({
            query: e.target.value
        });
    }

   public getPatientSearchDetails = () => {
        fetch(`http://javadev.intesys.it:3310/oh-api/patients/search?code=`+ this.state.query)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    results: response.results,
                    loading: true
                });
                window.location.pathname = `/PatientDatabase/PatientDetails/` + this.state.query
               // console.log('patient detected', response);
            })
            .catch(error => {
                window.location.pathname = `/PageNotFound`
                //console.log('Error fetching and parsing data', error);
            });
    }



    public handleKeyDown = (e) => {

        if (e.key === 'Enter') {
                this.getPatientSearchDetails()
             //   window.location.pathname = `/PatientDatabase/PatientDetails/` + e.target.value
        }
    }


    public render() {
        const {classes} = this.props;
        return (
                <Grid container={true} item={true}  spacing={24}>
                    <Grid item={true} container={true}  >
                        <input
                            onChange={this.onSearchChange}
                            name="search"
                            onKeyPress={this.handleKeyDown}
                            placeholder="Search for Patient ID"
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