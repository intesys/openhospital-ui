import React, { Component } from "react";

// local imports
import classNames from "classnames";
import styles from "./styles/Spinner.style";

// material imports
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export interface Props extends WithStyles<typeof styles> {}

class Spinner extends Component<Props>{
	public render(){
		const { classes, title } = this.props;
		return(
			<Grid container={true} item={true} spacing={24} justify="center" className={classes.container}>
                <Grid >
                    <Typography  variant="inherit" className={classes.title}>
                        {title}
                    </Typography>
                </Grid>
                &emsp;
                <Grid className={classes.inputBody}>
                    <FormControl variant="outlined" className={classNames(classes.formField, classes.formFieldSelect)}>
                        <InputLabel
                            ref="0" // TODO must fix this ref value
                            htmlFor="​desease type"
                            classes={{
                                root: classes.formFieldInputLabel,
                                focused: classes.selectLabel,
                            }}>
                            Select type from the list below
                        </InputLabel>
                        <Select
                            input={
                                <OutlinedInput
                                    labelWidth="0"
                                    id="desease type"
                                    classes={{
                                        input: classes.formFieldSelectInput,
                                    }}/>
                            }>
                            <MenuItem value={10}>item1</MenuItem>
                            <MenuItem value={20}>item2</MenuItem>
                            <MenuItem value={30}>item3</MenuItem>
                            <MenuItem value={40}>item4</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
		)
	}
}

const styledComponent = withStyles(styles, { withTheme: true })(Spinner);
export default styledComponent;